import type { PropertyLandingData } from "@/types/property-landing";
import bangsarHillParkData from "./bangsar-hill-park.data.js";

export const propertyLandingRegistry: Record<string, PropertyLandingData> = {
  "bangsar/bangsar-hill-park": bangsarHillParkData,
};

export function getPropertyLandingData(
  locationSlug: string,
  propertySlug: string,
): PropertyLandingData | undefined {
  return propertyLandingRegistry[`${locationSlug}/${propertySlug}`];
}
