"use client";

import { useState, FormEvent } from "react";
import { sendContactEmail } from "@/lib/email";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  User,
  MessageSquare,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mritik424@gmail.com",
    href: "mailto:mritik424@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8433175656",
    href: "tel:+918433175656",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Delhi, India",
    href: undefined,
  },
];

type SubmitStatus = {
  type: "success" | "error" | null;
  message: string;
};

function FormField({
  id,
  label,
  type = "text",
  icon: Icon,
  value,
  onChange,
  placeholder,
  rows,
}: {
  id: string;
  label: string;
  type?: string;
  icon: typeof Mail;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  rows?: number;
}) {
  const shared =
    "peer w-full rounded-xl border border-border bg-background py-3 pl-11 pr-4 text-sm outline-none transition-colors duration-200 focus:border-foreground/40";

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-xs font-medium uppercase tracking-wide text-muted-foreground"
      >
        {label}
      </label>

      <div className="relative">
        {rows ? (
          <textarea
            id={id}
            rows={rows}
            required
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`${shared} resize-none`}
          />
        ) : (
          <input
            id={id}
            type={type}
            required
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={shared}
          />
        )}

        <Icon
          size={16}
          className={`pointer-events-none absolute left-4 text-muted-foreground transition-colors duration-200 peer-focus:text-foreground ${
            rows ? "top-3.5" : "top-1/2 -translate-y-1/2"
          }`}
        />
      </div>
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({
    type: null,
    message: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      await sendContactEmail(formData);

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      const message =
        err instanceof Error ? err.message : "Failed to send message. Please try again later.";
      setSubmitStatus({ type: "error", message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative flex justify-center overflow-hidden bg-background px-4 py-40"
    >
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-muted/40 blur-3xl" />
      </div>

      <div className="relative z-10 flex w-full max-w-2xl flex-col gap-10">
        <div className="text-center">
          <h2 className="font-pixelta text-5xl">Let&apos;s Connect</h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
            Got an idea or project? I&apos;d love to hear about it and explore
            how we can work together.
          </p>
        </div>

        {/* Form */}
        <div className="rounded-3xl border border-border bg-card p-8 shadow-2xl sm:p-10">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent">
              <MessageSquare size={18} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Contact form
              </p>
              <h3 className="text-lg font-bold">Send a message</h3>
            </div>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <FormField
                id="name"
                label="Name"
                icon={User}
                value={formData.name}
                onChange={(v) => setFormData({ ...formData, name: v })}
                placeholder="Your name"
              />

              <FormField
                id="email"
                label="Email"
                type="email"
                icon={Mail}
                value={formData.email}
                onChange={(v) => setFormData({ ...formData, email: v })}
                placeholder="you@example.com"
              />
            </div>

            <FormField
              id="message"
              label="Message"
              icon={MessageSquare}
              rows={5}
              value={formData.message}
              onChange={(v) => setFormData({ ...formData, message: v })}
              placeholder="What's on your mind?"
            />

            <button
              type="submit"
              disabled={isLoading}
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3.5 text-sm font-medium text-background transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {isLoading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-background/30 border-t-background" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </>
              )}
            </button>

            {submitStatus.type && (
              <div
                key={submitStatus.message}
                className={`flex animate-[slide-fade-in_0.3s_ease-out] items-center gap-3 rounded-xl p-4 ${
                  submitStatus.type === "success"
                    ? "border border-green-500/20 bg-green-500/10 text-green-600 dark:text-green-400"
                    : "border border-red-500/20 bg-red-500/10 text-red-600 dark:text-red-400"
                }`}
              >
                {submitStatus.type === "success" ? (
                  <CheckCircle size={18} className="shrink-0" />
                ) : (
                  <AlertCircle size={18} className="shrink-0" />
                )}
                <p className="text-sm">{submitStatus.message}</p>
              </div>
            )}
          </form>
        </div>

        {/* Contact info row */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {contactInfo.map((item) => {
            const inner = (
              <>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <item.icon size={16} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                  <div className="truncate text-sm font-medium">{item.value}</div>
                </div>
              </>
            );

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-2xl transition-all duration-200 hover:-translate-y-1 hover:border-neutral-300 dark:hover:border-neutral-700"
              >
                {inner}
              </a>
            ) : (
              <div
                key={item.label}
                className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-2xl transition-all duration-200 hover:-translate-y-1 hover:border-neutral-300 dark:hover:border-neutral-700"
              >
                {inner}
              </div>
            );
          })}
        </div>

        {/* Availability banner */}
        <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 shadow-2xl">
          <span className="relative flex h-3 w-3 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
          </span>
          <div>
            <p className="text-sm font-medium">Currently Available</p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Open to new opportunities and exciting projects — let&apos;s talk!
            </p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slide-fade-in {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}