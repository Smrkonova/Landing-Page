"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { trackContactButtonClick } from "@/lib/analytics";
import { useContactModal } from "@/context/ContactModalContext";
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
    x: number;
    y: number;
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
        name: "Harshith R",
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

interface GuideMember {
    id: number;
    name: string;
    role: string;
    headline: string[];
    desc1: string;
    desc2?: string;
    image: string;
}

const guideMembers: GuideMember[] = [
    {
        id: 1,
        name: "Mohit Ravindran",
        role: "Founder & Product Designer",
        headline: ["Real", "progress is", "engineered", "with", "systems."],
        desc1: "Mohit is the strategic force behind every project, combining product thinking, business strategy, and design to solve complex challenges. Having collaborated on more than a hundred digital products across healthcare, fintech, ecommerce, and enterprise software, he brings a deep understanding of what it takes to build products that succeed in the real world.",
        desc2: "Working closely with founders, developers, and business leaders, Mohit approaches every project with a systems mindset aligning business goals with user needs to create experiences that are intuitive, scalable, and commercially effective. He believes great products aren't just designed, they're engineered to deliver measurable value, adapt over time, and become the foundation for business growth.",
        image: "/images/about/guide/mohitnew.png"
    },
    {
        id: 2,
        name: "Shruti",
        role: "Head of Technology & Engineering",
        headline: ["Technology", "built for", "enduring", "scale &", "impact."],
        desc1: "Shruti directs the technological architecture and engineering strategy at Smrkonova. Specialising in scalable systems, intelligent automation, and resilient software infrastructure, she ensures every digital solution operates with speed, stability, and enterprise-grade security.",
        desc2: "Collaborating at the intersection of business intelligence and technical innovation, Shruti transforms complex technical requirements into cohesive, modern architectures. Her leadership guarantees that our clients' digital platforms don't just solve immediate problems—they scale seamlessly alongside ambitious business growth.",
        image: "/team/shruti.png"
    },
    {
        id: 3,
        name: "U. Ravindran",
        role: "Senior Advisor & Director",
        headline: ["Wisdom", "forged in", "decades of", "business", "mastery."],
        desc1: "Bringing seasoned strategic perspective to Smrkonova, U. Ravindran guides enterprise governance, financial discipline, and long-term organizational value. With extensive executive leadership across traditional industries and emerging markets, his stewardship anchors our high-growth initiatives.",
        desc2: "Serving as a trusted counsel to the leadership team, he instills the foundational rigor required to build enduring businesses. His insights ensure that every strategic leap is backed by sound principles, sustainable unit economics, and lasting institutional trust.",
        image: "/team/u ravindra.png"
    }
];


// Roadmap items anchored reliably at the bottom of the viewport
const roadmapItems = [
    { label: "WHY WE CLIMB", index: 0, x: 20, y: 65, pos: "top" },
    { label: "THE WAY", index: 1, x: 40, y: 75, pos: "bottom" },
    { label: "THE VIEW", index: 2, x: 60, y: 50, pos: "top" },
    { label: "THE GUIDE", index: 3, x: 75, y: 50, pos: "bottom" },
    { label: "PEOPLE BEHIND", index: 4, x: 90, y: 20, pos: "top" }
];


function Vector2GlassCard({
    children,
    className = "",
    width = 150,
    height = 180,
}: {
    children: React.ReactNode;
    className?: string;
    width?: number | string;
    height?: number | string;
}) {
    return (
        <div
            className={`relative flex items-center justify-center shrink-0 ${className}`}
            style={{ width, height }}
        >
            {/* SVG Glass Shape Background */}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_12px_28px_rgba(0,0,0,0.65)]"
                viewBox="0 0 150 180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="vector2GlassBg" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(20, 38, 43, 0.45)" />
                        <stop offset="50%" stopColor="rgba(10, 24, 28, 0.65)" />
                        <stop offset="100%" stopColor="rgba(4, 12, 14, 0.85)" />
                    </linearGradient>
                    <linearGradient id="vector2GlassBorder" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="rgba(255, 255, 255, 0.65)" />
                        <stop offset="35%" stopColor="rgba(255, 255, 255, 0.18)" />
                        <stop offset="70%" stopColor="rgba(255, 255, 255, 0.4)" />
                        <stop offset="100%" stopColor="rgba(255, 255, 255, 0.12)" />
                    </linearGradient>
                    <clipPath id="vector2CardClipDef" clipPathUnits="objectBoundingBox">
                        <path d="M 0.0608 0 H 0.9392 Q 1 0 1 0.0507 V 0.8167 Q 1 0.8389 0.9833 0.8528 L 0.85 0.9861 Q 0.8333 1 0.8067 1 H 0.0608 Q 0 1 0 0.9493 V 0.0507 Q 0 0 0.0608 0 Z" />
                    </clipPath>
                </defs>
                <path
                    d="M 9.12 0 H 140.88 A 9.12 9.12 0 0 1 150 9.12 V 147 Q 150 151 147.5 153.5 L 127.5 177.5 Q 125 180 121 180 H 9.12 A 9.12 9.12 0 0 1 0 170.88 V 9.12 A 9.12 9.12 0 0 1 9.12 0 Z"
                    fill="url(#vector2GlassBg)"
                    stroke="url(#vector2GlassBorder)"
                    strokeWidth="1.2"
                />
            </svg>

            {/* Top-left Smrkonova Monogram Watermark as shown in Figma */}
            <svg
                className="absolute left-3 top-3 w-4 h-3.5 text-white/25 pointer-events-none z-10"
                viewBox="0 0 34 20"
                fill="currentColor"
            >
                <path d="M6.88963 7.15444C6.88963 7.15444 6.88166 7.16468 6.87938 7.16924L0.149474 18.264C-0.269368 18.9707 0.241663 19.8676 1.06569 19.8676H4.65429C4.67933 19.8676 4.70665 19.8653 4.73169 19.8631L9.61324 11.7139L6.89304 7.15216H6.89077V7.15444H6.88963Z" />
                <path d="M15.2576 6.43968C14.8387 5.73288 15.3497 4.83602 16.1704 4.83602H17.9277C18.2873 4.83602 18.6231 4.65505 18.8188 4.3523L20.583 1.64236C21.0417 0.935565 20.5363 0 19.6918 0H11.5426C11.1727 0 10.8301 0.191211 10.6389 0.50648L8.43318 4.08711C8.22717 4.42173 8.22261 4.84399 8.42293 5.18429L13.1133 13.1502C13.5298 13.857 13.0188 14.7505 12.1971 14.7505H11.0635C10.6196 14.7505 10.2076 14.9884 9.98676 15.3731L7.39062 19.8699H16.4833C16.8555 19.8699 17.1981 19.6764 17.3916 19.3589L19.8557 15.2945C20.0594 14.9599 20.0617 14.5399 19.8603 14.203L15.2598 6.44081H15.2576V6.43968Z" />
                <path d="M33.3086 18.2595L23.7515 2.3594C23.508 1.95194 22.923 1.94056 22.6623 2.33664L19.2604 7.50843C18.9747 7.93979 18.9622 8.49863 19.2285 8.94251L21.5185 12.4958C21.5037 12.4958 21.5333 12.4958 21.5185 12.4958L21.8315 11.995C22.231 11.278 23.2587 11.2655 23.6753 11.9723L27.8398 19.3453C28.031 19.6708 28.3781 19.8688 28.756 19.8688H32.3993C33.2256 19.8688 33.7343 18.9685 33.3098 18.2583L33.3086 18.2595Z" />
            </svg>

            {/* Content Container (photo clipped to glass shape) */}
            <div
                className="relative w-full h-full overflow-hidden flex items-end justify-center"
                style={{
                    clipPath: "url(#vector2CardClipDef)",
                }}
            >
                {children}
            </div>
        </div>
    );
}

