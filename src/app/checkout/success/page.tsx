import { ActionLink } from "@/components/ActionLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageIntro } from "@/components/PageIntro";
import { StickyMobileActionBar } from "@/components/StickyMobileActionBar";
import { businessInfo } from "@/data/businessInfo";
import { buildPageMetadata } from "@/data/siteConfig";

export const metadata = buildPageMetadata({
  title: "Order Received | Gym Vibe Cafe",
  description:
    "Your Square checkout has been completed. Contact Gym Vibe Cafe if you need help with your order.",
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
          title="Thanks, your checkout is complete"
          actions={
            <>
              <ActionLink href={businessInfo.phone.href}>Call now</ActionLink>
              <ActionLink href="/menu" variant="secondary">
                Back to menu
              </ActionLink>
            </>
          }
        >
          Square has handled the payment step. If you need to change anything or
          check collection details, please contact the cafe directly.
        </PageIntro>
      </main>
      <Footer />
      <StickyMobileActionBar />
    </>
  );
}
