import type { Metadata } from "next";
import Link from "next/link";
import { InnerHeader } from "@/components/shell/InnerHeader";
import { SiteFooter } from "@/components/shell/SiteFooter";
import { ProjectContact } from "@/components/shell/ProjectContact";

export const metadata: Metadata = {
  title: "Complex software, backend systems & AI engineering",
  description: "AI-led engineering across architecture, backend systems, APIs, AI agents, retrieval, iOS, Android, cloud delivery, security and software modernization. Defined scope, tested delivery.",
  alternates: { canonical: "/build" },
};

const services = [
  { id: "systems", nav: "Systems", title: "System architecture & backend engineering", copy: "Build the services and data flows a product depends on. We define interfaces, data models, permissions and failure behavior, then implement the system in reviewable steps.", examples: "Database-backed services · Background jobs · Role-aware workflows · Data migrations", delivery: "Architecture decisions, implemented services, API contracts and acceptance checks matched to the agreed workload." },
  { id: "integrations", nav: "Integrations", title: "APIs & operational integrations", copy: "Connect products and business tools without leaving the failure cases to chance. Bring information into the right workflow with clear authentication, data mapping, retries and reconciliation.", examples: "REST APIs · Webhooks · Imports and exports · Third-party tools · Workflow automation", delivery: "A working integration, checked error and duplicate-event paths, configuration handoff and operating notes." },
  { id: "ai", nav: "AI & retrieval", title: "AI agents, retrieval & model integrations", copy: "Build AI around a defined job and measurable checks: grounded document search, a tool-using assistant, or a supervised workflow connected to your existing software.", examples: "Document ingestion · Hybrid search and citations · MCP tools · Model gateways · Evaluations", delivery: "An implemented workflow with task-specific evaluations, explicit data and tool boundaries, and documented failure behavior." },
  { id: "mobile", nav: "Mobile", title: "iOS, Android & app delivery", copy: "Build or modernize native applications and the services behind them. Connect a considered interface to dependable local records, device features and a practical release path.", examples: "SwiftUI · Jetpack Compose · Offline workflows · Camera and barcode tools · Purchases and reminders", delivery: "A native candidate, scoped simulator and device checks, migration and purchase checks where relevant, and release preparation." },
  { id: "delivery", nav: "Cloud & delivery", title: "Cloud delivery, CI & recoverability", copy: "Make software repeatable to build, deploy and operate. Connect release automation, configuration, health signals and recovery steps to the application they support.", examples: "Containers · GitHub Actions · Staging and production · Structured logs · Backup and restore", delivery: "Deployment configuration, a checked release path, agreed health signals, rollback steps and a usable operating handoff." },
  { id: "security", nav: "Security", title: "Application & AI security engineering", copy: "Follow how code, accounts, data and connected tools cross trust boundaries. Validate findings, implement agreed hardening and check the result through a controlled release.", examples: "Authorization · Dependency exposure · CI and token reach · Agent permissions · Recovery readiness", delivery: "Source-backed findings, controlled validation, agreed repairs and a clear record of remaining risk." },
  { id: "modernization", nav: "Modernization", title: "Legacy rescue, modernization & performance", copy: "Take over a stalled or fragile codebase, establish how it behaves and move it forward without discarding useful work. Repair failures, investigate bottlenecks and prepare the next release.", examples: "Broken builds · Dependency upgrades · API and database failures · App migrations · Slow workflows", delivery: "Reproduced behavior, prioritized changes, focused repairs and before-and-after measurements where performance is in scope." },
  { id: "verification", nav: "Verification", title: "Testing, release verification & handoff", copy: "Give an implementation an acceptance process that matches real use. Check the important normal, failure, permission and recovery paths, with evidence another engineer can follow.", examples: "Integration checks · Installed-package tests · Native-device scenarios · Purchase and restore · Staging comparisons", delivery: "Agreed scenarios, executable checks where useful, results tied to the candidate, and explicit untested boundaries." },
  { id: "web", nav: "Web platforms", title: "Web applications & customer portals", copy: "Connect the customer interface to the operation behind it: accounts, documents, dashboards, booking, transactions or internal workflows. A clear business website remains a useful starting point when that is the right scope.", examples: "Responsive frontends · Customer accounts · Bilingual journeys · Backend connections · Inquiry routing", delivery: "Defined user journeys, implemented frontend and backend boundaries, accessibility and performance checks, and a verified release." },
] as const;

const questions = [
  ["Can you take on a substantial project?", "Yes. Bring the product goal, existing system and constraints. We can scope a new build, integration, modernization or repair engagement with defined deliverables and acceptance checks. The $250 diagnosis is a focused entry point for one issue; larger engineering work receives its own scope and quote."],
  ["How does the AI-led team work?", "Sean McDonnell owns customer scope and commitments. Our AI coordinator directs specialist agents across architecture, implementation, design, security and testing, and reviews the results. Any external AI use involving private code or data is agreed with you first."],
  ["What is agreed before work starts?", "We confirm the systems, deliverables, access, acceptance checks, fees and delivery plan. Hosting, licenses and model or other provider usage are separate costs. Ongoing maintenance and support hours are defined separately. Production changes require an agreed release and recovery plan."],
  ["What will the handoff include?", "The agreed source and configuration, verification results, operating instructions and remaining issues. We distinguish a successful build from an installed test or a live release. Store approval, model accuracy, universal security and commercial results are not guaranteed by an engineering engagement."],
] as const;

