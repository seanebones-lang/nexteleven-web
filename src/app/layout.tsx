import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const sans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });
export const metadata: Metadata = { metadataBase: new URL("https://www.nexteleven.dev"), title: { default: "NextEleven — Sean McDonnell", template: "%s — NextEleven" }, description: "Software engineering and applied AI consulting from Sean McDonnell at NextEleven. Custom software, integrations, application improvements, and business websites." };
export const viewport: Viewport = { colorScheme: "dark", themeColor: "#090b0f" };
const organization = { "@context":"https://schema.org", "@type":"Organization", "@id":"https://www.nexteleven.dev/#organization", name:"NextEleven LLC", url:"https://www.nexteleven.dev", email:"nextelevenstudios@gmail.com", telephone:"833-925-6048", address:{"@type":"PostalAddress",addressLocality:"Mansfield",addressRegion:"TX",addressCountry:"US"}, founder:{"@id":"https://www.nexteleven.dev/about#sean-mcdonnell"} };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en" className={`${sans.variable} ${mono.variable}`}><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organization).replace(/</g,"\\u003c")}}/>{children}</body></html>; }
