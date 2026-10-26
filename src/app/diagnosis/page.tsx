import type { Metadata } from "next";
import Link from "next/link";
import { InnerHeader } from "@/components/shell/InnerHeader";
import { SiteFooter } from "@/components/shell/SiteFooter";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: { absolute: "$250 software diagnosis · NextEleven" },
  description: "A focused investigation of one broken software workflow. Get written findings, verification steps and a practical repair plan from NextEleven’s AI-led engineering workflow.",
  alternates: { canonical: "/diagnosis" },
};

const email = "mailto:hello@nexteleven.dev?" + Object.entries({
  subject: "Software diagnosis — project fit",
  body: "What should happen:\n\nWhat happens instead:\n\nTechnology or public project link:\n\nHow I reproduce the issue:\n\nMy deadline:\n\nPlease check whether this fits the $250 diagnosis.\n",
}).map(([key, value]) => `${key}=${encodeURIComponent(value)}`).join("&");

export default function DiagnosisPage() {
  return <>
    <InnerHeader current="build" />
    <main className={styles.main}>
      <section className={styles.hero}>
        <p className="section-label">NextEleven · Focused engineering investigation</p>
        <h1>Something broken?<br />Let’s find the next step.</h1>
        <p className={styles.lead}>A failing API, a broken build, an unreliable AI workflow, or an application that stopped working. Bring us one problem. We’ll investigate it and leave you with clear findings and a practical plan.</p>
        <div className={styles.price}><strong>$250</strong><span>USD · One focused software diagnosis</span></div>
        <a className="primary-action" href={email}>Check project fit <span aria-hidden="true">↗</span></a>
        <p className={styles.note}>Send a short description first. Sean confirms fit, scope and a delivery date before invoicing. No payment is taken on this page.</p>
      </section>
      <section className={styles.grid} aria-label="The diagnosis scope">
        <article><p className="section-label">What you receive</p><h2>A useful technical handoff.</h2><ul>
          <li>Up to two hours investigating one agreed issue in one application or workflow.</li>
          <li>Written findings: what we reproduced, what the evidence shows, and anything still unresolved.</li>
          <li>A practical repair plan with priorities and verification steps.</li>
          <li>One follow-up clarification about the findings.</li>
        </ul></article>
        <article><p className="section-label">Where we can help</p><h2>Start with the problem.</h2><ul>
          <li>Python or Next.js applications, broken builds, and API integrations.</li>
          <li>Document retrieval, model integrations, and agent tool workflows.</li>
          <li>Business software and website functionality.</li>
        </ul><p>If your issue needs specialist access or more time, we’ll say so before we agree to start.</p></article>
      </section>
      <section className={styles.process}><p className="section-label">How it works</p><h2>Clear scope. Clear next step.</h2><ol>
        <li><strong>Describe the failure.</strong> Tell us what should happen, what happens instead, the technology, and your deadline. Please keep passwords, API keys, and private customer data out of the first email.</li>
        <li><strong>Agree before paying.</strong> We confirm the issue, safe access, deliverables, and a delivery date. NextEleven then sends an invoice through an existing payment provider.</li>
        <li><strong>Get the findings.</strong> You receive the diagnosis and repair plan. Implementation, deployment, ongoing support, hosting, and API charges are separate and require an agreed quote.</li>
      </ol><p>The fee covers the investigation and written findings. A repair or a confirmed root cause is not guaranteed within the time limit. If access blocks progress, we’ll document that clearly. Any applicable tax is shown on the invoice before payment.</p></section>
      <section className={styles.proof}><p className="section-label">Examples of our work</p><h2>Inspect the work before you hire.</h2><p>NextEleven builds and maintains software across business workflows, applied AI and developer tools. You can inspect the source and documented limits of our public projects.</p><div><Link href="/work">Selected software and client work ↗</Link><Link href="/deadbolt">DeadBolt: local agent execution gate ↗</Link><a href="https://github.com/seanebones-lang/personal-RAG">PersonalRAGVault source ↗</a></div></section>
      <section className={styles.contact}><h2>What’s getting in the way?</h2><p>A plain-language description is enough to begin. For a new product, integration or modernization, <Link href="/build">explore the full engineering services</Link>.</p><a className="primary-action" href={email}>Discuss the issue with NextEleven <span aria-hidden="true">↗</span></a><p>hello@nexteleven.dev · DFW and remote engagements</p></section>
    </main>
    <SiteFooter />
  </>;
}
