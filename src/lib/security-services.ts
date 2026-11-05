export function securityEmail(subject = "Security review — project fit") {
  const body = "Business or project:\n\nPublic website, if available:\n\nWhat you want reviewed or improved:\n\nAny current problems or deadlines:\n\nPlease confirm scope, price and availability before starting.\n\nPlease do not include passwords, API keys or private customer records.\n";
  return "mailto:hello@nexteleven.tech?" + Object.entries({ subject, body }).map(([key, value]) => key + "=" + encodeURIComponent(value)).join("&");
}

export const securityPlans = [
  {
    id: "spend-leak-review", name: "AI Spend-Leak Review", price: "$499", cadence: "flat · findings in 48 hours",
    label: "Start here", from: false,
    summary: "A focused review of your AI and agent stack: where keys are exposed, where spend is uncapped, and where agents hold more permission than they need.",
    includes: [
      "Exposed-key check across the agreed repositories and configuration.",
      "AI spend review: caps, billing exposure and the calls that can run away with the bill.",
      "Tool-permission inventory: what each agent and child tool can actually reach.",
      "Written findings with evidence and a ranked fix list, delivered within 48 hours.",
      "One follow-up conversation about the findings.",
    ],
    boundary: "Review and recommendations only. This is not a penetration test, and it does not change your live systems. Fixes are the next step, quoted below.",
    action: "Book the review",
  },
  {
    id: "deadbolt-install", name: "DeadBolt Install", price: "$1,749", cadence: "one time",
    label: "Put the gate in place", from: false,
    summary: "We install and configure DeadBolt — NextEleven's open-source permission gate — in front of your agents, so protected actions are admitted or refused before they run.",
    includes: [
      "DeadBolt installed and configured for the agreed agent stack.",
      "A permission policy shaped to your tools: who may start what, and what needs a human yes.",
      "Spend and destination context wired into the policy checks you choose.",
      "Verification: admitted and refused actions demonstrated against the agreed scenarios.",
      "Operating notes so your team can adjust policy without us.",
    ],
    boundary: "Scoped to the agreed stack and tools. New integrations, custom policy engines and changes to your applications are quoted separately.",
    action: "Scope an install",
  },
  {
    id: "deadbolt-watch", name: "DeadBolt Watch", price: "$299", cadence: "per month",
    label: "Keep it watched", from: false,
    summary: "Managed DeadBolt after install: we keep the gate running and send a weekly evidence report of what was admitted, refused and changed.",
    includes: [
      "Managed DeadBolt deployment for one agent stack.",
      "A weekly Witness evidence report: decisions, refusals and policy changes, kept separate from interpretation.",
      "Ongoing permission and spend checks against the agreed policy.",
      "A monthly summary of what needs a decision from you.",
    ],
    boundary: "Per deployment. Watch follows an install; it does not include new integrations or 24/7 incident response. Pilot cohort — availability is confirmed before enrollment.",
    action: "Discuss Watch",
  },
] as const;

export const securityFaqs = [
  {
    question: "What does the AI Spend-Leak Review actually look at?",
    answer: "Three things: keys or credentials exposed where they should not be, AI spend with no effective cap, and agents or tools holding more permission than the job needs. You receive written findings with evidence and a ranked fix list within 48 hours. It is a review, not a penetration test.",
  },
  {
    question: "Does patching my server fix every affected app?",
    answer: "Not always. Some applications ship their own runtime or certificate bundle. We establish the deployed version and affected path before recommending an update. For affected builds, rebuilding and redistributing the app can be necessary; changing the host alone may leave installed copies unchanged.",
  },
  {
    question: "Will an agent security gate protect every action on a machine?",
    answer: "Only actions routed through its enforcement boundary are covered. We inspect actual integration points, approvals and revocation behavior, and keep child-process credentials, operating-system access and network isolation explicit. No model instruction or single tool is a substitute for that review.",
  },
  {
    question: "Is this useful if my website is small?",
    answer: "Yes. A small site can still control your domain, route customer inquiries and connect to email or other services. The review follows what your business actually uses, so the work stays proportionate.",
  },
  {
    question: "Can you review software someone else built?",
    answer: "Yes. Bring the system and the concern. We first confirm ownership, available access and a safe scope. Reviews can cover websites, custom applications, APIs, cloud accounts, developer workflows, AI integrations and selected workstation or recovery setups.",
  },
  {
    question: "Will you change my live systems?",
    answer: "Only with your permission. Assessment access and permission to make changes are separate. We agree on the changes, tests, timing and recovery plan before a production release.",
  },
  {
    question: "Do you use AI in the work?",
    answer: "Yes. NextEleven is an AI-led software company, with Sean McDonnell responsible for customer scope and commitments. AI agents support research, implementation and testing. Findings are checked against source or behavior; a passing scanner score is not proof of security. Any external AI use involving private code or data is agreed with you first.",
  },
  {
    question: "What if I need penetration testing or compliance work?",
    answer: "Tell us the requirement. Authorized penetration testing, specialist infrastructure reviews and compliance-readiness work need a dedicated scope and quote. These packages do not include certification, legal advice or an emergency-response retainer.",
  },
  {
    question: "Can you guarantee that we will never be hacked?",
    answer: "No service can make that guarantee. You receive documented checks, verified changes and an honest account of what was reviewed, what remains and how to reduce exposure over time.",
  },
] as const;
