import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./company-v2.css";
import "./unified-site.css";

const sans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

const origin = "https://www.nexteleven.dev";

export const metadata: Metadata = {
  metadataBase: new URL(origin),
  applicationName: "NextEleven",
  title: {
    default: "NextEleven | Web Design, Custom Software & AI Engineering in DFW",
    template: "%s | NextEleven",
  },
  description: "NextEleven LLC builds business websites, custom software, AI integrations and agent-security tools in Mansfield and Dallas–Fort Worth, Texas. Direct engineering, clear scope and verified handoff.",
  openGraph: {
    type: "website",
    siteName: "NextEleven",
    locale: "en_US",
    url: origin,
    title: "NextEleven | Websites, Custom Software & AI Engineering",
    description: "Owner-led software engineering in Mansfield and DFW. Business websites, integrations, AI workflows and practical security.",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export const viewport: Viewport = { colorScheme: "light dark", themeColor: "#f4f5f7" };

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": origin + "/#organization",
      name: "NextEleven LLC",
      alternateName: "NextEleven",
      url: origin,
      email: "hello@nexteleven.dev",
      telephone: "+1-833-925-6048",
      logo: origin + "/icon",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mansfield",
        addressRegion: "TX",
        addressCountry: "US",
      },
      areaServed: [
        { "@type": "City", name: "Mansfield" },
        { "@type": "AdministrativeArea", name: "Dallas–Fort Worth" },
        { "@type": "Country", name: "United States" },
      ],
      founder: { "@id": origin + "/about#sean-mcdonnell" },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "hello@nexteleven.dev",
        telephone: "+1-833-925-6048",
      },
    },
    {
      "@type": "WebSite",
      "@id": origin + "/#website",
      url: origin,
      name: "NextEleven",
      publisher: { "@id": origin + "/#organization" },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${sans.variable} ${mono.variable}`}>
    <body>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      {children}
    </body>
  </html>;
}
