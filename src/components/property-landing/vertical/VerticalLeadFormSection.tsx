import Image from "next/image";
import { Check } from "lucide-react";
import type { PropertyLandingData } from "@/types/property-landing";
import { PropertyRegisterForm } from "@/components/property-landing/forms/PropertyRegisterForm";
import { FadeIn } from "@/components/ui/FadeIn";

type Props = {
  data: PropertyLandingData["leadForm"];
};

export function VerticalLeadFormSection({ data }: Props) {
  return (
    <section id="register" className="relative py-16 sm:py-20">
      <Image
        src={data.backgroundImage}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10">
          <FadeIn>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              {data.heading}
            </h2>
            {data.subheading && (
              <p className="mt-2 text-base text-white/80">{data.subheading}</p>
            )}
            <ul className="mt-6 space-y-3">
              {data.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 text-sm text-white/90 sm:text-base"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500 text-white">
                    <Check className="h-3 w-3" />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.1}>
            <PropertyRegisterForm
              submitLabel={data.submitLabel}
              subject={data.subject}
              variant="dark"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
