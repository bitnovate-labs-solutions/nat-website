import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about NAT Properties — your trusted partner for premium real estate in Kuala Lumpur.",
};

export default function AboutPage() {
  return (
    <>
      <div className="relative h-[40vh] min-h-[300px]">
        <Image
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80"
          alt="About NAT Properties"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative flex h-full items-center justify-center">
          <FadeIn>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              About Us
            </h1>
          </FadeIn>
        </div>
      </div>

      <div className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
              Our Story
            </p>
            <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
              Your trusted property partner in Kuala Lumpur
            </h2>
            <p className="mt-6 text-base leading-relaxed text-stone-500">
              Content coming soon. We&apos;re a dedicated real estate team
              specialising in premium properties across Bangsar, Seputeh,
              Damansara Heights, and Petaling Jaya. Our mission is to make your
              property journey seamless, transparent, and rewarding.
            </p>
          </FadeIn>
        </div>
      </div>
    </>
  );
}
