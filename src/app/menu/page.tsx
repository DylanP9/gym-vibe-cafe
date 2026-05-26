import { ActionLink } from "@/components/ActionLink";
import { Footer } from "@/components/Footer";
import { FullMenuSection } from "@/components/FullMenuSection";
import { Header } from "@/components/Header";
import { PageIntro } from "@/components/PageIntro";
import { PopularPicksSection } from "@/components/PopularPicksSection";
import { StickyMobileActionBar } from "@/components/StickyMobileActionBar";
import { businessInfo } from "@/data/businessInfo";
import { buildPageMetadata } from "@/data/siteConfig";

export const metadata = buildPageMetadata({
  title: "Menu | Breakfast, Meals & Smoothies",
  description:
    "Browse the Gym Vibe Café menu in Kinning Park, Glasgow, including breakfast favourites, nutritional mains and fresh frozen fruit smoothies.",
  path: "/menu",
});

export default function MenuPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageIntro
          current="Menu"
          eyebrow="Gym Vibe Café menu"
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
          Browse a readable menu for café favourites and fuel-focused choices.
          Prices and availability may vary.
        </PageIntro>
        <PopularPicksSection showMenuLink={false} />
        <FullMenuSection full />
      </main>
      <Footer />
      <StickyMobileActionBar />
    </>
  );
}
