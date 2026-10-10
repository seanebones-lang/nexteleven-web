import type { Metadata } from "next";
import { HomePanels } from "@/components/home/HomePanels";
export const metadata: Metadata = {
  title: "NextEleven | Software Engineering & Applied AI Consulting",
  description: "Sean McDonnell at NextEleven builds custom software, connects systems, adds practical AI, and improves existing applications. DFW and remote client engagements.",
  alternates: { canonical: "/" },
};
export default function HomePage() { return <HomePanels />; }
