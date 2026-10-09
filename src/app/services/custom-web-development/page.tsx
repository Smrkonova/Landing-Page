import Image from 'next/image';
import IndustriesSlider from '@/components/services/IndustriesSlider';
import BuiltFromScratchSection from '@/components/services/BuiltFromScratchSection';
import WhatMakesUsDifferentSlider from '@/components/services/WhatMakesUsDifferentSlider';
import ModernExperiencesSection from '@/components/services/ModernExperiencesSection';
import TechnologySection from '@/components/services/TechnologySection';
import FeaturesSliderSection from '@/components/services/FeaturesSliderSection';
import EngagementSliderSection from '@/components/services/EngagementSliderSection';
import StoryExperience from '@/components/animations/StoryExperience';
import FaqSection from '@/components/services/FaqSection';

export default function CustomWebDevelopmentPage() {
    return (
        <div className="w-full max-w-full overflow-x-clip">
            <div
                className="w-full relative overflow-hidden flex flex-col justify-between font-sans min-h-[calc(100vh/var(--desktop-scale,1))] h-auto md:min-h-[800px] md:h-[calc(100vh/var(--desktop-scale,1))] md:max-h-[873px]"
                style={{
                    background: 'linear-gradient(67.52deg, #004496 -0.39%, #FFD861 49.92%, #009BFB 93.89%)',
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

                {/* Mobile Layout (<md, 390px base in DesktopScaler) */}
                <div className="md:hidden flex flex-col items-center w-full max-w-[390px] mx-auto px-[17px] pt-24 pb-8 z-30">
                    {/* Header Title */}
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
                            CUSTOM WEB<br />DEVELOPMENT
                        </h1>
                        <p className="text-white/80 uppercase text-[11px] font-medium tracking-[0.1em] mt-2">
                            FOR PEOPLE, ENGINEERED FOR BUSINESSES.
                        </p>
                    </div>

                    {/* Graphic Image Showcase (width: 356px, height: 201px) */}
                    <div
                        className="relative my-3 flex items-center justify-center overflow-hidden"
                        style={{
                            width: '356px',
                            height: '201px',
                            opacity: 1,
                        }}
                    >
                        {/* Ambient Glows */}
                        <div
                            className="absolute w-[220px] h-[150px] rounded-full pointer-events-none"
                            style={{
                                background: 'radial-gradient(circle, rgba(255, 245, 170, 0.6) 0%, rgba(255, 216, 97, 0.35) 50%, transparent 75%)',
                                filter: 'blur(30px)',
                                zIndex: 5,
                            }}
                        />
                        <div
                            className="absolute w-[160px] aspect-square rounded-full pointer-events-none"
                            style={{
                                right: '30px',
                                top: '15px',
                                background: 'radial-gradient(circle, rgba(255, 245, 190, 0.75) 0%, rgba(255, 216, 97, 0.4) 60%, transparent 80%)',
                                filter: 'blur(32px)',
                                zIndex: 15,
                            }}
                        />

                        {/* Laptop Banner */}
                        <div className="relative w-full h-full z-10 flex items-center justify-center">
                            <Image
                                src="/images/services/website/banner.svg"
                                alt="Custom web development showcase"
                                width={356}
                                height={201}
                                className="w-full h-full object-contain"
                                priority
                            />
                            {/* Eagle Accent */}
                            <div
                                className="absolute pointer-events-none z-20"
                                style={{
                                    right: '18px',
                                    top: '12px',
                                    width: '115px',
                                    height: '150px',
                                }}
                            >
                                <Image
                                    src="/images/services/website/eagle.png"
                                    alt="Flying Eagle"
                                    width={115}
                                    height={150}
                                    className="w-full h-full object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Left Side Text of Stats (between image and buttons) */}
                    <div className="w-[350px] text-left mb-5">
                        <p
                            className="text-white text-left"
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 400,
                                fontSize: '13px',
                                lineHeight: '21.13px',
                                letterSpacing: '0px',
                            }}
                        >
                            Every business is different. Your website should be too — engineered from zero, not stitched from templates.
                        </p>
                    </div>

                    {/* Buttons (width: 350px, height: 45px) */}
                    <div className="flex flex-col gap-3 items-center w-[350px] mb-7">
                        <button
                            suppressHydrationWarning
                            className="bg-white text-black text-[12px] font-medium tracking-[0.1em] uppercase rounded-md flex items-center justify-center transition-opacity hover:opacity-90 cursor-pointer"
                            style={{
                                width: '350px',
                                height: '45px',
                                fontFamily: "'Inter', sans-serif",
                            }}
                        >
                            CREATE YOUR CUSTOM WEBSITE
                        </button>
                        <button
                            suppressHydrationWarning
                            className="border border-white/60 bg-white/10 backdrop-blur-sm text-white text-[12px] font-medium tracking-[0.1em] uppercase rounded-md flex items-center justify-center transition-colors hover:bg-white/20 cursor-pointer"
                            style={{
                                width: '350px',
                                height: '45px',
                                fontFamily: "'Inter', sans-serif",
                            }}
                        >
                            SEE OUR WORK
                        </button>
                    </div>

                    {/* Trusted by teams across 4 continents */}
                    <div className="w-[350px] text-left mb-7">
                        <h3
                            className="uppercase tracking-[0.08em] text-white/80 font-medium mb-2.5"
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: '11px',
                                lineHeight: '14px',
                            }}
                        >
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

                    {/* Stats Box (2x2 grid, width: 350px) */}
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
                                <span className="text-white/60 text-[12px] font-[300] tracking-wide">Templates used</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Desktop Background SVG Images and Effects (>=md, matching exact Figma 1440px coordinates) */}
                <div className="hidden md:block absolute inset-0 pointer-events-none z-20 overflow-hidden">
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
                            top: '180px',
                            left: '595px',
                            width: '588px',
                            height: '482px',
                            opacity: 1,
                            zIndex: 10,
                        }}
                    >
                        <Image
                            src="/images/services/website/banner.svg"
                            alt="Custom web development showcase"
                            width={588}
                            height={482}
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

                {/* Desktop Main Content Area (>=md, 1440px canvas) */}
                <div className="hidden md:flex relative z-40 w-full max-w-7xl mx-auto px-0 pt-28 justify-between flex-grow">
                    {/* Left Column */}
                    <div className="flex flex-col justify-start text-[#FFFFFF] max-w-3xl h-full text-left items-start w-full">
                        <div className="w-full flex flex-col items-start">
                            <h1 className="text-[clamp(2.75rem,5.5vw+1rem,5.5rem)] font-[100] leading-[0.95] tracking-[0] mb-4 sm:mb-6 text-left">
                                Custom <br/> Website <br />Development
                            </h1>
                            <div className="flex flex-row items-start justify-start gap-4 mt-6">
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
                    <div className="hidden md:flex flex-col text-white text-right space-y-10 pt-6">
                        <div>
                            <h3 className="uppercase tracking-[0.05em] text-[clamp(0.875rem,0.6vw+0.25rem,0.875rem)] font-[500] leading-relaxed text-white">
                                Trusted by teams<br />
                                across 4 continents
                            </h3>
                        </div>

                        <ul className="flex flex-col gap-[32px] text-white/80 text-[clamp(0.875rem,0.6vw+0.25rem,0.875rem)] font-[400]">
                            <li className="hover:text-white cursor-pointer transition-colors">Healthcare</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Real Estate</li>
                            <li className="hover:text-white cursor-pointer transition-colors">SaaS</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Ecommerce</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Enterprise</li>
                        </ul>
                    </div>
                </div>

                {/* Desktop Bottom Row Area (>=md, 1440px canvas) */}
                <div className="hidden md:flex relative z-40 w-full max-w-7xl mx-auto px-0 pb-8 flex-row items-end justify-between gap-8">
                    {/* Bottom Left Text */}
                    <div className="w-[35%]">
                        <p className="text-[clamp(0.8125rem,0.6vw+0.65rem,1.125rem)] font-[400] leading-[1.8] max-w-[450px] uppercase tracking-[0.05em] text-white mb-2 text-left">
                            Every business is different.<br />
                            Your website should be too —<br />
                            engineered from zero,<br />
                            not stitched from templates.
                        </p>
                    </div>

                    {/* Bottom Stats Bar */}
                    <div className="flex-grow w-[65%] border border-white/20 rounded-3xl px-12 py-5 flex items-center justify-between backdrop-blur-md bg-white/5 shadow-2xl">
                        <div className="flex flex-col items-start">
                            <span className="text-[clamp(1.125rem,2.5vw+0.25rem,2.3125rem)] font-[200] text-white mb-1 tracking-tight">120+</span>
                            <span className="text-white/60 text-[clamp(0.75rem,0.7vw+0.25rem,0.75rem)] font-medium tracking-wide">Projects</span>
                        </div>
                        <div className="w-[1px] h-10 bg-white/20"></div>

                        <div className="flex flex-col items-start">
                            <span className="text-[clamp(1.125rem,2.5vw+0.25rem,2.3125rem)] font-[200] text-white mb-1 tracking-tight">9yrs</span>
                            <span className="text-white/60 text-[clamp(0.75rem,0.7vw+0.25rem,0.75rem)] font-medium tracking-wide">Building the web</span>
                        </div>
                        <div className="w-[1px] h-10 bg-white/20"></div>

                        <div className="flex flex-col items-start">
                            <span className="text-[clamp(1.125rem,2.5vw+0.25rem,2.3125rem)] font-[200] text-white mb-1 tracking-tight">24/7</span>
                            <span className="text-white/60 text-[clamp(0.75rem,0.7vw+0.25rem,0.75rem)] font-medium tracking-wide">Support</span>
                        </div>
                        <div className="w-[1px] h-10 bg-white/20"></div>

                        <div className="flex flex-col items-start">
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
            <div id="process" className="w-full relative">
                <StoryExperience />
            </div>
            <EngagementSliderSection />
            <FaqSection />
        </div>
    );
}
