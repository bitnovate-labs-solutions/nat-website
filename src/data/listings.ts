export type Listing = {
  id: string;
  title: string;
  location: string;
  area: string;
  price: number;
  pricePerSqft: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  type: string;
  listingType: "sale" | "rent";
  isNew: boolean;
  image: string;
  images: number;
  agent: string;
  agentAvatar: string;
  listedDaysAgo: number;
  developmentListings?: number;
};

export const listings: Listing[] = [
  {
    id: "1",
    title: "Desa Green",
    location: "Taman Desa, Kuala Lumpur",
    area: "Kuala Lumpur",
    price: 520000,
    pricePerSqft: 556,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 935,
    type: "Service Residence",
    listingType: "sale",
    isNew: true,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    images: 10,
    agent: "Nat Tan",
    agentAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    listedDaysAgo: 4,
    developmentListings: 58,
  },
  {
    id: "2",
    title: "Bangsar South Tower",
    location: "Bangsar South, Kuala Lumpur",
    area: "Bangsar",
    price: 890000,
    pricePerSqft: 712,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1250,
    type: "Condominium",
    listingType: "sale",
    isNew: true,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
    images: 15,
    agent: "Nat Tan",
    agentAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    listedDaysAgo: 2,
    developmentListings: 24,
  },
  {
    id: "3",
    title: "The Horizon PJ",
    location: "Section 14, Petaling Jaya",
    area: "Petaling Jaya",
    price: 680000,
    pricePerSqft: 598,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1137,
    type: "Condominium",
    listingType: "sale",
    isNew: false,
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    images: 8,
    agent: "Nat Tan",
    agentAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    listedDaysAgo: 7,
    developmentListings: 31,
  },
  {
    id: "4",
    title: "Damansara Heights Loft",
    location: "Damansara Heights, Kuala Lumpur",
    area: "Damansara Heights",
    price: 2100000,
    pricePerSqft: 875,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2400,
    type: "Penthouse",
    listingType: "sale",
    isNew: true,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    images: 20,
    agent: "Nat Tan",
    agentAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    listedDaysAgo: 1,
    developmentListings: 12,
  },
  {
    id: "5",
    title: "Seputeh Vista",
    location: "Old Klang Road, Kuala Lumpur",
    area: "Seputeh",
    price: 450000,
    pricePerSqft: 500,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 900,
    type: "Apartment",
    listingType: "sale",
    isNew: false,
    image:
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=800&q=80",
    images: 6,
    agent: "Nat Tan",
    agentAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    listedDaysAgo: 10,
    developmentListings: 45,
  },
  {
    id: "6",
    title: "Mont Kiara Residence",
    location: "Mont Kiara, Kuala Lumpur",
    area: "Mont Kiara",
    price: 3500,
    pricePerSqft: 3.5,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1000,
    type: "Condominium",
    listingType: "rent",
    isNew: false,
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    images: 12,
    agent: "Nat Tan",
    agentAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    listedDaysAgo: 3,
    developmentListings: 18,
  },
];
