import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MealPrepSection } from "@/components/MealPrepSection";
import { PageIntro } from "@/components/PageIntro";
import { StickyMobileActionBar } from "@/components/StickyMobileActionBar";
import { buildPageMetadata } from "@/data/siteConfig";

export const metadata = buildPageMetadata({
  title: "Meal Prep Information",
  description:
    "See meal-prep information for Gym Vibe Café in Kinning Park. Ask in café for current availability, options, prices and collection details.",
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
