import type { Metadata } from "next";
import { InnerHeader } from "@/components/shell/InnerHeader";
import { SiteFooter } from "@/components/shell/SiteFooter";
import { ProjectContact } from "@/components/shell/ProjectContact";

export const metadata: Metadata = {
  title: "Websites, web applications & customer portals",
  description: "NextEleven designs and builds business websites, customer portals and connected web applications through an AI-led engineering workflow, from defined scope through a verified release.",
  alternates: { canonical: "/presence" },
};
const includes = ["Clear pages and messaging", "Custom responsive design", "Contact forms and inquiry routing", "Bilingual content when needed", "Search and sharing metadata", "Accessibility and performance checks", "Deployment and domain setup", "Source code and operating instructions"] as const;
const process = [
  { index: "01", title: "Understand", copy: "Learn what your business does, who the site serves, and what a visitor should do next." },
  { index: "02", title: "Define", copy: "Agree on the pages, content, contact paths, and launch requirements." },
  { index: "03", title: "Build & review", copy: "Design and implement the site. Review the content and check the layout, links, and forms." },
  { index: "04", title: "Launch & hand off", copy: "Verify the published site and make ownership, source access, and operating instructions clear." },
] as const;
const service = {
  "@context": "https://schema.org", "@type": "ProfessionalService", "@id": "https://www.nexteleven.dev/presence#service",
  name: "NextEleven Websites & Customer Portals", url: "https://www.nexteleven.dev/presence", email: "hello@nexteleven.dev",
  telephone: "833-925-6048", areaServed: "United States", parentOrganization: { "@id": "https://www.nexteleven.dev/#organization" },
  address: { "@type": "PostalAddress", addressLocality: "Mansfield", addressRegion: "TX", addressCountry: "US" },
};

export default function PresencePage() {
  return <>
    <InnerHeader current="presence" />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service).replace(/</g, "\\u003c") }} />
    <main className="presence-main">
      <section className="presence-hero"><p className="section-label">Websites & customer portals</p><h1>Make it easier to find you. And choose you.</h1><p>Your public experience should make the next step clear. Your customer platform should make that step work. We design and build business websites, web applications and connected portals, from the interface through the agreed backend and release.</p><a className="primary-action" href="#start">Discuss your web project <span>↗</span></a></section>
      <section className="presence-includes"><div><p className="section-label">What the work covers</p><h2>A web experience connected to your business.</h2><p>The scope follows the customer journey and the operation behind it. That can be a focused public website or a portal with accounts, documents and workflow integrations. We define the interface, data, access and acceptance checks together, then coordinate design, implementation and testing.</p></div><ul>{includes.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ul></section>
      <section className="presence-example"><div><p className="section-label">Client example · Live</p><h2>JP Transmission.</h2></div><div><p>A transmission recycling business serving people buying parts and people selling cores needed a clear path for each audience.</p><p>NextEleven designed and implemented a bilingual website with separate buyer and seller journeys, responsive layouts, and inquiry forms. The delivered scope is the public website; inventory, ecommerce, and checkout would be separate work.</p><a href="https://www.jptransmission.com/en">Visit JP Transmission ↗</a></div></section>
      <section className="presence-process"><p className="section-label">From idea to launch</p><h2>Clear steps. Direct communication.</h2><ol>{process.map(step => <li key={step.index}><span>{step.index}</span><h3>{step.title}</h3><p>{step.copy}</p></li>)}</ol></section>
      <section className="phase-two"><p className="section-label">When the site needs to do more</p><div><h2>Connect the front door to the business.</h2><p>Booking, customer accounts, payments, document access and inventory connections can be included in a defined engineering engagement. We establish the data, permissions, provider dependencies and checks before building. Add them to a new project or scope an extension to a site you already have.</p><a href="/build">Explore software and integration services ↗</a></div></section>
      <ProjectContact />
    </main>
    <SiteFooter />
  </>;
}
