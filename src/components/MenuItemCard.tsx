import { MacroBadge } from "@/components/MacroBadge";
import { MenuPhotoSlot } from "@/components/MenuPhotoSlot";
import { PriceLabel } from "@/components/PriceLabel";
import { getOrderableMenuItem, type OrderableMenuItem } from "@/lib/menuPricing";
import type { MenuItem } from "@/types/menu";

interface MenuItemCardProps {
  item: MenuItem;
  onAddToCart?: (item: OrderableMenuItem) => void;
}

export function MenuItemCard({ item, onAddToCart }: MenuItemCardProps) {
  const orderableItem = getOrderableMenuItem(item);

  return (
    <article className="menu-tile flex h-full flex-col">
      <MenuPhotoSlot image={item.image} />
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-bold leading-6 text-[#faf6ee]">{item.name}</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {item.isPopular ? (
              <span className="rounded-full bg-[#a42425] px-2.5 py-1 text-[0.64rem] font-bold uppercase tracking-[0.12em] text-white">
                Popular
              </span>
            ) : null}
            {item.isVegetarian ? (
              <span className="rounded-full border border-[#4c8e60]/55 bg-[#183021] px-2.5 py-1 text-[0.64rem] font-bold uppercase tracking-[0.12em] text-[#bce3c4]">
                Vegetarian
              </span>
            ) : null}
            {item.isUnavailable ? (
              <span className="rounded-full border border-white/20 px-2.5 py-1 text-[0.64rem] font-bold uppercase tracking-[0.12em] text-[#d5cabe]">
                Unavailable
              </span>
            ) : null}
            {item.needsVerification ? (
              <span className="rounded-full border border-[#df9b50]/50 bg-[#322113] px-2.5 py-1 text-[0.64rem] font-bold uppercase tracking-[0.12em] text-[#f4ca95]">
                Check detail
              </span>
            ) : null}
          </div>
        </div>
        <PriceLabel item={item} />
      </div>
      {item.description ? <p className="mt-3 text-sm leading-6 text-[#bfb7ab]">{item.description}</p> : null}
      {item.options ? (
        <ul className="mt-4 grid gap-2 text-sm text-[#eee1d1]" aria-label={`${item.name} sizes and prices`}>
          {item.options.map((option) => (
            <li key={option} className="rounded-md bg-white/[0.04] px-3 py-2">
              {option}
            </li>
          ))}
        </ul>
      ) : null}
      {item.macros ? <MacroBadge macros={item.macros} /> : null}
      {onAddToCart ? (
        <div className="mt-auto pt-5">
          {orderableItem ? (
            <button
              type="button"
              onClick={() => onAddToCart(orderableItem)}
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-[#ba3032] bg-[#a42425] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:border-[#cc3e40] hover:bg-[#b92c2e]"
            >
              Add to review basket
            </button>
          ) : (
            <p className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2 text-xs leading-5 text-[#bcb3a6]">
              Ask in cafe for this item or option.
            </p>
          )}
        </div>
      ) : null}
    </article>
  );
}
