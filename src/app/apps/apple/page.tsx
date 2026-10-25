import type { Metadata } from "next";
import AppShowcase from "@/components/apps/AppShowcase";
export const metadata: Metadata = {
  title: "Apple apps for iPhone, iPad & Mac",
  description: "Explore NextEleven’s 13 published Apple apps: Routelle, CurioRound, WordLedger, ThriftFlip, Tattoo Artist Helper, ElevenClean and more. Official App Store downloads and support.",
  alternates: { canonical: "/apps/apple" },
  openGraph: { title: "NextEleven Apple Apps", description: "Useful by design. Made for your Apple devices.", url: "/apps/apple", images: ["/apps-assets/next-eleven-header.jpg"] },
};
export default function AppleAppsPage() { return <AppShowcase platform="apple"/>; }
