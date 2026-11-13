import type { Metadata } from "next";
import styles from "../frontdesk.module.css";
import cmp from "./compare.module.css";

export const metadata: Metadata = {
  title: "FirstRing — The full breakdown: what answering services really charge",
  description:
    "The honest side-by-side: what answering services charge, how the meter runs past your plan, and what each one asks you to set up and maintain yourself. FirstRing publishes its full price up front — several competitors gate theirs behind a sales call. Prices checked November 2026.",
  alternates: { canonical: "/frontdesk/compare" },
  openGraph: {
    title: "FirstRing — The full breakdown",
    description:
      "What answering services charge, what they ask of you, and what FirstRing does instead. Every price on the table — including the cases where a competitor is the better fit.",
    url: "/frontdesk/compare",
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
    title: "FirstRing — The full breakdown",
    description:
      "What answering services charge, what they ask of you, and what FirstRing does instead. Prices checked November 2026.",
    images: ["/og/firstring-og.png"],
  },
};

const DEMO_TEL = "tel:+18175465305";

type Row = { label: string; cells: React.ReactNode[] };

const ROWS: Row[] = [
  {
    label: "Headline price",
    cells: [
      <><strong>$49 Starter · $179 Base · $229 Premier</strong> — per month</>,
      <>$247/mo Starter · $347/mo Pro</>,
      <>Not published — the pricing page opens with a form to talk to sales (checked November 2026)</>,
      <>$0 Free · $150/mo Pro · from $500/mo Enterprise</>,
      <>$300/mo Starter · $810 Basic · $2,100 Pro</>,
      <>$1.47 per answered call — their own examples: ~50 calls ≈ $74/mo, 100 ≈ $147, 200 ≈ $294</>,
      <>$15/user/mo billed annually — for the phone system alone</>,
    ],
  },
  {
    label: "How you\u2019re billed",
    cells: [
      <>Flat monthly. Minutes included.</>,
      <>Per-minute bundles</>,
      <>Per-minute bundles</>,
      <>Per call</>,
      <>Per call</>,
      <>Per answered call, prepaid credits</>,
      <>Per user, per month</>,
    ],
  },
  {
    label: "What\u2019s included at the entry level",
    cells: [
      <>100 minutes included (Starter); about 750 min fair use (Base), about 950 (Premier). 24/7 answering in your business&rsquo;s name, appointment booking, and a summary after every call. A human team — Sean and Mariam — behind it. Calls capped at 5 minutes each.</>,
      <>300 min (Starter) / 600 min (Pro). AI receptionist plus a full booking system: booking page, text confirmations and reminders, weekly call reports. Free 1-week trial.</>,
      <>The same feature set on every tier — their words. 24/7 bilingual answering available, scheduling, payment collection, outbound call assistance, client intake, 5,000+ integrations. Plans differ only in minutes.</>,
      <>25 calls/mo (Free) / 75 (Pro). 24/7 AI answering, recording, transcription and summaries, lead qualification and routing, AI scheduling (Calendly), integrations, analytics. Complex calls can transfer to live North America-based agents.</>,
      <>30 calls (Starter). 24/7 live North America-based agents, lead screening, qualification and intake, dashboard insights. No charge for spam calls.</>,
      <>US-based human agents, 24/7/365. Message-taking, delivered through their dashboard — real-time call logs, transcripts, billing.</>,
      <>A phone number and a phone system: unlimited US/CA calling and messaging (fair use), voicemail transcripts, shared numbers. The Sona AI answering add-on includes only 10 calls a month free.</>,
    ],
  },
  {
    label: "Setup fee",
    cells: [
      <>$499 standalone / $299 bundled with other studio work / free on the $99/mo care plan. Starter setup $199. And the setup is done entirely by us.</>,
      <>$300 one-time. They configure it for you.</>,
      <>$0 — &ldquo;no additional or hidden fees for activation, onboarding, setup, customization, or coverage during certain periods&rdquo; (their words).</>,
      <>$0 published. But read the homework row — on Pro, the setup labor is yours.</>,
      <>None. 30-day money-back guarantee.</>,
      <>$0 setup and activation.</>,
      <>No fee for the line itself. Texting registration (A2P 10DLC) costs $19.50 one-time + $1.50&ndash;$3/mo, plus $15 if a rejected filing is resubmitted.</>,
    ],
  },
  {
    label: "Contract / commitment",
    cells: [
      <>Flat monthly rate. The published price is the price — never discounted or negotiated on a call.</>,
      <>None — month-to-month, cancel anytime.</>,
      <>Not stated on their pricing page.</>,
      <>Month-to-month — with 30 days&rsquo; notice required to cancel.</>,
      <>Month-to-month (a cancellation bills through the end of the cycle). 10% discount for a 12-month subscription.</>,
      <>None — no contracts, no minimums, $0 monthly retainer. One call credit is used monthly if you get no calls, to keep your number.</>,
      <>Monthly or annual billing. 7-day free trial.</>,
    ],
  },
  {
    label: "What YOU have to do yourself",
    cells: [
      <><strong>Nothing.</strong> No app, no dashboard, nothing to set up or maintain. We handle setup, training, updates, and maintenance — you just read the call summaries.</>,
      <>They set it up for you — then your calendar and customer list live in their system (FrontDesk Book). Your existing calendar feeds in one-way only; two-way sync is &ldquo;not available yet&rdquo; (their words).</>,
      <>You keep your call-handling instructions current in Ruby&rsquo;s app/portal — they advertise &ldquo;easy-to-update call handling options.&rdquo; Onboarding runs through their sales team.</>,
      <>Pro is, in their words, &ldquo;Set it up yourself with dedicated support.&rdquo; On the Free tier you train and test the AI yourself in their Quality Studio before it goes live. Only Enterprise gets full-service setup.</>,
      <>You manage your account through their dashboard, and every extra is switched on per call from an add-on menu (see the overage row).</>,
      <>Everything after signup is self-serve: you&rsquo;re live in about 5 minutes, you set your call-handling preferences yourself, and you manage the account in their dashboard.</>,
      <><strong>Everything.</strong> It&rsquo;s a do-it-yourself app: you configure numbers, hours, ring order, greetings, auto-replies and the AI agent, file the texting registration, and maintain it all. And unless you pay extra for the AI add-on, you are still the one answering the phone.</>,
    ],
  },
  {
    label: "Who you talk to when something\u2019s wrong",
    cells: [
      <>Us — Sean and Mariam, the people who run the service. <a href="mailto:hello@nexteleven.dev">hello@nexteleven.dev</a></>,
      <>A one-person operation. Their contact page promises: &ldquo;Carter will call or text you back.&rdquo;</>,
      <>24/7 answering for your callers; a support line is published on their page (844-311-7829).</>,
      <>Pro and Enterprise: live phone, email and chat support. Free tier: support is not included (their own feature table).</>,
      <>24/7 live agents answer your callers. Account-support channels aren&rsquo;t specified on the pricing page.</>,
      <>24/7/365 answering. Account-support specifics aren&rsquo;t published on the page we checked.</>,
      <>Self-serve product; support tiers weren&rsquo;t in the pricing guide we checked.</>,
    ],
  },
  {
    label: "What happens past your plan",
    cells: [
      <><strong>No per-minute charges, ever</strong> — and nobody is cut off mid-call. If you regularly run past your fair-use budget, we talk with you about the right tier. That conversation is the whole mechanism — never a surprise charge.</>,
      <>No overage rate is published. Their FAQ steers you to upgrade — Pro doubles you to 600 minutes.</>,
      <>The overage rate is not published on their pricing page. You have to ask.</>,
      <>Published: $3.00/call (Free), $2.50/call (Pro), $2.17 (Enterprise). Every answered call counts toward your quota — you may remove up to 10% per cycle as spam.</>,
      <>Published: $11.50/call (Starter), $10.50 (Basic), $8.50 (Pro) — plus per-call add-ons: appointment booking $1.50, recording &amp; transcription $0.25, Spanish line $1.00, payments $1.00, complex routing $1.50, extended intake $1.50.</>,
      <>No overages by design — it&rsquo;s prepaid. Every answered call simply spends credits, at any hour, forever.</>,
      <>AI answering past the 10 free calls is a second subscription: $25/mo (40 calls, $1.00/call over), $49 (100, $0.75), $99 (250, $0.55), $199 (600, $0.45). Extra numbers are $5/mo each.</>,
    ],
  },
  {
    label: "Full price published on their website?",
    cells: [
      <><strong>Yes.</strong> Every price — plans, setup, the fine print — is on this website.</>,
      <>Yes — full prices on their homepage.</>,
      <>No. The billing model is published; the plan prices are not on the page. It opens with &ldquo;fill out the form to talk to sales.&rdquo;</>,
      <>Yes — a full pricing page.</>,
      <>Yes — a full pricing page, add-on menu included.</>,
      <>Yes — the per-call price is on their homepage.</>,
      <>Yes — published in Quo&rsquo;s own pricing guide (annual-billing basis).</>,
    ],
  },
];

