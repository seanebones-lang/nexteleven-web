import type { Metadata } from "next";
import Link from "next/link";
import { InnerHeader } from "@/components/shell/InnerHeader";
import { SiteFooter } from "@/components/shell/SiteFooter";
import { SecurityContact } from "@/components/security/SecurityContact";
import { SecurityPlanCards } from "@/components/security/SecurityPlanCards";
import { securityEmail, securityFaqs } from "@/lib/security-services";
import styles from "./security.module.css";

export const metadata: Metadata = {
  title: "Security services for websites, applications & AI",
  description: "NextEleven reviews, hardens and maintains websites, applications, cloud access and AI workflows. Evidence-backed findings, tested fixes and clear pricing. DFW and remote.",
  alternates: { canonical: "/security" },
  openGraph: { title: "Security is part of staying open. | NextEleven", description: "Find exposure. Make tested changes. Know what comes next.", url: "/security", images: ["/security/opengraph-image"] },
};

const services = [
  { title: "Websites & business systems", text: "Review frameworks, plugins, forms and hosting configuration. Find stale software and unsafe settings, then plan fixes around the way customers use your site.", tags: "Public websites · CMS · Customer portals" },
  { title: "Applications & APIs", text: "Trace identity, permissions and sensitive data through the code. Examine access controls, tenant boundaries, sessions, inputs and relevant failure paths.", tags: "Source review · Threat modeling · Controlled tests" },
  { title: "AI agents & integrations", text: "Examine what happens when untrusted content reaches a model with tools. Review data exposure, prompt injection, tool permissions and approval boundaries.", tags: "Agents · Retrieval · Connected tools" },
  { title: "Cloud & developer access", text: "Review account privileges, repository integrations, secrets handling and release permissions. Reduce unnecessary access while preserving the services you rely on.", tags: "Cloud accounts · GitHub · Delivery pipelines" },
  { title: "Devices & recovery", text: "Review selected workstation permissions, startup services, encryption and backups. Define what needs recovering and verify the agreed recovery path.", tags: "Workstations · Backups · Restore exercises" },
  { title: "Ongoing security care", text: "Keep an agreed review and maintenance schedule. Turn supported alerts into clear decisions, approved updates and a record of what changed.", tags: "Scheduled reviews · Maintenance · Owner reports" },
] as const;

const steps = [
  ["Agree the scope", "Confirm ownership, access, systems and test boundaries. You know what will be reviewed before work starts."],
  ["Find and verify", "Inspect the configuration, code and behavior. Separate confirmed findings from open questions and prioritize actual exposure."],
  ["Make controlled changes", "Agree the fixes and price. Test changes separately, prepare recovery and get permission before touching production."],
  ["Prove and hand over", "Verify the released behavior. Document the results, remaining risks and the next maintenance steps."],
] as const;

const service = {
  "@context": "https://schema.org", "@type": "Service",
  name: "NextEleven Security Engineering & Care",
  url: "https://www.nexteleven.dev/security",
  serviceType: "Application security review, security hardening and maintenance",
  provider: { "@id": "https://www.nexteleven.dev/#organization" },
  areaServed: "United States",
  hasOfferCatalog: {
    "@type": "OfferCatalog", name: "Security services",
    itemListElement: services.map(item => ({ "@type": "Service", name: item.title, description: item.text })),
  },
};

