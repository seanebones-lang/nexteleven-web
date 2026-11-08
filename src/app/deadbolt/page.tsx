import type { Metadata } from "next";
import { CompanyHeader, CompanyFooter } from "@/components/company/CompanySite";
import snapshot from "../../../content/deadbolt/page.json";
import source from "../../../content/deadbolt/source.json";
import { Walkthrough } from "./Walkthrough";
import "./experience.css";
import "../../../content/deadbolt/site.css";

export const metadata: Metadata = {
  title: "DeadBolt — give agents tools, keep control",
  description: "Free, open-source permission checks before integrated agent tool calls. Install with Homebrew, Cargo, Python or MCP; explore captioned videos, developer guides and the trust boundary.",
  alternates: { canonical: "/deadbolt" },
  openGraph: { title: "DeadBolt — Give agents tools. Keep control.", description: "A local execution gate for software agents, built by NextEleven.", url: "/deadbolt", images: [`/deadbolt-assets/${source.revision}/deadbolt-power-mark.png`] },
};

export default function DeadBoltPage() {
  return <>
    <CompanyHeader />
    <div className="deadbolt-experience" data-deadbolt-source={source.revision} dangerouslySetInnerHTML={{ __html: snapshot.html }} />
    <Walkthrough />
    <section className="contact-strip" aria-labelledby="deadbolt-services-title">
      <p className="section-label">Work with NextEleven</p>
      <h2 id="deadbolt-services-title">DeadBolt is free. The work around it is what we sell.</h2>
      <p className="contact-copy">DeadBolt itself is open source under Apache-2.0, with no license fee. NextEleven earns its living on the services around it: a $499 AI Spend-Leak Review of your agent stack, a $1,749 DeadBolt install, and DeadBolt Watch at $299/mo.</p>
      <div><a className="primary-action" href="/security/pricing">See the services &amp; pricing <span>↗</span></a><a href="mailto:hello@nexteleven.dev">hello@nexteleven.dev</a></div>
    </section>
    <CompanyFooter />
  </>;
}
