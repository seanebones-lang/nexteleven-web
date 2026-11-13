import type { Metadata } from "next";
import styles from "./frontdesk.module.css";

export const metadata: Metadata = {
  title: "FirstRing — Never miss the calls that matter",
  description:
    "FirstRing is an AI front desk for local shops from NextEleven Studios. It answers your phone 24/7 in your shop's name, books appointments, takes messages, and sends you a summary of every call.",
  alternates: { canonical: "/frontdesk" },
  openGraph: {
    title: "FirstRing — Your calls answered, your business moving.",
    description:
      "An AI front desk for local businesses, built and managed by NextEleven Studios. Answers 24/7, books appointments, never invents a price. Call the live demo: (817) 546-5305.",
    url: "/frontdesk",
    type: "website",
    images: [
      {
        url: "/og/firstring-og.png",
        width: 1200,
        height: 630,
        alt: "FirstRing — Amy, the AI front desk receptionist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FirstRing — Your phone, answered on the first ring. Every time.",
    description:
      "An AI front desk for local businesses, built and managed by NextEleven Studios. Answers 24/7, books appointments, never invents a price. Call the live demo: (817) 546-5305.",
    images: ["/og/firstring-og.png"],
  },
};

const firstRingService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.nexteleven.dev/frontdesk#service",
  name: "FirstRing — Managed AI Front Desk",
  description: "NextEleven's managed AI phone answering and appointment workflow service for local businesses.",
  provider: { "@id": "https://www.nexteleven.dev/#organization" },
  areaServed: [{ "@type": "AdministrativeArea", name: "Dallas–Fort Worth" }, { "@type": "Country", name: "United States" }],
  offers: { "@type": "Offer", price: "179", priceCurrency: "USD", url: "https://www.nexteleven.dev/frontdesk", description: "Starting monthly service price; setup fee applies." },
};

const DEMO_TEL = "tel:+18175465305";

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" focusable="false">
      <path d="M4 12.5l5 5L20 6.5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className={styles.stepArrow} viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" focusable="false">
      <path d="M3 12h16M13 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FrontDeskPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(firstRingService).replace(/</g, "\\u003c") }} />
      {/* ---------- 1 · Hero ---------- */}

      <section className={styles.hero} id="top">
        <div className={styles.wrap}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.kicker}>YOUR BUSINESS. ALWAYS ANSWERED.</p>
              <h1 className={styles.heroTitle}>Keep working. <em>We&rsquo;ll answer the phone.</em></h1>
              <p className={styles.heroLede}>
                FirstRing answers calls in your business&rsquo;s name, books appointments, takes
                messages, and sends you the details. Day or night, while you focus on the work.
              </p>
              <div className={styles.ctaRow}>
                <a className={styles.ctaPrimary} href={DEMO_TEL}>Try Amy — call the live demo</a>
                <a className={styles.ctaGhost} href="#setup">Request a setup call</a>
              </div>
              <p className={styles.heroNote}>
                Starting at <strong>$179/month</strong>, plus one-time setup. No app to install,
                no dashboard to learn. NextEleven sets it up and manages it for you.
              </p>
              <div className={styles.heroProof} aria-label="FirstRing essentials">
                <span><CheckIcon /> 24/7 coverage</span>
                <span><CheckIcon /> Your existing number</span>
                <span><CheckIcon /> Managed setup</span>
              </div>
            </div>
            <aside className={styles.liveDemoCard} aria-label="Real FirstRing demo call">
              <div className={styles.liveDemoTop}>
                <span className={styles.avatarCircle} aria-hidden="true">A</span>
                <div>
                  <p className={styles.demoTitle}>Meet Amy, your front desk</p>
                  <p className={styles.demoSubtitle}>Premier Auto Care · demonstration shop</p>
                </div>
                <span className={styles.demoLive}>REAL CALL</span>
              </div>
              <p className={styles.demoIntro}>
                Hear Amy handle an appointment, a schedule change, and a price question.
                No actors. This is an actual call to our demonstration line.
              </p>
              <audio className={styles.audio} controls preload="metadata" src="/audio/firstring-demo-call.mp3">
                Your browser does not support audio playback. Call (817) 546-5305 instead.
              </audio>
              <div className={styles.demoReceipt}>
                <div className={styles.receiptHeading}>
                  <span>WHAT THE OWNER RECEIVES</span>
                  <span className={styles.receiptStatus}><CheckIcon /> Call summarized</span>
                </div>
                <p className={styles.receiptTitle}>Oil change appointment · Friday, noon</p>
                <p className={styles.receiptText}>
                  Caller scheduled an oil change for a 2019 Ford F-150, changed the requested
                  time, and asked about brake pricing. The front desk advised a brake check
                  instead of guessing at a repair price.
                </p>
                <div className={styles.receiptFooter}>
                  <span><CheckIcon /> Appointment recorded</span>
                  <span><CheckIcon /> Price not invented</span>
                </div>
              </div>
              <a className={styles.demoSecondaryLink} href="#listen">
                Hear another test call and watch the explainer →
              </a>
              <p className={styles.demoPrivacy}>
                Tried the demo? <a href="#setup">Request a setup call for your business.</a>
                {" "}The demo tests the receptionist; use the form below to contact NextEleven.
              </p>
              <p className={styles.demoPrivacy}>Demo recording; callback numbers have been masked for privacy.</p>
            </aside>
          </div>
        </div>
      </section>


      <section className={`${styles.whoStrip} ${styles.lightSection}`} aria-label="Businesses FirstRing helps">
        <div className={styles.wrap}>
          <p className={styles.kicker}>BUILT FOR THE BUSINESSES THAT KEEP MOVING</p>
          <h2 className={styles.sectionTitle}>You take care of the work. We catch the calls.</h2>
          <p className={styles.sectionLede}>
            Whether you are under a hood, on a job site, or serving someone in the chair,
            a ringing phone should not mean lost business.
          </p>
          <div className={styles.industryGrid}>
            <div className={styles.industryCard}><span>01</span><strong>Auto repair</strong><p>Keep the bays moving while appointments come in.</p></div>
            <div className={styles.industryCard}><span>02</span><strong>Home services</strong><p>Answer new inquiries when your crew is on a job.</p></div>
            <div className={styles.industryCard}><span>03</span><strong>Salons &amp; barbers</strong><p>Take booking requests without interrupting a client.</p></div>
            <div className={styles.industryCard}><span>04</span><strong>Local service shops</strong><p>Catch after-hours questions and send the details to your team.</p></div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.lightSection}`} id="does">
        <div className={styles.wrap}>
          <p className={styles.kicker}>005 / What it does</p>
          <h2 className={styles.sectionTitle}>Your phone is covered, even when you are busy.</h2>
          <p className={styles.sectionLede}>
            Built for shops first — the places where the phone rings while everyone&rsquo;s hands
            are busy.
          </p>
          <ul className={styles.caps}>
            <li className={styles.cap}>
              <span className={styles.capCheck}><CheckIcon /></span>
              <div>
                <p className={styles.capTitle}>Answers 24/7, in your shop&rsquo;s name</p>
                <p className={styles.capText}>
                  Nights, weekends, lunch rush — every call gets a professional answer, not a
                  voicemail box.
                </p>
              </div>
            </li>
            <li className={styles.cap}>
              <span className={styles.capCheck}><CheckIcon /></span>
              <div>
                <p className={styles.capTitle}>Books appointments, with read-backs</p>
                <p className={styles.capText}>
                  Name, phone, vehicle, what it needs, and the time — confirmed back to the caller
                  before the call ends.
                </p>
              </div>
            </li>
            <li className={styles.cap}>
              <span className={styles.capCheck}><CheckIcon /></span>
              <div>
                <p className={styles.capTitle}>Never guesses at repair prices</p>
                <p className={styles.capText}>
                  Price questions go to you, not to a made-up number. On the demo call it suggested
                  a brake check instead of quoting a brake job.
                </p>
              </div>
            </li>
            <li className={styles.cap}>
              <span className={styles.capCheck}><CheckIcon /></span>
              <div>
                <p className={styles.capTitle}>Takes a message when it can&rsquo;t book</p>
                <p className={styles.capText}>
                  If a call cannot turn into an appointment, the caller leaves a real message —
                  nobody hits a dead end.
                </p>
              </div>
            </li>
            <li className={styles.cap}>
              <span className={styles.capCheck}><CheckIcon /></span>
              <div>
                <p className={styles.capTitle}>A summary after every call</p>
                <p className={styles.capText}>
                  Who called, what they need, what got booked — written out plainly, like the
                  summary above.
                </p>
              </div>
            </li>
            <li className={styles.cap}>
              <span className={styles.capCheck}><CheckIcon /></span>
              <div>
                <p className={styles.capTitle}>Managed for you, start to finish</p>
                <p className={styles.capText}>
                  We set it up, tune it, and keep it running. There is no app for you to learn and
                  no dashboard you have to check.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>


      <section className={styles.section} id="listen">
        <div className={styles.wrap}>
          <p className={styles.kicker}>HEAR IT FOR YOURSELF</p>
          <h2 className={styles.sectionTitle}>Not a scripted voiceover. Real calls.</h2>
          <p className={styles.sectionLede}>
            Call <a className={styles.inlineLink} href={DEMO_TEL}>(817) 546-5305</a> and test Amy
            yourself, or listen to what happened when someone asked for an oil change on a Tesla.
          </p>
          <div className={styles.proofGrid}>
            <div className={styles.panel}>
              <p className={styles.audioLabel}>Real demo call 02 · The Tesla test</p>
              <h3 className={styles.proofCardTitle}>A harder caller. No made-up booking.</h3>
              <p className={styles.proofCardText}>
                Amy catches a joke callback number, explains why a Tesla does not need a
                conventional oil change, and handles the conversation politely.
              </p>
              <audio className={styles.audio} controls preload="metadata" src="/audio/firstring-demo-call-2.mp3">
                Your browser does not support audio playback. Call the live demonstration line instead.
              </audio>
            </div>
            <div className={styles.panel}>
              <p className={styles.audioLabel}>Two-minute walkthrough</p>
              <h3 className={styles.proofCardTitle}>See how FirstRing works.</h3>
              <video className={styles.heroVideo} controls preload="metadata"
                poster="/video/firstring-explainer-poster.jpg" src="/video/firstring-explainer.mp4">
                Your browser does not support video playback. Call the demonstration line instead.
              </video>
            </div>
          </div>
          <p className={styles.audioNote}>
            These are recordings of our demonstration line, not paid actors. Callback numbers are masked for privacy.
            Your FirstRing greets callers with your business name, hours, and booking rules.
          </p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.lightSection}`} id="read">
        <div className={styles.wrap}>
          <p className={styles.kicker}>003 / Read the call</p>
          <h2 className={styles.sectionTitle}>Hear the conversation. See what your team gets.</h2>
          <p className={styles.sectionLede}>
            After every call, FirstRing writes a short summary — who called, what they need, what
            got booked. Here is the exact summary from the call above, and the full call written
            out underneath it.
          </p>
          <div className={styles.callGrid}>
            <div className={styles.panelRaised}>
              <p className={styles.audioLabel}>Call summary · sent to the owner</p>
              <p className={styles.summaryText}>
                Sean scheduled an oil change for his 2019 Ford F-150 for Friday at noon, after
                changing his initial requested time. He also asked about brake job pricing and was
                advised to request a brake check at the appointment.
              </p>
            </div>
            <div className={styles.panel}>
              <p className={styles.audioLabel}>What to listen for</p>
              <ul className={styles.beats}>
                <li>
                  <span className={styles.beatWho}>Booking</span>
                  <span>
                    It collects the name, callback number, and vehicle — and reads the number back
                    to confirm it.
                  </span>
                </li>
                <li>
                  <span className={styles.beatWho}>Hours</span>
                  <span>
                    Friday at 3 PM is outside the demo shop&rsquo;s hours, so it says so and
                    rebooks the caller for Friday at noon instead.
                  </span>
                </li>
                <li>
                  <span className={styles.beatWho}>Pricing</span>
                  <span>
                    Asked for a brake-job price, it does not invent one — it offers a diagnostic
                    and an exact number from the shop before any work starts.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/*
            Transcript: the published version of the real demo call (source of
            truth: ~/workspace/income-rescue/firstring-demo-call-transcript.md).
            The caller's callback number is MASKED on purpose — it is a personal
            cell number and must never be rendered in full on this page.
          */}
          <details className={styles.transcriptDetails}>
            <summary>Read the full call transcript</summary>
            <div className={styles.panel} style={{ marginTop: "1.4rem" }}>
            <p className={styles.audioLabel}>The full call, word for word</p>
            <ol className={styles.transcript}>
              <li className={styles.turn}>
                <span className={styles.turnWho}>Front desk</span>
                <span className={styles.turnText}>
                  Thanks for calling Premier Auto Care, this is the front desk — how can I help
                  you?
                </span>
              </li>
              <li className={styles.turn}>
                <span className={styles.turnWhoCaller}>Caller</span>
                <span className={styles.turnText}>
                  Yeah. I&rsquo;d like to schedule an oil change for a twenty nineteen F-150.
                </span>
              </li>
              <li className={styles.turn}>
                <span className={styles.turnWho}>Front desk</span>
                <span className={styles.turnText}>May I have your name?</span>
              </li>
              <li className={styles.turn}>
                <span className={styles.turnWhoCaller}>Caller</span>
                <span className={styles.turnText}>Sean.</span>
              </li>
              <li className={styles.turn}>
                <span className={styles.turnWho}>Front desk</span>
                <span className={styles.turnText}>
                  Sean, got it. What&rsquo;s the best callback number for you?
                </span>
              </li>
              <li className={styles.turn}>
                <span className={styles.turnWhoCaller}>Caller</span>
                <span className={styles.turnText}>817-•••-9898</span>
              </li>
              <li className={styles.turn}>
                <span className={styles.turnWho}>Front desk</span>
                <span className={styles.turnText}>
                  Thanks. That&rsquo;s 817-•••-9898. What model is the 2019 Ford?
                </span>
              </li>
              <li className={styles.turn}>
                <span className={styles.turnWhoCaller}>Caller</span>
                <span className={styles.turnText}>It&rsquo;s an F-150.</span>
              </li>
              <li className={styles.turn}>
                <span className={styles.turnWho}>Front desk</span>
                <span className={styles.turnText}>
                  What day and time would you prefer for the oil change?
                </span>
              </li>
              <li className={styles.turn}>
                <span className={styles.turnWhoCaller}>Caller</span>
                <span className={styles.turnText}>Friday at three.</span>
              </li>
              <li className={styles.turn}>
                <span className={styles.turnWho}>Front desk</span>
                <span className={styles.turnText}>
                  Friday at 3 PM is outside our hours — we&rsquo;re open until 2 PM Saturdays and
                  6 PM weekdays.
                </span>
              </li>
              <li className={styles.turn}>
                <span className={styles.turnWhoCaller}>Caller</span>
                <span className={styles.turnText}>Okay. Noon.</span>
              </li>
              <li className={styles.turn}>
                <span className={styles.turnWho}>Front desk</span>
                <span className={styles.turnText}>
                  You&rsquo;re booked for Friday at noon. The shop will confirm by text. Thanks,
                  Sean — see you then.
                </span>
              </li>
              <li className={styles.turn}>
                <span className={styles.turnWhoCaller}>Caller</span>
                <span className={styles.turnText}>
                  Wait. Hold on. Hold on. How much is it for a brake job?
                </span>
              </li>
              <li className={styles.turn}>
                <span className={styles.turnWho}>Front desk</span>
                <span className={styles.turnText}>
                  Pricing depends on what the tech finds — I can book you a diagnostic and
                  they&rsquo;ll call you with an exact number before any work starts.
                </span>
              </li>
              <li className={styles.turn}>
                <span className={styles.turnWhoCaller}>Caller</span>
                <span className={styles.turnText}>Is there anything else I should know?</span>
              </li>
              <li className={styles.turn}>
                <span className={styles.turnWho}>Front desk</span>
                <span className={styles.turnText}>
                  Bring the F-150 in Friday at noon, and the team will take care of the oil
                  change. If you want the brakes checked too, mention it when you arrive.
                </span>
              </li>
              <li className={styles.turn}>
                <span className={styles.turnWhoCaller}>Caller</span>
                <span className={styles.turnText}>Okay. Thank you very much.</span>
              </li>
              <li className={styles.turn}>
                <span className={styles.turnWho}>Front desk</span>
                <span className={styles.turnText}>You&rsquo;re welcome, Sean. Goodbye.</span>
              </li>
            </ol>
          </div>
          </details>

          <h3 className={styles.sectionTitle} style={{ fontSize: "1.7rem", marginTop: "2.8rem" }}>
            It also catches nonsense.
          </h3>
          <p className={styles.sectionLede}>
            One more real call, same demo line — this time the caller was testing it. An oil
            change for a Tesla, and a callback number that was not a number at all. The front desk
            caught both, stayed polite, and did not make a fake booking.
          </p>
          <div className={styles.panelRaised}>
            <p className={styles.audioLabel}>Call summary · what happened</p>
            <p className={styles.summaryText}>
              A caller asked for an oil change on a Tesla and tried a joke callback number. The
              front desk rejected the number, then explained — politely — that Teslas don&rsquo;t
              have engines or oil changes, and offered a real inspection instead. No fake booking
              was made.
            </p>
          </div>

          {/*
            Transcript 2: the published version of the second real demo call
            (source of truth:
            ~/workspace/income-rescue/firstring-demo-call-2-transcript.md).
            The caller's callback number is MASKED on purpose — it is a personal
            cell number and must never be rendered in full on this page.
            Retell's own summary of this call is NOT used here; it prints the
            number in full.
          */}
          <details className={styles.transcriptDetails}>
            <summary>Read the full call transcript</summary>
            <div className={styles.panel} style={{ marginTop: "1.4rem" }}>
            <p className={styles.audioLabel}>The full call, word for word</p>
            <ol className={styles.transcript}>
              <li className={styles.turn}>
                <span className={styles.turnWho}>Front desk</span>
                <span className={styles.turnText}>
                  Thanks for calling Premier Auto Care, this is the front desk — how can I help
                  you?
                </span>
              </li>
              <li className={styles.turn}>
                <span className={styles.turnWhoCaller}>Caller</span>
                <span className={styles.turnText}>Yeah. I need an oil change for a Tesla.</span>
              </li>
              <li className={styles.turn}>
                <span className={styles.turnWho}>Front desk</span>
                <span className={styles.turnText}>We can take a look at it. Can I get your name?</span>
              </li>
              <li className={styles.turn}>
                <span className={styles.turnWhoCaller}>Caller</span>
                <span className={styles.turnText}>Steve.</span>
              </li>
              <li className={styles.turn}>
                <span className={styles.turnWho}>Front desk</span>
                <span className={styles.turnText}>
                  Steve, what&rsquo;s the best callback number for you?
                </span>
              </li>
              <li className={styles.turn}>
                <span className={styles.turnWhoCaller}>Caller</span>
                <span className={styles.turnText}>One nine hundred hot stuff.</span>
              </li>
              <li className={styles.turn}>
                <span className={styles.turnWho}>Front desk</span>
                <span className={styles.turnText}>
                  I&rsquo;ll need a real callback number to book it, Steve. What&rsquo;s the best
                  number?
                </span>
              </li>
              <li className={styles.turn}>
                <span className={styles.turnWhoCaller}>Caller</span>
                <span className={styles.turnText}>817-•••-9898</span>
              </li>
              <li className={styles.turn}>
                <span className={styles.turnWho}>Front desk</span>
                <span className={styles.turnText}>
                  Got it, Steve — 817-•••-9898. What year, make, and model is your Tesla?
                </span>
              </li>
              <li className={styles.turn}>
                <span className={styles.turnWhoCaller}>Caller</span>
                <span className={styles.turnText}>
                  It&rsquo;s a twenty twenty three but I&rsquo;m having problems. I can&rsquo;t
                  find the engine in it.
                </span>
              </li>
              <li className={styles.turn}>
                <span className={styles.turnWho}>Front desk</span>
                <span className={styles.turnText}>
                  A 2023 Tesla doesn&rsquo;t have a gasoline engine — it&rsquo;s electric. Tesla
                  vehicles don&rsquo;t need conventional oil changes. We can still help with
                  maintenance or inspect any concern — what&rsquo;s been going on with it?
                </span>
              </li>
              <li className={styles.turn}>
                <span className={styles.turnWhoCaller}>Caller</span>
                <span className={styles.turnText}>
                  Let me call you back. I didn&rsquo;t know that they didn&rsquo;t have engines.
                </span>
              </li>
              <li className={styles.turn}>
                <span className={styles.turnWho}>Front desk</span>
                <span className={styles.turnText}>
                  No problem, Steve. Take care, and feel free to call us back anytime.
                </span>
              </li>
            </ol>
          </div>
          </details>
        </div>
      </section>

      <section className={`${styles.section} ${styles.lightSection}`} id="how">
        <div className={styles.wrap}>
          <p className={styles.kicker}>004 / How it works</p>
          <h2 className={styles.sectionTitle}>Three steps. No new software to learn.</h2>
          <p className={styles.sectionLede}>
            You keep working the shop. FirstRing handles the phone.
          </p>
          <div className={styles.steps}>
            <div className={styles.step}>
              <p className={styles.stepNum}>STEP 01</p>
              <h3 className={styles.stepTitle}>A customer calls your shop number</h3>
              <p className={styles.stepText}>
                Day, night, weekend, or while every bay is full — the call comes in the way it
                always has. Your number doesn&rsquo;t change: the number on your sign is the
                number your customers keep dialing.
              </p>
            </div>
            <ArrowIcon />
            <div className={styles.step}>
              <p className={styles.stepNum}>STEP 02</p>
              <h3 className={styles.stepTitle}>FirstRing answers, books, takes messages</h3>
              <p className={styles.stepText}>
                It greets the caller in your shop&rsquo;s name, books the job with read-backs, and
                takes a clean message when it cannot book.
              </p>
            </div>
            <ArrowIcon />
            <div className={styles.step}>
              <p className={styles.stepNum}>STEP 03</p>
              <h3 className={styles.stepTitle}>You get a summary of every call</h3>
              <p className={styles.stepText}>
                Who called, what they need, what was booked — in plain English, after every call.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className={`${styles.section} ${styles.lightSection}`} id="pricing">
        <div className={styles.wrap}>
          <p className={styles.kicker}>SIMPLE, TRANSPARENT PRICING</p>
          <h2 className={styles.sectionTitle}>A real front desk, without the overhead.</h2>
          <p className={styles.sectionLede}>Choose the level of service that fits your shop. Both plans are managed by NextEleven, and call minutes are included.</p>
          <div className={styles.priceGrid}>
            <article className={styles.priceCard}>
              <p className={styles.priceName}>STANDARD</p>
              <p className={styles.priceBig}>$179<span>/month</span></p>
              <p className={styles.planIntro}>Everything you need to stop sending customers to voicemail.</p>
              <ul className={styles.planFeatures}>
                <li><CheckIcon /> 24/7 calls answered in your business name</li>
                <li><CheckIcon /> Appointment booking and messages</li>
                <li><CheckIcon /> Email summaries after every call</li>
                <li><CheckIcon /> Weekly call report</li>
                <li><CheckIcon /> Managed setup and ongoing support</li>
              </ul>
              <p className={styles.planFootnote}>Optional text summaries: +$19.99/month.</p>
              <a className={styles.planCta} href="#setup">Choose Standard →</a>
            </article>
            <article className={styles.priceCardFeatured}>
              <p className={styles.priceName}>PREMIER · MORE WAYS TO STAY IN THE LOOP</p>
              <p className={styles.priceBig}>$229<span>/month</span></p>
              <p className={styles.planIntro}>Everything in Standard, plus the extras for a more connected front desk.</p>
              <ul className={styles.planFeatures}>
                <li><CheckIcon /> Everything included in Standard</li>
                <li><CheckIcon /> Text-message call summaries included</li>
                <li><CheckIcon /> Branded outbound caller ID, where supported</li>
                <li><CheckIcon /> Phone number registration and verification support</li>
                <li><CheckIcon /> Setup and ongoing management by NextEleven</li>
              </ul>
              <p className={styles.planFootnote}>Caller ID display and spam labels depend on carriers and cannot be guaranteed.</p>
              <a className={styles.planCta} href="#setup">Choose Premier →</a>
            </article>
          </div>
          <div className={styles.setupFees}>
            <div>
              <p className={styles.audioLabel}>ONE-TIME SETUP</p>
              <h3>Configured for your business, not a generic script.</h3>
              <p>We set up your name, hours, services, and booking rules, then test the front desk with you.</p>
            </div>
            <div className={styles.setupFeeOptions}>
              <p><strong>$499</strong> standalone setup</p>
              <p><strong>$299</strong> with a website build (websites from $999)</p>
              <p><strong>Free</strong> with the $99/month website care plan</p>
            </div>
          </div>
          <p className={styles.pricingNote}>No per-minute billing on these plans. Need to keep answering some calls yourself? We can set up forwarding for missed calls or after hours.</p>
        </div>
      </section>

      <section className={styles.section} id="compare">
        <div className={styles.wrap}>
          <p className={styles.kicker}>HOW WE COMPARE</p>
          <h2 className={styles.sectionTitle}>Same job. Nothing new to learn.</h2>
          <p className={styles.sectionLede}>
            Most AI answering services hand you a booking system to log into, learn, and
            keep up with. FirstRing is the opposite: no dashboard, no app, nothing new to
            run. Your phone rings, we answer it, and you read a plain summary of every
            call. Here is the side-by-side with FrontDesk Pro, another DFW service.
          </p>
          <div className={styles.compareTableWrap}>
            <table className={styles.compareTable}>
              <thead>
                <tr>
                  <th scope="col"><span className={styles.compareSr}>Compared point</span></th>
                  <th scope="col">FirstRing</th>
                  <th scope="col">FrontDesk Pro</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Monthly price</th>
                  <td><strong>$179 flat</strong></td>
                  <td>$247 Starter / $347 Pro</td>
                </tr>
                <tr>
                  <th scope="row">Talk minutes</th>
                  <td><strong>Included</strong> — no per-minute billing (about 750 a month fair use)</td>
                  <td>300 a month on Starter, 600 a month on Pro</td>
                </tr>
                <tr>
                  <th scope="row">What you have to run</th>
                  <td><strong>Nothing.</strong> No dashboard, no app — a plain summary of every call</td>
                  <td>A booking system with a calendar and customer list to log into</td>
                </tr>
                <tr>
                  <th scope="row">Setup</th>
                  <td>Done for you — keep your number, carrier, and phones. $499 standalone, $299 bundled with a website, free on the care plan</td>
                  <td>$300 one-time; they configure it for you</td>
                </tr>
                <tr>
                  <th scope="row">Hear it first</th>
                  <td>Live demo line, any time: <a href="tel:+18175465305">(817) 546-5305</a></td>
                  <td>Demo line with their receptionist, Grace: (817) 725-5450</td>
                </tr>
                <tr>
                  <th scope="row">Who answers for it</th>
                  <td>NextEleven, a Texas studio — a named local human is accountable for your install</td>
                  <td>Carter&apos;s AI services, DFW</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={styles.pricingNote}>FrontDesk Pro prices and terms from frontdeskproai.com, checked November 12, 2026. If their pricing changes, we update this page.</p>
        </div>
      </section>

      <section className={styles.section} id="extras">
        <div className={styles.wrap}>
          <p className={styles.kicker}>007 / Extras</p>
          <h2 className={styles.sectionTitle}>The Premier extras.</h2>
          <p className={styles.sectionLede}>
            These three come together in Premier at $229/mo. The first one — text-message
            summaries — can also be added to Standard on its own, for $19.99/mo.
          </p>
          <ul className={styles.extras}>
            <li className={styles.extra}>
              <p className={styles.extraTag}>Premier · or +$19.99/mo on Standard</p>
              <p className={styles.extraTitle}>Text-message call summaries</p>
              <p className={styles.extraText}>
                Every call summary lands on your phone as a text, the moment the call ends.
              </p>
            </li>
            <li className={styles.extra}>
              <p className={styles.extraTag}>Premier</p>
              <p className={styles.extraTitle}>Branded caller ID</p>
              <p className={styles.extraText}>
                We configure branded outbound caller ID where carriers support it, helping customers recognize your business.
              </p>
            </li>
            <li className={styles.extra}>
              <p className={styles.extraTag}>Premier</p>
              <p className={styles.extraTitle}>Verified phone number</p>
              <p className={styles.extraText}>
                We help register and verify the number to reduce spam-labeling risk. Carrier labeling can vary.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.section} id="report">
        <div className={styles.wrap}>
          <p className={styles.kicker}>009 / The weekly report</p>
          <h2 className={styles.sectionTitle}>Know exactly what happened while you were working.</h2>
          <p className={styles.sectionLede}>
            On top of the summary you get after every call, FirstRing rolls the week up into one
            short report — calls answered, what got booked, what needs you. Here&rsquo;s the
            format, with made-up numbers:
          </p>
          <div className={styles.panelRaised}>
            <p className={styles.audioLabel}>Sample weekly report · illustrative numbers</p>
            <div className={styles.reportGrid}>
              <div className={styles.reportStat}>
                <span className={styles.reportNum}>38</span>
                <span className={styles.reportWhat}>Calls answered</span>
              </div>
              <div className={styles.reportStat}>
                <span className={styles.reportNum}>11</span>
                <span className={styles.reportWhat}>Appointments booked</span>
              </div>
              <div className={styles.reportStat}>
                <span className={styles.reportNum}>9</span>
                <span className={styles.reportWhat}>Messages taken</span>
              </div>
              <div className={styles.reportStat}>
                <span className={styles.reportNum}>2</span>
                <span className={styles.reportWhat}>Flagged urgent</span>
              </div>
            </div>
            <ul className={styles.reportLines}>
              <li>
                <strong>Booked:</strong> 6 oil changes · 2 brake checks · 2 diagnostics · 1
                inspection
              </li>
              <li>
                <strong>Urgent:</strong> Tuesday 9:14 AM — caller with a smoking engine; details
                and callback number sent to you immediately.
              </li>
              <li>
                <strong>After hours:</strong> 13 of the 38 calls came in while you were closed.
              </li>
            </ul>
            <p className={styles.audioNote}>
              Sample report — the format is real, the numbers are made up. Yours arrives every
              Monday, with your shop&rsquo;s real week in it.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.lightSection}`} id="faq">
        <div className={styles.wrap}>
          <p className={styles.kicker}>008 / Questions</p>
          <h2 className={styles.sectionTitle}>Asked by shop owners.</h2>
          <p className={styles.sectionLede}>Straight answers, same as the front desk gives.</p>
          <div className={styles.faqList}>
            <details className={styles.faqItem}>
              <summary>What happens when it can&rsquo;t help a caller?</summary>
              <p className={styles.faqAnswer}>
                It takes a message — the caller&rsquo;s name, number, and what they need — and that
                message comes to you with the call summary. Nobody reaches a dead end, and no
                caller is left talking to a voicemail box.
              </p>
            </details>
            <details className={styles.faqItem}>
              <summary>Does it quote repair prices?</summary>
              <p className={styles.faqAnswer}>
                No. FirstRing never guesses at prices. When a caller asks what a job costs, it
                sends that question to you — on our demo call, it advised the caller to request a
                brake check at the appointment so the shop could inspect the vehicle and price the
                work itself.
              </p>
            </details>
            <details className={styles.faqItem}>
              <summary>What do I actually get after a call?</summary>
              <p className={styles.faqAnswer}>
                A short written summary by email: who called, what they need, and what was booked
                — like the real one shown above. Want that summary as a text the moment the call
                ends? Add text-message summaries for $19.99/mo, or take Premier at $229/mo, where
                they&rsquo;re included.
              </p>
            </details>
            <details className={styles.faqItem}>
              <summary>Do I have to change my phone number?</summary>
              <p className={styles.faqAnswer}>
                No. The number on your sign, your trucks, and your Google listing stays yours. We
                either forward it to your FirstRing line — every call, only the calls you&rsquo;d
                otherwise miss, or after hours only — or connect it directly. Your customers dial
                the same number they always have; we just answer it.
              </p>
            </details>
            <details className={styles.faqItem}>
              <summary>What if I want to answer my own phone?</summary>
              <p className={styles.faqAnswer}>
                Then you do. FirstRing only answers the calls you route to it: every call, only
                the ones you&rsquo;d otherwise miss, or after hours when you&rsquo;re closed.
                Plenty of shops answer their own phone all day and let FirstRing catch the
                overflow and the nights. The schedule lives in the forwarding setup, and we
                configure it with you at setup.
              </p>
            </details>
            <details className={styles.faqItem}>
              <summary>Do I have to learn an app or a dashboard?</summary>
              <p className={styles.faqAnswer}>
                No. FirstRing is a managed service — we set it up, tune it, and keep it running.
                Your part is reading the call summaries and doing the work that gets booked.
              </p>
            </details>
            <details className={styles.faqItem}>
              <summary>Are calls recorded?</summary>
              <p className={styles.faqAnswer}>
                Yes. Calls are recorded and transcribed so you get an accurate summary of every
                call — who called, what they need, what got booked. And callers hear it up front:
                the greeting lets them know the call may be recorded.
              </p>
            </details>
            <details className={styles.faqItem}>
              <summary>What happens to my callers&rsquo; information?</summary>
              <p className={styles.faqAnswer}>
                It goes to you — the summary and the full transcript of every call are yours, kept
                for you as the owner. We don&rsquo;t sell caller data, and we don&rsquo;t use it
                for anything else. Questions about a recording or a transcript? Email{" "}
                <a href="mailto:hello@nexteleven.dev">hello@nexteleven.dev</a> and we&rsquo;ll
                pull it up.
              </p>
            </details>
            <details className={styles.faqItem}>
              <summary>What if it misunderstands a caller?</summary>
              <p className={styles.faqAnswer}>
                It&rsquo;s built to ask a clarifying question — or take a message — rather than
                guess. It never invents prices, availability, or details it doesn&rsquo;t have.
                And because you see the full transcript of every call, nothing hides: if a call
                went sideways, you can read exactly what was said.
              </p>
            </details>
            <details className={styles.faqItem}>
              <summary>How fast can it go live?</summary>
              <p className={styles.faqAnswer}>
                We set it up for you; most shops are live within a few business days. We build it
                around your shop&rsquo;s name, hours, and services, and test-call it with you
                before your customers ever hear it.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.lightSection}`} id="setup">
        <div className={styles.wrap}>
          <p className={styles.kicker}>011 / Get set up</p>
          <h2 className={styles.sectionTitle}>Try FirstRing for your business.</h2>
          <p className={styles.sectionLede}>
            Tried Amy? Tell us where to reach you and what your business needs.
            We&rsquo;ll discuss your calls, booking rules, pricing, and setup before you decide.
            This is a consultation request, not a purchase.
          </p>
          <form
            className={styles.intakeForm}
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            {/* Web3Forms access key is public by design (it is an alias for the recipient inbox).
                Get it by registering hello@nexteleven.dev at web3forms.com — the key arrives by email (hello@ forwards to the company inbox).
                Replace WEB3FORMS_ACCESS_KEY below with that key before shipping. */}
            <input type="hidden" name="access_key" value="c5d08d8b-c027-4d2b-bca5-518fb8b9a61f" />
            <input type="hidden" name="subject" value="FirstRing — new setup request from nexteleven.dev/frontdesk" />
            <input type="hidden" name="from_name" value="nexteleven.dev/frontdesk" />
            <input type="checkbox" name="botcheck" className={styles.honeypot} tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <div className={styles.formGrid}>
              <label className={styles.formField}>
                <span>Your name</span>
                <input type="text" name="name" required autoComplete="name" />
              </label>
              <label className={styles.formField}>
                <span>Business name</span>
                <input type="text" name="business" required autoComplete="organization" />
              </label>
              <label className={styles.formField}>
                <span>Business phone</span>
                <input type="tel" name="phone" required autoComplete="tel" />
              </label>
              <label className={styles.formField}>
                <span>Email</span>
                <input type="email" name="email" required autoComplete="email" />
              </label>
              <label className={styles.formField}>
                <span>Best time to reach you (optional)</span>
                <input type="text" name="best_time" placeholder="e.g. Weekday mornings" />
              </label>
              <label className={styles.formField}>
                <span>Anything we should know? (optional)</span>
                <input type="text" name="notes" />
              </label>
            </div>
            <label className={styles.formField} style={{ marginBottom: "1.4rem" }}>
              <span>Which plan are you considering?</span>
              <select name="preferred_plan" defaultValue="not_sure">
                <option value="not_sure">Not sure yet — help me choose</option>
                <option value="standard">Standard · $179/month</option>
                <option value="premier">Premier · $229/month</option>
              </select>
            </label>
            <button type="submit" className={styles.ctaPrimary} style={{ border: "none", cursor: "pointer" }}>
              Request my setup call
            </button>
            <p className={styles.audioNote}>
              Rather talk first? The demo line is live at{" "}
              <a href={DEMO_TEL} style={{ color: "var(--accent-light)" }}>
                (817) 546-5305
              </a>{" "}
              — or email us at{" "}
              <a href="mailto:hello@nexteleven.dev" style={{ color: "var(--accent-light)" }}>
                hello@nexteleven.dev
              </a>
              .
            </p>
          </form>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className={styles.wrap}>
          <p className={styles.kicker}>010 / Try it</p>
          <h2 className={styles.finalTitle}>Hear it for yourself. Then make it yours.</h2>
          <p className={styles.finalText}>
            The demo line is live. Book an oil change, change your mind about the time, ask it for
            a price it should not quote — then imagine that voice answering your shop&rsquo;s phone
            tonight.
          </p>
          <div className={styles.ctaRow}>
            <a className={styles.ctaPrimary} href={DEMO_TEL}>
              Call (817) 546-5305
            </a>
            <a className={styles.ctaGhost} href="#setup">Request a setup call</a>
            <a className={styles.demoSecondaryLink} href="mailto:hello@nexteleven.dev">
              hello@nexteleven.dev
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
