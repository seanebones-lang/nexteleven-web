import Link from "next/link";
export function InnerHeader({ current }: { current: "about" | "work" | "build" | "presence" }) {
  return <header className="inner-header">
    <Link className="wordmark" href="/">NEXT<span>ELEVEN</span></Link>
    <nav aria-label="Primary">
      <Link href="/build" aria-current={current === "build" ? "page" : undefined}>Services</Link>
      <Link href="/work" aria-current={current === "work" ? "page" : undefined}>Work</Link>
      <Link href="/about" aria-current={current === "about" ? "page" : undefined}>About</Link>
      <Link href="/presence" aria-current={current === "presence" ? "page" : undefined}>Websites</Link>
      <a className="nav-contact" href="mailto:nextelevenstudios@gmail.com?subject=Project%20conversation">Contact</a>
    </nav>
  </header>;
}
