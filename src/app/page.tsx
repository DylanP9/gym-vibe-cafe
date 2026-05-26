import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FullMenuSection } from "@/components/FullMenuSection";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { HighProteinSection } from "@/components/HighProteinSection";
import { InstagramSection } from "@/components/InstagramSection";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";
import { LocationSection } from "@/components/LocationSection";
import { OpeningHoursSection } from "@/components/OpeningHoursSection";
import { PopularPicksSection } from "@/components/PopularPicksSection";
import { QuickInfoStrip } from "@/components/QuickInfoStrip";
import { SmoothiesSection } from "@/components/SmoothiesSection";
import { StickyMobileActionBar } from "@/components/StickyMobileActionBar";
import { TrustSection } from "@/components/TrustSection";

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <Header />
      <main>
        <HeroSection />
        <QuickInfoStrip />
        <PopularPicksSection />
        <AboutSection />
        <FullMenuSection />
        <HighProteinSection />
        <SmoothiesSection />
        <TrustSection />
        <OpeningHoursSection />
        <LocationSection />
        <InstagramSection />
        <ContactSection />
      </main>
      <Footer />
      <StickyMobileActionBar />
    </>
  );
}