export default function BuildPage() {
  return <>
    <InnerHeader current="build" />
    <main className="build-main">
      <section className="build-hero">
        <p className="section-label">AI-led software engineering</p>
        <h1>Complex software.<br />Clear delivery.</h1>
        <p>Bring us the system you need to build, connect, repair or release. We work across architecture, backend services, data, AI and native applications—from a focused technical investigation to a defined product build or modernization.</p>
        <div className="work-actions"><a className="primary-action" href="#start">Discuss the engineering work <span>↗</span></a><Link href="/work">Inspect our work ↗</Link></div>
        <p className="build-diagnosis">One broken workflow? <Link href="/diagnosis">Start with the $250 software diagnosis ↗</Link></p>
      </section>
      <section className="audience-section" aria-labelledby="audience-title">
        <p className="section-label">Your problem. A coordinated engineering effort.</p>
        <h2 id="audience-title">Build what the business needs.</h2>
        <div className="audience-grid">
          <article id="business"><p className="section-label">For owners & product teams</p><h3>From business problem to working system.</h3><p>Bring the process, the product idea or the tools that no longer fit. We turn unclear requirements into a defined build: the workflows, data, interfaces and checks needed to put it to use.</p><a href="#start">Describe the outcome ↗</a></article>
          <article id="technical"><p className="section-label">For engineering teams</p><h3>Get into the difficult implementation.</h3><p>Bring the architecture, repository, backlog or production failure. We can work across backend services, integrations, retrieval, native apps, security hardening and release engineering within an agreed boundary.</p><a href="#services-title">Find the engineering scope ↗</a></article>
        </div>
      </section>
      <section className="services-section" aria-labelledby="services-title">
        <p className="section-label">Engineering disciplines</p>
        <h2 id="services-title">Across the system.<br />Through the release.</h2>
        <nav className="service-jump-links" aria-label="Engineering disciplines">{services.map(service => <a key={service.id} href={`#${service.id}`}>{service.nav}</a>)}</nav>
        <div className="services-grid">{services.map((service, index) => <article className="service-card" id={service.id} key={service.id}>
          <span className="service-index">{String(index + 1).padStart(2, "0")}</span>
          <h3>{service.title}</h3><p>{service.copy}</p><p className="service-examples">{service.examples}</p><p className="service-delivery"><strong>The handoff</strong>{service.delivery}</p>
          {service.id === "security" && <Link className="service-detail-link" href="/security">Explore security scopes & pricing ↗</Link>}
          {service.id === "web" && <Link className="service-detail-link" href="/presence">Explore websites & customer platforms ↗</Link>}
        </article>)}</div>
        <Link className="secondary-action" href="/work">Inspect the work behind the offer <span>↗</span></Link>
      </section>
      <section className="presence-process">
        <p className="section-label">A delivery process you can follow</p><h2>Map. Define.<br />Implement. Verify.</h2>
        <ol>
          <li><span>01</span><h3>Map the system</h3><p>Understand users, architecture, data, trust boundaries and constraints. Establish the result the work needs to achieve.</p></li>
          <li><span>02</span><h3>Define acceptance</h3><p>Agree on deliverables, checks, access, costs and release responsibilities before implementation.</p></li>
          <li><span>03</span><h3>Implement & review</h3><p>Coordinate specialist work in reviewable increments, with separate agent review where useful.</p></li>
          <li><span>04</span><h3>Verify & release</h3><p>Test the actual candidate, retain the evidence and limits, and leave a clear operating handoff.</p></li>
        </ol>
      </section>
      <section className="audience-section engineering-proof" aria-labelledby="proof-title">
        <p className="section-label">Inspectable work</p><h2 id="proof-title">Look beyond the service list.</h2>
        <p>Published applications, retrieval software and agent developer tools give you concrete work to inspect before we discuss your system.</p>
        <div className="service-jump-links"><Link href="/work">Selected delivery</Link><Link href="/apps">Apple & Android apps</Link><Link href="/deadbolt">DeadBolt integration boundaries</Link><a href="https://github.com/seanebones-lang/personal-RAG">PersonalRAGVault source</a></div>
      </section>
      <section className="audience-section engineering-questions" aria-labelledby="questions-title">
        <p className="section-label">Before we start</p><h2 id="questions-title">A strong scope.<br />Straight answers.</h2>
        {questions.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
      </section>
      <ProjectContact />
    </main>
    <SiteFooter />
  </>;
}
