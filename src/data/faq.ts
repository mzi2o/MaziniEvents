export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faq: FaqItem[] = [
  {
    id: "booking",
    question: "How far in advance should we book?",
    answer: "For weddings and large events, we recommend booking at least 3–6 months in advance. For smaller setups like Date Prestige or Picnics, 2–4 weeks is usually sufficient, though earlier is always better to guarantee availability.",
  },
  {
    id: "customize",
    question: "Do you customize packages?",
    answer: "Absolutely. While our collections provide a starting point and established aesthetic, every event can be tailored to your specific vision, color palette, and venue requirements.",
  },
  {
    id: "location",
    question: "Where do you provide services?",
    answer: "We are based in Casablanca but provide luxury event decoration services across Morocco, including Marrakech, Rabat, Tangier, and beyond. Travel fees may apply for locations outside Casablanca.",
  },
  {
    id: "booking-process",
    question: "How does the booking process work?",
    answer: "Simply reach out via WhatsApp or our Contact form. We'll schedule a consultation to discuss your vision. Once the details are finalized, a 50% deposit secures your date, with the balance due before the event.",
  },
  {
    id: "payment",
    question: "What payment methods do you accept?",
    answer: "We accept cash and bank transfer. A 50% deposit is required to confirm your booking, with the remaining balance due 3 days before the event date.",
  },
];
