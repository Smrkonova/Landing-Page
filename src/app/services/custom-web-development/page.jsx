import Image from 'next/image';
import IndustriesSlider from '@/components/services/IndustriesSlider';
import BuiltFromScratchSection from '@/components/services/BuiltFromScratchSection';
import WhatMakesUsDifferentSlider from '@/components/services/WhatMakesUsDifferentSlider';
import ModernExperiencesSection from '@/components/services/ModernExperiencesSection';
import TechnologySection from '@/components/services/TechnologySection';
import FeaturesSliderSection from '@/components/services/FeaturesSliderSection';
import EngagementSliderSection from '@/components/services/EngagementSliderSection';
import ProcessScroll from '@/components/services/ProcessScroll';
import FaqSection from '@/components/services/FaqSection';

export default function CustomWebDevelopmentPage() {
    return (
        <main>
            <div
                className="min-h-screen w-full relative overflow-hidden flex flex-col justify-between font-sans"
                style={{ background: 'linear-gradient(67.52deg, #004496 -0.39%, #FFD861 49.92%, #009BFB 93.89%)' }}
            >
                {/* Liquid Glass SVG Filter Def */}
                <svg width="0" height="0" style={{ position: "absolute" }}>
                    <defs>
                        <filter id="liquid-glass-distortion-cta" x="-20%" y="-20%" width="140%" height="140%">
                            <feTurbulence type="fractalNoise" baseFrequency="0.005 0.005" numOctaves="2" seed="9" result="noise" />
                            <feGaussianBlur in="noise" stdDeviation="1" result="blurred" />
                            <feDisplacementMap in="SourceGraphic" in2="blurred" scale="60" xChannelSelector="R" yChannelSelector="G" />
                        </filter>
                    </defs>
                </svg>

                {/* Background SVG Images and Effects */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                    {/* Glow behind text */}
                    <div
                        className="absolute w-full max-w-[400px] lg:max-w-[300px] aspect-square rounded-full -translate-x-24 lg:-translate-x-[350px] -translate-y-12 lg:-translate-y-12 z-10"
                        style={{
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.05) 100%)',
                            border: '1px solid rgba(255,255,255,0.18)',
                            backdropFilter: 'blur(40px) url(#liquid-glass-distortion-cta)',
                            WebkitBackdropFilter: 'blur(40px) url(#liquid-glass-distortion-cta)'
                        }}
                    />

                    {/* Glow behind eagle */}
                    <div
                        className="absolute w-full max-w-[300px] lg:max-w-[300px] aspect-square rounded-full translate-x-32 -translate-y-16 lg:translate-x-48 lg:-translate-y-24"
                        style={{
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.05) 100%)',
                            border: '1px solid rgba(255,255,255,0.18)',
                            backdropFilter: 'blur(40px) url(#liquid-glass-distortion-cta)',
                            WebkitBackdropFilter: 'blur(40px) url(#liquid-glass-distortion-cta)'
                        }}
                    />

                    <Image
                        src="/images/services/website/banner.svg"
                        alt="Custom web development showcase"
                        width={1400}
                        height={1000}
                        className="w-full max-w-[800px] object-contain translate-x-8 translate-y-12 lg:translate-x-30 lg:translate-y-16 relative z-10"
                        priority
                    />
                    <Image
                        src="/images/services/website/eagle.png"
                        alt="Flying Eagle"
                        width={800}
                        height={800}
                        className="absolute w-full max-w-[300px] md:max-w-[300px] object-contain translate-x-24 -translate-y-16 lg:translate-x-64 lg:-translate-y-16 z-30"
                        priority
                    />
                </div>

                {/* Main Content Area */}
                <div className="relative z-40 w-full max-w-7xl mx-auto px-4 md:px-0 pt-24 md:pt-32 flex justify-between flex-grow">
                    {/* Left Column */}
                    <div className="flex flex-col text-white max-w-3xl h-full">
                        <div>
                            <h1 className="text-[90px] md:text-[120px] lg:text-[150px] font-[200] leading-[1.05] tracking-tight mb-8">
                                READY <br /> TO FLY?
                            </h1>
                            <div className="flex flex-wrap gap-4 mb-16">
                                <button suppressHydrationWarning className="bg-[#f0f0f0] text-black px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-white transition-colors">
                                    CREATE YOUR CUSTOM WEBSITE
                                </button>
                                <button suppressHydrationWarning className="border border-white/60 text-white px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-white/10 transition-colors">
                                    SEE OUR WORK
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Navigation) */}
                    <div className="hidden lg:flex flex-col text-white text-right space-y-16 pt-12">
                        <div>
                            <h3 className="uppercase tracking-[0.05em] text-xs font-semibold leading-relaxed text-white">
                                Trusted by teams<br />
                                across 4 continents
                            </h3>
                        </div>

                        <ul className="flex flex-col gap-2 lg:gap-[50px] text-white/80 font-normal text-[15px]">
                            <li className="hover:text-white cursor-pointer transition-colors">Healthcare</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Real Estate</li>
                            <li className="hover:text-white cursor-pointer transition-colors">SaaS</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Ecommerce</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Enterprise</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Row Area */}
                <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-0 pb-12 flex flex-col lg:flex-row items-end justify-between gap-12 lg:gap-8">
                    {/* Bottom Left Text */}
                    <div className="flex-shrink-0 lg:w-[35%] mb-4 lg:mb-0">
                        <p className="text-sm md:text-[15px] font-medium leading-[1.9] max-w-[450px] uppercase tracking-[0.05em] text-white">
                            Every business is different.<br />
                            Your website should be too —<br />
                            engineered from zero,<br />
                            not stitched from templates.
                        </p>
                    </div>

                    {/* Bottom Stats Bar */}
                    <div className="flex-grow w-full lg:w-[65%] border border-white/20 rounded-3xl px-8 md:px-12 py-8 flex flex-wrap md:flex-nowrap items-center justify-between backdrop-blur-md bg-white/5 shadow-2xl">
                        <div className="flex flex-col items-start w-1/2 md:w-auto mb-6 md:mb-0">
                            <span className="text-4xl lg:text-[44px] font-[200] text-white mb-1 tracking-tight">120+</span>
                            <span className="text-white/60 text-xs font-medium tracking-wide">Projects</span>
                        </div>
                        <div className="hidden md:block w-[1px] h-12 bg-white/20"></div>

                        <div className="flex flex-col items-start w-1/2 md:w-auto mb-6 md:mb-0">
                            <span className="text-4xl lg:text-[44px] font-[200] text-white mb-1 tracking-tight">9yrs</span>
                            <span className="text-white/60 text-xs font-medium tracking-wide">Building the web</span>
                        </div>
                        <div className="hidden md:block w-[1px] h-12 bg-white/20"></div>

                        <div className="flex flex-col items-start w-1/2 md:w-auto">
                            <span className="text-4xl lg:text-[44px] font-[200] text-white mb-1 tracking-tight">24/7</span>
                            <span className="text-white/60 text-xs font-medium tracking-wide">Support</span>
                        </div>
                        <div className="hidden md:block w-[1px] h-12 bg-white/20"></div>

                        <div className="flex flex-col items-start w-1/2 md:w-auto">
                            <span className="text-4xl lg:text-[44px] font-[200] text-white mb-1 tracking-tight">0</span>
                            <span className="text-white/60 text-xs font-medium tracking-wide">Templates used</span>
                        </div>
                    </div>
                </div>
            </div>
            <IndustriesSlider />
            <BuiltFromScratchSection />
            <WhatMakesUsDifferentSlider />
            <ModernExperiencesSection />
            <TechnologySection />
            <FeaturesSliderSection />
            <ProcessScroll />
            <EngagementSliderSection />
            <FaqSection />
        </main>
    );
}
