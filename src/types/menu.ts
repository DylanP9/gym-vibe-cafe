export type MenuMacroInfo = {
  calories: number;
  proteinGrams: number;
  carbsGrams: number;
  fatGrams: number;
};

export type MenuAddOn = {
  name: string;
  price: string;
};

export type MenuItemImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type MenuOptionGroup = {
  title: string;
  options: string[];
};

export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  price?: string;
  secondaryPrice?: string;
  priceNote?: string;
  tags?: string[];
  isPopular?: boolean;
  isVegetarian?: boolean;
  isUnavailable?: boolean;
  needsVerification?: boolean;
  image?: MenuItemImage;
  macros?: MenuMacroInfo;
  options?: string[];
  addOns?: MenuAddOn[];
};

export type MenuCategory = {
  id: string;
  title: string;
  description?: string;
  availabilityNote?: string;
  priceNote?: string;
  customerNote?: string;
  items: MenuItem[];
  addOns?: MenuAddOn[];
  optionGroups?: MenuOptionGroup[];
};
