import Link from "next/link";
import type { ReactNode } from "react";
import type { Viewport } from "next";
import styles from "./dinnlume.module.css";

export const viewport: Viewport = { colorScheme: "light", themeColor: "#fffdf7" };

export default function DinnlumeDocumentsLayout({ children }: { children: ReactNode }) {
  return <div className={styles.shell}>
    <a className={styles.skip} href="#dinnlume-content">Skip to content</a>
    <div className={styles.document}>
      <header className={styles.header}>
        <Link href="/dinnlume/support" className={styles.brand} aria-label="Dinnlume support">
          <svg viewBox="0 0 108 108" width="54" height="54" aria-hidden="true">
            <rect width="108" height="108" rx="24" fill="#354B37" />
            <path fill="#F6F3E8" d="M22,51a32,32 0,0 0,64 0z" />
            <path fill="#A44030" d="M29,48a25,9 0,1 0,50 0a25,9 0,1 0,-50 0" />
            <path fill="none" stroke="#E5ED91" strokeWidth="3" strokeLinecap="round" d="M44,35c-7,-6 7,-9 0,-16M57,35c-7,-6 7,-9 0,-16M70,35c-7,-6 7,-9 0,-16" />
          </svg>
          <span>Dinnlume<small>BY NEXTELEVEN</small></span>
        </Link>
        <nav className={styles.navigation} aria-label="Dinnlume help and policies">
          <Link href="/dinnlume/support">Support</Link>
          <Link href="/dinnlume/privacy">Privacy</Link>
          <Link href="/dinnlume/terms">Plans & terms</Link>
          <Link href="/apps/android">Our Android apps</Link>
        </nav>
      </header>
      <main id="dinnlume-content" className={styles.content}>{children}</main>
      <footer className={styles.footer}>
        <p>NextEleven LLC · <a href="mailto:hello@nexteleven.dev">hello@nexteleven.dev</a></p>
        <p>Updated <time dateTime="2026-10-24">October 24, 2026</time>. Features and store offers depend on the installed version, Google Play account and region.</p>
        <Link href="/">NextEleven</Link>
      </footer>
    </div>
  </div>;
}
