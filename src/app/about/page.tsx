import type { Metadata } from "next";
import Image from "next/image";
import { InnerHeader } from "@/components/shell/InnerHeader";
import { SiteFooter } from "@/components/shell/SiteFooter";
import { ProjectContact } from "@/components/shell/ProjectContact";

export const metadata: Metadata = {
  title: "Sean McDonnell · Software engineer & applied AI consultant",
  description: "Meet Sean McDonnell, the software engineer, applied AI consultant, and owner of NextEleven in Mansfield, Texas. Work directly with the person building your software.",
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
  email: "hello@nexteleven.dev", sameAs: ["https://github.com/seanebones-lang", "https://www.linkedin.com/in/mothership-ai"],
  address: { "@type": "PostalAddress", addressLocality: "Mansfield", addressRegion: "TX", addressCountry: "US" },
  worksFor: { "@id": "https://www.nexteleven.dev/#organization" },
};

export default function AboutPage() {
  return <>
    <InnerHeader current="about" />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }} />
    <main className="about-main">
      <section className="about-hero"><div><p className="about-kicker">Sean McDonnell · Owner, NextEleven</p><h1>Sean.<br />Your engineer.</h1><p className="about-role">Software engineer and applied AI consultant. Based in Mansfield, Texas; working with clients in DFW and remotely.</p></div><div className="portrait-frame"><Image src="/sean-avatar.jpg" alt="Sean McDonnell" fill priority sizes="(max-width: 700px) 80vw, 32vw" /></div></section>
      <section className="about-section"><p className="section-label">Who you work with</p><div><h2>The person doing the work.</h2><p>I’m Sean McDonnell, a self-taught software engineer and the owner of NextEleven LLC. I build business software, backend services, websites, applications, and practical AI integrations.</p><p>When you hire me, you work directly with the person investigating the problem, making the implementation decisions, and checking the result. I can help turn an unclear requirement into a defined build, or step into an existing system that needs attention.</p></div></section>
      <section className="about-section"><p className="section-label">How I approach it</p><div><h2>Understand the problem. Follow through.</h2><p>I start by looking at what people need to do and how the current system behaves. Then I define the work, implement it, and check the normal and failure paths that matter. The handoff should make it clear how to run the system and what still needs attention.</p><p>AI is part of my development workflow and a capability I build into software where it is useful. Architecture decisions, code review, testing, and the responsibility for the deliverable stay with me.</p></div></section>
      <section className="about-section"><p className="section-label">Background</p><div><h2>I learned by building.</h2><p>Before software became the center of my work, I spent 27 years in client service as an independent tattoo artist and shop owner. That experience shaped how I think about trust, clear expectations, careful work, and following through on a commitment.</p><p>My software experience spans operational workflows, document retrieval, agent tooling, client websites, and published applications. The <a href="/work">work page</a> gives you concrete examples and links to the public records.</p></div></section>
      <section className="about-section"><p className="section-label">Technical range</p><div><h2>Tools I’ve used in project work.</h2><p>The right tools depend on the system and the scope. This is a working range drawn from my projects.</p><div className="skill-grid">{skills.map(([title, copy]) => <article className="skill-card" key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
      <section className="about-section"><p className="section-label">Published work</p><div className="record"><strong className="record-number">13 / 9</strong><div><h2>Published apps on Apple’s App Store and Google Play.</h2><p>13 Apple listings and nine Google Play listings across productivity, utilities, lifestyle, and specialized workflows. Some apps are available on both stores. Publication is evidence of taking applications through release; it does not establish usage or commercial results.</p><a href="https://apps.apple.com/us/developer/sean-mcdonnell/id1839832497">View on Apple’s App Store ↗</a><br/><a href="https://play.google.com/store/apps/dev?id=7608447669826597882">View on Google Play ↗</a></div></div></section>
      <ProjectContact />
    </main>
    <SiteFooter />
  </>;
}
