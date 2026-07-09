"use client";

import { useActionState } from "react";
import { submitWeb3Form, type ContactFormState } from "@/app/actions/contact";
import { cn } from "@/lib/utils";

const initialState: ContactFormState = {};

type PropertyEmailFormProps = {
  submitLabel: string;
  subject: string;
  className?: string;
};

export function PropertyEmailForm({
  submitLabel,
  subject,
  className,
}: PropertyEmailFormProps) {
  const [state, formAction, isPending] = useActionState(
    submitWeb3Form,
    initialState,
  );

  return (
    <form
      action={formAction}
      className={cn(
        "rounded-2xl border border-white/20 bg-white/95 p-6 shadow-xl backdrop-blur-sm sm:p-8",
        className,
      )}
    >
      <input type="hidden" name="subject" value={subject} />
      <input type="hidden" name="formType" value="email" />

      <div className="space-y-4">
        <div>
          <label
            htmlFor="email-name"
            className="mb-1.5 block text-sm font-medium text-stone-600"
          >
            Name
          </label>
          <input
            id="email-name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
            className="w-full rounded-xl border border-beige-300 bg-beige-50 px-4 py-3 text-sm outline-none transition-colors focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
          />
        </div>

        <div>
          <label
            htmlFor="email-contact"
            className="mb-1.5 block text-sm font-medium text-stone-600"
          >
            Contact
          </label>
          <input
            id="email-contact"
            name="contact"
            type="text"
            required
            placeholder="Phone or email"
            className="w-full rounded-xl border border-beige-300 bg-beige-50 px-4 py-3 text-sm outline-none transition-colors focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
          />
        </div>

        <div>
          <label
            htmlFor="email-question"
            className="mb-1.5 block text-sm font-medium text-stone-600"
          >
            Question
          </label>
          <textarea
            id="email-question"
            name="question"
            required
            rows={4}
            placeholder="I'm looking for..."
            className="w-full resize-none rounded-xl border border-beige-300 bg-beige-50 px-4 py-3 text-sm outline-none transition-colors focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
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
