"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { trackContactButtonClick } from "@/lib/analytics";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface TeamMember {
    id: number;
    name: string;
    role: string;
    image: string;
    x: number; // percentage X
    y: number; // percentage Y
    align?: "left" | "right" | "center";
}

const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Sahana Patil",
        role: "Brand & Visual Designer",
        image: "/team/Sahana_Patil_Front_photo.png",
        x: 61,
        y: 32,
        align: "center"
    },
    {
        id: 2,
        name: "Jismon J Chacko",
        role: "Frontend Engineer",
        image: "/team/Jismon_J_Chacko_Front_photo.png",
        x: 35.5,
        y: 38,
        align: "center"
    },
    {
        id: 3,
        name: "Harshit R",
        role: "Full-Stack Engineer",
        image: "/team/Harshit_R_Front_photo.png",
        x: 23,
        y: 48,
        align: "left"
    },
    {
        id: 4,
        name: "Rohith E",
        role: "Software Engineer",
        image: "/team/Rohith_E_Front_photo.png",
        x: 48,
        y: 46,
        align: "center"
    },
    {
        id: 5,
        name: "Manideep Chilukuri",
        role: "Systems & Cloud Engineer",
        image: "/team/Manideep_Chilukuri_Front_photo.png",
        x: 73,
        y: 38,
        align: "center"
    },
    {
        id: 6,
        name: "Hrishikesh Romesh",
        role: "Design Systems & UI Engineer",
        image: "/team/Hrishikesh_Romesh_Front_photo.png",
        x: 82,
        y: 34,
        align: "right"
    },
    {
        id: 7,
        name: "Sreesobh",
        role: "Technology Specialist",
        image: "/team/Sreesobh_Front_photo.png",
        x: 86,
        y: 48,
        align: "right"
    }
];

