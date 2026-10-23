export function securityEmail(subject = "Security review — project fit") {
  const body = "Business or project:\n\nPublic website, if available:\n\nWhat you want reviewed or improved:\n\nAny current problems or deadlines:\n\nPlease confirm scope, price and availability before starting.\n\nPlease do not include passwords, API keys or private customer records.\n";
  return "mailto:hello@nexteleven.dev?" + Object.entries({ subject, body }).map(([key, value]) => key + "=" + encodeURIComponent(value)).join("&");
}

export const securityPlans = [
  {
    id: "checkup", name: "Security Checkup", price: "$495", cadence: "one time",
    label: "A clear place to start", from: false,
    summary: "Understand the exposure around one business website and leave with a prioritized plan.",
    includes: [
      "One website, its source repository when available, and one hosting account.",
      "Up to four hours reviewing software versions, public configuration, access permissions and recovery readiness.",
      "Safe, non-destructive checks within your written authorization.",
      "Written findings with evidence, priorities, open questions and recommended next steps.",
      "One follow-up conversation about the findings.",
    ],
    boundary: "Assessment and recommendations. Code repairs, account changes, deployment and recovery exercises are quoted separately.",
    action: "Start with a checkup",
  },
  {
    id: "hardening", name: "Fix & Harden", price: "$1,250", cadence: "per engagement",
    label: "Turn findings into action", from: true,
    summary: "Resolve agreed security issues and verify the changes through a controlled release.",
    includes: [
      "A written scope naming the issues, systems and acceptance checks.",
      "Dependency repairs, configuration changes or access cleanup as agreed.",
      "Testing on a separate copy or staging environment where available.",
      "An approved deployment plan with a recovery or rollback path.",
      "Verification results, remaining risks and operating notes.",
    ],
    boundary: "Final price follows the findings and access review. The starting price is not an unlimited repair package.",
    action: "Discuss the fixes",
  },
  {
    id: "application", name: "Application & AI Review", price: "$2,500", cadence: "per review",
    label: "For systems that do more", from: true,
    summary: "A focused security engineering review of an application, API or connected AI workflow.",
    includes: [
      "An agreed application or workflow boundary and threat model.",
      "Source-backed review of the relevant identity, data and permission paths.",
      "Controlled validation of findings using safe test data and accounts.",
      "For AI workflows: untrusted content, tool permissions, sensitive data and approval boundaries.",
      "A technical report and an owner-friendly summary with a remediation plan.",
    ],
    boundary: "The quote defines review depth and test coverage. Remediation, retesting beyond the agreed scope and formal penetration testing are separate engagements.",
    action: "Scope a deeper review",
  },
  {
    id: "care", name: "Security Care", price: "$249", cadence: "per month",
    label: "Keep the basics current", from: true,
    summary: "Scheduled care for one website after its initial review and required fixes.",
    includes: [
      "Monthly dependency, configuration and account-access review.",
      "Setup of supported dependency and availability alerts.",
      "Up to one hour of approved routine maintenance each month.",
      "A monthly summary of checks, changes and items needing a decision.",
      "A documented process for approving and scheduling larger fixes.",
    ],
    boundary: "Initial checkup and remediation are separate. Unused maintenance time does not roll over. Alert handling and support hours are agreed in writing; this plan does not include continuous monitoring or 24/7 incident response.",
    action: "Discuss ongoing care",
  },
] as const;

export const securityFaqs = [
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
    answer: "Yes. AI-assisted research, code review and testing support the engineering process. Findings are checked against source or behavior, and a passing scanner score is not treated as proof of security. Any use of external AI services with private code or data is agreed with you first.",
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
