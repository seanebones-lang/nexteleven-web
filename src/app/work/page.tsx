import type { Metadata } from "next";
import Link from "next/link";
import { InnerHeader } from "@/components/shell/InnerHeader";
import { SiteFooter } from "@/components/shell/SiteFooter";
import { ProjectContact } from "@/components/shell/ProjectContact";
import { ProductHuntBadge } from "@/components/ProductHuntBadge";

export const metadata: Metadata = {
  title: "Selected software, AI & client work",
  description: "Inspect Sean McDonnell’s client website work, open-source retrieval and developer tools, private software experience, and 13 applications published through NextEleven.",
  alternates: { canonical: "/work" },
};

const projects = [
  { kind: "Client website · Live", title: "JP Transmission", problem: "Make a transmission recycling business easier for buyers and sellers to understand and contact.", work: "I designed and implemented a bilingual website with separate buyer and seller paths, responsive layouts, and inquiry forms.", scope: "Public website delivery. Live inventory, ecommerce, and checkout are separate scope.", href: "https://www.jptransmission.com/en", action: "Visit the client site" },
  { kind: "Open source · MIT", title: "PersonalRAGVault", problem: "Find useful information in a collection of documents and show where the answer came from.", work: "A local-first Python retrieval application combining keyword and vector search, reranking, source citations, APIs, and retrieval evaluation.", scope: "Demonstrates document ingestion, retrieval, backend APIs, and evaluation work.", href: "https://github.com/seanebones-lang/personal-RAG", action: "Inspect the repository", productHunt: "personalragvault" },
  { kind: "Open source · MIT", title: "Harness", problem: "Keep an AI assistant’s tools, model choices, and ongoing work manageable across projects.", work: "A Rust work assistant with exact provider/model routing, repository tools, resumable sessions, bounded workers, MCP, and terminal and local web interfaces.", scope: "Maintained for personal use. The acceptance record documents verified workflows and remaining checks.", href: "https://github.com/seanebones-lang/harness", action: "Inspect the repository", productHunt: "harness" },
  { kind: "Open source · Apache 2.0", title: "DeadBolt", problem: "Give an operator a way to withdraw an agent’s permission to start further tool actions.", work: "A lease-based authorization gate for integrated executors, with command-line controls, an MCP proxy, and documented integration examples.", scope: "Enforcement depends on the integration. It does not cancel an action that is already running.", href: "/deadbolt", action: "Explore DeadBolt", productHunt: "deadbolt" },
  { kind: "Published applications", title: "13 apps on Apple’s App Store", problem: "Turn focused application ideas into software that can be published and maintained.", work: "13 applications published on Apple’s App Store through NextEleven, spanning productivity, utilities, lifestyle, and specialized workflows.", scope: "This is a publication record; it does not establish usage or business results.", href: "https://apps.apple.com/us/developer/nexteleven-llc/id1839832497", action: "View the developer listing" },
  { kind: "Confidential client work", title: "Two substantial software systems", problem: "Build software around private business requirements and operating workflows.", work: "Two substantial software systems completed for private clients. I can discuss architecture, implementation choices, and verification without disclosing confidential client information.", scope: "Client identities and business outcomes are withheld.", href: null, action: null },
] as const;

const proof = [
  { value: "13", label: "applications published through NextEleven", boundary: "Apple’s App Store publication record.", href: "https://apps.apple.com/us/developer/nexteleven-llc/id1839832497" },
  { value: "2", label: "substantial private-client software systems completed", boundary: "Confidential client work.", href: null },
  { value: "MIT", label: "open-source Rust work assistant: Harness", boundary: "Documented personal-use acceptance checks.", href: "https://github.com/seanebones-lang/harness/blob/main/docs/PERSONAL_USE.md" },
  { value: "CI", label: "cross-platform build, lint, and test evidence", boundary: "Current runs show the tested source and scope.", href: "https://github.com/seanebones-lang/harness/actions/workflows/ci.yml" },
] as const;

export default function WorkPage() {
  return <>
    <InnerHeader current="work" />
    <main className="work-main">
      <section className="work-hero">
        <div className="path-label">Selected work · NextEleven</div>
        <p className="work-status">Client delivery · Published apps · Open-source engineering</p>
        <h1>Work you can inspect.</h1>
        <p className="work-lede">Here are examples of what I build and the engineering behind it. Each project shows the problem, the implementation, and what you can inspect for yourself.</p>
        <div className="work-actions"><a className="primary-action" href="#projects">Explore the projects <span>↓</span></a><Link href="/build">See services <span>↗</span></Link></div>
      </section>
      <section className="delivery-section" id="projects" aria-labelledby="projects-title">
        <p className="section-label">Selected projects</p><h2 id="projects-title">Different problems. Concrete work.</h2>
        <div className="project-grid">{projects.map(project => <article className="project-card" key={project.title}>
          <small>{project.kind}</small><h3>{project.title}</h3>
          <p className="project-problem">{project.problem}</p><p>{project.work}</p><p className="project-scope">{project.scope}</p>
          {project.href && <a href={project.href}>{project.action} ↗</a>}
          {"productHunt" in project && <ProductHuntBadge product={project.productHunt} />}
        </article>)}</div>
      </section>
      <section className="work-section"><div><p className="section-label">Supporting records</p><h2>Evidence behind the work.</h2></div><div className="proof-grid">{proof.map(item => <article key={item.value + item.label}><strong>{item.value}</strong><p>{item.label}</p><small>{item.boundary}</small>{item.href && <a href={item.href}>Inspect the record ↗</a>}</article>)}</div></section>
      <section className="work-section"><div><p className="section-label">Research & prototypes</p><h2>Work still being evaluated.</h2></div><div className="research-list">
        <p>These projects show additional engineering and research interests. Their repositories explain the current status and evaluation limits.</p>
        <a href="https://github.com/seanebones-lang/repo-salvage"><strong>RepoSalvage</strong><span>Source discovery and reuse prototype, with license notices, an API, CLI, and MCP access.</span></a>
        <ProductHuntBadge product="reposalvage" />
        <a href="https://github.com/seanebones-lang/witness"><strong>Witness</strong><span>Rust provenance prototype using signed records and append-only storage.</span></a>
        <a href="https://github.com/seanebones-lang/evidencelens"><strong>EvidenceLens</strong><span>Experimental evidence-review tooling with source snapshots and reproducible evaluation.</span></a>
      </div></section>
      <ProjectContact />
      <section className="consulting-section">
        <p className="section-label">For hiring teams</p>
        <details className="hiring-details"><summary>Employment and longer-term engineering roles</summary><p>I’m also open to software engineering, applied AI, backend, integration, implementation, and developer tooling roles. I’m based in Mansfield, Texas, available remotely in the United States, and do not require sponsorship.</p><div className="work-actions"><a href="/downloads/Sean-McDonnell-Technical-Support-Implementation-Engineer-Resume.pdf">Download résumé ↓</a><a href="mailto:nextelevenstudios@gmail.com?subject=Engineering%20role">Discuss a role ↗</a></div></details>
      </section>
    </main>
    <SiteFooter />
  </>;
}