export default function AboutPage() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const [activeSlide, setActiveSlide] = useState(0);
    const [activeMemberId, setActiveMemberId] = useState<number>(1);
    const activeMember = teamMembers.find((m) => m.id === activeMemberId) || teamMembers[0];

    const roadmapItems = [
        { label: "WHY WE CLIMB", index: 0, x: 20, y: 65, pos: "top" },
        { label: "THE WAY", index: 1, x: 40, y: 75, pos: "bottom" },
        { label: "THE VIEW", index: 2, x: 60, y: 50, pos: "top" },
        { label: "THE GUIDE", index: 3, x: 75, y: 50, pos: "bottom" },
        { label: "PEOPLE BEHIND", index: 4, x: 90, y: 20, pos: "top" }
    ];

    useGSAP(() => {
        if (!wrapperRef.current) return;

        const slides = gsap.utils.toArray<HTMLElement>(".slide-panel");
        const amount = slides.length - 1;
        if (amount <= 0) return;

        // 3 units to slide 4, 1 unit person 1->2, 1 unit person 2->3, 1 unit to slide 5, 2 units hold = 8 units
        const totalUnits = 8;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: wrapperRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
                onUpdate: (self) => {
                    const p = self.progress * totalUnits;
                    let slideIndex = 0;
                    if (p < 0.7) slideIndex = 0;
                    else if (p < 1.7) slideIndex = 1;
                    else if (p < 2.7) slideIndex = 2;
                    else if (p < 5.3) slideIndex = 3; // covers units 3 to 5 (The Guide & person transitions)
                    else slideIndex = 4; // People Behind

                    setActiveSlide(slideIndex);
                }
            }
        });

        // 1. Move horizontally to Slide 4 (THE GUIDE) over 3 units
        tl.to(slides, {
            xPercent: -100 * 3,
            ease: "none",
            duration: 3
        }, 0);

        // 2. Fade out Person 1, fade in Person 2 (Unit 3 to 4)
        tl.to(".person-1", { opacity: 0, ease: "none", duration: 0.5 }, 3)
            .to(".person-2", { opacity: 1, ease: "none", duration: 0.5 }, 3.5);

        // 3. Fade out Person 2, fade in Person 3 (Unit 4 to 5)
        tl.to(".person-2", { opacity: 0, ease: "none", duration: 0.5 }, 4)
            .to(".person-3", { opacity: 1, ease: "none", duration: 0.5 }, 4.5);

        // 4. Move horizontally to Slide 5 (PEOPLE BEHIND) over 1 unit
        tl.to(slides, {
            xPercent: -100 * 4,
            ease: "none",
            duration: 1
        }, 5);

        // 5. Hold Slide 5 for 2 extra units so it doesn't suddenly scroll away
        tl.to({}, { duration: 2 });

        return () => {
            tl.kill();
        };
    }, { scope: wrapperRef });

    const scrollToSlide = (index: number) => {
        const wrapper = wrapperRef.current;
        if (!wrapper) return;

        const totalUnits = 8;
        // Map 5 roadmap steps to the timeline units:
        // Slide 0: 0, Slide 1: 1, Slide 2: 2, Slide 3: 3, Slide 4: 6
        const targetMap = [0, 1, 2, 3, 6];

        const containerTop = wrapper.getBoundingClientRect().top + window.scrollY;
        const sticky = wrapper.querySelector(".sticky") as HTMLElement | null;
        const stickyHeight = sticky ? sticky.offsetHeight : window.innerHeight;
        const maxScroll = wrapper.offsetHeight - stickyHeight;
        const targetScroll = containerTop + (maxScroll * (targetMap[index] / totalUnits));

        window.scrollTo({
            top: targetScroll,
            behavior: "smooth"
        });
    };

    return (
        <div className="relative w-full bg-black text-white font-sans overflow-x-clip">
            {/* Scroll runway for horizontal slides */}
            <section
                ref={wrapperRef}
                className="relative w-full bg-black select-none"
                style={{ height: "calc(800vh / var(--desktop-scale, 1))" }}
            >
                {/* Sticky Viewport pinned top-0 adhering to DesktopScaler */}
                <div
                    className="sticky top-0 w-full overflow-hidden flex flex-col justify-between bg-black"
                    style={{ height: "calc(100vh / var(--desktop-scale, 1))" }}
                >
                    <div
                        ref={containerRef}
                        className="flex w-max h-full"
                    >
                        {/* SLIDE 1: WHY WE CLIMB (WE) */}
                        <div className="slide-panel relative w-[390px] md:w-[1440px] shrink-0 h-full flex flex-col items-center justify-center">
                            {/* Background Image */}
                            <div className="absolute inset-0 w-full h-full z-0">
                                <Image
                                    src="/images/about/we/banner.png"
                                    alt="Mission Background"
                                    fill
                                    className="object-cover object-center"
                                    priority
                                />
                                {/* Overlay for readability */}
                                <div className="absolute inset-0 bg-black/30"></div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 flex flex-col items-center text-center max-w-3xl px-6 pb-28 md:pb-36">
                                <h2 className="text-[clamp(11px,0.8vw+5px,18px)] tracking-[0.3em] uppercase mb-2 font-light">It is our</h2>
                                <h1 className="text-[clamp(3.5rem,7.5vw+0.5rem,7.5rem)] font-light tracking-widest mb-6 uppercase">Mission</h1>
                                <h3 className="text-[clamp(1.125rem,1.5vw+0.5rem,1.5rem)] font-light mb-8">TO PAVE THE PATH FOR YOUR BUSINESS.</h3>

                                <p className="max-w-xl text-[clamp(0.875rem,0.5vw+0.65rem,1rem)] leading-relaxed font-light text-gray-200">
                                    Smrkonova builds connected strategies, experiences and technologies that continuously attract new customers, strengthen relationships with existing ones, and improve performance at every stage of growth.
                                </p>
                            </div>
                        </div>

                        {/* SLIDE 2: THE WAY */}
                        <div className="slide-panel relative w-[390px] md:w-[1440px] shrink-0 h-full flex items-center">
                            {/* Background Image */}
                            <div className="absolute inset-0 w-full h-full z-0">
                                <Image
                                    src="/images/about/way/banner.jpg"
                                    alt="The Way Background"
                                    fill
                                    className="object-cover object-center"
                                />
                                <div className="absolute inset-0 bg-black/40"></div>
                            </div>

                            {/* Right Cloud */}
                            <div className="absolute right-0 bottom-0 w-full md:w-1/2 h-[70%] z-[5] pointer-events-none opacity-80">
                                <Image
                                    src="/images/about/way/right-cloud.png"
                                    alt="Cloud Overlay"
                                    fill
                                    className="object-contain object-bottom right-0"
                                />
                            </div>
                            <div className="absolute left-0 bottom-0 w-full md:w-1/2 h-full z-[5] pointer-events-none">
                                <Image
                                    src="/images/about/way/abstract.png"
                                    alt="Cloud Overlay"
                                    fill
                                    className="object-contain object-bottom right-0"
                                />
                            </div>

                            {/* Content Container */}
                            <div className="relative z-10 w-full max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-12 pb-24 md:pb-28">

                                {/* Left side / Abstract Image */}
                                <div className="w-full md:w-5/12 relative aspect-square md:aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
                                    <Image
                                        src="/images/about/way/mount.png"
                                        alt="Abstract Peak"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Right side Text */}
                                <div className="w-full md:w-6/12 flex flex-col text-left">
                                    <h2 className="text-[clamp(11px,0.6vw+5px,16px)] tracking-[0.4em] uppercase mb-4 font-light">Getting to</h2>
                                    <h1 className="text-[clamp(3rem,6vw+0.5rem,6rem)] font-light tracking-wider mb-10 uppercase">The Peak</h1>

                                    <div className="flex flex-col md:flex-row gap-8">
                                        <p className="flex-1 text-[clamp(0.875rem,0.5vw+0.65rem,1rem)] leading-relaxed font-light text-gray-300">
                                            Every decision is made with one goal in mind: building a business that is resilient, efficient, and designed for sustainable growth, innovatively. Rather than chasing short-term wins, we focus on creating a foundation that evolves with your business, helping you adapt to change, seize new opportunities, and scale with confidence.
                                        </p>
                                        <p className="flex-1 text-[clamp(0.875rem,0.5vw+0.65rem,1rem)] leading-relaxed font-normal tracking-wide text-white uppercase">
                                            Every line of strategy, design decision, line of code, campaign are built to surprise the consumer.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* SLIDE 3: THE VIEW */}
                        <div className="slide-panel relative w-[390px] md:w-[1440px] shrink-0 h-full flex items-center">
                            {/* Background Image */}
                            <div className="absolute inset-0 w-full h-full z-0">
                                <Image
                                    src="/images/about/view/banner.png"
                                    alt="The View Background"
                                    fill
                                    className="object-cover object-center"
                                />
                                <div className="absolute inset-0 bg-black/40"></div>
                            </div>

                            {/* Left Cloud */}
                            <div className="absolute left-0 bottom-0 w-full md:w-1/2 h-[60%] z-[5] pointer-events-none opacity-80">
                                <Image
                                    src="/images/about/view/left-cloud.png"
                                    alt="Left Cloud Overlay"
                                    fill
                                    className="object-contain object-bottom left-0"
                                />
                            </div>

                            {/* Right Cloud */}
                            <div className="absolute right-0 bottom-0 w-full md:w-1/2 h-[60%] z-[5] pointer-events-none opacity-80">
                                <Image
                                    src="/images/about/view/right-cloud.png"
                                    alt="Right Cloud Overlay"
                                    fill
                                    className="object-contain object-bottom right-0"
                                />
                            </div>

                            {/* Content Container */}
                            <div className="relative z-10 w-full max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-start justify-between gap-12 pt-0 pb-28 md:pb-32">

                                {/* Left side Text */}
                                <div className="w-full md:w-5/12 flex flex-col text-left">
                                    <h1 className="text-[clamp(1.75rem,3.2vw+0.5rem,3.125rem)] font-light tracking-widest uppercase leading-snug mb-8">
                                        We are a<br />
                                        business-forward<br />
                                        growth studio<br />
                                        creating long-term<br />
                                        value
                                    </h1>

                                    <p className="text-[clamp(0.875rem,0.5vw+0.65rem,1rem)] leading-relaxed tracking-wider font-normal text-white uppercase max-w-sm">
                                        Smrkonova is a boutique growth agency led by tech solutions.
                                    </p>
                                </div>

                                {/* Right side Text */}
                                <div className="w-full md:w-6/12 flex flex-col text-left mt-4 md:mt-0">
                                    <h2 className="text-[clamp(11px,0.6vw+5px,16px)] tracking-[0.4em] uppercase mb-8 font-light">We specialise in</h2>

                                    <div className="flex flex-col gap-6 mb-12">
                                        <p className="text-[clamp(11px,0.6vw+5px,14px)] leading-relaxed font-light text-gray-200">
                                            holistic brand growth for brands across healthcare, manufacturing, e-commerce, real estate, education among other industries. We specialise in branding, brand marketing, marketing strategy and operational growth.
                                        </p>
                                        <p className="text-[clamp(11px,0.6vw+5px,14px)] leading-relaxed font-light text-gray-200">
                                            Our mission at Smrkonova is to help iconic brands grow efficiently, sustainably and ultimately profitably leading to growth from the operational and marketing front.
                                        </p>
                                        <p className="text-[clamp(11px,0.6vw+5px,14px)] leading-relaxed font-light text-gray-200">
                                            We make it easy for our clients to grow and create meaningful connections.
                                        </p>
                                    </div>

                                    {/* Pills */}
                                    <div className="flex flex-wrap gap-4">
                                        <div className="px-6 py-2 rounded-full border border-white/50 bg-white/10 backdrop-blur-md text-[clamp(10px,0.6vw+4px,12px)] tracking-wide text-white/90 font-light hover:bg-white/20 transition-colors">
                                            Digital marketing
                                        </div>
                                        <div className="px-6 py-2 rounded-full border border-white/50 bg-white/10 backdrop-blur-md text-[clamp(10px,0.6vw+4px,12px)] tracking-wide text-white/90 font-light hover:bg-white/20 transition-colors">
                                            operational development
                                        </div>
                                        <div className="px-6 py-2 rounded-full border border-white/50 bg-white/10 backdrop-blur-md text-[clamp(10px,0.6vw+4px,12px)] tracking-wide text-white/90 font-light hover:bg-white/20 transition-colors">
                                            App development
                                        </div>
                                        <div className="px-6 py-2 rounded-full border border-white/50 bg-white/10 backdrop-blur-md text-[clamp(10px,0.6vw+4px,12px)] tracking-wide text-white/90 font-light hover:bg-white/20 transition-colors">
                                            Branding
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* SLIDE 4: THE GUIDE */}
                        <div className="slide-panel relative w-[390px] md:w-[1440px] shrink-0 h-full flex items-center justify-center">
                            {/* Background Image */}
                            <div className="absolute inset-0 w-full h-full z-0">
                                <Image
                                    src="/images/about/guide/banner.jpg"
                                    alt="The Guide Background"
                                    fill
                                    className="object-cover object-center"
                                />
                                <div className="absolute inset-0 bg-black/30"></div>
                            </div>

                            {/* Container for the 3 persons */}
                            <div className="relative z-10 w-full max-w-7xl mx-auto px-8 h-full flex items-center justify-center">

                                {/* Person 1 (Mohit) */}
                                <div className="person-1 absolute inset-0 w-full h-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 px-8 pt-20 md:pt-32 pb-36 md:pb-44">
                                    {/* Left Side: Profile */}
                                    <div className="w-full md:w-5/12 flex flex-col items-center md:items-end md:pr-12">
                                        <div className="relative w-48 h-64 md:w-80 md:h-[400px] mb-6 rounded-[2rem] border border-white/20 bg-white/5 backdrop-blur-sm overflow-hidden flex items-end justify-center pt-8 shadow-2xl">
                                            <Image
                                                src="/images/about/guide/mohit.png"
                                                alt="Mohit Ravindran"
                                                fill
                                                className="object-cover object-top scale-105"
                                            />
                                            <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                        </div>
                                        <div className="text-center md:text-left w-64 md:w-80">
                                            <h3 className="text-[clamp(1rem,1.2vw+0.5rem,1.25rem)] tracking-[0.15em] font-light uppercase mb-2">Mohit Ravindran</h3>
                                            <p className="text-[clamp(10px,0.5vw+4px,12px)] tracking-wider text-white/70 font-medium">Founder & Product Designer</p>
                                        </div>
                                    </div>
                                    {/* Right Side: Text */}
                                    <div className="w-full md:w-7/12 flex flex-col lg:flex-row gap-6 md:gap-8">
                                        <div className="w-full lg:w-5/12 shrink-0">
                                            <h2 className="text-[clamp(1.75rem,2.8vw+0.5rem,2.75rem)] font-light tracking-widest uppercase leading-snug">
                                                Real<br />Progress is<br />Engineered<br />With<br />Systems.
                                            </h2>
                                        </div>
                                        <div className="w-full lg:w-7/12 flex flex-col gap-4 md:gap-6 text-[clamp(10px,0.6vw+5px,12px)] font-light text-gray-300 leading-relaxed lg:pr-8">
                                            <p>
                                                Mohit is the strategic force behind every project, combining product thinking, business strategy, and design to solve complex challenges. Having collaborated on more than a hundred digital products across healthcare, fintech, ecommerce, and enterprise software, he brings a deep understanding of what it takes to build products that succeed in the real world.
                                            </p>
                                            <p>
                                                Working closely with founders, developers, and business leaders, Mohit approaches every project with a systems mindset aligning business goals with user needs to create experiences that are intuitive, scalable, and commercially effective. He believes great products aren't just designed, they're engineered to deliver measurable value, adapt over time, and become the foundation for business growth.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Person 2 (Shruti - CTO) */}
                                <div className="person-2 absolute inset-0 w-full h-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 px-8 pt-20 md:pt-32 pb-36 md:pb-44 opacity-0">
                                    {/* Left Side: Profile */}
                                    <div className="w-full md:w-5/12 flex flex-col items-center md:items-end md:pr-12">
                                        <div className="relative w-48 h-64 md:w-80 md:h-[400px] mb-6 rounded-[2rem] border border-white/20 bg-gradient-to-b from-[#14262b]/80 via-[#0a181c]/90 to-black/95 backdrop-blur-sm overflow-hidden flex items-end justify-center pt-8 shadow-2xl">
                                            <Image
                                                src="/team/shruti.png"
                                                alt="Shruti"
                                                fill
                                                className="object-contain object-bottom scale-95"
                                            />
                                            <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                        </div>
                                        <div className="text-center md:text-left w-64 md:w-80">
                                            <h3 className="text-[clamp(1rem,1.2vw+0.5rem,1.25rem)] tracking-[0.15em] font-light uppercase mb-2">Shruti</h3>
                                            <p className="text-[clamp(10px,0.5vw+4px,12px)] tracking-wider text-white/70 font-medium">Chief Technology Officer</p>
                                        </div>
                                    </div>
                                    {/* Right Side: Text */}
                                    <div className="w-full md:w-7/12 flex flex-col lg:flex-row gap-6 md:gap-8">
                                        <div className="w-full lg:w-5/12 shrink-0">
                                            <h2 className="text-[clamp(1.75rem,2.8vw+0.5rem,2.75rem)] font-light tracking-widest uppercase leading-snug">
                                                Technology<br />Built For<br />Enduring<br />Scale &amp;<br />Impact.
                                            </h2>
                                        </div>
                                        <div className="w-full lg:w-7/12 flex flex-col gap-4 md:gap-6 text-[clamp(10px,0.6vw+5px,12px)] font-light text-gray-300 leading-relaxed lg:pr-8">
                                            <p>
                                                Shruti directs the technological architecture and engineering strategy at Smrkonova. Specialising in scalable systems, intelligent automation, and resilient software infrastructure, she ensures every digital solution operates with speed, stability, and enterprise-grade security.
                                            </p>
                                            <p>
                                                Collaborating at the intersection of business intelligence and technical innovation, Shruti transforms complex technical requirements into cohesive, modern architectures. Her leadership guarantees that our clients&apos; digital platforms don&apos;t just solve immediate problems—they scale seamlessly alongside ambitious business growth.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Person 3 (U. Ravindran - Senior Advisor & Director) */}
                                <div className="person-3 absolute inset-0 w-full h-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 px-8 pt-20 md:pt-32 pb-36 md:pb-44 opacity-0">
                                    {/* Left Side: Profile */}
                                    <div className="w-full md:w-5/12 flex flex-col items-center md:items-end md:pr-12">
                                        <div className="relative w-48 h-64 md:w-80 md:h-[400px] mb-6 rounded-[2rem] border border-white/20 bg-gradient-to-b from-[#14262b]/80 via-[#0a181c]/90 to-black/95 backdrop-blur-sm overflow-hidden flex items-end justify-center pt-8 shadow-2xl">
                                            <Image
                                                src="/team/3rdperson.png"
                                                alt="U. Ravindran"
                                                fill
                                                className="object-contain object-bottom scale-95"
                                            />
                                            <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                        </div>
                                        <div className="text-center md:text-left w-64 md:w-80">
                                            <h3 className="text-[clamp(1rem,1.2vw+0.5rem,1.25rem)] tracking-[0.15em] font-light uppercase mb-2">U. Ravindran</h3>
                                            <p className="text-[clamp(10px,0.5vw+4px,12px)] tracking-wider text-white/70 font-medium">Senior Advisor &amp; Director</p>
                                        </div>
                                    </div>
                                    {/* Right Side: Text */}
                                    <div className="w-full md:w-7/12 flex flex-col lg:flex-row gap-6 md:gap-8">
                                        <div className="w-full lg:w-5/12 shrink-0">
                                            <h2 className="text-[clamp(1.75rem,2.8vw+0.5rem,2.75rem)] font-light tracking-widest uppercase leading-snug">
                                                Wisdom<br />Forged In<br />Decades Of<br />Business<br />Mastery.
                                            </h2>
                                        </div>
                                        <div className="w-full lg:w-7/12 flex flex-col gap-4 md:gap-6 text-[clamp(10px,0.6vw+5px,12px)] font-light text-gray-300 leading-relaxed lg:pr-8">
                                            <p>
                                                Bringing seasoned strategic perspective to Smrkonova, U. Ravindran guides enterprise governance, financial discipline, and long-term organizational value. With extensive executive leadership across traditional industries and emerging markets, his stewardship anchors our high-growth initiatives.
                                            </p>
                                            <p>
                                                Serving as a trusted counsel to the leadership team, he instills the foundational rigor required to build enduring businesses. His insights ensure that every strategic leap is backed by sound principles, sustainable unit economics, and lasting institutional trust.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* SLIDE 5: PEOPLE BEHIND / OUR TEAM */}
                        <div className="slide-panel relative w-[390px] md:w-[1440px] shrink-0 h-full flex items-center justify-center overflow-hidden">
                            {/* Background Campsite Image */}
                            <div className="absolute inset-0 w-full h-full z-0">
                                <Image
                                    src="/images/about/people/banner.jpg"
                                    alt="People Behind Background"
                                    fill
                                    className="object-cover object-center"
                                />
                                <div className="absolute inset-0 bg-black/25"></div>
                            </div>

                            {/* Left Side: Headline & Copy matching Figma */}
                            <div className="absolute left-8 md:left-14 top-14 md:top-20 z-20 max-w-sm lg:max-w-md text-left pointer-events-none">
                                <h2 className="text-[clamp(1.75rem,2.4vw+0.5rem,2.25rem)] tracking-[0.2em] uppercase mb-6 font-light text-white">
                                    Our Team
                                </h2>
                                <p className="text-[clamp(11px,0.55vw+5px,13.5px)] leading-[1.8] font-light text-gray-300">
                                    Curiosity drives us. Problem-solving defines us. Every person at Smrkonova brings a unique perspective, united by one belief: exceptional work comes from empowered people working together to solve meaningful challenges. It&apos;s this mindset that enables us to create thoughtful products, enduring systems, and work that makes a lasting impact.
                                </p>
                            </div>

                            {/* Interactive Campsite Stage: 7 People Circle Hover Pop */}
                            <div
                                className="absolute inset-0 w-full h-full z-20 pointer-events-auto"
                                onMouseLeave={() => setActiveMemberId(1)}
                            >
                                {/* 7 Circular Hotspots scattered across campsite landscape */}
                                {teamMembers.map((member) => {
                                    const isActive = member.id === activeMemberId;
                                    return (
                                        <button
                                            key={member.id}
                                            type="button"
                                            aria-label={`View ${member.name} - ${member.role}`}
                                            onMouseEnter={() => setActiveMemberId(member.id)}
                                            onClick={() => setActiveMemberId(member.id)}
                                            className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 focus:outline-none p-3 transition-transform duration-300 group/node ${isActive ? "scale-110" : "hover:scale-125"}`}
                                            style={{ left: `${member.x}%`, top: `${member.y}%` }}
                                        >
                                            {/* Pulse effect */}
                                            <span className={`absolute inset-0 m-auto w-6 h-6 rounded-full transition-opacity duration-300 ${isActive ? "bg-cyan-400/35 animate-ping opacity-75" : "bg-white/20 animate-ping opacity-30 group-hover/node:opacity-60"}`} />

                                            {/* Glass orb node */}
                                            <span className={`relative block w-4 h-4 md:w-5 md:h-5 rounded-full border backdrop-blur-md transition-all duration-300 ${isActive ? "border-cyan-300 bg-cyan-400/30 shadow-[0_0_15px_rgba(34,211,238,0.7)]" : "border-white/60 bg-gradient-to-br from-white/35 via-white/10 to-transparent shadow-[0_0_12px_rgba(255,255,255,0.4)] group-hover/node:border-white group-hover/node:shadow-[0_0_16px_rgba(255,255,255,0.8)]"}`}>
                                                {/* Inner core */}
                                                <span className={`absolute inset-0 m-auto w-1.5 h-1.5 rounded-full transition-all duration-300 ${isActive ? "bg-cyan-200 shadow-[0_0_8px_rgba(34,211,238,1)]" : "bg-white/90 shadow-[0_0_6px_rgba(255,255,255,1)] group-hover/node:bg-white"}`} />
                                            </span>
                                        </button>
                                    );
                                })}

                                {/* Active Popped Card (Default Active: Sahana Patil, Hover Pop for all 7) */}
                                {activeMember && (
                                    <div
                                        key={activeMember.id}
                                        className="absolute z-30 pointer-events-auto transition-all duration-300 ease-out max-md:!left-1/2 max-md:!top-[44%] max-md:!-translate-x-1/2 max-md:!-translate-y-1/2"
                                        style={{
                                            left: `${activeMember.x}%`,
                                            top: `${activeMember.y}%`,
                                            transform:
                                                activeMember.align === "left"
                                                    ? "translate(-15%, -50%)"
                                                    : activeMember.align === "right"
                                                    ? "translate(-85%, -50%)"
                                                    : "translate(-50%, -50%)"
                                        }}
                                    >
                                        <div className="flex flex-col items-center">
                                            {/* Sci-fi tech frame with clipped corners matching Figma design */}
                                            <div
                                                className="relative w-44 h-52 md:w-52 md:h-60 mb-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.85),0_0_20px_rgba(255,255,255,0.12)] group transition-transform duration-300 hover:scale-[1.02]"
                                                style={{
                                                    clipPath:
                                                        "polygon(14px 0, 100% 0, 100% calc(100% - 22px), calc(100% - 22px) 100%, 0 100%, 0 14px)"
                                                }}
                                            >
                                                {/* Outer border glow */}
                                                <div className="absolute inset-0 bg-white/40 group-hover:bg-cyan-300/50 transition-colors duration-300" />

                                                {/* Inner card viewport */}
                                                <div
                                                    className="absolute inset-[1px] bg-gradient-to-b from-[#0b1c1e]/90 via-[#061214]/90 to-[#02080a]/95 backdrop-blur-xl overflow-hidden flex items-end justify-center pt-2"
                                                    style={{
                                                        clipPath:
                                                            "polygon(14px 0, 100% 0, 100% calc(100% - 22px), calc(100% - 22px) 100%, 0 100%, 0 14px)"
                                                    }}
                                                >
                                                    <Image
                                                        src={activeMember.image}
                                                        alt={activeMember.name}
                                                        fill
                                                        className="object-contain object-bottom scale-95 transition-transform duration-300"
                                                        sizes="(max-width: 768px) 180px, 220px"
                                                        priority
                                                    />
                                                    {/* Bottom dark gradient overlay */}
                                                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />
                                                </div>
                                            </div>

                                            {/* Member details */}
                                            <div className="text-center whitespace-nowrap px-3">
                                                <h3 className="text-[clamp(12px,0.7vw+5px,15px)] tracking-[0.15em] font-light uppercase text-white mb-1 drop-shadow-md">
                                                    {activeMember.name}
                                                </h3>
                                                <p className="text-[clamp(9px,0.5vw+4px,11px)] tracking-wider text-white/70 font-light drop-shadow-sm">
                                                    {activeMember.role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Roadmap Navigation Slider - Anchored inside sticky viewport, scrolls away after slide 5 */}
                    <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 w-full z-40 px-4 md:px-12 pointer-events-none">
                        <div className="relative w-full max-w-2xl lg:max-w-3xl mx-auto h-[90px] md:h-[110px] pointer-events-auto">
                            {/* SVG Line connecting the nodes */}
                            <svg viewBox="0 0 1000 200" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                                {/* Dimmed background line */}
                                <path
                                    d="M 50 180 L 200 130 L 400 150 L 600 100 L 750 100 L 900 40"
                                    fill="none"
                                    stroke="rgba(255,255,255,0.3)"
                                    strokeWidth="3"
                                />
                                {/* Active progress line */}
                                <path
                                    d="M 50 180 L 200 130 L 400 150 L 600 100 L 750 100 L 900 40"
                                    fill="none"
                                    stroke="#ffffff"
                                    strokeWidth="3"
                                    className="transition-all duration-500 ease-out"
                                    style={{
                                        strokeDasharray: 1000,
                                        strokeDashoffset: 1000 - (activeSlide / 4) * 1000
                                    }}
                                />
                            </svg>

                            {/* Nodes placed over the SVG coordinates */}
                            {roadmapItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="absolute flex flex-col items-center cursor-pointer group"
                                    style={{
                                        left: `${item.x}%`,
                                        top: `${item.y}%`,
                                        transform: 'translate(-50%, -50%)'
                                    }}
                                    onClick={() => scrollToSlide(index)}
                                >
                                    {/* Label Top */}
                                    {item.pos === "top" && (
                                        <span className={`absolute bottom-full mb-3 text-[clamp(9px,0.6vw+4px,12px)] tracking-widest uppercase transition-colors duration-300 whitespace-nowrap ${activeSlide === index ? 'text-white font-medium' : 'text-white/60 group-hover:text-white'}`}>
                                            {item.label}
                                        </span>
                                    )}

                                    {/* Glass Node */}
                                    <div className={`relative w-7 h-7 md:w-9 md:h-9 rounded-full border transition-all duration-300 flex items-center justify-center backdrop-blur-md ${activeSlide >= index ? 'border-white/80 bg-white/20' : 'border-white/40 bg-white/5 group-hover:bg-white/10'}`}>
                                        {/* Inner dot */}
                                        <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-300 ${activeSlide >= index ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,1)]' : 'bg-white/50'}`} />
                                    </div>

                                    {/* Label Bottom */}
                                    {item.pos === "bottom" && (
                                        <span className={`absolute top-full mt-3 text-[clamp(9px,0.6vw+4px,12px)] tracking-widest uppercase transition-colors duration-300 whitespace-nowrap ${activeSlide === index ? 'text-white font-medium' : 'text-white/60 group-hover:text-white'}`}>
                                            {item.label}
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* NORMAL SCROLL SECTIONS */}
            <div className="relative w-full z-10 bg-black">
                {/* Background banner for the eagle and clouds sections */}
                <div className="absolute top-0 left-0 w-full h-full z-0 opacity-40 pointer-events-none">
                    <Image
                        src="/images/about/banner.jpg"
                        alt="Background Banner"
                        fill
                        className="object-cover object-top"
                    />
                </div>

                {/* Eagle Section */}
                <section
                    className="relative z-10 w-full flex items-center pt-28 pb-20"
                    style={{ minHeight: "calc(100vh / var(--desktop-scale, 1))" }}
                >
                    {/* Eagle Image flush left and top */}
                    <div className="absolute top-0 left-0 w-full md:w-[60%] h-[500px] md:h-[850px] z-0 pointer-events-none -mt-16 md:-mt-24">
                        <Image
                            src="/images/about/eagle.png"
                            alt="Eagle"
                            fill
                            className="object-contain object-left-top md:object-left"
                        />
                    </div>

                    {/* Text Content constrained to grid */}
                    <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-20 flex justify-end">
                        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mt-[350px] md:mt-0">
                            <h2 className="text-[clamp(1.75rem,3.5vw+0.5rem,3.5rem)] font-light tracking-[0.1em] uppercase leading-[1.2] mb-8">
                                Each<br />Challenge<br />Sharpens Our<br />Thinking.
                            </h2>
                            <p className="text-[clamp(11px,0.6vw+5px,14px)] text-gray-300 font-light leading-[1.8] max-w-sm mb-12">
                                Every solution expands our understanding revealing a better path forward. Get to the vantage point for your next climb.
                            </p>
                            <div className="flex gap-4">
                                <button className="px-6 py-3 md:px-8 md:py-4 bg-white text-black text-[clamp(9px,0.6vw+4px,12px)] tracking-[0.2em] uppercase font-medium hover:bg-gray-200 transition-colors">
                                    Talk to the team
                                </button>
                                <button className="px-6 py-3 md:px-8 md:py-4 bg-transparent border border-white/40 text-white text-[clamp(9px,0.6vw+4px,12px)] tracking-[0.2em] uppercase font-medium hover:bg-white/10 transition-colors">
                                    See our work
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Journey Continues / Clouds Section */}
                <section
                    className="relative z-10 w-full flex flex-col items-center justify-center py-20"
                    style={{ minHeight: "calc(50vh / var(--desktop-scale, 1))" }}
                >
                    <h3 className="text-[clamp(0.875rem,1.5vw+0.4rem,1.25rem)] tracking-[0.3em] font-light uppercase mb-12 md:mb-16 text-center">
                        The Journey Continues
                    </h3>

                    <div className="relative w-full max-w-5xl h-[260px] md:h-[400px] flex items-center justify-center px-4">
                        <Image
                            src="/images/about/center-cloud.png"
                            alt="Clouds"
                            fill
                            className="object-contain object-center z-10"
                        />
                        <Image
                            src="/images/about/birds.png"
                            alt="Birds"
                            fill
                            className="object-contain object-center z-20 scale-100 md:scale-110"
                        />
                    </div>
                </section>

                {/* Summit / View Section (Circles) */}
                <section className="relative z-0 w-full flex flex-col items-center pt-20 pb-0 overflow-hidden">
                    {/* Peachy glow background behind the gap */}
                    <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[#eb9d73] to-[#eb9d73] opacity-50 pointer-events-none"></div>

                    {/* Top Arc */}
                    <div
                        className="relative z-10 w-full h-[320px] md:h-[440px] flex items-end justify-center pb-16 md:pb-24"
                        style={{
                            background: 'linear-gradient(180deg, rgba(48, 44, 28, 0.94) 61.22%, rgba(36, 42, 33, 0.94) 100%)',
                            borderBottomLeftRadius: '50% 100%',
                            borderBottomRightRadius: '50% 100%'
                        }}
                    >
                        <h2 className="text-[clamp(1.25rem,2.2vw+0.5rem,2.25rem)] tracking-[0.2em] font-light uppercase text-center leading-[1.6]">
                            When your<br />brand reaches<br />the summit,
                        </h2>
                    </div>

                    {/* Bottom Arc */}
                    <div
                        className="relative z-10 w-full min-h-[500px] md:min-h-[700px] flex flex-col items-center justify-start pt-20 md:pt-32 mt-8 md:mt-20"
                        style={{
                            background: 'linear-gradient(180deg, rgba(48, 44, 28, 0.94) 61.22%, rgba(36, 42, 33, 0.94) 100%)',
                            borderTopLeftRadius: '50% 100%',
                            borderTopRightRadius: '50% 100%'
                        }}
                    >
                        <h1 className="text-[clamp(2.25rem,5vw+0.5rem,5rem)] tracking-[0.2em] font-light uppercase text-center mb-4">
                            The View
                        </h1>
                        <h3 className="text-[clamp(0.875rem,1.8vw+0.4rem,1.5rem)] tracking-[0.2em] font-light uppercase text-center text-white/80 mb-10">
                            Speaks for itself
                        </h3>

                        <p className="text-[clamp(10px,0.6vw+4px,12px)] text-center text-gray-300 font-light max-w-[320px] md:max-w-md leading-[2] mb-12 px-6">
                            Share your vision, your challenge, or your next ambition. Smrkonova helps explore what's possible and engineers the smartest path to the top.
                        </p>

                        <Link
                            href="/contact"
                            onClick={() => trackContactButtonClick("Get in touch", "about_page_footer")}
                            className="inline-block px-8 py-3 md:px-10 md:py-4 bg-transparent border border-white/30 text-white text-[clamp(9px,0.6vw+4px,12px)] tracking-[0.2em] uppercase hover:bg-white/10 transition-colors"
                        >
                            Get in touch
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
