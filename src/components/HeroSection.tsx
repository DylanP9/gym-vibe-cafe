import Image from "next/image";
import { ActionLink } from "@/components/ActionLink";
import { businessInfo } from "@/data/businessInfo";
import { siteAssets } from "@/data/siteAssets";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_26%,rgba(164,36,37,0.36),transparent_37%),linear-gradient(130deg,rgba(255,255,255,0.035),transparent_45%)]" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 sm:py-24 lg:grid-cols-[1fr_390px] lg:items-center">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.34em] text-[#d95555]">
            Café in Kinning Park, Glasgow
          </p>
          <h1 className="max-w-3xl text-[2.8rem] font-black uppercase leading-[0.98] tracking-[-0.055em] text-[#faf6ee] min-[390px]:text-5xl sm:text-7xl">
            Real food. Good energy. Fuel your vibe.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#d8d0c4] sm:text-xl">
            Classic Scottish café favourites, high-protein meals, smoothies and
            coffee in Kinning Park, Glasgow.
          </p>
          <div className="mt-9 flex flex-col gap-3 min-[390px]:flex-row min-[390px]:flex-wrap">
            <ActionLink href="/menu">View menu</ActionLink>
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
        </div>
        <div className="rounded-[1.5rem] border border-white/10 bg-[#101211]/90 p-5 shadow-2xl shadow-black/35 sm:p-7">
          <div className="flex items-center gap-5 border-b border-white/10 pb-6">
            <Image
              src={siteAssets.logo.src}
              alt={siteAssets.logo.alt}
              width={siteAssets.logo.width}
              height={siteAssets.logo.height}
              className="h-24 w-24 shrink-0 rounded-xl object-cover sm:h-28 sm:w-28"
              priority
            />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d14a4b]">
                Gym Vibe Café
              </p>
              <p className="mt-3 text-lg font-bold leading-snug text-[#f8f4ec]">
                {businessInfo.tagline}
              </p>
            </div>
          </div>
          <dl className="pt-6 text-center">
            <div className="rounded-xl border border-white/10 bg-[#0b0d0c] px-5 py-5">
              <dt className="text-xs font-bold uppercase tracking-[0.2em] text-[#aba294]">Google review score</dt>
              <dd className="mt-3 text-4xl font-black text-white">
                {businessInfo.ratingSnapshot.rating}
                <span className="ml-2 text-xl text-[#efcb9c]" aria-hidden="true">★</span>
              </dd>
              <dd className="mt-2 text-sm text-[#c7beaf]">
                Based on {businessInfo.ratingSnapshot.reviewCount} reviews*
              </dd>
            </div>
          </dl>
          <p className="mt-5 text-center text-xs text-[#958c80]">
            * Google rating snapshot supplied for this website.
          </p>
        </div>
      </div>
    </section>
  );
}
