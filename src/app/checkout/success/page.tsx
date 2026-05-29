import { ActionLink } from "@/components/ActionLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageIntro } from "@/components/PageIntro";
import { StickyMobileActionBar } from "@/components/StickyMobileActionBar";
import { businessInfo } from "@/data/businessInfo";
import { buildPageMetadata } from "@/data/siteConfig";

export const metadata = buildPageMetadata({
  title: "Checkout Status | Gym Vibe Cafe",
  description:
    "Square checkout for Gym Vibe Cafe is being prepared and is not live yet. Contact the cafe for current order questions.",
  path: "/checkout/success",
});

export default function CheckoutSuccessPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageIntro
          current="Checkout"
          eyebrow="Square checkout"
          title="Checkout is being prepared"
          actions={
            <>
              <ActionLink href={businessInfo.phone.href}>Call now</ActionLink>
              <ActionLink href="/menu" variant="secondary">
                Back to menu
              </ActionLink>
            </>
          }
        >
          Online checkout is not live yet. Please call the cafe or ask in store
          while Square checkout is being finalised and tested.
        </PageIntro>
      </main>
      <Footer />
      <StickyMobileActionBar />
    </>
  );
}
