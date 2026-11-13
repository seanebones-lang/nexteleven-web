import Link from "next/link";
import Image from "next/image";
import { portfolio } from "@/lib/portfolio";

const companyLinks = [
  { href: "/work", label: "Work" },
  { href: "/build", label: "Services" },
  { href: "/presence", label: "Websites" },
  { href: "/referredbyai", label: "AI visibility" },
  { href: "/security", label: "Security" },
  { href: "/about", label: "Company" },
] as const;

export function CompanyHeader() {
  return <header className="co-header">
    <Link href="/" className="co-brand" aria-label="NextEleven — home">Next<span className="co-eleven">Eleven</span><span className="co-tagline">Software, made useful.</span></Link>
    <nav className="co-desktop-nav" aria-label="Main navigation">
      {companyLinks.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
      <a className="co-contact" href="mailto:hello@nexteleven.dev?subject=Project%20conversation">Discuss a project</a>
    </nav>
    <details className="co-mobile-menu">
      <summary>Menu <span aria-hidden="true">+</span></summary>
      <nav aria-label="Mobile navigation">
        {companyLinks.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        <a className="co-contact" href="mailto:hello@nexteleven.dev?subject=Project%20conversation">Discuss a project</a>
      </nav>
    </details>
  </header>;
}

export function CompanyFooter() {
  return <footer className="co-footer">
    <div className="co-footer-top">
      <div><p className="co-footer-eyebrow">NEXT ELEVEN / MANSFIELD, TEXAS</p><h2>What needs to work better?</h2><p>Websites, custom software, AI workflows and agent security. One accountable engineering team from scope to handoff.</p></div>
      <a className="co-footer-cta" href="mailto:hello@nexteleven.dev?subject=Project%20conversation">Tell us about your project <span aria-hidden="true">↗</span></a>
    </div>
    <nav aria-label="Footer navigation">
      <Link href="/work">Work</Link><Link href="/build">Services</Link><Link href="/presence">Web design</Link><Link href="/referredbyai">AI visibility</Link><Link href="/frontdesk">FirstRing</Link><Link href="/security">Security</Link><Link href="/apps">Apps</Link><Link href="/answers">Questions</Link><Link href="/about">Company</Link>
    </nav>
    <div className="co-footer-bottom">
      <span>© {new Date().getFullYear()} NextEleven LLC · Human-owned delivery</span>
      <span>U.S. military veterans: 10% off labor and setup fees</span>
      <span>Mansfield · Dallas–Fort Worth · Remote US</span>
      <span><a href="mailto:hello@nexteleven.dev">hello@nexteleven.dev</a> · Call <a href="tel:+18178031967">(817) 803-1967</a> · Text <a href="sms:+18339256048">833-925-6048</a></span>
    </div>
  </footer>;
}

export function ProductIndex(){return <div className="co-index">{portfolio.map((p,i)=><a className={`co-project co-project-${p.slug}`} href={`/work/${p.slug}`} key={p.slug}>{i===0?<div className="co-mother-art"><Image src="/brand/mothership-lockup-reverse.svg" alt="Mothership by NextEleven" width={1352} height={304} unoptimized/><div className="co-path"><span>Tools</span><span>Permissions</span><span>Progress</span></div></div>:<div className="co-product-name">{p.name}</div>}<div className="co-project-copy"><h3>{p.purpose}</h3><p>{p.description}</p><small className="co-project-status">{p.status}</small><span className="co-link">See use cases and architecture <Arrow/></span></div></a>)}</div>}
export function Arrow(){return <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 12h15M13 5l7 7-7 7"/></svg>}
export function OtherWork(){return <section className="co-other"><h2>More ways we turn software into useful work.</h2><div><a href="/apps"><strong>Published mobile apps</strong><p>Explore the applications and their support pages.</p><Arrow/></a><a href="https://github.com/seanebones-lang/personal-RAG"><strong>PersonalRAGVault</strong><p>Document search with source-backed answers.</p><Arrow/></a><Link href="/case-studies/jp-transmission"><strong>JP Transmission</strong><p>A real bilingual website delivery with buyer and seller journeys; inspect the scope and live site.</p><Arrow/></Link></div></section>}
