"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { locations } from "@/data/locations";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function LocationGrid() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Locations"
            title="Explore our featured neighbourhoods"
            description="Discover handpicked developments in Kuala Lumpur and Petaling Jaya's most desirable areas."
          />
        </FadeIn>

        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((location) => (
            <StaggerItem key={location.slug}>
              <Link
                href={`/new-properties/${location.slug}`}
                className="group block overflow-hidden rounded-2xl border border-beige-300 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={location.image}
                    alt={location.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-bold text-white">
                      {location.name}
                    </h3>
                    <p className="text-xs text-white/70">
                      {location.propertyCount} developments
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4">
                  <p className="line-clamp-2 text-sm text-stone-500">
                    {location.description}
                  </p>
                  <ArrowRight className="h-4 w-4 shrink-0 text-gold-500 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
