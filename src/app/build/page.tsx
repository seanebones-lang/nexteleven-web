import type { Metadata } from "next";
import Link from "next/link";
import { InnerHeader } from "@/components/shell/InnerHeader";
import { SiteFooter } from "@/components/shell/SiteFooter";
import { ProjectContact } from "@/components/shell/ProjectContact";

export const metadata: Metadata = {
  title: "Software engineering & AI consulting services",
  description: "Hire Sean McDonnell at NextEleven to build custom software, add practical AI, connect systems, improve existing applications, or launch a business website.",
  alternates: { canonical: "/build" },
};

const services = [
  { title: "Custom business software", copy: "Replace a manual process, scattered spreadsheet, or awkward workaround with a tool designed around the people using it.", examples: "Internal tools, inventory workflows, customer records, dashboards, reporting, and backend services." },
  { title: "Applied AI consulting & implementation", copy: "Work out where AI can help, then build and evaluate a useful implementation. That can mean finding answers in documents, assisting a workflow, or connecting a model to existing tools.", examples: "Document retrieval, source citations, LLM integrations, tool calling, evaluations, and human review." },
  { title: "Software repair & improvement", copy: "Bring me an application that is failing, unfinished, or difficult to maintain. I can investigate the problem, make a focused repair, and verify the paths affected by the change.", examples: "API failures, unreliable workflows, broken builds, release problems, tests, and technical handoff." },
  { title: "APIs & system integrations", copy: "Help existing tools exchange information and support a connected workflow. Define what happens when data is missing, a service fails, or the same request arrives twice.", examples: "REST APIs, database-backed services, imports, automation, and integrations with external services." },
  { title: "Websites & customer portals", copy: "Give customers a clear way to understand your business, ask for help, or start the next step. Build a site that can grow into a portal or connect to your operation.", examples: "Business websites, bilingual pages, inquiry forms, booking flows, and portal foundations." },
  { title: "Apple application development", copy: "Build or improve an iPhone or Mac application, address release issues, and work through the details required to publish it.", examples: "Swift, SwiftUI, app workflows, testing, release preparation, and App Store submission work." },
] as const;

export default function BuildPage() {
  return <>
    <InnerHeader current="build" />
    <main className="build-main">
      <section className="build-hero">
        <p className="section-label">Services · Software engineering & applied AI</p>
        <h1>Build it.<br />Improve it.</h1>
        <p>I build custom software and help existing systems work better. You can bring me a business problem, an unfinished application, or a technical brief. We’ll agree on a useful first step and how to verify it.</p>
        <a className="primary-action" href="#start">Discuss your project <span>↗</span></a>
      </section>
      <section className="audience-section" aria-labelledby="audience-title">
        <p className="section-label">Two ways to start</p>
        <h2 id="audience-title">Start where you are.</h2>
        <div className="audience-grid">
          <article id="business"><p className="section-label">For business owners</p><h3>Start with what needs to work better.</h3><p>You don’t need to choose a programming language or know whether you need AI. Show me the process, the tools you use, and where things get stuck. I’ll help define a practical next step.</p><a href="mailto:nextelevenstudios@gmail.com?subject=Help%20with%20a%20business%20workflow">Describe the problem ↗</a></article>
          <article id="technical"><p className="section-label">For technical teams</p><h3>Bring me into the implementation.</h3><p>Share the repository, architecture, backlog, or failure you’re investigating. I can work on backend services, integrations, retrieval, developer tools, tests, and release work within an agreed scope.</p><a href="mailto:nextelevenstudios@gmail.com?subject=Software%20engineering%20engagement">Discuss the engineering work ↗</a></article>
        </div>
      </section>
      <section className="services-section" aria-labelledby="services-title">
        <p className="section-label">What I can help with</p>
        <h2 id="services-title">What I can build or improve.</h2>
        <div className="services-grid">{services.map((service, index) => <article className="service-card" key={service.title}>
          <span className="service-index">{String(index + 1).padStart(2, "0")}</span>
          <h3>{service.title}</h3><p>{service.copy}</p><p className="service-examples">{service.examples}</p>
        </article>)}</div>
        <Link className="secondary-action" href="/work">See examples of my work <span>↗</span></Link>
      </section>
      <section className="presence-process">
        <p className="section-label">How an engagement works</p><h2>Understand. Define. Build. Verify.</h2>
        <ol>
          <li><span>01</span><h3>Understand</h3><p>Look at the current process or system, the people using it, and the problem we need to solve.</p></li>
          <li><span>02</span><h3>Define</h3><p>Agree on the first useful deliverable, what it includes, and how we’ll decide whether it works.</p></li>
          <li><span>03</span><h3>Build</h3><p>Implement the work in reviewable steps, with decisions and progress you can follow.</p></li>
          <li><span>04</span><h3>Verify & hand off</h3><p>Check normal use and relevant failure paths. Leave the source, operating instructions, and remaining issues clear.</p></li>
        </ol>
      </section>
      <ProjectContact />
    </main>
    <SiteFooter />
  </>;
}
