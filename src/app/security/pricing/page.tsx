import type { Metadata } from "next";
import Link from "next/link";
import { InnerHeader } from "@/components/shell/InnerHeader";
import { SiteFooter } from "@/components/shell/SiteFooter";
import { SecurityContact } from "@/components/security/SecurityContact";
import { SecurityPlanCards } from "@/components/security/SecurityPlanCards";
import { securityEmail } from "@/lib/security-services";
import styles from "../security.module.css";

export const metadata: Metadata = {
  title: "Security service pricing & scope",
  description: "NextEleven security pricing: $495 checkup, hardening from $1,250, application and AI reviews from $2,500, and ongoing care from $249/month. Written scope before work.",
  alternates: { canonical: "/security/pricing" },
  openGraph: { title: "Clear security pricing. A defined scope. | NextEleven", url: "/security/pricing", images: ["/security/opengraph-image"] },
};

export default function SecurityPricingPage() {
  return <>
    <a className="skip-link" href="#pricing-content">Skip to security pricing</a>
    <InnerHeader current="security" />
    <main className={styles.main} id="pricing-content">
      <section className={styles.pricingHero}>
        <Link className={styles.back} href="/security">← Security engineering & care</Link>
        <p className="section-label">Services, pricing & scope</p>
        <h1>A clear scope.<br /><em>A clear price.</em></h1>
        <p className={styles.lead}>Know what you’re buying, what needs approval and what happens next. Start with a focused review or bring us findings that need fixing.</p>
        <p className={styles.heroNote}>USD · Written agreement before work · No payment taken on this page</p>
      </section>
      <section className={styles.section} aria-labelledby="plans-title">
        <div className={styles.sectionIntro}><p className="section-label">Choose your starting point</p><h2 id="plans-title">The work. The deliverables.<br />The boundaries.</h2></div>
        <SecurityPlanCards detailed />
      </section>
      <section className={styles.section} aria-labelledby="fit-title">
        <div className={styles.sectionIntro}><p className="section-label">Not sure which fits?</p><h2 id="fit-title">Start with what worries you.</h2></div>
        <div className={styles.fitGrid}>
          <article><h3>“We haven’t checked the site in a while.”</h3><p>Start with the <a href="#checkup">Security Checkup</a>. Get a defined review and prioritized findings before deciding on repairs.</p></article>
          <article><h3>“We already have security findings.”</h3><p>Discuss <a href="#hardening">Fix & Harden</a>. We confirm the findings, agree the changes and quote the implementation.</p></article>
          <article><h3>“Our app or AI tool handles sensitive work.”</h3><p>Scope an <a href="#application">Application & AI Review</a> around the relevant identity, data and tool-permission paths.</p></article>
          <article><h3>“We need someone to keep an eye on maintenance.”</h3><p>Discuss <a href="#care">Security Care</a> after the initial review. The agreement defines the schedule and who responds to alerts.</p></article>
        </div>
      </section>
      <section className={styles.agreement} aria-labelledby="agreement-title">
        <div><p className="section-label">Before you commit</p><h2 id="agreement-title">Agreed before access.<br />Approved before change.</h2><p>Send a short description first. We’ll confirm fit and availability, then provide a written scope and quote.</p><a className="primary-action" href={securityEmail("Security services — help choosing a scope")}>Ask about your project <span aria-hidden="true">↗</span></a></div>
        <ul>
          <li><strong>Scope and ownership.</strong> Named systems, review depth, access method and written authorization before testing.</li>
          <li><strong>Fees and timing.</strong> Deliverables, final price, payment terms, applicable taxes and schedule before invoicing. Additional work requires approval.</li>
          <li><strong>Existing costs.</strong> Hosting, software licenses, cloud usage and other provider charges remain separate.</li>
          <li><strong>Production permission.</strong> Assessment does not authorize live changes. We agree on the release and recovery plan separately.</li>
          <li><strong>Care terms.</strong> Billed monthly under the agreed terms. Initial review is separate; cancellation, support hours and alert handling are confirmed before enrollment.</li>
          <li><strong>Specialist work.</strong> Formal penetration testing, compliance-readiness work and incident response need dedicated scopes. Certification and 24/7 response are not included in these packages.</li>
        </ul>
      </section>
      <SecurityContact />
    </main>
    <SiteFooter />
  </>;
}
