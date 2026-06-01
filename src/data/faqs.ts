import type { FAQ } from "@/types/faq";
import { businessInfo } from "@/data/businessInfo";

export const faqs: FAQ[] = [
  {
    id: "where-is-the-cafe",
    question: `Where is ${businessInfo.name}?`,
    answer: `${businessInfo.name} is at ${businessInfo.address.full}, in Kinning Park on Glasgow Southside.`,
  },
  {
    id: "how-to-call",
    question: `How do I call ${businessInfo.name}?`,
    answer: `Call ${businessInfo.phone.display}.`,
  },
  {
    id: "directions",
    question: "How do I get directions?",
    answer:
      "Use the Get Directions button, which opens Google Maps for the verified address.",
  },
  {
    id: "what-food",
    question: "What kind of food is on the menu?",
    answer:
      "The menu includes Scottish breakfasts, filled rolls, traditional cafe plates, high-protein meals, smoothies, coffee and desserts.",
  },
  {
    id: "breakfast-and-lunch",
    question: "When are breakfast and lunch available?",
    answer: "Breakfast and lunch are listed as available until 4pm.",
  },
  {
    id: "online-payments",
    question: "Is online checkout live?",
    answer:
      "The in-site Square checkout is being prepared and is not live yet. Do not use the website as a confirmed online ordering system.",
  },
  {
    id: "meal-prep",
    question: "Can I order meal prep online?",
    answer:
      "No. Ask in cafe for current meal-prep availability. Options, prices and availability may change.",
  },
  {
    id: "updates",
    question: "Where can I see updates?",
    answer: `Follow ${businessInfo.instagram.handle} on Instagram for updates and menu news.`,
  },
];
