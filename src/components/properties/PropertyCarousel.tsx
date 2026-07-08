"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Property } from "@/data/properties";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type PropertyCarouselProps = {
  properties: Property[];
  locationName: string;
};

export function PropertyCarousel({
  properties,
  locationName,
}: PropertyCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection);
      setCurrent(
        (prev) =>
          (prev + newDirection + properties.length) % properties.length,
      );
    },
    [properties.length],
  );

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 8000);
    return () => clearInterval(timer);
  }, [paginate]);

  const property = properties[current];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-3xl border border-beige-300 bg-white shadow-xl">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={property.slug}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Mobile: stacked layout */}
            <div className="flex flex-col lg:hidden">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={property.image}
                  alt={property.name}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold-600">
                  {locationName}
                </p>
                <h2 className="mt-2 text-2xl font-bold text-foreground">
                  {property.name}
                </h2>
                <dl className="mt-4 space-y-2 text-sm text-stone-400">
                  <div className="flex justify-between">
                    <dt>Square Feet</dt>
                    <dd className="text-stone-600">{property.sqftRange}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Bedrooms</dt>
                    <dd className="text-stone-600">{property.bedrooms}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Price Range</dt>
                    <dd className="font-medium text-stone-600">
                      {property.priceRange}
                    </dd>
                  </div>
                </dl>
                <Button
                  href={`/properties/${property.locationSlug}/${property.slug}`}
                  className="mt-6 w-full"
                  showArrow
                >
                  Find out more
                </Button>
              </div>
            </div>

            {/* Desktop: side-by-side like reference image */}
            <div className="hidden lg:grid lg:grid-cols-2">
              <div className="relative min-h-[480px]">
                <Image
                  src={property.image}
                  alt={property.name}
                  fill
                  className="object-cover"
                  sizes="50vw"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center p-10 xl:p-14">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
                  {locationName}
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground xl:text-4xl">
                  {property.name}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-stone-500">
                  {property.description}
                </p>
                <dl className="mt-6 space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <dt className="w-28 text-stone-400">Square Feet</dt>
                    <dd className="text-stone-600">{property.sqftRange}</dd>
                  </div>
                  <div className="flex items-center gap-3">
                    <dt className="w-28 text-stone-400">Bedrooms</dt>
                    <dd className="text-stone-600">{property.bedrooms}</dd>
                  </div>
                  <div className="flex items-center gap-3">
                    <dt className="w-28 text-stone-400">Price Range</dt>
                    <dd className="font-medium text-stone-600">
                      {property.priceRange}
                    </dd>
                  </div>
                </dl>
                <div className="mt-8">
                  <Button
                    href={`/properties/${property.locationSlug}/${property.slug}`}
                    showArrow
                  >
                    Find out more
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-2">
          {properties.map((p, i) => (
            <button
              key={p.slug}
              type="button"
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                i === current
                  ? "w-8 bg-gold-500"
                  : "w-2 bg-beige-400 hover:bg-beige-500",
              )}
              aria-label={`Go to ${p.name}`}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => paginate(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-beige-300 bg-white text-stone-600 transition-colors hover:border-gold-500 hover:text-gold-600"
            aria-label="Previous property"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => paginate(1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-beige-300 bg-white text-stone-600 transition-colors hover:border-gold-500 hover:text-gold-600"
            aria-label="Next property"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Thumbnail strip - desktop only */}
      <div className="mt-6 hidden gap-3 lg:flex">
        {properties.map((p, i) => (
          <button
            key={p.slug}
            type="button"
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className={cn(
              "flex-1 overflow-hidden rounded-xl border-2 transition-all duration-300",
              i === current
                ? "border-gold-500 shadow-md"
                : "border-transparent opacity-60 hover:opacity-100",
            )}
          >
            <div className="relative aspect-[16/9]">
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>
            <p className="truncate px-3 py-2 text-left text-xs font-medium text-stone-600">
              {p.name}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
