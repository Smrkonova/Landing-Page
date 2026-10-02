import Image from "next/image";
import Link from "next/link";
import AutomationCarousel from "@/components/industries/AutomationCarousel";
import ServicesScroll from "@/components/industries/ServicesScroll";
import SolutionsGrid from "@/components/industries/SolutionsGrid";
import SliderSection from "@/components/industries/SliderSection";
import ProcessScroll from "@/components/industries/ProcessScroll";
import LocationsMarquee from "@/components/industries/LocationsMarquee";
import SystemCTA from "@/components/industries/SystemCTA";
import CaseStudiesSlider from "@/components/industries/CaseStudiesSlider";
import FaqSection from "@/components/industries/FaqSection";
import ManufacturingScrollCanvas from "@/components/industries/ManufacturingScrollCanvas";

export default function Page() {
    return (
        <main className="w-full">
            {/* Banner Section */}
            <div className="relative bg-black text-white flex items-center pt-32 md:pt-0 pb-12 md:pb-0 overflow-hidden" style={{ minHeight: "calc(100vh / var(--desktop-scale, 1))" }}>
                <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center relative z-10">

                    {/* Left Content (60%) */}
                    <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:space-y-8 md:col-span-3 max-w-2xl">
                        <div className="space-y-2 md:space-y-4">
                            <h1 className="text-[clamp(2.5rem,5.5vw+0.5rem,5rem)] font-extrabold tracking-wider leading-none text-white uppercase break-words">
                                It Worked...
                            </h1>
                            <div className="text-[clamp(1.25rem,2.8vw+0.5rem,3rem)] font-light tracking-[0.1em] md:tracking-[0.15em] leading-tight text-[#666666] uppercase">
                                <span className="block mb-1 md:mb-2">Until</span>
                                <span className="block">The Systems Didn't</span>
                            </div>
                        </div>

                        <p className="text-[clamp(11px,0.4vw+6px,13px)] text-[#888888] leading-[1.8] max-w-md font-normal tracking-wide">
                            Over the years, we have made the shift from offline to a combination of offline and online
                            strategies to convert a hot lead into a deal. Now, customers flow into your business
                            several ways, through search, physical meetings, events, referrals, to grab downloadables
                            and more. Once they are your client, it's a whole new journey. As a manufacturing
                            company, you need to think further ahead of your customers.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 pt-4 w-full md:w-auto">
                            <Link
                                href="#build"
                                className="px-6 py-4 bg-white text-black text-[clamp(10px,0.4vw+4px,12px)] font-bold tracking-widest uppercase hover:bg-neutral-200 transition-colors text-center w-full md:w-auto"
                            >
                                Build Your System
                            </Link>
                            <Link
                                href="#process"
                                className="px-6 py-4 bg-transparent border border-white text-white text-[clamp(10px,0.4vw+4px,12px)] font-bold tracking-widest uppercase hover:bg-white/10 transition-colors text-center w-full md:w-auto"
                            >
                                See Our Process
                            </Link>
                        </div>
                    </div>

                    {/* Right Content - Image (40%) */}
                    <div className="order-1 md:order-2 relative w-full h-[40vh] md:h-[80vh] md:col-span-2 flex justify-center items-center mt-8 md:mt-0">
                        <Image
                            src="/images/industries/manufacturing/banner.png"
                            alt="Manufacturing System"
                            fill
                            priority
                            className="object-contain object-center md:object-right scale-100 md:scale-110"
                        />
                    </div>

                </div>
            </div>


            {/* Full-width Scroll Animation Section */}
            <div className="w-full bg-white relative">
                <ManufacturingScrollCanvas />
            </div>

            {/* Automation Carousel Section */}
            <div className="bg-[#f8f9fa] text-black py-32 w-full overflow-hidden">
                <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 md:space-y-12 z-10 relative pr-0 md:pr-4 lg:pr-12">
                        <h2 className="text-[clamp(2rem,4vw+0.5rem,4rem)] font-light tracking-[0.1em] md:tracking-[0.2em] leading-[1.2] md:leading-tight text-[#111] uppercase break-words">
                            Meet your extended wing
                        </h2>
                        <p className="text-[clamp(12px,0.4vw+6px,14px)] text-[#666] leading-[2] font-normal">
                            Once your business is on-board, we will study it, begin building seamless systems for enterprises, ERP planners among others. With Smrkonova, build brand specific operational systems for your business, keeping your customers' needs right on the top. We don't just build factory websites, we engineer digital business systems using:
                        </p>
                    </div>

                    {/* Right Carousel Content */}
                    <div className="lg:col-span-5 lg:col-start-8 relative w-full mt-12 lg:mt-0">
                        <AutomationCarousel />
                    </div>

                </div>
            </div>

            <ServicesScroll />
            <SolutionsGrid />
            <SliderSection />
            <ProcessScroll />
            <LocationsMarquee />
            <SystemCTA />
            <CaseStudiesSlider />
            <FaqSection />
        </main>
    );
}
