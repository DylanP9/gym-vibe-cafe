import { ActionLink } from "@/components/ActionLink";
import { SectionHeading } from "@/components/SectionHeading";
import { businessInfo } from "@/data/businessInfo";

export function LocationSection() {
  return (
    <section id="location" className="section-shell scroll-mt-20 bg-[#111312]" aria-labelledby="location-heading">
      <div className="content-shell grid gap-8 md:grid-cols-[1fr_0.85fr] md:items-center">
        <SectionHeading id="location-heading" eyebrow="Find us" title="Kinning Park, Glasgow">
          Visit Gym Vibe Café at {businessInfo.address.full}.
        </SectionHeading>
        <div className="rounded-lg border border-[#a42425]/45 bg-[#090b0a] p-6">
          <address className="not-italic text-base leading-7 text-[#f5f0e7]">
            {businessInfo.address.street}
            <br />
            {businessInfo.address.area}, {businessInfo.address.city}
            <br />
            {businessInfo.address.postcode}
          </address>
          <ActionLink
            href={businessInfo.maps.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 w-full"
          >
            Get directions
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
