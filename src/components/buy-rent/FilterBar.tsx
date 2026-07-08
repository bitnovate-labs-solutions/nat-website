"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, MapPin, X } from "lucide-react";
import { locations } from "@/data/locations";
import { cn } from "@/lib/utils";

type FilterBarProps = {
  activeArea: string;
  onAreaChange: (area: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
};

export function FilterBar({
  activeArea,
  onAreaChange,
  searchQuery,
  onSearchChange,
}: FilterBarProps) {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="rounded-2xl border border-beige-300 bg-white p-4 shadow-lg sm:p-6">
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            placeholder="Search location, project, or area..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full rounded-xl border border-beige-300 bg-beige-50 py-3 pl-11 pr-4 text-sm outline-none transition-colors focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
          />
        </div>
        <button
          type="button"
          className="flex items-center gap-2 rounded-xl bg-gold-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gold-600"
        >
          <Search className="h-4 w-4" />
          <span className="hidden sm:inline">Search</span>
        </button>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setShowFilters(!showFilters)}
          className="relative flex items-center gap-2 rounded-full border border-beige-300 px-4 py-2 text-xs font-medium text-stone-600 transition-colors hover:border-gold-500"
        >
          <SlidersHorizontal className="h-3.5 w-3.5" />
          Filters
          {activeArea && (
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white">
              1
            </span>
          )}
        </button>

        {locations.map((loc) => (
          <button
            key={loc.slug}
            type="button"
            onClick={() =>
              onAreaChange(activeArea === loc.name ? "" : loc.name)
            }
            className={cn(
              "flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-medium transition-colors",
              activeArea === loc.name
                ? "border-gold-500 bg-gold-500/10 text-gold-700"
                : "border-beige-300 text-stone-600 hover:border-gold-500",
            )}
          >
            <MapPin className="h-3 w-3" />
            {loc.name}
          </button>
        ))}

        {activeArea && (
          <button
            type="button"
            onClick={() => onAreaChange("")}
            className="text-xs font-medium text-stone-400 hover:text-gold-600"
          >
            Clear all
          </button>
        )}
      </div>

      {activeArea && (
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-beige-200 px-3 py-1 text-xs font-medium text-stone-600">
            Area: {activeArea}
            <button type="button" onClick={() => onAreaChange("")}>
              <X className="h-3 w-3" />
            </button>
          </span>
        </div>
      )}
    </div>
  );
}
