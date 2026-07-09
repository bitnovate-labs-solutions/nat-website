export async function submitToWeb3Forms(
  formData: FormData,
): Promise<{ success: boolean; message: string }> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY;

  if (!accessKey) {
    return {
      success: false,
      message: "Form is not configured. Please contact us via WhatsApp.",
    };
  }

  formData.append("access_key", accessKey);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      return {
        success: true,
        message: "Thank you! We'll get back to you shortly.",
      };
    }

    return {
      success: false,
      message: data.message || "Something went wrong. Please try again.",
    };
  } catch {
    return {
      success: false,
      message: "Unable to send your message. Please try WhatsApp instead.",
    };
  }
}
