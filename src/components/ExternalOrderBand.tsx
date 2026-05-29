import { ActionLink } from "@/components/ActionLink";
import { businessInfo } from "@/data/businessInfo";
import { siteConfig } from "@/data/siteConfig";

export function ExternalOrderBand() {
  return (
    <section className="border-b border-[#a42425]/35 bg-[#160f0f]" aria-labelledby="external-order-heading">
      <div className="content-shell flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d95555]">
            Online ordering
          </p>
          <h2 id="external-order-heading" className="mt-2 text-2xl font-black uppercase text-[#faf6ee]">
            Order now on Just Eat
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#d8d0c4]">
            Online orders currently redirect to Just Eat. The in-site Square
            checkout is still being prepared and is not live yet.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ActionLink
            href={siteConfig.justEatOrderUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Order now
          </ActionLink>
          <ActionLink href={businessInfo.phone.href} variant="secondary">
            Call the cafe
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
