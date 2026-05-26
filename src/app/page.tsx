import { FAQSection } from "@/components/FAQSection";
import { FindUsPanel } from "@/components/FindUsPanel";
import { Footer } from "@/components/Footer";
import { FullMenuSection } from "@/components/FullMenuSection";
import { GalleryPlaceholderSection } from "@/components/GalleryPlaceholderSection";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { InstagramCTA } from "@/components/InstagramCTA";
import { MealPrepSection } from "@/components/MealPrepSection";
import { MenuBoardReferencePanel } from "@/components/MenuBoardReferencePanel";
import { PopularPicksSection } from "@/components/PopularPicksSection";
import { QuickInfoStrip } from "@/components/QuickInfoStrip";
import { StickyMobileActionBar } from "@/components/StickyMobileActionBar";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <QuickInfoStrip />
        <PopularPicksSection />
        <MenuBoardReferencePanel />
        <FullMenuSection />
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
