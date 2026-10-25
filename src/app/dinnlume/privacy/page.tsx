import type { Metadata } from "next";
import Link from "next/link";
import styles from "../dinnlume.module.css";

export const metadata: Metadata = {
  title: "Dinnlume privacy",
  description: "How Dinnlume handles local meal plans, food preferences, pantry, barcode scanning, optional Open Food Facts lookup, Google Play purchases and backups.",
  alternates: { canonical: "/dinnlume/privacy" },
};

export default function DinnlumePrivacy() {
  return <article>
    <p className={styles.label}>DINNLUME / PRIVACY POLICY</p>
    <h1>Your kitchen stays on your device.</h1>
    <p className={styles.notice}>Dinnlume keeps recipes, plans, pantry and food preferences locally. There is no Dinnlume app account, advertising or automatic kitchen cloud sync. Optional product lookup, Google’s scanner SDK and purchase services handle separate information described below. We do not claim that every SDK operation is offline.</p>

    <h2>What this policy covers</h2>
    <p>This policy covers the Dinnlume Android app provided by NextEleven LLC. Read it alongside the installed version’s information and the app’s Google Play Data safety disclosure. These public pages explain the product’s data handling; they do not establish that an app release or purchase is available in every region.</p>

    <h2>Kitchen information held locally</h2>
    <p>Private app storage holds your household servings, cooking-time preference, dietary choice, allergen and ingredient exclusions, pantry names and measured or unknown quantities, meal dates and portions, grocery check marks, user-entered pack prices and currency, favorites, saved recipe copies, rotations, cooking step and timer, and confirmed barcode-to-ingredient links. A link can include the barcode, ingredient and your pack amount and unit.</p>
    <p>These are choices and records you enter, not verified facts about your kitchen or medical suitability. Dinnlume does not upload your kitchen, diet or exclusions to NextEleven, RevenueCat, Open Food Facts or an AI service as part of normal planning. You choose when to export or share a copy.</p>

    <h2>Camera processing and Google ML Kit</h2>
    <p>Barcode camera frames are decoded on your device using Google ML Kit. Dinnlume does not save the camera images or upload them for recognition. You can decline camera permission and enter barcode digits manually. A scan opens a review before a pantry or shopping change is saved.</p>
    <p>Google’s scanner SDK separately sends technical diagnostic and usage information. This can include app and device information, installation-scoped identifiers, feature use, processing metrics and errors. Those technical requests are separate from camera images and your kitchen records. See <a href="https://developers.google.com/ml-kit/terms">ML Kit’s terms and privacy information</a>, its <a href="https://developers.google.com/ml-kit/android-data-disclosure">Android data disclosures</a>, and <a href="https://policies.google.com/privacy">Google’s privacy policy</a>.</p>

    <h2>Optional Open Food Facts lookup</h2>
    <p>Scanning and matching a barcode can be done without looking up a product online. If you explicitly choose Look up product online, Dinnlume sends that barcode in a request to <a href="https://world.openfoodfacts.org">Open Food Facts</a>. The service also receives the connection’s IP address and an app-identifying User-Agent. The lookup does not send camera images, your pantry, diet, allergen exclusions or meal history.</p>
    <p>The community response can include a product name, brand, stated pack quantity, ingredient text, declared allergens and possible traces. Fields can be absent, incomplete, outdated or wrong. The response supplies no live store price and does not establish dietary or allergy suitability. Read the current package.</p>
    <p>Product details are shown temporarily rather than merged into a retained product database or your kitchen backup. Only a barcode match and quantities that you explicitly confirm are saved as your local kitchen records. Open Food Facts handles requests under its own policies. Its database is available under the <a href="https://opendatacommons.org/licenses/odbl/1-0/">Open Database License (ODbL)</a>; product screens include source attribution and links.</p>

    <h2>Optional Plus purchases and RevenueCat</h2>
    <p>Google Play handles checkout and payment through your Google account. Dinnlume uses RevenueCat to obtain store offers, verify Plus access and restore purchases. RevenueCat is initialized when you open or request Plus tools or use purchase actions such as refresh and restore; it is not required for the free kitchen workflow.</p>
    <p>Purchase services process an anonymous app customer identifier, purchase history, product and transaction information, subscription status, and technical app, device and network information. A request can expose an IP address to the receiving service. These records support verification, purchase administration, fraud prevention and purchase analytics. NextEleven does not receive your payment-card number.</p>
    <p>Dinnlume disables RevenueCat’s optional SDK diagnostics and automatic device-identifier collection. Ordinary purchase-service metadata still exists. The app does not attach your diet, food exclusions, recipes, pantry, camera images or kitchen backup as RevenueCat customer attributes. See <a href="https://www.revenuecat.com/privacy">RevenueCat’s privacy policy</a> and its <a href="https://www.revenuecat.com/docs/platform-resources/google-platform-resources/google-plays-data-safety">Google Play data disclosures</a>.</p>
    <p>After a purchase, RevenueCat uses Google Block Store’s cloud-backup option for the anonymous purchase-service app-user identifier. This separate identifier backup does not back up your recipes, pantry, diet or kitchen files, and is distinct from Dinnlume’s disabled automatic kitchen backup.</p>
    <p>An encrypted local purchase-verification cache and a separate protected complimentary-review record are kept in Android no-backup storage, outside kitchen exports. A kitchen backup cannot grant or transfer paid or complimentary access. These local records are separate from Google Play and RevenueCat’s service records, which may be retained for administration, fraud prevention or legal obligations.</p>

    <h2>Permissions and reminders</h2>
    <p>Camera permission is used for live barcode scanning. Optional notification and, on supported versions, Alarms & reminders access support cooking reminders. You can continue using the on-screen timer without those permissions. Android may delay or prevent background reminders.</p>
    <p>Android’s document pickers let you choose where to import a backup or save a backup or recipe card. The app does not need contacts, location or microphone permission. Dinnlume does not show ads. When you use Android’s share chooser, the app and recipient you select handle the shared copy under their own policies.</p>

    <h2>Exports, backups and recovery copies</h2>
    <p>A full kitchen export can contain food preferences and exclusions, pantry amounts, prices, meal plans, favorites and saved recipe copies, rotations, cooking progress and confirmed barcode links. Download recipe produces a separate readable recipe card. Review a file before sharing it, especially if your choices reveal personal dietary information.</p>
    <p className={styles.warning}>Exports and recipe cards are not password encrypted. Keep them in a location you trust and protect copies saved to email, cloud storage or another device. There is no automatic synchronization or remote kitchen backup service.</p>
    <p>Import replaces the active kitchen after confirmation and retains a local recovery copy first. Validation can reject malformed data; it does not establish who created the backup or that its contents are accurate. Import files only from a source you trust. Purchase verification and complimentary access are excluded from kitchen files.</p>

    <h2>Resetting or removing local data</h2>
    <p>Delete all local data resets the active kitchen, including saved barcode links. It does not cancel a subscription, erase provider purchase records, recall a shared file, or remove an export saved elsewhere. Local recovery and temporary export files can have a separate lifecycle. Resetting the kitchen does not clear the separate protected purchase-verification or complimentary-access record.</p>
    <p>Clearing Android app storage or uninstalling normally removes local app data. Dinnlume’s configuration disables Android automatic cloud and device-transfer backup. Export your kitchen before changing phones, reinstalling or clearing storage. Delete files saved elsewhere separately where you stored them. If saved data cannot be opened, contact support before clearing anything.</p>

    <h2>Support and privacy requests</h2>
    <p>If you email <a href="mailto:hello@nexteleven.dev?subject=Dinnlume%20privacy">hello@nexteleven.dev</a>, we and our email providers process your contact details and the material you choose to send so we can respond. Correspondence is retained as needed to handle the request and maintain business records. Send a redacted screenshot or a concise description first. Do not send passwords, payment details, purchase tokens or private review codes.</p>
    <p>For a purchase-related access, correction or deletion request, the private support reference in Dinnlume Plus & purchases can help locate the purchase-service record. Share it privately with support; it is not an authorization credential. If it is unavailable, a Google Play GPA order reference may help. We will explain what additional non-sensitive information is needed and which provider controls the relevant records. Applicable retention obligations can limit deletion.</p>
    <p>There is no Dinnlume app account to delete. Support cannot remotely retrieve or erase a kitchen that remains solely on your device. A local reset, provider-record request and subscription cancellation are separate actions.</p>

    <h2>These pages and policy updates</h2>
    <p>Viewing this website makes ordinary web requests; our hosting service can process access and security logs. Visiting a page does not give us access to your phone’s kitchen. These pages add no account form, checkout or file-upload service. We update this policy when the app’s practices change.</p>
    <p><Link href="/dinnlume/support">Get help with Dinnlume</Link> · <Link href="/dinnlume/terms">Read plans and terms</Link></p>
  </article>;
}
