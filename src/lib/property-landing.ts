import {
  Bed,
  Building,
  Key,
  MapPin,
  Ruler,
  Shield,
  Train,
  Trees,
  TrendingUp,
  Utensils,
  type LucideIcon,
} from "lucide-react";
import type { PropertyCTA } from "@/types/property-landing";
import { WHATSAPP_URL } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  bed: Bed,
  ruler: Ruler,
  train: Train,
  "map-pin": MapPin,
  building: Building,
  key: Key,
  trees: Trees,
  utensils: Utensils,
  shield: Shield,
  "trending-up": TrendingUp,
};

export function getPropertyIcon(name: string): LucideIcon {
  return iconMap[name] ?? Building;
}

export function resolveCtaHref(cta: PropertyCTA): string {
  if (cta.whatsapp) return WHATSAPP_URL;
  return cta.href ?? "#register";
}

export function isExternalCta(cta: PropertyCTA): boolean {
  return Boolean(cta.whatsapp) || Boolean(cta.href?.startsWith("http"));
}
