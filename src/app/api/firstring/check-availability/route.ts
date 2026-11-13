import { BookingFailure, createBookingService } from "@/lib/firstring-booking";

export const runtime = "nodejs";
export const maxDuration = 30;

/**
 * Retell custom function endpoint: check_availability.
 * Called mid-call by the FirstRing demo agent (Retell POSTs { name, call, args }).
 * Auth: shared secret in the `x-firstring-secret` header, configured as a static
 * header on the Retell tool. Business failures (no slots, past date, calendar
 * down) return HTTP 200 with { ok: false, reason } so the agent can act on them;
 * only auth/malformed/config failures use HTTP error statuses.
 */
const booking = createBookingService({
  functionSecret: process.env.FIRSTRING_FUNCTION_SECRET,
  calcomApiKey: process.env.CALCOM_API_KEY,
  eventTypeId: process.env.FIRSTRING_CALCOM_EVENT_TYPE_ID,
  callbackEventTypeId: process.env.FIRSTRING_CALCOM_CALLBACK_EVENT_TYPE_ID,
  timeZone: process.env.FIRSTRING_SHOP_TIMEZONE,
});

export async function POST(request: Request) {
  try {
    const body = await booking.checkAvailability(request);
    return Response.json(body, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    const failure = error instanceof BookingFailure ? error : new BookingFailure(502, "booking_unavailable");
    return Response.json(
      { ok: false, error: failure.message },
      { status: failure.status, headers: { "Cache-Control": "no-store" } },
    );
  }
}
