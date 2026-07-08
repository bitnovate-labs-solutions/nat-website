"use client";

import Image from "next/image";
import {
  Bath,
  Bed,
  Building2,
  Clock,
  Heart,
  GitCompareArrows,
  Lock,
} from "lucide-react";
import type { Listing } from "@/data/listings";
import { formatPrice } from "@/lib/utils";
import { FadeIn } from "@/components/ui/FadeIn";
import { WHATSAPP_URL } from "@/lib/constants";

type ListingCardProps = {
  listing: Listing;
};

export function ListingCard({ listing }: ListingCardProps) {
  return (
    <FadeIn>
      <article className="overflow-hidden rounded-2xl border border-beige-300 bg-white shadow-sm transition-shadow hover:shadow-md">
        <div className="relative aspect-[4/3]">
          <Image
            src={listing.image}
            alt={listing.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute left-3 top-3 flex gap-2">
            <span className="rounded-md bg-emerald-600 px-2 py-1 text-xs font-semibold text-white">
              For {listing.listingType === "sale" ? "Sale" : "Rent"}
            </span>
            {listing.isNew && (
              <span className="rounded-md bg-white px-2 py-1 text-xs font-semibold text-rose-600">
                New
              </span>
            )}
          </div>
          <span className="absolute bottom-3 right-3 rounded-md bg-black/60 px-2 py-1 text-xs text-white">
            1/{listing.images}
          </span>
        </div>

        <div className="p-4">
          <div className="flex items-baseline gap-2">
            <p className="text-xl font-bold text-foreground">
              {listing.listingType === "rent"
                ? `${formatPrice(listing.price)}/mo`
                : formatPrice(listing.price)}
            </p>
            <p className="text-xs text-stone-400">
              {listing.listingType === "rent"
                ? "per month"
                : `${formatPrice(listing.pricePerSqft)} psf`}
            </p>
          </div>

          <h3 className="mt-2 font-bold text-foreground">{listing.title}</h3>
          <p className="text-sm text-stone-400">{listing.location}</p>

          <div className="mt-3 flex flex-wrap gap-3 text-xs text-stone-500">
            <span className="flex items-center gap-1">
              <Bed className="h-3.5 w-3.5" />
              {listing.bedrooms} Beds
            </span>
            <span className="flex items-center gap-1">
              <Bath className="h-3.5 w-3.5" />
              {listing.bathrooms} Baths
            </span>
            <span>{listing.sqft.toLocaleString()} sq ft</span>
            <span>{listing.type}</span>
          </div>

          {listing.developmentListings && (
            <p className="mt-2 flex items-center gap-1 text-xs font-medium text-rose-600">
              <Building2 className="h-3.5 w-3.5" />
              {listing.developmentListings} listings in {listing.title}
            </p>
          )}

          <div className="mt-4 flex items-center justify-between border-t border-beige-200 pt-4">
            <div className="flex items-center gap-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-full">
                <Image
                  src={listing.agentAvatar}
                  alt={listing.agent}
                  fill
                  className="object-cover"
                  sizes="32px"
                />
              </div>
              <span className="text-sm font-medium text-stone-600">
                {listing.agent}
              </span>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-full border border-gold-500 px-4 py-2 text-xs font-semibold text-gold-600 transition-colors hover:bg-gold-500 hover:text-white"
            >
              <Lock className="h-3 w-3" />
              Contact Agent
            </a>
          </div>

          <div className="mt-3 flex items-center justify-between text-xs text-stone-400">
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              Listed {listing.listedDaysAgo}d ago
            </span>
            <div className="flex gap-3">
              <button type="button" className="flex items-center gap-1 hover:text-gold-600">
                <GitCompareArrows className="h-3.5 w-3.5" />
                Compare
              </button>
              <button type="button" className="flex items-center gap-1 hover:text-gold-600">
                <Heart className="h-3.5 w-3.5" />
                Save
              </button>
            </div>
          </div>
        </div>
      </article>
    </FadeIn>
  );
}
