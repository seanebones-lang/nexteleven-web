import type { Metadata } from "next";
import AppShowcase from "@/components/apps/AppShowcase";
export const metadata: Metadata = {
  title: "Android apps on Google Play",
  description: "Explore Circuit Breaker, Mihrab, WordLedger, ThriftFlip and more Android apps from NextEleven. Official Google Play downloads, app details and support.",
  alternates: { canonical: "/apps/android" },
  openGraph: { title: "NextEleven Android Apps", description: "Small steps. Fresh ideas. Clever play.", url: "/apps/android", images: ["/apps-assets/next-eleven-header.jpg"] },
};
export default function AndroidAppsPage() { return <AppShowcase platform="android"/>; }
