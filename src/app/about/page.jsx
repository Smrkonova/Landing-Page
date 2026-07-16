import React from "react";
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="w-full bg-[#f8f9fa] min-h-screen">
            {/* Banner Section */}
            <section className="relative w-full h-[80vh] md:h-screen min-h-[600px] flex items-center pt-20">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/about/banner.png"
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

            {/* Founder Section */}
            <section className="w-full bg-white text-black py-24 md:py-32">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left: Image */}
                    <div className="relative w-full h-[500px] md:h-[700px]">
                        <Image
                            src="/images/about/mohit.png"
                            alt="Mohit Ravindran"
                            fill
                            className="object-cover lg:object-contain object-left"
                        />
                    </div>

                    {/* Right: Text Content */}
                    <div className="flex flex-col space-y-8">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-light leading-[1.2] text-[#111] uppercase tracking-wide">
                            REAL PROGRESS IS
                            ENGINEERED WITH
                            SYSTEMS.
                        </h2>

                        <div className="space-y-1">
                            <h3 className="text-sm md:text-base font-bold text-[#111] uppercase tracking-wider">
                                MOHIT RAVINDRAN
                            </h3>
                            <p className="text-xs md:text-sm text-[#666] font-medium tracking-wide">
                                Founder & Product Designer
                            </p>
                        </div>

                        <div className="space-y-6 text-[#555] text-sm md:text-base leading-relaxed md:leading-[1.8]">
                            <p>
                                Mohit is the strategic force behind every project, combining product thinking,
                                business strategy, and design to solve complex challenges. Having collaborated
                                on more than a hundred digital products across healthcare, fintech, ecommerce,
                                and enterprise software, he brings a deep understanding of what it takes to
                                build products that succeed in the real world.
                            </p>
                            <p>
                                Working closely with founders, developers, and business leaders, Mohit
                                approaches every project with a systems mindset aligning business goals with
                                user needs to create experiences that are intuitive, scalable, and commercially
                                effective. He believes great products aren't just designed, they're engineered to
                                deliver measurable value, adapt over time, and become the foundation for
                                business growth.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
