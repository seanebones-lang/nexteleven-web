import type { Metadata } from "next";
import Link from "next/link";
import styles from "../vellomere.module.css";

export const metadata: Metadata = {
  title: "Vellomere support",
  description: "Help with case progress, hints, appearance, one-time case purchases, restoring access and privacy in Vellomere for Android.",
  alternates: { canonical: "/vellomere/support" },
};

export default function VellomereSupport() {
  return <article>
    <p className={styles.label}>VELLOMERE / SUPPORT</p>
    <h1>A little help with the record.</h1>
    <p className={styles.lede}>Need a technical hand, or found a clue that does not seem to hold together? Tell us which case and where it happened. Please mark story spoilers in your subject line.</p>
    <p><a className={styles.contact} href="mailto:hello@nexteleven.dev?subject=Vellomere%20support">Email Vellomere support</a></p>
    <p>Support is provided by NextEleven LLC at <a href="mailto:hello@nexteleven.dev">hello@nexteleven.dev</a>. Our AI-led team reviews reports; we do not promise an immediate response or a fixed resolution time.</p>

    <h2>Common questions</h2>
    <details><summary>How do I start, save or replay a case?</summary><p>Open a story from the case library. Read source records, pin useful details and work through the findings. Progress saves locally as you play. Continue returns to the saved investigation. Reset this investigation, or Replay this case after the ending, asks for confirmation before resetting that case. Choose Keep my progress to cancel.</p></details>
    <details><summary>I am stuck. Do I have to buy a hint?</summary><p>No. Each included case has progressive hints and its ending. Revisit the relevant records and reveal a hint when you want help. There is no energy meter, paid hint or permanent failure lock. A finding asks what the records support; a plausible story on its own may not establish the conclusion.</p></details>
    <details><summary>Can I change the text size or reading theme?</summary><p>Open Reading appearance using the settings control. Choose Use device setting, Light paper or Dark reading. Text follows Android’s font-size setting. If something clips, tell us the phone model, Android version, text/display size and exact screen. A redacted screenshot helps.</p></details>
    <details><summary>What is free, and what does the paid case include?</summary><p>The Last Approval and The Return Label are complete free investigations. The Quiet Interval is an optional one-time case purchase when a live Google Play offer is available. Its essential records, hints, ending and replay are included. There are no subscriptions, ads, paid hints or promised monthly story drops. See <Link href="/vellomere/terms">purchase details</Link>.</p></details>
    <details><summary>The price is unavailable, or checkout did not finish.</summary><p>Connect to the internet, check that Google Play is available with your intended purchasing account, and use Refresh store details on the paid case page. The app cannot start payment without a live store offer. A cancelled checkout, pending payment or unverified result does not grant new paid access. Do not buy again merely because access has not appeared; first check your Google Play order and use Restore purchases.</p></details>
    <details><summary>How do I restore a purchased case?</summary><p>In Reading appearance, open Purchases & complimentary access, then choose Restore purchases. You can also open the paid case’s page from the library. Use a connection and the Google Play account that bought the case. Previously verified access can work offline, while a later verified refresh can reflect a refund or revocation. Restore does not recover case notes or progress.</p></details>
    <details><summary>My saved investigation is missing or cannot be read.</summary><p>Stop before uninstalling, clearing Android storage or resetting the case; those actions can remove remaining local records. Reopen the app and note the exact message. Contact support with the case title and what happened immediately beforehand. There is no cloud progress sync or in-app backup, export or import feature, so support cannot promise recovery. A verified purchase can be restored separately from playthrough progress.</p></details>
    <details><summary>What happens after a refund or to my saved notes?</summary><p>A refund or revocation can remove paid-case access when the app receives a verified purchase-status update. Local notes are retained. If the purchase page offers Read my saved case notes, it lets you read your retained notebook and final account without a new payment. For payment questions, contact us or consult <a href="https://support.google.com/googleplay/answer/2479637">Google Play’s refund guidance</a>. Approval depends on the applicable rules; we do not guarantee it.</p></details>
    <details><summary>What is complimentary access?</summary><p>A private code supplied by NextEleven can grant the included paid case separately from Google Play checkout. Use Complimentary access code on the purchase page. This is not a purchase, subscription or transferable progress backup. Do not send the code in feedback or post it publicly. Restore purchases is for verified store purchases, not complimentary codes.</p></details>

    <h2>What to include in a report</h2>
    <ul>
      <li>The case title, record or finding, and the steps that led to the issue.</li>
      <li>Your app version, phone model and Android version.</li>
      <li>Whether you were offline and, for layout problems, your text/display size.</li>
      <li>A redacted screenshot and the exact error wording, if available.</li>
    </ul>
    <p>For purchase support, privately include the Purchase support reference displayed on the paid case page after store services initialize, or a Google Play GPA order reference if needed. The support reference helps locate a record; it is not authentication or permission to change a transaction. Never send a password, payment-card details, purchase token or complimentary code.</p>
    <p>For a story issue, tell us what conclusion you expected and which visible record supports it. Please avoid posting spoilers in a public review if a private report will do. Sending a report does not grant us access to your device or your other case notes.</p>
    <p><Link href="/vellomere/privacy">Privacy and data requests</Link> · <Link href="/vellomere/terms">Purchases & terms</Link></p>
  </article>;
}
