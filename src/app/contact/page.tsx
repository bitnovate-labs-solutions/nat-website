import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with NAT Properties via WhatsApp.",
};

export default function ContactPage() {
  redirect(WHATSAPP_URL);
}
