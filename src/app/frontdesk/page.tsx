import type { Metadata } from "next";
import styles from "./frontdesk.module.css";

export const metadata: Metadata = {
  title: "FirstRing — Your phone, answered on the first ring",
  description:
    "FirstRing is an AI front desk for local shops from NextEleven Studios. It answers your phone 24/7 in your shop's name, books appointments, takes messages, and sends you a summary of every call.",
  openGraph: {
    title: "FirstRing — Your phone, answered on the first ring. Every time.",
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
      {/* ---------- 1 · Hero ---------- */}
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <p className={styles.kicker}>FirstRing · AI front desk for local shops</p>
          <h1 className={styles.heroTitle}>
            Your phone, answered on the <em>first ring</em>. Every time.
          </h1>
          <p className={styles.heroLede}>
            FirstRing is an AI front desk for your shop. It answers your phone around the clock in
            your shop&rsquo;s name, books appointments, takes messages — and sends you a plain
            summary of every call. No app to install. No login to learn. We run it for you.
          </p>
          <div className={styles.ctaRow}>
            <a className={styles.ctaPrimary} href={DEMO_TEL}>
              Hear it yourself: (817) 546-5305
            </a>
            <a className={styles.ctaGhost} href="#listen">
              Listen to a real call first
            </a>
          </div>
          <p className={styles.heroNote}>
            That number is our live demo line. Call it, book an oil change, ask it what a brake job
            costs — that voice is what your customers would hear.
          </p>
          <figure className={styles.heroVideoWrap}>
            <video
              className={styles.heroVideo}
              controls
              preload="metadata"
              poster="/video/firstring-explainer-poster.jpg"
              src="/video/firstring-explainer.mp4"
            >
              Your browser does not support video playback. Call the demo line instead: (817)
              546-5305.
            </video>
            <figcaption className={styles.heroVideoCaption}>
              Watch: how FirstRing answers, books, and reports back — 2 minutes.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ---------- Who it's for ---------- */}
      <section className={styles.whoStrip} aria-label="Who FirstRing is for">
        <div className={styles.wrap}>
          <p className={styles.kicker}>Who it&rsquo;s for</p>
          <p className={styles.whoTrades}>
            Auto shops · HVAC · Plumbing · Electrical · Salons &amp; barbers · Clinics · Towing ·
            Contractors · Any business that runs on phone calls
          </p>
          <p className={styles.whoLine}>
            If your business lives on its phone, FirstRing answers it.
          </p>
        </div>
      </section>

      {/* ---------- 2 · Listen ---------- */}
      <section className={styles.section} id="listen">
        <div className={styles.wrap}>
          <p className={styles.kicker}>002 / Listen</p>
          <h2 className={styles.sectionTitle}>A real call to our demo line.</h2>
          <p className={styles.sectionLede}>
            Our demo answers as an auto shop — that&rsquo;s the line we could call live. Yours
            answers as your business: your name, your services, your rules.
          </p>
          <p className={styles.sectionLede}>
            This is not a script read by an actor. It is a recording of an actual call to the demo
            line above — a customer booking an oil change and asking about a brake job.
          </p>
          <p className={styles.sectionLede}>
            The voice you&rsquo;ll hear is <strong>Amy</strong> — the same voice your callers
            would hear, answering in your shop&rsquo;s name.
          </p>
          <div className={styles.panel}>
            <p className={styles.audioLabel}>Demo call · Premier Auto Care (demo shop)</p>
            <audio
              className={styles.audio}
              controls
              preload="metadata"
              src="/audio/firstring-demo-call.mp3"
            >
              Your browser does not support audio playback. Call the demo line instead: (817)
              546-5305.
            </audio>
            <p className={styles.audioNote}>
              Prefer to drive the conversation yourself? The demo line is live right now at{" "}
              <a href={DEMO_TEL} style={{ color: "var(--accent-light)" }}>
                (817) 546-5305
              </a>
              .
            </p>
          </div>
          <div className={styles.panel} style={{ marginTop: "1.4rem" }}>
            <p className={styles.audioLabel}>Demo call 2 · The Tesla test (demo shop)</p>
            <audio
              className={styles.audio}
              controls
              preload="metadata"
              src="/audio/firstring-demo-call-2.mp3"
            >
              Your browser does not support audio playback. Call the demo line instead: (817)
              546-5305.
            </audio>
            <p className={styles.audioNote}>
              Same line, a harder customer: a joke callback number, and an oil change for a car
              with no engine. The written-out call is below, under &ldquo;It also catches
              nonsense.&rdquo;
            </p>
          </div>
          <p className={styles.audioNote} style={{ marginTop: "1rem" }}>
            Callback numbers are muted in these recordings for privacy.
          </p>
        </div>
      </section>

      {/* ---------- 3 · Read the call ---------- */}
      <section className={styles.section} id="read">
        <div className={styles.wrap}>
          <p className={styles.kicker}>003 / Read the call</p>
          <h2 className={styles.sectionTitle}>What the owner got after that call.</h2>
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
        </div>
      </section>

      {/* ---------- 4 · How it works ---------- */}
      <section className={styles.section} id="how">
        <div className={styles.wrap}>
          <p className={styles.kicker}>004 / How it works</p>
          <h2 className={styles.sectionTitle}>Three steps. None of them are yours.</h2>
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

      {/* ---------- 5 · What it does ---------- */}
      <section className={styles.section} id="does">
        <div className={styles.wrap}>
          <p className={styles.kicker}>005 / What it does</p>
          <h2 className={styles.sectionTitle}>A front desk that never misses.</h2>
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

      {/* ---------- 6 · Pricing ---------- */}
      <section className={styles.section} id="pricing">
        <div className={styles.wrap}>
          <p className={styles.kicker}>006 / Pricing</p>
          <h2 className={styles.sectionTitle}>Plain pricing. No quote form.</h2>
          <p className={styles.sectionLede}>
            Two ways to run it — Standard, or Premier with the extras built in — plus one
            one-time setup. That is the whole price list.
          </p>
          <div className={styles.priceGrid}>
            <div className={styles.priceCard}>
              <p className={styles.priceName}>Standard</p>
              <div className={styles.priceRow}>
                <span className={styles.priceWhat}>Managed front desk, per month</span>
                <span className={styles.priceAmount}>
                  $179<small>/mo</small>
                </span>
              </div>
              <div className={styles.priceRow}>
                <span className={styles.priceWhat}>Add text summaries</span>
                <span className={styles.priceAmount}>
                  +$19.99<small>/mo</small>
                </span>
              </div>
              <p className={styles.priceNote}>
                Your managed front desk, run for you around the clock. Call minutes are included
                — one flat price, no per-minute billing. And after every call, a plain written
                summary lands in your email: who called, what they need, what got booked.
              </p>
            </div>
            <div className={styles.priceCardFeatured}>
              <p className={styles.priceName}>Premier</p>
              <div className={styles.priceRow}>
                <span className={styles.priceWhat}>Everything in Standard, per month</span>
                <span className={styles.priceAmount}>
                  $229<small>/mo</small>
                </span>
              </div>
              <p className={styles.priceNote}>
                Everything in Standard, plus the extras built in: text summaries included,
                branded caller ID — your shop&rsquo;s name shows when your front desk calls out
                — and a verified phone number, registered so its calls aren&rsquo;t flagged as
                spam. That last one matters more than it sounds: a verified number is far less
                likely to show up as &ldquo;Spam Risk&rdquo; on a customer&rsquo;s phone, so
                they actually see the call — and call back.
              </p>
            </div>
          </div>
          <div className={styles.panel} style={{ marginTop: "1.4rem" }}>
            <p className={styles.audioLabel}>One-time setup</p>
            <p className={styles.summaryText} style={{ fontSize: "1.02rem" }}>
              One-time setup: <strong>$299</strong> bundled with a website build ·{" "}
              <strong>$499</strong> standalone · <strong>free</strong> on our $99/mo website care plan.
              We build your front desk around your shop — your
              name, your hours, your services, your booking rules — then test-call it with you
              before it goes live.
            </p>
          </div>
          <p className={styles.roiLine}>
            One recovered $400 brake job covers two months of FirstRing.
          </p>
          <div className={styles.panel} style={{ marginTop: "1.4rem" }}>
            <p className={styles.audioLabel}>The bundle most shops start with</p>
            <p className={styles.summaryText} style={{ fontSize: "1.02rem" }}>
              A website from <strong>$999</strong> —
              add FirstRing setup for <strong>$299</strong> instead of $499, and your new site and
              your new front desk go live together.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- 7 · Extras ---------- */}
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
                When your front desk calls a customer back, your shop&rsquo;s name shows on
                their caller ID — not an unknown number.
              </p>
            </li>
            <li className={styles.extra}>
              <p className={styles.extraTag}>Premier</p>
              <p className={styles.extraTitle}>Verified phone number</p>
              <p className={styles.extraText}>
                Your front desk&rsquo;s number is registered and verified, so its calls
                aren&rsquo;t flagged as spam.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* ---------- 8 · FAQ ---------- */}
      <section className={styles.section} id="faq">
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

      {/* ---------- 9 · Sample weekly report ---------- */}
      <section className={styles.section} id="report">
        <div className={styles.wrap}>
          <p className={styles.kicker}>009 / The weekly report</p>
          <h2 className={styles.sectionTitle}>Every Monday, the week in one page.</h2>
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

      {/* ---------- 10 · Final CTA ---------- */}
      <section className={styles.finalCta}>
        <div className={styles.wrap}>
          <p className={styles.kicker}>010 / Try it</p>
          <h2 className={styles.finalTitle}>Do not take our word for it. Call it.</h2>
          <p className={styles.finalText}>
            The demo line is live. Book an oil change, change your mind about the time, ask it for
            a price it should not quote — then imagine that voice answering your shop&rsquo;s phone
            tonight.
          </p>
          <div className={styles.ctaRow}>
            <a className={styles.ctaPrimary} href={DEMO_TEL}>
              Call (817) 546-5305
            </a>
            <a className={styles.ctaGhost} href="mailto:hello@nexteleven.dev">
              hello@nexteleven.dev
            </a>
          </div>
        </div>
      </section>

      {/* ---------- 11 · Get set up (intake form) ---------- */}
      <section className={styles.section} id="setup">
        <div className={styles.wrap}>
          <p className={styles.kicker}>011 / Get set up</p>
          <h2 className={styles.sectionTitle}>Ready when you are.</h2>
          <p className={styles.sectionLede}>
            Tell us where to reach you and we&rsquo;ll call to set up your front desk — your
            name, your hours, your services, your booking rules. Most shops are live within a
            few business days.
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
                <span>Best time to reach you</span>
                <input type="text" name="best_time" required placeholder="e.g. Weekday mornings" />
              </label>
              <label className={styles.formField}>
                <span>Anything we should know? (optional)</span>
                <input type="text" name="notes" />
              </label>
            </div>
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
    </>
  );
}
