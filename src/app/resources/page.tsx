import type { Metadata } from "next";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BookOpen, Calculator, MapPin, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Guides and resources to help you decide what property to get in Malaysia.",
};

const guides = [
  {
    icon: BookOpen,
    title: "First-Time Buyer's Guide",
    description:
      "A step-by-step walkthrough of the property buying process in Malaysia, from budgeting to key collection.",
    status: "Coming Soon",
  },
  {
    icon: Calculator,
    title: "Mortgage Calculator & Financing",
    description:
      "Understand your borrowing capacity, monthly repayments, and compare loan packages from major banks.",
    status: "Coming Soon",
  },
  {
    icon: MapPin,
    title: "Neighbourhood Guides",
    description:
      "In-depth guides to Bangsar, Seputeh, Damansara Heights, and Petaling Jaya — amenities, schools, and connectivity.",
    status: "Coming Soon",
  },
  {
    icon: Shield,
    title: "Legal & Due Diligence Checklist",
    description:
      "Essential checks before signing on the dotted line, including title searches and developer track records.",
    status: "Coming Soon",
  },
];

export default function ResourcesPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Resources"
            title="Guides to help you decide"
            description="We're building a library of resources to help you make informed property decisions. Check back soon for comprehensive guides."
            align="center"
            className="mb-12"
          />
        </FadeIn>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2">
          {guides.map((guide) => (
            <StaggerItem key={guide.title}>
              <div className="rounded-2xl border border-beige-300 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-beige-100">
                  <guide.icon className="h-6 w-6 text-gold-600" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">
                  {guide.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-500">
                  {guide.description}
                </p>
                <span className="mt-4 inline-block rounded-full bg-beige-200 px-3 py-1 text-xs font-semibold text-stone-500">
                  {guide.status}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
