// Reviewed, build-time snapshot of the product's own landing page. No runtime fetch.
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { createHash } from 'node:crypto';
import postcss from 'postcss';

const repo = 'seanebones-lang/deadbolt';
const mirror = 'https://seanebones-lang.github.io/deadbolt/';
const root = resolve(import.meta.dirname, '..');
const args = process.argv.slice(2);
const option = name => args.includes(name) ? args[args.indexOf(name) + 1] : undefined;
const checking = args.includes('--check');
const recorded = JSON.parse(await readFile(resolve(root, 'content/deadbolt/source.json'), 'utf8').catch(() => '{}'));
let revision = option('--revision') || recorded.revision;
if (args.includes('--latest')) {
  const result = await fetch(`https://api.github.com/repos/${repo}/commits/main`, {
    headers: { Accept: 'application/vnd.github+json', ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}) },
    signal: AbortSignal.timeout(30000),
  });
  if (!result.ok) throw new Error(`Cannot resolve upstream revision: ${result.status}`);
  revision = (await result.json()).sha;
}
if (!/^[0-9a-f]{40}$/.test(revision || '')) throw new Error('A full immutable source revision is required');
const local = option('--source');
const sources = {};
async function get(path) {
  if (!/^[a-zA-Z0-9_./-]+$/.test(path) || path.split('/').includes('..')) throw new Error(`Unsafe source path: ${path}`);
  const bytes = local ? await readFile(resolve(local, 'docs', path)) : await (async () => {
    const response = await fetch(`https://raw.githubusercontent.com/${repo}/${revision}/docs/${path}`, { signal: AbortSignal.timeout(30000) });
    if (!response.ok) throw new Error(`Cannot read ${path}: ${response.status}`);
    return Buffer.from(await response.arrayBuffer());
  })();
  sources[path] = createHash('sha256').update(bytes).digest('hex');
  return bytes;
}
const html = (await get('index.html')).toString('utf8');
let body = html.match(/<body>([\s\S]*?)<script src="assets\/walkthrough.js" defer><\/script>\s*<\/body>/)?.[1];
if (!body) throw new Error('Upstream page structure changed; review before synchronizing');
if (/<script\b|\son[a-z]+\s*=|javascript:/i.test(body)) throw new Error('Unexpected executable markup in upstream content');
const assetRoot = `/deadbolt-assets/${revision}/`;
const assets = new Set(['assets/site.css', 'assets/walkthrough.js']);
body = body.replace(/\b(href|src|poster)="([^"]+)"/g, (_, attribute, url) => {
  if (/^(#|https?:|mailto:|data:)/.test(url)) return `${attribute}="${url}"`;
  if (url.startsWith('assets/')) { assets.add(url); return `${attribute}="${assetRoot}${url.slice(7)}"`; }
  return `${attribute}="${new URL(url, mirror).href}"`;
});
// The company header/footer remain outside the scoped product presentation.
body = body.replace(/<footer class="footer">[\s\S]*?<\/footer>/, '');
body = body.replace('href="https://www.nexteleven.dev/deadbolt">DeadBolt at NextEleven', 'href="/work">More work by NextEleven');
const outputs = new Map();
for (const path of assets) {
  const bytes = await get(path);
  if (path === 'assets/site.css') {
    const css = postcss.parse(bytes.toString('utf8'));
    css.walkRules(rule => {
      if (rule.parent.type === 'atrule' && /keyframes$/i.test(rule.parent.name)) return;
      // Current upstream selectors contain no commas inside functions. Fail closed
      // if that contract changes rather than generating subtly broken CSS.
      if (/\([^)]*,/.test(rule.selector)) throw new Error(`Review compound selector: ${rule.selector}`);
      rule.selector = rule.selector.split(',').map(selector => {
        const s = selector.trim();
        return /^(html|body|:root)$/.test(s) ? '.deadbolt-experience' : `.deadbolt-experience ${s}`;
      }).join(',');
    });
    outputs.set('content/deadbolt/site.css', css.toString());
  } else if (path === 'assets/walkthrough.js') {
    const script = bytes.toString('utf8');
    if (!script.includes('// STATIC_BOOTSTRAP:') || !script.includes('function bindDeadBoltWalkthrough(root)')) throw new Error('Review changed player interface');
    outputs.set('content/deadbolt/walkthrough.mjs', script.split('// STATIC_BOOTSTRAP:')[0].replace('function bindDeadBoltWalkthrough(root)', 'export function bindDeadBoltWalkthrough(root)'));
  } else outputs.set(`public${assetRoot}${path.slice(7)}`, bytes);
}
outputs.set('content/deadbolt/page.json', JSON.stringify({ html: body.trim() }, null, 2) + '\n');
outputs.set('content/deadbolt/source.json', JSON.stringify({ repository: repo, revision, mirror, sha256: sources }, null, 2) + '\n');
if (args.includes('--latest') && JSON.stringify(sources) === JSON.stringify(recorded.sha256)) {
  console.log(`Upstream inputs are unchanged; retaining reviewed revision ${recorded.revision}.`);
  process.exit(0);
}
if (!checking) await rm(resolve(root, 'public/deadbolt-assets'), { recursive: true, force: true });
for (const [path, contents] of outputs) {
  const output = resolve(root, path);
  if (checking) {
    const current = await readFile(output).catch(() => Buffer.alloc(0));
    if (!current.equals(Buffer.from(contents))) throw new Error(`Snapshot drift: ${path}. Run npm run deadbolt:sync and review the diff.`);
  } else {
    await mkdir(dirname(output), { recursive: true });
    await writeFile(output, contents);
  }
}
// Internal anchors and local assets must remain usable after relocation.
const ids = [...body.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
if (new Set(ids).size !== ids.length) throw new Error('Duplicate product anchor');
for (const [, id] of body.matchAll(/href="#([^"]+)"/g)) if (!ids.includes(id)) throw new Error(`Broken anchor: ${id}`);
console.log(`${checking ? 'Verified' : 'Synchronized'} DeadBolt ${revision}: ${outputs.size} outputs, ${ids.length} unique anchors.`);
