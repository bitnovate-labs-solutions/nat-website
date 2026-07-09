"use client";

import { useWeb3Form } from "@/hooks/useWeb3Form";
import { cn } from "@/lib/utils";

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
  const { onSubmit, result, isPending, resultClassName } = useWeb3Form({
    mapFormData: (formData) => {
      const contact = formData.get("contact")?.toString().trim() ?? "";
      const question = formData.get("question")?.toString().trim() ?? "";

      formData.delete("contact");
      formData.delete("question");
      formData.set("message", question);
      formData.set("phone", contact);

      return formData;
    },
  });

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "rounded-2xl border border-white/20 bg-white/95 p-6 shadow-xl backdrop-blur-sm sm:p-8",
        className,
      )}
    >
      <input type="hidden" name="subject" value={subject} />

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

      {result && <p className={resultClassName}>{result}</p>}

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
