import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PropertyLandingData } from "@/types/property-landing";
import { resolveCtaHref, isExternalCta } from "@/lib/property-landing";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

type Props = {
  data: PropertyLandingData["residences"];
};

export function VerticalResidencesSection({ data }: Props) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {data.heading}
          </h2>
        </FadeIn>

        <StaggerContainer className="mx-auto mt-10 grid max-w-5xl gap-8 sm:grid-cols-2">
          {data.items.map((residence) => {
            const href = resolveCtaHref(residence.cta);
            const external = isExternalCta(residence.cta);

            return (
              <StaggerItem key={residence.name}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-beige-200 bg-beige-50">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={residence.image}
                      alt={residence.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                      {residence.name}
                    </h3>
                    <ul className="mt-4 space-y-2.5">
                      {residence.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-sm text-stone-500 sm:text-base"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    {external ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gold-600"
                      >
                        {residence.cta.label}
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    ) : (
                      <Link
                        href={href}
                        className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gold-600"
                      >
                        {residence.cta.label}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
