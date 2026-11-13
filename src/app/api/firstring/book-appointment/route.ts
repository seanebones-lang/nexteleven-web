import { BookingFailure, createBookingService } from "@/lib/firstring-booking";

export const runtime = "nodejs";
export const maxDuration = 30;

/**
 * Retell custom function endpoint: book_appointment.
 * Called mid-call by the FirstRing demo agent after the caller picks a slot
 * that check_availability returned. The endpoint re-verifies the slot against
 * the live calendar before booking, so a stale or invented time can never be
 * booked. Auth: shared secret in the `x-firstring-secret` header.
 * Retell-side tool must keep max_retry at 0: booking is not idempotent.
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
    const body = await booking.bookAppointment(request);
    return Response.json(body, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    const failure = error instanceof BookingFailure ? error : new BookingFailure(502, "booking_unavailable");
    return Response.json(
      { ok: false, error: failure.message },
      { status: failure.status, headers: { "Cache-Control": "no-store" } },
    );
  }
}
