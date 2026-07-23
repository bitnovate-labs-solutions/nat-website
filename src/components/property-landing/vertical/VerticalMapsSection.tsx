import Image from "next/image";
import type { PropertyLandingData } from "@/types/property-landing";
import { FadeIn } from "@/components/ui/FadeIn";

type Props = {
  data: PropertyLandingData["maps"];
};

export function VerticalMapsSection({ data }: Props) {
  return (
    <section id="location" className="bg-stone-900 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {data.heading && (
          <FadeIn>
            <h2 className="mb-10 text-center text-2xl font-bold text-white sm:text-3xl">
              {data.heading}
            </h2>
          </FadeIn>
        )}

        <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
          <FadeIn>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-stone-800">
              <Image
                src={data.areaMap}
                alt="Area location map"
                width={800}
                height={600}
                className="h-auto w-full"
                sizes="(max-width: 640px) 100vw, 40vw"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-stone-800">
              <Image
                src={data.transitMap}
                alt="Transit connectivity map"
                width={800}
                height={600}
                className="h-auto w-full"
                sizes="(max-width: 640px) 100vw, 40vw"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
