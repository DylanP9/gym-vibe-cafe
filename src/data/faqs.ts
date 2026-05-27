import type { FAQ } from "@/types/faq";
import { businessInfo } from "@/data/businessInfo";

export const faqs: FAQ[] = [
  {
    id: "where-is-the-cafe",
    question: `Where is ${businessInfo.name}?`,
    answer: `${businessInfo.name} is at ${businessInfo.address.full}.`,
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
    id: "breakfast-and-lunch",
    question: "When are breakfast and lunch available?",
    answer: "Breakfast and lunch are listed as available until 3pm.",
  },
  {
    id: "online-payments",
    question: "Does the website take online orders or payments?",
    answer:
      "If online checkout is available, payment is completed securely through Square. Please contact the cafe directly for current availability or order questions.",
  },
  {
    id: "updates",
    question: "Where can I see updates?",
    answer: `Follow ${businessInfo.instagram.handle} on Instagram for updates and menu news.`,
  },
];
