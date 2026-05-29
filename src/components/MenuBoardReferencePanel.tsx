import Image from "next/image";
import { ActionLink } from "@/components/ActionLink";
import { SectionHeading } from "@/components/SectionHeading";
import { siteAssets } from "@/data/siteAssets";

export function MenuBoardReferencePanel() {
  return (
    <section className="section-shell section-divider bg-[#111312]" aria-labelledby="menu-board-heading">
      <div className="content-shell grid gap-8 lg:grid-cols-[0.85fr_1fr] lg:items-center">
        <SectionHeading id="menu-board-heading" eyebrow="Menu artwork" title="The board, made readable">
          The supplied menu-board artwork is framed as a brand reference. The
          text menu remains the easiest way to browse prices and categories.
        </SectionHeading>
        <figure className="relative overflow-hidden rounded-2xl border border-[#a42425]/45 bg-[#070908] p-4 shadow-2xl shadow-black/25 sm:p-6">
          <div className="absolute inset-x-0 top-0 h-1 bg-[#a42425]" />
          <div className="rounded-xl border border-white/10 bg-[radial-gradient(circle_at_18%_0%,rgba(164,36,37,0.22),transparent_32%),#0c0e0d] p-4">
            <Image
              src={siteAssets.referenceMenu.src}
              alt={siteAssets.referenceMenu.alt}
              width={siteAssets.referenceMenu.width}
              height={siteAssets.referenceMenu.height}
              unoptimized
              className="mx-auto h-auto w-full max-w-[520px] rounded-lg border border-white/10 object-contain shadow-[0_20px_45px_-34px_rgba(0,0,0,0.95)]"
            />
          </div>
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
