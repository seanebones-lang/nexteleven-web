import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";

const read = path => readFileSync(path, "utf8");
const landingRoutes = [
  ["src/app/page.tsx", 'canonical: "/"'],
  ["src/app/build/page.tsx", 'canonical: "/build"'],
  ["src/app/presence/page.tsx", 'canonical: "/presence"'],
  ["src/app/security/page.tsx", 'canonical: "/security"'],
  ["src/app/apps/page.tsx", 'canonical: "/apps"'],
  ["src/app/frontdesk/page.tsx", 'canonical: "/frontdesk"'],
  ["src/app/referredbyai/page.tsx", 'canonical: "/referredbyai"'],
  ["src/app/answers/page.tsx", 'canonical: "/answers"'],
  ["src/app/case-studies/jp-transmission/page.tsx", 'canonical: "/case-studies/jp-transmission"'],
];
test("All key buyer and evidence pages have real routes and canonical metadata", () => {
  for (const [path, canonical] of landingRoutes) {
    assert.ok(existsSync(path), `Missing route ${path}`);
    assert.ok(read(path).includes(canonical), `Missing canonical in ${path}`);
  }
  assert.match(read("src/app/work/[slug]/page.tsx"), /canonical:/);
});
test("Sitemap contains every discoverable buyer page and avoids invented bulk dates", () => {
  const sitemap = read("src/app/sitemap.ts");
  for (const path of ["/build", "/presence", "/security", "/frontdesk", "/referredbyai", "/answers", "/case-studies/jp-transmission"]) {
    assert.ok(sitemap.includes('"' + path + '"'), `Sitemap missing ${path}`);
  }
  assert.doesNotMatch(sitemap, /lastModified: UPDATED/);
});
test("Robots and company identity are explicit; site keeps a single canonical origin", () => {
  const robots = read("src/app/robots.ts");
  const layout = read("src/app/layout.tsx");
  assert.match(robots, /userAgent:"\*"/);
  assert.match(robots, /allow:"\/"/);
  assert.match(robots, /sitemap\.xml/);
  assert.match(layout, /https:\/\/www\.nexteleven\.dev/);
  assert.match(layout, /"Organization"/);
  assert.match(layout, /"WebSite"/);
  assert.match(layout, /telephone:/);
  assert.ok(existsSync("public/google5b6e77d17d9232a9.html"), "Keep existing Google verification file");
});
test("AI visibility page shares the real corporate shell, not a duplicate static website", () => {
  const page = read("src/app/referredbyai/page.tsx");
  const content = read("content/referredbyai/landing-main.html");
  assert.match(page, /<CompanyHeader\s*\/>/);
  assert.match(page, /<CompanyFooter\s*\/>/);
  assert.match(content, /ReferredByAI Audit/);
  assert.doesNotMatch(content, /<html|<head|<footer/i);
  assert.ok(!existsSync("public/referredbyai/index.html"), "No competing static HTML page");
});
test("Service answers and verified case-study evidence are linked from primary navigation", () => {
  const header = read("src/components/company/CompanySite.tsx");
  const home = read("src/app/page.tsx");
  const presence = read("src/app/presence/page.tsx");
  const llms = read("src/app/llms.txt/route.ts");
  assert.match(header, /href: "\/referredbyai"/);
  assert.match(header, /href="\/answers"/);
  assert.match(home, /href="\/answers"/);
  assert.match(presence, /href="\/case-studies\/jp-transmission"/);
  assert.match(llms, /https:\/\/www\.nexteleven\.dev\/referredbyai/);
  assert.match(read("src/app/case-studies/jp-transmission/page.tsx"), /did not include a live inventory system/);
});
test("IndexNow submission is guarded and belongs only to canonical .dev", () => {
  const script = read("scripts/submit-indexnow.mjs");
  const key = script.match(/const KEY = "([0-9a-f]{32})"/)?.[1];
  assert.ok(key);
  assert.equal(read(`public/${key}.txt`).trim(), key);
  assert.match(script, /--confirm-production/);
  assert.match(script, /https:\/\/www\.nexteleven\.dev/);
  assert.doesNotMatch(script, /nexteleven\.tech/);
});
