# Mihrab study service preparation

This route is disabled (HTTP503, no upstream request) without MIHRAB_QF_CLIENT_ID and MIHRAB_QF_CLIENT_SECRET. Production credentials were added to Vercel as Production-only Secret variables with specific user approval on October15. Route deployed from ca9bf2f. Live Fatiha words/English tafsir and full286-verse Baqara words/English tafsir pass; all five word languages and four tafsir editions return200. Bengali edition164 returns only Fatiha1:1..1:6; do not invent coverage for1:7. Counts/positions match the bundled mushaf across the first two chapters. These are bounded structural/provider checks, not full religious-content certification. Mihrab build21 source now uses this route; final native validation/upload remain pending.

GET /api/mihrab/study?kind=words&surah=1&lang=en
GET /api/mihrab/study?kind=tafsir&surah=1&edition=169

Production-only Quran Foundation Client Credentials flow: fixed auth/content hosts, content scope, both required headers. No caller-selected host, URL, headers, token or credential; chapter1..114, five existing word languages and four existing tafsir IDs only. Duplicate/extra arguments rejected. Only expected content array returned. One token refresh for401, no403 retry; generic failures never return provider errors/secrets. Streamed responses bounded8MiB, token body64KiB; incomplete pagination fails rather than silently truncating.

Identical in-flight calls coalesce. Content memory/CDN cache1day; bounded48 entries/24MiB in process. New upstream work capped4concurrent/60perminute per process. These are instance limits, not a distributed global rate limiter or a service-level guarantee. Public read-only content endpoint; not an authentication proxy or general API proxy.

Completed: approved credential transfer to verified nexteleven/nexteleven-public Production, real auth/content/large-chapter checks. Remaining: deployed disclosure updates and final app/native acceptance. App study cache is five days on disk plus at most one day in an open provider, allowing for this service/CDN one-day cache within the total one-week boundary. Legacy indefinite study caches are retired; personal records and recitation downloads remain separate. Do not embed the server secret or token in mobile code. Do not switch the app before live connection works. No hosting upgrade, billing account or fee authorized/added.

Reference: https://api-docs.quran.foundation/docs/quickstart/ and https://api-docs.quran.foundation/legal/developer-terms/ . Service uses production hosts only; never mix prelive credentials. A Cloudflare403 may remain an external provider failure; this preparation does not claim to fix it.

Tests: node --experimental-strip-types --test scripts/test-mihrab-study.mjs . Fictional credentials/responses only, no provider calls.
