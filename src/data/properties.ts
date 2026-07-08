export type Property = {
  slug: string;
  name: string;
  locationSlug: string;
  locationName: string;
  image: string;
  sqftRange: string;
  bedrooms: string;
  priceRange: string;
  description: string;
};

export const properties: Property[] = [
  {
    slug: "bangsar-hill-park",
    name: "Bangsar Hill Park",
    locationSlug: "bangsar",
    locationName: "Bangsar",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    sqftRange: "850 – 1,450 sq ft",
    bedrooms: "2 – 4 Bedrooms",
    priceRange: "RM 980,000 – RM 1,850,000",
    description:
      "A contemporary residence nestled in the heart of Bangsar with panoramic city views and premium finishes.",
  },
  {
    slug: "38-bangsar",
    name: "38 Bangsar",
    locationSlug: "bangsar",
    locationName: "Bangsar",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    sqftRange: "720 – 1,200 sq ft",
    bedrooms: "2 – 3 Bedrooms",
    priceRange: "RM 750,000 – RM 1,200,000",
    description:
      "Boutique living at its finest — thoughtfully designed units with resort-style amenities.",
  },
  {
    slug: "parkside-residence",
    name: "Parkside Residence",
    locationSlug: "bangsar",
    locationName: "Bangsar",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    sqftRange: "900 – 1,600 sq ft",
    bedrooms: "3 – 4 Bedrooms",
    priceRange: "RM 1,100,000 – RM 2,000,000",
    description:
      "Green living meets urban convenience with landscaped gardens and family-friendly facilities.",
  },
  {
    slug: "the-lantern",
    name: "The Lantern",
    locationSlug: "bangsar",
    locationName: "Bangsar",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    sqftRange: "650 – 1,100 sq ft",
    bedrooms: "1 – 3 Bedrooms",
    priceRange: "RM 620,000 – RM 1,050,000",
    description:
      "Iconic architecture and smart home features in one of Bangsar's most sought-after addresses.",
  },
  {
    slug: "seputeh-gardens",
    name: "Seputeh Gardens",
    locationSlug: "seputeh",
    locationName: "Seputeh",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
    sqftRange: "800 – 1,300 sq ft",
    bedrooms: "2 – 3 Bedrooms",
    priceRange: "RM 580,000 – RM 950,000",
    description:
      "Tranquil garden-facing residences with excellent connectivity to Mid Valley and KL Sentral.",
  },
  {
    slug: "the-vista-seputeh",
    name: "The Vista Seputeh",
    locationSlug: "seputeh",
    locationName: "Seputeh",
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80",
    sqftRange: "750 – 1,150 sq ft",
    bedrooms: "2 – 3 Bedrooms",
    priceRange: "RM 520,000 – RM 880,000",
    description:
      "Modern towers with sky lounges, infinity pools, and sweeping views of the KL skyline.",
  },
  {
    slug: "greenfield-residence",
    name: "Greenfield Residence",
    locationSlug: "seputeh",
    locationName: "Seputeh",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
    sqftRange: "900 – 1,400 sq ft",
    bedrooms: "3 – 4 Bedrooms",
    priceRange: "RM 680,000 – RM 1,100,000",
    description:
      "Family-oriented development surrounded by mature trees and top international schools.",
  },
  {
    slug: "damansara-heights-residences",
    name: "Damansara Heights Residences",
    locationSlug: "damansara-heights",
    locationName: "Damansara Heights",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=80",
    sqftRange: "1,200 – 2,500 sq ft",
    bedrooms: "3 – 5 Bedrooms",
    priceRange: "RM 1,800,000 – RM 4,500,000",
    description:
      "Ultra-luxury hilltop living with private lifts, concierge services, and bespoke interiors.",
  },
  {
    slug: "the-crest-dh",
    name: "The Crest",
    locationSlug: "damansara-heights",
    locationName: "Damansara Heights",
    image:
      "https://images.unsplash.com/photo-1605276374101-de4c0a9a210d?w=1200&q=80",
    sqftRange: "1,000 – 1,800 sq ft",
    bedrooms: "2 – 4 Bedrooms",
    priceRange: "RM 1,400,000 – RM 2,800,000",
    description:
      "Architectural masterpiece offering panoramic views and world-class wellness facilities.",
  },
  {
    slug: "hillcrest-villas",
    name: "Hillcrest Villas",
    locationSlug: "damansara-heights",
    locationName: "Damansara Heights",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    sqftRange: "2,000 – 3,500 sq ft",
    bedrooms: "4 – 6 Bedrooms",
    priceRange: "RM 3,200,000 – RM 6,000,000",
    description:
      "Exclusive landed villas with private pools, lush landscaping, and 24-hour security.",
  },
  {
    slug: "pj-central",
    name: "PJ Central",
    locationSlug: "petaling-jaya",
    locationName: "Petaling Jaya",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80",
    sqftRange: "700 – 1,200 sq ft",
    bedrooms: "2 – 3 Bedrooms",
    priceRange: "RM 450,000 – RM 780,000",
    description:
      "Affordable luxury in the heart of PJ with direct LRT access and vibrant retail nearby.",
  },
  {
    slug: "ss2-heights",
    name: "SS2 Heights",
    locationSlug: "petaling-jaya",
    locationName: "Petaling Jaya",
    image:
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&q=80",
    sqftRange: "850 – 1,350 sq ft",
    bedrooms: "2 – 4 Bedrooms",
    priceRange: "RM 550,000 – RM 920,000",
    description:
      "Steps from SS2's famous food street — urban convenience meets comfortable family living.",
  },
  {
    slug: "damansara-uptown-suites",
    name: "Damansara Uptown Suites",
    locationSlug: "petaling-jaya",
    locationName: "Petaling Jaya",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
    sqftRange: "600 – 1,000 sq ft",
    bedrooms: "1 – 3 Bedrooms",
    priceRange: "RM 480,000 – RM 850,000",
    description:
      "Serviced suites in the bustling Uptown district, ideal for young professionals and investors.",
  },
];

export function getPropertiesByLocation(locationSlug: string) {
  return properties.filter((p) => p.locationSlug === locationSlug);
}

export function getPropertyBySlug(locationSlug: string, propertySlug: string) {
  return properties.find(
    (p) => p.locationSlug === locationSlug && p.slug === propertySlug,
  );
}
