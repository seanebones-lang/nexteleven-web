import { securityEmail } from "@/lib/security-services";
import styles from "@/app/security/security.module.css";

export function SecurityContact() {
  return <section className={styles.contact} id="start" aria-labelledby="security-contact-title">
    <p className="section-label">Start with a conversation</p>
    <h2 id="security-contact-title">What needs protecting?</h2>
    <p>Tell us what your business runs, what concerns you and any deadline. We’ll confirm the right scope, price and availability before work begins.</p>
    <div className={styles.actions}>
      <a className="primary-action" href={securityEmail()}>Talk to Sean <span aria-hidden="true">↗</span></a>
      <a href="tel:+18339256048">833-925-6048</a>
    </div>
    <p className={styles.fine}>NextEleven · Mansfield, Texas · Remote engagements<br />Keep passwords, API keys and private customer records out of the first message.</p>
  </section>;
}
