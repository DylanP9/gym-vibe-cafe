import Image from "next/image";
import { ActionLink } from "@/components/ActionLink";
import { businessInfo } from "@/data/businessInfo";
import { siteAssets } from "@/data/siteAssets";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(164,36,37,0.28),transparent_42%)]" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1fr_360px] lg:items-center">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-[#cf3b3c]">
            Kinning Park, Glasgow
          </p>
          <h1 className="max-w-3xl text-4xl font-black uppercase leading-[1.05] tracking-tight text-[#faf6ee] sm:text-6xl">
            Classic café food and high-protein meals in one place
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[#d3ccc1]">
            From Scottish breakfasts and filled rolls to protein pancakes,
            smoothies and nutritional mains, fuel your day at {businessInfo.name}.
          </p>
          <p className="mt-5 font-bold uppercase tracking-[0.16em] text-white">
            {businessInfo.tagline}
          </p>
          <div className="mt-8 flex flex-col gap-3 min-[390px]:flex-row min-[390px]:flex-wrap">
            <ActionLink href="#menu">View menu</ActionLink>
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
        </div>
        <div className="hidden justify-self-center rounded-xl border border-[#a42425]/50 bg-black/30 p-5 shadow-2xl shadow-black/30 lg:block">
          <Image
            src={siteAssets.logo.src}
            alt={siteAssets.logo.alt}
            width={300}
            height={300}
            className="h-auto w-full rounded-md"
            priority
          />
        </div>
      </div>
    </section>
  );
}
