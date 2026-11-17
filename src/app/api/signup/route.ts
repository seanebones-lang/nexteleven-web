import { SIGNUP_INTAKE_KEY, SIGNUP_INTAKE_URL } from "@/lib/signup-intake";

export const runtime = "nodejs";
export const maxDuration = 30;

/**
 * Email signup intake: stores a visitor's email address for FirstRing
 * follow-up in the "NextEleven.dev signups" Google Sheet.
 *
 * The browser posts { email, source_page } here; this route validates the
 * address, drops honeypot submissions, and forwards the signup to the Apps
 * Script web app bound to the Sheet (see src/lib/signup-intake.ts), which
 * appends the row with a server-side date stamp. Only three fields are ever
 * stored: email, date, source page.
 *
 * The visitor sees a confirmation only when the Sheet append is confirmed —
 * a failed append returns an error status so the form can say so honestly.
 */

const MAX_BODY_BYTES = 4096;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function json(body: Record<string, unknown>, status: number) {
  return Response.json(body, { status });
}

export async function POST(request: Request) {
  if (!SIGNUP_INTAKE_URL) return json({ ok: false, error: "unconfigured" }, 503);

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) return json({ ok: false, error: "too_large" }, 413);

  let body: Record<string, unknown>;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("shape");
    body = parsed as Record<string, unknown>;
  } catch {
    return json({ ok: false, error: "bad_json" }, 400);
  }

  // Honeypot: real visitors never see or fill this field. Acknowledge bots
  // with a fake success so they move on, but store nothing.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return json({ ok: true }, 200);
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (email.length > 254 || !EMAIL_RE.test(email)) {
    return json({ ok: false, error: "email" }, 422);
  }
  const sourcePage =
    typeof body.source_page === "string" && body.source_page.startsWith("/")
      ? body.source_page.slice(0, 200)
      : "/";

  try {
    const res = await fetch(SIGNUP_INTAKE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ k: SIGNUP_INTAKE_KEY, email, source_page: sourcePage }),
      redirect: "follow",
    });
    const data: unknown = await res.json().catch(() => null);
    if (
      res.ok &&
      data &&
      typeof data === "object" &&
      (data as Record<string, unknown>).ok === true
    ) {
      return json({ ok: true }, 200);
    }
    return json({ ok: false, error: "intake" }, 502);
  } catch {
    return json({ ok: false, error: "intake_unreachable" }, 502);
  }
}
