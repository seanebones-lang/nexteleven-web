export function ProjectContact() {
  const email = "mailto:hello@nexteleven.dev?" + Object.entries({
    subject: "Engineering project — fit and scope",
    body: "The result we need:\n\nExisting software or a public project link:\n\nWhat needs building or changing:\n\nConstraints and target date:\n\nBudget range, if known:\n\nPlease keep passwords, API keys and private customer records out of this first message.\n",
  }).map(([key, value]) => `${key}=${encodeURIComponent(value)}`).join("&");
  return <section className="contact-strip" id="start" aria-labelledby="contact-title">
    <p className="section-label">Work with NextEleven</p>
    <h2 id="contact-title">Bring us the difficult part.</h2>
    <p className="contact-copy">A new platform, a system that needs connecting, or a failure that is holding up the next release. Tell us the result you need, what you already have and your constraints. We’ll turn that into a defined engineering scope.</p>
    <div><a className="primary-action" href={email}>Discuss your project <span>↗</span></a><a href="https://www.linkedin.com/in/nextelevendev/">Connect on LinkedIn <span>↗</span></a></div>
    <p className="contact-address">hello@nexteleven.dev · Sean McDonnell, owner · Texas and remote engagements</p>
  </section>;
}
