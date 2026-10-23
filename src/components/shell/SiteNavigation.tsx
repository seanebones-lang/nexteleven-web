import Link from "next/link";

export type SiteSection = "about" | "work" | "build" | "presence" | "security";

const links = [
  { href: "/build", label: "Services", section: "build" },
  { href: "/security", label: "Security", section: "security" },
  { href: "/work", label: "Work", section: "work" },
  { href: "/about", label: "About", section: "about" },
  { href: "/presence", label: "Websites", section: "presence" },
] as const;

export function SiteNavigation({ current }: { current?: SiteSection }) {
  const items = <>
    {links.map(link => <Link key={link.href} href={link.href} aria-current={current === link.section ? "page" : undefined}>{link.label}</Link>)}
    <a className="nav-contact" href="mailto:hello@nexteleven.dev?subject=Project%20conversation">Contact</a>
  </>;
  return <>
    <nav className="desktop-primary" aria-label="Primary">{items}</nav>
    <details className="mobile-primary">
      <summary>Menu <span aria-hidden="true">＋</span></summary>
      <nav aria-label="Mobile primary">{items}</nav>
    </details>
  </>;
}
