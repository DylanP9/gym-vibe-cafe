import { ActionLink } from "@/components/ActionLink";
import { Footer } from "@/components/Footer";
import { FullMenuTextReference } from "@/components/FullMenuTextReference";
import { Header } from "@/components/Header";
import { MenuBrowser } from "@/components/MenuBrowser";
import { PageIntro } from "@/components/PageIntro";
import { StickyMobileActionBar } from "@/components/StickyMobileActionBar";
import { businessInfo } from "@/data/businessInfo";
import { buildPageMetadata } from "@/data/siteConfig";

export const metadata = buildPageMetadata({
  title: "Gym Vibe Cafe Menu | Breakfast, High-Protein Meals & Smoothies",
  description:
    "Browse the Gym Vibe Cafe in-store menu in Kinning Park, Glasgow, including breakfast, high-protein mains, smoothies, coffee and desserts. Online checkout is not live yet.",
  path: "/menu",
});

export default function MenuPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageIntro
          current="Menu"
          eyebrow="Gym Vibe Cafe menu"
          title="Breakfast, mains and smoothies"
          actions={
            <>
              <ActionLink href={businessInfo.phone.href}>Call now</ActionLink>
              <ActionLink href={businessInfo.maps.directionsUrl} target="_blank" rel="noopener noreferrer" variant="secondary">
                Directions
              </ActionLink>
              <ActionLink href={businessInfo.instagram.url} target="_blank" rel="noopener noreferrer" variant="secondary">
                Instagram
              </ActionLink>
            </>
          }
        >
          Select a category to browse cafe favourites, high-protein meals,
          smoothies, coffee and desserts with clear in-store menu-board prices.
          Online checkout is being prepared and is not live yet.
        </PageIntro>
        <MenuBrowser />
        <FullMenuTextReference />
      </main>
      <Footer />
      <StickyMobileActionBar />
    </>
  );
}
