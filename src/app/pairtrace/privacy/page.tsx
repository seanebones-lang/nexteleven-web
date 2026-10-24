import type { Metadata } from "next";
import Link from "next/link";
import styles from "../pairtrace.module.css";

export const metadata: Metadata = {
  title: "Pairtrace privacy",
  description: "How Pairtrace handles local cable schedules, original photos, technician notes, exports, on-device scanning and optional Google Play subscriptions.",
  alternates: { canonical: "/pairtrace/privacy" },
};

export default function PairtracePrivacy() {
  return <article>
    <p className={styles.label}>PAIRTRACE / PRIVACY POLICY</p>
    <h1>Your job records stay on your device.</h1>
    <p className={styles.notice}>Pairtrace stores cable schedules and evidence locally. Optional purchase services and Google’s scanning SDK handle separate technical information as explained below. There is no Pairtrace app account, advertising or automatic team cloud sync.</p>

    <h2>What this policy covers</h2>
    <p>This policy covers the Pairtrace Android app provided by NextEleven LLC. The installed version and Google Play’s Data safety information should be read alongside it. Developer QA builds have different purchase and network availability from production builds; test access is not a paid subscription.</p>

    <h2>Job information held locally</h2>
    <p>Pairtrace stores the jobs you create or restore, imported cable schedules, cable identifiers, endpoint locations, categories, notes, observations, timestamps, review and resolution records, and your chosen appearance settings in private app storage. Original images captured or selected for an observation are stored with that job’s evidence. Optional technician names are self-entered labels attached to new observations; they are not verified identities. Handoff notes also remain in the local job.</p>
    <p>Pairtrace does not upload these job records, images, technician names or handoff notes to NextEleven, RevenueCat or a remote AI model. Original images can contain metadata from their camera or photo source. Review the images and report contents before sharing client or site information.</p>

    <h2>On-device recognition and Google ML Kit</h2>
    <p>Pairtrace uses Google ML Kit for text recognition and barcode/QR decoding. The recognition input and results are processed on the device rather than sent to Google for recognition.</p>
    <p>Google’s SDK can separately contact its services for maintenance and send operational metrics. These can include device and app versions, installation-scoped identifiers, processing times, feature events and errors, input sizes and API configuration. These technical metrics are distinct from the image and recognized text. See <a href="https://developers.google.com/ml-kit/terms">ML Kit’s privacy information</a>, its <a href="https://developers.google.com/ml-kit/android-data-disclosure">Android data disclosures</a>, and <a href="https://policies.google.com/privacy">Google’s privacy policy</a>. Production builds have network access for purchase services, so we do not claim that every SDK request is offline.</p>

    <h2>Optional subscriptions and RevenueCat</h2>
    <p>Google Play handles checkout and payment details. Pairtrace uses RevenueCat to obtain store prices, verify subscription access and restore purchases. RevenueCat uses an app-generated anonymous customer identifier and processes purchase history, product and transaction information, subscription status and technical app/device/network information. Requests can expose an IP address to the receiving service. These records support purchase functionality, fraud prevention, subscription administration and purchase analytics. NextEleven does not receive your card number.</p>
    <p>The app disables RevenueCat’s optional SDK diagnostics and automatic device-identifier collection. Ordinary purchase-service metadata still exists. Pairtrace does not set technician names, client information, job text or images as RevenueCat customer attributes. See <a href="https://www.revenuecat.com/privacy">RevenueCat’s privacy policy</a> and its <a href="https://www.revenuecat.com/docs/platform-resources/google-platform-resources/google-plays-data-safety">Google Play data disclosures</a>.</p>
    <p>A protected local purchase-status cache is separate from job backups. Restoring a job file does not restore or grant paid access. Google Play and RevenueCat may retain purchase records for their service, fraud prevention and legal obligations. Removing local job data does not erase those records or cancel billing.</p>

    <h2>Camera, files and permissions</h2>
    <p>Camera access is requested for live capture. You can decline it and enter a label manually. File and photo selection use Android’s pickers so you choose the content to open or save. The app does not request contacts, microphone or location permission. It does not use an advertising identifier for tracking or contain an advertising SDK.</p>

    <h2>Files you save, share and hand over</h2>
    <p>You choose when to save a handover, export a spreadsheet, make a portable job backup or open Android’s share chooser. These files can contain cable locations, original images, technician names, notes and timestamps. Any email, cloud drive, messaging service or recipient you select handles the copy under its own policies.</p>
    <p className={styles.warning}>Exported reports and backups are not password encrypted or digitally signed. Backup checksums help detect file corruption; they do not prove authorship, technician identity or the truth of a recorded observation. Keep sensitive job files in an appropriate private location and restore files only from a source you trust.</p>
    <p>A technician handoff is a separate copy at the time it was saved. Pairtrace does not continuously sync changes between devices or merge different technicians’ versions automatically.</p>

    <h2>Deleting records and keeping a backup</h2>
    <p>Delete local job removes its saved job records and original photos no longer referenced by another job. It does not recall shared files, delete a recipient’s copy, remove files you saved elsewhere or cancel a subscription. Temporary share files and local recovery copies can have a separate lifecycle from the active job.</p>
    <p>Uninstalling or clearing app storage normally removes local app data. Pairtrace disables Android’s automatic app cloud backup and device-transfer backup in its configuration. Make a portable job backup before changing devices, clearing storage or reinstalling. Delete exported files separately where you saved them. If records cannot be opened, keep the app installed and contact support before clearing anything.</p>

    <h2>Support, privacy requests and this website</h2>
    <p>If you email <a href="mailto:hello@nexteleven.dev?subject=Pairtrace%20privacy">hello@nexteleven.dev</a>, we and our email providers process your contact information and the material you choose to send so we can respond. Send a redacted screenshot and a description of the issue rather than a full client archive. Do not send passwords, card details, purchase tokens or credentials. Support correspondence is retained as needed to handle requests and maintain business records.</p>
    <p>Contact us to ask about access, correction or deletion of support or purchase-related information held for this app. We will explain what non-sensitive information is needed to locate a relevant record and which records are controlled by Google Play or another provider. We cannot remotely read or delete job files that remain solely on your device.</p>
    <p>Viewing these support pages creates ordinary web requests; our hosting service can process access and security logs. Visiting the website does not provide access to your device’s Pairtrace jobs. We update this policy when the app’s practices change.</p>
    <p><Link href="/pairtrace/support">Get help with Pairtrace</Link> · <Link href="/pairtrace/terms">Read plans and terms</Link></p>
  </article>;
}
