# NextEleven.dev — one design system

## Scope
This standard governs the **NextEleven LLC company website** at nexteleven.dev only.
nexteleven.tech is the separate **Mothership grant submission** and is never in scope.
No DNS, repository, content, build, Vercel or deployment changes to that grant property.

## Visual identity
One dark technical studio, not a separate theme for every service. Main backgrounds
are charcoal/navy; secondary surfaces are layered graphite; text is near-white;
muted text is slate; the only brand accent is blue.

Tokens live in `src/app/unified-site.css`:
- Page `#0b1018`
- Raised surface `#121d2b`; deeper exhibit `#14253b`
- Lines `#314159`
- Primary text `#f3f6fc`; secondary `#a7b6cb`
- Readable link accent `#8ab4ff`; solid CTA fill `#155eef`
- No red, purple, teal or pastel site-level themes.

## Type and layout
Geist is the display/body font. Geist Mono is reserved for small labels, codes,
indices and technical values. Headlines use consistent near-black hero spacing,
tight but readable letter spacing (~-.055em), and line-height about 1.04; content
uses 1.6–1.75 line-height with bounded text measure. The corporate header and footer
are shared React components in `src/components/company/CompanySite.tsx`, with
responsive navigation and a single NextEleven wordmark.

All core landing pages use consistent 5vw horizontal gutters, restrained rounded
corners (4–6px), visible focus states and a 1px rule/grid rhythm. Components may
vary for the product being shown, but **the surrounding site must always look like
NextEleven**. Hero/proof sections alternate dark navy and graphite rather than
swapping between white and black pages.

## Route responsibilities
- / — company entry and buyer paths
- /build, /presence, /security, /diagnosis — services
- /work, /work/[slug], /apps — evidence and portfolio
- /frontdesk, /referredbyai, /deadbolt — branded product/service experiences
- /about, /answers — company facts and clear answers

ReferredByAI is a Next.js page with the shared company header/footer; its original
sales copy is retained as a local content fragment, and its CSS is scoped to its
content wrapper to prevent typography or navigation leakage. FirstRing may have a
compact **product sub-navigation** below the corporate header, not a second
competing site header or footer. Individual published app privacy/support pages are
utility documents, not a license to create new visual identities for marketing pages.

## SEO / AEO
Use descriptive HTML, one visible H1 per page, distinct titles/descriptions and
canonicals, crawlable business/services answers, relevant and validated structured
data, and internal links between service pages. `/llms.txt` is supplemental; it
does not guarantee AI answer inclusion or search rankings. Never invent citations,
client claims, review scores, security guarantees or customer outcomes.

## Acceptance before merge or deployment
A passing Next.js build/linter is necessary **but not sufficient**.
Visually compare Home, Work, Build, Presence, Security, Apps, FirstRing,
ReferredByAI, Diagnosis and Answers at mobile and desktop widths.
Check that:
1. The same NextEleven logo, header, footer and navigation appear everywhere.
2. Body backgrounds and card palettes stay navy/graphite, not abrupt white panels.
3. Headline sizes, labels, paragraph widths and buttons have coherent rhythm.
4. Navigation, anchors, forms, audio/demo links and mobile menu work.
5. Routes, canonicals, robots, sitemap and critical SEO/AEO content remain correct.
6. Existing user-facing routes do not regress.

Do not merge/deploy a design change until this visual check is performed.
