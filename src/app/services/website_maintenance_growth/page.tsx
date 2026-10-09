import Image from "next/image"
import IndustriesSlider from "@/components/services/website_maintenance_growth/IndustriesSlider"
import BuiltFromScratchSection from "@/components/services/website_maintenance_growth/BuiltFromScratchSection"
import WhatMakesUsDifferentSlider from "@/components/services/website_maintenance_growth/WhatMakesUsDifferentSlider"
import ModernExperiencesSection from "@/components/services/website_maintenance_growth/ModernExperiencesSection"
import TechnologySection from "@/components/services/website_maintenance_growth/TechnologySection"
import FeaturesSliderSection from "@/components/services/website_maintenance_growth/FeaturesSliderSection"
import StoryExperience from "@/components/animations/StoryExperience"
import EngagementSliderSection from "@/components/services/website_maintenance_growth/EngagementSliderSection"
import FaqSection from "@/components/services/website_maintenance_growth/FaqSection"


// Website Maintenance & Growth Page
export default function WebsiteMaintenanceGrowthPage() {
    return (
                <div className="w-full">
                    <div className="w-full relative overflow-hidden flex flex-col justify-between font-sans min-h-[calc(100vh/var(--desktop-scale,1))] h-auto md:min-h-[800px] md:h-[calc(100vh/var(--desktop-scale,1))] md:max-h-[873px]" style={{ background: 'linear-gradient(67.52deg, #53A18B -0.39%, #0060FB 93.89%)' }}>
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
        
                        {/* Mobile Layout (<md, 390px base matching user specification) */}
                        <div className="md:hidden flex flex-col items-center w-full max-w-[390px] mx-auto px-[17px] pt-24 pb-8 z-30">
                            {/* 1. Header Title & Subtitle */}
                            <div className="w-[356px] text-left mb-2">
                                <h1 
                                    className="text-white text-left uppercase"
                                    style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontWeight: 200,
                                        fontSize: '34px',
                                        lineHeight: '36.72px',
                                        letterSpacing: '-0.85px',
                                    }}
                                >
                                    WEBSITE MAINTENANCE<br />& CONTINUOUS GROWTH
                                </h1>
                                <p className="text-white/80 uppercase text-[11px] font-medium tracking-[0.1em] mt-2">
                                    PROACTIVE OPTIMISATION, ENGINEERED FOR 99.99% UPTIME.
                                </p>
                            </div>

                            {/* 2. 3D Graphic Showcase In-Flow */}
                            <div 
                                className="relative my-4 flex items-center justify-center overflow-hidden"
                                style={{
                                    width: '356px',
                                    height: '210px',
                                }}
                            >
                                <Image
                                    src="/images/services/website/mobile1.png"
                                    alt="Website maintenance showcase"
                                    width={356}
                                    height={210}
                                    className="w-full h-full object-contain"
                                    priority
                                />
                            </div>

                            {/* 3. Description Narrative */}
                            <div className="w-[350px] text-left mb-6">
                                <p 
                                    className="text-white/90 text-left"
                                    style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontWeight: 400,
                                        fontSize: '13px',
                                        lineHeight: '21px',
                                    }}
                                >
                                    Continuously optimizing performance, security, uptime, and scaling systems long after launch.
                                </p>
                            </div>

                            {/* 4. Stacked Action Buttons */}
                            <div className="flex flex-col gap-3 items-center w-[350px] mb-7">
                                <button 
                                    suppressHydrationWarning 
                                    className="bg-white text-black text-[12px] font-semibold tracking-[0.1em] uppercase rounded-md flex items-center justify-center transition-opacity hover:opacity-90 cursor-pointer w-[350px] h-[45px]"
                                >
                                    GET ONGOING SUPPORT
                                </button>
                                <button 
                                    suppressHydrationWarning 
                                    className="border border-white/60 bg-white/10 backdrop-blur-sm text-white text-[12px] font-semibold tracking-[0.1em] uppercase rounded-md flex items-center justify-center transition-colors hover:bg-white/20 cursor-pointer w-[350px] h-[45px]"
                                >
                                    TALK TO OUR TEAM
                                </button>
                            </div>

                            {/* 5. Trusted By Teams */}
                            <div className="w-[350px] text-left mb-7">
                                <h3 className="uppercase tracking-[0.08em] text-white/80 font-medium mb-2.5 text-[11px] leading-[14px]">
                                    TRUSTED BY TEAMS ACROSS 4 CONTINENTS
                                </h3>
                                <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-white/75 text-[13px] font-normal">
                                    <span>Healthcare</span>
                                    <span>Real Estate</span>
                                    <span>SaaS</span>
                                    <span>Ecommerce</span>
                                    <span>Enterprise</span>
                                </div>
                            </div>

                            {/* 6. Stats Container (Glassmorphism rounded-20px container) */}
                            <div className="w-[350px] border border-white/20 rounded-[20px] p-6 backdrop-blur-md bg-white/5">
                                <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                                    <div className="flex flex-col items-start">
                                        <span className="text-[32px] font-[200] text-white leading-none mb-1 tracking-tight">120+</span>
                                        <span className="text-white/60 text-[12px] font-medium tracking-wide">Projects</span>
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <span className="text-[32px] font-[200] text-white leading-none mb-1 tracking-tight">9yrs</span>
                                        <span className="text-white/60 text-[12px] font-medium tracking-wide">Building the web</span>
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <span className="text-[32px] font-[200] text-white leading-none mb-1 tracking-tight">24/7</span>
                                        <span className="text-white/60 text-[12px] font-medium tracking-wide">Support</span>
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <span className="text-[32px] font-[200] text-white leading-none mb-1 tracking-tight">0</span>
                                        <span className="text-white/60 text-[12px] font-medium tracking-wide">Templates used</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Desktop Background SVG Images and Effects */}
                        <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none z-10 overflow-hidden">
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
        
                        {/* Desktop Main Content Area */}
                        <div className="hidden md:flex relative z-40 w-full max-w-7xl mx-auto px-4 md:px-0 pt-36 sm:pt-44 md:pt-24 justify-between flex-grow">
        
                            {/* Left Column */}
                            <div className="flex flex-col justify-end md:justify-start text-white max-w-3xl h-full pb-2 md:pb-0 text-center md:text-left items-center md:items-start w-full">
                                <div className="mt-auto md:mt-0 w-full flex flex-col items-center md:items-start">
        
                                    <h1 className="text-[clamp(2.75rem,5.5vw+1rem,5.5rem)] font-[100] leading-[0.95] tracking-[0] uppercase mb-4 sm:mb-6 md:mb-8 text-center md:text-left">
                                        Website <br />
                                        Maintenance & <br className="hidden md:block" />
                                        Growth
                                    </h1>
        
                                    <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-3 sm:gap-4 mt-3 sm:mt-4 md:mt-0 mb-0 md:mb-8 w-full sm:w-auto">
                                        <button suppressHydrationWarning className="w-auto bg-[#f0f0f0] text-black px-6 py-3.5 text-[clamp(10px,0.4vw+4px,12px)] font-[500] uppercase tracking-[0.15em] hover:bg-white transition-colors text-center whitespace-nowrap">
                                            Get Ongoing Support
                                        </button>
                                        <button suppressHydrationWarning className="w-auto border border-white/60 text-white px-6 py-3.5 text-[clamp(10px,0.4vw+4px,12px)] font-[500] uppercase tracking-[0.15em] hover:bg-white/10 transition-colors text-center whitespace-nowrap">
                                            Talk To Our Team
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
                        {/* Desktop Bottom Stats Bar */}
                        <div className="hidden md:flex relative z-20 w-full max-w-7xl mx-auto px-4 md:px-0 mt-6 sm:mt-0 pb-8 lg:pb-12 flex-col lg:flex-row items-end justify-between gap-4 lg:gap-8">
                            {/* Bottom Left Text */}
                            <div className="hidden lg:block lg:w-[35%] mb-4 lg:mb-0">
                                <p className="text-[clamp(0.8125rem,0.6vw+0.65rem,1.125rem)] font-[400] leading-[1.8] max-w-[450px] uppercase tracking-[0.05em] text-white">
                                    Continuously optimizing performance, security, uptime, and scaling systems long after launch.
                                </p>
                            </div>
        
                            {/* Bottom Stats Bar */}
                            <div className="flex-grow w-full lg:w-[65%] border border-white/20 rounded-3xl px-8 md:px-12 py-6 sm:py-8 flex flex-wrap md:flex-nowrap items-center justify-between backdrop-blur-md bg-white/5 shadow-2xl">
                                <div className="flex flex-col items-start w-1/2 md:w-auto mb-6 md:mb-0">
                                    <span className="text-[clamp(1.125rem,2.5vw+0.25rem,2.3125rem)] font-[200] text-white mb-1 tracking-tight">120+</span>
                                    <span className="text-white/60 text-[clamp(0.75rem,0.7vw+0.25rem,0.75rem)] font-medium tracking-wide">Projects</span>
                                </div>
                                <div className="hidden md:block w-[1px] h-12 bg-white/20"></div>
        
                                <div className="flex flex-col items-start w-1/2 md:w-auto mb-6 md:mb-0">
                                    <span className="text-[clamp(1.125rem,2.5vw+0.25rem,2.3125rem)] font-[200] text-white mb-1 tracking-tight">9yrs</span>
                                    <span className="text-white/60 text-[clamp(0.75rem,0.7vw+0.25rem,0.75rem)] font-medium tracking-wide">Building the web</span>
                                </div>
                                <div className="hidden md:block w-[1px] h-12 bg-white/20"></div>
        
                                <div className="flex flex-col items-start w-1/2 md:w-auto">
                                    <span className="text-[clamp(1.125rem,2.5vw+0.25rem,2.3125rem)] font-[200] text-white mb-1 tracking-tight">24/7</span>
                                    <span className="text-white/60 text-[clamp(0.75rem,0.7vw+0.25rem,0.75rem)] font-medium tracking-wide">Support</span>
                                </div>
                                <div className="hidden md:block w-[1px] h-12 bg-white/20"></div>
        
                                <div className="flex flex-col items-start w-1/2 md:w-auto">
                                    <span className="text-[clamp(1.125rem,2.5vw+0.25rem,2.3125rem)] font-[200] text-white mb-1 tracking-tight">0</span>
                                    <span className="text-white/60 text-[clamp(0.75rem,0.7vw+0.25rem,0.75rem)] font-medium tracking-wide">Templates used</span>
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
