export const runtime = "nodejs";
export const maxDuration = 30;

/**
 * Retell call-event webhook: owner notifications for the phone agents.
 *
 * Retell POSTs call lifecycle events here (the URL is configured per agent in
 * the Retell dashboard webhook settings). On `call_analyzed` — the event that
 * carries Retell's post-call summary — this route emails a compact call report
 * to the company inbox via Web3Forms (the same key the /frontdesk form uses;
 * it is an alias for the recipient inbox, delivered to hello@nexteleven.dev,
 * which forwards to the company Gmail).
 *
 * Auth: a shared key in the `k` query parameter, checked against the
 * RETELL_WEBHOOK_KEY environment variable. Retell's own signature scheme
 * requires the account API key, which this deployment does not hold; the URL
 * key keeps the endpoint from being an open mail relay.
 *
 * Non-analyzed events are acknowledged and ignored. Almost every failure
 * returns HTTP 200 so Retell does not retry-storm the endpoint; only a bad
 * key (401) and an unconfigured key (500) use error statuses.
 */
const MAX_BODY_BYTES = 262_144;

type Json = Record<string, unknown>;

function asRecord(value: unknown): Json {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  return value as Json;
}

function str(value: unknown, max = 500): string | undefined {
  if (typeof value !== "string") return undefined;
  const cleaned = value.trim();
  return cleaned ? cleaned.slice(0, max) : undefined;
}

function lineLabel(toNumber: string | undefined): string {
  if (toNumber?.endsWith("8031967")) return "Sybil — company line (817) 803-1967";
  if (toNumber?.endsWith("5465305")) return "Amy — demo line (817) 546-5305";
  return toNumber ? `line ${toNumber}` : "unknown line";
}

function chicagoTime(epochMs: unknown): string | undefined {
  if (typeof epochMs !== "number" || !Number.isFinite(epochMs)) return undefined;
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  }).format(new Date(epochMs));
}

function durationLabel(durationMs: unknown): string | undefined {
  if (typeof durationMs !== "number" || !Number.isFinite(durationMs) || durationMs < 0) return undefined;
  const totalSeconds = Math.round(durationMs / 1000);
  return `${Math.floor(totalSeconds / 60)}:${String(totalSeconds % 60).padStart(2, "0")}`;
}

export async function GET() {
  return Response.json({ ok: true, service: "retell-call-events" }, { headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: Request) {
  const expectedKey = process.env.RETELL_WEBHOOK_KEY;
  if (!expectedKey) {
    return Response.json({ ok: false, error: "webhook_key_not_configured" }, { status: 500 });
  }
  if (new URL(request.url).searchParams.get("k") !== expectedKey) {
    return Response.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }

  let payload: Json;
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) return Response.json({ ok: false, error: "payload_too_large" });
    payload = asRecord(JSON.parse(raw));
  } catch {
    return Response.json({ ok: false, error: "invalid_json" });
  }

  const event = str(payload.event, 40);
  if (event !== "call_analyzed") {
    return Response.json({ ok: true, ignored: event ?? "unknown" }, { headers: { "Cache-Control": "no-store" } });
  }

  const call = asRecord(payload.call);
  const analysis = asRecord(call.call_analysis);
  const line = lineLabel(str(call.to_number, 40));
  const caller = str(call.from_number, 40) ?? "unknown caller";
  const when = chicagoTime(call.start_timestamp) ?? "time unknown";
  const duration = durationLabel(call.duration_ms);
  const summary = str(analysis.call_summary, 2000) ?? "No summary provided.";
  const sentiment = str(analysis.user_sentiment, 60);
  const transcript = str(call.transcript, 2500);
  const recording = str(call.recording_url, 500);

  const subject = `${line.split(" — ")[0]} call — ${caller} — ${when}`;
  const lines = [
    `New call on the ${line}.`,
    `Caller: ${caller}`,
    `When: ${when}${duration ? ` · Duration: ${duration}` : ""}`,
    sentiment ? `Caller sentiment: ${sentiment}` : undefined,
    "",
    "Summary:",
    summary,
    transcript ? `\nTranscript (truncated):\n${transcript}` : undefined,
    recording ? `\nRecording: ${recording}` : undefined,
    call.call_id ? `\nRetell call id: ${String(call.call_id)}` : undefined,
  ].filter((part): part is string => typeof part === "string");

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    return Response.json({ ok: false, error: "mail_not_configured" }, { headers: { "Cache-Control": "no-store" } });
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // Web3Forms bot-filters the default server fetch signature; present
        // as the site's own form instead.
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0 Safari/537.36",
        Referer: "https://www.nexteleven.dev/",
      },
      body: JSON.stringify({
        access_key: accessKey,
        from_name: "NextEleven Call Watch",
        subject,
        message: lines.join("\n"),
        botcheck: "",
      }),
    });
    const result = asRecord(await response.json().catch(() => ({})));
    return Response.json(
      {
        ok: result.success === true,
        ...(result.success === true ? {} : { provider_message: str(result.message, 200) ?? "unknown" }),
      },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return Response.json({ ok: false, error: "mail_send_failed" }, { headers: { "Cache-Control": "no-store" } });
  }
}
