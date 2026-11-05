import type { ReactNode } from "react";
import type { Viewport } from "next";
import styles from "./frontdesk.module.css";

export const viewport: Viewport = { colorScheme: "dark", themeColor: "#091d30" };

export function FirstRingMark({ size = 40 }: { size?: number }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} aria-hidden="true" focusable="false">
      <circle cx="24" cy="24" r="16.5" fill="none" stroke="#247bff" strokeWidth="2.6" />
      <circle cx="24" cy="24" r="20.5" fill="none" stroke="#247bff" strokeWidth="1.4" opacity="0.35" />
      <path
        fill="#91bcff"
        transform="translate(13.2 13.2) scale(0.9)"
        d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
      />
    </svg>
  );
}

export default function FrontDeskLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.shell}>
      <a className={styles.skip} href="#frontdesk-content">Skip to content</a>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a href="/frontdesk" className={styles.brand} aria-label="FirstRing — home">
            <FirstRingMark size={38} />
            <span className={styles.brandText}>
              FirstRing
              <small>BY NEXTELEVEN STUDIOS</small>
            </span>
          </a>
          <nav className={styles.nav} aria-label="FirstRing sections">
            <a href="#listen">Listen</a>
            <a href="#how">How it works</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
            <a className={styles.navCta} href="tel:+18175465305">Call the demo</a>
          </nav>
        </div>
      </header>
      <main id="frontdesk-content">{children}</main>
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <FirstRingMark size={30} />
            <p>
              <strong>FirstRing</strong> by NextEleven Studios
            </p>
          </div>
          <p className={styles.footerLinks}>
            <a href="mailto:hello@nexteleven.dev">hello@nexteleven.dev</a>
            <span aria-hidden="true">·</span>
            <a href="tel:+18339256048">833-925-6048</a>
            <span aria-hidden="true">·</span>
            <a href="https://nexteleven.dev">nexteleven.dev</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
