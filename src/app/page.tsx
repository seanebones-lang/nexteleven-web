import type { Metadata } from "next";
import { CompanyHeader, CompanyFooter, ProductIndex, OtherWork, Arrow } from '@/components/company/CompanySite';
export const metadata: Metadata = {
  title: { absolute: "NextEleven | Web Design, Custom Software & AI Services in DFW" },
  description: "NextEleven LLC in Mansfield, Texas builds small-business websites, custom software, managed AI front desks, AI visibility services and agent security tools for DFW and remote clients.",
  alternates: { canonical: "/" },
  openGraph: { title: "NextEleven — Software that makes business work", url: "/" },
};
export default function HomePage(){return <div className="company-v2"><CompanyHeader/><main><section className="co-intro"><h1>Serious software.<br/><span>Clear purpose.</span></h1><div><p>We build systems that help agents do useful work, help developers understand their tools, and help businesses solve difficult software problems.</p><a className="co-button" href="mailto:hello@nexteleven.dev">Discuss your project <Arrow/></a><a className="co-textlink" href="/build">Explore engineering services</a></div></section><section className="co-work"><div className="co-section-title"><h2>See what the work makes possible.</h2><p>Start with the problem. Explore the system. Inspect the engineering.</p></div><ProductIndex/></section><section className="co-services"><h2>Have a different problem?<br/>That’s where we start.</h2><div><p>Custom software. API integrations. Application rescue. Web and mobile products. We work from the problem through implementation, testing and handoff.</p><a href="/build">Find the right service <Arrow/></a><a className="co-textlink" href="/presence">Business websites from $999 — see the packages</a><a className="co-textlink" href="/diagnosis">AI Spend-Leak Review — $499, findings in 48 hours</a><p className="co-accountability">NextEleven is an AI-led software company founded by Sean McDonnell, with human ownership of the work.</p></div></section><section className="ne-service-directory" aria-labelledby="ne-services-title">
  <p className="ne-eyebrow">How we help businesses</p>
  <h2 id="ne-services-title">Find the right NextEleven service.</h2>
  <div className="ne-service-grid">
    <a href="/presence"><span>01 / Web presence</span><h3>Web design & customer portals</h3><p>Responsive websites for businesses in Mansfield, Dallas–Fort Worth and beyond. Published website packages and direct engineering support.</p><strong>View website services ↗</strong></a>
    <a href="/referredbyai"><span>02 / Discoverability</span><h3>SEO, AEO & AI visibility</h3><p>Make your services easier to crawl, understand and cite with clear content, technical foundations and accurate business facts.</p><strong>Explore AI visibility ↗</strong></a>
    <a href="/frontdesk"><span>03 / Customer calls</span><h3>FirstRing AI front desk</h3><p>Managed phone coverage and appointment handling for busy local service businesses. Hear a real demonstration call.</p><strong>See FirstRing ↗</strong></a>
    <a href="/security"><span>04 / Operational trust</span><h3>Security for apps and agents</h3><p>Review permissions, keys and tool boundaries. Scopes for remediation and the DeadBolt execution gate.</p><strong>Review security services ↗</strong></a>
  </div>
  <p className="ne-service-answers">Comparing your options? <a href="/answers">Read clear answers to common buyer questions ↗</a></p>
</section><OtherWork/></main><CompanyFooter/></div>}
