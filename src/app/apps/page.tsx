import type { Metadata } from "next";
import AppShowcase from "@/components/apps/AppShowcase";
export const metadata: Metadata = {
  title: "Apps for everyday life & clever play",
  description: "Discover Circuit Breaker, Mihrab, CurioRound, WordLedger and more from NextEleven. Find official Apple and Google Play downloads, features and support.",
  alternates: { canonical: "/apps" },
  openGraph: { title: "NextEleven Apps", description: "Small steps. Fresh ideas. Clever play.", url: "/apps", images: [{ url: "/apps-assets/next-eleven-header.jpg", width: 4096, height: 2304, alt: "NextEleven" }] },
};
export default function AppsPage() { return <AppShowcase/>; }
