import type { Metadata } from "next";
import { InnerHeader } from "@/components/shell/InnerHeader";
import { SiteFooter } from "@/components/shell/SiteFooter";
import snapshot from "../../../content/deadbolt/page.json";
import source from "../../../content/deadbolt/source.json";
import { Walkthrough } from "./Walkthrough";
import "./experience.css";
import "../../../content/deadbolt/site.css";

export const metadata: Metadata = {
  title: "DeadBolt — give agents tools, keep control",
  description: "Free, open-source permission checks before integrated agent tool calls. Install with Homebrew, Cargo, Python or MCP; explore captioned videos, developer guides and the trust boundary.",
  alternates: { canonical: "/deadbolt" },
  openGraph: { title: "DeadBolt — Give agents tools. Keep control.", description: "A local execution gate for software agents, built by NextEleven.", url: "/deadbolt", images: [`/deadbolt-assets/${source.revision}/deadbolt-power-mark.png`] },
};

export default function DeadBoltPage() {
  return <>
    <InnerHeader current="work" />
    <div className="deadbolt-experience" data-deadbolt-source={source.revision} dangerouslySetInnerHTML={{ __html: snapshot.html }} />
    <Walkthrough />
    <SiteFooter />
  </>;
}
