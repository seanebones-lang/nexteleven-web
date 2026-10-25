# Dinnlume public app pages — source release note

Prepared October 24, 2026 in `/Users/nexteleven/Developer/nexteleven-web-dinnlume-release`. Product changes are isolated to this new route directory. Next.js also generated the root `AGENTS.md` instructions during local development; those instructions are retained as the framework recommends. The existing site, Pairtrace pages, global styles, catalog, sitemap and hosting settings are unchanged.

Expected canonical URLs after coordinator publication:

- `https://www.nexteleven.dev/dinnlume/support`
- `https://www.nexteleven.dev/dinnlume/privacy`
- `https://www.nexteleven.dev/dinnlume/terms`

## Files and presentation

- `layout.tsx`: shared server-rendered page shell, original app bowl mark, readable navigation, skip link, light theme and contact footer.
- `dinnlume.module.css`: scoped paper, tomato, forest and citron identity; serif headings, reflowing body copy, visible focus, 48-pixel navigation/FAQ targets and print styles.
- `support/page.tsx`: first-use walkthrough and native FAQ instructions for pantry, seven-day scope, actual pack-price arithmetic, scanning, exclusions, timers, favorites, backup, Plus and private purchase-record requests.
- `privacy/page.tsx`: local kitchen records, ML Kit technical metrics, optional Open Food Facts requests, lazy RevenueCat initialization, Google Play payments, protected local access caches, exports/reset and provider/support requests.
- `terms/page.tsx`: free/Plus boundary, reference prices versus live store offers, full recurring charge, cancellation, verification/offline limits, saved-data access and recipe/content limitations.

The pages add no client component, account form, checkout, file upload, tracking script, external image or new font download. Parent site fonts and the existing site shell remain in use. These are new product support/policy routes, not a claim that the Android app is already published or a store offer is live.

## Fact checks against Android source

Read the current `/Users/nexteleven/Developer/dinnlume` sources while preparing the copy:

- Bundled `recipes.json` contains 48 recipes. `BillingPolicy.kt` gates only `GENERATE_WEEK`, `SAVE_ROTATION` and `APPLY_ROTATION`; all other kitchen actions stay free. Saved data remains available after paid access ends.
- The user-approved U.S. reference prices are $2.99 monthly and $19.99 annually. Only actual localized Google Play offers can initiate a charge. This source task did not inspect or configure live Play or RevenueCat products.
- `ScannerActivity.kt`, `ScannerReview.kt` and `ProductLookup.kt` separate on-device decoding, explicit product lookup, user confirmation and local barcode links. No camera image is saved/uploaded for decoding. The explicit lookup sends a barcode/IP/User-Agent, not the kitchen or diet, and does not return a price.
- ML Kit technical usage/diagnostic and installation-identifier handling is disclosed separately from recognition input.
- `PurchaseCoordinator.kt` constructs without initializing RevenueCat; Plus intent/purchase operations initialize it. Optional SDK diagnostics and automatic device-identifier collection are disabled; ordinary anonymous-customer, purchase and technical service data still exists.
- The RevenueCat SDK uses Google Block Store with its cloud-backup option to preserve the anonymous purchase-service app-user identifier after a purchase. This provider identifier backup is disclosed separately from the disabled Android kitchen backup; it contains no kitchen, recipe, pantry or dietary data. The app does not show ads; that does not assert that its transitive graph contains no advertising-identifier helper.
- `ProtectedBillingStore.kt` and `ProtectedReviewerStore` use separate protected no-backup records. Kitchen exports/reset do not grant or cancel purchases or erase provider records. Public copy does not describe kitchen JSON exports as encrypted.
- The manifest and extraction rules disable automatic app cloud/device-transfer backup. Active kitchen reset, local recovery files, exported copies, provider-record requests and subscription cancellation are described as separate lifecycles.
- `MONTHLY-CONTENT.md` supplies the first-Tuesday plan. Public wording labels it a planned cadence; it promises no launch date, delivered batch or kitchen-tested result.
- `DinnlumeViewModel.kt` and native purchase UI support separate kitchen restore and purchase restore, the seven-day window, readable recipe downloads and a private support reference. The reference is a record locator, not authority to change an account.

The public pages make no medical, allergy, cross-contact, nutritional or kitchen-validation guarantee. They invent no governing law, arbitration requirement, account-deletion mechanism, delivery/retention outcome or support response deadline. No fixed retention period is invented for providers or email correspondence.

## External references included

- Google ML Kit terms/privacy and Android data disclosure; Google privacy.
- RevenueCat privacy and Google Play data disclosures.
- Open Food Facts and the Open Database License.
- Google Play subscription management, refunds and terms.

These are references, not a legal-compliance determination. The release coordinator must verify the final enabled SDK configuration, published provider disclosures and Play Data safety answers against the final signed build.

## Validation and staged-release authorization

