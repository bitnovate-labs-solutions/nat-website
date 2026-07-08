"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
        alt="Luxury property exterior"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold-400"
        >
          Premium Real Estate
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Find your perfect home in Kuala Lumpur&apos;s finest neighbourhoods
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
        >
          We guide you through premium new launches and resale properties across
          Bangsar, Seputeh, Damansara Heights, and Petaling Jaya — no clutter,
          no guesswork.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Button href="/new-properties" variant="secondary" showArrow>
            Explore New Properties
          </Button>
          <Button href={WHATSAPP_URL} variant="outline" external className="border-white text-white hover:bg-white hover:text-foreground">
            Contact Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
