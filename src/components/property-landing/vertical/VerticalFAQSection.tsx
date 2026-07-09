"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { PropertyCtaContext, PropertyLandingData } from "@/types/property-landing";
import { resolveCtaHref, isExternalCta } from "@/lib/property-landing";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

type Props = {
  data: PropertyLandingData["faq"];
  ctaContext: PropertyCtaContext;
};

export function VerticalFAQSection({ data, ctaContext }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const href = resolveCtaHref(data.cta, ctaContext);
  const external = isExternalCta(data.cta);

  return (
    <section className="bg-beige-100 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {data.heading}
          </h2>
          {data.description && (
            <p className="mt-4 text-base text-stone-500">{data.description}</p>
          )}
        </FadeIn>

        <div className="mt-10 space-y-3">
          {data.items.map((item, index) => (
            <FadeIn key={item.question} delay={index * 0.05}>
              <div className="overflow-hidden rounded-2xl border border-beige-300 bg-white">
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-foreground">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-gold-500 transition-transform duration-300",
                      openIndex === index && "rotate-180",
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="border-t border-beige-200 px-6 pb-5 pt-4 text-sm leading-relaxed text-stone-500">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-10 text-center">
          {external ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-gold-600"
            >
              {data.cta.label}
              <ArrowRight className="h-4 w-4" />
            </a>
          ) : (
            <Link
              href={href}
              className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-gold-600"
            >
              {data.cta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
