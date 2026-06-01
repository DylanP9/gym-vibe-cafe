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
            We are on Middlesex Street in Kinning Park, Glasgow Southside. Check
            the hours, call the cafe, or open directions before you head over.
          </SectionHeading>
          <div className="flex flex-wrap gap-3">
            {showLocationLink ? (
              <ActionLink href="/location" variant="secondary">
                View hours
              </ActionLink>
            ) : null}
            <ActionLink href={businessInfo.maps.directionsUrl} target="_blank" rel="noopener noreferrer">
              Directions
            </ActionLink>
          </div>
        </div>
        <div className="rounded-lg border border-[#b51f23]/45 bg-[#10100f] p-6 shadow-2xl shadow-black/20 sm:p-8">
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
          <a
            href={businessInfo.maps.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 block overflow-hidden rounded-lg border border-[#b51f23]/45 bg-[linear-gradient(135deg,#171110,#090909)] p-4 transition hover:border-[#e33a3f]"
            aria-label={`Open Google Maps directions to ${businessInfo.name}`}
          >
            <span className="block text-xs font-black uppercase tracking-[0.18em] text-[#e33a3f]">
              Google Maps
            </span>
            <span className="mt-4 grid min-h-28 place-items-center rounded-md border border-white/10 bg-[radial-gradient(circle_at_30%_30%,rgba(181,31,35,0.3),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] px-4 text-center">
              <span className="text-lg font-black uppercase tracking-[-0.02em] text-white">
                Get directions
              </span>
              <span className="text-sm leading-6 text-[#cfc7bb]">
                Opens Gym Vibe Cafe in Google Maps
              </span>
            </span>
          </a>
          <div className="mt-5 grid gap-3 border-y border-white/10 py-5 text-sm text-[#d9d0c4] sm:grid-cols-2">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#e33a3f]">Phone</p>
              <a className="mt-2 inline-block font-bold text-[#f5f0e7] hover:text-[#e25b5c]" href={businessInfo.phone.href}>
                {businessInfo.phone.display}
              </a>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#e33a3f]">Updates</p>
              <a
                className="mt-2 inline-block font-bold text-[#f5f0e7] hover:text-[#e25b5c]"
                href={businessInfo.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {businessInfo.instagram.handle}
              </a>
            </div>
          </div>
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
