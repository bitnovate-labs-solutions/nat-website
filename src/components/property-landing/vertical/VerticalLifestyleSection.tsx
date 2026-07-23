import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PropertyLandingData } from "@/types/property-landing";
import { resolveCtaHref, isExternalCta } from "@/lib/property-landing";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

type Props = {
  data: PropertyLandingData["lifestyle"];
};

export function VerticalLifestyleSection({ data }: Props) {
  return (
    <section className="bg-beige-100 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {data.heading}
          </h2>
        </FadeIn>

        <StaggerContainer className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item) => {
            const href = item.cta ? resolveCtaHref(item.cta) : null;
            const external = item.cta ? isExternalCta(item.cta) : false;

            return (
              <StaggerItem key={item.title}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-beige-300 bg-white shadow-sm">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-base font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-500">
                      {item.description}
                    </p>
                    {item.cta && href && (
                      external ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 hover:text-gold-700"
                        >
                          {item.cta.label}
                          <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                      ) : (
                        <Link
                          href={href}
                          className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 hover:text-gold-700"
                        >
                          {item.cta.label}
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      )
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
