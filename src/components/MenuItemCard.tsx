import { MacroBadge } from "@/components/MacroBadge";
import { MenuPhotoSlot } from "@/components/MenuPhotoSlot";
import { PriceLabel } from "@/components/PriceLabel";
import { getOrderableMenuItem, type OrderableMenuItem } from "@/lib/menuPricing";
import type { MenuItem } from "@/types/menu";

interface MenuItemCardProps {
  item: MenuItem;
  onAddToCart?: (item: OrderableMenuItem) => void;
  showImage?: boolean;
}

export function MenuItemCard({ item, onAddToCart, showImage = false }: MenuItemCardProps) {
  const orderableItem = getOrderableMenuItem(item);

  return (
    <article className={`menu-tile flex h-full flex-col ${item.isPopular ? "border-[#b51f23]/55 bg-[#130d0d]" : ""}`}>
      {showImage ? <MenuPhotoSlot image={item.image} /> : null}
      <div className={showImage ? "mt-4 flex items-start justify-between gap-4" : "flex items-start justify-between gap-4"}>
        <div className="min-w-0">
          <h3 className="text-lg font-black leading-6 tracking-[-0.015em] text-[#faf6ee]">{item.name}</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {item.isPopular ? (
              <span className="rounded-md bg-[#b51f23] px-2.5 py-1 text-[0.64rem] font-black uppercase tracking-[0.12em] text-white">
                Popular
              </span>
            ) : null}
            {item.isVegetarian ? (
              <span className="rounded-md border border-[#4c8e60]/55 bg-[#183021] px-2.5 py-1 text-[0.64rem] font-bold uppercase tracking-[0.12em] text-[#bce3c4]">
                Vegetarian
              </span>
            ) : null}
            {item.isUnavailable ? (
              <span className="rounded-md border border-white/20 px-2.5 py-1 text-[0.64rem] font-bold uppercase tracking-[0.12em] text-[#d5cabe]">
                Unavailable
              </span>
            ) : null}
            {item.needsVerification ? (
              <span className="rounded-md border border-[#df9b50]/50 bg-[#322113] px-2.5 py-1 text-[0.64rem] font-bold uppercase tracking-[0.12em] text-[#f4ca95]">
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
            <li key={option} className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2">
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
              className="inline-flex min-h-11 w-full items-center justify-center rounded-md border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#d9d0c4] transition hover:border-white/30 hover:text-white"
            >
              Add to planning basket
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
