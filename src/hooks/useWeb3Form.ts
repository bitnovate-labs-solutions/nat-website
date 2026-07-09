"use client";

import { useState, type FormEvent } from "react";
import { submitToWeb3Forms } from "@/lib/web3forms";
import { cn } from "@/lib/utils";

type UseWeb3FormOptions = {
  onSuccess?: () => void;
  mapFormData?: (formData: FormData) => FormData;
};

export function useWeb3Form(options: UseWeb3FormOptions = {}) {
  const [result, setResult] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPending(true);
    setResult("");

    const form = event.currentTarget;
    let formData = new FormData(form);

    if (options.mapFormData) {
      formData = options.mapFormData(formData);
    }

    const response = await submitToWeb3Forms(formData);

    setIsSuccess(response.success);
    setResult(response.message);
    setIsPending(false);

    if (response.success) {
      form.reset();
      options.onSuccess?.();
    }
  };

  return {
    onSubmit,
    result,
    isSuccess,
    isPending,
    resultClassName: cn(
      "mt-4 text-sm",
      result && (isSuccess ? "text-emerald-600" : "text-rose-600"),
    ),
  };
}
