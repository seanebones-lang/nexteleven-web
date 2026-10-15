/** Public Quran content only. Credentials and provider tokens never leave this server. */
export class StudyFailure extends Error {
  status: number;
  constructor(status: number, message: string) { super(message); this.status = status; }
}
type Fetcher = typeof fetch;
type Query = { key: string; path: string; field: "verses" | "tafsirs" };
const languages = new Set(["en", "ur", "id", "tr", "bn"]);
const editions = new Set(["169", "14", "160", "164"]);
export function studyQuery(params: URLSearchParams): Query {
  if ([...params.keys()].some(k => !["kind", "surah", "lang", "edition"].includes(k)) ||
      [...params.keys()].some(k => params.getAll(k).length !== 1)) throw new StudyFailure(400, "invalid_query");
  const surah = params.get("surah") ?? "";
  if (!/^[1-9]\d{0,2}$/.test(surah) || Number(surah) > 114) throw new StudyFailure(400, "invalid_surah");
  if (params.get("kind") === "words") {
    const lang = params.get("lang") ?? "en";
    if (!languages.has(lang) || params.has("edition")) throw new StudyFailure(400, "invalid_language");
    return { key: `words:${lang}:${surah}`, field: "verses",
      path: `/verses/by_chapter/${surah}?words=true&language=${lang}&per_page=300&word_fields=position` };
  }
  if (params.get("kind") === "tafsir") {
    const edition = params.get("edition") ?? "169";
    if (!editions.has(edition) || params.has("lang")) throw new StudyFailure(400, "invalid_edition");
    return { key: `tafsir:${edition}:${surah}`, field: "tafsirs", path: `/tafsirs/${edition}/by_chapter/${surah}?per_page=300` };
  }
  throw new StudyFailure(400, "invalid_kind");
}
async function boundedJson(response: Response, limit: number): Promise<Record<string, unknown>> {
  const reader = response.body?.getReader();
  if (!reader) throw new StudyFailure(502, "invalid_provider_response");
  const chunks: Uint8Array[] = []; let size = 0;
  try {
    while (true) {
      const part = await reader.read(); if (part.done) break;
      size += part.value.byteLength;
      if (size > limit) { await reader.cancel(); throw new StudyFailure(502, "provider_response_too_large"); }
      chunks.push(part.value);
    }
    const bytes = new Uint8Array(size); let at = 0;
    for (const chunk of chunks) { bytes.set(chunk, at); at += chunk.byteLength; }
    const value = JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(bytes));
    if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error();
    return value;
  } catch (error) {
    if (error instanceof StudyFailure) throw error;
    throw new StudyFailure(502, "invalid_provider_response");
  } finally { reader.releaseLock(); }
}
export function createStudyService(config: { clientId?: string; clientSecret?: string; fetcher?: Fetcher; now?: () => number }) {
  const request = config.fetcher ?? fetch, now = config.now ?? Date.now;
  let token: { value: string; until: number } | undefined;
  let tokenWork: Promise<string> | undefined;
  const cache = new Map<string, { body: string; until: number }>();
  let cacheBytes = 0, active = 0, minute = -1, calls = 0;
  const inFlight = new Map<string, Promise<string>>();
  async function accessToken(): Promise<string> {
    if (token && token.until > now()) return token.value;
    if (tokenWork) return tokenWork;
    tokenWork = (async () => {
      const response = await request("https://oauth2.quran.foundation/oauth2/token", {
        method: "POST", redirect: "error", cache: "no-store", signal: AbortSignal.timeout(12000),
        headers: { Authorization: `Basic ${Buffer.from(`${config.clientId}:${config.clientSecret}`).toString("base64")}`, "Content-Type": "application/x-www-form-urlencoded" },
        body: "grant_type=client_credentials&scope=content",
      });
      if (!response.ok) throw new StudyFailure(502, "provider_auth_unavailable");
      const value = await boundedJson(response, 65536);
      if (typeof value.access_token !== "string" || !value.access_token || value.access_token.length > 32768 ||
          typeof value.expires_in !== "number" || value.expires_in < 1 || value.expires_in > 86400) throw new StudyFailure(502, "invalid_provider_response");
      token = { value: value.access_token, until: now() + Math.max(0, value.expires_in - 30) * 1000 };
      return token.value;
    })();
    try { return await tokenWork; } finally { tokenWork = undefined; }
  }
  async function load(query: Query): Promise<string> {
    try {
      for (let attempt = 0; attempt < 2; attempt++) {
        const auth = await accessToken();
        const response = await request(`https://apis.quran.foundation/content/api/v4${query.path}`, {
          redirect: "error", cache: "no-store", signal: AbortSignal.timeout(12000),
          headers: { "x-auth-token": auth, "x-client-id": config.clientId! },
        });
        if (response.status === 401 && attempt === 0) { token = undefined; await response.body?.cancel(); continue; }
        if (!response.ok) { await response.body?.cancel(); throw new StudyFailure(502, "provider_content_unavailable"); }
        const data = await boundedJson(response, 8 * 1024 * 1024);
        if (!Array.isArray(data[query.field]) || !(data[query.field] as unknown[]).length) throw new StudyFailure(502, "invalid_provider_response");
        const pagination = data.pagination as Record<string, unknown> | undefined;
        if (pagination?.next_page) throw new StudyFailure(502, "incomplete_provider_response");
        // Return only the expected content array. Never forward tokens/headers.
        return JSON.stringify({ [query.field]: data[query.field] });
      }
      throw new StudyFailure(502, "provider_content_unavailable");
    } catch (error) {
      if (error instanceof StudyFailure) throw error;
      throw new StudyFailure(502, "study_unavailable");
    }
  }
  return async (params: URLSearchParams): Promise<string> => {
    const query = studyQuery(params);
    if (!config.clientId || !config.clientSecret) throw new StudyFailure(503, "study_not_configured");
    const cached = cache.get(query.key);
    if (cached && cached.until > now()) return cached.body;
    if (cached) { cacheBytes -= Buffer.byteLength(cached.body); cache.delete(query.key); }
    const pending = inFlight.get(query.key); if (pending) return pending;
    const period = Math.floor(now() / 60000);
    if (period !== minute) { minute = period; calls = 0; }
    if (active >= 4 || calls >= 60) throw new StudyFailure(429, "study_busy");
    active++; calls++;
    const work = load(query); inFlight.set(query.key, work);
    try {
      const body = await work, size = Buffer.byteLength(body);
      while (cache.size >= 48 || cacheBytes + size > 24 * 1024 * 1024) {
        const key = cache.keys().next().value; if (key === undefined) break;
        cacheBytes -= Buffer.byteLength(cache.get(key)!.body); cache.delete(key);
      }
      cache.set(query.key, { body, until: now() + 86400000 }); cacheBytes += size;
      return body;
    } finally { active--; inFlight.delete(query.key); }
  };
}
