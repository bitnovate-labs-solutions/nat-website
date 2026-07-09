import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PropertyLandingData } from "@/types/property-landing";
import { resolveCtaHref, isExternalCta } from "@/lib/property-landing";
import { FadeIn } from "@/components/ui/FadeIn";

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

        <div className="mt-10 space-y-12">
          {data.items.map((item, index) => {
            const href = item.cta ? resolveCtaHref(item.cta) : null;
            const external = item.cta ? isExternalCta(item.cta) : false;

            return (
              <FadeIn key={item.title} delay={index * 0.05}>
                <div className="overflow-hidden rounded-2xl border border-beige-300 bg-white">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone-500">
                      {item.description}
                    </p>
                    {item.cta && href && (
                      external ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-600 hover:text-gold-700"
                        >
                          {item.cta.label}
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      ) : (
                        <Link
                          href={href}
                          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-600 hover:text-gold-700"
                        >
                          {item.cta.label}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
