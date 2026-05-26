import { ActionLink } from "@/components/ActionLink";
import { SectionHeading } from "@/components/SectionHeading";
import { businessInfo } from "@/data/businessInfo";

export function ContactSection() {
  return (
    <section className="section-shell bg-[#771c1d]" aria-labelledby="contact-heading">
      <div className="content-shell text-center">
        <SectionHeading id="contact-heading" title="Ready to visit?" centered>
          Visit Gym Vibe Café in Kinning Park, call ahead, or follow on
          Instagram for the latest updates.
        </SectionHeading>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <ActionLink href={businessInfo.phone.href} className="bg-[#090b0a] hover:bg-[#161817]">
            Call {businessInfo.phone.display}
          </ActionLink>
          <ActionLink
            href={businessInfo.maps.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            Get directions
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
