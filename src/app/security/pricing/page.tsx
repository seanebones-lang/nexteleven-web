import type { Metadata } from "next";
import Link from "next/link";
import { CompanyHeader, CompanyFooter } from "@/components/company/CompanySite";
import { SecurityContact } from "@/components/security/SecurityContact";
import { SecurityPlanCards } from "@/components/security/SecurityPlanCards";
import { securityEmail } from "@/lib/security-services";
import styles from "../security.module.css";

export const metadata: Metadata = {
  title: "Security service pricing & scope",
  description: "NextEleven AI security pricing: $499 AI Spend-Leak Review with findings in 48 hours, $1,749 DeadBolt install, and DeadBolt Watch at $299/month. Written scope before work.",
  alternates: { canonical: "/security/pricing" },
  openGraph: { title: "Clear security pricing. A defined scope. | NextEleven", url: "/security/pricing", images: ["/security/opengraph-image"] },
};

export default function SecurityPricingPage() {
  return <>
    <a className="skip-link" href="#pricing-content">Skip to security pricing</a>
    <CompanyHeader />
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
          <article><h3>“We don’t know what our agents can reach — or spend.”</h3><p>Start with the <a href="#spend-leak-review">AI Spend-Leak Review</a>. Exposed keys, uncapped spend and over-permissioned tools, in writing, within 48 hours.</p></article>
          <article><h3>“We need a gate in front of the agents.”</h3><p>Scope a <a href="#deadbolt-install">DeadBolt Install</a>. We put the permission gate in the dispatch path and verify admitted and refused actions with you.</p></article>
          <article><h3>“We want it watched, not just installed.”</h3><p>Discuss <a href="#deadbolt-watch">DeadBolt Watch</a> after the install. Managed operation with a weekly evidence report.</p></article>
        </div>
      </section>
      <section className={styles.agreement} aria-labelledby="agreement-title">
        <div><p className="section-label">Before you commit</p><h2 id="agreement-title">Agreed before access.<br />Approved before change.</h2><p>Send a short description first. We’ll confirm fit and availability, then provide a written scope and quote.</p><a className="primary-action" href={securityEmail("Security services — help choosing a scope")}>Ask about your project <span aria-hidden="true">↗</span></a></div>
        <ul>
          <li><strong>Scope and ownership.</strong> Named systems, review depth, access method and written authorization before testing.</li>
          <li><strong>Fees and timing.</strong> Deliverables, final price, payment terms, applicable taxes and schedule before invoicing. Additional work requires approval.</li>
          <li><strong>Existing costs.</strong> Hosting, software licenses, cloud usage and other provider charges remain separate.</li>
          <li><strong>Production permission.</strong> Assessment does not authorize live changes. We agree on the release and recovery plan separately.</li>
          <li><strong>Watch terms.</strong> Billed monthly under the agreed terms. Watch follows an install; cancellation and report cadence are confirmed before enrollment.</li>
          <li><strong>Specialist work.</strong> Formal penetration testing, compliance-readiness work and incident response need dedicated scopes. Certification and 24/7 response are not included in these packages.</li>
        </ul>
      </section>
      <SecurityContact />
    </main>
    <CompanyFooter />
  </>;
}
