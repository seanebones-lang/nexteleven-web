import type { Metadata } from "next";
import Link from "next/link";
import { CompanyHeader, CompanyFooter } from "@/components/company/CompanySite";

const canonical = "https://www.nexteleven.dev/case-studies/jp-transmission";

export const metadata: Metadata = {
  title: "JP Transmission Website Case Study — Bilingual Business Web Design",
  description:
    "See how NextEleven built a bilingual, responsive website for JP Transmission with separate buyer and seller journeys, clear inquiry forms, and a defined delivery scope.",
  alternates: { canonical: "/case-studies/jp-transmission" },
  openGraph: {
    title: "JP Transmission — Website Case Study by NextEleven",
    description: "A real client website: bilingual journeys, buyer and seller calls to action, responsive layout, and an honest scope boundary.",
    type: "article",
    url: "/case-studies/jp-transmission",
  },
};

const caseStudy = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": canonical + "#article",
  headline: "JP Transmission: a bilingual business website with separate buyer and seller journeys",
  description: "Case study describing the delivered public website and its scope boundaries.",
  author: { "@id": "https://www.nexteleven.dev/#organization" },
  publisher: { "@id": "https://www.nexteleven.dev/#organization" },
  mainEntityOfPage: canonical,
  about: { "@type": "Thing", name: "Business website design and implementation" },
};

export default function JPTransmissionCaseStudy() {
  return <div className="company-v2">
    <CompanyHeader />
    <main id="main">
      <section className="co-product-hero">
        <p className="section-label">Client work / Dallas–Fort Worth / Website delivery</p>
        <h1>JP Transmission.<br /><span>Two audiences. One clear website.</span></h1>
        <p>A real NextEleven client engagement: a bilingual public website for a transmission recycling business, with distinct paths for people buying parts and people selling cores.</p>
        <a className="co-button" href="https://www.jptransmission.com/en" target="_blank" rel="noopener noreferrer">
          Inspect the live client website ↗
        </a>
        <Link className="co-textlink" href="/presence">Explore NextEleven web design services ↗</Link>
      </section>
      <section className="co-usecase">
        <div><p className="section-label">The problem</p><h2>Different visitors need different next steps.</h2></div>
        <div>
          <p>Buyers looking for parts and sellers offering recyclable cores arrive with different goals. A single generic inquiry path makes those needs harder to communicate.</p>
          <p>The public site needed to work for both audiences, with English and Spanish paths and layouts that work well on phones.</p>
        </div>
      </section>
      <section className="co-usecase co-company-method">
        <div><p className="section-label">Delivered scope</p><h2>Make the public journey understandable.</h2></div>
        <div>
          <p>NextEleven designed and implemented the bilingual public website, responsive page layouts, separate buyer/seller journeys, and inquiry forms with clear calls to action.</p>
          <p>The engagement covered the customer-facing website and its deployment. It did not include a live inventory system, ecommerce checkout, or automated stock reconciliation; those would require separate engineering scopes.</p>
        </div>
      </section>
      <section className="co-usecase">
        <div><p className="section-label">What you can verify</p><h2>See the work, not invented results.</h2></div>
        <div>
          <p>Visit the client website to examine the languages, information architecture, inquiry pathways, and responsive behavior. This page does not claim conversion improvements, search rankings, revenue, or customer satisfaction metrics that were not measured and published.</p>
          <p>If your business needs a similar website—or a connected customer portal—see the published packages and discuss the specific scope before implementation.</p>
          <Link className="co-button" href="/presence">Web design and business website packages ↗</Link>
          <Link className="co-textlink" href="/build">Custom software and integrations ↗</Link>
        </div>
      </section>
    </main>
    <CompanyFooter />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudy).replace(/</g, "\\u003c") }} />
  </div>;
}
