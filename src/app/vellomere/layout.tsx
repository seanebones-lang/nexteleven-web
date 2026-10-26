import type { ReactNode } from "react";
import type { Viewport } from "next";
import Link from "next/link";
import styles from "./vellomere.module.css";

export const viewport: Viewport = { colorScheme: "light", themeColor: "#f4f0e6" };

export default function VellomereLayout({ children }: { children: ReactNode }) {
  return <div className={styles.shell}>
    <a className={styles.skip} href="#vellomere-content">Skip to content</a>
    <div className={styles.document}>
      <header className={styles.header}>
        <Link href="/vellomere" className={styles.brand} aria-label="Vellomere home">
          <svg viewBox="0 0 512 512" width="56" height="56" aria-hidden="true">
            <rect width="512" height="512" fill="#102D32" />
            <path fill="#FFFAED" d="M112 118 235 155 256 381 137 331ZM400 118 277 155 256 381 375 331Z" />
            <path fill="#102D32" d="m150 174 61 19 4 18-63-19Zm4 40 63 19 4 18-65-19Zm208-40-61 19-4 18 63-19Zm-4 40-63 19-4 18 65-19Z" />
            <path fill="#C99A55" d="m158 277 84 27 14 18 14-18 84-27-4 20-73 24-21 27-21-27-73-24Z" />
          </svg>
          <span>Vellomere<small>DETECTIVE CASES / NEXTELEVEN</small></span>
        </Link>
        <nav className={styles.navigation} aria-label="Vellomere information">
          <Link href="/vellomere/support">Support</Link>
          <Link href="/vellomere/privacy">Privacy</Link>
          <Link href="/vellomere/terms">Purchases & terms</Link>
          <Link href="/apps/android">Our Android apps</Link>
        </nav>
      </header>
      <main id="vellomere-content" className={styles.content}>{children}</main>
      <footer className={styles.footer}>
        <p>NextEleven LLC · <a href="mailto:hello@nexteleven.dev">hello@nexteleven.dev</a></p>
        <p>Updated <time dateTime="2026-10-25">October 25, 2026</time>. Store availability and offers depend on your region, Google Play account and installed version.</p>
        <Link href="/">NextEleven</Link>
      </footer>
    </div>
  </div>;
}
