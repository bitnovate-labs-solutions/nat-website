import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PropertyLandingData } from "@/types/property-landing";
import { resolveCtaHref, isExternalCta } from "@/lib/property-landing";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

type Props = {
  items: PropertyLandingData["proximityHighlights"];
};

export function VerticalProximitySection({ items }: Props) {
  return (
    <section>
      {items.map((item, index) => {
        const href = resolveCtaHref(item.cta);
        const external = isExternalCta(item.cta);
        const isEven = index % 2 === 0;

        return (
          <div
            key={item.title}
            className={cn(
              "py-12 sm:py-16",
              isEven ? "bg-beige-100" : "bg-white",
            )}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <FadeIn>
                <div className="flex flex-col gap-8">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-stone-500">
                      {item.description}
                    </p>
                    {external ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gold-600"
                      >
                        {item.cta.label}
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    ) : (
                      <Link
                        href={href}
                        className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gold-600"
                      >
                        {item.cta.label}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        );
      })}
    </section>
  );
}
