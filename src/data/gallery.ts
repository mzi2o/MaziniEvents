export interface GalleryItem {
  id: number;
  imageUrl: string;
  title: string;
  category: string;
  featured: boolean;
}

export const gallery: GalleryItem[] = [
  { id: 1, imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80", title: "Royal Wedding Setup", category: "Wedding", featured: true },
  { id: 2, imageUrl: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80", title: "Garden Wedding Ceremony", category: "Wedding", featured: true },
  { id: 3, imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80", title: "Intimate Wedding Reception", category: "Wedding", featured: true },
  { id: 4, imageUrl: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80", title: "Date Prestige Royal Box", category: "Date Prestige", featured: true },
  { id: 5, imageUrl: "https://images.unsplash.com/photo-1548783300-a9e0a2c33c0d?w=800&q=80", title: "Luxury Chocolate Collection", category: "Chocolate", featured: true },
  { id: 6, imageUrl: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80", title: "Birthday Party Setup", category: "Party", featured: true },
  { id: 7, imageUrl: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&q=80", title: "Celebration Table Decor", category: "Party", featured: true },
  { id: 8, imageUrl: "https://images.unsplash.com/photo-1472653431158-6364773b2a56?w=800&q=80", title: "Luxury Outdoor Picnic", category: "Picnic", featured: true },
  { id: 9, imageUrl: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&q=80", title: "Romantic Picnic Setup", category: "Picnic", featured: true },
  { id: 10, imageUrl: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80", title: "Engagement Celebration", category: "Wedding", featured: false },
  { id: 11, imageUrl: "https://images.unsplash.com/photo-1563807894768-f28bee0d37b6?w=800&q=80", title: "Chocolate Gift Box", category: "Chocolate", featured: false },
  { id: 12, imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80", title: "Welcome Sign Custom", category: "Welcome Sign", featured: false },
  { id: 13, imageUrl: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80", title: "Summer Wedding", category: "Wedding", featured: false },
  { id: 14, imageUrl: "https://images.unsplash.com/photo-1472653431158-6364773b2a56?w=600&q=80", title: "Boho Picnic", category: "Picnic", featured: false },
  { id: 15, imageUrl: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80", title: "Surprise Party", category: "Party", featured: false },
  { id: 16, imageUrl: "https://images.unsplash.com/photo-1548783300-a9e0a2c33c0d?w=600&q=80", title: "Premium Date Tray", category: "Date Prestige", featured: false },
];

export function getFeaturedGallery(): GalleryItem[] {
  return gallery.filter((g) => g.featured);
}
