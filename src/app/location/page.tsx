import { ActionLink } from "@/components/ActionLink";
import { FindUsPanel } from "@/components/FindUsPanel";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { OpeningHoursSection } from "@/components/OpeningHoursSection";
import { PageIntro } from "@/components/PageIntro";
import { StickyMobileActionBar } from "@/components/StickyMobileActionBar";
import { businessInfo } from "@/data/businessInfo";
import { buildPageMetadata } from "@/data/siteConfig";

export const metadata = buildPageMetadata({
  title: "Find Gym Vibe Cafe | Kinning Park, Glasgow",
  description:
    "Find Gym Vibe Cafe at 89 Middlesex St, Kinning Park, Glasgow G41 1EE. Check opening hours, call the cafe or open directions.",
  path: "/location",
});

export default function LocationPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageIntro
          current="Location"
          eyebrow="Glasgow Southside"
          title="Find Gym Vibe Cafe"
          actions={
            <>
              <ActionLink href={businessInfo.maps.directionsUrl} target="_blank" rel="noopener noreferrer">
                Get directions
              </ActionLink>
              <ActionLink href={businessInfo.phone.href} variant="secondary">
                Call now
              </ActionLink>
              <ActionLink href={businessInfo.instagram.url} target="_blank" rel="noopener noreferrer" variant="secondary">
                Instagram
              </ActionLink>
            </>
          }
        >
          Visit us in Kinning Park for breakfast, lunch, coffee, smoothies or
          high-protein menu choices nearby.
        </PageIntro>
        <FindUsPanel showLocationLink={false} />
        <OpeningHoursSection />
      </main>
      <Footer />
      <StickyMobileActionBar />
    </>
  );
}
