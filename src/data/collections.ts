export interface Collection {
  id: number;
  name: string;
  type: string;
  description: string;
  coverImage: string;
  featured: boolean;
  designCount: number;
}

export const collections: Collection[] = [
  {
    id: 1,
    name: "Wedding Collection",
    type: "wedding",
    description: "Turn your dream wedding into a breathtaking reality with our signature luxury setups floral arches, candlelit tables, and bespoke welcome signs.",
    coverImage: "/MaziniEvents/images/weedingcol.png",
    featured: true,
    designCount: 3,
  },
  {
    id: 2,
    name: "Date Prestige",
    type: "date-prestige",
    description: "Exquisite Moroccan date and chocolate gift boxes presented in premium handcrafted trays — the ultimate luxury gift for any occasion.",
    coverImage: "/MaziniEvents/images/datecol.png",
    featured: true,
    designCount: 3,
  },
  {
    id: 3,
    name: "Birthday Celebration",
    type: "party",
    description: "Vibrant, joyful, and utterly memorable. Our birthday packages transform any venue into a magical celebration space.",
    coverImage: "/MaziniEvents/images/Birthdaycol.png",
    featured: true,
    designCount: 2,
  },
  {
    id: 4,
    name: "Luxury Picnic",
    type: "picnic",
    description: "An intimate outdoor escape with premium cushions, candles, and fresh flowers — romance elevated in nature.",
    coverImage: "https://images.unsplash.com/photo-1472653431158-6364773b2a56?w=900&q=80",
    featured: true,
    designCount: 3,
  },
  {
    id: 5,
    name: "Engagement Ceremony",
    type: "wedding",
    description: "Celebrate the beginning of forever. Our engagement setups blend floral elegance, soft lighting, and Moroccan craftsmanship.",
    coverImage: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80",
    featured: false,
    designCount: 2,
  },
  // {
  //   id: 6,
  //   name: "Chocolate Gift Box",
  //   type: "chocolate",
  //   description: "Belgian and artisan Moroccan chocolates arranged in stunning lacquered boxes — a gift that speaks luxury.",
  //   icon: "",
  //   coverImage: "https://images.unsplash.com/photo-1548783300-a9e0a2c33c0d?w=900&q=80",
  //   featured: false,
  //   designCount: 2,
  // },
  {
    id: 7,
    name: "Welcome Sign Collection",
    type: "welcome-sign",
    description: "Custom hand-lettered welcome signs, name boards, and event signage crafted in wood, acrylic, and gold leaf.",
    coverImage: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=900&q=80",
    featured: false,
    designCount: 2,
  },
  {
    id: 8,
    name: "Garden Celebration",
    type: "party",
    description: "Lush garden parties with trailing florals, lanterns, and bespoke table settings under the open sky.",
    coverImage: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=900&q=80",
    featured: false,
    designCount: 2,
  },
];

export function getCollectionById(id: number): Collection | undefined {
  return collections.find((c) => c.id === id);
}
