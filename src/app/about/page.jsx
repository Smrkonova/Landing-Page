"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function AboutPage() {
    const containerRef = useRef(null);
    const wrapperRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0);

    const roadmapItems = [
        { label: "WHY WE CLIMB", index: 0 },
        { label: "THE WAY", index: 1 },
        { label: "THE VIEW", index: 2 },
        { label: "THE GUIDE", index: 3 },
        { label: "PEOPLE BEHIND", index: 4 }
    ];

    useGSAP(() => {
        if (!wrapperRef.current) return;

        const slides = gsap.utils.toArray(".slide-panel");
        const amount = slides.length - 1;
        if (amount <= 0) return;

        const totalUnits = amount + 4; // 4 standard scroll units + 2 extra units for internal slides + 2 extra units for the last slide to hold

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: wrapperRef.current,
                pin: true,
                scrub: 1,
                snap: {
                    snapTo: 1 / totalUnits,
                    duration: { min: 0.2, max: 0.5 },
                    delay: 0.1,
                    ease: "power1.inOut"
                },
                end: () => `+=${wrapperRef.current ? wrapperRef.current.offsetWidth * totalUnits : 8000}`,
                onUpdate: (self) => {
                    // Update active slide based on scroll progress
                    const p = self.progress * totalUnits;
                    let slideIndex = 0;
                    if (p < 0.5) slideIndex = 0;
                    else if (p < 1.5) slideIndex = 1;
                    else if (p < 2.5) slideIndex = 2;
                    else if (p < 4.5) slideIndex = 3; // covers units 3 and 4 (internal animations)
                    else slideIndex = 4;

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

    const scrollToSlide = (index) => {
        const slides = document.querySelectorAll(".slide-panel");
        const amount = slides.length - 1;
        if (amount <= 0) return;

        const totalUnits = amount + 4;

        const wrapper = wrapperRef.current;
        if (!wrapper) return;

        const scrollAmount = wrapper.offsetWidth * totalUnits;
        const targetMap = [0, 1, 2, 3, 6]; // Map 5 roadmap steps to the timeline units
        const targetScroll = wrapper.offsetTop + (scrollAmount * (targetMap[index] / totalUnits));

        window.scrollTo({
            top: targetScroll,
            behavior: "smooth"
        });
    };

    return (
        <main className="relative w-full bg-black text-white font-sans overflow-x-hidden">
            <div ref={wrapperRef} className="relative w-full h-screen overflow-hidden">
                <div
                    ref={containerRef}
                    className="flex w-max h-full"
                >
                    {/* SLIDE 1: WHY WE CLIMB (WE) */}
                    <div className="slide-panel relative w-screen h-full flex flex-col items-center justify-center shrink-0">
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
                        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl px-6">
                            <h2 className="text-[clamp(11px,0.8vw+5px,18px)] tracking-[0.3em] uppercase mb-2 font-light">It is our</h2>
                            <h1 className="text-[clamp(3.5rem,7.5vw+0.5rem,8rem)] font-light tracking-widest mb-6 uppercase">Mission</h1>
                            <h3 className="text-[clamp(1.125rem,1.5vw+0.5rem,1.5rem)] font-light mb-8">TO PAVE THE PATH FOR YOUR BUSINESS.</h3>

                            <p className="max-w-xl text-[clamp(0.875rem,0.5vw+0.65rem,1rem)] leading-relaxed font-light text-gray-200">
                                Smrkonova builds connected strategies, experiences and technologies that continuously attract new customers, strengthen relationships with existing ones, and improve performance at every stage of growth.
                            </p>
                        </div>
                    </div>

                    {/* SLIDE 2: THE WAY */}
                    <div className="slide-panel relative w-screen h-full shrink-0 flex items-center">
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
                        <div className="absolute right-0 bottom-0 w-full md:w-1/2 h-[80vh] z-[5] pointer-events-none opacity-80">
                            <Image
                                src="/images/about/way/right-cloud.png"
                                alt="Cloud Overlay"
                                fill
                                className="object-contain object-bottom right-0"
                            />
                        </div>
                        <div className="absolute left-0 bottom-0 w-full md:w-1/2 h-[100vh] z-[5] pointer-events-none">
                            <Image
                                src="/images/about/way/abstract.png"
                                alt="Cloud Overlay"
                                fill
                                className="object-contain object-bottom right-0"
                            />
                        </div>

                        {/* Content Container */}
                        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-12">

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
                    <div className="slide-panel relative w-screen h-full shrink-0 flex items-center">
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
                        <div className="absolute left-0 bottom-0 w-full md:w-1/2 h-[60vh] z-[5] pointer-events-none opacity-80">
                            <Image
                                src="/images/about/view/left-cloud.png"
                                alt="Left Cloud Overlay"
                                fill
                                className="object-contain object-bottom left-0"
                            />
                        </div>

                        {/* Right Cloud */}
                        <div className="absolute right-0 bottom-0 w-full md:w-1/2 h-[60vh] z-[5] pointer-events-none opacity-80">
                            <Image
                                src="/images/about/view/right-cloud.png"
                                alt="Right Cloud Overlay"
                                fill
                                className="object-contain object-bottom right-0"
                            />
                        </div>

                        {/* Content Container */}
                        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-start justify-between gap-12 pt-0 pb-32">

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
                    <div className="slide-panel relative w-screen h-full shrink-0 flex items-center justify-center">
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
                            <div className="person-1 absolute inset-0 w-full h-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 px-8 pt-20 md:pt-32 pb-40 md:pb-48">
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

                            {/* Person 2 (Placeholder) */}
                            <div className="person-2 absolute inset-0 w-full h-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 px-8 pt-20 md:pt-32 pb-40 md:pb-48 opacity-0">
                                {/* Left Side: Profile */}
                                <div className="w-full md:w-5/12 flex flex-col items-center md:items-end md:pr-12">
                                    <div className="relative w-48 h-64 md:w-80 md:h-[400px] mb-6 rounded-[2rem] border border-white/20 bg-white/5 backdrop-blur-sm overflow-hidden flex items-end justify-center pt-8 shadow-2xl">
                                        <Image
                                            src="/images/about/guide/mohit.png"
                                            alt="Person 2 Placeholder"
                                            fill
                                            className="object-cover object-top scale-105"
                                        />
                                        <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                    </div>
                                    <div className="text-center md:text-left w-64 md:w-80">
                                        <h3 className="text-[clamp(1rem,1.2vw+0.5rem,1.25rem)] tracking-[0.15em] font-light uppercase mb-2">Person 2 Name</h3>
                                        <p className="text-[clamp(10px,0.5vw+4px,12px)] tracking-wider text-white/70 font-medium">Role & Title</p>
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

                            {/* Person 3 (Placeholder) */}
                            <div className="person-3 absolute inset-0 w-full h-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 px-8 pt-20 md:pt-32 pb-40 md:pb-48 opacity-0">
                                {/* Left Side: Profile */}
                                <div className="w-full md:w-5/12 flex flex-col items-center md:items-end md:pr-12">
                                    <div className="relative w-48 h-64 md:w-80 md:h-[400px] mb-6 rounded-[2rem] border border-white/20 bg-white/5 backdrop-blur-sm overflow-hidden flex items-end justify-center pt-8 shadow-2xl">
                                        <Image
                                            src="/images/about/guide/mohit.png"
                                            alt="Person 3 Placeholder"
                                            fill
                                            className="object-cover object-top scale-105"
                                        />
                                        <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                    </div>
                                    <div className="text-center md:text-left w-64 md:w-80">
                                        <h3 className="text-[clamp(1rem,1.2vw+0.5rem,1.25rem)] tracking-[0.15em] font-light uppercase mb-2">Person 3 Name</h3>
                                        <p className="text-[clamp(10px,0.5vw+4px,12px)] tracking-wider text-white/70 font-medium">Role & Title</p>
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

                        </div>
                    </div>

                    {/* SLIDE 5: PEOPLE BEHIND */}
                    <div className="slide-panel relative w-screen h-full shrink-0 flex items-center justify-center">
                        {/* Background Image */}
                        <div className="absolute inset-0 w-full h-full z-0">
                            <Image
                                src="/images/about/people/banner.jpg"
                                alt="People Behind Background"
                                fill
                                className="object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-black/20"></div>
                        </div>

                        {/* Content Container */}
                        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-12 pt-20 md:pt-0 pb-40 md:pb-20">

                            {/* Left Side: Text */}
                            <div className="w-full md:w-5/12 flex flex-col text-left">
                                <h2 className="text-[clamp(1.75rem,2.5vw+0.5rem,2.25rem)] tracking-[0.15em] uppercase mb-8 font-light">Our Team</h2>
                                <p className="text-[clamp(12px,0.6vw+5px,14px)] leading-[1.8] font-light text-gray-300 max-w-md">
                                    Curiosity drives us. Problem-solving<br />
                                    defines us. Every person at Smrkonova<br />
                                    brings a unique perspective, united by one<br />
                                    belief: exceptional work comes from<br />
                                    empowered people working together to<br />
                                    solve meaningful challenges.<br />
                                    It's this mindset that enables us to create<br />
                                    thoughtful products, enduring systems, and<br />
                                    work that makes a lasting impact.
                                </p>
                            </div>

                            {/* Right Side: Card */}
                            <div className="w-full md:w-5/12 flex flex-col items-center justify-center md:items-end md:pr-20">
                                <div className="flex flex-col items-center">
                                    {/* Card with clipped corners */}
                                    <div
                                        className="relative w-56 h-64 md:w-64 md:h-72 mb-6"
                                        style={{ clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)' }}
                                    >
                                        {/* Border Layer */}
                                        <div className="absolute inset-0 bg-white/40"></div>

                                        {/* Inner Content Layer */}
                                        <div
                                            className="absolute inset-[1px] bg-black/10 backdrop-blur-sm overflow-hidden"
                                            style={{ clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)' }}
                                        >
                                            <Image
                                                src="/images/about/people/people-1.png"
                                                alt="Mohit Ravindran"
                                                fill
                                                className="object-cover object-bottom scale-[1.15]"
                                            />
                                            <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <h3 className="text-[clamp(12px,0.6vw+5px,16px)] tracking-[0.1em] font-light uppercase mb-1">Mohit Ravindran</h3>
                                        <p className="text-[clamp(9px,0.5vw+4px,10px)] tracking-wider text-white/60 font-medium">Founder & Product Designer</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Roadmap Navigation Slider */}
                <div className="fixed bottom-0 left-0 w-full z-50 px-4 md:px-12 pb-12 pointer-events-none">
                    <div className="relative w-full max-w-3xl mx-auto h-[120px] md:h-[200px] pointer-events-auto">
                        {/* SVG Line connecting the nodes */}
                        <svg viewBox="0 0 1000 200" className="absolute inset-0 w-full h-full preserve-3d" preserveAspectRatio="none">
                            {/* Dimmed background line */}
                            <path
                                d="M 50 180 L 200 130 L 400 150 L 600 100 L 750 100 L 900 40"
                                fill="none"
                                stroke="rgba(255,255,255,0.3)"
                                strokeWidth="3"
                            />
                            {/* Active progress line using strokeDasharray (simplified animation) */}
                            <path
                                d="M 50 180 L 200 130 L 400 150 L 600 100 L 750 100 L 900 40"
                                fill="none"
                                stroke="#ffffff"
                                strokeWidth="3"
                                className="transition-all duration-500 ease-out"
                                style={{
                                    strokeDasharray: 1000,
                                    strokeDashoffset: 1000 - (activeSlide / 4) * 1000 // Very rough approximation for progress
                                }}
                            />
                        </svg>

                        {/* Nodes placed absolutely over the SVG coordinates */}
                        {/* Since viewBox is 0 0 1000 200, left % is x/10, top % is y/2 */}
                        {[
                            { label: "WHY WE CLIMB", index: 0, x: 20, y: 65, pos: "top" },
                            { label: "THE WAY", index: 1, x: 40, y: 75, pos: "bottom" },
                            { label: "THE VIEW", index: 2, x: 60, y: 50, pos: "top" },
                            { label: "THE GUIDE", index: 3, x: 75, y: 50, pos: "bottom" },
                            { label: "PEOPLE BEHIND", index: 4, x: 90, y: 20, pos: "top" }
                        ].map((item, index) => (
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
                                    <span className={`absolute bottom-full mb-4 text-[clamp(9px,0.6vw+4px,12px)] tracking-widest uppercase transition-colors duration-300 whitespace-nowrap ${activeSlide === index ? 'text-white font-medium' : 'text-white/60 group-hover:text-white'}`}>
                                        {item.label}
                                    </span>
                                )}

                                {/* Glass Node */}
                                <div className={`relative w-8 h-8 md:w-10 md:h-10 rounded-full border transition-all duration-300 flex items-center justify-center backdrop-blur-md ${activeSlide >= index ? 'border-white/80 bg-white/20' : 'border-white/40 bg-white/5 group-hover:bg-white/10'}`}>
                                    {/* Inner dot */}
                                    <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-300 ${activeSlide >= index ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,1)]' : 'bg-white/50'}`} />
                                </div>

                                {/* Label Bottom */}
                                {item.pos === "bottom" && (
                                    <span className={`absolute top-full mt-4 text-[clamp(9px,0.6vw+4px,12px)] tracking-widest uppercase transition-colors duration-300 whitespace-nowrap ${activeSlide === index ? 'text-white font-medium' : 'text-white/60 group-hover:text-white'}`}>
                                        {item.label}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

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
                <section className="relative z-10 w-full min-h-screen flex items-center pt-32 pb-20">
                    {/* Eagle Image flush left and top */}
                    <div className="absolute top-0 left-0 w-full md:w-[60%] h-[50vh] md:h-[120vh] z-0 pointer-events-none -mt-20 md:-mt-32">
                        <Image
                            src="/images/about/eagle.png"
                            alt="Eagle"
                            fill
                            className="object-contain object-left-top md:object-left"
                        />
                    </div>

                    {/* Text Content constrained to grid */}
                    <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-20 flex justify-end">
                        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mt-[40vh] md:mt-0">
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
                <section className="relative z-10 w-full min-h-[50vh] flex flex-col items-center justify-center py-20">
                    <h3 className="text-[clamp(0.875rem,1.5vw+0.4rem,1.25rem)] tracking-[0.3em] font-light uppercase mb-12 md:mb-20 text-center">
                        The Journey Continues
                    </h3>

                    <div className="relative w-full max-w-5xl h-[30vh] md:h-[50vh] flex items-center justify-center px-4">
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
                        className="relative z-10 w-full h-[40vh] md:h-[50vh] flex items-end justify-center pb-16 md:pb-24"
                        style={{
                            background: 'linear-gradient(180deg, rgba(48, 44, 28, 0.94) 61.22%, rgba(36, 42, 33, 0.94) 100%)',
                            borderBottomLeftRadius: '50vw 100%',
                            borderBottomRightRadius: '50vw 100%'
                        }}
                    >
                        <h2 className="text-[clamp(1.25rem,2.2vw+0.5rem,2.25rem)] tracking-[0.2em] font-light uppercase text-center leading-[1.6]">
                            When your<br />brand reaches<br />the summit,
                        </h2>
                    </div>

                    {/* Bottom Arc */}
                    <div
                        className="relative z-10 w-full h-[60vh] md:h-[80vh] flex flex-col items-center justify-start pt-20 md:pt-32 mt-8 md:mt-20"
                        style={{
                            background: 'linear-gradient(180deg, rgba(48, 44, 28, 0.94) 61.22%, rgba(36, 42, 33, 0.94) 100%)',
                            borderTopLeftRadius: '50vw 100%',
                            borderTopRightRadius: '50vw 100%'
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

                        <button className="px-8 py-3 md:px-10 md:py-4 bg-transparent border border-white/30 text-white text-[clamp(9px,0.6vw+4px,12px)] tracking-[0.2em] uppercase hover:bg-white/10 transition-colors">
                            Get in touch
                        </button>
                    </div>
                </section>
            </div>
        </main>
    );
}
