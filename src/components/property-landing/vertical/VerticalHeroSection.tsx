import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { PropertyLandingData } from "@/types/property-landing";
import {
  getPropertyIcon,
  resolveCtaHref,
  isExternalCta,
} from "@/lib/property-landing";
import { FadeIn } from "@/components/ui/FadeIn";

type Props = {
  data: PropertyLandingData["hero"];
  propertyName: string;
  locationName: string;
};

export function VerticalHeroSection({ data, propertyName, locationName }: Props) {
  return (
    <section className="relative min-h-[90vh]">
      <Image
        src={data.backgroundImage}
        alt={`${propertyName} hero`}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-end px-4 pb-12 pt-24 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
            {locationName}
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {propertyName}
          </h1>
          <p className="mt-2 text-sm font-medium text-white/80 sm:text-base">
            {data.subtitle}
          </p>
        </FadeIn>

        <FadeIn delay={0.15} className="mt-8">
          <ul className="space-y-3">
            {data.highlights.map((item) => {
              const Icon = getPropertyIcon(item.icon);
              return (
                <li key={item.label} className="flex items-center gap-3 text-white">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-500/20 text-gold-400">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium sm:text-base">
                    {item.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </FadeIn>

        <FadeIn delay={0.3} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href={resolveCtaHref(data.ctas.brochure)}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-gold-500/30 transition-colors hover:bg-gold-600"
          >
            {data.ctas.brochure.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={resolveCtaHref(data.ctas.whatsapp)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/80 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-foreground"
          >
            {data.ctas.whatsapp.label}
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