export default function AboutPage() {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const pinnedViewportRef = useRef<HTMLDivElement | null>(null);
    const { openContactModal } = useContactModal();

    const [activeSlide, setActiveSlide] = useState(0);
    const [activeGuideMemberIdx, setActiveGuideMemberIdx] = useState(0);
    const [activeMemberId, setActiveMemberId] = useState<number>(1);
    const [mobileTeamIdx, setMobileTeamIdx] = useState(0);
    const touchStartX = useRef<number | null>(null);
    const activeMember = teamMembers.find((m) => m.id === activeMemberId) || teamMembers[0];

    useGSAP(() => {
        if (!wrapperRef.current) return;

        const slides = gsap.utils.toArray<HTMLElement>(".slide-panel");
        const amount = slides.length - 1;
        if (amount <= 0) return;

        const prefersReducedMotion =
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        // 3 units to slide 4, 2 units for guide members, 1 unit to slide 5, 2 units hold = 8 units
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

                    if (slideIndex === 3) {
                        if (p < 3.7) setActiveGuideMemberIdx(0);
                        else if (p < 4.4) setActiveGuideMemberIdx(1);
                        else setActiveGuideMemberIdx(2);
                    }
                }
            }
        });

        if (prefersReducedMotion) {
            tl.to(slides, { xPercent: -100 * 3, ease: "none", duration: 3 }, 0)
                .to(slides, { xPercent: -100 * 4, ease: "none", duration: 1 }, 5);
            tl.to(".panorama-bg", { xPercent: -60, ease: "none", duration: 3 }, 0)
                .to(".panorama-bg", { xPercent: -80, ease: "none", duration: 1 }, 5);
            tl.to({}, { duration: 2 });
            return () => {
                tl.kill();
            };
        }

        gsap.set(".person-2, .person-3", { opacity: 0, x: 60 });
        gsap.set(".person-1", { opacity: 1, x: 0 });

        // 1. Move horizontally to Slide 4 (THE GUIDE) over 3 units
        tl.to(slides, {
            xPercent: -100 * 3,
            ease: "none",
            duration: 3
        }, 0);
        tl.to(".panorama-bg", {
            xPercent: -60,
            ease: "none",
            duration: 3
        }, 0);

        // Slide 1 Exits:
        tl.to(".slide1-content", {
            x: -120,
            opacity: 0,
            filter: "blur(6px)",
            ease: "power2.inOut",
            duration: 0.9
        }, 0);

        // Slide 2 Enters:
        tl.fromTo(".slide2-mount",
            { x: -140, scale: 0.88, opacity: 0.2 },
            { x: 0, scale: 1.0, opacity: 1, ease: "power2.out", duration: 0.95 },
            0.08
        );

        tl.fromTo(".slide2-cloud-golden",
            { x: 120, y: 30, opacity: 0.2 },
            { x: 0, y: 0, opacity: 0.9, ease: "power2.out", duration: 0.95 },
            0.08
        );

        tl.fromTo(".slide2-heading, .slide2-desc",
            { x: 120, opacity: 0 },
            { x: 0, opacity: 1, ease: "power2.out", duration: 0.9 },
            0.1
        );

        // Slide 2 Exits:
        tl.to(".slide2-mount", {
            x: -120,
            scale: 0.92,
            opacity: 0.25,
            ease: "power2.inOut",
            duration: 1
        }, 1);

        tl.to(".slide2-cloud-golden", {
            x: -120,
            opacity: 0,
            ease: "power2.inOut",
            duration: 0.9
        }, 1);

        tl.to(".slide2-heading, .slide2-desc", {
            x: -120,
            opacity: 0,
            ease: "power2.inOut",
            duration: 0.9
        }, 1);

        // Slide 3 Enters:
        tl.fromTo(".slide3-heading, .slide3-desc",
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, ease: "power2.out", duration: 0.9 },
            1.1
        );

        // Slide 3 Exits:
        tl.to(".slide3-heading, .slide3-desc", {
            y: -60,
            opacity: 0,
            ease: "power2.inOut",
            duration: 0.9
        }, 2);

        // Slide 4 Enters:
        tl.fromTo(".person-1",
            { x: 80, opacity: 0 },
            { x: 0, opacity: 1, ease: "power2.out", duration: 0.8 },
            2.2
        );

        // 2. Guide member transitions within Slide 4 (Units 3 to 5)
        // Person 1 -> Person 2 (Unit 3.5 to 3.9)
        tl.to(".person-1", { opacity: 0, x: -60, ease: "power2.inOut", duration: 0.4 }, 3.5);
        tl.fromTo(".person-2", { opacity: 0, x: 60 }, { opacity: 1, x: 0, ease: "power2.out", duration: 0.4 }, 3.7);

        // Person 2 -> Person 3 (Unit 4.3 to 4.7)
        tl.to(".person-2", { opacity: 0, x: -60, ease: "power2.inOut", duration: 0.4 }, 4.3);
        tl.fromTo(".person-3", { opacity: 0, x: 60 }, { opacity: 1, x: 0, ease: "power2.out", duration: 0.4 }, 4.5);

        // 3. Move horizontally to Slide 5 (PEOPLE BEHIND) over 1 unit (Unit 5 to 6)
        tl.to(slides, {
            xPercent: -100 * 4,
            ease: "none",
            duration: 1
        }, 5);
        tl.to(".panorama-bg", {
            xPercent: -80,
            ease: "none",
            duration: 1
        }, 5);

        tl.to(".person-3", {
            opacity: 0,
            x: -80,
            ease: "power2.inOut",
            duration: 0.6
        }, 5);

        // Slide 5 Enters:
        tl.fromTo(".slide5-title, .slide5-desc",
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, ease: "power2.out", duration: 0.75 },
            5.2
        );

        tl.fromTo(".slide5-stage",
            { x: 90, opacity: 0.3 },
            { x: 0, opacity: 1, ease: "power2.out", duration: 0.75 },
            5.2
        );

        // 4. Hold Slide 5 for 2 extra units so it doesn't suddenly scroll away (Unit 6 to 8)
        tl.to({}, { duration: 2 });

        return () => {
            tl.kill();
        };
    }, { scope: wrapperRef });

    // Click roadmap node to jump smoothly to that slide (mapped across 8 totalUnits)
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

        const lenis = (typeof window !== "undefined" && (window as any).__lenis);
        if (lenis) {
            lenis.scrollTo(targetScroll);
        } else {
            window.scrollTo({
                top: targetScroll,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="relative w-full bg-black text-white font-sans overflow-x-clip">
            {/* HERO HORIZONTAL STORYTELLING SECTION */}
            <section
                ref={wrapperRef}
                className="relative w-full bg-black select-none"
                style={{ height: "calc(800vh / var(--desktop-scale, 1))" }}
            >
                {/* Pinned Sticky Viewport pinned top-0 */}
                <div
                    ref={pinnedViewportRef}
                    className="sticky top-0 w-full overflow-hidden flex flex-col justify-between bg-black"
                    style={{ height: "calc(100vh / var(--desktop-scale, 1))" }}
                >
                    {/* SINGLE CONTINUOUS SEAMLESS PANORAMA BACKGROUND */}
                    <div className="panorama-bg-layer absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
                        <div
                            className="panorama-bg absolute top-0 left-0 h-full w-[500%] will-change-transform"
                        >
                            <Image
                                src="/images/about/about-panorama.webp"
                                alt="Mountain Panorama"
                                fill
                                priority
                                unoptimized
                                className="object-cover object-left"
                            />
                        </div>
                    </div>

                    {/* Slides Track */}
                    <div className="flex w-max h-full relative z-10">
                        {/* ========================================================================= */}
                        {/* SLIDE 1: WHY WE CLIMB (MISSION)                                           */}
                        {/* ========================================================================= */}
                        <div className="slide-panel relative w-[390px] md:w-[1440px] shrink-0 h-full overflow-hidden bg-transparent">
                            {/* Content Container positioned to exact Figma coordinates */}
                            <div className="slide1-content relative z-10 w-full h-full will-change-transform">
                                {/* It is our */}
                                <div
                                    className="hidden md:block absolute font-light uppercase text-center text-white"
                                    style={{
                                        width: "756.01px",
                                        height: "29px",
                                        left: "calc(50% - 756.01px/2 + 5.05px)",
                                        top: "239px",
                                        fontSize: "24px",
                                        lineHeight: "122.12%",
                                        letterSpacing: "0.17em"
                                    }}
                                >
                                    It is our
                                </div>

                                {/* MISSION */}
                                <h1
                                    className="hidden md:block absolute text-center font-thin uppercase select-none pointer-events-none"
                                    style={{
                                        width: "1857.82px",
                                        height: "0px",
                                        left: "calc(50% - 1857.82px/2 - 37.5px)",
                                        top: "345.11px",
                                        fontSize: "154px",
                                        lineHeight: "0%",
                                        letterSpacing: "0.17em",
                                        color: "rgba(255, 255, 255, 0.67)"
                                    }}
                                >
                                    MISSION
                                </h1>

                                {/* TO PAVE THE PATH FOR YOUR BUSINESS. */}
                                <h3
                                    className="hidden md:block absolute text-center font-light uppercase text-white"
                                    style={{
                                        width: "430px",
                                        height: "24px",
                                        left: "calc(50% - 430px/2 - 9px)",
                                        top: "428px",
                                        fontSize: "20px",
                                        lineHeight: "122.12%",
                                        letterSpacing: "0.05em"
                                    }}
                                >
                                    to pave the path for your business.
                                </h3>

                                {/* Description */}
                                <p
                                    className="hidden md:block absolute text-center font-medium text-white"
                                    style={{
                                        width: "325.1px",
                                        height: "72.84px",
                                        left: "calc(50% - 325.1px/2 - 8.75px)",
                                        top: "480.82px",
                                        fontSize: "10.7344px",
                                        lineHeight: "139%",
                                        letterSpacing: "0.05em"
                                    }}
                                >
                                    Smrkonova builds connected strategies, experiences and technologies that continuously attract new customers, strengthen relationships with existing ones, and improve performance at every stage of growth.
                                </p>

                                {/* Mobile Fallback Container */}
                                <div className="md:hidden flex flex-col items-center justify-center text-center h-full px-6 pb-24">
                                    <h2 className="text-[13px] tracking-[0.25em] uppercase mb-2 font-light text-white/90">It is our</h2>
                                    <h1 className="text-[3.5rem] font-thin tracking-widest mb-4 uppercase text-white/70">Mission</h1>
                                    <h3 className="text-[1.1rem] font-light mb-6 uppercase text-white">TO PAVE THE PATH FOR YOUR BUSINESS.</h3>
                                    <p className="max-w-xs text-[11px] leading-relaxed font-light text-gray-200">
                                        Smrkonova builds connected strategies, experiences and technologies that continuously attract new customers, strengthen relationships with existing ones, and improve performance at every stage of growth.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* ========================================================================= */}
                        {/* SLIDE 2: THE WAY (THE PEAK)                                               */}
                        {/* ========================================================================= */}
                        <div className="slide-panel relative w-[390px] md:w-[1440px] shrink-0 h-full overflow-hidden bg-transparent">
                            {/* Desktop Layout - Exact Figma Specifications */}
                            <div className="hidden md:block">
                                {/* Mountain Peak: Crisp, High-Clarity */}
                                <div
                                    className="slide2-mount absolute z-[10] overflow-hidden will-change-transform"
                                    style={{
                                        left: "243px",
                                        top: "202px",
                                        width: "434px",
                                        height: "366px",
                                    }}
                                >
                                    <Image
                                        src="/images/about/way/mount.png"
                                        alt="The Peak"
                                        fill
                                        className="object-cover scale-[1.12]"
                                        style={{ filter: "contrast(1.12) brightness(1.04)" }}
                                        priority
                                    />
                                </div>

                                {/* Cloud on Image Bottom: left-cloud.png anchored lower so mountain stays clear */}
                                <div
                                    className="slide2-cloud-golden absolute z-[12] pointer-events-none will-change-transform"
                                    style={{
                                        left: "140px",
                                        top: "460px",
                                        width: "600px",
                                        height: "260px",
                                    }}
                                >
                                    <Image
                                        src="/images/about/way/left-cloud.png"
                                        alt="Cloud Overlay"
                                        fill
                                        className="object-contain object-bottom"
                                        priority
                                    />
                                </div>

                                {/* Right side Text Container */}
                                <div
                                    className="absolute z-[10] flex flex-col text-left"
                                    style={{
                                        left: "740px",
                                        top: "140px",
                                        width: "580px",
                                    }}
                                >
                                    <div className="slide2-heading will-change-transform">
                                        <h2
                                            className="uppercase text-white/90"
                                            style={{
                                                fontFamily: "'Inter', sans-serif",
                                                fontWeight: 300,
                                                fontSize: "15.33px",
                                                lineHeight: "122%",
                                                letterSpacing: "1.19em",
                                                marginBottom: "12px",
                                            }}
                                        >
                                            Getting to
                                        </h2>
                                        <h1
                                            className="uppercase text-white"
                                            style={{
                                                fontFamily: "'Inter', sans-serif",
                                                fontWeight: 100,
                                                fontSize: "96px",
                                                lineHeight: "122%",
                                                letterSpacing: "0.05em",
                                                marginBottom: "24px",
                                            }}
                                        >
                                            The Peak
                                        </h1>
                                    </div>

                                    <div className="slide2-desc flex flex-row gap-8 will-change-transform mt-2 items-start">
                                        <p
                                            className="flex-1 text-white/90"
                                            style={{
                                                fontFamily: "'Inter', sans-serif",
                                                fontWeight: 500,
                                                fontSize: "10.73px",
                                                lineHeight: "139%",
                                                letterSpacing: "0.05em",
                                            }}
                                        >
                                            Every decision is made with one goal in mind: building a business that is resilient, efficient, and designed for sustainable growth, innovatively.
                                            <br /><br />
                                            Rather than chasing short-term wins, we focus on creating a foundation that evolves with your business, helping you adapt to change, seize new opportunities, and scale with confidence.
                                        </p>
                                        <p
                                            className="flex-1 text-white uppercase"
                                            style={{
                                                fontFamily: "'Inter', sans-serif",
                                                fontWeight: 300,
                                                fontSize: "16px",
                                                lineHeight: "140%",
                                                letterSpacing: "0.05em",
                                            }}
                                        >
                                            Every line of strategy, design decision, line of code, campaign are built to surprise the consumer.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile Fallback Container */}
                            <div className="md:hidden flex flex-col items-center justify-center text-center h-full px-6 pb-24 relative z-10">
                                <div className="relative w-[280px] h-[220px] mb-6">
                                    <div className="w-full h-full relative overflow-hidden rounded-sm shadow-lg">
                                        <Image
                                            src="/images/about/way/mount.png"
                                            alt="The Peak"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="absolute -left-6 bottom-0 w-[320px] h-[160px] pointer-events-none">
                                        <Image
                                            src="/images/about/way/left-cloud.png"
                                            alt="Cloud Overlay"
                                            fill
                                            className="object-contain object-bottom"
                                        />
                                    </div>
                                </div>
                                <h2 className="text-[12px] tracking-[0.3em] uppercase mb-2 font-light text-white/80">Getting to</h2>
                                <h1 className="text-[2.5rem] font-thin tracking-wider mb-4 uppercase text-white">The Peak</h1>
                                <p className="text-[12px] leading-relaxed font-light text-gray-200 mb-4 max-w-xs">
                                    Every decision is made with one goal in mind: building a business that is resilient, efficient, and designed for sustainable growth.
                                </p>
                                <p className="text-[11px] leading-relaxed font-normal uppercase text-white max-w-xs">
                                    Every line of strategy, design decision, line of code, campaign are built to surprise the consumer.
                                </p>
                            </div>
                        </div>

                        {/* ========================================================================= */}
                        {/* SLIDE 3: THE VIEW                                                         */}
                        {/* ========================================================================= */}
                        <div className="slide-panel relative w-[390px] md:w-[1440px] shrink-0 h-full overflow-hidden bg-transparent">
                            {/* Content Container according to Figma specs */}
                            <div className="relative z-10 w-full h-full">
                                {/* We are a business-forward growth studio creating long-term value */}
                                <h1
                                    className="hidden md:block absolute font-light uppercase text-white slide3-left will-change-transform"
                                    style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontWeight: 300,
                                        width: "448px",
                                        height: "210px",
                                        left: "calc(50% - 448px/2 - 235px)",
                                        top: "156px",
                                        fontSize: "32px",
                                        lineHeight: "140%",
                                        letterSpacing: "0.05em",
                                    }}
                                >
                                    We are a<br />
                                    business-forward<br />
                                    growth studio<br />
                                    creating long-term<br />
                                    value
                                </h1>

                                {/* Smrkonova is a boutique growth agency led by tech solutions. */}
                                <p
                                    className="hidden md:block absolute font-light uppercase text-white slide3-sub will-change-transform"
                                    style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontWeight: 300,
                                        width: "223px",
                                        height: "121px",
                                        left: "calc(50% - 223px/2 - 347.5px)",
                                        top: "405px",
                                        fontSize: "16px",
                                        lineHeight: "140%",
                                        letterSpacing: "0.05em",
                                    }}
                                >
                                    Smrkonova is a boutique growth agency led by tech solutions.
                                </p>

                                {/* WE SPECIALISE IN */}
                                <div
                                    className="hidden md:block absolute uppercase text-white/90 slide3-right-header will-change-transform"
                                    style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontWeight: 300,
                                        width: "440px",
                                        left: "calc(50% - 391px/2 + 212.5px)",
                                        top: "156px",
                                        fontSize: "15.33px",
                                        lineHeight: "122%",
                                        letterSpacing: "1.19em",
                                    }}
                                >
                                    We specialise in
                                </div>

                                {/* holistic brand growth for brands... */}
                                <div
                                    className="hidden md:block absolute text-white slide3-right-text will-change-transform"
                                    style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontWeight: 500,
                                        width: "391px",
                                        left: "calc(50% - 391px/2 + 212.5px)",
                                        top: "196px",
                                        fontSize: "10.73px",
                                        lineHeight: "139%",
                                        letterSpacing: "0.05em",
                                    }}
                                >
                                    <p className="mb-2">
                                        holistic brand growth for brands across healthcare, manufacturing, e-commerce, real estate, education among other industries. We specialise in branding, brand marketing, marketing strategy and operational growth.
                                    </p>
                                    <p className="mb-2">
                                        Our mission at Smrkonova is to help iconic brands grow efficiently, sustainably and ultimately profitably leading to growth from the operational and marketing front.
                                    </p>
                                    <p>
                                        We make it easy for our clients to grow and create meaningful connections.
                                    </p>
                                </div>

                                {/* Pills */}
                                <div
                                    className="hidden md:flex absolute flex-wrap gap-3 slide3-pills will-change-transform"
                                    style={{
                                        width: "430px",
                                        left: "calc(50% - 391px/2 + 212.5px)",
                                        top: "410px",
                                    }}
                                >
                                    <div
                                        className="px-5 py-2 rounded-full border border-white/50 bg-white/10 backdrop-blur-md text-white/90 hover:bg-white/20 transition-colors"
                                        style={{
                                            fontFamily: "'Inter', sans-serif",
                                            fontWeight: 500,
                                            fontSize: "10.73px",
                                            lineHeight: "139%",
                                            letterSpacing: "0.05em",
                                        }}
                                    >
                                        Digital marketing
                                    </div>
                                    <div
                                        className="px-5 py-2 rounded-full border border-white/50 bg-white/10 backdrop-blur-md text-white/90 hover:bg-white/20 transition-colors"
                                        style={{
                                            fontFamily: "'Inter', sans-serif",
                                            fontWeight: 500,
                                            fontSize: "10.73px",
                                            lineHeight: "139%",
                                            letterSpacing: "0.05em",
                                        }}
                                    >
                                        operational development
                                    </div>
                                    <div
                                        className="px-5 py-2 rounded-full border border-white/50 bg-white/10 backdrop-blur-md text-white/90 hover:bg-white/20 transition-colors"
                                        style={{
                                            fontFamily: "'Inter', sans-serif",
                                            fontWeight: 500,
                                            fontSize: "10.73px",
                                            lineHeight: "139%",
                                            letterSpacing: "0.05em",
                                        }}
                                    >
                                        App development
                                    </div>
                                    <div
                                        className="px-5 py-2 rounded-full border border-white/50 bg-white/10 backdrop-blur-md text-white/90 hover:bg-white/20 transition-colors"
                                        style={{
                                            fontFamily: "'Inter', sans-serif",
                                            fontWeight: 500,
                                            fontSize: "10.73px",
                                            lineHeight: "139%",
                                            letterSpacing: "0.05em",
                                        }}
                                    >
                                        Branding
                                    </div>
                                </div>

                                {/* Mobile Fallback Container */}
                                <div className="md:hidden flex flex-col justify-between h-full px-6 pt-16 pb-28 text-left">
                                    <div>
                                        <h1 className="text-[1.75rem] font-light tracking-widest uppercase leading-snug mb-4 text-white">
                                            We are a business-forward growth studio creating long-term value
                                        </h1>
                                        <p className="text-[12px] leading-relaxed tracking-wider font-light text-white/80 uppercase mb-6">
                                            Smrkonova is a boutique growth agency led by tech solutions.
                                        </p>
                                    </div>
                                    <div>
                                        <h2 className="text-[11px] tracking-[0.4em] uppercase mb-3 font-light text-white/70">We specialise in</h2>
                                        <p className="text-[11px] leading-relaxed font-light text-gray-200 mb-6">
                                            holistic brand growth for brands across healthcare, manufacturing, e-commerce, real estate, education among other industries.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 rounded-full border border-white/40 bg-white/10 text-[10px] text-white">Digital marketing</span>
                                            <span className="px-3 py-1 rounded-full border border-white/40 bg-white/10 text-[10px] text-white">operational development</span>
                                            <span className="px-3 py-1 rounded-full border border-white/40 bg-white/10 text-[10px] text-white">App development</span>
                                            <span className="px-3 py-1 rounded-full border border-white/40 bg-white/10 text-[10px] text-white">Branding</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ========================================================================= */}
                        {/* SLIDE 4: THE GUIDE (STICKY SCROLL FOR 3 MEMBERS)                          */}
                        {/* ========================================================================= */}
                        <div className="slide-panel relative w-[390px] md:w-[1440px] shrink-0 h-full overflow-hidden bg-transparent">
                            {/* 3 Members Navigation at Top Right of Slide 4 (Clean Text, No Capsule Pill) */}
                            <div className="hidden md:flex absolute right-16 top-16 z-30 items-center gap-6">
                                {guideMembers.map((member, idx) => {
                                    const isCurrent = activeGuideMemberIdx === idx;
                                    return (
                                        <button
                                            key={member.id}
                                            type="button"
                                            onClick={() => {
                                                setActiveGuideMemberIdx(idx);
                                                const targets = [0.53, 0.68, 0.81];
                                                const wrapper = wrapperRef.current;
                                                if (wrapper) {
                                                    const containerTop = wrapper.getBoundingClientRect().top + window.scrollY;
                                                    const maxScroll = wrapper.offsetHeight - window.innerHeight;
                                                    const targetScroll = containerTop + (maxScroll * targets[idx]);
                                                    const lenis = (typeof window !== "undefined" && (window as any).__lenis);
                                                    if (lenis) {
                                                        lenis.scrollTo(targetScroll);
                                                    } else {
                                                        window.scrollTo({ top: targetScroll, behavior: "smooth" });
                                                    }
                                                }
                                            }}
                                            className={`text-[12px] tracking-[0.2em] uppercase transition-all duration-300 font-light cursor-pointer select-none ${
                                                isCurrent
                                                    ? "text-white font-normal drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] scale-105"
                                                    : "text-white/40 hover:text-white/80"
                                            }`}
                                        >
                                            {`0${idx + 1}`} {member.name.split(" ")[0]}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* 3 Members Layers (One visible at a time via ScrollTrigger scrub) */}
                            <div className="relative z-10 w-full h-full">
                                {guideMembers.map((member, idx) => (
                                    <div
                                        key={member.id}
                                        className={`person-${idx + 1} guide-member-${idx + 1} absolute inset-0 w-full h-full will-change-transform`}
                                        style={{ pointerEvents: activeGuideMemberIdx === idx ? "auto" : "none" }}
                                    >
                                        {/* Left Column: Photo Card + Name + Role */}
                                        <div
                                            className="hidden md:flex absolute flex-col items-center"
                                            style={{
                                                left: "calc(50% - 240px/2 - 280px)",
                                                top: "145px",
                                                width: "250px"
                                            }}
                                        >
                                            <Vector2GlassCard width={175} height={210} className="mb-4">
                                                <Image
                                                    src={member.image}
                                                    alt={member.name}
                                                    fill
                                                    className="object-contain object-bottom scale-95"
                                                    sizes="200px"
                                                    priority={idx === 0}
                                                />
                                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />
                                            </Vector2GlassCard>

                                            <h3
                                                className="uppercase text-white whitespace-nowrap text-center"
                                                style={{
                                                    fontFamily: "'Inter', sans-serif",
                                                    fontWeight: 300,
                                                    fontSize: "16px",
                                                    lineHeight: "140%",
                                                    letterSpacing: "0.05em",
                                                }}
                                            >
                                                {member.name}
                                            </h3>

                                            <p
                                                className="whitespace-nowrap text-center mt-1 text-white/80"
                                                style={{
                                                    fontFamily: "'Inter', sans-serif",
                                                    fontWeight: 500,
                                                    fontSize: "10.73px",
                                                    lineHeight: "139%",
                                                    letterSpacing: "0.05em",
                                                }}
                                            >
                                                {member.role}
                                            </p>
                                        </div>

                                        {/* Center Column: Big Headline */}
                                        <h2
                                            className="hidden md:block absolute uppercase text-white"
                                            style={{
                                                fontFamily: "'Inter', sans-serif",
                                                fontWeight: 300,
                                                width: "260px",
                                                left: "calc(50% - 240px/2 + 35px)",
                                                top: "155px",
                                                fontSize: "32px",
                                                lineHeight: "140%",
                                                letterSpacing: "0.05em",
                                            }}
                                        >
                                            {member.headline.map((line, lIdx) => (
                                                <React.Fragment key={lIdx}>
                                                    {line}
                                                    <br />
                                                </React.Fragment>
                                            ))}
                                        </h2>

                                        {/* Right Column: Story Description */}
                                        <div
                                            className="hidden md:block absolute text-white/85"
                                            style={{
                                                fontFamily: "'Inter', sans-serif",
                                                fontWeight: 500,
                                                width: "320px",
                                                left: "calc(50% - 305px/2 + 345px)",
                                                top: "155px",
                                                fontSize: "12px",
                                                lineHeight: "155%",
                                                letterSpacing: "0.05em",
                                            }}
                                        >
                                            <p className="mb-4">{member.desc1}</p>
                                            {member.desc2 && <p>{member.desc2}</p>}
                                        </div>
                                    </div>
                                ))}

                                {/* Mobile Fallback Container */}
                                <div className="md:hidden flex flex-col items-center justify-center text-center h-full px-6 pt-14 pb-28">
                                    <Vector2GlassCard width={150} height={180} className="mb-4">
                                        <Image
                                            src={guideMembers[activeGuideMemberIdx].image}
                                            alt={guideMembers[activeGuideMemberIdx].name}
                                            fill
                                            className="object-contain object-bottom"
                                        />
                                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />
                                    </Vector2GlassCard>
                                    <h3 className="text-[15px] font-light uppercase text-white mb-0.5">{guideMembers[activeGuideMemberIdx].name}</h3>
                                    <p className="text-[11px] text-white/70 mb-3">{guideMembers[activeGuideMemberIdx].role}</p>
                                    <p className="text-[11px] text-gray-300 max-w-xs leading-relaxed opacity-75">
                                        {guideMembers[activeGuideMemberIdx].desc1}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* ========================================================================= */}
                        {/* SLIDE 5: PEOPLE BEHIND / OUR TEAM                                         */}
                        {/* ========================================================================= */}
                        <div className="slide-panel relative w-[390px] md:w-[1440px] shrink-0 h-full overflow-hidden bg-transparent">
                            {/* Left Side: Headline & Copy unified container */}
                            <div
                                className="hidden md:flex flex-col absolute z-20 pointer-events-none will-change-transform"
                                style={{
                                    left: "calc(50% - 340px/2 - 490px)",
                                    top: "165px",
                                    width: "340px"
                                }}
                            >
                                <h2
                                    className="font-light uppercase leading-[120%] text-white slide5-title mb-5"
                                    style={{
                                        fontSize: "32.4364px",
                                        letterSpacing: "0.05em"
                                    }}
                                >
                                    Our Team
                                </h2>

                                <p
                                    className="font-normal text-white slide5-desc"
                                    style={{
                                        fontSize: "14.1909px",
                                        lineHeight: "155%",
                                        letterSpacing: "0.05em",
                                        opacity: 0.72
                                    }}
                                >
                                    Curiosity drives us. Problem-solving defines us. Every person at Smrkonova brings a unique perspective, united by one belief: exceptional work comes from empowered people working together to solve meaningful challenges. It&apos;s this mindset that enables us to create thoughtful products, enduring systems, and work that makes a lasting impact.
                                </p>
                            </div>

                            {/* Mobile Screen Layout: Exact Match to Figma Screenshot */}
                            <div className="md:hidden relative z-20 flex flex-col justify-between h-full w-full px-6 pt-10 pb-20 select-none">
                                {/* Top Content: Heading and 2 paragraphs */}
                                <div className="w-full text-left">
                                    <h2
                                        className="text-white uppercase font-light mb-3"
                                        style={{
                                            fontFamily: "'Inter', sans-serif",
                                            fontSize: "24px",
                                            lineHeight: "120%",
                                            letterSpacing: "0.05em",
                                        }}
                                    >
                                        OUR TEAM
                                    </h2>
                                    <p
                                        className="text-white/80 font-light mb-3"
                                        style={{
                                            fontFamily: "'Inter', sans-serif",
                                            fontSize: "11px",
                                            lineHeight: "155%",
                                            letterSpacing: "0.02em",
                                        }}
                                    >
                                        Curiosity drives us. Problem-solving defines us. Every person at Smrkonova brings a unique perspective, united by one belief: exceptional work comes from empowered people working together to solve meaningful challenges.
                                    </p>
                                    <p
                                        className="text-white/80 font-light"
                                        style={{
                                            fontFamily: "'Inter', sans-serif",
                                            fontSize: "11px",
                                            lineHeight: "155%",
                                            letterSpacing: "0.02em",
                                        }}
                                    >
                                        It&apos;s this mindset that enables us to create thoughtful products, enduring systems, and work that makes a lasting impact.
                                    </p>
                                </div>

                                {/* Center & Bottom: Member Card + Name + Role + 7 Pagination Dots */}
                                <div
                                    className="flex flex-col items-center justify-center w-full my-auto py-2"
                                    onTouchStart={(e) => {
                                        touchStartX.current = e.touches[0].clientX;
                                    }}
                                    onTouchEnd={(e) => {
                                        if (touchStartX.current === null) return;
                                        const diff = touchStartX.current - e.changedTouches[0].clientX;
                                        if (diff > 40) {
                                            setMobileTeamIdx((prev) => (prev + 1) % teamMembers.length);
                                        } else if (diff < -40) {
                                            setMobileTeamIdx((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
                                        }
                                        touchStartX.current = null;
                                    }}
                                >
                                    <Vector2GlassCard width={190} height={230} className="mb-3.5 shadow-2xl">
                                        <Image
                                            src={teamMembers[mobileTeamIdx].image}
                                            alt={teamMembers[mobileTeamIdx].name}
                                            fill
                                            className="object-contain object-bottom scale-95 transition-all duration-300"
                                            sizes="220px"
                                            priority
                                        />
                                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />
                                    </Vector2GlassCard>

                                    <h3
                                        className="text-white uppercase font-light text-center mb-1 whitespace-nowrap"
                                        style={{
                                            fontFamily: "'Inter', sans-serif",
                                            fontSize: "15px",
                                            letterSpacing: "0.12em",
                                        }}
                                    >
                                        {teamMembers[mobileTeamIdx].name}
                                    </h3>

                                    <p
                                        className="text-white/70 font-light text-center mb-4 whitespace-nowrap"
                                        style={{
                                            fontFamily: "'Inter', sans-serif",
                                            fontSize: "11px",
                                            letterSpacing: "0.04em",
                                        }}
                                    >
                                        {teamMembers[mobileTeamIdx].role}
                                    </p>

                                    {/* 7 Team Pagination Dots */}
                                    <div className="flex items-center gap-2">
                                        {teamMembers.map((_, dotIdx) => (
                                            <button
                                                key={dotIdx}
                                                type="button"
                                                aria-label={`Show ${teamMembers[dotIdx].name}`}
                                                onClick={() => setMobileTeamIdx(dotIdx)}
                                                className={`rounded-full transition-all duration-300 cursor-pointer ${
                                                    mobileTeamIdx === dotIdx
                                                        ? "w-2.5 h-2.5 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] scale-110"
                                                        : "w-2 h-2 bg-black/70 border border-white/50 hover:bg-white/40"
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Interactive Campsite Stage: 7 People Circle Hover Pop (Desktop Only) */}
                            <div
                                className="slide5-stage hidden md:block absolute inset-0 w-full h-full z-20 pointer-events-auto will-change-transform"
                                onMouseLeave={() => setActiveMemberId(1)}
                            >
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
                                                <span className={`absolute inset-0 m-auto w-1.5 h-1.5 rounded-full transition-all duration-300 ${isActive ? "bg-cyan-200 shadow-[0_0_8px_rgba(34,211,238,1)]" : "bg-white/90 shadow-[0_0_6px_rgba(255,255,255,1)] group-hover/node:bg-white"}`} />
                                            </span>
                                        </button>
                                    );
                                })}

                                {/* Active Popped Card */}
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
                                            <Vector2GlassCard width={150} height={180} className="mb-2.5 transition-transform duration-300 hover:scale-105">
                                                <Image
                                                    src={activeMember.image}
                                                    alt={activeMember.name}
                                                    fill
                                                    className="object-contain object-bottom scale-95 transition-transform duration-300"
                                                    sizes="180px"
                                                    priority
                                                />
                                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />
                                            </Vector2GlassCard>

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
                                        <span className={`absolute bottom-full mb-3 text-[clamp(9px,0.6vw+4px,12px)] tracking-widest uppercase transition-colors duration-300 whitespace-nowrap ${activeSlide === index ? 'text-white font-medium drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'text-white/60 group-hover:text-white'}`}>
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
                                        <span className={`absolute top-full mt-3 text-[clamp(9px,0.6vw+4px,12px)] tracking-widest uppercase transition-colors duration-300 whitespace-nowrap ${activeSlide === index ? 'text-white font-medium drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'text-white/60 group-hover:text-white'}`}>
                                            {item.label}
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Roadmap Bar */}
                    <div className="md:hidden absolute bottom-6 inset-x-0 z-40 px-4 flex justify-center pointer-events-auto">
                        <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                            {roadmapItems.map((item) => (
                                <button
                                    key={item.index}
                                    type="button"
                                    onClick={() => scrollToSlide(item.index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSlide === item.index ? "bg-white scale-125 shadow-[0_0_8px_white]" : "bg-white/30"}`}
                                    aria-label={`Slide ${item.index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* NORMAL VERTICAL SCROLL SECTIONS BELOW */}
            <div id="about-content" className="relative w-full z-10 bg-black overflow-hidden">
                {/* Background atmospheric landscape banner with exact Figma specs: width 2252px, height 1436px, top -101px, left -316px */}
                <div
                    className="absolute pointer-events-none overflow-hidden z-0"
                    style={{
                        width: "2252px",
                        height: "1436px",
                        top: "-101px",
                        left: "-316px",
                        border: "1px solid #000000",
                        backdropFilter: "blur(100px)",
                        WebkitBackdropFilter: "blur(100px)",
                        opacity: 1,
                    }}
                >
                    <Image
                        src="/images/about/banner.jpg"
                        alt="Background Banner"
                        fill
                        priority
                        className="object-cover object-top"
                    />
                    {/* Subtle soft gradient fade into the lower ambient glow */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/15 to-black/85" />
                </div>

                {/* 1. Eagle Section */}
                <section
                    className="relative z-10 w-full flex items-center pt-16 sm:pt-24 md:pt-32 pb-16 md:pb-24"
                    style={{ minHeight: "calc(95vh / var(--desktop-scale, 1))" }}
                >
                    {/* Bionic Eagle with exact Figma specs: width 1271px, height 910px, top -49px, left -386px */}
                    <div
                        className="absolute z-0 pointer-events-none"
                        style={{
                            width: "1271px",
                            height: "910px",
                            top: "-49px",
                            left: "-386px",
                            opacity: 1,
                        }}
                    >
                        <Image
                            src="/images/about/eagle.png"
                            alt="Cybernetic Eagle"
                            fill
                            priority
                            className="object-contain object-left-top drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
                        />
                    </div>

                    {/* Headline and CTA on the Right */}
                    <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 flex justify-end">
                        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mt-[380px] sm:mt-[440px] md:mt-0">
                            <h2 className="text-[32px] sm:text-[42px] md:text-[50px] lg:text-[60px] xl:text-[66px] font-light tracking-[0.08em] uppercase leading-[1.12] mb-6 md:mb-8 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
                                Each<br />Challenge<br />Sharpens Our<br />Thinking.
                            </h2>
                            <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-200/90 font-light leading-[1.8] max-w-[420px] mb-8 md:mb-10 drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
                                Every solution expands our understanding, revealing a better path forward. Get to the vantage point for your next climb.
                            </p>
                            <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
                                <button
                                    type="button"
                                    onClick={() => {
                                        trackContactButtonClick("Talk to the team", "about_eagle_section");
                                        openContactModal();
                                    }}
                                    className="px-7 py-3.5 md:px-8 md:py-4 bg-white text-black text-[10px] md:text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-gray-100 transition-all cursor-pointer shadow-md"
                                >
                                    Talk to the team
                                </button>
                                <Link
                                    href="/projects"
                                    className="px-7 py-3.5 md:px-8 md:py-4 bg-transparent border border-white/50 text-white text-[10px] md:text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-white/10 hover:border-white transition-all cursor-pointer"
                                >
                                    See our work
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Summit & The View Section with Clouds, Birds, and Dual Spherical Arcs (Exact Figma Image 1) */}
                <section className="relative z-0 w-full flex flex-col items-center pt-16 md:pt-24 pb-0 overflow-hidden">
                    {/* Background color layer after the cloud with exact Figma specs:
                        width: 1385.6px; height: 1492px; angle: -17.67deg; top: 1254.08px; left: -176.74px; mix-blend-mode: darken */}
                    <div
                        className="absolute pointer-events-none z-0"
                        style={{
                            width: "1385.6px",
                            height: "1492px",
                            transform: "rotate(-17.67deg)",
                            opacity: 1,
                            top: "1254.08px",
                            left: "-176.74px",
                            mixBlendMode: "darken",
                            background: "radial-gradient(ellipse at center, rgba(52, 54, 34, 0.98) 0%, rgba(36, 42, 28, 0.98) 60%, rgba(18, 22, 14, 1) 100%)",
                            borderRadius: "50%",
                            filter: "blur(20px)",
                            WebkitFilter: "blur(20px)",
                        }}
                    />

                    {/* Sunset Peach/Coral Glow radiating from behind the hourglass pinch */}
                    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
                        <div className="absolute top-[38%] md:top-[42%] w-full h-[400px] md:h-[550px] bg-gradient-to-r from-[#d87c52]/80 via-[#f8af8a]/95 to-[#d87c52]/80 blur-[90px] md:blur-[120px] opacity-90" />
                        <div className="absolute top-[42%] md:top-[46%] w-[500px] md:w-[850px] h-[260px] md:h-[380px] bg-[#eb9d73] rounded-full blur-[100px] md:blur-[140px] opacity-85" />
                    </div>

                    {/* Clouds & Birds formation arranged directly above and into the Top Arc */}
                    <div
                        className="relative w-full max-w-[1126px] h-[340px] sm:h-[420px] md:h-[533px] flex items-center justify-center px-4 z-40 -mb-16 md:-mb-24"
                        style={{
                            opacity: 1,
                        }}
                    >
                        {/* Downloaded cloud backdrop image (cloud-back.png) with exact Figma specs:
                            width: 1126; height: 533; angle: 0 deg; opacity: 1; top: 1112px; left: 101.42px; backdrop-filter: blur(99.4000015258789px) */}
                        <div
                            className="absolute inset-0 flex items-center justify-center pointer-events-none z-30"
                            style={{
                                width: "1126px",
                                maxWidth: "100%",
                                height: "533px",
                                maxHeight: "100%",
                                transform: "rotate(0deg)",
                                opacity: 1,
                                backdropFilter: "blur(99.4000015258789px)",
                                WebkitBackdropFilter: "blur(99.4000015258789px)",
                            }}
                        >
                            <div
                                className="relative w-full h-full flex items-center justify-center"
                                style={{
                                    filter: "blur(10.299948692321777px)",
                                    WebkitFilter: "blur(10.299948692321777px)",
                                }}
                            >
                                <Image
                                    src="/images/about/cloud-back.png"
                                    alt="Cloud Backdrop"
                                    fill
                                    className="object-contain object-center opacity-90 scale-100 md:scale-105"
                                />
                            </div>
                        </div>

                        {/* Center cloud soft atmospheric mist */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
                            <div className="relative w-[92%] sm:w-[88%] md:w-[82%] h-full flex items-center justify-center">
                                <Image
                                    src="/images/about/center-cloud.png"
                                    alt="Clouds"
                                    fill
                                    className="object-contain object-center opacity-70 mix-blend-screen scale-95 md:scale-90"
                                />
                            </div>
                        </div>

                        {/* Flock of birds flying through the clouds exactly as arranged in Image 1 */}
                        <div className="relative w-full h-full max-w-4xl z-40 pointer-events-none flex items-center justify-center">
                            <Image
                                src="/images/about/birds.png"
                                alt="Flock of Birds"
                                fill
                                className="object-contain object-center scale-100 md:scale-80 drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]"
                            />
                        </div>
                    </div>

                    {/* Top Arc (Convex dome curving downward with "WHEN YOUR BRAND REACHES THE SUMMIT,") */}
                    <div
                        className="relative z-10 w-full min-h-[380px] sm:min-h-[440px] md:min-h-[520px] lg:min-h-[580px] flex items-end justify-center pb-16 sm:pb-20 md:pb-28 lg:pb-32 px-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                        style={{
                            background: 'radial-gradient(120% 120% at 50% 15%, rgba(48, 52, 36, 0.98) 0%, rgba(35, 41, 28, 0.98) 70%, rgba(20, 26, 18, 1) 100%)',
                            borderBottomLeftRadius: '50% 100%',
                            borderBottomRightRadius: '50% 100%'
                        }}
                    >
                        <h2 className="text-[26px] sm:text-[34px] md:text-[42px] lg:text-[48px] tracking-[0.24em] font-extralight uppercase text-center text-white leading-[1.5] drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                            When your<br />brand reaches<br />the summit,
                        </h2>
                    </div>

                  

                    {/* Bottom Arc (Concave dome curving upward with "THE VIEW SPEAKS FOR ITSELF") */}
                    <div
                        className="relative z-10 mt-10 w-full min-h-[580px] sm:min-h-[660px] md:min-h-[760px] lg:min-h-[850px] flex flex-col items-center justify-start pt-24 sm:pt-32 md:pt-40 lg:pt-48 pb-24 md:pb-36 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
                        style={{
                            background: 'radial-gradient(120% 120% at 50% 0%, rgba(48, 52, 36, 0.98) 0%, rgba(35, 41, 28, 0.98) 60%, rgba(18, 22, 16, 1) 100%)',
                            borderTopLeftRadius: '50% 100%',
                            borderTopRightRadius: '50% 100%'
                        }}
                    >
                        <h1 className="text-[52px] sm:text-[72px] md:text-[96px] lg:text-[116px] xl:text-[124px] font-thin tracking-[0.18em] uppercase text-center text-white mb-3 md:mb-4 leading-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]">
                            The View
                        </h1>
                        <h3 className="text-[14px] sm:text-[18px] md:text-[22px] lg:text-[24px] tracking-[0.3em] font-light uppercase text-center text-white/90 mb-8 md:mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                            Speaks for itself
                        </h3>

                        <p className="text-[11px] sm:text-[12px] md:text-[13.5px] text-center text-gray-300 font-light max-w-[340px] md:max-w-md mx-auto leading-[1.9] mb-10 md:mb-12 px-6 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
                            Share your vision, your challenge, or your next ambition. Smrkonova helps explore what&apos;s possible and engineer the smartest path to the top.
                        </p>

                        <button
                            type="button"
                            onClick={() => {
                                trackContactButtonClick("Get in touch", "about_page_footer");
                                openContactModal();
                            }}
                            className="inline-block px-8 py-3.5 md:px-11 md:py-4 bg-transparent border border-white/40 hover:border-white text-white text-[10px] md:text-[11.5px] tracking-[0.25em] uppercase font-light hover:bg-white/10 transition-all cursor-pointer shadow-sm"
                        >
                            Get in touch
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}
