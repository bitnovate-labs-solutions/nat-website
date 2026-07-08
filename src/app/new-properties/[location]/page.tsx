import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getLocationBySlug } from "@/data/locations";
import { getPropertiesByLocation } from "@/data/properties";
import { PropertyCarousel } from "@/components/properties/PropertyCarousel";
import { FAQ } from "@/components/faq/FAQ";
import { propertyFAQ } from "@/data/faq";
import { FadeIn } from "@/components/ui/FadeIn";

type Props = {
  params: Promise<{ location: string }>;
};

export async function generateStaticParams() {
  return [
    { location: "bangsar" },
    { location: "seputeh" },
    { location: "damansara-heights" },
    { location: "petaling-jaya" },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location: locationSlug } = await params;
  const location = getLocationBySlug(locationSlug);

  if (!location) return { title: "Location Not Found" };

  return {
    title: `New Properties in ${location.name}`,
    description: `Explore new property developments in ${location.name}. ${location.description}`,
  };
}

export default async function LocationPropertiesPage({ params }: Props) {
  const { location: locationSlug } = await params;
  const location = getLocationBySlug(locationSlug);

  if (!location) notFound();

  const properties = getPropertiesByLocation(locationSlug);

  return (
    <>
      <div className="border-b border-beige-200 bg-beige-100 py-4">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 text-sm text-stone-500 sm:px-6 lg:px-8">
          <Link href="/" className="hover:text-gold-600">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/new-properties" className="hover:text-gold-600">
            New Properties
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="font-medium text-foreground">{location.name}</span>
        </div>
      </div>

      <div className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              New Properties in {location.name}
            </h1>
            <p className="mt-3 max-w-2xl text-base text-stone-500">
              {location.description}
            </p>
          </FadeIn>

          <div className="mt-10">
            <PropertyCarousel
              properties={properties}
              locationName={location.name}
            />
          </div>
        </div>
      </div>

      <FAQ
        items={propertyFAQ}
        title={`FAQ about ${location.name} properties`}
        description={`Common questions about new developments in ${location.name}.`}
      />
    </>
  );
}
