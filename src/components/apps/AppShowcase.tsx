import Image from "next/image";
import { apps, appGroups, type AppCardData } from "@/lib/app-catalog";
import { CompanyHeader, CompanyFooter } from "@/components/company/CompanySite";
import styles from "@/app/apps/page.module.css";

const play = "https://play.google.com/store/apps/details?id=";
const appleStore = "https://apps.apple.com/us/developer/sean-mcdonnell/id1839832497";
const googleStore = "https://play.google.com/store/apps/dev?id=7608447669826597882";

function appleUrl(app: AppCardData) {
  const slug = app.name.toLowerCase().replace(/:/g, "").replace(/&/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return `https://apps.apple.com/us/app/${slug}/id${app.appleId}`;
}
function platformBadge(app: AppCardData) {
  const android = app.android !== false;
  if (app.appleId && android) return "iPhone · Android";
  if (app.appleId) return app.short === "ElevenClean" ? "Mac" : "iPhone · iPad";
  return "Android";
}
function StoreButtons({ app }: { app: AppCardData }) {
  const android = app.android !== false;
  return <div className={styles.storeButtons}>
    {android && <a className={styles.darkButton} href={`${play}${app.id}`} aria-label={`Get ${app.short} on Google Play`}>Get it on Google Play <span aria-hidden="true">↗</span></a>}
    {app.appleId && <a className={styles.secondaryButton} href={appleUrl(app)} aria-label={`Get ${app.short} on the App Store`}>View on the App Store <span aria-hidden="true">↗</span></a>}
  </div>;
}
function AppCard({ app }: { app: AppCardData }) {
  const support = app.supportUrl || (app.policy ? `/${app.policy}/support.html` : undefined);
  const privacy = app.privacyUrl || (app.policy ? `/${app.policy}/privacy.html` : undefined);
  return <article className={`${styles.appCard} ${styles[app.tone]}`} aria-label={app.name}>
    <div className={styles.appIdentity}><Image src={`/apps-assets/${app.icon}`} width={80} height={80} alt="" /><p className={styles.eyebrow}>{app.category}</p></div>
    <h3>{app.name}</h3>
    <p className={styles.eyebrow}>{platformBadge(app)}</p>
    <p>{app.description}</p>
    <ul>{app.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
    <StoreButtons app={app} />
    <p className={styles.price}>{app.price}</p>
    <div className={styles.policyLinks}>
      {app.supportLinks ? app.supportLinks.map(link => <a key={link.href} href={link.href}>{link.label}</a>) : <>{support && <a href={support}>Support</a>}{privacy && <a href={privacy}>Privacy</a>}</>}
    </div>
  </article>;
}
function CircuitFeature() {
  return <article className={styles.featured} aria-labelledby="circuit-title">
    <div className={styles.featuredCopy}><div className={styles.appIdentity}><Image src="/apps-assets/circuit-breaker.webp" width={88} height={88} alt="" /><p className={styles.eyebrow}>Featured · Circuit Breaker · Android</p></div>
      <h3 id="circuit-title">Circuit Breaker:<br /><span>Kill Switch</span></h3><p>Shut down rogue machines before corruption takes the grid. FAILSAFE adds 60 puzzles across five sectors: reroute to standby cores, keep the heartbeat live, connect paired keys and avoid decoys.</p>
      <ul><li>60 original campaign puzzles, free</li><li>FAILSAFE: try the first three levels free</li><li>Daily Breach and endless Containment</li></ul>
      <a className={styles.cyanButton} href={`${play}dev.nexteleven.circuitbreaker`} aria-label="Get Circuit Breaker on Google Play">Get it on Google Play <span aria-hidden="true">↗</span></a>
      <p className={styles.price}>Free download with ads. Optional one-time FAILSAFE expansion includes Remove Ads. More optional packs and fresh challenges are planned every month.</p>
      <div className={styles.policyLinks}><a href="/circuit-breaker/support.html">Support</a><a href="/circuit-breaker/privacy.html">Privacy</a></div>
    </div>
    <figure className={styles.gameplay}><video controls playsInline preload="none" poster="/apps-assets/circuit-breaker-failsafe-poster.jpg" aria-label="Circuit Breaker FAILSAFE: two complete KEYHOLDER and MIRAGE puzzle solutions"><source src="/apps-assets/circuit-breaker-failsafe-solutions.mp4" type="video/mp4" /><track kind="captions" src="/apps-assets/circuit-breaker-failsafe.vtt" srcLang="en" label="English gameplay explanations" />Your browser does not support embedded video. <a href="/apps-assets/circuit-breaker-failsafe-solutions.mp4">Watch the full FAILSAFE footage.</a></video><figcaption>FAILSAFE · Two complete sector-finale solutions · 3:22<br />KEYHOLDER F3-12 → MIRAGE F4-12. Original-speed Android preview footage with explanatory captions and the game’s original score.<br /><a href="/apps-assets/circuit-breaker-failsafe-solutions.mp4">Open the full video ↗</a></figcaption></figure>
  </article>;
}
export default function AppShowcase() {
  const byId = new Map(apps.map(app => [app.id, app]));
  return <div className={styles.page}>
    <a className={styles.skip} href="#apps">Skip to the apps</a>
    <CompanyHeader />
    <main>
      <section className={styles.hero} aria-labelledby="apps-title"><div className={styles.heroArt} aria-hidden="true" /><div className={styles.heroCopy}><p className={styles.eyebrow}>NextEleven LLC · App Store &amp; Google Play</p><h1 id="apps-title">Published apps.<br /><span>Working software, in people’s hands.</span></h1><p>NextEleven’s published catalog: eighteen applications live on the App Store and Google Play — tools for work, faith, learning and downtime. Every app below links to its official store page, its support page and its privacy policy.</p><div className={styles.storeButtons}><a className={styles.lightButton} id="apple" href={appleStore}>Published apps on Apple ↗</a><a className={styles.lightButton} id="android" href={googleStore}>Published apps on Google Play ↗</a></div></div><div className={styles.heroMark}><Image src="/apps-assets/next-eleven-mark.png" width={280} height={280} alt="NextEleven monogram" priority /><p>Built in Mansfield, Texas.<br />hello@nexteleven.dev · Call (817) 803-1967 · Text 833-925-6048</p></div></section>
      <section id="apps" className={styles.catalog} aria-labelledby="catalog-title">
        <div className={styles.sectionHeading}><p className={styles.eyebrow}>The full catalog</p><h2 id="catalog-title">Grouped by what<br />they’re for.</h2></div>
        <CircuitFeature />
        {appGroups.map(group => <section key={group.id} aria-labelledby={`group-${group.id}`}>
          <h3 id={`group-${group.id}`}>{group.title}</h3>
          <div className={styles.appGrid}>{group.appIds.map(id => byId.get(id)).filter((app): app is AppCardData => !!app).map(app => <AppCard key={app.id} app={app} />)}</div>
        </section>)}
      </section>
      <section id="support" className={styles.support} aria-labelledby="support-title"><p className={styles.eyebrow}>Built by NextEleven</p><h2 id="support-title">A question, an idea,<br />or something to fix?</h2><p>NextEleven is an AI-led software company founded by Sean McDonnell. Tell us which app you’re using, your device, and what happened. Please leave passwords and private notes out of your message.</p><a href="mailto:hello@nexteleven.dev?subject=NextEleven%20app%20support">hello@nexteleven.dev ↗</a><p>Call (817) 803-1967 · Text 833-925-6048</p></section>
    </main>
    <CompanyFooter />
  </div>;
}
