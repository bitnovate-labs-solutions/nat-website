import Image from "next/image";
import Link from "next/link";
import type { PropertyLandingData } from "@/types/property-landing";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

type Props = {
  data: PropertyLandingData["floorPlans"];
};

export function VerticalFloorPlansSection({ data }: Props) {
  return (
    <section id="floor-plans" className="bg-beige-100 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {data.heading}
          </h2>
        </FadeIn>

        <StaggerContainer className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((plan) => (
            <StaggerItem key={plan.type}>
              <article className="overflow-hidden rounded-2xl border border-beige-300 bg-white shadow-sm">
                <div className="relative aspect-square bg-beige-50 p-4">
                  <Image
                    src={plan.image}
                    alt={`${plan.type} floor plan`}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground">
                    {plan.type}
                  </h3>
                  <p className="mt-1 text-sm text-stone-400">{plan.layout}</p>
                  <div className="mt-3 flex items-baseline justify-between">
                    <span className="text-sm text-stone-500">{plan.sqft}</span>
                    <span className="font-semibold text-gold-700">
                      {plan.price}
                    </span>
                  </div>
                  <Link
                    href="#register"
                    className="mt-4 inline-block text-sm font-semibold text-gold-600 hover:text-gold-700"
                  >
                    View layout plan →
                  </Link>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {data.viewAllLabel && data.viewAllHref && (
          <FadeIn className="mt-8 text-center">
            <Link
              href={data.viewAllHref}
              className="text-sm font-semibold text-gold-600 hover:text-gold-700"
            >
              {data.viewAllLabel} →
            </Link>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
