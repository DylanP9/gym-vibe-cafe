export type MenuTag =
  | "popular"
  | "high-protein"
  | "breakfast"
  | "lunch"
  | "smoothie"
  | "traditional"
  | "kids"
  | "verify-price";

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price?: string;
  priceNote?: string;
  tags?: MenuTag[];
  needsVerification?: boolean;
}

export interface MenuOptionGroup {
  title: string;
  options: string[];
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle?: string;
  availabilityNote?: string;
  customerNote?: string;
  items: MenuItem[];
  optionGroups?: MenuOptionGroup[];
}
