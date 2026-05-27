import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";
import { SkipLink } from "@/components/SkipLink";
import { siteAssets } from "@/data/siteAssets";
import { siteConfig } from "@/data/siteConfig";
import "@/app/globals.css";

export const metadata: Metadata = {
  metadataBase: siteConfig.url ? new URL(siteConfig.url) : undefined,
  title: {
    default: siteConfig.defaultTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: siteConfig.url ? { canonical: "/" } : undefined,
  icons: {
    icon: [{ url: siteAssets.logo.src, type: "image/jpeg" }],
  },
  openGraph: {
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
    url: siteConfig.url,
  },
  twitter: {
    card: "summary",
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
  },
  verification: siteConfig.googleSiteVerification
    ? { google: siteConfig.googleSiteVerification }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: "#090b0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>
        <SkipLink />
        <LocalBusinessSchema />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
