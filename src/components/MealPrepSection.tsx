import Image from "next/image";
import { ActionLink } from "@/components/ActionLink";
import { SectionHeading } from "@/components/SectionHeading";
import { businessInfo } from "@/data/businessInfo";
import { siteAssets } from "@/data/siteAssets";

interface MealPrepSectionProps {
  detailed?: boolean;
}

export function MealPrepSection({ detailed = false }: MealPrepSectionProps) {
  return (
    <section id="meal-prep" className="section-shell section-divider bg-[#10100f]" aria-labelledby="meal-prep-heading">
      <div className="content-shell grid gap-8 md:grid-cols-[0.8fr_1fr] md:items-center">
        <figure className="relative mx-auto w-full max-w-sm overflow-hidden rounded-lg border border-white/10 bg-[#080808] p-4 shadow-2xl shadow-black/25">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-[#b51f23]" />
          <div className="rounded-md border border-[#b51f23]/30 bg-[radial-gradient(circle_at_20%_0%,rgba(181,31,35,0.24),transparent_34%),#0d0d0c] p-5">
            <Image
              src={siteAssets.mealPrepBundleReference.src}
              alt={siteAssets.mealPrepBundleReference.alt}
              width={siteAssets.mealPrepBundleReference.width}
              height={siteAssets.mealPrepBundleReference.height}
              unoptimized
              className="mx-auto h-auto w-full max-w-[260px] rounded-md border border-white/10 object-contain shadow-[0_20px_45px_-34px_rgba(0,0,0,0.95)]"
            />
          </div>
          <figcaption className="mt-3 text-center text-xs text-[#a79d90]">
            Supplied meal-prep reference artwork
          </figcaption>
        </figure>
        <div>
          <SectionHeading id="meal-prep-heading" eyebrow="Meal prep" title="Ask in cafe for current meal-prep availability">
            Options, prices and availability may change. Please check with the
            cafe directly before visiting specifically for meal prep.
          </SectionHeading>
          {detailed ? (
            <p className="mb-7 max-w-xl text-base leading-7 text-[#cfc8bb]">
              Current options, prices and collection details must be confirmed
              directly with {businessInfo.name}. This page is information only
              and does not take meal-prep orders or payments.
            </p>
          ) : null}
          <div className="mb-7 max-w-xl rounded-lg border border-[#df9b50]/35 bg-[#211516] p-4 text-sm leading-6 text-[#f1d8bc]">
            Meal prep is not connected to online checkout. Ask in cafe, call, or
            check Instagram for current availability before making a specific
            trip.
          </div>
          <div className="flex flex-wrap gap-3">
            {detailed ? (
              <>
                <ActionLink href={businessInfo.phone.href}>Call now</ActionLink>
                <ActionLink href={businessInfo.maps.directionsUrl} target="_blank" rel="noopener noreferrer" variant="secondary">
                  Get directions
                </ActionLink>
                <ActionLink href={businessInfo.instagram.url} target="_blank" rel="noopener noreferrer" variant="secondary">
                  Instagram
                </ActionLink>
              </>
            ) : (
              <>
                <ActionLink href="/meal-prep">Meal-prep info</ActionLink>
                <ActionLink href={businessInfo.phone.href} variant="secondary">
                  Call now
                </ActionLink>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
