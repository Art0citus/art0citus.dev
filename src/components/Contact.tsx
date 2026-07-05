"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    CheckCircle,
    AlertCircle,
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
        href: "#",
    },
];

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isLoading, setIsLoading] = useState(false);

    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({
        type: null,
        message: "",
    });

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        // We'll add EmailJS here next.
    };

    return (
        <section
            id="contact"
            className="bg-white py-24"
        >
            <div className="mx-auto max-w-6xl px-6">

                {/* Heading */}

                <div className="mb-16 text-center">
                    <h2 className="text-5xl font-bold text-gray-900">
                        Let's Connect
                    </h2>

                    <p className="mt-4 text-gray-600">
                        Have an idea, opportunity, or just want to say hi?
                        I'd love to hear from you.
                    </p>
                </div>

                {/* Content */}

                <div className="grid gap-10 lg:grid-cols-2">

                    {/* Contact Form */}

                    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >

                            {/* Name */}

                            <div>
                                <label className="mb-2 block font-medium">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            name: e.target.value,
                                        })
                                    }
                                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-sky-400"
                                />
                            </div>

                            {/* Email */}

                            <div>
                                <label className="mb-2 block font-medium">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            email: e.target.value,
                                        })
                                    }
                                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-sky-400"
                                />
                            </div>

                            {/* Message */}

                            <div>
                                <label className="mb-2 block font-medium">
                                    Message
                                </label>

                                <textarea
                                    rows={6}
                                    required
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            message: e.target.value,
                                        })
                                    }
                                    className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-sky-400"
                                />

                            </div>

                            <button
                                disabled={isLoading}
                                className="flex w-full items-center justify-center gap-2 rounded-xl bg-sky-500 px-6 py-4 font-semibold text-white transition hover:bg-sky-600"
                            >
                                {isLoading ? (
                                    "Sending..."
                                ) : (
                                    <>
                                        <Send size={18} />
                                        Send Message
                                    </>
                                )}
                            </button>

                            {submitStatus.type && (
                                <div
                                    className={`flex items-center gap-3 rounded-xl p-4 ${submitStatus.type === "success"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-red-100 text-red-700"
                                        }`}
                                >
                                    {submitStatus.type === "success" ? (
                                        <CheckCircle size={18} />
                                    ) : (
                                        <AlertCircle size={18} />
                                    )}

                                    <p>{submitStatus.message}</p>
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Contact Info */}

                    <div className="space-y-6">

                        <h3 className="text-2xl font-semibold">
                            Contact Information
                        </h3>

                        {contactInfo.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="flex items-center gap-4 rounded-2xl border border-gray-200 p-5 transition hover:bg-gray-50"
                            >
                                <item.icon
                                    className="text-sky-500"
                                    size={24}
                                />

                                <div>
                                    <p className="text-sm text-gray-500">
                                        {item.label}
                                    </p>

                                    <p className="font-medium">
                                        {item.value}
                                    </p>
                                </div>
                            </a>
                        ))}

                        <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
                            <div className="mb-2 flex items-center gap-2">
                                <span className="h-3 w-3 rounded-full bg-green-500"></span>

                                <p className="font-semibold">
                                    Available for Opportunities
                                </p>
                            </div>

                            <p className="text-sm text-gray-600">
                                I'm actively looking for Software Engineering,
                                Backend, and AI-related opportunities.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}