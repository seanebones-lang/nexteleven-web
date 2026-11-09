import type { MetadataRoute } from "next";
import { portfolio } from "@/lib/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/work", "/build", "/presence", "/security", "/security/pricing", "/deadbolt", "/diagnosis", "/apps", "/frontdesk", "/referredbyai", "/answers", "/case-studies/jp-transmission"];
  return [
    ...routes.map((route) => ({
      url: `https://www.nexteleven.dev${route}`,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...portfolio.map((product) => ({
      url: `https://www.nexteleven.dev/work/${product.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...portfolio.map((product) => ({
      url: `https://www.nexteleven.dev/explainers/${product.slug}.html`,
      changeFrequency: "monthly" as const,
      priority: 0.4,
    })),
    ...["index.html", "support.html", "privacy.html"].map((page) => ({
      url: `https://www.nexteleven.dev/elevenclean/${page}`,
      changeFrequency: "monthly" as const,
      priority: page === "index.html" ? 0.7 : 0.3,
    })),
  ];
}
