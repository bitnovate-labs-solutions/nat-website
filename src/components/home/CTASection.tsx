"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gold-500 py-20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white" />
        <div className="absolute -bottom-10 -left-10 h-60 w-60 rounded-full bg-white" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <FadeIn>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-200"
          >
            Ready to get started?
          </motion.p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let us help you find your dream property
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gold-100">
            Whether you&apos;re a first-time buyer or seasoned investor, our team
            is here to guide you every step of the way.
          </p>
          <div className="mt-8">
            <Button
              href={WHATSAPP_URL}
              variant="secondary"
              external
              showArrow
              className="px-8 py-4 text-base"
            >
              Contact Us for More Info
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
