import type { Metadata } from "next";
import Link from "next/link";
import styles from "../pairtrace.module.css";

export const metadata: Metadata = {
  title: "Pairtrace support",
  description: "Help with Pairtrace schedule imports, label capture, endpoint confirmation, client handovers, technician backups and Google Play subscriptions.",
  alternates: { canonical: "/pairtrace/support" },
};

export default function PairtraceSupport() {
  return <article>
    <p className={styles.label}>PAIRTRACE / SUPPORT</p>
    <h1>From the first label to the handover.</h1>
    <p className={styles.notice}>Pairtrace documents expected cable labels, technician observations and supporting images. Verify each end, review exceptions and give the next person a clear record. The sample job is fictional and stays separate from your real work.</p>
    <p>Need help? Email <a className={styles.contact} href="mailto:hello@nexteleven.dev?subject=Pairtrace%20support">hello@nexteleven.dev</a></p>
    <p>Include the app version, device and Android version, what you tried and what happened. A redacted screenshot is useful. Do not send a full client archive, passwords, purchase tokens, payment details or restricted site information.</p>

    <h2>Start a job</h2>
    <ol>
      <li>Choose Create a job and enter a name and optional site or client.</li>
      <li>Import an expected schedule CSV into the empty job, or open the job’s options menu and choose Add a cable.</li>
      <li>Record each physical endpoint using Scan a cable label or manual entry.</li>
      <li>Review the observed label, expected cable, endpoint A or B and any notes. Confirm only after checking the physical label.</li>
      <li>Review exceptions and export a handover or portable backup when ready.</li>
    </ol>

    <details><summary>How should I format the CSV schedule?</summary>
      <p>Download CSV template from the app. Required headers are <code>label</code>, <code>endpoint_a</code> and <code>endpoint_b</code>. Optional headers are <code>category</code> and <code>notes</code>. Use UTF-8 text and keep labels as text when preparing the file so a spreadsheet does not remove leading zeroes.</p>
      <pre>{'label,endpoint_a,endpoint_b,category,notes\n001,Rack A / Panel 1 / Port 01,Reception / Outlet 01,CAT6,Check both labels\n002,Rack A / Panel 1 / Port 02,Office / Outlet 02,CAT6,'}</pre>
      <p>Quote fields containing commas. The importer rejects duplicate exact labels, invalid rows and unsupported content before saving changes. Import into an empty job to preserve existing evidence; create a separate job for a revised schedule. Individual expected cables can be added through Manage job.</p>
    </details>

    <details><summary>Why did the scanner find the wrong label?</summary>
      <p>Give the label even light, reduce glare, steady the camera and frame the printed text or barcode clearly. Recognition is a suggestion. Select the correct detected text or enter the printed value manually, then choose the expected cable. Text recognition and barcode decoding run on-device; neither proves where a cable physically goes.</p>
      <p>Case, punctuation and leading zeroes matter. Characters such as zero and the letter O can be ambiguous. Correct the observed value only to match what you can actually read on the physical label.</p>
    </details>

    <details><summary>What turns a cable into “both ends verified”?</summary>
      <p>A confirmed exact expected label must be recorded at each distinct scheduled end, A and B, without active conflicting or duplicate-end records that require review. One observation does not prove the other end. The Endpoints screen shows the expected locations and recorded confirmations.</p>
      <p>Use the correct endpoint when recording the second end. Inspect the original image and history if a cable stays in review. Pairtrace does not measure continuity, electrical safety or cable performance.</p>
    </details>

    <details><summary>How do I correct a mistake without losing the evidence?</summary>
      <p>Open the cable or unscheduled observation, inspect the record and choose its resolution action. Explain why it is a repeat, corrected error or intentional exception. A resolved observation keeps its original text and image in the history and is excluded from active verification. Add a correct new observation when needed; do not mark an unresolved physical problem as fixed just to clear the status.</p>
    </details>

    <details><summary>How do I give a client a report?</summary>
      <p>Open Manage job and choose Export handover to save the complete handover ZIP. Share a report lets you choose a PDF, CSV spreadsheet or full evidence ZIP and then opens Android’s share chooser. You choose the app and recipient and complete sending there.</p>
      <p>An incomplete job can still be exported as an interim handover. Pairtrace shows missing, one-end-only, review and unscheduled counts before proceeding; the report retains those statuses. Review names, site details and images before sending. Files are not password encrypted or digitally signed.</p>
    </details>

    <details><summary>How do I hand the job to another technician?</summary>
      <p>Add handoff notes in Manage job explaining unfinished work, access constraints and where to continue. Working technician sets an optional self-entered name on new observations. It does not verify the person’s identity or change names on older observations.</p>
      <p>Choose Back up this job and give the portable backup ZIP to the next technician through an approved channel. They choose Restore a job backup to open it as a separate copy. The copy includes recorded information and original images. It does not automatically receive later edits or merge changes from your device.</p>
    </details>

    <details><summary>What is the difference between a backup and a handover?</summary>
      <p>A portable job backup is the file intended for Restore a job backup. A client handover is intended for reading and delivery: it includes the report, spreadsheet and available evidence. Do not assume every exported ZIP is a restorable backup. Keep a portable backup before changing phones, clearing storage, reinstalling or deleting a job.</p>
      <p>Restore checks the archive and opens a new copy. Those checks detect malformed or corrupted files; they do not prove who created the records. Restore files only from people or locations you trust. Neither file contains a transferable purchase entitlement.</p>
    </details>

    <details><summary>The camera permission was denied. Can I still work?</summary>
      <p>Yes. Enter labels manually and confirm the physical endpoints. To use live capture later, enable Camera for Pairtrace in Android’s app permissions. If available on your device, choose an existing image through the app’s photo picker. Avoid clearing app data as a permission troubleshooting step.</p>
    </details>

    <details><summary>The light or text is difficult to see outdoors</summary>
      <p>Use the light-mode control in the top bar to switch to bright field mode. Increase Android’s text size if needed. Search Schedule by label or endpoint, and tap the cable to read the full label, endpoint locations and evidence history.</p>
    </details>

    <details><summary>How do free access and Plus work?</summary>
      <p>The free allowance includes one real job with up to 25 cables and the fictional sample job. Optional Plus increases job and schedule capacity. Existing records can still be read, exported, backed up or deleted after paid access ends. Current store prices and the billing period appear in Plans & purchases before you confirm anything. Read <Link href="/pairtrace/terms">plans and terms</Link> for recurring billing.</p>
    </details>

    <details><summary>How do I restore or cancel a subscription?</summary>
      <p>Choose Plans & purchases, then Restore purchases, using the Google Play account that subscribed. This restores verified purchase access, not job files. Restore a job backup is the separate action for local records.</p>
      <p>Manage in Google Play opens the store’s subscription settings. Deleting the app or a job does not cancel renewal. If payment is pending or verification cannot finish, no new paid access is granted; reconnect and retry. A missing store offer means there is no available checkout. Do not send payment or credentials to support to “unlock” the app.</p>
    </details>

    <details><summary>Saved jobs will not open or a save failed</summary>
      <p>Stop before clearing storage or uninstalling. Pairtrace preserves the original data when it cannot safely open or replace saved jobs. If a write fails, keep the review form and try again after checking available device storage. Restore a known portable backup if you have one; it is opened as a separate job copy.</p>
      <p>Contact support with the error text, app and Android versions and a redacted screenshot. Keep your original installation and any existing backups intact while investigating. We cannot remotely retrieve job files that were only on your device.</p>
    </details>

    <h2>Keep the record useful and private</h2>
    <p>Use the app only on work you are authorized to document. A recorded observation is not electrical certification or an independently signed identity claim. Share only the information the recipient needs and keep sensitive backups secure.</p>
    <p><Link href="/pairtrace/privacy">Privacy policy</Link> · <Link href="/pairtrace/terms">Plans & terms</Link></p>
  </article>;
}
