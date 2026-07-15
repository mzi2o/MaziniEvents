export interface Testimonial {
  id: number;
  clientName: string;
  rating: number;
  review: string;
  eventType: string;
  clientPhoto?: string;
  featured: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    clientName: "Fatima & Youssef",
    rating: 5,
    review: "Mazini Events transformed our wedding into a fairy tale. Every detail was perfect — the floral arrangements, the welcome sign, the chocolate station. Our guests could not stop complimenting the decor. Absolutely magical.",
    eventType: "Wedding",
    featured: true,
  },
  {
    id: 2,
    clientName: "Sara Benali",
    rating: 5,
    review: "The Date Prestige Royal box was the most beautiful gift I have ever given. My mother was in tears. The presentation is truly luxury — nothing like anything you can find elsewhere in Morocco.",
    eventType: "Date Prestige",
    featured: true,
  },
  {
    id: 3,
    clientName: "Mohammed & Khadija",
    rating: 5,
    review: "We booked the Gold Wedding package and it was worth every dirham. The team was professional, punctual, and brought our vision to life beyond expectations. Our photos look like they belong in a magazine.",
    eventType: "Wedding",
    featured: true,
  },
  {
    id: 4,
    clientName: "Nadia Alami",
    rating: 5,
    review: "The luxury picnic for my husband's birthday was absolutely stunning. Rose petals, candles, premium cushions — it was like something out of a Pinterest board but better, because it was real. We will definitely book again.",
    eventType: "Luxury Picnic",
    featured: true,
  },
  {
    id: 5,
    clientName: "Imane & Khalid",
    rating: 5,
    review: "Our engagement party was perfect. The balloon arch, the welcome sign, the table decoration — everything was cohesive and elegant. Mazini Events understood exactly what we wanted.",
    eventType: "Engagement",
    featured: true,
  },
  {
    id: 6,
    clientName: "Leila Mansouri",
    rating: 5,
    review: "I ordered the birthday package for my daughter and was completely blown away. The attention to detail is remarkable. The team is warm, professional, and genuinely cares about making your event special.",
    eventType: "Birthday Party",
    featured: false,
  },
];

export function getFeaturedTestimonials(): Testimonial[] {
  return testimonials.filter((t) => t.featured);
}
