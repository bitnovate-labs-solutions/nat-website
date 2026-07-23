export type Location = {
  slug: string;
  name: string;
  description: string;
  image: string;
  propertyCount: number;
};

export const locations: Location[] = [
  {
    slug: "bangsar",
    name: "Bangsar",
    description:
      "A vibrant urban enclave known for premium dining, boutique shopping, and excellent connectivity.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    propertyCount: 4,
  },
  {
    slug: "seputeh",
    name: "Seputeh", 
    description:
      "A well-established residential area with lush greenery and easy access to the city centre.",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
    propertyCount: 3,
  },
  {
    slug: "damansara-heights",
    name: "Damansara Heights",
    description:
      "One of KL's most prestigious addresses, offering luxury living and serene hilltop views.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
    propertyCount: 3,
  },
  {
    slug: "petaling-jaya",
    name: "Petaling Jaya",
    description:
      "A thriving satellite city with modern developments, great amenities, and family-friendly neighbourhoods.",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
    propertyCount: 3,
  },
];

export function getLocationBySlug(slug: string) {
  return locations.find((l) => l.slug === slug);
}
