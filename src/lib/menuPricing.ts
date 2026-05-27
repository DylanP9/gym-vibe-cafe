import { menuCategories } from "@/data/menu";
import type { MenuItem } from "@/types/menu";

const poundsPricePattern = /^£(\d+(?:\.\d{1,2})?)$/;

export type OrderableMenuItem = MenuItem & {
  price: string;
  pricePence: number;
};

export function parsePoundsToPence(price?: string): number | null {
  const match = price?.trim().match(poundsPricePattern);

  if (!match) {
    return null;
  }

  return Math.round(Number(match[1]) * 100);
}

export function getOrderableMenuItem(item: MenuItem): OrderableMenuItem | null {
  const pricePence = parsePoundsToPence(item.price);

  if (!item.price || pricePence === null || item.isUnavailable) {
    return null;
  }

  return {
    ...item,
    price: item.price,
    pricePence,
  };
}

export const orderableMenuItems = menuCategories
  .flatMap((category) => category.items)
  .map(getOrderableMenuItem)
  .filter((item): item is OrderableMenuItem => item !== null);

export const orderableMenuItemsById = new Map(
  orderableMenuItems.map((item) => [item.id, item]),
);
