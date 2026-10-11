import type { Metadata } from "next";
import { InnerHeader } from "@/components/shell/InnerHeader";
import { SiteFooter } from "@/components/shell/SiteFooter";
import styles from "./page.module.css";

const bundleUrl = "https://github.com/seanebones-lang/deadbolt/releases/download/mcpb-v1.1.0/deadbolt-1.1.0.mcpb";
const installUrl = "https://github.com/seanebones-lang/deadbolt/blob/main/docs/INSTALL.md#local-mcp-bundle-mcpb";

export const metadata: Metadata = {
  title: "DeadBolt — permission before execution",
  description: "Free, open-source permission checks for integrated AI agent tool calls. Install a local MCP bundle, bolt on an HTTP gate, or build admission into a Rust executor.",
  alternates: { canonical: "/deadbolt" },
};

const routes = [
  { title: "Install in an MCP client", label: "Local bundle · Node.js 20+", body: "Download the bundle, verify its checksum, and install it in a compatible client. Start with read-only setup guidance, then add a private operator configuration to gate a trusted downstream stdio server.", href: installUrl, action: "Follow the installation guide" },
  { title: "Build into your executor", label: "Rust · Admission before the effect", body: "Put the permission decision immediately before each external effect. The integration decides what is protected; deny the effect if admission fails or the state is unavailable.", href: "https://github.com/seanebones-lang/deadbolt/blob/main/examples/build_in.rs", action: "Read the Rust example" },
  { title: "Bolt on a local gate", label: "HTTP · Python and Node clients", body: "Connect a trusted executor to the local sidecar. Define explicit tool policy and keep operator controls separate from the agent. Use disposable effects to validate your integration first.", href: "https://github.com/seanebones-lang/deadbolt/blob/main/docs/INTEGRATION.md", action: "Choose an integration" },
  { title: "Keep the operator in control", label: "Pause · Clip · Approve · Kill", body: "Withdraw permission for future routed tool calls, require operator approval for classified irreversible tools, and inspect local decision evidence. Expired leases and unavailable state deny admission.", href: "https://github.com/seanebones-lang/deadbolt/blob/main/docs/TRUST.md", action: "Understand the trust boundary" },
];

export default function DeadBoltPage() {
  return <>
    <InnerHeader current="work" />
    <main className="work-main">
      <section className="work-hero">
        <div className="path-label">DeadBolt · By NextEleven</div>
        <p className="work-status">Free · Open source · Apache 2.0</p>
        <h1>Permission before execution.</h1>
        <p className="work-lede">Give your agent tools a permission boundary you can inspect and control. DeadBolt checks policy before integrated tool actions run, with local operator controls to stop further calls when a run needs attention.</p>
        <div className="work-actions">
          <a className="primary-action" href={bundleUrl}>Download MCP bundle 1.1.0 <span>↓</span></a>
          <a href="#watch">Watch it work <span>↓</span></a>
          <a href="https://github.com/seanebones-lang/deadbolt">Inspect the source <span>↗</span></a>
        </div>
        <p className={styles.note}>For compatible desktop MCP clients. Bundle <strong>1.1.0</strong> contains stable engine <strong>1.0.3</strong> and needs Node.js 20+, which your client may provide. No Rust build or GitHub sign-in is required. <a href={installUrl}>Verify the checksum and follow the installation steps ↗</a>. Leave configuration blank to try read-only setup guidance; add an explicit private configuration to enable the gate.</p>
      </section>
      <section className="delivery-section" aria-labelledby="routes-title">
        <p className="section-label">Bolt on or build in</p>
        <h2 id="routes-title">Start where your tools run.</h2>
        <div className="project-grid">{routes.map(route => <article className="project-card" key={route.title}>
          <small>{route.label}</small><h3>{route.title}</h3><p>{route.body}</p><a href={route.href}>{route.action} ↗</a>
        </article>)}</div>
        <p className={styles.note}>The local MCP bundle is version <strong>1.1.0</strong> and contains stable engine <strong>1.0.3</strong>. Its blank-configuration setup mode provides no active protection. Candidate engine <strong>1.1.0-rc.1</strong> separately adds exact-action review and scoped admission credentials; those features are not in this bundle.</p>
        <div className="work-actions"><a href="https://github.com/seanebones-lang/deadbolt/releases/tag/mcpb-v1.1.0">Release notes and checksums ↗</a><a href="https://smithery.ai/servers/seanebones/deadbolt">Find it on Smithery ↗</a><a href="https://registry.modelcontextprotocol.io/v0.1/servers?search=io.github.seanebones-lang%2Fdeadbolt&limit=10">View the MCP Registry record ↗</a></div>
      </section>
      <section className="delivery-section" id="watch" aria-labelledby="watch-title">
        <p className="section-label">Captioned demonstration</p>
        <h2 id="watch-title">See the gate in action.</h2>
        <div className={styles.video}><iframe src="https://www.youtube-nocookie.com/embed/9MEIVQnIm0g?cc_load_policy=1" title="DeadBolt captioned overview: permission checks and operator controls" loading="lazy" allow="encrypted-media; picture-in-picture" allowFullScreen /></div>
        <p className={styles.note}>The overview includes captions. The full walkthrough covers installation, Rust, HTTP and MCP integration, operator controls, and demonstrations in Harness. Its narration describes the release status at the recording date.</p>
        <div className="work-actions"><a href="https://youtu.be/fhj8dmwdMbk">Watch the full walkthrough ↗</a><a href="https://seanebones-lang.github.io/deadbolt/walkthrough.html">Read the complete transcript ↗</a><a href="https://huggingface.co/spaces/Nextleven/deadbolt">Try the public demonstration ↗</a></div>
      </section>
      <section className="delivery-section" aria-labelledby="boundary-title">
        <p className="section-label">Know what is protected</p><h2 id="boundary-title">An explicit boundary.</h2>
        <p className={styles.note}>DeadBolt protects the execution routes connected to it. The MCP proxy gates routed <code>tools/call</code> requests; child startup, other MCP methods and arbitrary operating-system access remain outside that gate. It does not cancel an effect already running. The downstream server remains trusted. Local records are operator-writable, and reported-spend caps depend on application reporting.</p>
        <p className={styles.note}>DeadBolt is a permission gate, not an operating-system sandbox or compliance certification. Test allowed and denied disposable effects in your own integration before connecting real accounts.</p>
        <div className="work-actions"><a href="https://github.com/seanebones-lang/deadbolt/blob/main/docs/INSTALL.md">Installation and verification ↗</a><a href="https://github.com/seanebones-lang/deadbolt/issues">Report a bug or ask an integration question ↗</a></div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
