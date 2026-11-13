/**
 * FirstRing calendar booking — server side for the Retell demo agent's
 * `check_availability` and `book_appointment` custom functions.
 *
 * Server-side only: the Cal.com API key and the shared function secret never
 * leave this server. Credentials are read from environment variables by the
 * route modules and injected here (same factory pattern as src/lib/mihrab-study.ts).
 *
 * STATUS: staging code. Booking is NOT live. Nothing may claim booking works
 * until the proof plan in the staging SPEC passes end to end (a real test call
 * that lands a verifiable booking in the calendar).
 *
 * Calendar provider: Cal.com API v2 (https://api.cal.com/v2).
 * - Slots:    GET  /v2/slots    with header cal-api-version: 2024-09-04
 * - Bookings: POST /v2/bookings with header cal-api-version: 2026-02-25
 * Version headers are pinned per endpoint family on purpose: Cal.com silently
 * serves an older response shape when the header is missing or wrong.
 */
import { createHash, timingSafeEqual } from "node:crypto";

export class BookingFailure extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

type Fetcher = typeof fetch;

export type BookingConfig = {
  /** Shared secret Retell sends as the `x-firstring-secret` header (env FIRSTRING_FUNCTION_SECRET). */
  functionSecret?: string;
  /** Cal.com API key (env CALCOM_API_KEY). */
  calcomApiKey?: string;
  /** Cal.com event type id for the shop's service appointment (env FIRSTRING_CALCOM_EVENT_TYPE_ID). */
  eventTypeId?: string;
  /** Cal.com event type id used when the request URL carries ?kind=callback (env FIRSTRING_CALCOM_CALLBACK_EVENT_TYPE_ID). */
  callbackEventTypeId?: string;
  /** Shop-local IANA time zone (env FIRSTRING_SHOP_TIMEZONE). Defaults to America/Chicago. */
  timeZone?: string;
  /** Override for tests/self-hosted Cal.com (env CALCOM_API_BASE_URL). */
  calcomBaseUrl?: string;
  /** How far ahead callers may book, in days. Default 30. */
  bookingWindowDays?: number;
  /** Max slots returned to the agent per availability check. Default 6. */
  maxSlotsToOffer?: number;
  fetcher?: Fetcher;
  now?: () => number;
};

const SLOTS_API_VERSION = "2024-09-04";
const BOOKINGS_API_VERSION = "2026-02-25";
const MAX_BODY_BYTES = 32_768;
const MAX_PROVIDER_BYTES = 262_144;

/* ------------------------------------------------------------------ */
/* Small validation helpers                                            */
/* ------------------------------------------------------------------ */

function asRecord(value: unknown): Record<string, unknown> {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new BookingFailure(400, "invalid_request_body");
  }
  return value as Record<string, unknown>;
}

function cleanString(value: unknown, maxLength: number): string | undefined {
  if (typeof value !== "string") return undefined;
  const cleaned = value.trim().replace(/\s+/g, " ");
  if (!cleaned) return undefined;
  return cleaned.slice(0, maxLength);
}

function requiredString(value: unknown, maxLength: number, error: string): string {
  const cleaned = cleanString(value, maxLength);
  if (!cleaned) throw new BookingFailure(400, error);
  return cleaned;
}

/** Normalize a spoken callback number to digits with an optional leading +. */
function normalizePhone(value: unknown): string {
  const raw = requiredString(value, 32, "missing_callback_phone");
  const digits = raw.replace(/[^\d]/g, "");
  if (digits.length < 7 || digits.length > 15) {
    throw new BookingFailure(400, "invalid_callback_phone");
  }
  return raw.trim().startsWith("+") ? `+${digits}` : digits;
}

const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

function parseDateArg(value: unknown): string {
  const date = requiredString(value, 10, "missing_date");
  if (!DATE_PATTERN.test(date)) throw new BookingFailure(400, "invalid_date");
  const [y, m, d] = date.split("-").map(Number);
  const probe = new Date(Date.UTC(y, m - 1, d));
  if (probe.getUTCFullYear() !== y || probe.getUTCMonth() !== m - 1 || probe.getUTCDate() !== d) {
    throw new BookingFailure(400, "invalid_date");
  }
  return date;
}

