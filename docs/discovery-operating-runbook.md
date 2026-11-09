# NextEleven.dev — SEO, AEO and crawler operations

## Scope and release safety
These procedures apply **only** to https://www.nexteleven.dev. The separate
nexteleven.tech/Mothership grant submission must never be changed or used as an
SEO test target. All redesign and discovery work stays in draft PR #76 until the
owner reviews screenshots and approves deployment.

## What the repository implements
- Open `robots.txt` and canonical `sitemap.xml` routes.
- Search-friendly, server-rendered service pages and conventional HTML links.
- Distinct titles, descriptions, canonicals and JSON-LD tied to visible facts.
- `/answers`: plain-language questions with direct service links.
- `/llms.txt`: optional machine-readable service index, **not** a ranking feature.
- `/case-studies/jp-transmission`: a documented, inspectable client example
  that explicitly avoids invented traffic, conversion, sales, or inventory claims.
- IndexNow ownership key file and a separate, explicitly gated notification script.
- `scripts/test-discovery.mjs`: repository-time regression tests, run in PR CI.
- `scripts/audit-live-discovery.mjs`: read-only production HTTP checks for
  status, redirects, metadata, canonicals, JSON-LD and crawl files.

## Release gate
1. Merge/deploy **only** when the owner approves the actual desktop/mobile visuals
   for Home, Services, Websites, Security, Work, Apps, FirstRing, ReferredByAI,
   About, Questions and the JP case study. Production is not changed by the PR.
2. Verify Vercel project/domain mapping: only nexteleven.dev and its www hostname.
   Do not alter the Mothership/grant Vercel project or any .tech DNS records.
3. Check contact links, inquiry forms, booking, audio demos and app store links.
4. In GitHub Actions, run **Live discovery audit (nexteleven.dev only)** after
   the production deployment. It probes canonical pages and machine-readable
   endpoints and reports an error if crawl-critical HTML/status is missing.
5. If pages truly changed and the audit passes, manually rerun the same workflow
   with `notify_indexnow=true` and changed paths (example:
   `/ /build /presence /referredbyai /answers`). It first checks the deployed
   ownership key, deployed sitemap and URLs. Do not notify for undeployed
   changes, unchanged pages, or URL paths on any other domain.
6. Run an actual crawler check in Google Search Console and Bing Webmaster Tools,
   including inspecting the fetched/rendered HTML. User-agent imitation alone
   does not establish that verified bots can bypass Vercel/CDN protections.

## Search engines / ownership checks (requires owner access)
- Google Search Console: verify the canonical property and `www`/apex handling,
  submit `https://www.nexteleven.dev/sitemap.xml`, inspect/index priority
  pages and monitor pages indexed versus excluded, search queries, impressions,
  clicks and any Generative AI performance report available to the property.
  An existing Google verification HTML file is in the repo; its presence **does
  not prove that the currently signed-in owner has verified access**.
- Bing Webmaster Tools: verify ownership (or import the Search Console property),
  submit the sitemap, check crawl errors, and inspect IndexNow notifications.
- Google Business Profile and Bing Places (if operated): align the real company
  name, category, service area, phone, website and operating details; do not
  invent a storefront address or claim a review count.
- CDN/Vercel bot controls: examine actual response logs and security challenges
  for Googlebot, bingbot and OAI-SearchBot; allow verified legitimate search
  crawler access as intended. No blanket WAF relaxation without review.
- Confirm one preferred canonical host and redirects for duplicate http/https
  and apex/www URLs. No claim of live redirect correctness is made here.

## Responsible authority building (cannot be manufactured in code)
- Link to this site from accurate, business-owned public profiles when
  permitted, including relevant app-store developer profiles and open-source
  repository profiles.
- Request permission from actual clients for honest case-study backlinks or
  attribution; do not invent client endorsements or citations.
- Publish original, verifiable implementation notes and real project limitations.
- Obtain authentic reviews through neutral, non-incentivized requests sent to
  eligible customers, never selected only for positive sentiment.
- Track search/AI referral traffic in analytics if a consent/privacy-safe
  analytics solution is adopted; do not assume all ChatGPT mentions produce
  measurable referrals.

## Repeatable AI recommendation baseline
Use `docs/ai-search-prompts.csv` for specific service-intent questions. Run
the same prompts with date, location, engine and prompt recorded; preserve exact
responses, links/citations, and whether NextEleven was mentioned. Compare by
engine and month, without fabricating missing answers or using anonymous
`site:` counts as proof of ranking. Treat personalization, location and
query wording as variables; record the method alongside the observations.

**Not yet verified:** production accessibility from real crawlers, GSC/Bing
ownership, indexing, impressions, independent citations, AI ranking/referrals
and server/CDN logs. All require live access and observation; tests and
schema cannot guarantee them.

## References
- Google Search Central, optimizing for generative AI:
  https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- Google Search Central, AI features and your site:
  https://developers.google.com/search/docs/appearance/ai-features
- Bing IndexNow setup: https://www.bing.com/indexnow/getstarted
- Google sitemaps: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
