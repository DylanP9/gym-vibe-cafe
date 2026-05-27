import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageIntro } from "@/components/PageIntro";
import { StickyMobileActionBar } from "@/components/StickyMobileActionBar";
import { businessInfo } from "@/data/businessInfo";
import { buildPageMetadata } from "@/data/siteConfig";

export const metadata = buildPageMetadata({
  title: "Privacy Notice | Gym Vibe Café",
  description:
    "Read the Gym Vibe Café website privacy notice, including how anonymous Vercel Web Analytics page-view information is used.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageIntro
          current="Privacy"
          eyebrow="Website information"
          title="Privacy notice"
        >
          This notice explains the limited information used when you browse the
          Gym Vibe Café website.
        </PageIntro>

        <section className="section-shell pt-0" aria-labelledby="privacy-details-title">
          <div className="content-shell">
            <div className="max-w-3xl rounded-[1.75rem] border border-white/10 bg-[#111413] p-6 shadow-2xl shadow-black/20 sm:p-8">
              <h2
                id="privacy-details-title"
                className="text-2xl font-black uppercase tracking-[-0.03em] text-[#faf6ee] sm:text-3xl"
              >
                Website privacy information
              </h2>
              <div className="mt-6 space-y-7 text-sm leading-7 text-[#cfc7bb] sm:text-base">
                <div>
                  <h3 className="text-lg font-bold text-white">Who this website is for</h3>
                  <p className="mt-2">
                    This website provides information about {businessInfo.name},
                    including its menu, location, opening hours and contact
                    details. It does not take payments, online orders, bookings
                    or customer account registrations.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">Anonymous website analytics</h3>
                  <p className="mt-2">
                    This website uses Vercel Web Analytics to understand general
                    website usage, such as visits and page views. Vercel states
                    that this analytics service does not use cookies by default
                    and uses anonymised data for reporting.
                  </p>
                  <p className="mt-2">
                    This helps the café understand which website pages are useful
                    to visitors. The website does not currently use custom
                    advertising tracking or personalised marketing tracking.
                  </p>
                  <a
                    className="mt-3 inline-block font-semibold text-white underline decoration-[#d43d40] underline-offset-4 hover:text-[#e25758]"
                    href="https://vercel.com/docs/analytics/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Vercel&apos;s Web Analytics privacy information
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">External services</h3>
                  <p className="mt-2">
                    If you use links on this website to call the café, open Google
                    Maps directions or visit Instagram, those services operate
                    under their own privacy terms.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">Privacy questions</h3>
                  <p className="mt-2">
                    For questions about this website, contact {businessInfo.name}{" "}
                    by telephone on{" "}
                    <a
                      className="font-semibold text-white underline decoration-[#d43d40] underline-offset-4 hover:text-[#e25758]"
                      href={businessInfo.phone.href}
                    >
                      {businessInfo.phone.display}
                    </a>
                    .
                  </p>
                </div>

                <p className="border-t border-white/10 pt-5 text-xs text-[#928a7e]">
                  Last updated: 27 May 2026.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileActionBar />
    </>
  );
}
