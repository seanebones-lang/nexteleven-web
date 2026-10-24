# Pairtrace app information pages

These are new, server-rendered/static Next routes. Existing product pages and the site catalog are unchanged.

Expected canonical URLs:

- https://www.nexteleven.dev/pairtrace/privacy
- https://www.nexteleven.dev/pairtrace/terms
- https://www.nexteleven.dev/pairtrace/support

The pages use the same readable document approach as the existing app support/privacy templates, with original Pairtrace vector artwork, scoped CSS, keyboard focus styles, a skip link and responsive text. They have no form, checkout, tracking script or upload action. Prices are expressly intended U.S. prices; only the app's live Google Play offer can start checkout. No single-job pass is offered here.

## App facts checked

Reviewed the Pairtrace Android source on October 24, 2026, including its manifest, data-extraction rules, capture/recognition adapter, job backup/export code and RevenueCat coordinator.

- Job records, original photos, self-entered technician names and handoff notes remain local unless the person saves/shares files.
- ML Kit OCR and barcode input/results are processed on-device. Separate Google SDK technical/usage metrics are disclosed; the page does not promise zero network activity.
- Production purchase verification uses Google Play and RevenueCat Android SDK 10.15.1. The coordinator disables RevenueCat optional diagnostics and automatic device-identifier collection, but ordinary anonymous-customer, purchase and service metadata still exists.
- Job contents are not RevenueCat customer attributes and are not uploaded with purchase checks.
- QA manifests remove Internet/network-state permissions and QA access is distinct from paid access.
- Portable job restore, client handover and purchase restore are separate operations.
- Backups are neither password encrypted nor digitally signed. Checksums are corruption checks, not proof of authorship.
- Existing records remain readable/exportable after paid access ends. The free allowance is one real job with 25 cables; additional paid capacity is subject to technical limits.
- The tool does not test electrical safety, continuity or signal performance or certify an installation.

## Primary provider references

- [Google ML Kit terms and privacy](https://developers.google.com/ml-kit/terms)
- [Google ML Kit Android data disclosures](https://developers.google.com/ml-kit/android-data-disclosure)
- [RevenueCat privacy policy](https://www.revenuecat.com/privacy)
- [RevenueCat Google Play data disclosures](https://www.revenuecat.com/docs/platform-resources/google-platform-resources/google-plays-data-safety)
- [RevenueCat anonymous customer identifiers](https://www.revenuecat.com/docs/customers/identifying-customers)
- [Google Play subscription management](https://support.google.com/googleplay/answer/7018481)

The public app policy and the release's store Data safety answers must reflect the final production build and enabled provider integrations. Do not copy the no-network QA behavior into production claims.

## Local checks and release boundary

- `npm ci --ignore-scripts --prefer-offline`: succeeded without changing the lockfile.
- `npm run lint`: passed.
- `npm run build`: passed on Node 22.23.4 / Next 16.4.1; the three routes were prerendered.
- HTTP checks against the optimized local server passed: status 200, one main and h1, exact canonical, working internal links, no noindex and existing security headers.
- Existing `/routelle/privacy.html` local response was byte-identical to the current canonical production response.
- After the user made Safari available, all three page layouts were inspected in a dedicated test window at observed Responsive Design Mode viewports of 360×740 and 1280×800 CSS pixels. Header/navigation wrapping, text and notice widths read cleanly. A scoped list-style rule restores visible numbered steps after the site's reset. The test window was closed and the original six tabs/account workflows were preserved.
- Browser coverage is limited to observed page layouts. Safari's responsive-preview AX click/scroll actions returned `elementHasNoFrame`, so deep FAQ interaction/scroll and full-page visual coverage were not established. Some preview paints required reload despite populated accessibility content; this browser behavior remains a check limitation rather than a claimed interaction pass.
- Production-only npm audit returned zero findings in the current registry database. This is advisory coverage, not proof of security.
- The unchanged development graph has a high advisory for `zod@4.5.4`, reached through `eslint-config-next` → `eslint-plugin-react-hooks`. Advisory: https://github.com/advisories/GHSA-mrhx-c7xc-m3w5. A separate dependency patch should assess/update it; it is not introduced or changed by these routes.

Prepared from `origin/main` at `ab3f082a36c28c1a4626353e73b457e383dbe01b` on local branch `codex/pairtrace-public-pages-20261024`.

Read-only hosting check found Vercel project `nexteleven-public` under `nexteleven`, project ID `prj_eRR9evc9qiKi6LPlqkKCytToY9xe`. The canonical domain's pre-change production deployment was `dpl_CqwWdnQ83SmbGoiUwTZ4dKaVQx4v` (`nexteleven-public-ehel7d2s8-nexteleven.vercel.app`). These are release references, not a deployment of this patch.

No push or deployment was performed during preparation. Before release, recheck repository-local Git/commit identity, the authorized GitHub/Vercel owner connection, and the existing project/domain. Verify staging content and promotion separately. After publication, confirm the exact three canonical URLs before supplying them to the app as live legal links. A rollback can revert the isolated pages commit; preserve the pre-change production deployment as the domain rollback anchor.
