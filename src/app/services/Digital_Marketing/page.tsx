import Image from 'next/image';
import IndustriesSlider from "@/components/services/Digital_Marketing/IndustriesSlider";
import BuiltFromScratchSection from "@/components/services/Digital_Marketing/BuiltFromScratchSection";
import WhatMakesUsDifferentSlider from "@/components/services/Digital_Marketing/WhatMakesUsDifferentSlider";
import ModernExperiencesSection from "@/components/services/Digital_Marketing/ModernExperiencesSection";
import TechnologySection from "@/components/services/Digital_Marketing/TechnologySection";
import FeaturesSliderSection from "@/components/services/Digital_Marketing/FeaturesSliderSection";
import StoryExperience from "@/components/animations/StoryExperience";
import EngagementSliderSection from "@/components/services/Digital_Marketing/EngagementSliderSection";
import FaqSection from '@/components/services/Digital_Marketing/FaqSection';

export default function DigitalMarketingPage() {
    return (
            <div className="w-full max-w-full overflow-x-clip">
                <div className="min-h-screen w-full relative overflow-hidden flex flex-col justify-between font-sans" style={{ background: 'linear-gradient(67.52deg, #004496 -0.39%, #FF8B61 49.92%, #009BFB 93.89%)' }}>
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
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 overflow-hidden">
                        {/* Glow behind eagle */}
                        <div className="relative w-full max-w-[800px] translate-x-4 sm:translate-x-8 translate-y-12 lg:translate-x-30 lg:translate-y-16 z-10 Luminosity">
                            {/* Base Image */}
                            <Image
                                src="/images/services/website/image32.png"
                                alt="Custom web development showcase"
                                width={680}
                                height={440}
                                className="w-[300px] sm:w-[480px] lg:w-[680px] h-auto object-contain opacity-60 ml-0 lg:ml-40"
                                priority
                            />
    
                            {/* Top-Left Frosted Glass Blur */}
                            <div
                                className="absolute top-0 left-0 w-2/3 h-2/3 pointer-events-none backdrop-blur-md"
                                style={{
                                    maskImage: 'radial-gradient(circle at top left, black 20%, transparent 70%)',
                                    WebkitMaskImage: 'radial-gradient(circle at top left, black 20%, transparent 70%)'
                                }}
                            />
                        </div>
                    </div>
    
                    {/* Main Content Area */}
                    <div className="relative z-40 w-full max-w-7xl mx-auto px-4 md:px-0 pt-36 sm:pt-44 md:pt-32 flex justify-between flex-grow">
                        {/* Left Column */}
                        <div className="flex flex-col justify-end md:justify-start text-white max-w-3xl h-full pb-2 md:pb-0 text-center md:text-left items-center md:items-start w-full">
                            <div className="mt-auto md:mt-0 w-full flex flex-col items-center md:items-start">
                                <h1 className="text-[clamp(2.75rem,5.5vw+1rem,5.5rem)] font-[100] leading-[0.95] tracking-[0] uppercase mb-4 sm:mb-6 md:mb-8 text-center md:text-left">
                                    Digital<br />
                                    Marketing
                                </h1>

                                <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-3 sm:gap-4 mt-3 sm:mt-4 md:mt-0 mb-0 md:mb-8 w-full sm:w-auto">
                                    <button suppressHydrationWarning className="w-auto bg-[#f0f0f0] text-black px-6 py-3.5 text-[clamp(10px,0.4vw+4px,12px)] font-[500] uppercase tracking-[0.15em] hover:bg-white transition-colors text-center whitespace-nowrap">
                                        GROW YOUR BUSINESS
                                    </button>
                                    <button suppressHydrationWarning className="w-auto border border-white/60 text-white px-6 py-3.5 text-[clamp(10px,0.4vw+4px,12px)] font-[500] uppercase tracking-[0.15em] hover:bg-white/10 transition-colors text-center whitespace-nowrap">
                                        SCHEDULE A STRATEGY CALL
                                    </button>
                                </div>
                            </div>
                        </div>


                        {/* Right Column (Navigation) */}
                        <div className="hidden lg:flex flex-col text-white text-right space-y-16 pt-12">
                            <div>
                                <h3 className="uppercase tracking-[0.05em] text-[clamp(11px,0.4vw+5px,13px)] font-semibold leading-relaxed text-white">
                                    Trusted by teams<br />
                                    across 4 continents
                                </h3>
                            </div>

                            <ul className="flex flex-col gap-2 lg:gap-[50px] text-white/80 font-normal text-[clamp(13px,0.5vw+5px,15px)]">
                                <li className="hover:text-white cursor-pointer transition-colors">Healthcare</li>
                                <li className="hover:text-white cursor-pointer transition-colors">Real Estate</li>
                                <li className="hover:text-white cursor-pointer transition-colors">SaaS</li>
                                <li className="hover:text-white cursor-pointer transition-colors">Ecommerce</li>
                                <li className="hover:text-white cursor-pointer transition-colors">Enterprise</li>
                            </ul>
                        </div>
                    </div>
                    {/* Bottom Stats Bar */}
                    <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-0 mt-6 sm:mt-0 pb-8 lg:pb-12 flex flex-col lg:flex-row items-end justify-between gap-4 lg:gap-8">
                        {/* Bottom Left Text */}
                        <div className="hidden lg:block lg:w-[35%] mb-4 lg:mb-0">
                            <p className="text-[clamp(0.8125rem,0.6vw+0.65rem,1.125rem)] font-[400] leading-[1.8] max-w-[450px] uppercase tracking-[0.05em] text-white">
                                Data-driven performance campaigns, organic search growth, and conversion funnels engineered to scale high-intent customer acquisition.
                            </p>
                        </div>

                        {/* Bottom Stats Bar */}
                        <div className="flex-grow w-full lg:w-[65%] border border-white/20 rounded-3xl px-8 md:px-12 py-6 sm:py-8 flex flex-wrap md:flex-nowrap items-center justify-between backdrop-blur-md bg-white/5 shadow-2xl">
                            <div className="flex flex-col items-start w-1/2 md:w-auto mb-6 md:mb-0">
                                <span className="text-[clamp(1.125rem,2.5vw+0.25rem,2.3125rem)] font-[200] text-white mb-1 tracking-tight">120+</span>
                                <span className="text-white/60 text-[clamp(0.75rem,0.7vw+0.25rem,0.75rem)] font-medium tracking-wide">Campaigns Scaled</span>
                            </div>
                            <div className="hidden md:block w-[1px] h-12 bg-white/20"></div>

                            <div className="flex flex-col items-start w-1/2 md:w-auto mb-6 md:mb-0">
                                <span className="text-[clamp(1.125rem,2.5vw+0.25rem,2.3125rem)] font-[200] text-white mb-1 tracking-tight">9yrs</span>
                                <span className="text-white/60 text-[clamp(0.75rem,0.7vw+0.25rem,0.75rem)] font-medium tracking-wide">Growth Marketing</span>
                            </div>
                            <div className="hidden md:block w-[1px] h-12 bg-white/20"></div>

                            <div className="flex flex-col items-start w-1/2 md:w-auto">
                                <span className="text-[clamp(1.125rem,2.5vw+0.25rem,2.3125rem)] font-[200] text-white mb-1 tracking-tight">24/7</span>
                                <span className="text-white/60 text-[clamp(0.75rem,0.7vw+0.25rem,0.75rem)] font-medium tracking-wide">Performance Tracking</span>
                            </div>
                            <div className="hidden md:block w-[1px] h-12 bg-white/20"></div>

                            <div className="flex flex-col items-start w-1/2 md:w-auto">
                                <span className="text-[clamp(1.125rem,2.5vw+0.25rem,2.3125rem)] font-[200] text-white mb-1 tracking-tight">0</span>
                                <span className="text-white/60 text-[clamp(0.75rem,0.7vw+0.25rem,0.75rem)] font-medium tracking-wide">Wasted Ad Spend</span>
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
                <div id="process" className="w-full relative">
                    <StoryExperience />
                </div>
                <EngagementSliderSection />
                <FaqSection />
            </div>
        )
}
