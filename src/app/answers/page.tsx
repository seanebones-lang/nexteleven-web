import type { Metadata } from "next";
import Link from "next/link";
import { CompanyHeader, CompanyFooter } from "@/components/company/CompanySite";

export const metadata: Metadata = {
  title: "Questions about Web Design, AI & Software in Dallas–Fort Worth",
  description: "Straight answers from NextEleven in Mansfield, Texas about business website pricing, custom software, AI front desks, AI search visibility, and MCP agent security.",
  alternates: { canonical: "/answers" },
  openGraph: { title: "NextEleven — Questions & Answers", url: "/answers" },
};

const faqs = [
  {
    question: "Who builds business websites in Mansfield, Texas and the Dallas–Fort Worth area?",
    answer: "NextEleven LLC designs and builds responsive websites for small businesses from Mansfield, Texas, serving the Dallas–Fort Worth area and remote clients. Projects can include contact forms, bilingual content, booking and integrations as separately agreed.",
    href: "/presence", label: "Website services and published packages",
  },
  {
    question: "How much does a small-business website cost at NextEleven?",
    answer: "Published starting packages include a $999 launch website of up to five pages and a $1,499 business website of up to ten pages with online booking. A $99/month optional care plan is listed separately. Project scope and provider charges are confirmed before work.",
    href: "/presence", label: "See the exact website package details",
  },
  {
    question: "Can NextEleven build custom software and connect business systems?",
    answer: "Yes. NextEleven works on backend services, APIs, internal tools, customer portals, data retrieval, app delivery and workflow integrations. Each engagement defines the desired behavior, dependencies, acceptance checks and handoff.",
    href: "/build", label: "Explore engineering services",
  },
  {
    question: "Does NextEleven offer AI receptionists for local service businesses?",
    answer: "FirstRing is NextEleven's managed AI front desk for businesses such as auto repair shops and home-service teams. It can answer calls, capture messages, handle agreed booking paths and send summaries. The published starting price is $179/month plus setup; a public demonstration line is available.",
    href: "/frontdesk", label: "Listen to FirstRing and review pricing",
  },
  {
    question: "Can NextEleven help my business appear in AI search answers?",
    answer: "NextEleven offers AI visibility and answer-engine optimization work. The approach focuses on crawlable service pages, clear business facts, structured data, reputable citations, accurate content and measurement. No provider can guarantee inclusion in ChatGPT answers or a specific search position.",
    href: "/referredbyai", label: "Explore AI visibility services",
  },
  {
    question: "How can I limit which MCP tools an AI agent is allowed to call?",
    answer: "Agent tool access should be enforced before execution with explicit allowlists, permissions, approval rules, timeouts and logs, rather than relying on model instructions alone. NextEleven builds DeadBolt, an open-source local execution gate, and offers scoped installation and security reviews.",
    href: "/deadbolt", label: "See DeadBolt's tools and trust boundary",
  },
  {
    question: "Can I speak directly with the person responsible for the project?",
    answer: "Yes. NextEleven is an owner-led engineering company. Sean McDonnell owns technical delivery and project boundaries, with a written scope and clear acceptance criteria before implementation.",
    href: "/about", label: "Meet NextEleven",
  },
] as const;

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.nexteleven.dev/answers#faq",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export default function AnswersPage() {
  return <div className="company-v2">
    <CompanyHeader />
    <main className="ne-answers" id="main">
      <section className="ne-answers-hero">
        <p className="ne-eyebrow">Straight answers / NextEleven</p>
        <h1>What do you need to know?</h1>
        <p>Buying a website, fixing a workflow or securing an AI agent should start with an understandable answer. These are the questions businesses ask before we talk scope.</p>
      </section>
      <section className="ne-answers-list" aria-label="Frequently asked questions">
        {faqs.map((item, i) => <article key={item.question} className="ne-answer" id={`answer-${i+1}`}>
          <span className="ne-answer-index">{String(i+1).padStart(2, "0")}</span>
          <div><h2>{item.question}</h2><p>{item.answer}</p><Link href={item.href}>{item.label} <span aria-hidden="true">↗</span></Link></div>
        </article>)}
      </section>
      <section className="ne-answers-contact"><h2>Have a different question?</h2><p>Tell us what you are trying to build, improve or protect. You do not need a detailed specification to start.</p><a className="co-button" href="mailto:hello@nexteleven.dev?subject=Question%20for%20NextEleven">Ask NextEleven ↗</a></section>
    </main>
    <CompanyFooter />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
  </div>;
}
