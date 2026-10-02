import React from "react";
import Image from "next/image";

export default function AboutBanner() {
    return (
        <section className="relative w-full h-[80vh] md:h-screen min-h-[600px] flex items-center pt-20">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/about/banner-1.png"
                    alt="About Smrkonova - Mountain Ridge"
                    fill
                    priority
                    className="object-cover object-center"
                />
            </div>

            {/* Content Container */}
            <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-0 relative z-10 flex flex-col justify-center">
                <div className="max-w-2xl lg:max-w-3xl mt-12 md:mt-0">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4.5rem] font-black text-[#111] leading-[1.1] tracking-tight uppercase mb-6 md:mb-8">
                        SMRKONOVA TAKES THE FLIGHT FIRST<br className="hidden md:block" />
                        TO GROW THE WAY FORWARD.
                    </h1>
                    <p className="text-[#444] text-sm md:text-base lg:text-lg leading-relaxed md:leading-[1.8] font-medium max-w-xl lg:max-w-2xl">
                        We work with businesses to understand their operations, marketing,
                        and digital presence, creating a unified growth system that brings
                        together strategy, design, engineering, marketing, and technology. By
                        building connected products, experiences, and scalable systems, we
                        help businesses move faster, adapt with confidence, and grow with
                        intention.
                    </p>
                </div>
            </div>
        </section>
    );
}
