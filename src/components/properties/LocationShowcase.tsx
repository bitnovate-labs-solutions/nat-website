"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { locations } from "@/data/locations";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export function LocationShowcase() {
  return (
    <StaggerContainer className="grid gap-4 sm:grid-cols-2">
      {locations.map((location) => (
        <StaggerItem key={location.slug}>
          <Link
            href={`/new-properties/${location.slug}`}
            className="group relative block overflow-hidden rounded-2xl"
          >
            <div className="relative aspect-[16/9] sm:aspect-[2/1]">
              <Image
                src={location.image}
                alt={location.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 text-gold-400">
                  <MapPin className="h-4 w-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    {location.propertyCount} Properties
                  </span>
                </div>
                <h3 className="mt-2 text-2xl font-bold text-white">
                  {location.name}
                </h3>
                <p className="mt-1 text-sm text-white/70 line-clamp-2">
                  {location.description}
                </p>
              </div>
            </div>
          </Link>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
