import Image from 'next/image';
import IndustriesSlider from '@/components/services/custom-mobile-development/IndustriesSlider';
import BuiltFromScratchSection from '@/components/services/custom-mobile-development/BuiltFromScratchSection';
import WhatMakesUsDifferentSlider from '@/components/services/custom-mobile-development/WhatMakesUsDifferentSlider';
import ModernExperiencesSection from '@/components/services/custom-mobile-development/ModernExperiencesSection';
import TechnologySection from '@/components/services/custom-mobile-development/TechnologySection';
import FeaturesSliderSection from '@/components/services/custom-mobile-development/FeaturesSliderSection';
import EngagementSliderSection from '@/components/services/custom-mobile-development/EngagementSliderSection';
import ProcessScroll from '@/components/services/custom-mobile-development/ProcessScroll';
import FaqSection from '@/components/services/custom-mobile-development/FaqSection';

export default function CustommobileDevelopmentPage() {
    return (
        <main>
            <div className="min-h-screen w-full " style={{ background: 'linear-gradient(67.52deg, #53A18B -0.39%, #0060FB 93.89%)' }}>
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

                    {/* Glow behind eagle */}
                    <div className="relative w-full max-w-[800px] translate-x-8 translate-y-12 lg:translate-x-30 lg:translate-y-16 z-10 Luminosity">
                        {/* Base Image */}
                        <Image
                            src="/images/services/website/mobile1.png"
                            alt="Custom web development showcase"
                            width={680}
                            height={440}
                            className="w-[680px] h-[440px] object-contain opacity-60 ml-40"
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
                <div className="relative z-40 w-full max-w-7xl mx-auto px-4 md:px-0 pt-28 md:pt-32 flex justify-between flex-grow">

                    {/* Left Column */}
                    <div className="flex flex-col text-white max-w-3xl h-full text-left">
                        <div>

                            <h1 className="text-[50px] md:text-[60px] lg:text-[100px] font-[200] leading-[0.9] tracking-tight   uppercase mb-8">
                                Custom Mobile App Development
                            </h1>


                            <p className="text-[15px] md:text-[16px] font-[300] leading-relaxed text-white/80 max-w-xl text-left mb-4">
                                From startup MVPs to enterprise platforms, we design and<br />
                                develop mobile applications that are intuitive, scalable <br />
                                and built to solve real business problems
                            </p>


                            <div className="flex flex-wrap gap-4 mt-8">
                                <button suppressHydrationWarning className="bg-[#f0f0f0] text-black px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-white transition-colors">
                                    CREATE YOUR CUSTOM WEBSITE
                                </button>
                                <button suppressHydrationWarning className="border border-white/60 text-white px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-white/10 transition-colors">
                                    SEE OUR WORK
                                </button>
                            </div>

                            {/* 4. Description Paragraph ( perfectly flush left) */}

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
                {/* Bottom Stats Bar */}
                <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-0 pb-12 flex flex-col lg:flex-row items-end justify-between gap-12 lg:gap-8">
                    {/* Bottom Left Text */}
                    <div className="flex-shrink-0 lg:w-[35%] mb-4 lg:mb-0">

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
    )
}