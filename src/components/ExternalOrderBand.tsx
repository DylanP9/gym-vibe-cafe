import { ActionLink } from "@/components/ActionLink";
import { businessInfo } from "@/data/businessInfo";
import { siteConfig } from "@/data/siteConfig";

export function ExternalOrderBand() {
  return (
    <section className="border-b border-[#b51f23]/35 bg-[#160f0f]" aria-labelledby="external-order-heading">
      <div className="content-shell flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#e33a3f]">
            Ordering status
          </p>
          <h2 id="external-order-heading" className="mt-2 text-2xl font-black uppercase text-[#faf6ee]">
            Square checkout is not live yet
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#d8d0c4]">
            The in-site Square checkout is still being prepared. Use the Just
            Eat menu only if you want the external delivery-platform option.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ActionLink
            href={siteConfig.justEatOrderUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Just Eat menu
          </ActionLink>
          <ActionLink href={businessInfo.phone.href} variant="secondary">
            Call the cafe
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
