"use client";

import { useState } from "react";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface FormData {
    name: string;
    email: string;
    phone: string;
    company: string;
    service: string;
    budget: string;
    message: string;
}

export function ContactModal({
    isOpen,
    onClose,
}: ContactModalProps) {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        message: "",
    });

    const [loading, setLoading] = useState<boolean>(false);
    const [status, setStatus] = useState<"success" | "error" | "">("");

    if (!isOpen) return null;

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        setLoading(true);
        setStatus("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Something went wrong");
            }

            setStatus("success");

            setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                service: "",
                budget: "",
                message: "",
            });

            setTimeout(() => {
                onClose();
                setStatus("");
            }, 2500);
        } catch (error) {
            console.error(error);
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl md:p-10">
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-xl hover:bg-gray-200"
                    aria-label="Close"
                >
                    ×
                </button>

                <div className="mb-8">
                    <p className="font-mono text-xs tracking-[0.2em] text-blue-600">
                        START A PROJECT
                    </p>

                    <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                        Let&apos;s build something great.
                    </h2>

                    <p className="mt-3 text-gray-500">
                        Tell us about your project and we&apos;ll get back to you with the
                        next steps.
                    </p>
                </div>

                {status === "success" ? (
                    <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
                        <div className="text-4xl">🚀</div>

                        <h3 className="mt-4 text-xl font-semibold text-green-700">
                            Project inquiry received!
                        </h3>

                        <p className="mt-2 text-green-600">
                            Thanks for reaching out. We&apos;ll get back to you soon.
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid gap-5 md:grid-cols-2">
                            <div>
                                <label className="mb-2 block text-sm font-medium">
                                    Full Name *
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium">
                                    Email Address *
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@company.com"
                                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500"
                                />
                            </div>
                        </div>

                        <div className="grid gap-5 md:grid-cols-2">
                            <div>
                                <label className="mb-2 block text-sm font-medium">
                                    Phone / WhatsApp *
                                </label>

                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+91 XXXXX XXXXX"
                                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium">
                                    Company Name
                                </label>

                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Your company"
                                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500"
                                />
                            </div>
                        </div>

                        <div className="grid gap-5 md:grid-cols-2">
                            <div>
                                <label className="mb-2 block text-sm font-medium">
                                    What do you need? *
                                </label>

                                <select
                                    name="service"
                                    required
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500"
                                >
                                    <option value="">Select a service</option>
                                    <option value="Website Development">
                                        Website Development
                                    </option>
                                    <option value="Web Application">
                                        Web Application
                                    </option>
                                    <option value="SaaS / MVP Development">
                                        SaaS / MVP Development
                                    </option>
                                    <option value="Mobile App Development">
                                        Mobile App Development
                                    </option>
                                    <option value="UI/UX Design">UI/UX Design</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium">
                                    Estimated Budget
                                </label>

                                <select
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500"
                                >
                                    <option value="">Select budget</option>
                                    <option value="Under ₹25,000">Under ₹25,000</option>
                                    <option value="₹25,000 - ₹50,000">
                                        ₹25,000 - ₹50,000
                                    </option>
                                    <option value="₹50,000 - ₹1,00,000">
                                        ₹50,000 - ₹1,00,000
                                    </option>
                                    <option value="₹1,00,000 - ₹3,00,000">
                                        ₹1,00,000 - ₹3,00,000
                                    </option>
                                    <option value="₹3,00,000+">₹3,00,000+</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium">
                                Tell us about your project *
                            </label>

                            <textarea
                                name="message"
                                required
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell us what you're planning to build..."
                                className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500"
                            />
                        </div>

                        {status === "error" && (
                            <p className="text-sm text-red-500">
                                Something went wrong. Please try again.
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-full bg-black px-6 py-4 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {loading ? "Sending..." : "Submit Project Inquiry →"}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}