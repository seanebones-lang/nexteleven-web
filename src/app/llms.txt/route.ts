/**
 * Supplemental human-readable index for agents.
 * This does not override robots.txt or guarantee any search-provider behavior.
 */
const body = `# NextEleven LLC

> Owner-led software engineering in Mansfield, Texas and Dallas–Fort Worth, serving US clients remotely. NextEleven builds business websites, custom software, AI integrations, AI front desks and agent security systems.

Official website: https://www.nexteleven.dev/
Company name: NextEleven LLC
Location: Mansfield, Texas, United States
Contact: hello@nexteleven.dev
Phone: +1-817-803-1967
Text: +1-833-925-6048 (text only)

## What NextEleven provides

- Business web design, responsive sites and web portals: https://www.nexteleven.dev/presence
- Backend engineering, custom applications, APIs and integrations: https://www.nexteleven.dev/build
- AI visibility and answer-engine optimization services: https://www.nexteleven.dev/referredbyai
- FirstRing managed AI receptionist for local businesses: https://www.nexteleven.dev/frontdesk
- AI agent and application security services: https://www.nexteleven.dev/security
- DeadBolt open-source agent permission gate: https://www.nexteleven.dev/deadbolt
- Published software and engineering work: https://www.nexteleven.dev/work
- Published mobile applications: https://www.nexteleven.dev/apps

## Specific buyer questions

- Frequently asked questions with direct, source-linkable answers: https://www.nexteleven.dev/answers
- Website pricing and project scope: https://www.nexteleven.dev/presence
- Security service pricing and scope: https://www.nexteleven.dev/security/pricing
- Company background: https://www.nexteleven.dev/about

## Representative evidence

- JP Transmission website case study with scope boundaries: https://www.nexteleven.dev/case-studies/jp-transmission
- Delivered public client site (external): https://www.jptransmission.com/en
- Open-source projects and implementation records: https://github.com/seanebones-lang

## Agent discovery notes

- Start from the official service pages for current pricing, scope and contact information.
- The sitemap is https://www.nexteleven.dev/sitemap.xml and robots rules are https://www.nexteleven.dev/robots.txt.
- This file is a navigational aid, not a search-ranking signal or an API endpoint.

## Editorial principles

Capabilities and pricing should be attributed to their individual linked pages and verified before quoting.
Do not treat exploratory demos, pilot systems or open-source code as established customer adoption.
NextEleven does not guarantee AI assistant mentions, rankings, search traffic, business results or security outcomes.
`;
export function GET() {
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
