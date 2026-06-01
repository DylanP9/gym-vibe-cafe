import Image from "next/image";
import { ActionLink } from "@/components/ActionLink";
import { SectionHeading } from "@/components/SectionHeading";
import { siteAssets } from "@/data/siteAssets";

export function MenuBoardReferencePanel() {
  return (
    <section className="section-shell section-divider bg-[#050505]" aria-labelledby="menu-board-heading">
      <div className="content-shell grid gap-8 lg:grid-cols-[0.85fr_1fr] lg:items-center">
        <SectionHeading id="menu-board-heading" eyebrow="Menu-board reference" title="Built from the real black and red Gym Vibe boards">
          The website follows the supplied menu-board artwork: dark background,
          red category bars, clear prices and no stock food photography.
        </SectionHeading>
        <figure className="relative overflow-hidden rounded-lg border border-[#b51f23]/45 bg-[#070707] p-4 shadow-2xl shadow-black/25 sm:p-6">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-[#b51f23]" />
          <div className="rounded-md border border-white/10 bg-[radial-gradient(circle_at_18%_0%,rgba(181,31,35,0.22),transparent_32%),#0c0c0b] p-4">
            <Image
              src={siteAssets.referenceMenu.src}
              alt={siteAssets.referenceMenu.alt}
              width={siteAssets.referenceMenu.width}
              height={siteAssets.referenceMenu.height}
              unoptimized
              className="mx-auto h-auto w-full max-w-[560px] rounded-md border border-white/10 object-contain shadow-[0_20px_45px_-34px_rgba(0,0,0,0.95)]"
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
