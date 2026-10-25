import type { Metadata } from "next";
import Link from "next/link";
import styles from "../dinnlume.module.css";

export const metadata: Metadata = {
  title: "Dinnlume plans and terms",
  description: "Dinnlume free features, optional Plus monthly and annual subscriptions, Google Play renewal, cancellation, saved-data access and recipe limitations.",
  alternates: { canonical: "/dinnlume/terms" },
};

export default function DinnlumeTerms() {
  return <article>
    <p className={styles.label}>DINNLUME / PLANS & TERMS</p>
    <h1>Dinner stays yours. Plus makes planning easier.</h1>
    <p className={styles.notice}>Dinnlume has a free core and optional recurring Plus subscriptions. U.S. reference prices are <strong>US$2.99 per month</strong> or <strong>US$19.99 per year</strong>. A purchase is available only when the installed app presents a live Google Play offer. The actual localized price, currency, full charge and billing period appear before you confirm. This website does not start a payment.</p>

    <h2>What stays free</h2>
    <p>The launch collection includes 48 free recipes. Recipe browsing and favorites, manual weekly planning, pantry, grocery lists, camera barcode scanning and manual barcode entry, dietary and allergen exclusions, cooking steps, timers, recipe downloads, exports and kitchen backups are free. No Dinnlume account is required, and the app contains no ads.</p>
    <p>Plus is limited to automatic draft weeks and saving or applying meal rotations. Saved recipes, plans, grocery lists and rotations remain available after Plus ends. You can keep reading, editing, cooking from and exporting saved material. Automatic drafts and saving or applying rotations require current verified Plus access.</p>

    <h2>Monthly and annual subscriptions</h2>
    <p>Both plans automatically renew until cancelled under Google Play’s terms. The monthly plan charges the full displayed monthly amount each month. The annual plan charges the full displayed annual amount each year; the annual total is not split into twelve monthly payments. No free trial is advertised here.</p>
    <p>Google Play handles payment through the purchasing Google account. The app’s live offer and Google Play confirmation show the applicable price and period before a charge. Availability, taxes and store offers can depend on region, account and installed version. A missing or unavailable offer means there is no checkout to complete in the app at that time.</p>

    <h2>Manage, cancel and request a refund</h2>
    <p>Open Dinnlume Plus & purchases in Settings and choose Manage or cancel in Google Play, or open <a href="https://play.google.com/store/account/subscriptions">Google Play subscriptions</a> using the account that subscribed. Cancellation normally stops the next renewal while access continues through the paid period, subject to the store’s refund, revocation and other applicable rules.</p>
    <p className={styles.warning}>Resetting your kitchen, deleting a backup, clearing app storage, uninstalling the app or requesting deletion of purchase-service information does not cancel Google Play billing. Manage cancellation separately in Google Play.</p>
    <p>Refund requests follow <a href="https://support.google.com/googleplay/answer/2479637">Google Play’s refund rules</a>; NextEleven does not guarantee approval. See Google’s <a href="https://support.google.com/googleplay/answer/7018481">subscription management instructions</a> and <a href="https://play.google.com/about/play-terms/">Google Play terms</a>. Nothing on this page removes rights you have under applicable law.</p>

    <h2>Verification, restore and offline use</h2>
    <p>Dinnlume uses Google Play and RevenueCat to verify Plus. Internet access is needed to fetch current prices, purchase, restore or refresh verification. Pending payment, a failed verification or a cancelled checkout does not grant new paid access.</p>
    <p>Free planning and saved recipes work locally. Verified Plus status is cached for a limited period, currently up to seven days, and cannot extend the store’s paid period. If that cache becomes stale, the subscription ends or access is refunded or revoked, automatic drafts and saving or applying rotations can pause until current access is verified. Your free tools and saved kitchen remain available.</p>
    <p>Use Restore purchases with the Google Play account used to subscribe. Import a backup restores kitchen data instead; a file does not grant or transfer Plus. Any complimentary reviewer access or developer QA override is separate from a subscription and is not a payment, trial or transferable backup entitlement.</p>

    <h2>Recipes, food preferences and product information</h2>
    <p>Dinnlume is a meal-planning and cooking aid. Recipe timing, portions and preparation still need independent kitchen validation. Results vary with ingredients, equipment and technique. Check quantities and follow the package directions and food-safety guidance appropriate to what you are preparing.</p>
    <p className={styles.warning}>Recipe tags, exclusion filters, barcode matches and community product data do not establish medical, allergy, cross-contact or dietary suitability. A recipe with no allergens declared is not a safety guarantee. Read every current package label, possible traces and preparation advice. Text matching can miss synonyms, and a timer does not prove that food is cooked.</p>
    <p>A scan requires your confirmation before a saved pantry or grocery change. Optional Open Food Facts lookup can return missing, incomplete or outdated information and supplies no live store price. Any basket calculation uses the pack prices and quantities you enter; unknown prices remain unknown. Taxes, fees, discounts, substitutions and later price changes are not included.</p>

    <h2>Content updates and saved copies</h2>
    <p>We plan new recipe additions on the first Tuesday of each month. This is a planned editorial cadence, not a promise that a particular batch will be delivered on a particular date. Store review, content review and technical availability can affect a release. Consult the installed collection for what is available.</p>
    <p>Favorites preserve a local recipe copy, and you can download a readable recipe card. Keep a full kitchen export for backup. Changes to the bundled collection should not be treated as a remote backup of your own saved material.</p>

    <h2>Your files and use of the app</h2>
    <p>You retain your rights in the personal information you supply. Use the app and imported files lawfully and respect other people’s rights and privacy. Keep important exports in a location you trust; they are not password encrypted. Import only trusted backups and review the replacement confirmation before continuing.</p>
    <p>There is no automatic kitchen cloud sync. A saved or shared copy is separate from the data on your phone. Device failures, limited storage, denied permissions, Android background restrictions, network problems and third-party service availability can affect the app. Keep a backup before changing phones, reinstalling or clearing storage.</p>

    <h2>Help and privacy</h2>
    <p>Dinnlume is provided by NextEleven LLC. Email <a href="mailto:hello@nexteleven.dev?subject=Dinnlume%20billing%20or%20terms">hello@nexteleven.dev</a> for app, purchase or terms questions. A private purchase support reference can help locate a relevant service record; do not send passwords, card details, purchase tokens or private access codes.</p>
    <p>See <Link href="/dinnlume/privacy">Privacy</Link> for camera processing, SDK technical data, optional product lookup, purchase services and requests about data. <Link href="/dinnlume/support">Support</Link> has practical instructions for recipes, scanning, backups and subscriptions.</p>
  </article>;
}
