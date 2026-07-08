"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FAQItem } from "@/data/faq";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

type FAQProps = {
  items: FAQItem[];
  title?: string;
  description?: string;
};

export function FAQ({
  items,
  title = "Frequently Asked Questions",
  description = "Everything you need to know about finding your perfect property.",
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-beige-100 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="FAQ"
            title={title}
            description={description}
            align="center"
            className="mb-12"
          />
        </FadeIn>

        <div className="space-y-3">
          {items.map((item, index) => (
            <FadeIn key={item.question} delay={index * 0.05}>
              <div className="overflow-hidden rounded-2xl border border-beige-300 bg-white">
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
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
      </div>
    </section>
  );
}
