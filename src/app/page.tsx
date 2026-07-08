import { Hero } from "@/components/home/Hero";
import { LocationGrid } from "@/components/home/LocationGrid";
import { CTASection } from "@/components/home/CTASection";
import { FAQ } from "@/components/faq/FAQ";
import { homeFAQ } from "@/data/faq";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LocationGrid />
      <CTASection />
      <FAQ items={homeFAQ} />
    </>
  );
}
