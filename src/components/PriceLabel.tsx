import type { MenuItem } from "@/types/menu";

interface PriceLabelProps {
  item: MenuItem;
}

export function PriceLabel({ item }: PriceLabelProps) {
  if (!item.price && !item.secondaryPrice && !item.priceNote) {
    return null;
  }

  return (
    <div className="shrink-0 text-right">
      {item.price ? <p className="text-base font-bold text-[#efcb9c]">{item.price}</p> : null}
      {item.secondaryPrice ? <p className="mt-1 text-xs font-semibold text-[#cfc1ad]">{item.secondaryPrice}</p> : null}
      {item.priceNote ? <p className="mt-1 max-w-36 text-xs text-[#bdb4a7]">{item.priceNote}</p> : null}
    </div>
  );
}
