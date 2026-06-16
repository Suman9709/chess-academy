'use client';

import Image from "next/image";

export const Hero = () => {
    return (
        <div className="w-full min-h-[75vh] bg-linear-to-b from-[#120a07] via-[#2d120a] to-[#5a2512] flex items-center">
            
            <div className="container mx-auto px-4 py-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
                
                {/* Text Section */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                        Welcome to Devansh Academy
                    </h1>

                    <p className="text-base md:text-lg text-gray-300 mb-6">
                        Unlock your potential with our expert coaching and personalized training programs.
                    </p>

                    <a
                        href="#contact"
                        className="inline-block bg-[#E2874B] text-white px-6 py-3 rounded-lg hover:bg-[#d06b2c] transition-colors duration-300"
                    >
                        Book a Session
                    </a>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="relative w-full max-w-[320px] md:max-w-105 horse-cinematic">
                        <Image
                            src="/hor.png"
                            alt="Knight"
                            width={400}
                            height={400}
                            className="w-full h-auto object-contain"
                            priority
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};