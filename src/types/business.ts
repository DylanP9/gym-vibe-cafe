export type DayName =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export interface OpeningHoursEntry {
  day: DayName;
  display: string;
  opens?: string;
  closes?: string;
  closed?: boolean;
}

export interface BusinessInfo {
  name: string;
  businessType: string;
  tagline: string;
  description: string;
  address: {
    street: string;
    area: string;
    city: string;
    postcode: string;
    full: string;
  };
  phone: {
    display: string;
    href: string;
    international: string;
  };
  instagram: {
    handle: string;
    url: string;
  };
  maps: {
    directionsUrl: string;
  };
  hours: OpeningHoursEntry[];
  breakfastLunchNote: string;
  holidayHoursNote: string;
  ratingSnapshot: {
    rating: number;
    reviewCount: number;
    source: string;
  };
  priceRange: string;
}
