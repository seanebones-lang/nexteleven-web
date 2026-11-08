import type { MetadataRoute } from "next";
import { portfolio } from "@/lib/portfolio";

const UPDATED = new Date("2026-11-08");

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/work", "/build", "/presence", "/security", "/security/pricing", "/deadbolt", "/diagnosis", "/apps", "/frontdesk", "/referredbyai"];
  return [
    ...routes.map((route) => ({
      url: `https://www.nexteleven.dev${route}`,
      lastModified: UPDATED,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...portfolio.map((product) => ({
      url: `https://www.nexteleven.dev/work/${product.slug}`,
      lastModified: UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...portfolio.map((product) => ({
      url: `https://www.nexteleven.dev/explainers/${product.slug}.html`,
      lastModified: UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.4,
    })),
    ...["index.html", "support.html", "privacy.html"].map((page) => ({
      url: `https://www.nexteleven.dev/elevenclean/${page}`,
      lastModified: UPDATED,
      changeFrequency: "monthly" as const,
      priority: page === "index.html" ? 0.7 : 0.3,
    })),
  ];
}
