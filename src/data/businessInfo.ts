import type { BusinessInfo } from "@/types/business";

export const businessInfo: BusinessInfo = {
  name: "Gym Vibe Café",
  businessType: "Café",
  tagline: "Eat Good. Feel Better. Fuel Your Vibe.",
  description:
    "Classic café food and high-protein meals in Kinning Park, Glasgow.",
  address: {
    street: "89 Middlesex St",
    area: "Kinning Park",
    city: "Glasgow",
    postcode: "G41 1EE",
    full: "89 Middlesex St, Kinning Park, Glasgow G41 1EE",
  },
  phone: {
    display: "0141 286 0559",
    href: "tel:+441412860559",
    international: "+441412860559",
  },
  instagram: {
    handle: "@gymvibecafe",
    url: "https://www.instagram.com/gymvibecafe/",
  },
  maps: {
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Gym%20Vibe%20Caf%C3%A9%2089%20Middlesex%20St%20Kinning%20Park%20Glasgow%20G41%201EE",
  },
  hours: [
    { day: "Monday", display: "7:00 am – 4:00 pm", opens: "07:00", closes: "16:00" },
    { day: "Tuesday", display: "7:00 am – 4:00 pm", opens: "07:00", closes: "16:00" },
    { day: "Wednesday", display: "7:00 am – 4:00 pm", opens: "07:00", closes: "16:00" },
    { day: "Thursday", display: "7:00 am – 4:00 pm", opens: "07:00", closes: "16:00" },
    { day: "Friday", display: "7:00 am – 4:00 pm", opens: "07:00", closes: "16:00" },
    { day: "Saturday", display: "Closed", closed: true },
    { day: "Sunday", display: "9:00 am – 3:00 pm", opens: "09:00", closes: "15:00" },
  ],
  breakfastLunchNote: "Breakfast & lunch available until 3pm.",
  ratingSnapshot: {
    rating: 4.9,
    reviewCount: 121,
    source: "Google rating snapshot",
  },
};
