import Image from "next/image";
import type { PropertyLandingData } from "@/types/property-landing";
import { FadeIn } from "@/components/ui/FadeIn";

type Props = {
  data: PropertyLandingData["panorama"];
};

export function VerticalPanoramaSection({ data }: Props) {
  return (
    <section className="relative h-[50vh] min-h-[320px]">
      <Image
        src={data.image}
        alt={data.caption}
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative flex h-full items-center justify-center px-4">
        <FadeIn>
          <p className="max-w-2xl text-center text-xl font-semibold text-white sm:text-2xl lg:text-3xl">
            {data.caption}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
