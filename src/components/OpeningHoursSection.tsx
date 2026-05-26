import { SectionHeading } from "@/components/SectionHeading";
import { businessInfo } from "@/data/businessInfo";

export function OpeningHoursSection() {
  return (
    <section id="hours" className="section-shell scroll-mt-20" aria-labelledby="hours-heading">
      <div className="content-shell grid gap-8 md:grid-cols-[0.9fr_1fr]">
        <SectionHeading id="hours-heading" eyebrow="Plan your visit" title="Opening hours">
          {businessInfo.breakfastLunchNote}
        </SectionHeading>
        <dl className="overflow-hidden rounded-2xl border border-white/10 bg-[#101211]">
          {businessInfo.hours.map((hours) => (
            <div key={hours.day} className="flex justify-between gap-4 border-b border-white/10 px-5 py-4 last:border-b-0">
              <dt className="font-semibold text-[#f7f2e9]">{hours.day}</dt>
              <dd className={hours.closed ? "font-bold text-[#d14a4b]" : "text-[#d4ccc1]"}>
                {hours.display}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
