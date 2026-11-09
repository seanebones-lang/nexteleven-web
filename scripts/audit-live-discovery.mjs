/**
 * Read-only live crawlability audit. Never changes SEO settings or submits URLs.
 * Run against the APPROVED production deployment: node scripts/audit-live-discovery.mjs
 * A generic-user-agent probe is not proof that Googlebot/OAI-SearchBot is permitted by
 * CDN/WAF; verify real crawler identities and Search Console separately.
 */
const ORIGIN = "https://www.nexteleven.dev";
const pages = [
  "/", "/build", "/presence", "/security", "/security/pricing", "/diagnosis",
  "/work", "/apps", "/frontdesk", "/referredbyai", "/about", "/answers",
  "/case-studies/jp-transmission", "/deadbolt",
];
const expectedPublic = [
  "/robots.txt", "/sitemap.xml", "/llms.txt",
  "/google5b6e77d17d9232a9.html",
  "/fc3468e4fee59492b384c5fb7e83b423.txt",
];
const errors = [];
const warnings = [];
const results = [];

async function get(path, options = {}) {
  const response = await fetch(ORIGIN + path, {
    redirect: "follow",
    headers: { "User-Agent": "NextEleven-Discovery-Audit/1.0" },
    signal: AbortSignal.timeout(15000),
    ...options,
  });
  const text = await response.text();
  return { response, text };
}
function tagWith(text, tagName, attr, value) {
  return [...text.matchAll(new RegExp(`<${tagName}\\b[^>]*>`, "gi"))].map(x => x[0])
    .find(tag => new RegExp(`\\b${attr}=["']${value}["']`, "i").test(tag));
}
function attribute(tag, attr) {
  return tag?.match(new RegExp(`\\b${attr}=["']([^"']+)["']`, "i"))?.[1];
}
for (const path of [...expectedPublic, ...pages]) {
  try {
    const { response, text } = await get(path);
    results.push({ path, status: response.status, final: response.url, bytes: text.length });
    if (response.status !== 200) { errors.push(`${path}: HTTP ${response.status}`); continue; }
    if (new URL(response.url).host !== new URL(ORIGIN).host) errors.push(`${path}: redirected outside canonical host: ${response.url}`);
    if (path === "/robots.txt") {
      if (!/user-agent:\s*\*/i.test(text) || !/allow:\s*\//i.test(text)) errors.push("robots.txt has no general Allow: / rule");
      if (!text.includes(ORIGIN + "/sitemap.xml")) errors.push("robots.txt does not advertise canonical sitemap");
    }
    if (path === "/sitemap.xml") {
      for (const route of pages) {
        if (!text.includes(`<loc>${ORIGIN}${route}</loc>`)) errors.push(`sitemap.xml omits ${route}`);
      }
    }
    if (path === "/llms.txt") {
      for (const route of ["/build", "/presence", "/referredbyai", "/security", "/answers"]) {
        if (!text.includes(ORIGIN + route)) errors.push(`llms.txt omits ${route}`);
      }
    }
    if (pages.includes(path)) {
      const h1Count = [...text.matchAll(/<h1\b/gi)].length;
      if (h1Count !== 1) errors.push(`${path}: expected one H1, found ${h1Count}`);
      const title = [...text.matchAll(/<title[^>]*>([^<]*)<\/title>/gi)][0]?.[1];
      if (!title || title.length < 12) errors.push(`${path}: missing/descriptive title`);
      const desc = tagWith(text, "meta", "name", "description");
      if (!attribute(desc, "content")) errors.push(`${path}: missing meta description`);
      const canonicalTag = tagWith(text, "link", "rel", "canonical");
      const canonical = attribute(canonicalTag, "href");
      if (canonical !== ORIGIN + path) errors.push(`${path}: canonical mismatch: ${canonical || "(missing)"}`);
      if (/noindex/i.test(response.headers.get("x-robots-tag") || "") || /<meta[^>]*noindex/i.test(text)) errors.push(`${path}: noindex detected`);
      const scripts = [...text.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
      if (!scripts.length) warnings.push(`${path}: no JSON-LD found (may be fine, but review)`);
      for (const s of scripts) {
        try { JSON.parse(s[1].replace(/&quot;/g, '"').replace(/&amp;/g,"&")); }
        catch { errors.push(`${path}: invalid JSON-LD script`); }
      }
    }
  } catch(e) { errors.push(`${path}: request failed: ${e.message}`); }
}
for (const ua of ["OAI-SearchBot", "Googlebot", "bingbot"]) {
  try {
    const { response } = await get("/", { headers: { "User-Agent": ua } });
    if (response.status !== 200) warnings.push(`Root returns ${response.status} for self-declared ${ua}; confirm WAF/CDN bot access`);
  } catch(e) { warnings.push(`Self-declared ${ua} probe failed: ${e.message}`); }
}
try {
  const response = await fetch("https://nexteleven.dev/", { redirect: "follow", signal: AbortSignal.timeout(15000) });
  if (response.url !== ORIGIN + "/") warnings.push(`Apex redirect/canonical unverified: ${response.url}`);
} catch(e) { warnings.push(`Apex-domain redirect check failed: ${e.message}`); }
console.log(JSON.stringify({ checkedAt: new Date().toISOString(), origin: ORIGIN, pagesChecked: pages.length, results, errors, warnings,
  caveat: "Only HTTP probes; actual indexing, AI recommendations and verified bot access must be checked in search engine tools and server/CDN logs." }, null, 2));
if (errors.length) process.exitCode = 1;
