import type { Metadata } from "next";
import Image from "next/image";
import { InnerHeader } from "@/components/shell/InnerHeader";
import { SiteFooter } from "@/components/shell/SiteFooter";
import { ProjectContact } from "@/components/shell/ProjectContact";

export const metadata: Metadata = {
  title: "Sean McDonnell & NextEleven’s AI-led engineering workflow",
  description: "Meet NextEleven: an AI-led software engineering company with Sean McDonnell accountable for customer scope and commitments, and coordinated specialist agents supporting delivery.",
  alternates: { canonical: "/about" },
};
const skills = [
  ["Languages", "Python · Rust · TypeScript / JavaScript · Swift · Kotlin · SQL · Bash"],
  ["Applications & data", "FastAPI · REST APIs · React · Next.js · SwiftUI · Jetpack Compose · PostgreSQL / pgvector · SQLite · Redis"],
  ["Applied AI & retrieval", "LLM APIs · tool calling · MCP · document ingestion · embeddings · hybrid search · reranking · source citations · evaluation"],
  ["Verification & delivery", "Docker · GitHub Actions · automated tests · CI · API integration · failure investigation · release checks · runbooks · handoff documentation"],
] as const;
const person = {
  "@context": "https://schema.org", "@type": "Person", "@id": "https://www.nexteleven.dev/about#sean-mcdonnell",
  name: "Sean McDonnell", jobTitle: "Software Engineer & Applied AI Consultant", url: "https://www.nexteleven.dev/about",
  email: "hello@nexteleven.dev", sameAs: ["https://github.com/seanebones-lang", "https://www.linkedin.com/in/nextelevendev/"],
  address: { "@type": "PostalAddress", addressLocality: "Mansfield", addressRegion: "TX", addressCountry: "US" },
  worksFor: { "@id": "https://www.nexteleven.dev/#organization" },
};

export default function AboutPage() {
  return <>
    <InnerHeader current="about" />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }} />
    <main className="about-main">
      <section className="about-hero"><div><p className="about-kicker">Sean McDonnell · Owner, NextEleven</p><h1>Sean.<br />NextEleven.</h1><p className="about-role">Owner of NextEleven, an AI-led software engineering company. Based in Mansfield, Texas; working with clients remotely.</p></div><div className="portrait-frame"><Image src="/sean-avatar.jpg" alt="Sean McDonnell" fill priority sizes="(max-width: 700px) 80vw, 32vw" /></div></section>
      <section className="about-section"><p className="section-label">Who you work with</p><div><h2>AI-led.<br />Accountable.</h2><p>I’m Sean McDonnell, a self-taught software engineer and the owner of NextEleven LLC. I’m responsible for customer scope, commitments and the work we agree to deliver.</p><p>NextEleven’s AI coordinator directs specialist agents across architecture, implementation, product design, security and testing. The coordinator reviews their contributions and brings the work together into a checked deliverable. These are AI workers, not a claim of human employees or professional credentials.</p></div></section>
      <section className="about-section"><p className="section-label">How I approach it</p><div><h2>Understand the problem. Follow through.</h2><p>We start with what people need to do and how the system behaves. We define interfaces, data and acceptance checks, implement in reviewable steps, and test the normal and failure paths that matter. The handoff explains how to run the system and what still needs attention.</p><p>AI is central to how we work, and a capability we build into products where it helps. Agent output is reviewed against source, tests and observed behavior. Separate agent review can strengthen that process; it does not turn it into an independent human audit. External AI use involving private code or data is agreed with the customer first.</p></div></section>
      <section className="about-section"><p className="section-label">Background</p><div><h2>I learned by building.</h2><p>Before software became the center of my work, I spent 27 years in client service as an independent tattoo artist and shop owner. That experience shaped how I think about trust, clear expectations, careful work, and following through on a commitment.</p><p>NextEleven’s work spans operational workflows, backend services, document retrieval, agent tooling, client websites and published applications. The <a href="/work">work page</a> gives you concrete examples and links to the public records.</p></div></section>
      <section className="about-section"><p className="section-label">Technical range</p><div><h2>An engineering range grounded in project work.</h2><p>The right tools depend on the system and the scope. These technologies come from our implementation work, alongside a process for investigating unfamiliar systems.</p><div className="skill-grid">{skills.map(([title, copy]) => <article className="skill-card" key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
      <section className="about-section"><p className="section-label">Published work</p><div className="record"><strong className="record-number">13 / 9</strong><div><h2>Published apps on Apple’s App Store and Google Play.</h2><p>13 Apple listings and nine Google Play listings across productivity, utilities, lifestyle, and specialized workflows. Some apps are available on both stores. Publication is evidence of taking applications through release; it does not establish usage or commercial results.</p><a href="https://apps.apple.com/us/developer/sean-mcdonnell/id1839832497">View on Apple’s App Store ↗</a><br/><a href="https://play.google.com/store/apps/dev?id=7608447669826597882">View on Google Play ↗</a></div></div></section>
      <ProjectContact />
    </main>
    <SiteFooter />
  </>;
}
