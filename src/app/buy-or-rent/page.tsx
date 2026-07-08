"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { LayoutGrid, List, ChevronRight } from "lucide-react";
import Link from "next/link";
import { listings } from "@/data/listings";
import { FilterBar } from "@/components/buy-rent/FilterBar";
import { ListingCard } from "@/components/buy-rent/ListingCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

export default function BuyOrRentPage() {
  const [activeArea, setActiveArea] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredListings = useMemo(() => {
    return listings.filter((listing) => {
      const matchesArea = !activeArea || listing.area === activeArea;
      const matchesSearch =
        !searchQuery ||
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesArea && matchesSearch;
    });
  }, [activeArea, searchQuery]);

  return (
    <>
      {/* Hero */}
      <div className="relative h-[280px] sm:h-[320px]">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt="Kuala Lumpur skyline"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative flex h-full items-center justify-center px-4 text-center">
          <FadeIn>
            <h1 className="text-3xl font-bold text-white sm:text-4xl">
              Property for Sale &amp; Rent in Kuala Lumpur
            </h1>
            <p className="mt-3 text-sm text-white/80 sm:text-base">
              Discover your dream home from our extensive collection of premium
              properties
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Filter bar overlapping hero */}
      <div className="relative z-10 -mt-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FilterBar
          activeArea={activeArea}
          onAreaChange={setActiveArea}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
      </div>

      {/* Results */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-stone-400">
          <Link href="/" className="hover:text-gold-600">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">Buy or Rent</span>
          {activeArea && (
            <>
              <ChevronRight className="h-3 w-3" />
              <span className="text-foreground">{activeArea}</span>
            </>
          )}
        </div>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              {filteredListings.length.toLocaleString()} Properties
            </h2>
            <p className="mt-1 text-sm text-stone-400">
              Showing {filteredListings.length} results
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex rounded-lg border border-beige-300 bg-white p-1">
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={cn(
                  "flex items-center gap-1 rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
                  viewMode === "grid"
                    ? "bg-gold-500 text-white"
                    : "text-stone-500 hover:text-foreground",
                )}
              >
                <LayoutGrid className="h-3.5 w-3.5" />
                Grid
              </button>
              <button
                type="button"
                onClick={() => setViewMode("list")}
                className={cn(
                  "flex items-center gap-1 rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
                  viewMode === "list"
                    ? "bg-gold-500 text-white"
                    : "text-stone-500 hover:text-foreground",
                )}
              >
                <List className="h-3.5 w-3.5" />
                List
              </button>
            </div>

            <select className="rounded-lg border border-beige-300 bg-white px-3 py-2 text-xs font-medium text-stone-600 outline-none focus:border-gold-500">
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        <div
          className={cn(
            "mt-8",
            viewMode === "grid"
              ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              : "flex flex-col gap-4",
          )}
        >
          {filteredListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>

        {filteredListings.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg font-medium text-stone-500">
              No properties found matching your criteria.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveArea("");
                setSearchQuery("");
              }}
              className="mt-4 text-sm font-semibold text-gold-600 hover:text-gold-700"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </>
  );
}
