import { createStudyService, StudyFailure } from "@/lib/mihrab-study";
export const runtime = "nodejs";
export const maxDuration = 30;
const study = createStudyService({ clientId: process.env.MIHRAB_QF_CLIENT_ID, clientSecret: process.env.MIHRAB_QF_CLIENT_SECRET });
export async function GET(request: Request) {
  try {
    const params = new URL(request.url).searchParams;
    const body = await study(params);
    return new Response(body, { headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": params.get("kind") === "offline-policy" ? "no-store" : "public, max-age=3600, s-maxage=86400", "X-Mihrab-Source": "Quran Foundation / Quran.com" } });
  } catch (error) {
    const failure = error instanceof StudyFailure ? error : new StudyFailure(502, "study_unavailable");
    return Response.json({ error: failure.message }, { status: failure.status, headers: { "Cache-Control": "no-store", ...(failure.status === 429 ? { "Retry-After": "60" } : {}) } });
  }
}
