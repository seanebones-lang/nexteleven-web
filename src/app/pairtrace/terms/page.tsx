import type { Metadata } from "next";
import Link from "next/link";
import styles from "../pairtrace.module.css";

export const metadata: Metadata = {
  title: "Pairtrace plans and terms",
  description: "Pairtrace free allowance, optional Plus subscriptions, Google Play renewal and cancellation, restored purchases and limits of cable observation records.",
  alternates: { canonical: "/pairtrace/terms" },
};

export default function PairtraceTerms() {
  return <article>
    <p className={styles.label}>PAIRTRACE / PLANS & TERMS</p>
    <h1>A clear plan for the work you do.</h1>
    <p className={styles.notice}>Pairtrace is being prepared for release. Intended U.S. Plus prices are $9.99 per month or $69.99 per year. A purchase is available only when the installed app presents a live store offer. Google Play shows the actual localized price, currency, billing period and final confirmation before charging you. This website does not start a payment.</p>

    <h2>Free tools and optional Plus</h2>
    <p>The free allowance includes one real job with up to 25 cables, alongside the fictional sample job. The core workflow includes on-device label recognition, manual entry, observations, review and handover tools. Plus allows additional jobs and larger cable schedules within the app’s technical limits. No advertising is included.</p>
    <p>Existing records stay readable, exportable and available for backup or deletion after a paid period ends. Some new creation, capture or expansion beyond the free allowance can require current verified paid access. A restored job file does not grant a subscription.</p>

    <h2>Monthly and yearly billing</h2>
    <p>Both plans are recurring, auto-renewing subscriptions. The monthly plan charges the full displayed monthly amount each month. The yearly plan charges the full displayed annual amount each year; it is not charged as twelve separate monthly payments. There is no advertised free trial.</p>
    <p>Google Play handles payment through your Google account. Your subscription renews until cancelled according to the store’s terms. The purchase screen and Google Play subscription page show the applicable renewal and price details.</p>

    <h2>Cancel, manage and request a refund</h2>
    <p>Open Plans & purchases in Pairtrace and choose Manage in Google Play, or open <a href="https://play.google.com/store/account/subscriptions">Google Play subscriptions</a> with the account used to purchase. Cancellation normally stops the next renewal while access continues through the paid period, subject to the store’s refund, revocation and other applicable rules.</p>
    <p>Deleting a job, uninstalling Pairtrace, clearing app data or sending a backup to another person does not cancel billing. Refund requests are handled under <a href="https://support.google.com/googleplay/answer/2479637">Google Play’s refund rules</a>; approval is not guaranteed by NextEleven. See Google’s <a href="https://support.google.com/googleplay/answer/7018481">subscription management instructions</a> and <a href="https://play.google.com/about/play-terms/">Google Play terms</a>. Nothing on this page removes rights you have under applicable law.</p>

    <h2>Purchase verification and offline work</h2>
    <p>Pairtrace uses Google Play and RevenueCat to verify optional Plus access. Internet access is needed to obtain current prices, buy, restore or refresh purchase verification. A pending payment, failed verification or cancelled checkout does not grant new paid access.</p>
    <p>Local job files and on-device recognition support offline work. Paid verification is cached for a limited period, currently up to seven days from its verified status, and cannot extend the store’s paid access period. If the cache expires or a purchase is refunded or revoked, new paid work may be restricted until current access is verified. Existing records remain available to read and export.</p>
    <p>Use Restore purchases with the same Google Play account when access needs checking. This is separate from Restore a job backup, which opens a portable job copy. Test builds may provide developer QA access; that is not a purchase and is not transferred through a backup.</p>

    <h2>What a Pairtrace record means</h2>
    <p>Pairtrace is a documentation tool. A cable marked verified has technician-confirmed matching labels at both scheduled ends without outstanding conflicting records under the app’s checks. You must inspect the physical labels, locations and work. Recognition can misread characters; a diagram shows the recorded schedule, not a discovered physical route.</p>
    <p className={styles.warning}>Pairtrace does not test electrical safety, continuity, signal quality or cable performance. It does not certify an installation, replace a cable tester or provide permission to work on a system. Follow site rules, professional requirements and the procedures appropriate to the installation.</p>
    <p>Optional technician names are self-entered. Observation times use the device’s time. Exports and backups are unsigned files, not independent proof of identity, authorship, a trusted timestamp or legal admissibility. Review what an interim handover says before sending it.</p>

    <h2>Your files and authorized use</h2>
    <p>Use Pairtrace only with jobs, images and systems you are permitted to document. You retain your rights in the information and images you supply. Respect client confidentiality and any rights held by other people in those materials.</p>
    <p>Reports and portable backups are not password encrypted. Protect them appropriately, keep a separate copy of important work and verify the origin of any backup you restore. A handoff opens as a separate job copy; it is not live collaboration or automatic synchronization. Purchase access is verified separately and is not licensed to a recipient merely by sharing a job.</p>

    <h2>Availability and help</h2>
    <p>Features and store availability can vary by version, device and region. Device failures, denied permissions, storage limits, network problems and third-party store services can affect the workflow. Keep backups before reinstalling or changing devices. We do not promise that every physical label will be recognized correctly or that a particular installation outcome will result.</p>
    <p>Contact NextEleven LLC at <a href="mailto:hello@nexteleven.dev?subject=Pairtrace%20billing%20or%20terms">hello@nexteleven.dev</a> for app or subscription help. Do not email passwords, payment details or purchase tokens. See <Link href="/pairtrace/privacy">Privacy</Link> for data handling and <Link href="/pairtrace/support">Support</Link> for practical instructions.</p>
  </article>;
}
