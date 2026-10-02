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
        <div className="w-full max-w-full overflow-x-clip">
            <div
                className="w-full relative overflow-hidden flex flex-col justify-between font-sans"
                style={{
                    background: 'linear-gradient(67.52deg, #004496 -0.39%, #FFD861 49.92%, #009BFB 93.89%)',
                    height: 'calc(100vh / var(--desktop-scale, 1))',
                    minHeight: 'calc(100vh / var(--desktop-scale, 1))',
                }}
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

                {/* Mobile / Tablet Background SVG Images and Effects (<lg) */}
                <div className="lg:hidden absolute inset-0 flex items-center justify-center pointer-events-none z-20 overflow-hidden">
                    {/* Ambient Glow */}
                    <div
                        className="absolute w-[280px] h-[220px] rounded-full translate-x-4 -translate-y-4 pointer-events-none"
                        style={{
                            background: 'radial-gradient(circle, rgba(255, 235, 150, 0.35) 0%, rgba(42, 164, 255, 0.2) 45%, rgba(255, 255, 255, 0) 70%)',
                            filter: 'blur(35px)',
                        }}
                    />
                    <div
                        className="absolute w-[260px] aspect-square rounded-full translate-x-16 -translate-y-16 pointer-events-none"
                        style={{
                            background: 'radial-gradient(circle, rgba(255, 245, 190, 0.7) 0%, rgba(255, 216, 97, 0.4) 60%, rgba(255, 216, 97, 0) 80%)',
                            filter: 'blur(45px)',
                        }}
                    />
                    <Image
                        src="/images/services/website/banner.svg"
                        alt="Custom web development showcase"
                        width={718}
                        height={608}
                        className="w-[85%] max-w-[420px] h-auto object-contain translate-x-4 translate-y-8 relative z-10 opacity-90"
                        priority
                    />
                    <Image
                        src="/images/services/website/eagle.png"
                        alt="Flying Eagle"
                        width={264}
                        height={380}
                        className="absolute w-[40%] max-w-[175px] h-auto object-contain translate-x-16 -translate-y-12 z-30"
                        priority
                    />
                </div>

                {/* Desktop Background SVG Images and Effects (>=lg, matching exact Figma 1440px coordinates) */}
                <div className="hidden lg:block absolute inset-0 pointer-events-none z-20 overflow-hidden">
                    {/* Ambient Glow behind Laptop Screen & Top Edge */}
                    <div
                        className="absolute w-[460px] h-[320px] rounded-full pointer-events-none"
                        style={{
                            left: '500px',
                            top: '80px',
                            background: 'radial-gradient(circle, rgba(255, 245, 170, 0.55) 0%, rgba(255, 220, 100, 0.35) 45%, transparent 75%)',
                            filter: 'blur(45px)',
                            WebkitFilter: 'blur(45px)',
                            zIndex: 5,
                        }}
                    />

                    {/* Warm Luminous Glow Behind Eagle */}
                    <div
                        className="absolute w-[340px] aspect-square rounded-full pointer-events-none"
                        style={{
                            left: '865px',
                            top: '85px',
                            background: 'radial-gradient(circle, rgba(255, 245, 190, 0.8) 0%, rgba(255, 216, 97, 0.45) 60%, rgba(255, 216, 97, 0) 80%)',
                            filter: 'blur(55px)',
                            WebkitFilter: 'blur(55px)',
                            zIndex: 20,
                        }}
                    />

                    {/* Laptop Showcase Base Graphic */}
                    <div
                        className="absolute pointer-events-none"
                        style={{
                            top: '88px',
                            left: '495px',
                            width: '688px',
                            height: '582px',
                            opacity: 1,
                            zIndex: 10,
                        }}
                    >
                        <Image
                            src="/images/services/website/banner.svg"
                            alt="Custom web development showcase"
                            width={688}
                            height={582}
                            className="w-full h-full object-contain"
                            priority
                        />

                        {/* Glassy circular blur effect at top-left edge */}
                        <div
                            className="absolute rounded-full pointer-events-none"
                            style={{
                                width: '260px',
                                height: '260px',
                                left: '25px',
                                top: '25px',
                                transform: 'translate(-40%, -40%)',
                                backdropFilter: 'blur(28px)',
                                WebkitBackdropFilter: 'blur(28px)',
                                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 60%, transparent 100%)',
                                maskImage: 'radial-gradient(circle closest-side, black 0%, black 60%, transparent 100%)',
                                WebkitMaskImage: 'radial-gradient(circle closest-side, black 0%, black 60%, transparent 100%)',
                                zIndex: 20,
                            }}
                        />
                    </div>

                    {/* Flying Eagle (Reduced Height) */}
                    <div
                        className="absolute pointer-events-none"
                        style={{
                            top: '98px',
                            left: '890px',
                            width: '264px',
                            height: '380px',
                            opacity: 1,
                            zIndex: 30,
                        }}
                    >
                        <Image
                            src="/images/services/website/eagle.png"
                            alt="Flying Eagle"
                            width={264}
                            height={380}
                            className="w-full h-full object-contain"
                            priority
                        />
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="relative z-40 w-full max-w-7xl mx-auto px-4 md:px-0 pt-28 sm:pt-32 md:pt-28 lg:pt-32 flex justify-between flex-grow">
                    {/* Left Column */}
                    <div className="flex flex-col justify-start text-[#FFFFFF] max-w-3xl h-full pb-2 md:pb-0 text-center md:text-left items-center md:items-start w-full">
                        <div className="w-full flex flex-col items-center md:items-start">
                            <h1 className="text-[clamp(2.75rem,5.5vw+1rem,5.5rem)] font-[100] leading-[0.95] tracking-[0] mb-4 sm:mb-6 text-center md:text-left">
                                Custom Web <br />Development
                            </h1>
                            <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-3 sm:gap-4 mt-3 sm:mt-4 md:mt-6 w-full sm:w-auto">
                                <button suppressHydrationWarning className="w-auto bg-[#f0f0f0] text-black px-6 py-3.5 text-[clamp(10px,0.4vw+4px,12px)] font-[500] uppercase tracking-[0.15em] hover:bg-white transition-colors text-center whitespace-nowrap cursor-pointer">
                                    CREATE YOUR CUSTOM WEBSITE
                                </button>
                                <button suppressHydrationWarning className="w-auto border border-white/60 text-white px-6 py-3.5 text-[clamp(10px,0.4vw+4px,12px)] font-[500] uppercase tracking-[0.15em] hover:bg-white/10 transition-colors text-center whitespace-nowrap cursor-pointer backdrop-blur-sm bg-white/5">
                                    SEE OUR WORK
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Navigation) */}
                    <div className="hidden lg:flex flex-col text-white text-right space-y-10 pt-6">
                        <div>
                            <h3 className="uppercase tracking-[0.05em] text-[clamp(0.875rem,0.6vw+0.25rem,0.875rem)] font-[500] leading-relaxed text-white">
                                Trusted by teams<br />
                                across 4 continents
                            </h3>
                        </div>

                        <ul className="flex flex-col gap-2 lg:gap-[32px] text-white/80 text-[clamp(0.875rem,0.6vw+0.25rem,0.875rem)] font-[400]">
                            <li className="hover:text-white cursor-pointer transition-colors">Healthcare</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Real Estate</li>
                            <li className="hover:text-white cursor-pointer transition-colors">SaaS</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Ecommerce</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Enterprise</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Row Area */}
                <div className="relative z-40 w-full max-w-7xl mx-auto px-4 md:px-0 pb-6 lg:pb-8 flex flex-col lg:flex-row items-end justify-between gap-4 lg:gap-8">
                    {/* Bottom Left Text */}
                    <div className="hidden lg:block lg:w-[35%]">
                        <p className="hidden md:block text-[clamp(0.8125rem,0.6vw+0.65rem,1.125rem)] font-[400] leading-[1.8] max-w-[450px] uppercase tracking-[0.05em] text-white mb-2 text-left">
                            Every business is different.<br />
                            Your website should be too —<br />
                            engineered from zero,<br />
                            not stitched from templates.
                        </p>
                    </div>

                    {/* Bottom Stats Bar */}
                    <div className="flex-grow w-full lg:w-[65%] border border-white/20 rounded-3xl px-8 md:px-12 py-5 sm:py-6 flex flex-wrap md:flex-nowrap items-center justify-between backdrop-blur-md bg-white/5 shadow-2xl">
                        <div className="flex flex-col items-start w-1/2 md:w-auto mb-4 md:mb-0">
                            <span className="text-[clamp(1.125rem,2.5vw+0.25rem,2.3125rem)] font-[200] text-white mb-1 tracking-tight">120+</span>
                            <span className="text-white/60 text-[clamp(0.75rem,0.7vw+0.25rem,0.75rem)] font-medium tracking-wide">Projects</span>
                        </div>
                        <div className="hidden md:block w-[1px] h-10 bg-white/20"></div>

                        <div className="flex flex-col items-start w-1/2 md:w-auto mb-4 md:mb-0">
                            <span className="text-[clamp(1.125rem,2.5vw+0.25rem,2.3125rem)] font-[200] text-white mb-1 tracking-tight">9yrs</span>
                            <span className="text-white/60 text-[clamp(0.75rem,0.7vw+0.25rem,0.75rem)] font-medium tracking-wide">Building the web</span>
                        </div>
                        <div className="hidden md:block w-[1px] h-10 bg-white/20"></div>

                        <div className="flex flex-col items-start w-1/2 md:w-auto">
                            <span className="text-[clamp(1.125rem,2.5vw+0.25rem,2.3125rem)] font-[200] text-white mb-1 tracking-tight">24/7</span>
                            <span className="text-white/60 text-[clamp(0.75rem,0.7vw+0.25rem,0.75rem)] font-medium tracking-wide">Support</span>
                        </div>
                        <div className="hidden md:block w-[1px] h-10 bg-white/20"></div>

                        <div className="flex flex-col items-start w-1/2 md:w-auto">
                            <span className="text-[clamp(1.125rem,2.5vw+0.25rem,2.3125rem)] font-[200] text-white mb-1 tracking-tight">0</span>
                            <span className="text-white/60 text-[clamp(0.75rem,0.7vw+0.25rem,0.75rem)] font-[300] tracking-wide">Templates used</span>
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
        </div>
    );
}
