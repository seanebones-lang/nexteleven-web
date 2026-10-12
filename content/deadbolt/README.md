# Shared DeadBolt landing page

The product repository's `docs/index.html` is the source for the complete
NextEleven `/deadbolt` experience. The company header/footer, canonical URL and
React video lifecycle belong to this site. Relative guide links keep their
original GitHub Pages destinations. Images, captions and styles are vendored
from the same immutable revision; the page never fetches remote HTML at runtime.

`source.json` records the commit and SHA-256 of every input. Do not hand-edit
generated `page.json`, `site.css` or `public/deadbolt-assets/`.

```sh
npm run deadbolt:sync -- --latest
npm run deadbolt:check
npm run lint
npm run build
```

For a reviewed revision, use `--revision <40-character-commit>` instead.
The check regenerates all outputs in memory against that exact upstream commit
and rejects any drift. CSS selectors are confined to `.deadbolt-experience`.
Unexpected executable markup or a changed page structure stops synchronization.

The daily read-only workflow prepares and validates an update artifact when the
upstream page changes. Its run summary flags the required review. It does not
change repository access, create credentials, merge or deploy. Run the sync
command and submit a normal PR to bring a reviewed source update into production.

The video binding is also generated from the same product `walkthrough.js`.
Its teardown removes pending metadata handlers on chapter changes and navigation.
`Walkthrough.tsx` only attaches that shared binding to the rendered product.
