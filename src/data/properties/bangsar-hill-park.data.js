/**
 * Bangsar Hill Park — Property Landing Page Data
 *
 * Copy this entire file to update content for this property.
 * Only edit the values below — do not modify the template components.
 *
 * Images live in: public/images/new-properties/bangsar/bangsar-hill-park/
 */

const IMG = "/images/new-properties/bangsar/bangsar-hill-park";

/** @type {import('@/types/property-landing').PropertyLandingData} */
const bangsarHillParkData = {
  slug: "bangsar-hill-park",
  locationSlug: "bangsar",
  locationName: "Bangsar",
  name: "Bangsar Hill Park",

  whatsapp: {
    agentName: "Nate",
    messageTemplate:
      "Hi {agentName}. I'm interested in {propertyName}, please send me more details. I saw it from your website, thanks!",
  },

  seo: {
    title: "Bangsar Hill Park | New Launch in Bangsar, Kuala Lumpur",
    description:
      "Freehold residences in Bangsar from RM 620,000. 2–4 bedrooms, 917–1,478 sq.ft. Minutes to LRT, Mid Valley & KL Sentral.",
  },

  images: {
    basePath: IMG,
  },

  hero: {
    backgroundImage: `${IMG}/hero-skyline.webp`,
    subtitle: "Freehold | Residential Title",
    highlights: [
      { icon: "bed", label: "2–4 Bedrooms" },
      { icon: "ruler", label: "917 – 1,478 sq.ft" },
      { icon: "train", label: "Connected to LRT" },
      { icon: "map-pin", label: "Lorong Maarof, Bangsar" },
      { icon: "building", label: "2 Residential Towers" },
    ],
    ctas: {
      brochure: {
        label: "Download Brochure",
        href: "#register",
      },
      whatsapp: {
        label: "WhatsApp for e-Brochure",
        whatsapp: true,
      },
    },
  },

  intro: {
    heading: "A place to call home in the heart of Bangsar",
    body: "Bangsar Hill Park offers a rare opportunity to own a freehold residence in one of Kuala Lumpur's most coveted neighbourhoods. Surrounded by lush greenery yet steps from vibrant dining, retail, and transit — this is city living at its finest.",
    quote:
      "Where contemporary design meets the timeless charm of Bangsar.",
    image: `${IMG}/section-1-luxury-home-bangsar.webp`,
    linkLabel: "Find out more",
    linkHref: "#floor-plans",
  },

  panorama: {
    image: `${IMG}/section-2-banner-kuala-lumpur-skyline-view-city-skyscrapers-with-beautiful-sky-afternoon.webp`,
    caption: "Your window to the Kuala Lumpur skyline",
  },

  usps: {
    heading: "Why buy / invest in Bangsar Hill Park?",
    items: [
      {
        icon: "key",
        title: "Freehold Title",
        description:
          "Secure freehold land title in a prime Bangsar address with long-term value appreciation.",
      },
      {
        icon: "train",
        title: "LRT Connectivity",
        description:
          "Walking distance to Bangsar LRT station for seamless access across the Klang Valley.",
      },
      {
        icon: "trees",
        title: "Greenery & Parks",
        description:
          "Landscaped gardens and themed roof terraces offering a serene escape above the city.",
      },
      {
        icon: "utensils",
        title: "Vibrant F&B Scene",
        description:
          "Telawi, Bangsar Village, and Jalan Maarof's acclaimed restaurants at your doorstep.",
      },
      {
        icon: "shield",
        title: "Reputable Developer",
        description:
          "Built by an established developer with a proven track record of quality craftsmanship.",
      },
      {
        icon: "trending-up",
        title: "Strong Rental Yield",
        description:
          "High demand from expatriates and professionals ensures attractive rental returns.",
      },
    ],
  },

  ctaBanner: {
    backgroundImage: `${IMG}/section-3-dynamic-section-lorong-maarof-living.webp`,
    headline: "Your dream home awaits at Bangsar Hill Park",
    subtext:
      "Limited units available. Register your interest today for exclusive previews and early bird pricing.",
    button: {
      label: "Register Your Interest",
      href: "#register",
    },
    agentImage: `${IMG}/section-3-dynamic-agent-photo.webp`,
  },

  floorPlans: {
    heading: "Discover the Floor Plans of Bangsar Hill Park",
    items: [
      {
        type: "Type A",
        sqft: "917 sq.ft",
        price: "From RM 620,000",
        layout: "2 Bedrooms · 2 Bathrooms",
        image: `${IMG}/section-4-917sf-1.webp`,
      },
      {
        type: "Type B",
        sqft: "978 sq.ft",
        price: "From RM 720,000",
        layout: "2 Bedrooms · 2 Bathrooms",
        image: `${IMG}/section-4-978sf.webp`,
      },
      {
        type: "Type C",
        sqft: "1,345 sq.ft",
        price: "From RM 980,000",
        layout: "3 Bedrooms · 2 Bathrooms",
        image: `${IMG}/section-4-1345sf-1.webp`,
      },
    ],
    viewAllLabel: "View all floor plans",
    viewAllHref: "#register",
  },

  residences: {
    heading: "The Residences",
    items: [
      {
        name: "Parkside Tower",
        image: `${IMG}/section-5-parkside-facade.webp`,
        features: [
          "Pool-facing units with city views",
          "Premium finishes throughout",
          "Direct access to podium facilities",
        ],
        cta: { label: "Find out more", href: "#register" },
      },
      {
        name: "Khaya Tower",
        image: `${IMG}/section-5-Khaya-facade.webp`,
        features: [
          "Hill-facing units with greenery views",
          "Larger layouts for families",
          "Private lift lobby access",
        ],
        cta: { label: "Find out more", href: "#register" },
      },
    ],
  },

  leadForm: {
    backgroundImage: `${IMG}/section-6-mock-up-poster-modern-dining-room-interior-design-with-white-empty-wall-scaled.webp`,
    heading: "Don't miss out!",
    subheading: "Register your interest for exclusive updates",
    benefits: [
      "First access to new unit releases",
      "Early bird pricing & rebates",
      "Priority viewing appointments",
      "Free consultation on financing options",
    ],
    submitLabel: "Register Now",
    subject: "Bangsar Hill Park — Register Interest",
  },

  amenities: {
    heading: "Located in the heart of Bangsar",
    description:
      "Everything you need is just minutes away — from world-class shopping to international schools.",
    items: [
      {
        label: "Bangsar Village",
        image: `${IMG}/section-7-usp-1-bangsar-village.webp`,
      },
      {
        label: "Bangsar LRT Station",
        image: `${IMG}/section-7-usp-2-bangsar-lrt.webp`,
      },
      {
        label: "Jalan Telawi",
        image: `${IMG}/section-7-usp-3-telawi.webp`,
      },
    ],
    mapCta: {
      label: "View neighbourhood map",
      href: "#location",
    },
  },

  maps: {
    heading: "Seamless Connectivity",
    areaMap: `${IMG}/section-8-location-seamless-connectivity.webp`,
    transitMap: `${IMG}/section-8-connected-to-lrt-map-01.webp`,
  },

  proximityHighlights: [
    {
      title: "5 mins to Mid Valley Megamall",
      description:
        "One of KL's largest shopping destinations with over 430 stores, cinemas, and dining options.",
      image: `${IMG}/section-8-midvalley.webp`,
      cta: { label: "Enquire Now", href: "#register" },
    },
    {
      title: "Near KL Sentral",
      description:
        "Malaysia's largest transit hub connecting KLIA, ERL, MRT, LRT, and KTM services.",
      image: `${IMG}/section-8-Kl-sentral.webp`,
      cta: { label: "Enquire Now", href: "#register" },
    },
    {
      title: "10 mins to KLCC",
      description:
        "The iconic Petronas Twin Towers, Suria KLCC, and Kuala Lumpur City Centre.",
      image: `${IMG}/section-8-klcc.webp`,
      cta: { label: "Enquire Now", href: "#register" },
    },
    {
      title: "45 mins to KLIA",
      description:
        "Direct highway access to Kuala Lumpur International Airport for seamless travel.",
      image: `${IMG}/section-8-klia.webp`,
      cta: { label: "Enquire Now", href: "#register" },
    },
  ],

  lifestyle: {
    heading: "World-Class Facilities",
    items: [
      {
        title: "Water Feature & Landscape",
        description:
          "Serene water features and lush landscaping create a resort-like ambience.",
        image: `${IMG}/worldclass-01-water-feature.webp`,
      },
      {
        title: "Grand Lobby & Concierge",
        description:
          "Double-volume lobby with 24-hour concierge and security services.",
        image: `${IMG}/worldclass-02-lobby-concierge.webp`,
      },
      {
        title: "Covered Drop-off",
        description:
          "Elegant covered drop-off area for residents and guests.",
        image: `${IMG}/worldclass-03-dropoff.webp`,
      },
      {
        title: "Chill Out Zone",
        description:
          "Relaxing communal spaces designed for leisure and social gatherings.",
        image: `${IMG}/worldclass-04-chill-out-zone.webp`,
      },
      {
        title: "Infinity Pool",
        description:
          "Stunning infinity pool overlooking the Bangsar skyline.",
        image: `${IMG}/worldclass-05-infinity-pool.webp`,
        cta: { label: "View Gallery", href: "#gallery" },
      },
      {
        title: "Fully Equipped Gymnasium",
        description:
          "State-of-the-art fitness centre with modern equipment.",
        image: `${IMG}/worldclass-06-gymnasium.webp`,
      },
      {
        title: "Themed Roof Garden",
        description:
          "Sky garden with panoramic views — perfect for evening relaxation.",
        image: `${IMG}/worldclass-07-themed-roof-garden.webp`,
      },
    ],
  },

  gallery: {
    heading: "Photo Gallery",
    images: [
      `${IMG}/worldclass-01-water-feature.webp`,
      `${IMG}/worldclass-05-infinity-pool.webp`,
      `${IMG}/worldclass-02-lobby-concierge.webp`,
      `${IMG}/section-5-parkside-facade.webp`,
      `${IMG}/section-1-luxury-home-bangsar.webp`,
      `${IMG}/worldclass-07-themed-roof-garden.webp`,
    ],
    viewMoreLabel: "View more photos",
    viewMoreHref: "#register",
  },

  faq: {
    heading: "Frequently Asked Questions",
    description: "Everything you need to know about Bangsar Hill Park.",
    items: [
      {
        question: "What is the expected completion date?",
        answer:
          "The project is targeted for completion in Q4 2027. Contact us for the latest construction progress updates.",
      },
      {
        question: "Is this a freehold or leasehold property?",
        answer:
          "Bangsar Hill Park is a freehold development, offering permanent land ownership.",
      },
      {
        question: "What payment schemes are available?",
        answer:
          "Progressive payment scheme tied to construction milestones. Early bird packages and special financing may be available for qualified buyers.",
      },
      {
        question: "What facilities are included?",
        answer:
          "Infinity pool, gymnasium, themed roof garden, grand lobby with concierge, chill-out zones, water features, and 24-hour security.",
      },
      {
        question: "How do I schedule a showroom visit?",
        answer:
          "Reach out via WhatsApp or fill in the form below. We'll arrange a private viewing at your convenience.",
      },
    ],
    cta: {
      label: "Contact us for more info",
      whatsapp: true,
    },
  },

  finalCta: {
    backgroundImage: `${IMG}/footer-lorong-maarof-living.webp`,
    whatsapp: {
      label: "Chat on WhatsApp",
      whatsapp: true,
    },
    formHeading: "Email us and we'll get back to you",
    formSubheading:
      "Prefer email? Leave your details and we'll respond within 24 hours.",
    submitLabel: "Send Enquiry",
    subject: "Bangsar Hill Park — Email Enquiry",
  },
};

export default bangsarHillParkData;
