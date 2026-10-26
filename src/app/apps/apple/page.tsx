import type { Metadata } from "next";
import AppShowcase from "@/components/apps/AppShowcase";
export const metadata: Metadata = {
  title: "Apple apps for iPhone, iPad & Mac",
  description: "Explore NextEleven’s published Apple apps, including ImanLink, Avenrest, Routelle, CurioRound and ElevenClean. Official App Store downloads, current update notes and support.",
  alternates: { canonical: "/apps/apple" },
  openGraph: { title: "NextEleven Apple Apps", description: "Useful by design. Made for your Apple devices.", url: "/apps/apple", images: ["/apps-assets/next-eleven-header.jpg"] },
};
export default function AppleAppsPage() { return <AppShowcase platform="apple"/>; }
