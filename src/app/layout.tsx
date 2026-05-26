import type { Metadata, Viewport } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Gym Vibe Café Glasgow | High-Protein Meals, Breakfast & Smoothies",
  description:
    "Gym Vibe Café in Kinning Park, Glasgow serves classic Scottish breakfasts, high-protein meals, smoothies, coffee, brunch and meal prep pickups.",
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
      <body>{children}</body>
    </html>
  );
}
