import type { Metadata } from "next";
import AppShowcase from "@/components/apps/AppShowcase";
export const metadata: Metadata = {
  title: "Android apps on Google Play",
  description: "Explore NextEleven apps on Google Play, including Pairtrace, Dinnlume, Vellomere, Routelle and Circuit Breaker. Official downloads, app details and support.",
  alternates: { canonical: "/apps/android" },
  openGraph: { title: "NextEleven Android Apps", description: "Small steps. Fresh ideas. Clever play.", url: "/apps/android", images: ["/apps-assets/next-eleven-header.jpg"] },
};
export default function AndroidAppsPage() { return <AppShowcase platform="android"/>; }
