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

export default function Page() {
    return (
        <main className="w-full">
            {/* Banner Section */}
            <div className="relative min-h-screen bg-black text-white flex items-center overflow-hidden pt-20">
                <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-0 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center relative z-10">

                    {/* Left Content (60%) */}
                    <div className="flex flex-col space-y-8 lg:col-span-3 max-w-2xl">
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-[5rem] font-extrabold tracking-wider leading-none text-white uppercase">
                                It Worked...
                            </h1>
                            <div className="text-3xl md:text-5xl font-light tracking-[0.15em] leading-tight text-[#666666] uppercase">
                                <span className="block mb-2">Until</span>
                                <span className="block">The Systems Didn't</span>
                            </div>
                        </div>

                        <p className="text-xs md:text-[13px] text-[#888888] leading-[1.8] max-w-md font-normal tracking-wide">
                            Over the years, we have made the shift from offline to a combination of offline and online
                            strategies to convert a hot lead into a deal. Now, customers flow into your business
                            several ways, through search, physical meetings, events, referrals, to grab downloadables
                            and more. Once they are your client, it's a whole new journey. As a manufacturing
                            company, you need to think further ahead of your customers.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link
                                href="#build"
                                className="px-6 py-3 bg-white text-black text-[11px] font-bold tracking-widest uppercase hover:bg-neutral-200 transition-colors"
                            >
                                Build Your System
                            </Link>
                            <Link
                                href="#see"
                                className="px-6 py-3 bg-transparent border border-[#555] text-white text-[11px] font-bold tracking-widest uppercase hover:border-white transition-colors"
                            >
                                See What We Build
                            </Link>
                        </div>
                    </div>

                    {/* Right Content - Image (40%) */}
                    <div className="relative w-full h-[60vh] lg:h-[85vh] lg:col-span-2 flex justify-center items-center">
                        <div className="absolute inset-0 z-0 scale-110">
                            <Image
                                src="/images/industries/manufacturing/banner.png"
                                alt="Manufacturing System"
                                fill
                                priority
                                className="object-contain object-right lg:object-center"
                            />
                        </div>
                    </div>

                </div>
            </div>

            {/* Next Section: About / Systems */}
            <div className="bg-white text-black py-24 px-6 md:px-12 lg:px-16 w-full">
                <div className="max-w-7xl mx-auto space-y-12">

                    {/* Top Heading */}
                    <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] leading-[1.1] tracking-normal uppercase text-[#111]">
                        <span className="font-extrabold">BUILD</span> <span className="font-light text-[#777]">360-DEGREE</span> <span className="font-extrabold">SYSTEMS</span><br />
                        <span className="font-extrabold">THAT</span> <span className="font-light text-[#777]">NURTURE AND</span> <span className="font-extrabold">GROW YOUR</span><br />
                        <span className="font-light text-[#777]">MANUFACTURING</span> <span className="font-extrabold">BUSINESS</span>
                    </h2>
                    {/* Middle Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start pt-8">
                        <div className="text-3xl md:text-[2.5rem] leading-[1.2] font-light text-[#999] uppercase tracking-wide">
                            SCALE SYSTEMS THAT<br />RUN YOUR BUSINESS.
                        </div>

                        <div className="flex flex-col space-y-6 max-w-sm pt-2">
                            <h3 className="text-[10px] font-bold uppercase tracking-widest text-black">
                                HOW SMRKONOVA THINKS
                            </h3>
                            <div className="text-[13px] text-[#666] leading-loose">
                                Replace disconnected processes with systems<br />
                                that gives every team, from marketing to<br />
                                manufacturing teams the clarity to<br />
                                <span className="block mt-4 font-medium text-black">
                                    execute<br />
                                    analyze<br />
                                    improve<br />
                                    and scale.
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Image */}
                    <div className="w-full relative h-[40vh] md:h-[60vh] lg:h-[80vh] flex justify-center">
                        <Image
                            src="/images/industries/manufacturing/about.png"
                            alt="360 Degree Manufacturing Systems"
                            fill
                            className="object-contain"
                        />
                    </div>

                </div>
            </div>

            {/* Automation Carousel Section */}
            <div className="bg-[#f8f9fa] text-black py-32 w-full overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 flex flex-col space-y-12 z-10 relative pr-4 lg:pr-12">
                        <h2 className="text-5xl md:text-[4.5rem] lg:text-[64px] font-light tracking-[0.2em] leading-tight text-[#111] uppercase">
                            Meet your extended wing
                        </h2>
                        <p className="text-[13px] md:text-[14px] text-[#666] leading-[2] font-normal">
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
