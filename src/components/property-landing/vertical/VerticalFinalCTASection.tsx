import Image from "next/image";
import { MessageCircle } from "lucide-react";
import type { PropertyLandingData } from "@/types/property-landing";
import { resolveCtaHref } from "@/lib/property-landing";
import { PropertyEmailForm } from "@/components/property-landing/forms/PropertyEmailForm";
import { FadeIn } from "@/components/ui/FadeIn";

type Props = {
  data: PropertyLandingData["finalCta"];
};

export function VerticalFinalCTASection({ data }: Props) {
  const whatsappHref = resolveCtaHref(data.whatsapp);

  return (
    <section className="relative py-16 sm:py-20">
      <Image
        src={data.backgroundImage}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-base font-semibold text-white shadow-lg transition-colors hover:bg-[#1fb855] sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" />
            {data.whatsapp.label}
          </a>
        </FadeIn>

        <FadeIn delay={0.15} className="mt-10">
          <div className="text-center">
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              {data.formHeading}
            </h2>
            <p className="mt-2 text-sm text-white/70">{data.formSubheading}</p>
          </div>

          <PropertyEmailForm
            submitLabel={data.submitLabel}
            subject={data.subject}
            className="mt-6"
          />
        </FadeIn>
      </div>
    </section>
  );
}
