import Image from "next/image";
import Link from "next/link";
import type { PropertyLandingData } from "@/types/property-landing";
import { FadeIn } from "@/components/ui/FadeIn";

type Props = {
  data: PropertyLandingData["intro"];
};

export function VerticalIntroSection({ data }: Props) {
  return (
    <section className="bg-beige-100 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col gap-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:gap-12">
          <FadeIn className="w-full shrink-0 lg:w-[42%]">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl lg:aspect-[4/3]">
              <Image
                src={data.image}
                alt={data.heading}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="min-w-0 flex-1">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {data.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-stone-500">
              {data.body}
            </p>
            {data.quote && (
              <p className="mt-6 border-l-4 border-gold-500 pl-4 text-lg italic text-stone-600">
                &ldquo;{data.quote}&rdquo;
              </p>
            )}
            {data.linkLabel && data.linkHref && (
              <Link
                href={data.linkHref}
                className="mt-6 inline-block text-sm font-semibold text-gold-600 hover:text-gold-700"
              >
                {data.linkLabel} →
              </Link>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
