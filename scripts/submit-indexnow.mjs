/**
 * Manual, production-only IndexNow notification.
 * Run AFTER approved deployment. IndexNow submits URLs for discovery, not indexing guarantees.
 */
const ORIGIN = "https://www.nexteleven.dev";
const HOST = new URL(ORIGIN).host;
const KEY = "fc3468e4fee59492b384c5fb7e83b423";
const KEY_LOCATION = `${ORIGIN}/${KEY}.txt`;
const passed = process.argv.slice(2);
if (!passed.includes("--confirm-production")) {
  console.error("Refusing to notify IndexNow without --confirm-production.");
  process.exit(2);
}
const input = (process.env.INDEXNOW_PATHS || passed.filter(x => x !== "--confirm-production").join(" ")).trim();
const paths = [...new Set(input.split(/\s+/).filter(Boolean))];
if (!paths.length) {
  console.error("Provide changed URL paths through INDEXNOW_PATHS, e.g. '/ /build /answers'.");
  process.exit(2);
}
for (const path of paths) {
  if (!/^\/(?:[a-zA-Z0-9_-]+\/?)*$/.test(path) || path.includes("//")) {
    throw new Error(`Invalid same-host path: ${path}`);
  }
}
const file = await fetch(KEY_LOCATION, { signal: AbortSignal.timeout(12000), redirect: "error" });
if (!file.ok || (await file.text()).trim() !== KEY) {
  throw new Error(`IndexNow ownership file is unavailable or invalid at ${KEY_LOCATION}. Deploy first.`);
}
const sitemapResponse = await fetch(`${ORIGIN}/sitemap.xml`, { signal: AbortSignal.timeout(12000) });
if (!sitemapResponse.ok) throw new Error("Sitemap must be deployed before notifying IndexNow");
const sitemap = await sitemapResponse.text();
for (const path of paths) {
  const url = ORIGIN + path;
  if (!sitemap.includes(`<loc>${url}</loc>`)) {
    throw new Error(`URL is not in the deployed sitemap: ${url}`);
  }
  const res = await fetch(url, { redirect: "follow", signal: AbortSignal.timeout(12000) });
  if (!res.ok || new URL(res.url).host !== HOST) throw new Error(`URL not reachable on canonical host: ${url} (${res.status})`);
  if (/noindex/i.test(res.headers.get("x-robots-tag") || "")) throw new Error(`URL has noindex: ${url}`);
}
const body = { host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: paths.map(path => ORIGIN + path) };
const response = await fetch("https://api.indexnow.org/IndexNow", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(body),
  signal: AbortSignal.timeout(15000),
});
if (![200, 202].includes(response.status)) throw new Error(`IndexNow submission failed: HTTP ${response.status}; ${(await response.text()).slice(0,500)}`);
console.log(`IndexNow notified of ${paths.length} changed URL(s). This does not confirm indexing.`);
