import { businessInfo } from "@/data/businessInfo";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: businessInfo.name,
    description: businessInfo.description,
    telephone: businessInfo.phone.international,
    priceRange: businessInfo.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessInfo.address.street,
      addressLocality: businessInfo.address.city,
      postalCode: businessInfo.address.postcode,
      addressCountry: "GB",
    },
    sameAs: [businessInfo.instagram.url],
    openingHoursSpecification: businessInfo.hours
      .filter((hours) => !hours.closed)
      .map((hours) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: hours.day,
        opens: hours.opens,
        closes: hours.closes,
      })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
    />
  );
}
