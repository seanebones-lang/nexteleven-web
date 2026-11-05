import type { Metadata } from "next";
import AppShowcase from "@/components/apps/AppShowcase";
export const metadata: Metadata = {
  title: "Apps — published software, ready to use",
  description: "NextEleven's full published catalog: eighteen applications live on the App Store and Google Play — tools for work, faith, learning and downtime, each with official store, support and privacy links.",
  alternates: { canonical: "/apps" },
  openGraph: { title: "NextEleven Apps", description: "Published apps. Working software, in people's hands.", url: "/apps", images: [{ url: "/apps-assets/next-eleven-header.jpg", width: 4096, height: 2304, alt: "NextEleven" }] },
};
export default function AppsPage() { return <AppShowcase />; }
