import { FAQSection } from "@/components/FAQSection";
import { FindUsPanel } from "@/components/FindUsPanel";
import { Footer } from "@/components/Footer";
import { GalleryPlaceholderSection } from "@/components/GalleryPlaceholderSection";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { HomepageMenuPreview } from "@/components/HomepageMenuPreview";
import { InstagramCTA } from "@/components/InstagramCTA";
import { MealPrepSection } from "@/components/MealPrepSection";
import { MenuBoardReferencePanel } from "@/components/MenuBoardReferencePanel";
import { QuickInfoStrip } from "@/components/QuickInfoStrip";
import { StickyMobileActionBar } from "@/components/StickyMobileActionBar";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <QuickInfoStrip />
        <HomepageMenuPreview />
        <MenuBoardReferencePanel />
        <MealPrepSection />
        <FindUsPanel />
        <GalleryPlaceholderSection />
        <FAQSection />
        <InstagramCTA />
      </main>
      <Footer />
      <StickyMobileActionBar />
    </>
  );
}
