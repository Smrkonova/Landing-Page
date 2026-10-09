"use client";

import React, { useRef, useState, useEffect } from "react";
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
        image: "/team/3rdperson.png"
    }
];

// Roadmap nodes anchored reliably at the bottom of the viewport
const roadmapNodes = [
    { label: "WHY WE CLIMB", index: 0, xPct: 17, yPct: 68, pos: "top" },
    { label: "THE WAY", index: 1, xPct: 39, yPct: 74, pos: "bottom" },
    { label: "THE VIEW", index: 2, xPct: 61, yPct: 50, pos: "top" },
    { label: "THE GUIDE", index: 3, xPct: 76, yPct: 50, pos: "bottom" },
    { label: "PEOPLE BEHIND", index: 4, xPct: 94, yPct: 21, pos: "top" }
];

// Vector 2: Exact Figma glass frame with 9.12px corner radius and diagonal chamfer cut
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

    const [activeSlide, setActiveSlide] = useState(0);
    const [activeGuideMemberIdx, setActiveGuideMemberIdx] = useState(0);
    const [activeMemberId, setActiveMemberId] = useState<number>(1);
    const activeMember = teamMembers.find((m) => m.id === activeMemberId) || teamMembers[0];

    useGSAP(() => {
        if (!wrapperRef.current) return;

        const slides = gsap.utils.toArray<HTMLElement>(".slide-panel");
        const amount = slides.length - 1;
        if (amount <= 0) return;

        const prefersReducedMotion =
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        // Total timeline units = 6.4
        // Unit 0 -> 1.0: Slide 1 (Mission) -> Slide 2 (The Peak)
        // Unit 1.0 -> 2.0: Slide 2 (The Peak) -> Slide 3 (The View)
        // Unit 2.0 -> 3.0: Slide 3 (The View) -> Slide 4 (The Guide: Member 1 Mohit enters)
        // Unit 3.0 -> 3.5: Slide 4: Member 1 (Mohit) remains stationary & visible
        // Unit 3.5 -> 3.9: Slide 4: Member 1 -> Member 2 (Shruti)
        // Unit 3.9 -> 4.5: Slide 4: Member 2 (Shruti) remains stationary & visible
        // Unit 4.5 -> 4.9: Slide 4: Member 2 -> Member 3 (U. Ravindran)
        // Unit 4.9 -> 5.4: Slide 4: Member 3 (U. Ravindran) remains stationary & visible
        // Unit 5.4 -> 6.4: Slide 4 -> Slide 5 (People Behind)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: wrapperRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 1.1,
                onUpdate: (self) => {
                    const p = self.progress;
                    if (p < 0.20) {
                        setActiveSlide(0);
                    } else if (p < 0.36) {
                        setActiveSlide(1);
                    } else if (p < 0.50) {
                        setActiveSlide(2);
                    } else if (p < 0.86) {
                        setActiveSlide(3);
                        if (p < 0.62) {
                            setActiveGuideMemberIdx(0);
                        } else if (p < 0.76) {
                            setActiveGuideMemberIdx(1);
                        } else {
                            setActiveGuideMemberIdx(2);
                        }
                    } else {
                        setActiveSlide(4);
                    }
                }
            }
        });

        if (prefersReducedMotion) {
            tl.to(slides, { xPercent: -100, ease: "none", duration: 1 }, 0)
                .to(slides, { xPercent: -200, ease: "none", duration: 1 }, 1)
                .to(slides, { xPercent: -300, ease: "none", duration: 1 }, 2)
                .to(slides, { xPercent: -400, ease: "none", duration: 1 }, 4.2);
            return () => {
                tl.kill();
            };
        }

        gsap.set(".person-2, .person-3", { opacity: 0, x: 60 });
        gsap.set(".person-1", { opacity: 1, x: 0 });

        // =========================================================================
        // TRANSITION 1: SLIDE 1 (MISSION) -> SLIDE 2 (THE PEAK) [0 -> 1]
        // =========================================================================
        tl.to(slides, {
            xPercent: -100,
            ease: "power2.inOut",
            duration: 1
        }, 0);

        // Slide 1 Exits:
        tl.to(".slide1-bg", {
            xPercent: 16,
            scale: 1.05,
            filter: "blur(12px)",
            opacity: 0.3,
            ease: "power2.inOut",
            duration: 1
        }, 0);

        tl.to(".slide1-content", {
            x: -120,
            opacity: 0,
            filter: "blur(6px)",
            ease: "power2.inOut",
            duration: 0.9
        }, 0);

        // Slide 2 Enters:
        tl.fromTo(".slide2-bg",
            { xPercent: -16, opacity: 0.5 },
            { xPercent: 0, opacity: 1, ease: "power2.inOut", duration: 1 },
            0
        );

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

        // =========================================================================
        // TRANSITION 2: SLIDE 2 (THE PEAK) -> SLIDE 3 (THE VIEW) [1 -> 2]
        // =========================================================================
        tl.to(slides, {
            xPercent: -200,
            ease: "power2.inOut",
            duration: 1
        }, 1);

        tl.to(".slide2-mount", {
            x: -120,
            scale: 0.92,
            opacity: 0.25,
            ease: "power2.inOut",
            duration: 1
        }, 1);

        // Slide 2 exiting continues:
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
        tl.fromTo(".slide3-bg",
            { xPercent: -16, opacity: 0.5 },
            { xPercent: 0, opacity: 1, ease: "power2.inOut", duration: 1 },
            1
        );

        tl.fromTo(".slide3-cloud-left",
            { x: -120, opacity: 0.2 },
            { x: 0, opacity: 0.9, ease: "power2.out", duration: 0.95 },
            1.08
        );

        tl.fromTo(".slide3-cloud-right",
            { x: 120, opacity: 0.2 },
            { x: 0, opacity: 0.9, ease: "power2.out", duration: 0.95 },
            1.08
        );

        tl.fromTo(".slide3-heading, .slide3-desc",
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, ease: "power2.out", duration: 0.9 },
            1.1
        );

        // =========================================================================
        // TRANSITION 3: SLIDE 3 (THE VIEW) -> SLIDE 4 (THE GUIDE) [2 -> 3]
        // =========================================================================
        tl.to(slides, {
            xPercent: -300,
            ease: "power2.inOut",
            duration: 1
        }, 2);

        tl.to(".slide3-cloud-left, .slide3-cloud-right", {
            opacity: 0,
            scale: 1.1,
            ease: "power2.inOut",
            duration: 0.9
        }, 2);

        tl.to(".slide3-heading, .slide3-desc", {
            y: -60,
            opacity: 0,
            ease: "power2.inOut",
            duration: 0.9
        }, 2);

        // Slide 4 Enters:
        tl.fromTo(".slide4-bg",
            { xPercent: -16, opacity: 0.5 },
            { xPercent: 0, opacity: 1, ease: "power2.inOut", duration: 1 },
            2
        );

        tl.fromTo(".person-1",
            { x: 80, opacity: 0 },
            { x: 0, opacity: 1, ease: "power2.out", duration: 0.8 },
            2.2
        );

        // Within Slide 4: person-1 stays visible (3.0 -> 3.5), then transitions to person-2
        tl.to(".person-1", { opacity: 0, x: -60, ease: "power2.inOut", duration: 0.4 }, 3.5);
        tl.fromTo(".person-2", { opacity: 0, x: 60 }, { opacity: 1, x: 0, ease: "power2.out", duration: 0.4 }, 3.7);

        // Within Slide 4: person-2 stays visible (3.9 -> 4.5), then transitions to person-3
        tl.to(".person-2", { opacity: 0, x: -60, ease: "power2.inOut", duration: 0.4 }, 4.5);
        tl.fromTo(".person-3", { opacity: 0, x: 60 }, { opacity: 1, x: 0, ease: "power2.out", duration: 0.4 }, 4.7);

        // =========================================================================
        // TRANSITION 4: SLIDE 4 (THE GUIDE) -> SLIDE 5 (PEOPLE BEHIND) [3 -> 4]
        // =========================================================================
        tl.to(slides, {
            xPercent: -400,
            ease: "power2.inOut",
            duration: 1
        }, 5.4);

        tl.to(".person-3", {
            opacity: 0,
            x: -80,
            ease: "power2.inOut",
            duration: 0.6
        }, 5.4);

        // Slide 5 Enters:
        tl.fromTo(".slide5-bg",
            { xPercent: -16, opacity: 0.5 },
            { xPercent: 0, opacity: 1, ease: "power2.inOut", duration: 0.8 },
            5.4
        );

        tl.fromTo(".slide5-title, .slide5-desc",
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, ease: "power2.out", duration: 0.75 },
            5.5
        );

        tl.fromTo(".slide5-stage",
            { x: 90, opacity: 0.3 },
            { x: 0, opacity: 1, ease: "power2.out", duration: 0.75 },
            5.5
        );

        return () => {
            tl.kill();
        };
    }, { scope: wrapperRef });

    // Click roadmap node to jump smoothly to that slide
    const scrollToSlide = (index: number) => {
        const wrapper = wrapperRef.current;
        if (!wrapper) return;

        // Progress targets for each slide beat:
        const targetMap = [0.0, 0.22, 0.40, 0.53, 0.96];
        const containerTop = wrapper.getBoundingClientRect().top + window.scrollY;
        const maxScroll = wrapper.offsetHeight - window.innerHeight;
        const targetScroll = containerTop + (maxScroll * targetMap[index]);

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
                style={{ height: "calc(650vh / var(--desktop-scale, 1))" }}
            >
                {/* Pinned Sticky Viewport pinned top-0 */}
                <div
                    ref={pinnedViewportRef}
                    className="sticky top-0 w-full overflow-hidden flex flex-col justify-between bg-black"
                    style={{ height: "calc(100vh / var(--desktop-scale, 1))" }}
                >
                    {/* Slides Track */}
                    <div className="flex w-max h-full">
                        {/* ========================================================================= */}
                        {/* SLIDE 1: WHY WE CLIMB (MISSION)                                           */}
                        {/* ========================================================================= */}
                        <div className="slide-panel relative w-[390px] md:w-[1440px] shrink-0 h-full overflow-hidden">
                            {/* Slide 1 Background */}
                            <div className="slide1-bg absolute inset-0 -left-[10%] w-[120%] h-full z-0 will-change-transform pointer-events-none">
                                <Image
                                    src="/images/about/mission1st.png"
                                    alt="Mission Background"
                                    fill
                                    className="object-cover object-center"
                                    priority
                                />
                            </div>

                            {/* Topographic Lines Overlay */}
                            <div className="absolute inset-0 w-full h-full z-[2] pointer-events-none opacity-20">
                                <Image
                                    src="/images/about/way/abstract.png"
                                    alt="Topographic lines"
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>

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
                        <div className="slide-panel relative w-[390px] md:w-[1440px] shrink-0 h-full overflow-hidden">
                            {/* Background Image */}
                            <div className="slide2-bg absolute inset-0 -left-[10%] w-[120%] h-full z-0 will-change-transform">
                                <Image
                                    src="/images/about/thepeak2nd.png"
                                    alt="The Way Background"
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>

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
                        <div className="slide-panel relative w-[390px] md:w-[1440px] shrink-0 h-full overflow-hidden">
                            {/* Background Image */}
                            <div className="slide3-bg absolute inset-0 -left-[10%] w-[120%] h-full z-0 will-change-transform">
                                <Image
                                    src="/images/about/aboutus3rd.png"
                                    alt="The View Background"
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>

                            {/* Left Cloud */}
                            <div className="slide3-cloud-left absolute left-0 bottom-0 w-full md:w-1/2 h-[60%] z-[5] pointer-events-none opacity-80 will-change-transform">
                                <Image
                                    src="/images/about/view/left-cloud.png"
                                    alt="Left Cloud Overlay"
                                    fill
                                    className="object-contain object-bottom left-0"
                                />
                            </div>

                            {/* Right Cloud - Scaled big near right bottom edge corner */}
                            <div className="slide3-cloud-right absolute -right-4 md:-right-8 lg:-right-12 bottom-0 w-[550px] md:w-[750px] lg:w-[960px] xl:w-[1100px] h-[360px] md:h-[500px] lg:h-[620px] z-[8] pointer-events-none opacity-95 will-change-transform">
                                <Image
                                    src="/images/about/view/right-cloud.png"
                                    alt="Right Cloud Overlay"
                                    fill
                                    className="object-contain"
                                    style={{ objectPosition: "right bottom" }}
                                    priority
                                />
                            </div>

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
                        <div className="slide-panel relative w-[390px] md:w-[1440px] shrink-0 h-full overflow-hidden">
                            {/* Background Image */}
                            <div className="slide4-bg absolute inset-0 -left-[10%] w-[120%] h-full z-0 will-change-transform">
                                <Image
                                    src="/images/about/aboutus4th.png"
                                    alt="The Guide Background"
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>

                            {/* Topographic Lines Overlay */}
                            <div className="slide4-topo absolute inset-0 w-full h-full z-[2] pointer-events-none opacity-25 will-change-transform">
                                <Image
                                    src="/images/about/way/abstract.png"
                                    alt="Topographic lines"
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>



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
                        <div className="slide-panel relative w-[390px] md:w-[1440px] shrink-0 h-full overflow-hidden">
                            {/* Background Campsite Image */}
                            <div className="slide5-bg absolute inset-0 -left-[10%] w-[120%] h-full z-0 will-change-transform">
                                <Image
                                    src="/images/about/aboutus5th.png"
                                    alt="People Behind Background"
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>

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

                            {/* Mobile fallback title */}
                            <div className="md:hidden absolute left-6 top-14 z-20 max-w-xs text-left pointer-events-none">
                                <h2 className="text-[1.75rem] uppercase mb-2 font-light text-white">Our Team</h2>
                                <p className="text-[11px] leading-relaxed font-light text-gray-300 opacity-75">
                                    Curiosity drives us. Problem-solving defines us. Every person at Smrkonova brings a unique perspective.
                                </p>
                            </div>

                            {/* Interactive Campsite Stage: 7 People Circle Hover Pop */}
                            <div
                                className="slide5-stage absolute inset-0 w-full h-full z-20 pointer-events-auto will-change-transform"
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

                    {/* ROADMAP NAVIGATION SLIDER ANCHORED AT BOTTOM (NEVER CUT OFF REGARDLESS OF SCREEN HEIGHT) */}
                    <div className="hidden md:block absolute bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 z-40 w-[640px] max-w-[90%] h-[95px] pointer-events-auto">
                        {/* Connecting Polyline SVG */}
                        <svg
                            viewBox="0 0 640 95"
                            className="absolute inset-0 w-full h-full pointer-events-none"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M 20 85 L 110 65 L 250 70 L 390 48 L 490 48 L 600 20"
                                fill="none"
                                stroke="rgba(255, 255, 255, 0.35)"
                                strokeWidth="1.5"
                            />
                            <path
                                d="M 20 85 L 110 65 L 250 70 L 390 48 L 490 48 L 600 20"
                                fill="none"
                                stroke="#ffffff"
                                strokeWidth="2.5"
                                strokeDasharray="640"
                                strokeDashoffset={640 - (activeSlide / 4) * 640}
                                className="transition-all duration-500 ease-out"
                            />
                        </svg>

                        {/* Interactive Nodes and Labels */}
                        {roadmapNodes.map((item) => {
                            const isCurrent = activeSlide === item.index;
                            const isPassed = activeSlide >= item.index;
                            return (
                                <div
                                    key={item.index}
                                    className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer group"
                                    style={{ left: `${item.xPct}%`, top: `${item.yPct}%` }}
                                    onClick={() => scrollToSlide(item.index)}
                                >
                                    {/* Top Label */}
                                    {item.pos === "top" && (
                                        <span className={`absolute bottom-full mb-2.5 text-[11px] tracking-widest uppercase transition-all duration-300 whitespace-nowrap ${isCurrent
                                            ? "text-white font-medium drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                                            : "text-white/60 group-hover:text-white"
                                            }`}>
                                            {item.label}
                                        </span>
                                    )}

                                    {/* Pulse ring on active node */}
                                    {isCurrent && (
                                        <span className="absolute inset-0 m-auto w-6 h-6 rounded-full bg-white/20 animate-ping" />
                                    )}

                                    {/* Node Orb */}
                                    <div className={`relative w-4 h-4 rounded-full border transition-all duration-300 flex items-center justify-center backdrop-blur-md ${isCurrent
                                        ? "border-white bg-white/35 shadow-[0_0_14px_rgba(255,255,255,0.9)] scale-110"
                                        : isPassed
                                            ? "border-white/70 bg-white/15"
                                            : "border-white/30 bg-white/5 group-hover:border-white/60"
                                        }`}>
                                        <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${isCurrent ? "bg-white shadow-[0_0_6px_white]" : "bg-white/70"
                                            }`} />
                                    </div>

                                    {/* Bottom Label */}
                                    {item.pos === "bottom" && (
                                        <span className={`absolute top-full mt-2.5 text-[10px] tracking-widest uppercase transition-all duration-300 whitespace-nowrap ${isCurrent
                                            ? "text-white font-medium drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                                            : "text-white/60 group-hover:text-white"
                                            }`}>
                                            {item.label}
                                        </span>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Mobile Roadmap Bar */}
                    <div className="md:hidden absolute bottom-6 inset-x-0 z-40 px-4 flex justify-center pointer-events-auto">
                        <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                            {roadmapNodes.map((item) => (
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
            <div id="about-content" className="relative w-full z-10 bg-black">
                {/* Background banner */}
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
                    <div className="absolute top-0 left-0 w-full md:w-[60%] h-[500px] md:h-[850px] z-0 pointer-events-none -mt-16 md:-mt-24">
                        <Image
                            src="/images/about/eagle.png"
                            alt="Eagle"
                            fill
                            className="object-contain object-left-top md:object-left"
                        />
                    </div>

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
                            Share your vision, your challenge, or your next ambition. Smrkonova helps explore what&apos;s possible and engineers the smartest path to the top.
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
