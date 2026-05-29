import { businessInfo } from "@/data/businessInfo";

export function QuickInfoStrip() {
  const weekdayHours = businessInfo.hours.find((hours) => hours.day === "Monday")?.display;
  const saturdayHours = businessInfo.hours.find((hours) => hours.day === "Saturday")?.display;
  const sundayHours = businessInfo.hours.find((hours) => hours.day === "Sunday")?.display;

  return (
    <section aria-label="Quick information" className="border-b border-[#a42425]/35 bg-[#111312]">
      <dl className="mx-auto grid max-w-6xl gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-[#111312] p-5">
          <dt className="info-label">Location</dt>
          <dd className="mt-2 text-sm leading-6 text-[#f5f0e7]">
            {businessInfo.address.area}, {businessInfo.address.city}
          </dd>
        </div>
        <div className="bg-[#111312] p-5">
          <dt className="info-label">Opening hours</dt>
          <dd className="mt-2 text-sm leading-6 text-[#f5f0e7]">
            Mon - Fri: {weekdayHours}
            <br />
            Sat: {saturdayHours} / Sun: {sundayHours}
          </dd>
        </div>
        <div className="bg-[#111312] p-5">
          <dt className="info-label">Breakfast & lunch</dt>
          <dd className="mt-2 text-sm leading-6 text-[#f5f0e7]">{businessInfo.breakfastLunchNote}</dd>
        </div>
        <div className="bg-[#111312] p-5">
          <dt className="info-label">Call the cafe</dt>
          <dd className="mt-2 text-sm leading-6 text-[#f5f0e7]">
            <a href={businessInfo.phone.href} className="font-bold hover:text-[#ee7777]">
              {businessInfo.phone.display}
            </a>
          </dd>
        </div>
      </dl>
    </section>
  );
}
