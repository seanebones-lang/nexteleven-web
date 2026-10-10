export function ProjectContact() {
  const email = "mailto:nextelevenstudios@gmail.com?subject=Let%E2%80%99s%20discuss%20a%20project&body=What%20I%E2%80%99m%20trying%20to%20do%3A%0A%0AWhat%E2%80%99s%20getting%20in%20the%20way%3A%0A%0AExisting%20website%2C%20software%2C%20or%20tools%3A%0A";
  return <section className="contact-strip" id="start" aria-labelledby="contact-title">
    <p className="section-label">Work with me</p>
    <h2 id="contact-title">Tell me what you’re trying to do.</h2>
    <p className="contact-copy">A plain-language description is enough to start. Tell me what needs to work, what’s getting in the way, and what you already have. I’ll help turn that into a clear next step.</p>
    <div><a className="primary-action" href={email}>Email Sean <span>↗</span></a><a href="https://www.linkedin.com/in/mothership-ai">Connect on LinkedIn <span>↗</span></a></div>
    <p className="contact-address">nextelevenstudios@gmail.com · DFW and remote engagements</p>
  </section>;
}
