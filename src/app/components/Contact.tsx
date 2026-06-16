'use client';

export const Contact = () => {
    return (
        <section
            id="contact"
            className="bg-linear-to-b from-white to-orange-50 py-16 px-4"
        >
            <div className="flex flex-col w-full justify-center items-center">
                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-2">
                    Contact Us
                </h2>

                <div className="mb-6 flex justify-center items-center">
                    <img
                        src="/Vector.svg"
                        alt="vector"
                        className="w-24 md:w-32 h-auto"
                    />
                </div>

                {/* Form Card */}
                <form className="w-full md:w-1/2 lg:w-[500px] bg-white rounded-2xl shadow-xl border border-orange-100 p-6 md:p-8 space-y-5">
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
                            placeholder="Write your message..."
                            className="mt-2 block w-full rounded-xl border-2 border-[#E2874B]/60 px-4 py-3 text-black shadow-sm outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#E2874B] focus:ring-4 focus:ring-[#E2874B]/20 resize-none"
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#E2874B] text-white px-6 py-3 rounded-xl shadow-md hover:bg-[#d06b2c] hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};