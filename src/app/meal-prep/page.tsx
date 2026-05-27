import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MealPrepSection } from "@/components/MealPrepSection";
import { PageIntro } from "@/components/PageIntro";
import { StickyMobileActionBar } from "@/components/StickyMobileActionBar";
import { buildPageMetadata } from "@/data/siteConfig";

export const metadata = buildPageMetadata({
  title: "Gym Vibe Café Meal Prep | Ask In Café for Availability",
  description:
    "Ask about Gym Vibe Café meal prep in Kinning Park, Glasgow. Current options, prices and availability should be confirmed directly in café.",
  path: "/meal-prep",
});

export default function MealPrepPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageIntro
          current="Meal Prep"
          eyebrow="Information only"
          title="Meal-prep availability"
        >
          Ask in café for current meal-prep availability. Options, prices and
          collection details should be confirmed directly with the café.
        </PageIntro>
        <MealPrepSection detailed />
      </main>
      <Footer />
      <StickyMobileActionBar />
    </>
  );
}
