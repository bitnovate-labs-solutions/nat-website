export type PropertyHighlight = {
  icon: string;
  label: string;
};

export type PropertyCTA = {
  label: string;
  href?: string;
  whatsapp?: boolean;
};

export type PropertyUSP = {
  icon: string;
  title: string;
  description: string;
};

export type PropertyFloorPlan = {
  type: string;
  sqft: string;
  price: string;
  layout: string;
  image: string;
};

export type PropertyResidence = {
  name: string;
  image: string;
  features: string[];
  cta: PropertyCTA;
};

export type PropertyAmenity = {
  label: string;
  image: string;
};

export type PropertyProximityHighlight = {
  title: string;
  description: string;
  image: string;
  cta: PropertyCTA;
};

export type PropertyLifestyleBlock = {
  title: string;
  description: string;
  image: string;
  cta?: PropertyCTA;
};

export type PropertyFAQItem = {
  question: string;
  answer: string;
};

export type PropertyLandingData = {
  slug: string;
  locationSlug: string;
  locationName: string;
  name: string;
  seo: {
    title: string;
    description: string;
  };
  images: {
    basePath: string;
  };
  hero: {
    backgroundImage: string;
    subtitle: string;
    highlights: PropertyHighlight[];
    ctas: {
      brochure: PropertyCTA;
      whatsapp: PropertyCTA;
    };
  };
  intro: {
    heading: string;
    body: string;
    quote?: string;
    image: string;
    linkLabel?: string;
    linkHref?: string;
  };
  panorama: {
    image: string;
    caption: string;
  };
  usps: {
    heading: string;
    items: PropertyUSP[];
  };
  ctaBanner: {
    backgroundImage: string;
    headline: string;
    subtext: string;
    button: PropertyCTA;
    agentImage?: string;
  };
  floorPlans: {
    heading: string;
    items: PropertyFloorPlan[];
    viewAllLabel?: string;
    viewAllHref?: string;
  };
  residences: {
    heading: string;
    items: PropertyResidence[];
  };
  leadForm: {
    backgroundImage: string;
    heading: string;
    subheading?: string;
    benefits: string[];
    submitLabel: string;
    subject: string;
  };
  amenities: {
    heading: string;
    description?: string;
    items: PropertyAmenity[];
    mapCta?: PropertyCTA;
  };
  maps: {
    heading?: string;
    areaMap: string;
    transitMap: string;
  };
  proximityHighlights: PropertyProximityHighlight[];
  lifestyle: {
    heading: string;
    items: PropertyLifestyleBlock[];
  };
  gallery: {
    heading: string;
    images: string[];
    viewMoreLabel?: string;
    viewMoreHref?: string;
  };
  faq: {
    heading: string;
    description?: string;
    items: PropertyFAQItem[];
    cta: PropertyCTA;
  };
  finalCta: {
    backgroundImage: string;
    whatsapp: PropertyCTA;
    formHeading: string;
    formSubheading: string;
    submitLabel: string;
    subject: string;
  };
};
