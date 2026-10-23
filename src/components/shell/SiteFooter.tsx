import Link from "next/link";
export function SiteFooter() {
  return <footer className="site-footer">
    <Link className="wordmark" href="/">NEXT<span>ELEVEN</span></Link>
    <p>Software engineering & applied AI · Mansfield, Texas · Remote</p>
    <nav aria-label="Footer"><Link href="/build">Services</Link><Link href="/security">Security</Link><Link href="/apps">Apps</Link><Link href="/work">Work</Link><Link href="/about">About</Link><Link href="/presence">Websites</Link></nav>
    <a href="mailto:hello@nexteleven.dev">hello@nexteleven.dev</a>
  </footer>;
}