Initial source preparation was limited to static checks. The coordinator subsequently authorized lint, optimized build, an isolated branch/PR and a production-target Vercel staging deployment without domain promotion. No runtime, billing, DNS or deployment-protection setting changes are part of that authorization. No bypass secret is created or used.

- `npm run lint` passed after the Block Store disclosure correction.
- `npm run build` passed on Next.js 16.4.1, including TypeScript and static prerendering of all three Dinnlume routes. The generated production `next-env.d.ts` matches its tracked baseline.
- Earlier static checks passed for balanced markup, local CSS references, internal routes, one main/heading per page, exact canonicals and no added client script/form/upload/fetch.
- The coordinator owns actual browser/render review, including narrow/desktop sizes, large text, FAQ keyboard/focus behavior and staging content. No browser or device check is claimed by this worker.

## Immutable production rollback anchor before staging

Verified read-only at 2026-10-25T03:31:56Z, before any Dinnlume deployment:

- Existing project: `nexteleven/nexteleven-public`.
- Project ID: `prj_eRR9evc9qiKi6LPlqkKCytToY9xe`.
- Organization/team ID: `team_uZnFZoZyQtRuSkrpsPl0irj8`.
- Current canonical production deployment: `dpl_EGbkQybgLXN3iwsotHFLMpR8w9fC`, status `READY`.
- Immutable deployment URL: `https://nexteleven-public-hs27t2we2-nexteleven.vercel.app`.
- Production Git source: `f40811ddcbb78afeb6b39461850afa8b62117df1`, GitHub `main` of `seanebones-lang/nexteleven-web`.
- The deployment currently owns `www.nexteleven.dev` and `nexteleven.dev`, alongside existing project aliases. This is the rollback anchor; historical Pairtrace deployment IDs are not substituted.
- Effective repository identity is `Sean McDonnell <seanebones@gmail.com>`. The authenticated GitHub account is `seanebones-lang`, and GitHub associates the current main commit author with that account. Vercel project scope/account was inspected without changing configuration or printing credentials.

The prepared branch is `release/dinnlume-20261024`. Staging uses the existing project IDs and `--prod --skip-domain`; canonical domains remain on the rollback deployment until the coordinator separately reviews and promotes a candidate. The Vercel server performs its own build. Local Android/Gradle builds are outside this website task.

After publication, check all three canonical URLs, expected content, redirects, indexing and security headers. Verify existing Pairtrace/support routes and the main site remain intact. Add discovery/catalog/sitemap links separately if desired; they are outside this owned task. Configure the app's legal/support URLs only after the canonical pages are actually available. Deployment, public availability, app submission, billing setup and store acceptance are separate gates.

## Provider and health-disclosure follow-up

Prepared on `release/dinnlume-provider-disclosures-20261024` from current main `78462911ddffe7328966437e72404586989545d8`. This follow-up changes only three public-copy locations, plus this receipt:

- Privacy explains that the product request omits `cc`, so Open Food Facts may infer country from the connection's IP address. It also distinguishes temporary in-app display from provider query/network-log retention, without claiming memory-only processing or inventing a retention period.
- The food-preferences sections of Support and Terms state that Dinnlume is not a medical device, does not diagnose/treat/cure/prevent medical conditions, and direct medical advice or treatment questions to a qualified healthcare professional.
- Source review: app `docs/PLAY-DISCLOSURES.md`, actual `ProductLookup.kt` query construction, the [OFF v3 product endpoint documentation](https://openfoodfacts.github.io/documentation/docs/Product-Opener/v3/products/get-api-v3-product-code/), and Google's [health declaration categories](https://support.google.com/googleplay/android-developer/answer/14738291?hl=en) and [Health Content and Services policy](https://support.google.com/googleplay/android-developer/answer/16679511?hl=en). These copy corrections are not a claim that store declarations have been submitted or accepted.

The actual current production rollback anchor was reverified before this follow-up at `2026-10-25T03:53:48Z`: approved deployment `dpl_Hak7XdPMWmZsEvgBtVMzsT62x3Hj`, `READY`, immutable URL `https://nexteleven-public-d80la9b1z-nexteleven.vercel.app`, deployed source `6464ba6fb149091c9334593589fa596fb2d426a8`. Its source tree matches merged main `78462911ddffe7328966437e72404586989545d8`. The earlier pre-Dinnlume rollback record above remains historical; it is not substituted for this current anchor.

Use the existing `nexteleven/nexteleven-public` project and team IDs already recorded above. This task makes no app, dependency, design, runtime, billing, DNS or other-product change. Local ESLint and the optimized Next.js 16.4.1 build/TypeScript passed after the additions. The generated HTML for all three pages passed exact disclosure, canonical and main/h1 checks. Current-head checks, provider staging verification and exact public content checks precede final release; the pull request records their completed results and the final deployment identity.
