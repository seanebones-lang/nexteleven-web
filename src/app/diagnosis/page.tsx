import type { Metadata } from "next";
import Link from "next/link";
import { CompanyHeader, CompanyFooter } from "@/components/company/CompanySite";
import { securityEmail } from "@/lib/security-services";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: { absolute: "$499 AI Spend-Leak Review · NextEleven" },
  description: "A 48-hour review of your AI and agent stack: exposed keys, uncapped spend and over-permissioned tools, with written findings and a ranked fix list from NextEleven.",
  alternates: { canonical: "/diagnosis" },
};

const email = securityEmail("AI Spend-Leak Review — project fit");

export default function DiagnosisPage() {
  return <>
    <CompanyHeader />
    <main className={styles.main}>
      <section className={styles.hero}>
        <p className="section-label">NextEleven · AI & agent security</p>
        <h1>What can your agents reach?<br />What can they spend?</h1>
        <p className={styles.lead}>The AI Spend-Leak Review checks the three leaks that hurt teams quietly: keys exposed where they should not be, AI spend with no effective cap, and agents holding more permission than the job needs. Written findings, in 48 hours.</p>
        <div className={styles.price}><strong>$499</strong><span>USD · Flat · Findings within 48 hours</span></div>
        <a className="primary-action" href={email}>Book the review <span aria-hidden="true">↗</span></a>
        <p className={styles.note}>Send a short description first. Sean confirms fit and scope before invoicing. No payment is taken on this page. This is a review, not a penetration test.</p>
      </section>
      <section className={styles.grid} aria-label="The review scope">
        <article><p className="section-label">What you receive</p><h2>Findings you can act on.</h2><ul>
          <li>An exposed-key check across the agreed repositories and configuration.</li>
          <li>A spend review: caps, billing exposure, and the calls that can run away with the bill.</li>
          <li>A tool-permission inventory: what each agent and child tool can actually reach.</li>
          <li>Written findings with evidence and a ranked fix list, delivered within 48 hours.</li>
          <li>One follow-up conversation about the findings.</li>
        </ul></article>
        <article><p className="section-label">Where the leaks hide</p><h2>Start with the stack you run.</h2><ul>
          <li>MCP servers and agent tools connected to real accounts and data.</li>
          <li>Model and API usage billed per call, with no cap at the point of dispatch.</li>
          <li>Credentials stored in prompts, configuration or child-tool environments.</li>
        </ul><p>If your stack needs a different boundary, we will say so before we agree to start.</p></article>
      </section>
      <section className={styles.process}><p className="section-label">How it works</p><h2>Clear scope. Clear next step.</h2><ol>
        <li><strong>Describe the stack.</strong> Tell us which agents, tools and model providers you run, and what worries you. Please keep passwords, API keys, and private customer data out of the first email.</li>
        <li><strong>Agree before paying.</strong> We confirm the systems, safe access, deliverables, and the 48-hour delivery point. NextEleven then sends an invoice through an existing payment provider.</li>
        <li><strong>Get the findings.</strong> You receive the review and the ranked fix list. The usual next steps are a <Link href="/security/pricing#deadbolt-install">DeadBolt install ($1,749)</Link> to put a permission gate in front of the agents, and <Link href="/security/pricing#deadbolt-watch">DeadBolt Watch ($299/mo)</Link> to keep it watched.</li>
      </ol><p>The fee covers the review and written findings. It does not include remediation, deployment or changes to live systems; those are scoped separately after the findings.</p></section>
      <section className={styles.proof}><p className="section-label">Examples of our work</p><h2>Inspect the work before you hire.</h2><p>NextEleven builds the gate this review feeds into. You can inspect the source and documented limits of our public projects.</p><div><Link href="/deadbolt">DeadBolt: local agent execution gate ↗</Link><Link href="/security/pricing">Security services & pricing ↗</Link><Link href="/work">Selected software and client work ↗</Link></div></section>
      <section className={styles.contact}><h2>Where is your stack leaking?</h2><p>A plain-language description is enough to begin. For broader security work, <Link href="/security">explore the security services</Link>.</p><a className="primary-action" href={email}>Book the review with NextEleven <span aria-hidden="true">↗</span></a><p>hello@nexteleven.dev · DFW and remote engagements</p></section>
    </main>
    <CompanyFooter />
  </>;
}
