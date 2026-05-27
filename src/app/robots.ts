import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";

export default function robots(): MetadataRoute.Robots {
  const sitemapUrl = siteConfig.url
    ? new URL("/sitemap.xml", siteConfig.url).toString()
    : undefined;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: sitemapUrl,
  };
}
