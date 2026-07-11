import emailjs from "@emailjs/browser";

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export async function sendContactEmail(data: ContactFormData) {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      "EmailJS configuration is missing. Check your .env.local file."
    );
  }

  return emailjs.send(serviceId, templateId, { ...data }, publicKey);
}