import type { MetadataRoute } from "next";
export default function sitemap():MetadataRoute.Sitemap { const routes=["","/about","/work","/build","/presence","/deadbolt"]; return routes.map(route=>({url:`https://www.nexteleven.dev${route}`,lastModified:new Date("2026-10-09"),changeFrequency:"monthly",priority:route===""?1:.8})); }