const QUESTIONS: string[] = [
  "Can I see your full price right now, without booking a demo?",
  "What happens when I go over my minutes or calls — what is the exact per-minute or per-call rate, in writing?",
  "Do you round my calls up — to the next full minute? Does the time your staff spends after my caller hangs up count against me?",
  "What do I have to set up or maintain myself — an app, a dashboard, greetings, scripts, schedules?",
  "Is appointment booking included, or charged per call? What about text confirmations, call recording, a Spanish line — included, or add-ons?",
  "Is there a setup fee? An activation fee? Any fee with a different name?",
  "Is there a contract or a minimum term hiding in the terms — and how much notice does cancelling take?",
  "Who answers at 2 a.m. — a person, an AI, or voicemail? Does after-hours cost extra?",
  "Do spam calls and wrong numbers count against my plan?",
  "If my busiest month doubles my call volume, what does my bill look like — exactly?",
  "When something goes wrong, who do I talk to — the people who run the service, or a support queue?",
];

export default function FrontDeskComparePage() {
  return (
    <>
      {/* ---------- Hero: price transparency ---------- */}
      <section className={styles.hero} id="top">
        <div className={styles.wrap}>
          <p className={styles.kicker}>FIRSTRING · THE FULL BREAKDOWN</p>
          <h1 className={styles.heroTitle}>Every price on the table. <em>Ours included.</em></h1>
          <p className={styles.heroLede}>
            We publish our full price on this website — every plan, every setup fee, the fine
            print. Several answering services won&rsquo;t show you a number until a salesperson
            has you on a call. So here is the honest side-by-side: what each service charges,
            how the meter runs when you go past your plan, and — the part nobody prints — what
            each one asks you to do yourself.
          </p>
          <div className={styles.ctaRow}>
            <a className={styles.ctaPrimary} href={DEMO_TEL}>Hear FirstRing free — call the live demo</a>
            <a className={styles.ctaGhost} href="/frontdesk#pricing">See FirstRing plans</a>
          </div>
          <p className={styles.heroNote}>
            Every competitor figure on this page was read on that provider&rsquo;s own website
            and checked in <strong>November 2026</strong>. Where a provider doesn&rsquo;t publish
            a number, this page says so instead of guessing.
          </p>
        </div>
      </section>

      {/* ---------- Why we publish ours ---------- */}
      <section className={styles.section}>
        <div className={styles.wrap}>
          <p className={styles.kicker}>PRICE TRANSPARENCY</p>
          <h2 className={styles.sectionTitle}>If a price needs a sales call, it isn&rsquo;t a price yet.</h2>
          <p className={cmp.bodyText}>
            Ruby&rsquo;s pricing page — one of the biggest names in this business — opens with
            &ldquo;fill out the form to talk to sales,&rdquo; and the plan prices themselves
            don&rsquo;t appear on the page at all. Their larger plans are, in their words,
            &ldquo;just talk to us.&rdquo; That&rsquo;s normal in this industry. It&rsquo;s also
            how a $150 headline becomes a $400 bill: the meter, the add-ons, and the homework
            only show up after you&rsquo;ve signed.
          </p>
          <p className={cmp.bodyText}>
            Our answer is boring on purpose: <strong>the full price is on the website</strong> —
            plans, setup fees, what happens past your plan, all of it, before you&rsquo;ve told
            us your name. And when the technology under FirstRing improves,{" "}
            <strong>the improvement lands on your existing plan as it ships, at the published
            price</strong> — no upgrade call, no new sales appointment.
          </p>
          <p className={cmp.bodyText}>
            Below is the comparison we&rsquo;d want if we were buying. It includes the rows most
            services would rather you didn&rsquo;t line up: the overage meter, the add-on menu,
            and the column that matters most — <strong>what you have to do yourself</strong>.
          </p>
        </div>
      </section>

      {/* ---------- The table ---------- */}
      <section className={`${styles.section} ${styles.lightSection}`} id="table">
        <div className={styles.wrap}>
          <p className={styles.kicker}>THE SIDE-BY-SIDE</p>
          <h2 className={styles.sectionTitle}>What they charge. What they ask of you.</h2>
          <p className={styles.sectionLede}>
            Seven ways to get a business phone answered, lined up on the same facts. On a phone,
            swipe the table sideways — the row labels stay put.
          </p>
          <div className={cmp.tableWrap}>
            <table className={cmp.wideTable}>
              <thead>
                <tr>
                  <th scope="col"><span className={styles.compareSr}>Compared point</span></th>
                  <th scope="col" className={cmp.ours}>FirstRing<span className={cmp.sub}>NextEleven — that&rsquo;s us</span></th>
                  <th scope="col">FrontDesk Pro<span className={cmp.sub}>AI answering + booking</span></th>
                  <th scope="col">Ruby Receptionists<span className={cmp.sub}>Live receptionists</span></th>
                  <th scope="col">Smith.ai — AI<span className={cmp.sub}>AI receptionist</span></th>
                  <th scope="col">Smith.ai — Live<span className={cmp.sub}>Live receptionists</span></th>
                  <th scope="col">AnswerAmerica<span className={cmp.sub}>Live message-taking</span></th>
                  <th scope="col">Quo<span className={cmp.sub}>DIY phone system · formerly OpenPhone</span></th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    {row.cells.map((cell, i) => (
                      <td key={i} className={i === 0 ? cmp.ours : undefined}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={styles.pricingNote}>
            Prices checked November 2026, on each provider&rsquo;s own website
            (frontdeskproai.com, ruby.com, smith.ai, answeramerica.com, quo.com). Providers
            change their pricing without telling us; if a figure here ever goes stale, the
            provider&rsquo;s own site is the truth — and we&rsquo;ll update this page.
          </p>
        </div>
      </section>

      {/* ---------- Honesty box ---------- */}
      <section className={styles.section} id="honest">
        <div className={styles.wrap}>
          <p className={styles.kicker}>BEFORE THE PITCH</p>
          <h2 className={styles.sectionTitle}>When FirstRing is not the right fit.</h2>
          <div className={cmp.honestBox}>
            <p className={cmp.honestLead}>
              Most companies would call it crazy to point you to a competitor. We do it on
              purpose. NextEleven exists to help your business succeed — even if that success
              isn&rsquo;t with us. So before the pitch, the honest part: a few reasons FirstRing
              might not be the right fit for you.
            </p>
            <div className={cmp.fitGrid}>
              <div className={cmp.fitItem}>
                <p className={cmp.fitTitle}>Your call volume is tiny — and all you need is message-taking</p>
                <p className={cmp.fitText}>
                  A per-call service can beat a flat price at low volume. AnswerAmerica charges
                  $1.47 per answered call — their own examples work out to about $147 a month at
                  100 calls. If that&rsquo;s genuinely all you need, take the cheaper fit. We
                  mean it.
                </p>
              </div>
              <div className={cmp.fitItem}>
                <p className={cmp.fitTitle}>You want a live human receptionist for complex intake</p>
                <p className={cmp.fitText}>
                  Legal and medical intake is a craft: long, sensitive, structured conversations
                  with a person. Live receptionist services cost more — Smith.ai&rsquo;s live
                  plans start at $300/mo for 30 calls — because that depth is what they sell. If
                  your callers need it, buy it.
                </p>
              </div>
              <div className={cmp.fitItem}>
                <p className={cmp.fitTitle}>You enjoy running your own tools</p>
                <p className={cmp.fitText}>
                  If configuring your own phone system sounds like a good Saturday, a DIY setup
                  like Quo ($15/user/month for the line) plus your own time is cheaper — as long
                  as your time costs you nothing. Some owners love the control. We&rsquo;d only
                  slow them down.
                </p>
              </div>
              <div className={cmp.fitItem}>
                <p className={cmp.fitTitle}>You need heavy outbound calling or deep CRM workflows</p>
                <p className={cmp.fitText}>
                  FirstRing answers inbound calls for local businesses. It isn&rsquo;t an outbound
                  campaign tool, and it isn&rsquo;t a CRM. If that&rsquo;s the job, you need a
                  different tool — and we&rsquo;d rather tell you that on a setup call than sell
                  you the wrong thing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Buyer checklist ---------- */}
      <section className={`${styles.section} ${styles.lightSection}`} id="questions">
        <div className={styles.wrap}>
          <p className={styles.kicker}>THE BUYER&rsquo;S CHECKLIST</p>
          <h2 className={styles.sectionTitle}>11 questions to ask any answering service before you sign.</h2>
          <p className={styles.sectionLede}>
            Ask every service on your list these — including us. The answers tell you where the
            meter, the homework, and the fine print live.
          </p>
          <ol className={cmp.checkList}>
            {QUESTIONS.map((q, i) => (
              <li key={i} className={cmp.checkItem}>
                <p><strong>{q}</strong></p>
              </li>
            ))}
          </ol>
          <p className={styles.pricingNote}>
            FirstRing&rsquo;s answers are on this page, and the full fine print is published in
            our <a className={styles.inlineLink} href="/terms">service terms</a> — printed, not
            read out to you after you sign.
          </p>
        </div>
      </section>

      {/* ---------- Closing: Pilot + demo ---------- */}
      <section className={styles.finalCta}>
        <div className={styles.wrap}>
          <p className={styles.kicker}>TRY IT FIRST</p>
          <h2 className={styles.finalTitle}>Don&rsquo;t take our word for any of this. Take the Pilot.</h2>
          <p className={styles.finalText}>
            The Pilot is $29, one time: 50 minutes of live answering on your own business&rsquo;s
            setup, to use within 14 days — fully credited toward setup if you sign within 7 days
            after the pilot ends. Or skip the paperwork entirely and call the demo line now: book
            an oil change, change your mind about the time, ask for a price it shouldn&rsquo;t
            quote. That&rsquo;s the product, live.
          </p>
          <div className={styles.ctaRow}>
            <a className={styles.ctaPrimary} href={DEMO_TEL}>
              Call (817) 546-5305
            </a>
            <a className={styles.ctaGhost} href="/frontdesk#setup">Request a setup call</a>
            <a className={styles.demoSecondaryLink} href="/frontdesk">
              Back to FirstRing plans →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
