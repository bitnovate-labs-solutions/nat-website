"use server";

export type ContactFormState = {
  success?: boolean;
  message?: string;
};

export async function submitWeb3Form(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const apiKey = process.env.WEB3FORMS_API_KEY;

  if (!apiKey) {
    return {
      success: false,
      message: "Form is not configured. Please contact us via WhatsApp.",
    };
  }

  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const contact = formData.get("contact")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();
  const question = formData.get("question")?.toString().trim();
  const subject =
    formData.get("subject")?.toString().trim() || "Property Enquiry";
  const formType = formData.get("formType")?.toString() || "contact";

  if (!name) {
    return { success: false, message: "Please enter your name." };
  }

  const resolvedContact = contact || phone || email;
  if (!resolvedContact) {
    return { success: false, message: "Please enter your contact details." };
  }

  if (formType === "email" && !question) {
    return { success: false, message: "Please tell us what you're looking for." };
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: apiKey,
        name,
        email: email || undefined,
        phone: contact || phone || undefined,
        message:
          question ||
          `Register interest enquiry from ${name}. Contact: ${resolvedContact}`,
        subject,
      }),
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
