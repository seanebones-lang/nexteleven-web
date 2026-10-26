import type { Metadata } from "next";
import Link from "next/link";
import styles from "../vellomere.module.css";

export const metadata: Metadata = {
  title: "Vellomere purchases and terms",
  description: "Two complete free detective cases and an optional one-time purchase of The Quiet Interval. Google Play pricing, restore, offline access and story-use information.",
  alternates: { canonical: "/vellomere/terms" },
};

export default function VellomereTerms() {
  return <article>
    <p className={styles.label}>VELLOMERE / PURCHASES & TERMS</p>
    <h1>Buy a story. Follow it to the end.</h1>
    <p className={styles.notice}>Vellomere for Android is provided by NextEleven LLC. The Last Approval and The Return Label are complete free cases. The Quiet Interval is an optional, non-consumable one-time case purchase. There are no subscriptions, advertising, energy limits or paid hints.</p>

    <h2>What a case includes</h2>
    <p>A paid case includes its complete authored story, every essential record, all hints, ending and replay. Replaying does not consume the purchase. Buying one case does not include every future release or create an ongoing content subscription. There is no promised monthly release schedule or guaranteed playing time.</p>
    <p>Each case is fictional entertainment. People, organizations, events and records within the stories are invented. The app is not a source of legal, investigative or professional advice. NextEleven uses an AI-led development and creative workflow; the app presents prepared case content rather than generating live answers to your notes.</p>

    <h2>Live price and checkout</h2>
    <p>The proposed U.S. reference price for The Quiet Interval is US$2.99 once. A purchase exists only when the installed app presents a live Google Play offer. The app and Google Play show the actual localized price, currency, applicable charge and purchasing account before you confirm. This website does not start a payment or guarantee regional availability.</p>
    <p>Google Play handles payment. NextEleven does not receive your payment-card number. A missing offer, cancelled checkout, pending payment or unverified result does not grant new paid access. If a payment appears to have completed without unlocking the case, check the order and use Restore purchases before buying again.</p>

    <h2>Verification, offline access and restore</h2>
    <p>Vellomere uses Google Play and RevenueCat to verify case access. Fetching prices, purchasing, restoring and refreshing store verification require internet access. Free story play and saved local progress work offline. Once verified, owned cases can be played offline using the protected local access record.</p>
    <p>One-time access has no subscription period or local expiry timer. A later verified purchase refresh can reflect a refund or revocation and remove paid access; an offline cache is not a promise that refunded access will continue. Saved notes are retained separately. Where present, Read my saved case notes on the purchase page provides access to your retained notebook and final account.</p>
    <p>Use Restore purchases with the Google Play account that made the purchase, including after reinstalling or changing devices. Store eligibility and verification govern restored access. There is no Vellomere login, and restore does not transfer or recover the case progress, notes or preferences held on a previous installation.</p>

    <h2>Refunds and help with payments</h2>
    <p>Contact <a href="mailto:hello@nexteleven.dev?subject=Vellomere%20purchase%20support">hello@nexteleven.dev</a> about purchase problems. You can also request help under <a href="https://support.google.com/googleplay/answer/2479637">Google Play’s refund rules</a>. Eligibility depends on the circumstances, region and applicable rules; refund approval is not guaranteed. Google purchases are also governed by the <a href="https://play.google.com/about/play-terms/">Google Play terms</a>. Nothing on this page limits rights you have under applicable law.</p>
    <p>Resetting a case, deleting local data or uninstalling does not itself request a refund or delete Google Play or RevenueCat transaction records. A privacy request is separate from a refund request. As there is no Vellomere subscription, the app does not start a recurring plan that needs cancelling.</p>

    <h2>Local progress and complimentary access</h2>
    <p>Keep the installed app’s local data if you want to retain your investigation. The current app has no progress export, import, cloud sync or automatic Android backup. Resetting an investigation clears that case’s local playthrough after confirmation. Clearing storage or uninstalling can remove all local investigations. We cannot guarantee recovery of records kept only on your device.</p>
    <p>Any private complimentary access provided by NextEleven is a separate local grant, not a paid order, subscription or store-restorable purchase. Removing that grant does not remove a verified store purchase. Do not publish private access codes.</p>

    <h2>Content and updates</h2>
    <p>The app and its original case material are provided for your personal play. A purchase grants access to the case in the app; it does not transfer ownership of the writing, art or software, or authorize redistribution of case files. Third-party software notices are available in Reading appearance → Open-source notices, and the relevant licences continue to apply to those components.</p>
    <p>Features, supported versions and store offers may change. We describe the current release here and update these pages when practices change. We make no promise of unlimited future cases, perpetual compatibility with every device or a particular result from play. Applicable consumer rights remain unaffected.</p>
    <p><Link href="/vellomere/support">Get help</Link> · <Link href="/vellomere/privacy">Read the privacy policy</Link></p>
  </article>;
}
