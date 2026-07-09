"use client";

import { useActionState } from "react";
import { submitWeb3Form, type ContactFormState } from "@/app/actions/contact";
import { cn } from "@/lib/utils";

const initialState: ContactFormState = {};

type PropertyRegisterFormProps = {
  submitLabel: string;
  subject: string;
  className?: string;
  variant?: "light" | "dark";
};

export function PropertyRegisterForm({
  submitLabel,
  subject,
  className,
  variant = "light",
}: PropertyRegisterFormProps) {
  const [state, formAction, isPending] = useActionState(
    submitWeb3Form,
    initialState,
  );

  const isDark = variant === "dark";

  return (
    <form
      action={formAction}
      className={cn(
        "rounded-2xl p-6 sm:p-8",
        isDark ? "bg-white shadow-xl" : "border border-beige-300 bg-white",
        className,
      )}
    >
      <input type="hidden" name="subject" value={subject} />
      <input type="hidden" name="formType" value="register" />

      <div className="space-y-4">
        <div>
          <label
            htmlFor="register-name"
            className="mb-1.5 block text-sm font-medium text-stone-600"
          >
            Name
          </label>
          <input
            id="register-name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
            className="w-full rounded-xl border border-beige-300 bg-beige-50 px-4 py-3 text-sm outline-none transition-colors focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
          />
        </div>

        <div>
          <label
            htmlFor="register-email"
            className="mb-1.5 block text-sm font-medium text-stone-600"
          >
            Email
          </label>
          <input
            id="register-email"
            name="email"
            type="email"
            required
            placeholder="you@email.com"
            className="w-full rounded-xl border border-beige-300 bg-beige-50 px-4 py-3 text-sm outline-none transition-colors focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
          />
        </div>

        <div>
          <label
            htmlFor="register-phone"
            className="mb-1.5 block text-sm font-medium text-stone-600"
          >
            Phone Number
          </label>
          <input
            id="register-phone"
            name="phone"
            type="tel"
            required
            placeholder="+60 12-345 6789"
            className="w-full rounded-xl border border-beige-300 bg-beige-50 px-4 py-3 text-sm outline-none transition-colors focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
          />
        </div>
      </div>

      {state.message && (
        <p
          className={cn(
            "mt-4 text-sm",
            state.success ? "text-emerald-600" : "text-rose-600",
          )}
        >
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="mt-6 w-full rounded-full bg-gold-500 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-gold-600 disabled:opacity-60"
      >
        {isPending ? "Sending..." : submitLabel}
      </button>
    </form>
  );
}
