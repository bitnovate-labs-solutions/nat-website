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
import type {
  PropertyCTA,
  PropertyCtaContext,
  PropertyWhatsAppConfig,
} from "@/types/property-landing";
import {
  DEFAULT_WHATSAPP_MESSAGE_TEMPLATE,
  WHATSAPP_PHONE,
  WHATSAPP_URL,
} from "@/lib/constants";

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

export function buildWhatsAppMessage(
  config: PropertyWhatsAppConfig,
  propertyName: string,
  locationName?: string,
): string {
  const template = config.messageTemplate ?? DEFAULT_WHATSAPP_MESSAGE_TEMPLATE;
  const agentName = config.agentName ?? "Nate";

  return template
    .replace(/\{agentName\}/g, agentName)
    .replace(/\{propertyName\}/g, propertyName)
    .replace(/\{locationName\}/g, locationName ?? "");
}

export function buildWhatsAppUrl(
  config: PropertyWhatsAppConfig,
  propertyName: string,
  locationName?: string,
): string {
  const phone = config.phone ?? WHATSAPP_PHONE;
  const message = buildWhatsAppMessage(config, propertyName, locationName);
  return `http://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function resolveCtaHref(
  cta: PropertyCTA,
  context?: PropertyCtaContext,
): string {
  if (cta.whatsapp) {
    if (context) {
      return buildWhatsAppUrl(
        context.whatsapp,
        context.propertyName,
        context.locationName,
      );
    }
    return WHATSAPP_URL;
  }

  return cta.href ?? "#register";
}

export function isExternalCta(cta: PropertyCTA): boolean {
  return Boolean(cta.whatsapp) || Boolean(cta.href?.startsWith("http"));
}
