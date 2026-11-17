"use client";

import { useState } from "react";
import styles from "./EmailSignup.module.css";

/**
 * Email-only signup for visitors who are not ready to call or book today.
 * Posts to /api/signup, which stores the address (with the signup date and
 * this page) in the "NextEleven.dev signups" Google Sheet for follow-up.
 * The confirmation renders only after the store is confirmed server-side.
 */
export default function EmailSignup({
  source,
  heading = "Not ready to talk yet?",
  blurb = "Leave your email and we will follow up about FirstRing — what it costs, how setup works, and answers to the questions shop owners usually ask first. No spam, no pressure.",
}: {
  source: string;
  heading?: string;
  blurb?: string;
}) {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState(""); // honeypot — humans never fill this
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "sending") return;
    setState("sending");
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source_page: source, company }),
      });
      const data: unknown = await res.json().catch(() => null);
      if (res.ok && data && typeof data === "object" && (data as { ok?: unknown }).ok === true) {
        setState("done");
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  return (
    <section className={styles.signup} aria-labelledby="email-signup-title">
      <div className={styles.inner}>
        <h2 id="email-signup-title" className={styles.title}>
          {heading}
        </h2>
        {state === "done" ? (
          <p className={styles.confirmation} role="status">
            You&rsquo;re on the list — we&rsquo;ll be in touch. If you&rsquo;d rather talk now,
            call the FirstRing demo line at{" "}
            <a href="tel:+18175465305">(817) 546-5305</a>.
          </p>
        ) : (
          <>
            <p className={styles.blurb}>{blurb}</p>
            <form className={styles.form} onSubmit={onSubmit} noValidate={false}>
              <label className={styles.label} htmlFor="email-signup-input">
                Email address
              </label>
              <div className={styles.row}>
                <input
                  id="email-signup-input"
                  className={styles.input}
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  placeholder="you@yourshop.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <input
                  className={styles.honeypot}
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  value={company}
                  onChange={(event) => setCompany(event.target.value)}
                />
                <button className={styles.button} type="submit" disabled={state === "sending"}>
                  {state === "sending" ? "Saving…" : "Keep me posted"}
                </button>
              </div>
              {state === "error" ? (
                <p className={styles.error} role="alert">
                  That didn&rsquo;t save — please try again, or email us at{" "}
                  <a href="mailto:hello@nexteleven.dev">hello@nexteleven.dev</a>.
                </p>
              ) : null}
            </form>
          </>
        )}
      </div>
    </section>
  );
}
