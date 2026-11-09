import type { Metadata } from "next";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { CompanyHeader, CompanyFooter } from "@/components/company/CompanySite";
import "./referredbyai.css";

export const metadata: Metadata = {
  title: "ReferredByAI — AI Search Visibility Audit in Mansfield, TX",
  description: "See whether ChatGPT, Google AI and Perplexity name your business. NextEleven's $499 ReferredByAI audit measures actual answers, competitor mentions and an evidence-backed fix list.",
  alternates: { canonical: "/referredbyai" },
  openGraph: {
    type: "website",
    url: "/referredbyai",
    title: "ReferredByAI — When customers ask AI, does it say your name?",
    description: "AI search visibility audits for DFW businesses. Real prompts, collected answers and prioritized fixes, with transparent pricing.",
  },
};

const service = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.nexteleven.dev/referredbyai#service",
  name: "ReferredByAI AI Visibility Audit",
  description: "Audit whether AI answer systems mention a local business, identify competing recommendations, and recommend evidence-backed improvements.",
  provider: { "@id": "https://www.nexteleven.dev/#organization" },
  areaServed: [{ "@type": "City", name: "Mansfield" }, { "@type": "AdministrativeArea", name: "Dallas–Fort Worth" }],
  offers: { "@type": "Offer", price: "499", priceCurrency: "USD", url: "https://www.nexteleven.dev/referredbyai" },
};

export default function ReferredByAIPage() {
  // Content stays in one authored HTML fragment, not an independent website.
  // The shared React header/footer, metadata, CSS tokens and page structure
  // belong to the same NextEleven app as every other service page.
  const html = readFileSync(join(process.cwd(), "content/referredbyai/landing-main.html"), "utf8");
  return <div className="rba-page">
    <a className="skip-link" href="#main">Skip to AI visibility audit</a>
    <CompanyHeader />
    <div className="rba-main" dangerouslySetInnerHTML={{ __html: html }} />
    <CompanyFooter />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service).replace(/</g, "\\u003c") }} />
  </div>;
}
