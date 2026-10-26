import type { Metadata } from "next";
import { HomePanels } from "@/components/home/HomePanels";
export const metadata: Metadata = {
  title: "NextEleven | AI-Led Software Engineering",
  description: "NextEleven designs, builds, integrates and improves complex software across backend systems, APIs, web, mobile, cloud and AI. Accountable ownership, coordinated AI-led delivery.",
  alternates: { canonical: "/" },
};
export default function HomePage() { return <HomePanels />; }
