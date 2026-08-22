# NextEleven web

Static career portfolio and project-evidence site for **Sean McDonnell / NextEleven LLC**.

**Live:** [www.mothership-ai.com](https://www.mothership-ai.com/)  
**GitHub Pages twin:** [seanebones-lang.github.io/nexteleven-web](https://seanebones-lang.github.io/nexteleven-web/)

## What’s on the site

| Path | Product |
|------|---------|
| `/` | Career home — skills, evidence, selected work, résumé, contact |
| `/harness/` | NextEleven Harness — Rust coding-agent POC |
| `/rag/` | PersonalRAGVault — MIT-licensed private retrieval |
| `/parts/` | Anonymized confidential dealership-workflow case study |
| `/saas/` | Backend and workflow implementation evidence |
| `/ai/` | Applied-AI and RAG evidence |
| `/mobile/` | Cross-platform project experience |
| `/fintech/` | Research-engineering evidence with explicit no-edge boundary |

## Public-claim policy

- Public repositories, tests, releases, and documentation are the source of truth for project claims.
- Confidential client and product identities remain unnamed; public demos use synthetic data.
- Completed implementation is not presented as verified production adoption or business impact.
- Do not publish unverified user counts, efficiency percentages, revenue impact, trading volume, win rate, profitability, or customer deployments.
- Keep the résumé in `downloads/` synchronized with the approved career source of truth.

## Edit / deploy

```bash
# SoT clone (typical)
cd ~/Desktop/marketing-sites/nexteleven-web

# edit HTML, then keep SPA-style 404 fallback in sync
cp index.html 404.html

git add -A && git commit -m "site: …" && git push origin main
# wait for GitHub Pages status=built, then hard-refresh
```

- Branch: `main`
- Pages: deploy from root
- `404.html` must match `index.html` for client routes on Pages
- Custom domain: `www.mothership-ai.com` (`CNAME` in repo)

## Related

- Profile: [seanebones-lang/seanebones-lang](https://github.com/seanebones-lang/seanebones-lang)
- Harness: [seanebones-lang/harness](https://github.com/seanebones-lang/harness)
- Personal RAG: [seanebones-lang/personal-RAG](https://github.com/seanebones-lang/personal-RAG)

© NextEleven LLC