function addDays(date: string, days: number): string {
  const [y, m, d] = date.split("-").map(Number);
  const next = new Date(Date.UTC(y, m - 1, d) + days * 86_400_000);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${next.getUTCFullYear()}-${pad(next.getUTCMonth() + 1)}-${pad(next.getUTCDate())}`;
}

/* ------------------------------------------------------------------ */
/* Time-zone math (no date library in this repo; Intl only)            */
/* ------------------------------------------------------------------ */

function tzOffsetMs(timeZone: string, utcMs: number): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).formatToParts(new Date(utcMs));
  const get = (type: string) => Number(parts.find((p) => p.type === type)?.value ?? "0");
  const localAsUtc = Date.UTC(get("year"), get("month") - 1, get("day"), get("hour") % 24, get("minute"), get("second"));
  return localAsUtc - Math.floor(utcMs / 1000) * 1000;
}

/** UTC instant of local midnight (00:00) on `date` in `timeZone`. */
function zonedMidnightUtc(date: string, timeZone: string): number {
  const [y, m, d] = date.split("-").map(Number);
  const guess = Date.UTC(y, m - 1, d);
  let utc = guess - tzOffsetMs(timeZone, guess);
  utc = guess - tzOffsetMs(timeZone, utc); // second pass settles DST edges
  return utc;
}

/** Local calendar date (YYYY-MM-DD) of an instant, in `timeZone`. */
function localDateString(instantMs: number, timeZone: string): string {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date(instantMs));
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  return `${get("year")}-${get("month")}-${get("day")}`;
}

/** "Monday, November 9 at 9:00 AM" — the exact phrasing the agent reads back. */
function spokenTime(isoStart: string, timeZone: string): string {
  const instant = new Date(isoStart);
  const dateParts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(instant);
  const timeParts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "numeric",
    minute: "2-digit",
  }).format(instant);
  return `${dateParts} at ${timeParts}`;
}

/* ------------------------------------------------------------------ */
/* Retell request envelope + shared-secret check                       */
/* ------------------------------------------------------------------ */

function verifyFunctionSecret(request: Request, expected: string): void {
  const provided = request.headers.get("x-firstring-secret") ?? "";
  // Compare SHA-256 digests so length differences don't leak via timing.
  const a = createHash("sha256").update(provided).digest();
  const b = createHash("sha256").update(expected).digest();
  if (!timingSafeEqual(a, b)) throw new BookingFailure(401, "unauthorized");
}

async function readRawBody(request: Request): Promise<string> {
  const reader = request.body?.getReader();
  if (!reader) throw new BookingFailure(400, "invalid_request_body");
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    for (;;) {
      const part = await reader.read();
      if (part.done) break;
      size += part.value.byteLength;
      if (size > MAX_BODY_BYTES) {
        await reader.cancel();
        throw new BookingFailure(413, "request_too_large");
      }
      chunks.push(part.value);
    }
  } finally {
    reader.releaseLock();
  }
  const bytes = new Uint8Array(size);
  let at = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, at);
    at += chunk.byteLength;
  }
  return new TextDecoder("utf-8", { fatal: true }).decode(bytes);
}

type RetellArgs = { args: Record<string, unknown>; callId?: string };

/**
 * Retell's default custom-function payload wraps arguments:
 *   { "name": "check_availability", "call": { "call_id": "...", ... }, "args": { ... } }
 * With `args_at_root` the body is the arguments object itself. Accept both so a
 * dashboard toggle can't silently break the endpoints.
 */
function parseRetellArgs(rawBody: string): RetellArgs {
  let parsed: unknown;
  try {
    parsed = JSON.parse(rawBody);
  } catch {
    throw new BookingFailure(400, "invalid_json");
  }
  const body = asRecord(parsed);
  const call = body.call && typeof body.call === "object" && !Array.isArray(body.call)
    ? (body.call as Record<string, unknown>)
    : undefined;
  const callId = typeof call?.call_id === "string" ? call.call_id : undefined;
  if (body.args && typeof body.args === "object" && !Array.isArray(body.args)) {
    return { args: body.args as Record<string, unknown>, callId };
  }
  return { args: body, callId };
}

/* ------------------------------------------------------------------ */
/* Cal.com API v2 client                                               */
/* ------------------------------------------------------------------ */

type CalcomClient = {
  getSlotStarts(eventTypeId: number, startUtc: string, endUtc: string, timeZone: string): Promise<string[]>;
  createBooking(body: Record<string, unknown>): Promise<{ uid: string; start: string; end: string; status: string }>;
};

function createCalcomClient(config: BookingConfig): CalcomClient {
  const fetcher = config.fetcher ?? fetch;
  const base = (config.calcomBaseUrl?.trim() || "https://api.cal.com/v2").replace(/\/+$/, "");

  async function calFetch(path: string, version: string, init?: RequestInit): Promise<Record<string, unknown>> {
    let response: Response;
    try {
      response = await fetcher(`${base}${path}`, {
        ...init,
        headers: {
          Authorization: `Bearer ${config.calcomApiKey}`,
          "cal-api-version": version,
          ...(init?.body ? { "Content-Type": "application/json" } : {}),
        },
      });
    } catch {
      throw new BookingFailure(502, "calendar_unreachable");
    }
    const text = await response.text().catch(() => "");
    if (text.length > MAX_PROVIDER_BYTES) throw new BookingFailure(502, "calendar_response_too_large");
    let payload: Record<string, unknown> = {};
    try {
      payload = text ? (JSON.parse(text) as Record<string, unknown>) : {};
    } catch {
      throw new BookingFailure(502, "calendar_invalid_response");
    }
    if (!response.ok || payload.status === "error") {
      const detail = typeof payload.message === "string" ? payload.message : `http_${response.status}`;
      const failure = new BookingFailure(502, "calendar_error");
      (failure as BookingFailure & { providerDetail?: string }).providerDetail = detail;
      throw failure;
    }
    return payload;
  }

  return {
    async getSlotStarts(eventTypeId, startUtc, endUtc, timeZone) {
      const query = new URLSearchParams({ eventTypeId: String(eventTypeId), start: startUtc, end: endUtc, timeZone });
      const payload = await calFetch(`/slots?${query.toString()}`, SLOTS_API_VERSION);
      const data = asRecord(payload.data ?? {});
      const starts: string[] = [];
      for (const day of Object.values(data)) {
        if (!Array.isArray(day)) continue;
        for (const slot of day) {
          const start = (slot as Record<string, unknown>)?.start;
          if (typeof start === "string" && !Number.isNaN(Date.parse(start))) starts.push(start);
        }
      }
      return [...new Set(starts)].sort((a, b) => Date.parse(a) - Date.parse(b));
    },

    async createBooking(body) {
      const payload = await calFetch("/bookings", BOOKINGS_API_VERSION, {
        method: "POST",
        body: JSON.stringify(body),
      });
      const data = asRecord(payload.data ?? {});
      if (typeof data.uid !== "string" || typeof data.start !== "string") {
        throw new BookingFailure(502, "calendar_invalid_response");
      }
      return {
        uid: data.uid,
        start: data.start,
        end: typeof data.end === "string" ? data.end : data.start,
        status: typeof data.status === "string" ? data.status : "accepted",
      };
    },
  };
}

/* ------------------------------------------------------------------ */
/* The booking service (one instance per route module)                 */
/* ------------------------------------------------------------------ */

export function createBookingService(config: BookingConfig) {
  const timeZone = config.timeZone?.trim() || "America/Chicago";
  const bookingWindowDays = config.bookingWindowDays ?? 30;
  const maxSlots = config.maxSlotsToOffer ?? 6;
  const now = config.now ?? Date.now;
  const calcom = createCalcomClient(config);

  function resolveEventTypeId(request: Request): number {
    const kind = new URL(request.url).searchParams.get("kind");
    const id = Number(kind === "callback" ? config.callbackEventTypeId : config.eventTypeId);
    if (!config.calcomApiKey || !Number.isInteger(id) || id <= 0) {
      throw new BookingFailure(500, "calendar_not_configured");
    }
    return id;
  }

  async function authorizedArgs(request: Request): Promise<RetellArgs> {
    if (!config.functionSecret) throw new BookingFailure(500, "function_secret_not_configured");
    verifyFunctionSecret(request, config.functionSecret);
    return parseRetellArgs(await readRawBody(request));
  }

  /** All open slot starts (ISO) for one shop-local date, past times removed. */
  async function slotsForDate(date: string, eventId: number): Promise<string[]> {
    const startUtc = new Date(zonedMidnightUtc(date, timeZone)).toISOString();
    const endUtc = new Date(zonedMidnightUtc(addDays(date, 1), timeZone)).toISOString();
    const starts = await calcom.getSlotStarts(eventId, startUtc, endUtc, timeZone);
    const cutoff = now();
    return starts.filter((start) => Date.parse(start) > cutoff);
  }

  function offer(starts: string[], limit: number) {
    return starts.slice(0, limit).map((start) => ({ start, spoken: spokenTime(start, timeZone) }));
  }

  async function checkAvailability(request: Request) {
    const { args } = await authorizedArgs(request);
    const eventId = resolveEventTypeId(request);
    const date = parseDateArg(args.date);
    const today = localDateString(now(), timeZone);
    if (date < today) {
      return { ok: false, reason: "date_in_past", date, message: "That date has already passed." };
    }
    if (date > addDays(today, bookingWindowDays)) {
      return {
        ok: false,
        reason: "outside_booking_window",
        date,
        message: `Bookings open ${bookingWindowDays} days ahead. Offer a sooner date.`,
      };
    }
    let starts: string[];
    try {
      starts = await slotsForDate(date, eventId);
    } catch {
      return { ok: false, reason: "calendar_unavailable", date, message: "The calendar could not be reached." };
    }
    if (starts.length === 0) {
      // No openings that day (fully booked or outside shop hours — the Cal.com
      // schedule encodes both). Probe the next few days so the agent can offer
      // the nearest real alternative instead of guessing.
      let nextOpenings: { date: string; slots: ReturnType<typeof offer> } | null = null;
      for (let offset = 1; offset <= 3; offset += 1) {
        const probeDate = addDays(date, offset);
        try {
          const probe = await slotsForDate(probeDate, eventId);
          if (probe.length > 0) {
            nextOpenings = { date: probeDate, slots: offer(probe, 3) };
            break;
          }
        } catch {
          break;
        }
      }
      return {
        ok: false,
        reason: "no_availability",
        date,
        message: `No open slots on ${spokenTime(`${date}T12:00:00Z`, timeZone).replace(/ at .*$/, "")}.`,
        next_openings: nextOpenings,
      };
    }
    return {
      ok: true,
      date,
      timezone: timeZone,
      slots: offer(starts, maxSlots),
      more_slots_available: starts.length > maxSlots,
    };
  }

  async function bookAppointment(request: Request) {
    const { args, callId } = await authorizedArgs(request);
    const eventId = resolveEventTypeId(request);
    const slotStartRaw = requiredString(args.slot_start, 40, "missing_slot_start");
    const slotMs = Date.parse(slotStartRaw);
    if (Number.isNaN(slotMs)) throw new BookingFailure(400, "invalid_slot_start");
    const callerName = requiredString(args.caller_name, 80, "missing_caller_name");
    const callbackPhone = normalizePhone(args.callback_phone);
    const service = requiredString(args.service, 120, "missing_service");
    const vehicle = cleanString(args.vehicle, 80);
    const callerEmail = cleanString(args.caller_email, 120);
    if (callerEmail && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(callerEmail)) {
      throw new BookingFailure(400, "invalid_caller_email");
    }
    const notes = cleanString(args.notes, 300);

    const slotDate = localDateString(slotMs, timeZone);
    let dayStarts: string[];
    try {
      dayStarts = await slotsForDate(slotDate, eventId);
    } catch {
      return { ok: false, reason: "calendar_unavailable", message: "The calendar could not be reached." };
    }
    // The agent may only book a slot the calendar actually returned. A start
    // time that is not in today's live list is stale, taken, or invented —
    // never book it. Offer the nearest real alternatives instead.
    if (!dayStarts.some((start) => Date.parse(start) === slotMs)) {
      const nearest = [...dayStarts]
        .sort((a, b) => Math.abs(Date.parse(a) - slotMs) - Math.abs(Date.parse(b) - slotMs))
        .slice(0, 3);
      return {
        ok: false,
        reason: "slot_no_longer_available",
        message: "That exact time is not open anymore.",
        alternatives: offer(nearest, 3),
      };
    }

    const bookingFieldsResponses: Record<string, string> = { service };
    if (vehicle) bookingFieldsResponses.vehicle = vehicle;
    if (notes) bookingFieldsResponses.notes = notes;

    let booking: { uid: string; start: string; end: string; status: string };
    try {
      booking = await calcom.createBooking({
        eventTypeId: eventId,
        start: new Date(slotMs).toISOString(),
        attendee: {
          name: callerName,
          timeZone,
          phoneNumber: callbackPhone,
          ...(callerEmail ? { email: callerEmail } : {}),
        },
        bookingFieldsResponses,
        metadata: {
          source: "firstring-retell",
          ...(callId ? { call_id: callId } : {}),
        },
      });
    } catch (error) {
      const detail = (error as { providerDetail?: string })?.providerDetail ?? "";
      if (/slot|conflict|already|not available|no longer/i.test(detail)) {
        return {
          ok: false,
          reason: "slot_no_longer_available",
          message: "That time was just taken.",
          alternatives: offer(dayStarts.filter((s) => Date.parse(s) !== slotMs), 3),
        };
      }
      return { ok: false, reason: "calendar_unavailable", message: "The booking could not be completed." };
    }

    return {
      ok: true,
      booking_uid: booking.uid,
      // "accepted" = confirmed on the calendar. Anything else (e.g. "pending")
      // means the shop still has to confirm — the prompt forbids the agent
      // from calling it booked in that case.
      booking_status: booking.status,
      start: booking.start,
      spoken_confirmation: spokenTime(booking.start, timeZone),
      service,
    };
  }

  return { checkAvailability, bookAppointment };
}
