import Image from "next/image";
import { ActionLink } from "@/components/ActionLink";
import { businessInfo } from "@/data/businessInfo";
import { siteAssets } from "@/data/siteAssets";
import { siteConfig } from "@/data/siteConfig";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_26%,rgba(164,36,37,0.36),transparent_37%),linear-gradient(130deg,rgba(255,255,255,0.045),transparent_45%)]" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1fr_390px] lg:items-center lg:py-24">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.34em] text-[#d95555]">
            Cafe in Kinning Park, Glasgow
          </p>
          <h1 className="max-w-3xl text-[2.8rem] font-black uppercase leading-[0.98] tracking-[-0.055em] text-[#faf6ee] min-[390px]:text-5xl sm:text-7xl">
            Real food. Good energy. Fuel your vibe.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#d8d0c4] sm:text-xl">
            Classic Scottish cafe favourites, high-protein meals, smoothies and
            coffee in Kinning Park, Glasgow.
          </p>
          <div className="mt-9 flex flex-col gap-3 min-[390px]:flex-row min-[390px]:flex-wrap">
            <ActionLink
              href={siteConfig.justEatOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Order now
            </ActionLink>
            <ActionLink href="/menu" variant="secondary">View menu</ActionLink>
            <ActionLink
              href={businessInfo.maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              Get directions
            </ActionLink>
            <ActionLink href={businessInfo.phone.href} variant="secondary">
              Call now
            </ActionLink>
          </div>
          <ActionLink
            href={businessInfo.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            variant="quiet"
            className="mt-4 px-0"
          >
            Follow {businessInfo.instagram.handle}
          </ActionLink>
          <div className="mt-8 grid max-w-2xl gap-3 text-sm text-[#d8d0c4] sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d95555]">Visit</p>
              <p className="mt-2 font-semibold text-white">Kinning Park, Glasgow</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d95555]">Food</p>
              <p className="mt-2 font-semibold text-white">Breakfast & lunch until 3pm</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d95555]">Online</p>
              <p className="mt-2 font-semibold text-white">Order through Just Eat</p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#101211]/90 p-5 shadow-2xl shadow-black/35 sm:p-7">
          <div className="absolute inset-x-0 top-0 h-1 bg-[#a42425]" />
          <div className="flex items-center gap-5 border-b border-white/10 pb-6">
            <div className="shrink-0 rounded-2xl border border-[#a42425]/35 bg-[#070908] p-2 shadow-[0_16px_35px_-24px_rgba(164,36,37,0.75)]">
              <Image
                src={siteAssets.logo.src}
                alt={siteAssets.logo.alt}
                width={siteAssets.logo.width}
                height={siteAssets.logo.height}
                className="h-24 w-24 rounded-xl object-cover sm:h-28 sm:w-28"
                priority
              />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d14a4b]">
                Gym Vibe Cafe
              </p>
              <p className="mt-3 text-lg font-bold leading-snug text-[#f8f4ec]">
                {businessInfo.tagline}
              </p>
            </div>
          </div>
          <dl className="pt-6 text-center">
            <div className="rounded-xl border border-white/10 bg-[#0b0d0c] px-5 py-5">
              <dt className="text-xs font-bold uppercase tracking-[0.2em] text-[#aba294]">
                Google review score
              </dt>
              <dd className="mt-3 text-4xl font-black text-white">
                {businessInfo.ratingSnapshot.rating}
                <span className="ml-2 text-xl text-[#efcb9c]" aria-hidden="true">&#9733;</span>
              </dd>
              <dd className="mt-2 text-sm text-[#c7beaf]">
                Based on {businessInfo.ratingSnapshot.reviewCount} reviews,{" "}
                {businessInfo.ratingSnapshot.capturedLabel}
              </dd>
            </div>
          </dl>
          <p className="mt-5 text-center text-xs text-[#958c80]">
            {siteConfig.googleReviewsUrl ? (
              <a
                href={siteConfig.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c9c0b2] underline decoration-[#a42425] underline-offset-4 hover:text-white"
              >
                Read the latest Google reviews.
              </a>
            ) : (
              "Google rating snapshot supplied for this website; check Google for the latest reviews."
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
