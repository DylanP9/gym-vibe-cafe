import Image from "next/image";
import { ActionLink } from "@/components/ActionLink";
import { SectionHeading } from "@/components/SectionHeading";
import { siteAssets } from "@/data/siteAssets";

export function MenuBoardReferencePanel() {
  return (
    <section className="section-shell section-divider bg-[#111312]" aria-labelledby="menu-board-heading">
      <div className="content-shell grid gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-center">
        <SectionHeading id="menu-board-heading" eyebrow="Brand artwork" title="Menu-board style">
          Menu-board artwork shown as a visual reference. Use the readable menu
          below for easier browsing.
        </SectionHeading>
        <figure className="overflow-hidden rounded-2xl border border-[#a42425]/40 bg-[#070908] p-3 sm:p-5">
          <Image
            src={siteAssets.referenceMenu.src}
            alt={siteAssets.referenceMenu.alt}
            width={siteAssets.referenceMenu.width}
            height={siteAssets.referenceMenu.height}
            unoptimized
            className="mx-auto h-auto w-full max-w-[301px] rounded-lg object-contain"
          />
          <figcaption className="mt-4 flex flex-col items-start justify-between gap-4 text-sm text-[#bbb2a6] sm:flex-row sm:items-center">
            <span>Reference artwork only. Menu details are listed in text.</span>
            <ActionLink href="/menu" variant="secondary" className="min-h-10 px-4 py-2 text-xs">
              Read menu
            </ActionLink>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
