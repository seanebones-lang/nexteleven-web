import Image from "next/image";
import Link from "next/link";
import { apps, type AppCardData } from "@/lib/app-catalog";
import styles from "@/app/apps/page.module.css";

type Platform = "all" | "apple" | "android";
const play = "https://play.google.com/store/apps/details?id=";
function StoreButtons({app, platform}: {app: AppCardData; platform: Platform}) {
  const android = app.android !== false;
  const apple = <a className={styles.secondaryButton} href={`https://apps.apple.com/us/app/id${app.appleId}`} aria-label={`Get ${app.short} on the App Store`}>View on the App Store <span aria-hidden="true">↗</span></a>;
  const google = <a className={styles.darkButton} href={`${play}${app.id}`} aria-label={`Get ${app.short} on Google Play`}>Get it on Google Play <span aria-hidden="true">↗</span></a>;
  return <div className={styles.storeButtons}>{platform === "apple" ? <>{app.appleId && apple}{android && google}</> : <>{android && google}{app.appleId && apple}</>}</div>;
}
function AppCard({app, platform}: {app: AppCardData; platform: Platform}) {
  const appleThrift = platform === "apple" && app.short === "ThriftFlip";
  const support = platform === "apple" && app.short === "ThriftFlip" ? "/thriftflip/support.html" : platform === "apple" && app.short === "Note to Self" ? "/note-to-self/ios-support.html" : app.supportUrl || (app.policy ? `/${app.policy}/support.html` : "mailto:nextelevenstudios@gmail.com");
  const privacy = platform === "apple" && app.short === "ThriftFlip" ? "/thriftflip/privacy.html" : platform === "apple" && app.short === "Note to Self" ? "/note-to-self/ios-privacy.html" : app.privacyUrl || (app.policy ? `/${app.policy}/privacy.html` : undefined);
  const features = appleThrift ? ["Offline inventory, buying costs, sales and returns", "Haul allocation, photos and PDF/CSV reports", "Recoverable import of supported older records"] : app.short === "ThriftFlip" && platform === "all" ? ["Android: 20 active items free, with sale and return histories", "Buying tools and checked inventory backups", "Android Plus / paid Apple app: hauls, photos and reports"] : app.features;
  return <article className={`${styles.appCard} ${styles[app.tone]}`} aria-label={app.name}>
    <div className={styles.appIdentity}><Image src={`/apps-assets/${app.icon}`} width={80} height={80} alt="" /><p className={styles.eyebrow}>{app.category}</p></div>
    <h3>{app.short}</h3><p>{app.description}</p><ul>{features.map(feature => <li key={feature}>{feature}</li>)}</ul>
    <StoreButtons app={app} platform={platform}/><p className={styles.price}>{platform === "apple" && app.applePrice ? app.applePrice : app.price}</p>
    <div className={styles.policyLinks}><a href={support}>Support</a>{privacy && <a href={privacy}>Privacy</a>}</div>
  </article>;
}
function CircuitFeature() {
  return <article className={styles.featured} aria-labelledby="circuit-title">
    <div className={styles.featuredCopy}><div className={styles.appIdentity}><Image src="/apps-assets/circuit-breaker.webp" width={88} height={88} alt="" /><p className={styles.eyebrow}>Featured · Circuit Breaker</p></div>
      <h3 id="circuit-title">Circuit Breaker:<br/><span>Kill Switch</span></h3><p>One circuit. A spreading threat. Route the kill signal, then take on FAILSAFE: 60 more puzzles and five new sectors.</p>
      <ul><li>60 original campaign puzzles, free</li><li>FAILSAFE: try the first three levels free</li><li>Daily Breach and endless Containment</li></ul>
      <a className={styles.cyanButton} href={`${play}dev.nexteleven.circuitbreaker`} aria-label="Get Circuit Breaker on Google Play">Get it on Google Play <span aria-hidden="true">↗</span></a>
      <p className={styles.price}>Free download with ads. Optional one-time FAILSAFE expansion includes Remove Ads. More optional packs and fresh challenges are planned every month.</p>
      <div className={styles.policyLinks}><a href="/circuit-breaker/support.html">Support</a><a href="/circuit-breaker/privacy.html">Privacy</a></div>
    </div>
    <figure className={styles.gameplay}><video controls playsInline preload="none" poster="/apps-assets/circuit-breaker-poster.jpg" aria-label="Circuit Breaker original campaign Android gameplay"><source src="/apps-assets/circuit-breaker-gameplay.mp4" type="video/mp4"/>Your browser does not support embedded video. <a href="https://www.youtube.com/shorts/46yaKVMx-Fc">Watch the gameplay on YouTube.</a></video><figcaption>Original campaign · Real Android gameplay · 27 seconds<br/><a href="https://www.youtube.com/shorts/46yaKVMx-Fc">Watch on YouTube ↗</a></figcaption></figure>
  </article>;
}
export default function AppShowcase({platform = "all"}: {platform?: Platform}) {
  const apple = platform === "apple";
  const visible = apps.filter(app => apple ? !!app.appleId : platform === "android" ? app.android !== false : app.android !== false || app.short === "CurioRound");
  return <div className={styles.page}>
    <a className={styles.skip} href="#apps">Skip to the apps</a>
    <header className={styles.header}><Link href="/apps" className={styles.brand}><Image src="/apps-assets/next-eleven-mark.png" width={44} height={44} alt=""/>NextEleven</Link><nav aria-label="Apps navigation"><Link href="/apps">All apps</Link><Link href="/apps/android" aria-current={platform === "android" ? "page" : undefined}>Android</Link><Link href="/apps/apple" aria-current={apple ? "page" : undefined}>Apple</Link><a href="#support">Support</a></nav></header>
    <main>
      <section className={styles.hero} aria-labelledby="apps-title"><div className={styles.heroArt} aria-hidden="true"/><div className={styles.heroCopy}><p className={styles.eyebrow}>Independently built in Texas · {apple ? "iPhone, iPad & Mac" : platform === "android" ? "On Google Play" : "Apple & Android"}</p><h1 id="apps-title">Small steps.<br/>Fresh ideas.<br/><span>Clever play.</span></h1><p>{apple ? "Thoughtful apps for iPhone, iPad and Mac. Find something for your studio, your next idea, or a little downtime." : "Thoughtful apps for the things you want to do—and a little room to enjoy yourself along the way."}</p><a className={styles.lightButton} href="#apps">Explore {apple ? "our Apple apps" : "the apps"} <span aria-hidden="true">↓</span></a></div><div className={styles.heroMark}><Image src="/apps-assets/next-eleven-mark.png" width={280} height={280} alt="NextEleven monogram" priority/><p>Useful by design.<br/>Made with care.</p></div></section>
      <section id="apps" className={styles.catalog} aria-labelledby="catalog-title"><div className={styles.sectionHeading}><p className={styles.eyebrow}>{apple ? "On the App Store" : platform === "android" ? "On Google Play" : "Explore NextEleven"}</p><h2 id="catalog-title">Something for your day.<br/>Something for your downtime.</h2></div>
        {!apple && <CircuitFeature/>}
        <div className={styles.appGrid}>{visible.map(app => <AppCard key={app.id} app={app} platform={platform}/>)}</div>
      </section>
      <section className={styles.apple} aria-labelledby="other-platform-title"><div><p className={styles.eyebrow}>On your other devices</p><h2 id="other-platform-title">Looking for our {apple ? "Google Play" : "Apple"} apps?</h2><p>{apple ? "Explore our Android collection, including Circuit Breaker, Mihrab and the apps available on both platforms." : "Explore our dedicated collection for iPhone, iPad and Mac, with app details and direct downloads."} Availability, pricing and features can differ by platform.</p></div><Link className={styles.darkButton} href={apple ? "/apps/android" : "/apps/apple"}>Explore {apple ? "Android" : "Apple"} apps <span aria-hidden="true">↗</span></Link></section>
      <section id="support" className={styles.support} aria-labelledby="support-title"><p className={styles.eyebrow}>A real person behind the apps</p><h2 id="support-title">A question, an idea,<br/>or something to fix?</h2><p>I’m Sean, the developer behind NextEleven. Tell me which app you’re using, your device, and what happened. Please leave passwords and private notes out of your message.</p><a href="mailto:nextelevenstudios@gmail.com?subject=NextEleven%20app%20support">nextelevenstudios@gmail.com ↗</a></section>
    </main><footer className={styles.footer}><span>NextEleven LLC · Mansfield, Texas</span><nav aria-label="Footer"><Link href="/apps/android">Android apps</Link><Link href="/apps/apple">Apple apps</Link><Link href="/">Software & consulting</Link><Link href="/about">About Sean</Link></nav></footer>
  </div>;
}
