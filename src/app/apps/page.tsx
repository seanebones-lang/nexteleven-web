import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Apps for everyday life & clever play",
  description: "Discover Circuit Breaker, Steady, and Note to Self from NextEleven. Explore the apps, watch real gameplay, and find official downloads and support.",
  alternates: { canonical: "/apps" },
  openGraph: { title: "NextEleven Apps", description: "Small steps. Fresh ideas. Clever play.", url: "/apps", images: [{ url: "/apps-assets/next-eleven-header.jpg", width: 4096, height: 2304, alt: "NextEleven" }] },
};

const play = "https://play.google.com/store/apps/details?id=";
const apps = [
  { name: "Steady: One Small Step", short: "Steady", category: "A little room to begin", description: "Break a task into a smaller beginning, take a gentle breathing pause, and move at your own pace.", features: ["Small, manageable tasks", "Guided breathing", "Gentle check-ins"], icon: "steady.webp", id: "dev.nexteleven.steady", policy: "steady", price: "Free download. Optional Plus features.", tone: styles.steady },
  { name: "Note to Self: Capture & Keep", short: "Note to Self", category: "Keep the thought", description: "Capture an idea before it slips away. Write a note, find it again, and share it in the format you need.", features: ["Quick text notes", "Optional voice capture", "Text and PDF export"], icon: "note-to-self.webp", id: "dev.nexteleven.nts", policy: "note-to-self", price: "Free download. Optional Plus features.", tone: styles.notes },
] as const;

export default function AppsPage() {
  return <div className={styles.page}>
    <a className={styles.skip} href="#apps">Skip to the apps</a>
    <header className={styles.header}>
      <Link href="/apps" className={styles.brand}><Image src="/apps-assets/next-eleven-mark.png" width={44} height={44} alt="" />NextEleven</Link>
      <nav aria-label="Apps navigation"><a href="#apps">The apps</a><a href="#support">Support</a><Link href="/build">For businesses ↗</Link></nav>
    </header>
    <main>
      <section className={styles.hero} aria-labelledby="apps-title">
        <div className={styles.heroArt} aria-hidden="true" />
        <div className={styles.heroCopy}><p className={styles.eyebrow}>Independently built in Texas</p><h1 id="apps-title">Small steps.<br />Fresh ideas.<br /><span>Clever play.</span></h1><p>Thoughtful apps for the things you want to do—and a little room to enjoy yourself along the way.</p><a className={styles.lightButton} href="#apps">Find your next app <span aria-hidden="true">↓</span></a></div>
        <div className={styles.heroMark}><Image src="/apps-assets/next-eleven-mark.png" width={280} height={280} alt="NextEleven monogram" priority /><p>Useful by design.<br />Made with care.</p></div>
      </section>
      <section id="apps" className={styles.catalog} aria-labelledby="catalog-title">
        <div className={styles.sectionHeading}><p className={styles.eyebrow}>Explore NextEleven</p><h2 id="catalog-title">Something for your day.<br />Something for your downtime.</h2></div>
        <article className={styles.featured} aria-labelledby="circuit-title">
          <div className={styles.featuredCopy}><div className={styles.appIdentity}><Image src="/apps-assets/circuit-breaker.webp" width={88} height={88} alt="" /><p className={styles.eyebrow}>A circuit-routing puzzle game</p></div><h3 id="circuit-title">Circuit Breaker:<br /><span>Kill Switch</span></h3><p>One circuit. A spreading threat. Rotate the tiles and route the kill signal before a rogue AI takes over the grid.</p><ul><li>60 campaign puzzles</li><li>A fresh Daily Breach</li><li>Endless Containment mode</li></ul><a className={styles.cyanButton} href={`${play}dev.nexteleven.circuitbreaker`} aria-label="Get Circuit Breaker on Google Play">Get it on Google Play <span aria-hidden="true">↗</span></a><p className={styles.price}>Free gameplay. Contains ads and an optional one-time purchase to remove them.</p><div className={styles.policyLinks}><a href="/circuit-breaker/support.html">Support</a><a href="/circuit-breaker/privacy.html">Privacy</a></div></div>
          <figure className={styles.gameplay}><video controls playsInline preload="none" poster="/apps-assets/circuit-breaker-poster.jpg" aria-label="Circuit Breaker Android gameplay: rotate tiles, connect the signal, and neutralize the core"><source src="/apps-assets/circuit-breaker-gameplay.mp4" type="video/mp4" />Your browser does not support embedded video. <a href="https://www.youtube.com/shorts/46yaKVMx-Fc">Watch the gameplay on YouTube.</a></video><figcaption>Real Android gameplay · 27 seconds · no spoken dialogue</figcaption></figure>
        </article>
        <div className={styles.appGrid}>{apps.map(app => <article key={app.id} className={`${styles.appCard} ${app.tone}`} aria-label={app.name}><div className={styles.appIdentity}><Image src={`/apps-assets/${app.icon}`} width={80} height={80} alt="" /><p className={styles.eyebrow}>{app.category}</p></div><h3>{app.short}</h3><p>{app.description}</p><ul>{app.features.map(feature => <li key={feature}>{feature}</li>)}</ul><a className={styles.darkButton} href={`${play}${app.id}`} aria-label={`Get ${app.short} on Google Play`}>Get it on Google Play <span aria-hidden="true">↗</span></a><p className={styles.price}>{app.price}</p><div className={styles.policyLinks}><a href={`/${app.policy}/support.html`}>Support</a><a href={`/${app.policy}/privacy.html`}>Privacy</a></div></article>)}</div>
      </section>
      <section className={styles.apple} aria-labelledby="apple-title"><div><p className={styles.eyebrow}>On your other devices</p><h2 id="apple-title">Looking for our Apple apps?</h2><p>Explore NextEleven’s published apps for iPhone, iPad, and Mac. Availability and features vary by app and platform.</p></div><a className={styles.darkButton} href="https://apps.apple.com/us/developer/nexteleven-llc/id1839832497">Visit the Apple App Store <span aria-hidden="true">↗</span></a></section>
      <section id="support" className={styles.support} aria-labelledby="support-title"><p className={styles.eyebrow}>A real person behind the apps</p><h2 id="support-title">A question, an idea,<br />or something to fix?</h2><p>I’m Sean, the developer behind NextEleven. Tell me which app you’re using, your device, and what happened. Please leave passwords and private notes out of your message.</p><a href="mailto:nextelevenstudios@gmail.com?subject=NextEleven%20app%20support">nextelevenstudios@gmail.com ↗</a></section>
    </main>
    <footer className={styles.footer}><span>NextEleven LLC · Mansfield, Texas</span><nav aria-label="Footer"><a href="https://play.google.com/store/apps/dev?id=7608447669826597882">Google Play</a><Link href="/">Software & consulting</Link><Link href="/about">About Sean</Link></nav></footer>
  </div>;
}
