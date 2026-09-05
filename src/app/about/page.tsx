import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InnerHeader } from "@/components/shell/InnerHeader";
import { SiteFooter } from "@/components/shell/SiteFooter";
export const metadata: Metadata={title:"About Sean McDonnell",description:"Sean McDonnell is a self-taught software engineer and owner of NextEleven LLC in Mansfield, Texas."};
const skills=[
 ["Languages","Python · Rust · TypeScript / JavaScript · Kotlin · Swift · Dart · SQL · Bash"],
 ["Systems","FastAPI · REST APIs · PostgreSQL / pgvector · SQLite · Redis · React · Next.js · SwiftUI · Jetpack Compose"],
 ["AI / retrieval","LLM APIs · tool calling · MCP · embeddings · RAG ingestion · hybrid retrieval · reranking · citations · evaluation"],
 ["Shipping / support","Docker · GitHub Actions · automated testing · CI · API integration · root-cause analysis · runbooks · release documentation"]
] as const;
const person={"@context":"https://schema.org","@type":"Person","@id":"https://mothership-ai.com/about#sean-mcdonnell",name:"Sean McDonnell",jobTitle:"Software Engineer",url:"https://mothership-ai.com/about",email:"nextelevenstudios@gmail.com",sameAs:["https://github.com/seanebones-lang","https://www.linkedin.com/in/mothership-ai"],address:{"@type":"PostalAddress",addressLocality:"Mansfield",addressRegion:"TX",addressCountry:"US"},worksFor:{"@id":"https://mothership-ai.com/#organization"}};
export default function AboutPage(){return <><InnerHeader current="about"/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(person).replace(/</g,"\\u003c")}}/><main className="about-main">
 <section className="about-hero"><div><p className="about-kicker">Sean McDonnell · Mansfield, Texas</p><h1>Builder.<br/>Engineer.<br/>Owner.</h1><p className="about-role">Software Engineer · Python, Rust, TypeScript, and applied AI.</p></div><div className="portrait-frame"><Image src="/sean-avatar.jpg" alt="Sean McDonnell" fill priority sizes="(max-width: 700px) 80vw, 32vw"/></div></section>
 <section className="about-section"><p className="section-label">Origin</p><div><h2>I learned by building things that had to work.</h2><p>I’m a self-taught software engineer and the owner of NextEleven LLC. I work from Mansfield in the Dallas–Fort Worth area. Before software became the center of my work, I spent 27 years in high-trust client service as an independent tattoo artist and shop owner. That work taught me to listen closely, set expectations, iterate in public, and finish what I start.</p></div></section>
 <section className="about-section"><p className="section-label">Qualifications</p><div><h2>The work is the credential.</h2><p>I build backend systems, applied-AI workflows, retrieval tools, developer tooling, and interfaces. Recent work includes a Rust coding-agent proof of concept, a local-first Python retrieval application, a FastAPI and Next.js dealership workflow system, and a bilingual web presence for JP Transmission Recycling. I take projects through definition, implementation, testing, documentation, and handoff.</p></div></section>
 <section className="about-section"><p className="section-label">Working range</p><div className="skill-grid">{skills.map(([title,copy])=><article className="skill-card" key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
 <section className="about-section"><p className="section-label">Publication record</p><div className="record"><strong className="record-number">12</strong><div><h2>Applications published on Apple’s App Store.</h2><p>Built and published through NextEleven across productivity, utilities, lifestyle, commerce, wellness, and specialized operator workflows. This is a publication record only. I do not claim downloads, revenue, ratings, users, retention, or adoption from it.</p></div></div></section>
 <section className="about-section"><p className="section-label">Location and work</p><div><h2>DFW base. Remote across the United States.</h2><p>I’m a U.S. citizen and do not require sponsorship. I’m seeking serious software, backend, applied-AI, implementation, integration, support, developer-tooling, and automation work.</p></div></section>
 <Link href="/work" className="about-cta"><strong>View hiring profile.</strong><span>02 / Work ↗</span></Link>
 </main><SiteFooter/></>}
