import Image from "next/image";
import Link from "next/link";
import type { PropertyLandingData } from "@/types/property-landing";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

type Props = {
  data: PropertyLandingData["gallery"];
};

export function VerticalGallerySection({ data }: Props) {
  return (
    <section id="gallery" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {data.heading}
          </h2>
        </FadeIn>

        <StaggerContainer className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {data.images.map((src, index) => (
            <StaggerItem
              key={src}
              className={index === 0 ? "col-span-2 row-span-2 sm:col-span-1 sm:row-span-1" : ""}
            >
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {data.viewMoreLabel && data.viewMoreHref && (
          <FadeIn className="mt-8 text-center">
            <Link
              href={data.viewMoreHref}
              className="text-sm font-semibold text-gold-600 hover:text-gold-700"
            >
              {data.viewMoreLabel} →
            </Link>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
