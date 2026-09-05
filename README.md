# NextEleven public site

Next.js App Router rebuild for NextEleven LLC. Production target: `mothership-ai.com` on Vercel.

## Local checks

```bash
npm install
npm run dev
npm run lint
npm run build
```

No runtime environment variables are required today. Contact actions use the sourced NextEleven email address. A hosted form provider is **TBD**; do not create provider keys or add empty environment variables until one is approved.

## Vercel cutover checklist

Run these in order. Do not change DNS until the imported Vercel project has a successful production deployment.

1. **Push the repository**
   - Review `git status` and the final diff.
   - Commit the rebuild.
   - Run `git push origin main`.

2. **Import into Vercel**
   - Open the Vercel dashboard.
   - Click **Add New… → Project**.
   - Under **Import Git Repository**, select `seanebones-lang/nexteleven-web` and click **Import**.
   - Set **Framework Preset** to **Next.js**.
   - Leave **Root Directory** as `./`.
   - Leave install, build, and output settings at the detected Next.js defaults.

3. **Environment**
   - Expand **Environment Variables**.
   - Add none for the current build.
   - If a contact-form provider is approved later, add only its documented server-side keys to the appropriate Vercel environments. Never commit `.env*` files.

4. **Deploy**
   - Click **Deploy** and wait for the production deployment to finish.
   - Open the generated `*.vercel.app` deployment and verify `/`, `/about`, `/work`, `/build`, `/presence`, `/sitemap.xml`, and `/robots.txt`.

5. **Add production domains**
   - In the new Vercel project, open **Settings → Domains**.
   - Click **Add** and enter `mothership-ai.com`.
   - Add `www.mothership-ai.com`, then set `www` to redirect to the apex domain.
   - Keep `nexteleven-web-presence.vercel.app` and its old Vercel project unchanged as the preview/cutover fallback.

6. **Copy the exact DNS records Vercel requests**
   - In **Settings → Domains**, open each domain marked invalid or pending.
   - Copy the A, CNAME, or verification records shown by Vercel exactly. Those values are authoritative; do not substitute remembered defaults.
   - In the current DNS provider, replace only the records Vercel identifies for the apex and `www` hostnames.
   - Do not remove unrelated mail or verification records.

7. **Wait for verification**
   - Return to **Vercel → Project → Settings → Domains**.
   - Wait until both domains show **Valid Configuration** and HTTPS is active.
   - Confirm the production deployment is assigned to `mothership-ai.com` before retiring any old route.

8. **Final verification**
   - Open each public route in a private browser window.
   - Test the four home panels with mouse, touch, and keyboard.
   - Test the résumé download and all public repository/example links.
   - Check the 404 page, page titles, social cards, `/sitemap.xml`, and `/robots.txt`.
   - Run Lighthouse on mobile for `/` and one content route. Confirm no layout shift and that reduced-motion shows the still hero.
   - Leave the old `nexteleven-web-presence.vercel.app` project available until DNS has resolved consistently and the new site has passed verification.

## Public-claim boundaries

- App Store references are publication records only.
- Do not publish downloads, revenue, ratings, adoption, returns, profit, win-rate, or trading-performance claims.
- JP Transmission language describes documented design and implementation, not acceptance or business results.
- Private-client identities and outcomes remain withheld.

© NextEleven LLC
