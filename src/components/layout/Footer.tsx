import Link from "next/link";
import { REN_NUMBER, SITE_NAME, WHATSAPP_URL } from "@/lib/constants";

const footerLinks = [
  { href: "/new-properties", label: "New Properties" },
  { href: "/buy-or-rent", label: "Buy or Rent" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-beige-300 bg-beige-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-foreground">{SITE_NAME}</p>
            <p className="mt-3 text-sm leading-relaxed text-stone-500">
              Your trusted partner for premium properties in Kuala Lumpur and
              Petaling Jaya.
            </p>
            <p className="mt-4 text-sm font-medium text-gold-700">
              REN: {REN_NUMBER}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-stone-600">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-500 transition-colors hover:text-gold-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-stone-600">
              Get in Touch
            </p>
            <p className="mt-4 text-sm text-stone-500">
              Ready to find your dream home? Chat with us on WhatsApp.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-semibold text-gold-600 hover:text-gold-700"
            >
              WhatsApp Us →
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-beige-300 pt-6 text-center text-xs text-stone-400">
          © {new Date().getFullYear()} {SITE_NAME}. All rights reserved. REN{" "}
          {REN_NUMBER}
        </div>
      </div>
    </footer>
  );
}
