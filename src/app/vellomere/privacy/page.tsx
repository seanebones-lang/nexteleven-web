import type { Metadata } from "next";
import Link from "next/link";
import styles from "../vellomere.module.css";

export const metadata: Metadata = {
  title: "Vellomere privacy",
  description: "Vellomere’s local case notes and progress, optional Google Play and RevenueCat purchase verification, support requests and data controls.",
  alternates: { canonical: "/vellomere/privacy" },
};

export default function VellomerePrivacy() {
  return <article>
    <p className={styles.label}>VELLOMERE / PRIVACY POLICY</p>
    <h1>Your investigation stays with you.</h1>
    <p className={styles.notice}>Case notes and playthrough progress stay in private app storage. Optional purchases use Google Play and RevenueCat, which process purchase and technical information separately. Local story play does not mean the entire app collects no data.</p>

    <h2>Scope</h2>
    <p>This policy covers Vellomere for Android, provided by NextEleven LLC. Read it with the installed version’s information and its Google Play Data safety disclosure. The app contains authored fictional cases; it does not send your investigation to a live AI model.</p>

    <h2>Information kept on your device</h2>
    <p>Private app storage holds each case’s reading progress, opened records, pins, selected citations, hints revealed, findings and attempts, notebook text, final account and completion state. Your reading appearance preference is stored locally too. The app does not send those records to NextEleven, RevenueCat or an AI provider during normal play.</p>
    <p>The current Android app has no in-app account, cloud progress synchronization, case-data export, import or share feature. If you independently make a screenshot, copy text or send information to support, you choose what leaves the device.</p>
    <p>The app configuration excludes local app data from Android automatic cloud backup and device-transfer backup. Do not rely on changing phones or reinstalling to recover an investigation. A purchase restore restores eligible paid access, not your notes or case progress.</p>

    <h2>Optional purchases and RevenueCat</h2>
    <p>Google Play handles payment through your Google account. Vellomere uses RevenueCat to retrieve store offers, verify one-time case access and restore purchases. RevenueCat starts when you open a paid case’s purchase page or explicitly use purchase actions such as Restore purchases. Once initialized, it may refresh purchase status when the app returns to the foreground. Playing the free cases alone does not require initializing that service.</p>
    <p>Purchase services process a generated anonymous app customer identifier, purchase history, order and product information, entitlement status and technical app, device and network metadata. A network request exposes information such as an IP address to the receiving service. These records support checkout, purchase verification, administration and fraud prevention. An anonymous identifier is not a promise that the service cannot associate transactions with a customer record. NextEleven does not receive your payment-card number.</p>
    <p>Vellomere disables RevenueCat’s optional SDK diagnostics, automatic device-identifier collection and automatic in-app messages. These choices do not remove ordinary purchase-service metadata. The app does not add your notes, pins, hints, findings or final account as RevenueCat customer attributes. Read <a href="https://www.revenuecat.com/privacy">RevenueCat’s privacy policy</a>, its <a href="https://www.revenuecat.com/docs/platform-resources/google-platform-resources/google-plays-data-safety">Google Play data disclosures</a> and <a href="https://policies.google.com/privacy">Google’s privacy policy</a>.</p>
    <p>Google Play and RevenueCat can retain service records independently of the app, including for purchase administration, fraud prevention or legal obligations. This page does not prescribe those providers’ retention periods. Optional diagnostics being off does not mean purchase and error handling make no network requests.</p>
    <p>After a purchase, RevenueCat can store the anonymous purchase-service app-user identifier through Google Block Store with its cloud-backup option enabled. This separate identifier backup can help associate a later installation with the purchase-service record. It does not back up case notes, hints, pins or progress, and is distinct from Vellomere’s excluded Android app-data backup. Availability depends on the device and Google services. See <a href="https://developer.android.com/identity/block-store">Google’s Block Store information</a>.</p>

    <h2>Local paid-access records</h2>
    <p>The app stores a device-bound encrypted purchase-verification record and any separate complimentary-access state in Android no-backup storage. Verified one-time access can then work offline. It has no recurring subscription period or local expiry timer; a subsequent verified store refresh can remove access after a refund or revocation. Store access and your locally saved investigation are separate records.</p>
    <p>A complimentary code, where NextEleven has provided one, is checked on the device. It is a separate route from a paid purchase. Do not publish a private code or include it in a support screenshot. Clearing app storage removes local complimentary access; Restore purchases does not recreate a complimentary grant.</p>

    <h2>Permissions and advertising</h2>
    <p>Vellomere uses internet access for purchase services and opening public support or policy links. It does not request camera, microphone, contacts or location permission. There is no advertising SDK or live AI service in the app. Public links open outside the case workspace; the site you visit has its own data handling.</p>

    <h2>Resetting or deleting information</h2>
    <p>Reset this investigation, followed by Reset case, clears that case’s local notes, reading progress, pins, hints and findings. Other cases and verified purchase access are unaffected. Clearing Android app storage or uninstalling normally removes the app’s local records and preferences. It does not delete provider purchase history or a screenshot or email stored elsewhere.</p>
    <p>There is no Vellomere account to delete. We cannot remotely retrieve or erase case notes that remain only on your device. A case reset, removing local app data and requesting deletion of purchase-service records are separate actions.</p>

    <h2>Support and privacy requests</h2>
    <p>Email <a href="mailto:hello@nexteleven.dev?subject=Vellomere%20privacy">hello@nexteleven.dev</a> to request help or ask about access, correction or deletion of information held through our purchase services. You may have rights under the law that applies to your request. We will explain the relevant records, any proportionate verification needed and any applicable retention limits.</p>
    <p>Once purchase services are initialized, the paid case page displays a Purchase support reference. Share that anonymous RevenueCat identifier privately with support to help locate a service record. It is not a password, proof of ownership or authorization to change a purchase. If it is unavailable, a Google Play GPA order reference may help. Do not send passwords, card details, purchase tokens or private access codes.</p>
    <p>When you contact us, we and our email providers process your contact information and what you choose to send to handle your request. We retain correspondence as needed for support and business records. Start with a concise description or redacted screenshot rather than a full notebook.</p>

    <h2>Website and policy updates</h2>
    <p>Viewing these pages creates ordinary web requests, and our hosting provider may process access and security logs. It does not give the website access to your phone’s investigation. These pages add no account form, checkout or file-upload service. We update this policy when the app’s data practices change.</p>
    <p><Link href="/vellomere/support">Get support</Link> · <Link href="/vellomere/terms">Purchases & terms</Link></p>
  </article>;
}
