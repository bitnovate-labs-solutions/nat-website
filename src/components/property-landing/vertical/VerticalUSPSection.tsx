import type { PropertyLandingData } from "@/types/property-landing";
import { getPropertyIcon } from "@/lib/property-landing";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/FadeIn";

type Props = {
  data: PropertyLandingData["usps"];
};

export function VerticalUSPSection({ data }: Props) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {data.heading}
          </h2>
        </FadeIn>

        <StaggerContainer className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item) => {
            const Icon = getPropertyIcon(item.icon);
            return (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-2xl border border-beige-200 bg-beige-50 p-6 transition-shadow hover:shadow-md">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/10 text-gold-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-500">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
