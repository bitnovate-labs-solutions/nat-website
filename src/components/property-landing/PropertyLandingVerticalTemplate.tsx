import type { PropertyLandingData } from "@/types/property-landing";
import { VerticalHeroSection } from "./vertical/VerticalHeroSection";
import { VerticalIntroSection } from "./vertical/VerticalIntroSection";
import { VerticalPanoramaSection } from "./vertical/VerticalPanoramaSection";
import { VerticalUSPSection } from "./vertical/VerticalUSPSection";
import { VerticalCTABannerSection } from "./vertical/VerticalCTABannerSection";
import { VerticalFloorPlansSection } from "./vertical/VerticalFloorPlansSection";
import { VerticalResidencesSection } from "./vertical/VerticalResidencesSection";
import { VerticalLeadFormSection } from "./vertical/VerticalLeadFormSection";
import { VerticalAmenitiesSection } from "./vertical/VerticalAmenitiesSection";
import { VerticalMapsSection } from "./vertical/VerticalMapsSection";
import { VerticalProximitySection } from "./vertical/VerticalProximitySection";
import { VerticalLifestyleSection } from "./vertical/VerticalLifestyleSection";
import { VerticalGallerySection } from "./vertical/VerticalGallerySection";
import { VerticalFAQSection } from "./vertical/VerticalFAQSection";
import { VerticalFinalCTASection } from "./vertical/VerticalFinalCTASection";

type Props = {
  data: PropertyLandingData;
};

/**
 * Vertical property landing page template.
 * A horizontal variant will be added later — keep section components
 * named with the "Vertical" prefix for clear distinction.
 */
export function PropertyLandingVerticalTemplate({ data }: Props) {
  return (
    <article>
      <VerticalHeroSection
        data={data.hero}
        propertyName={data.name}
        locationName={data.locationName}
      />
      <VerticalIntroSection data={data.intro} />
      <VerticalPanoramaSection data={data.panorama} />
      <VerticalUSPSection data={data.usps} />
      <VerticalCTABannerSection data={data.ctaBanner} />
      <VerticalFloorPlansSection data={data.floorPlans} />
      <VerticalResidencesSection data={data.residences} />
      <VerticalLeadFormSection data={data.leadForm} />
      <VerticalAmenitiesSection data={data.amenities} />
      <VerticalMapsSection data={data.maps} />
      <VerticalProximitySection items={data.proximityHighlights} />
      <VerticalLifestyleSection data={data.lifestyle} />
      <VerticalGallerySection data={data.gallery} />
      <VerticalFAQSection data={data.faq} />
      <VerticalFinalCTASection data={data.finalCta} />
    </article>
  );
}
