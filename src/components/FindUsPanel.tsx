import { ActionLink } from "@/components/ActionLink";
import { SectionHeading } from "@/components/SectionHeading";
import { businessInfo } from "@/data/businessInfo";

interface FindUsPanelProps {
  showLocationLink?: boolean;
}

export function FindUsPanel({ showLocationLink = true }: FindUsPanelProps) {
  return (
    <section id="location" className="section-shell section-divider" aria-labelledby="find-us-heading">
      <div className="content-shell grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <SectionHeading id="find-us-heading" eyebrow="Find us" title="Visit us in Kinning Park">
            On Glasgow Southside, Gym Vibe Café is a convenient stop for
            visitors looking for breakfast, lunch, coffee, smoothies or
            high-protein menu choices nearby.
          </SectionHeading>
          {showLocationLink ? (
            <ActionLink href="/location" variant="secondary">
              View hours and location
            </ActionLink>
          ) : null}
        </div>
        <div className="rounded-2xl border border-[#a42425]/45 bg-[#111312] p-6 sm:p-8">
          <p className="text-lg font-black uppercase tracking-wide text-white">
            {businessInfo.name}
          </p>
          <address className="mt-5 not-italic text-base leading-8 text-[#dbd3c7]">
            {businessInfo.address.street}
            <br />
            {businessInfo.address.area}, {businessInfo.address.city}
            <br />
            {businessInfo.address.postcode}
          </address>
          <a className="mt-4 inline-block font-bold text-[#f5f0e7] hover:text-[#e25b5c]" href={businessInfo.phone.href}>
            {businessInfo.phone.display}
          </a>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ActionLink href={businessInfo.maps.directionsUrl} target="_blank" rel="noopener noreferrer">
              Get directions
            </ActionLink>
            <ActionLink href={businessInfo.phone.href} variant="secondary">
              Call now
            </ActionLink>
            <ActionLink href={businessInfo.instagram.url} target="_blank" rel="noopener noreferrer" variant="secondary">
              Instagram
            </ActionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
