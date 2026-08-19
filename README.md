# NextEleven web

Static company site for **NextEleven LLC**.

**Live:** [www.mothership-ai.com](https://www.mothership-ai.com/)  
**GitHub Pages twin:** [seanebones-lang.github.io/nexteleven-web](https://seanebones-lang.github.io/nexteleven-web/)

## What’s on the site

| Path | Product |
|------|---------|
| `/` | Company / hire-me home (four product cards) |
| `/harness/` | NextEleven Harness — Rust coding agent |
| `/rag/` | Personal RAG — local-first private search |
| `/parts/` | Parts Inventory System + rate card PDF |
| `/lot/` | Lot Management + rate card PDF |

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
