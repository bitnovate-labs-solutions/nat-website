import Image from "next/image";
import Link from "next/link";
import type { PropertyLandingData } from "@/types/property-landing";
import { resolveCtaHref, isExternalCta } from "@/lib/property-landing";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

type Props = {
  data: PropertyLandingData["amenities"];
};

export function VerticalAmenitiesSection({ data }: Props) {
  return (
    <section className="bg-beige-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {data.heading}
          </h2>
          {data.description && (
            <p className="mx-auto mt-4 max-w-2xl text-base text-stone-500">
              {data.description}
            </p>
          )}
        </FadeIn>

        <StaggerContainer className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item) => (
            <StaggerItem key={item.label}>
              <div className="group overflow-hidden rounded-2xl border border-beige-300 bg-white">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <p className="p-4 text-center text-sm font-semibold text-foreground">
                  {item.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {data.mapCta && (
          <FadeIn className="mt-8 text-center">
            {isExternalCta(data.mapCta) ? (
              <a
                href={resolveCtaHref(data.mapCta)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border-2 border-gold-500 px-6 py-3 text-sm font-semibold text-gold-600 transition-colors hover:bg-gold-500 hover:text-white"
              >
                {data.mapCta.label}
              </a>
            ) : (
              <Link
                href={resolveCtaHref(data.mapCta)}
                className="inline-flex rounded-full border-2 border-gold-500 px-6 py-3 text-sm font-semibold text-gold-600 transition-colors hover:bg-gold-500 hover:text-white"
              >
                {data.mapCta.label}
              </Link>
            )}
          </FadeIn>
        )}
      </div>
    </section>
  );
}
