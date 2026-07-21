import React from "react";
import Image from "next/image";
import AboutBanner from "@/components/about/AboutBanner";

export default function AboutPage() {
    return (
        <main className="w-full bg-[#f8f9fa] min-h-screen">
            {/* Banner Section with Scroll Sequence */}
            <AboutBanner />
            {/* Growth Studio Section */}
            <section className="w-full bg-white text-black py-24 md:py-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-0 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">

                    {/* Left: Text Content */}
                    <div className="flex flex-col space-y-12 lg:col-span-6 xl:col-span-5 z-10">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.1] text-[#111] uppercase tracking-tight whitespace-nowrap">
                            <span className="font-black">WE ARE A </span>
                            <span className="font-light">BUSINESS-FORWARD</span><br />
                            <span className="font-black">GROWTH STUDIO</span><br />
                            <span className="font-black">CREATING </span>
                            <span className="font-light">LONG-TERM</span><br />
                            <span className="font-black">VALUE</span>
                        </h2>

                        <div className="space-y-6 text-[#555] text-[10px] md:text-xs leading-relaxed md:leading-[1.8] font-medium max-w-sm">
                            <p>
                                Smrkonova is a boutique growth agency led by tech solutions.
                                We specialise in holistic brand growth for brands across healthcare,
                                manufacturing, e-commerce, real estate, education among other
                                industries. We specialise in branding, brand marketing, marketing
                                strategy and operational growth.
                            </p>
                            <p>
                                Our mission at Smrkonova is to help iconic brands grow efficiently,
                                sustainably and ultimately profitably leading to growth from the
                                operational and marketing front.
                            </p>
                            <p>
                                We make it easy for our clients to grow and create meaningful
                                connections.
                            </p>
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[550px] lg:col-span-6 xl:col-span-7 mt-12 lg:mt-0 z-0 flex items-end justify-end">
                        <div className="relative w-full h-full lg:w-[110%] lg:h-[110%]">
                            <Image
                                src="/images/about/about.png"
                                alt="Smrkonova Growth Studio Cityscape"
                                fill
                                className="object-contain object-right-bottom"
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* Founder Section */}
            <section className="w-full bg-white text-black pt-24 md:pt-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-end">

                    {/* Left: Image */}
                    <div className="relative w-full h-[500px] md:h-[700px]">
                        <Image
                            src="/images/about/mohitr.png"
                            alt="Mohit Ravindran"
                            fill
                            className="object-cover lg:object-contain object-bottom lg:object-left-bottom"
                        />
                    </div>

                    {/* Right: Text Content */}
                    <div className="flex flex-col space-y-8 pb-24 md:pb-32">
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
            {/* Journey CTA Section */}
            <section className="relative w-full py-24 md:py-32 lg:py-48 flex items-center justify-center h-[500px] overflow-hidden">
                {/* SVG Filter Definition */}
                <svg width="0" height="0" style={{ position: "absolute" }}>
                    <defs>
                        <filter id="journey-glass-distortion" x="-20%" y="-20%" width="140%" height="140%">
                            <feTurbulence type="fractalNoise" baseFrequency="0.005 0.005" numOctaves="2" seed="9" result="noise" />
                            <feGaussianBlur in="noise" stdDeviation="1" result="blurred" />
                            <feDisplacementMap in="SourceGraphic" in2="blurred" scale="10" xChannelSelector="R" yChannelSelector="G" />
                        </filter>
                    </defs>
                </svg>

                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/about/journey-bg.png"
                        alt="Forest Landscape with Eagle"
                        fill
                        className="object-cover object-center"
                    />
                </div>

                {/* Glass Card Container */}
                <div className="relative z-10 w-[90%] max-w-3xl mx-auto rounded-3xl p-[1px] overflow-hidden group h-[408px] flex flex-col justify-center">

                    {/* Glass Backdrop with Distortion */}
                    <div
                        className="absolute inset-0 z-0 rounded-3xl"
                        style={{
                            backdropFilter: 'url(#journey-glass-distortion) blur(4px)',
                            WebkitBackdropFilter: 'url(#journey-glass-distortion) blur(4px)',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            border: '1px solid rgba(255,255,255,0.3)',
                        }}
                    ></div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-16 space-y-6">
                        <h2 className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-black text-white tracking-widest uppercase leading-[1.2]">
                            THE JOURNEY<br />CONTINUES.
                        </h2>

                        <p className="text-[12px] text-gray-200 max-w-lg mx-auto font-medium leading-[1.8] tracking-wide">
                            Each challenge sharpens our thinking. Every solution expands our
                            understanding, revealing a better path forward. Get to the vantage
                            point for your next climb.
                        </p>

                        <div className="pt-4">
                            <button suppressHydrationWarning className="px-8 py-4 bg-transparent border border-white text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors duration-300">
                                TALK TO THE TEAM
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
