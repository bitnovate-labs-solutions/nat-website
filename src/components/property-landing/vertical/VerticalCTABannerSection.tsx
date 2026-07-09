import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PropertyLandingData } from "@/types/property-landing";
import { resolveCtaHref, isExternalCta } from "@/lib/property-landing";
import { FadeIn } from "@/components/ui/FadeIn";

type Props = {
  data: PropertyLandingData["ctaBanner"];
};

export function VerticalCTABannerSection({ data }: Props) {
  const href = resolveCtaHref(data.button);
  const external = isExternalCta(data.button);

  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <Image
        src={data.backgroundImage}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center">
          <FadeIn className="max-w-2xl">
            <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              {data.headline}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/80">
              {data.subtext}
            </p>
            {external ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-500 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-gold-600"
              >
                {data.button.label}
                <ArrowRight className="h-4 w-4" />
              </a>
            ) : (
              <Link
                href={href}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-500 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-gold-600"
              >
                {data.button.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </FadeIn>

          {data.agentImage && (
            <FadeIn delay={0.15}>
              <div className="relative h-48 w-48 sm:h-56 sm:w-56">
                <Image
                  src={data.agentImage}
                  alt="Property agent"
                  fill
                  className="object-contain object-bottom"
                  sizes="224px"
                />
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
}
