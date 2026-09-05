import type { MetadataRoute } from "next";
export default function robots():MetadataRoute.Robots { return { rules:{userAgent:"*",allow:"/"}, sitemap:"https://mothership-ai.com/sitemap.xml", host:"https://mothership-ai.com" }; }
