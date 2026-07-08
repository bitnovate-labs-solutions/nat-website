import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LocationShowcase } from "@/components/properties/LocationShowcase";

export const metadata: Metadata = {
  title: "New Properties",
  description:
    "Explore new property developments in Bangsar, Seputeh, Damansara Heights, and Petaling Jaya.",
};

export default function NewPropertiesPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="New Launches"
            title="Discover properties by location"
            description="Browse our curated selection of new developments across Kuala Lumpur and Petaling Jaya."
            align="center"
            className="mb-12"
          />
        </FadeIn>
        <LocationShowcase />
      </div>
    </div>
  );
}
