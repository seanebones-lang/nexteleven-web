# NextEleven public website

The primary client website is [www.nexteleven.dev](https://www.nexteleven.dev/): software engineering and applied AI consulting from Sean McDonnell, owner of NextEleven LLC.

## Source and deployment

- `src/app` and `src/components` contain the Next.js website. The `nexteleven-public` Vercel project deploys `main` to `nexteleven.dev` and `www.nexteleven.dev`.
- Root HTML files and their subdirectories are the older static site served by GitHub Pages at `mothership-ai.com`. They remain publicly accessible, so shared factual claims should stay consistent.
- A push to `main` triggers the existing Vercel and GitHub Pages deployments. Verify the deployed commit and actual public pages after publishing.

## Pages

- `/apps`: consumer app showcase with official Google Play downloads, Circuit Breaker gameplay, Apple developer listing, and per-app support/privacy links.
- `/`: the offering and routes to services, work, Sean’s background, and websites.
- `/build`: services and starting points for business owners and technical teams.
- `/diagnosis`: the $250 software diagnosis offer, scope, deliverables, fit check and email intake. Payment follows an agreed scope through an existing provider; this page does not take payments.
- `/deadbolt`: the official product entry point, installation routes, captioned overview and explicit enforcement boundary.
- `/work`: selected projects, supporting evidence, research status, and a secondary hiring path.
- `/about`: Sean’s background, approach, technical project experience, and publication record.
- `/presence`: business websites, customer portal foundations, and the JP Transmission example.

## Local checks

```sh
npm ci
npm run lint
npm run build
npm run start
```

No runtime environment variables are required. Contact links open the visitor’s email application; the website does not submit a hosted inquiry form. Keep account credentials and client information outside this public repository.

## Public claims

Use current repositories, deployed examples, and source records to support project descriptions. Distinguish completed work, publication, open-source implementation, and experimental projects from usage or business results. The current publication wording is “13 applications published on Apple’s App Store through NextEleven.” Private-client identities and outcomes remain confidential.

Maintain canonical URLs, structured data, robots, and sitemap against `https://www.nexteleven.dev`. Check desktop and phone layouts, navigation, contact links, project links, and the published pages when changing the site.
