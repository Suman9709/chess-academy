'use client';

import { useState } from "react";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbwAlhhR4cD2uF1u-d1OM9mVGo-veXDuMzv0A9NibujXg91w5beWVHfFdC-MB_uopVwqDw/exec",
                {
                    method: "POST",
                    body: JSON.stringify(formData),
                }
            );

            const result = await response.json();
            console.log(result);

            alert("Message sent successfully!");

            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
            });
        } catch (error) {
            console.error(error);
            alert("Failed to send message.");
        }

        setLoading(false);
    };

    return (
        <section
            id="contact"
            className="bg-linear-to-b from-white to-orange-50 py-16 px-4"
        >
            <div className="flex flex-col w-full justify-center items-center">
                {/* Heading */}
                <div className="flex flex-col items-start mb-6">
                    <p className="text-black font-semibold tracking-wider uppercase text-lg md:text-2xl mb-2">
                        Contact Us
                    </p>
                    <div className="w-24 h-0.5 bg-linear-to-r from-[#E2874B] via-[#ba713e]/50 to-transparent" />
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="w-full md:w-1/2 lg:w-125 bg-white rounded-2xl shadow-xl border border-orange-100 p-6 md:p-8 space-y-5"
                >
                    {/* Name */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-semibold text-gray-700"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter your name"
                            className="mt-2 block w-full rounded-xl border-2 border-[#E2874B]/60 px-4 py-3 text-black shadow-sm outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#E2874B] focus:ring-4 focus:ring-[#E2874B]/20"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Enter your email"
                            className="mt-2 block w-full rounded-xl border-2 border-[#E2874B]/60 px-4 py-3 text-black shadow-sm outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#E2874B] focus:ring-4 focus:ring-[#E2874B]/20"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label
                            htmlFor="phone"
                            className="block text-sm font-semibold text-gray-700"
                        >
                            Phone
                        </label>
                        <input
                            type="text"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="Enter your phone number"
                            className="mt-2 block w-full rounded-xl border-2 border-[#E2874B]/60 px-4 py-3 text-black shadow-sm outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#E2874B] focus:ring-4 focus:ring-[#E2874B]/20"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-sm font-semibold text-gray-700"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Write your message..."
                            className="mt-2 block w-full rounded-xl border-2 border-[#E2874B]/60 px-4 py-3 text-black shadow-sm outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#E2874B] focus:ring-4 focus:ring-[#E2874B]/20 resize-none"
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#E2874B] text-white px-6 py-3 rounded-xl shadow-md hover:bg-[#d06b2c] hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
        </section>
    );
};