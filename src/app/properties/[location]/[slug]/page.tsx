import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { getPropertyBySlug, properties } from "@/data/properties";
import { getPropertyLandingData } from "@/data/properties/index";
import { PropertyLandingVerticalTemplate } from "@/components/property-landing/PropertyLandingVerticalTemplate";
import { FAQ } from "@/components/faq/FAQ";
import { placeholderFAQ } from "@/data/faq";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";

type Props = {
  params: Promise<{ location: string; slug: string }>;
};

export async function generateStaticParams() {
  return properties.map((p) => ({
    location: p.locationSlug,
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location, slug } = await params;
  const landingData = getPropertyLandingData(location, slug);
  const property = getPropertyBySlug(location, slug);

  if (landingData) {
    return {
      title: landingData.seo.title,
      description: landingData.seo.description,
    };
  }

  if (!property) return { title: "Property Not Found" };

  return {
    title: property.name,
    description: `${property.name} in ${property.locationName}. ${property.sqftRange}, ${property.bedrooms}, ${property.priceRange}.`,
  };
}

function PropertyPlaceholderPage({
  property,
}: {
  property: NonNullable<ReturnType<typeof getPropertyBySlug>>;
}) {
  return (
    <>
      <div className="border-b border-beige-200 bg-beige-100 py-4">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 text-sm text-stone-500 sm:px-6 lg:px-8">
          <Link href="/" className="hover:text-gold-600">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/new-properties" className="hover:text-gold-600">
            New Properties
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link
            href={`/new-properties/${property.locationSlug}`}
            className="hover:text-gold-600"
          >
            {property.locationName}
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="font-medium text-foreground">{property.name}</span>
        </div>
      </div>

      <div className="relative h-[40vh] min-h-[300px] lg:h-[50vh]">
        <Image
          src={property.image}
          alt={property.name}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-wider text-gold-400">
              {property.locationName}
            </p>
            <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {property.name}
            </h1>
          </FadeIn>
        </div>
      </div>

      <div className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
              Coming Soon
            </p>
            <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
              Full details for {property.name} are on the way
            </h2>
            <p className="mt-4 text-base leading-relaxed text-stone-500">
              We&apos;re preparing a comprehensive overview of this development.
              In the meantime, reach out to us for exclusive previews and early
              bird packages.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href={WHATSAPP_URL} external showArrow>
                Enquire on WhatsApp
              </Button>
              <Button
                href={`/new-properties/${property.locationSlug}`}
                variant="outline"
              >
                Back to {property.locationName}
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>

      <FAQ items={placeholderFAQ} />
    </>
  );
}

export default async function PropertyLandingPage({ params }: Props) {
  const { location, slug } = await params;
  const landingData = getPropertyLandingData(location, slug);

  if (landingData) {
    return <PropertyLandingVerticalTemplate data={landingData} />;
  }

  const property = getPropertyBySlug(location, slug);
  if (!property) notFound();

  return <PropertyPlaceholderPage property={property} />;
}
