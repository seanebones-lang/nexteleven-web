import Link from "next/link";
import type { ReactNode } from "react";
import type { Viewport } from "next";
import styles from "./pairtrace.module.css";

export const viewport: Viewport = { colorScheme: "light", themeColor: "#f3f5f1" };

export default function PairtraceDocumentsLayout({ children }: { children: ReactNode }) {
  return <div className={styles.shell}>
    <a className={styles.skip} href="#pairtrace-content">Skip to content</a>
    <div className={styles.document}>
      <header className={styles.header}>
        <Link href="/pairtrace/support" className={styles.brand} aria-label="Pairtrace support">
          <svg viewBox="0 0 108 108" width="54" height="54" aria-hidden="true">
            <rect width="108" height="108" rx="24" fill="#10181f" />
            <g fill="none" stroke="#76e4e5" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M27 30h10v13H27zM71 65h10v13H71z" />
              <path d="M37 36.5h25q12 0 12 10 0 9-12 9H45q-13 0-13 9 0 7 12 7h27" />
            </g>
          </svg>
          <span>pairtrace<small>BY NEXTELEVEN</small></span>
        </Link>
        <nav className={styles.navigation} aria-label="Pairtrace help and policies">
          <Link href="/pairtrace/support">Support</Link>
          <Link href="/pairtrace/privacy">Privacy</Link>
          <Link href="/pairtrace/terms">Plans & terms</Link>
          <Link href="/apps/android">Our Android apps</Link>
        </nav>
      </header>
      <main id="pairtrace-content" className={styles.content}>{children}</main>
      <footer className={styles.footer}>
        <p>NextEleven LLC · <a href="mailto:hello@nexteleven.dev">hello@nexteleven.dev</a></p>
        <p>Updated October 24, 2026. Availability and purchase options depend on the installed app version, store account and region.</p>
        <Link href="/">NextEleven</Link>
      </footer>
    </div>
  </div>;
}
