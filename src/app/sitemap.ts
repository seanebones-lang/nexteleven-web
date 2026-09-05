import type { MetadataRoute } from "next";
export default function sitemap():MetadataRoute.Sitemap { const routes=["","/about","/work","/build","/presence"]; return routes.map(route=>({url:`https://mothership-ai.com${route}`,lastModified:new Date("2026-09-05"),changeFrequency:route===""?"monthly":"yearly",priority:route===""?1:.8})); }
