import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";

const staticRoutes = ["/", "/menu", "/location", "/meal-prep", "/privacy"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.url) {
    return [];
  }

  return staticRoutes.map((route) => ({
    url: new URL(route, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/menu" ? 0.9 : 0.7,
  }));
}
