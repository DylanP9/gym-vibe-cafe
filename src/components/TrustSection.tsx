import { SectionHeading } from "@/components/SectionHeading";
import { businessInfo } from "@/data/businessInfo";

export function TrustSection() {
  return (
    <section className="section-shell border-y border-white/10 bg-[#111312]" aria-labelledby="trust-heading">
      <div className="content-shell">
        <SectionHeading id="trust-heading" eyebrow="Local café" title="A Kinning Park favourite">
          Straightforward food, clear prices and an easy stop for breakfast,
          lunch or a smoothie.
        </SectionHeading>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="stat-card">
            <p className="text-3xl font-black text-white">{businessInfo.ratingSnapshot.rating}</p>
            <p className="mt-2 text-sm text-[#d0c8bd]">
              Stars from {businessInfo.ratingSnapshot.reviewCount} Google reviews
            </p>
            <p className="mt-2 text-xs text-[#998f82]">Rating snapshot supplied for this site</p>
          </div>
          <div className="stat-card">
            <p className="text-3xl font-black text-white">{businessInfo.priceRange}</p>
            <p className="mt-2 text-sm text-[#d0c8bd]">Price range snapshot</p>
          </div>
          <div className="stat-card">
            <p className="text-xl font-black uppercase text-white">Until 3pm</p>
            <p className="mt-2 text-sm text-[#d0c8bd]">{businessInfo.breakfastLunchNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
