import { ActionLink } from "@/components/ActionLink";
import { SectionHeading } from "@/components/SectionHeading";
import { businessInfo } from "@/data/businessInfo";

export function InstagramSection() {
  return (
    <section className="section-shell" aria-labelledby="instagram-heading">
      <div className="content-shell rounded-xl border border-[#a42425]/35 bg-[linear-gradient(125deg,#151514,#231011)] p-7 sm:p-10">
        <SectionHeading id="instagram-heading" eyebrow="Social" title={`Follow ${businessInfo.instagram.handle}`}>
          Follow for café updates and new menu drops.
        </SectionHeading>
        <ActionLink
          href={businessInfo.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow Instagram
        </ActionLink>
      </div>
    </section>
  );
}
