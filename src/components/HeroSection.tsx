import Image from "next/image";
import { ActionLink } from "@/components/ActionLink";
import { businessInfo } from "@/data/businessInfo";
import { siteAssets } from "@/data/siteAssets";
import { siteConfig } from "@/data/siteConfig";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(181,31,35,0.18),transparent_42%),radial-gradient(circle_at_86%_18%,rgba(227,58,63,0.22),transparent_30%)]" />
      <div className="absolute inset-x-0 top-0 h-2 bg-[#b51f23]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1fr)_430px] lg:items-center lg:px-8 lg:py-20">
        <div>
          <p className="mb-5 text-xs font-black uppercase tracking-[0.26em] text-[#e33a3f]">
            Kinning Park cafe for breakfast, lunch and post-gym food
          </p>
          <h1 className="max-w-4xl text-[3.15rem] font-black uppercase leading-[0.88] tracking-[-0.055em] text-[#faf6ee] min-[390px]:text-6xl sm:text-7xl lg:text-8xl">
            Glasgow cafe food with gym energy.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d8d0c4] sm:text-xl">
            Scottish breakfasts, filled rolls, high-protein meals, smoothies and
            coffee on Glasgow Southside. Breakfast and lunch served until 4pm.
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
          <p className="mt-5 max-w-xl text-sm leading-6 text-[#a99f92]">
            Online Square checkout is being prepared and is not live yet.
            Check the menu, call the cafe, or visit us in Kinning Park.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#0d0d0c]/94 p-5 shadow-2xl shadow-black/35 sm:p-7">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-[#b51f23]" />
          <div className="flex items-center gap-5 border-b border-white/10 pb-6">
            <div className="shrink-0 rounded-lg border border-[#b51f23]/45 bg-[#070707] p-2 shadow-[0_16px_35px_-24px_rgba(181,31,35,0.75)]">
              <Image
                src={siteAssets.logo.src}
                alt={siteAssets.logo.alt}
                width={siteAssets.logo.width}
                height={siteAssets.logo.height}
                className="h-24 w-24 rounded-md object-cover sm:h-28 sm:w-28"
                priority
              />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#e33a3f]">
                Gym Vibe Cafe
              </p>
              <p className="mt-3 text-lg font-black leading-snug text-[#f8f4ec]">
                {businessInfo.tagline}
              </p>
            </div>
          </div>
          <dl className="grid gap-3 pt-6">
            <div className="rounded-md border border-white/10 bg-[#090909] px-5 py-4">
              <dt className="text-xs font-black uppercase tracking-[0.18em] text-[#e33a3f]">
                Food
              </dt>
              <dd className="mt-2 font-bold text-white">
                Scottish breakfasts, filled rolls, high-protein meals
              </dd>
            </div>
            <div className="rounded-md border border-white/10 bg-[#090909] px-5 py-4">
              <dt className="text-xs font-black uppercase tracking-[0.18em] text-[#e33a3f]">
                Drinks
              </dt>
              <dd className="mt-2 font-bold text-white">
                Smoothies, coffee, tea and cold drinks
              </dd>
            </div>
            <div className="rounded-md border border-white/10 bg-[#090909] px-5 py-4">
              <dt className="text-xs font-black uppercase tracking-[0.18em] text-[#e33a3f]">
                Visit
              </dt>
              <dd className="mt-2 font-bold text-white">
                {businessInfo.address.street}, {businessInfo.address.area}
              </dd>
            </div>
          </dl>
          {siteConfig.googleReviewsUrl ? (
            <a
              href={siteConfig.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex text-xs font-bold text-[#c9c0b2] underline decoration-[#b51f23] underline-offset-4 hover:text-white"
            >
              Read the latest Google reviews
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
