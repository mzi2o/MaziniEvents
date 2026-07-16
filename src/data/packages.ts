export interface Package {
  id: number;
  name: string;
  category: string;
  badge?: string;
  startingPrice: number;
  currency: string;
  description: string;
  coverImage: string;
  features: string[];
  featured: boolean;
}

export const packages: Package[] = [
  {
    id: 1,
    name: "Prestige",
    category: "Date Prestige",
    startingPrice: 499,
    currency: "DH",
    description: "A refined gift for someone special — premium dates and chocolates in an elegant presentation.",
    coverImage: "/MaziniEvents/images/date_pack1.png",
    features: ["Premium Dates", "Mixed Chocolates", "Luxury Tray", "Elegant Wrapping", "Ribbon", "Gift Card"],
    featured: true,
  },
  {
    id: 2,
    name: "Luxury",
    category: "Date Prestige",
    badge: "Most Popular",
    startingPrice: 899,
    currency: "DH",
    description: "Elevated luxury with Medjool dates, Belgian chocolates, and fresh florals.",
    coverImage: "/MaziniEvents/images/date_pack3.png",
    features: ["Luxury Medjool Dates", "Belgian Chocolates", "Premium Dried Fruits", "Decorated Tray", "Fresh Flowers", "Luxury Wrapping", "Personalized Card"],
    featured: true,
  },
  {
    id: 3,
    name: "Royal Prestige",
    category: "Date Prestige",
    badge: "Best Value",
    startingPrice: 1499,
    currency: "DH",
    description: "The ultimate gift experience with crystal tray, fresh flowers, and personal delivery.",
    coverImage: "/MaziniEvents/images/date_pack2.png",
    features: ["Luxury Medjool Dates", "Belgian Chocolates", "Premium Nuts", "Crystal Tray", "Fresh Flowers", "Luxury Decoration", "Personalized Name", "Delivery Included"],
    featured: true,
  },
  {
    id: 4,
    name: "Silver Wedding",
    category: "Wedding",
    startingPrice: 2500,
    currency: "DH",
    description: "Perfect for intimate weddings up to 50 guests.",
    coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    features: ["Welcome Sign", "Date Prestige", "Chocolate Station", "5 Decorated Trays", "Floral Decoration"],
    featured: true,
  },
  {
    id: 5,
    name: "Gold Wedding",
    category: "Wedding",
    badge: "Most Popular",
    startingPrice: 4500,
    currency: "DH",
    description: "Complete luxury wedding setup for unforgettable celebrations.",
    coverImage: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80",
    features: ["Luxury Welcome Sign", "Luxury Date Prestige", "Premium Chocolates", "8 Decorated Trays", "Fresh Flowers", "Decorative Candles", "Luxury Table Styling"],
    featured: true,
  },
  {
    id: 6,
    name: "Royal Wedding",
    category: "Wedding",
    badge: "Premium",
    startingPrice: 7500,
    currency: "DH",
    description: "The ultimate royal wedding experience with VIP styling and complete floral decoration.",
    coverImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
    features: ["Giant Welcome Sign", "Royal Date Prestige", "Premium Belgian Chocolates", "12 Decorated Trays", "Complete Floral Decoration", "Luxury Candles", "Gold Accessories", "VIP Styling"],
    featured: true,
  },
  {
    id: 7,
    name: "Party for 7 Guests",
    category: "Party",
    startingPrice: 1800,
    currency: "DH",
    description: "Complete party decoration for intimate celebrations.",
    coverImage: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
    features: ["Table Decoration", "Welcome Sign", "Date Prestige", "Empty Luxury Plates", "Candles", "Flowers", "Balloons", "Cutlery", "Napkins"],
    featured: true,
  },
  {
    id: 8,
    name: "Party for 12 Guests",
    category: "Party",
    badge: "Most Popular",
    startingPrice: 3200,
    currency: "DH",
    description: "Enhanced party setup for medium gatherings with premium extras.",
    coverImage: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&q=80",
    features: ["Everything from 7 Guests", "Larger Decoration", "Premium Flowers", "Premium Balloons", "Luxury Centerpieces", "Photo Corner"],
    featured: true,
  },
  {
    id: 9,
    name: "Party for 20 Guests",
    category: "Party",
    badge: "VIP",
    startingPrice: 5500,
    currency: "DH",
    description: "Grand party experience with complete decoration and photo area.",
    coverImage: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    features: ["Complete Decoration", "Welcome Sign", "Date Prestige", "Luxury Plates", "Premium Flowers", "Balloon Arch", "Decorative Lighting", "Luxury Table Styling", "Cake Table Decoration", "Photo Area"],
    featured: true,
  },
  {
    id: 10,
    name: "Couple Picnic",
    category: "Luxury Picnic",
    startingPrice: 1200,
    currency: "DH",
    description: "A romantic outdoor escape for two, designed with flowers and candlelight.",
    coverImage: "https://images.unsplash.com/photo-1472653431158-6364773b2a56?w=800&q=80",
    features: ["Setup for 2 Guests", "3 Hours Duration", "Floral Decoration", "Candles", "Cushions", "Luxury Table Setup", "Welcome Sign"],
    featured: false,
  },
  {
    id: 11,
    name: "Family Picnic",
    category: "Luxury Picnic",
    badge: "Popular",
    startingPrice: 2200,
    currency: "DH",
    description: "A premium family experience in nature with complete comfort setup.",
    coverImage: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&q=80",
    features: ["Setup for up to 6 Guests", "4 Hours Duration", "Floral Decoration", "Candles", "Premium Cushions", "Picnic Baskets", "Table Setup"],
    featured: false,
  },
  {
    id: 12,
    name: "Proposal Picnic",
    category: "Luxury Picnic",
    badge: "Special",
    startingPrice: 1800,
    currency: "DH",
    description: "A magical setup for the most important question of your life.",
    coverImage: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80",
    features: ["Setup for 2 Guests", "3 Hours Duration", "Rose Petal Path", "Luxury Flowers", "Candle Arrangement", "Champagne Setup", "Personalized Sign"],
    featured: false,
  },
];

export function getFeaturedPackages(): Package[] {
  return packages.filter((p) => p.featured);
}

export function getPackagesByCategory(): Record<string, Package[]> {
  return packages.reduce<Record<string, Package[]>>((acc, pkg) => {
    if (!acc[pkg.category]) acc[pkg.category] = [];
    acc[pkg.category].push(pkg);
    return acc;
  }, {});
}
