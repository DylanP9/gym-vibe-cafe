import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MealPrepSection } from "@/components/MealPrepSection";
import { PageIntro } from "@/components/PageIntro";
import { StickyMobileActionBar } from "@/components/StickyMobileActionBar";
import { buildPageMetadata } from "@/data/siteConfig";

export const metadata = buildPageMetadata({
  title: "Gym Vibe Cafe Meal Prep | Ask In Cafe for Availability",
  description:
    "Ask about Gym Vibe Cafe meal prep in Kinning Park, Glasgow. Current options, prices and availability should be confirmed directly in cafe.",
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
          Ask in cafe for current meal-prep availability. Options, prices and
          availability may change. Please check with the cafe directly.
        </PageIntro>
        <MealPrepSection detailed />
      </main>
      <Footer />
      <StickyMobileActionBar />
    </>
  );
}
