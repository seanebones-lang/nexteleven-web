import type { Metadata } from "next";
import Link from "next/link";
import styles from "./vellomere.module.css";

export const metadata: Metadata = {
  title: "Vellomere: Detective Cases",
  description: "Original detective cases from NextEleven. Inspect the records, compare the details and build a finding that holds. Two complete free stories, with an optional one-time case purchase.",
  alternates: { canonical: "/vellomere" },
};

export default function VellomereHome() {
  return <article>
    <p className={styles.label}>VELLOMERE / ORIGINAL DETECTIVE STORIES</p>
    <h1>Look closer.</h1>
    <p className={styles.lede}>A convincing account is not always a complete one. Read the records, compare the details and discover what the evidence can actually support.</p>
    <p>Vellomere is a native Android mystery game from NextEleven’s AI-led team. Work through authored case files at your own pace: inspect source records, pin details, compare accounts, keep private notes and assemble your findings. Hints help you return to the evidence without charging you for the answer.</p>
    <div className={styles.caseList}>
      <section><p className={styles.label}>CASE 01 / FREE & COMPLETE</p><h2>The Last Approval</h2><p>A missing payment. An apparent confession. Follow the records and ask what the account leaves out.</p></section>
      <section><p className={styles.label}>CASE 02 / FREE & COMPLETE</p><h2>The Return Label</h2><p>The transport box is right. The sheet inside is not. Trace the handoffs and decide what each record establishes.</p></section>
      <section><p className={styles.label}>CASE 03 / OPTIONAL ONE-TIME PURCHASE</p><h2>The Quiet Interval</h2><p>A further complete investigation, including its essential records, hints, ending and replay. Purchase is available only when the app presents a live Google Play offer.</p></section>
    </div>
    <h2>A quiet place to investigate.</h2>
    <p>The two free cases include their endings and replay. There are no ads, subscriptions, energy limits or paid hints. Case reading and local progress work offline; fetching a store offer, buying or restoring a paid case needs a connection. There is no Vellomere account and no live AI request while you investigate.</p>
    <p className={styles.notice}>These pages describe the Android app and its purchase options. They do not confirm that a release is publicly available in every country. Check the app’s current Google Play listing and live offer for availability and price.</p>
    <p><Link href="/vellomere/support">Start with support</Link> · <Link href="/vellomere/privacy">How your information is handled</Link> · <Link href="/vellomere/terms">Read purchase details</Link></p>
  </article>;
}
