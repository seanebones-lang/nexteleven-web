import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/work", "/build", "/presence", "/security", "/security/pricing", "/deadbolt", "/diagnosis", "/apps", "/apps/apple", "/apps/android"];
  return [
    ...routes.map((route) => ({
      url: `https://www.nexteleven.dev${route}`,
      lastModified: new Date(route.startsWith("/security") || route === "/build" ? "2026-10-23" : route.startsWith("/apps") ? "2026-10-20" : "2026-10-12"),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...["index.html", "support.html", "privacy.html"].map((page) => ({
      url: `https://www.nexteleven.dev/elevenclean/${page}`,
      lastModified: new Date("2026-10-17"),
      changeFrequency: "monthly" as const,
      priority: page === "index.html" ? 0.7 : 0.3,
    })),
  ];
}
