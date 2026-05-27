import type { Metadata } from "next";

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export const siteConfig = {
  name: "Gym Vibe Café",
  defaultTitle: "Gym Vibe Café Glasgow | High-Protein Meals, Breakfast & Smoothies",
  description:
    "Visit Gym Vibe Café in Kinning Park, Glasgow for Scottish café favourites, high-protein meals, smoothies and coffee. View the menu, hours and directions.",
  url: configuredUrl || undefined,
  googleSiteVerification:
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  googleReviewsUrl: process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL || undefined,
  navigation: [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Location", href: "/location" },
    { label: "Meal Prep", href: "/meal-prep" },
    { label: "FAQ", href: "/#faq" },
  ],
} as const;

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
}

export function buildPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: siteConfig.url ? { canonical: path } : undefined,
    openGraph: {
      title,
      description,
      siteName: siteConfig.name,
      locale: "en_GB",
      type: "website",
      url: siteConfig.url ? path : undefined,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}