export default function SecurityPage() {
  return <>
    <a className="skip-link" href="#security-content">Skip to security services</a>
    <InnerHeader current="security" />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service).replace(/</g, "\\u003c") }} />
    <main className={styles.main} id="security-content">
      <section className={styles.hero} aria-labelledby="security-title">
        <div className={styles.heroCopy}>
          <p className="section-label">NextEleven · Security engineering & care</p>
          <h1 id="security-title">Security is part of <em>staying open.</em></h1>
          <p className={styles.lead}>Your website, software and connected tools keep the business moving. Protecting them is basic operating work. We find exposure, make tested changes and leave you with a clear plan.</p>
          <div className={styles.actions}><a className="primary-action" href={securityEmail()}>Start a conversation <span aria-hidden="true">↗</span></a><Link href="/security/pricing">Services & pricing <span aria-hidden="true">↗</span></Link></div>
          <p className={styles.heroNote}>For business owners and technical teams.<br />Work directly with Sean McDonnell · DFW & remote.</p>
        </div>
        <figure className={styles.system}>
          <div className={styles.systemHead}><span>Review the connections</span><span aria-hidden="true">NE / 01</span></div>
          <div className={styles.systemMap} aria-hidden="true">
            <div className={styles.node}>WEBSITES & APPS</div>
            <span className={styles.connector} />
            <div className={styles.nodeRow}><span>PEOPLE & ACCESS</span><b>YOUR<br />BUSINESS</b><span>AI & TOOLS</span></div>
            <span className={styles.connector} />
            <div className={styles.node}>CLOUD, DATA & DEVICES</div>
          </div>
          <figcaption>One weak connection can affect the whole operation. Review the system around the software.</figcaption>
          <ol className={styles.systemSteps}><li>Find</li><li>Prioritize</li><li>Fix</li><li>Verify</li></ol>
        </figure>
      </section>

      <nav className={styles.sectionNav} aria-label="Security page sections"><a href="#why-now">Why now</a><a href="#coverage">What we cover</a><a href="#how">How it works</a><Link href="/security/pricing">Pricing</Link><a href="#questions">Questions</a></nav>

      <section className={styles.section} id="why-now" aria-labelledby="why-title">
        <div className={styles.sectionIntro}><p className="section-label">Why now</p><h2 id="why-title">Maintenance can’t wait for a crisis.</h2><p>Software changes. Access accumulates. New tools connect to old accounts. A site that works today can still carry avoidable exposure.</p></div>
        <div className={styles.evidenceGrid}>
          <article><span className={styles.stat}>31%</span><h3>Software flaws are a leading entry point.</h3><p>Verizon’s 2026 DBIR reports that 31% of breaches began with vulnerability exploitation. The report analyzes 2025 data; the figure is not a prediction of your business’s risk.</p><a href="https://www.verizon.com/about/news/breach-industry-wide-dbir-finds">Read Verizon’s findings <span aria-hidden="true">↗</span></a></article>
          <article><span className={styles.evidenceIndex}>01 / Ownership</span><h3>Hosting does not maintain your application.</h3><p>Even managed hosting leaves responsibilities with the owner. Vercel assigns customers responsibility for application code, access and integrations. Someone still needs to do that work.</p><a href="https://vercel.com/docs/security/shared-responsibility">See the responsibility split <span aria-hidden="true">↗</span></a></article>
          <article><span className={styles.evidenceIndex}>02 / New connections</span><h3>AI tools add permissions to protect.</h3><p>OWASP identifies prompt injection as a risk when untrusted content changes a model’s behavior. The stakes grow when that model can use tools or access private information.</p><a href="https://genai.owasp.org/llmrisk/llm01-prompt-injection/">Read OWASP’s guidance <span aria-hidden="true">↗</span></a></article>
        </div>
        <div className={styles.businessNote}><span aria-hidden="true">↳</span><p><strong>A small business still has something to protect.</strong> Your domain, customer inquiries, staff accounts, source code and ability to keep operating all matter. Security belongs in the operating budget.</p></div>
      </section>

      <section className={styles.section} id="coverage" aria-labelledby="coverage-title">
        <div className={styles.sectionIntro}><p className="section-label">What we cover</p><h2 id="coverage-title">Follow the risk.<br />Across the business.</h2><p>Start with the concern, not a technology list. We define the system, choose the right checks and agree on the depth of work.</p></div>
        <div className={styles.coverageGrid}>{services.map((item, index) => <article key={item.title}><span className={styles.evidenceIndex}>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p><small>{item.tags}</small></article>)}</div>
      </section>

      <section className={styles.processSection} id="how" aria-labelledby="process-title">
        <div className={styles.sectionIntro}><p className="section-label">The work behind the report</p><h2 id="process-title">Find it. Fix it.<br />Verify it.</h2><p>You receive evidence and a path forward. Permission, safe testing and recovery are part of the delivery.</p></div>
        <ol className={styles.process}>{steps.map(([title, text], index) => <li key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol>
        <div className={styles.handoff}><p className="section-label">Your handoff</p><p>What was reviewed. What we found. What changed. What passed. What remains.</p><Link href="/work">Inspect our engineering work <span aria-hidden="true">↗</span></Link></div>
      </section>

      <section className={styles.section} aria-labelledby="pricing-title">
        <div className={styles.sectionIntro}><p className="section-label">Clear starting points</p><h2 id="pricing-title">Choose the next useful step.</h2><p>Start with a checkup, act on known findings or scope a deeper review. Ongoing care keeps the agreed basics current.</p></div>
        <SecurityPlanCards />
        <div className={styles.pricingFoot}><p>Prices in USD. Scope, access, delivery dates and final fees are confirmed before invoicing. Hosting and third-party charges are separate.</p><Link href="/security/pricing">Compare the full scope <span aria-hidden="true">↗</span></Link></div>
      </section>

      <section className={styles.section} id="questions" aria-labelledby="questions-title">
        <div className={styles.sectionIntro}><p className="section-label">Before we start</p><h2 id="questions-title">Straight answers.</h2></div>
        <div className={styles.faqs}>{securityFaqs.map(item => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div>
      </section>
      <SecurityContact />
    </main>
    <SiteFooter />
  </>;
}
