# Mihrab study service preparation

This route is disabled (HTTP503, no upstream request) without MIHRAB_QF_CLIENT_ID and MIHRAB_QF_CLIENT_SECRET. No real credential has been added, no real provider success is claimed and Mihrab build20 still uses its old study route.

GET /api/mihrab/study?kind=words&surah=1&lang=en
GET /api/mihrab/study?kind=tafsir&surah=1&edition=169

Production-only Quran Foundation Client Credentials flow: fixed auth/content hosts, content scope, both required headers. No caller-selected host, URL, headers, token or credential; chapter1..114, five existing word languages and four existing tafsir IDs only. Duplicate/extra arguments rejected. Only expected content array returned. One token refresh for401, no403 retry; generic failures never return provider errors/secrets. Streamed responses bounded8MiB, token body64KiB; incomplete pagination fails rather than silently truncating.

Identical in-flight calls coalesce. Content memory/CDN cache1day; bounded48 entries/24MiB in process. New upstream work capped4concurrent/60perminute per process. These are instance limits, not a distributed global rate limiter or a service-level guarantee. Public read-only content endpoint; not an authentication proxy or general API proxy.

Before activation: approved credential transfer to the existing Vercel project, exact account/project/production environment verification, real auth/content/large-chapter checks, source attribution and collection/cache disclosures, then app migration with a maximum7day local study cache and native acceptance. Do not embed the server secret or token in mobile code. Do not switch the app before live connection works. No hosting upgrade, billing account or fee authorized/added.

Reference: https://api-docs.quran.foundation/docs/quickstart/ and https://api-docs.quran.foundation/legal/developer-terms/ . Service uses production hosts only; never mix prelive credentials. A Cloudflare403 may remain an external provider failure; this preparation does not claim to fix it.

Tests: node --experimental-strip-types --test scripts/test-mihrab-study.mjs . Fictional credentials/responses only, no provider calls.
