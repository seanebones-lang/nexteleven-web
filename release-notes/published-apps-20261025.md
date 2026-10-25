# Published-app catalog reconciliation — October 25, 2026

The company Android catalog omitted Routelle and CurioRound's Google Play download, and the Apple catalog retained the former Habits name. The All apps route also filtered out most Apple-only entries. This release reconciles the existing company site with the official public U.S. stores without changing the apps or store listings.

- Nine Google Play production listings and thirteen Apple listings independently verified against official public pages/API. Some products are on both platforms; this is not twenty-two distinct apps.
- Routelle uses its released name, existing Apple app ID6756255735, Android package dev.nexteleven.routelle, current icon and correct support pages.
- CurioRound now has both store links and platform-specific support/privacy links. Apple-only widget wording stays on the Apple card.
- All apps includes the Apple-only entries as well as the Android catalog. Homepage/About/Work wording now includes published apps on Apple's App Store and Google Play, with both official developer directories linked.
- Dinnlume and Pairtrace have separate Android Coming soon cards, real release icons and links to their information/support pages. Both remain in review and are excluded from published counts. No public launch date or working download is claimed.
- User requested the GitHub profile remain compact: one Apple developer link and one Google Play developer link, plus one coming-soon line. No individual-app table is needed there.

Validation: existing26tests passed, DeadBolt output freshness check passed, ESLint and optimized Next.js build passed. Five local primary routes and forty internal linked routes/assets returned200. Mobile390px and desktop checks are recorded with private release evidence. The source verification JSON contains public store metadata only, not credentials.

Hosting preflight: existing Vercel nexteleven/nexteleven-public, project prj_eRR9evc9qiKi6LPlqkKCytToY9xe, owner d7kn5fjw2c-1610. Authorized GitHub user seanebones-lang; repository-local author Sean McDonnell <seanebones@gmail.com>. Runtime, secrets, domains and account associations unchanged.

Rollback anchor before release: Ready production dpl_5g5ZqBKshQbBDZMH2cMUmVHXU4hZ, source04afea513afe4f5f331d701f619a5dffe524ae6f. A later release receipt records candidate/main SHA, provider deployment, aliases and live readback. Revert this bounded catalog commit through the normal PR path or restore the recorded prior deployment if needed. Never roll back unrelated later work blindly.
