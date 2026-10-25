import type { Metadata } from "next";
import Link from "next/link";
import styles from "../dinnlume.module.css";

export const metadata: Metadata = {
  title: "Dinnlume support",
  description: "Help with Dinnlume dinner ideas, weekly plans, pantry, groceries, barcode scanning, dietary exclusions, cooking, saved recipes, backups and optional Plus.",
  alternates: { canonical: "/dinnlume/support" },
};

export default function DinnlumeSupport() {
  return <article>
    <p className={styles.label}>DINNLUME / SUPPORT</p>
    <h1>A little less wondering about dinner.</h1>
    <p className={styles.notice}>Dinnlume starts with 48 free recipes and keeps the everyday work free: choose dinner, plan manually, check your pantry, make a grocery list and follow the cooking steps. Optional Plus adds automatic draft weeks and saving or applying meal rotations. No account is required, and the app has no ads.</p>
    <p>For help, email <a className={styles.contact} href="mailto:hello@nexteleven.dev?subject=Dinnlume%20support">hello@nexteleven.dev</a></p>
    <p>Include your app version, phone model, Android version, what you tried and what happened. A redacted screenshot can help. Keep backups and the original installation intact while a data issue is investigated. Do not send passwords, card details, purchase tokens, private review codes or an entire kitchen backup unless support explains why a specific file is needed.</p>

    <h2>Get the first dinner on the table</h2>
    <ol>
      <li>Open Tonight. Choose All foods, Vegetarian or Vegan, and review Food allergies & ingredients to avoid.</li>
      <li>Add ingredients you want to use, or open a suggested recipe straight away. Pantry setup is optional.</li>
      <li>Check the recipe ingredients, servings, timing and any preference warning. Save it to favorites or download a readable copy if you want to keep it.</li>
      <li>Choose Add to week for a particular day, or Cook this dinner for the focused steps.</li>
      <li>In Week and Groceries, check that the same seven-day range covers the dinners you intend to shop for.</li>
    </ol>

    <h2>Common questions</h2>
    <details><summary>What does “I have this ingredient” mean?</summary>
      <p>Adding an ingredient records your statement that it is present. Leaving its amount blank means quantity unknown. Dinnlume keeps that uncertainty visible and does not subtract an invented amount from groceries.</p>
      <p>Enter a measured amount and unit when you want compatible quantities deducted. “Usually have” is a reminder, not a verified stock count. Recheck your kitchen before shopping. The app does not automatically consume pantry stock as you cook.</p>
    </details>
    <details><summary>Why is my grocery list different from the week I expected?</summary>
      <p>Week and Groceries share a seven-day date range. Use Change days to select the dates you need; older and future plans remain saved. Adding a dinner outside the current range can move the view to that dinner’s dates.</p>
      <p>Groceries combines the selected days and deducts only measured pantry quantities with compatible units. Changing a meal, servings, date range or pantry amount can change requirements. Items whose requirements change may need checking again. A shopping check mark does not add pantry stock.</p>
    </details>
    <details><summary>Are the prices live store prices?</summary>
      <p>No. Product lookup supplies no price. You may enter your own whole-pack price, currency and pack quantity. Dinnlume rounds up to enough whole packs for the amount needed.</p>
      <p>A partly priced list has a known basket subtotal with its coverage shown. Unknown items stay unknown. Taxes, fees, coupons, substitutions and later store changes are not included. The figure is not a retailer quote or a promise of your checkout total.</p>
    </details>
    <details><summary>How do barcode scans change my pantry or list?</summary>
      <p>Choose Scan pantry item or Scan grocery item. Camera decoding happens on your device; you can also enter barcode digits manually. Scanning opens a review. It does not silently add an ingredient, change a pantry amount, set a price or confirm allergy suitability.</p>
      <p>Choose the ingredient match and check the current package. Pantry review asks for your <strong>new total</strong>, including what was already there. Grocery review checks the selected shopping item without adding stock. Repeating a confirmed grocery scan does not toggle the item back off. A remembered barcode match still requires review and confirmation.</p>
      <p>Look up product online is optional and sends the barcode to <a href="https://world.openfoodfacts.org">Open Food Facts</a>, which also receives your IP address and the app’s User-Agent. Its community data may be missing, incomplete or out of date. Product data is attributed to Open Food Facts under the <a href="https://opendatacommons.org/licenses/odbl/1-0/">ODbL</a>. Camera images and your dietary preferences are not part of that lookup.</p>
    </details>
    <details><summary>What if I deny the camera permission?</summary>
      <p>You can enter a barcode manually and keep using recipes, plans and lists. To use the camera later, enable Camera for Dinnlume in Android’s app permissions. Manual entry is still useful when a label is damaged or difficult to frame. Avoid clearing app storage as a permission troubleshooting step.</p>
    </details>
    <details><summary>Can I rely on Vegan, Vegetarian or allergy exclusions?</summary>
      <p>These controls filter recipe declarations and ingredients; changing the dietary choice keeps your exclusions. Saved favorites remain readable with conflict warnings when your preferences change. A recipe with no declared allergens is not an allergy-safe claim.</p>
      <p>Always read actual package ingredients, possible traces and preparation directions. Recipe metadata and product databases can be incomplete, and text matching can miss synonyms. Dinnlume does not verify medical, allergy, cross-contact or dietary suitability.</p>
    </details>
    <details><summary>Will a cooking timer alert me with the phone locked?</summary>
      <p>The app saves your cooking step and timer. In Settings, Cooking reminders shows notification and alarm access. On supported Android versions, timely background reminders may need Alarms & reminders access as well as notifications.</p>
      <p>Android, battery settings and denied permissions can delay or prevent a reminder. After restarting the phone, reopen Dinnlume to restore a pending reminder. Use a kitchen timer when you need a dependable alert, and check the food itself; elapsed time does not establish doneness.</p>
    </details>
    <details><summary>Will favorites survive recipe collection updates?</summary>
      <p>Favorites keep a local recipe copy. Open a recipe and choose Download recipe to save a readable offline card that opens in a browser or can be printed. A recipe card is separate from the full kitchen backup.</p>
      <p>We plan recipe additions on the first Tuesday of each month. That is a planned cadence, not a guarantee that a particular batch or feature is available on a particular date. Check the installed collection and release information for what has actually arrived.</p>
    </details>
    <details><summary>How do I back up my kitchen or change phones?</summary>
      <p>In Settings, choose Export local backup and save the file somewhere you can find. It contains your kitchen state, saved recipe copies and barcode-to-ingredient links. Dinnlume has no automatic kitchen cloud sync, and its Android automatic app backup is disabled.</p>
      <p>Import a backup replaces the current local kitchen after confirmation. The app retains a local recovery copy first. Keep a separate export before importing, resetting, changing phones or uninstalling. Exports are not password encrypted; protect and delete copies where you saved them. Kitchen backups do not transfer a subscription or complimentary review access.</p>
    </details>
    <details><summary>What is included in Plus, and what happens when it ends?</summary>
      <p>Plus covers automatic draft weeks and saving or applying rotations. All 48 launch recipes, manual planning, pantry, groceries and scanning, dietary exclusions, cooking, timers, favorites, downloads and backups remain free.</p>
      <p>When Plus ends, saved recipes, plans, lists and rotations remain available. You can keep reading, editing, cooking and exporting saved material. Automatic drafts and saving or applying rotations require current access. See <Link href="/dinnlume/terms">Plans & terms</Link> for pricing and renewal.</p>
    </details>
    <details><summary>How do I restore, manage or cancel Plus?</summary>
      <p>Open Dinnlume Plus & purchases in Settings. Restore purchases checks the Google Play account used to subscribe. It restores verified purchase access, not kitchen files. Import a backup is the separate kitchen-data action.</p>
      <p>Choose Manage or cancel in Google Play, or open <a href="https://play.google.com/store/account/subscriptions">Google Play subscriptions</a> with the purchasing account. A pending payment or cancelled checkout does not create new verified access. Resetting the kitchen, deleting the app or clearing storage does not cancel renewal.</p>
    </details>
    <details><summary>How do I ask about purchase-service records?</summary>
      <p>Open Dinnlume Plus & purchases and find Purchase support. If a private support reference is available, copy it and send it privately to <a href="mailto:hello@nexteleven.dev?subject=Dinnlume%20purchase%20support">hello@nexteleven.dev</a> with your request. It helps locate the purchase-service record; it is not a password and does not authorize account changes. A Google Play GPA order reference can also help when a receipt is available.</p>
      <p>We can help with access, correction or deletion questions about support or purchase-related information and explain which records are held by a provider. Provider retention obligations can apply. There is no Dinnlume app account to delete, and support cannot remotely retrieve or erase kitchen files held only on your phone. Do not send private access codes, purchase tokens, passwords or card details.</p>
    </details>
    <details><summary>A save failed or my kitchen will not open</summary>
      <p>Stop before uninstalling or clearing storage. The app preserves unreadable saved data for recovery and keeps previous state when a save cannot finish. Check available storage, keep any backups and contact support with the exact message and a redacted screenshot. We cannot recover a local-only kitchen from a server.</p>
    </details>

    <p className={styles.warning}>Recipes are editorial guidance, with preparation and timing still requiring independent kitchen validation. They do not replace your judgment, package instructions or appropriate food-safety guidance.</p>
    <p><Link href="/dinnlume/privacy">Privacy policy</Link> · <Link href="/dinnlume/terms">Plans & terms</Link></p>
  </article>;
}
