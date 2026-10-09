"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
    {
        id: 1,
        type: 'text',
        title: "Designed\naround\nyour\nbrand",
        subtitle: "No generic layouts. Every page is designed specifically for your business.",
        bg: "bg-[#7A8768]",
        image: "/images/services/website/web development/Golden Hour Sketches on a Rustic Table 1.png"
    },
    {
        id: 2,
        type: 'text',
        title: "Built\nFor\nSpeed",
        subtitle: "Fast-loading websites that work smoothly across desktop, tablet and mobile devices.",
        bg: "bg-gray-300",
        image: "/images/services/website/web development/Golden Light Through Sheer Curtains 1.png"
    },
    {
        id: 3,
        type: 'text',
        title: "Easy\nTo\nManage",
        subtitle: "Update content, images and blogs without depending on developers.",
        bg: "bg-[#BFD4FF]",
        image: "/images/services/website/web development/Resilient Sprout in Golden Light 1.png"
    },
    {
        id: 4,
        type: 'text',
        title: "Search\nEngine\nFriendly",
        subtitle: "Every website follows SEO best practices from the beginning.",
        bg: "bg-[#E6D6B8]",
        image: "/images/services/website/web development/Solitary Tower at Golden Hour 1.png"
    },
    {
        id: 5,
        type: 'text',
        title: "Secure &\nReliable",
        subtitle: "Built with modern security standards and regularly maintained.",
        bg: "bg-[#DFE8B4]",
        image: "/images/services/website/web development/Sunlit Chair in a Quiet Hall 1.png"
    },
    {
        id: 6,
        type: 'text',
        title: "Ready\nTo\nGrow",
        subtitle: "Whether you add new services, products or locations later, your website is built to scale.",
        bg: "bg-[#EED3D9]",
        image: "/images/services/website/web development/Warm Handwoven Linen Texture 1.png"
    },
];

const renderCardTitle = (title: string, isMobile = false) => {
    const newlineIndex = title.indexOf('\n');
    let firstPart = title;
    let secondPart = '';
    if (newlineIndex !== -1) {
        firstPart = title.slice(0, newlineIndex);
        secondPart = title.slice(newlineIndex + 1);
    } else {
        const spaceIndex = title.indexOf(' ');
        if (spaceIndex !== -1) {
            firstPart = title.slice(0, spaceIndex);
            secondPart = title.slice(spaceIndex + 1);
        }
    }

    if (isMobile) {
        return (
            <h3
                className="text-[32.31px] leading-[34.84px] tracking-[1.01px] text-white break-words drop-shadow-md whitespace-pre-line"
                style={{ fontFamily: "'Inter', sans-serif" }}
            >
                <span className="font-[500] block">{firstPart}</span>
                {secondPart && <span className="font-[100] block">{secondPart}</span>}
            </h3>
        );
    }

    return (
        <h3
            className="text-[64px] leading-[69px] tracking-[2px] text-white break-words drop-shadow-md whitespace-pre-line"
            style={{ fontFamily: "'Inter', sans-serif" }}
        >
            <span className="font-[500] block">{firstPart}</span>
            {secondPart && <span className="font-[100] block">{secondPart}</span>}
        </h3>
    );
};

export default function WhatMakesUsDifferentSlider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [mobileIndex, setMobileIndex] = useState(0);
    const mobileTrackRef = React.useRef<HTMLDivElement>(null);

    // Desktop auto-rotation
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    // Mobile auto-slide
    useEffect(() => {
        if (typeof window === "undefined") return;
        const interval = setInterval(() => {
            if (window.innerWidth < 768 && mobileTrackRef.current) {
                setMobileIndex((prev) => {
                    const next = (prev + 1) % slides.length;
                    const cardWidth = mobileTrackRef.current?.firstElementChild?.clientWidth || 280;
                    mobileTrackRef.current?.scrollTo({
                        left: next * (cardWidth + 16),
                        behavior: "smooth"
                    });
                    return next;
                });
            }
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const handleMobileScroll = () => {
        if (mobileTrackRef.current) {
            const cardWidth = mobileTrackRef.current.firstElementChild?.clientWidth || 280;
            const newIndex = Math.round(mobileTrackRef.current.scrollLeft / (cardWidth + 16));
            if (newIndex >= 0 && newIndex < slides.length && newIndex !== mobileIndex) {
                setMobileIndex(newIndex);
            }
        }
    };

    const scrollMobileTo = (index: number) => {
        if (mobileTrackRef.current) {
            const cardWidth = mobileTrackRef.current.firstElementChild?.clientWidth || 280;
            mobileTrackRef.current.scrollTo({
                left: index * (cardWidth + 16),
                behavior: "smooth"
            });
            setMobileIndex(index);
        }
    };

    return (
        <section className="w-full max-w-full bg-white text-black py-8 md:py-20 min-h-[527px] md:min-h-0 overflow-hidden relative">
            <div className="w-full max-w-[390px] md:max-w-8xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col gap-6 md:gap-8 overflow-hidden">

                {/* Section Header */}
                <div>
                    <h2
                        className="uppercase font-[300] text-gray-800 text-[16px] md:text-[32px] leading-[77px] tracking-[0px]"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        WHAT MAKES OUR WEBSITES DIFFERENT.
                    </h2>
                </div>

                {/* Desktop Slider Container (Stacked 3D Animation) */}
                <div className="hidden md:flex relative w-full max-w-full h-[600px] items-center mt-12 overflow-hidden">
                    {slides.map((slide, index) => {
                        const distance = index - activeIndex;

                        let translateX = "0%";
                        let scale = 1;
                        let opacity = 1;
                        let zIndex = 50 - index;

                        if (distance === 0) {
                            translateX = "0%";
                            scale = 1;
                            opacity = 1;
                        } else if (distance > 0) {
                            const translationSteps = [0, 45, 80, 105, 120, 130];
                            translateX = `${translationSteps[Math.min(distance, 5)]}%`;
                            scale = 1 - (distance * 0.1);
                            opacity = 1;
                        } else {
                            translateX = "-100%";
                            scale = 0.8;
                            opacity = 0;
                            zIndex = 0;
                        }

                        let wrappedDistance = distance;
                        if (wrappedDistance < 0) wrappedDistance += slides.length;

                        if (wrappedDistance === 0) {
                            translateX = "0%";
                            scale = 1;
                            opacity = 1;
                            zIndex = 50;
                        } else if (wrappedDistance > 0 && wrappedDistance < 6) {
                            const translationSteps = [0, 110, 150, 185, 215, 240];
                            const scaleSteps = [1, 0.95, 0.86, 0.76, 0.65, 0.53];

                            translateX = `${translationSteps[Math.min(wrappedDistance, 5)]}%`;
                            scale = scaleSteps[Math.min(wrappedDistance, 5)];
                            opacity = 1;
                            zIndex = 50 - wrappedDistance;
                        }

                        return (
                            <div
                                key={slide.id}
                                className={`absolute left-0 top-0 w-[450px] h-[550px] rounded-[40px] overflow-hidden transition-all duration-[1500ms] ease-in-out shadow-2xl ${slide.bg}`}
                                style={{
                                    transform: `translateX(${translateX}) scale(${scale})`,
                                    transformOrigin: 'center left',
                                    zIndex: zIndex,
                                    opacity: opacity,
                                }}
                            >
                                {slide.image && (
                                    <img
                                        src={slide.image}
                                        alt=""
                                        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                                    />
                                )}

                                {slide.type === 'text' && (
                                    <div className={`relative z-10 w-full h-full p-12 flex flex-col justify-between ${slide.image ? 'bg-gradient-to-t from-black/85 via-black/25 to-black/45' : 'bg-gradient-to-br from-white/10 to-black/10'}`}>
                                        {renderCardTitle(slide.title, false)}
                                        <p
                                            className="text-white/85 text-[14px] leading-[27px] tracking-[0px] font-[400] max-w-[280px] drop-shadow-md"
                                            style={{ fontFamily: "'Inter', sans-serif" }}
                                        >
                                            {slide.subtitle}
                                        </p>
                                    </div>
                                )}

                                {slide.type === 'image' && (
                                    <img
                                        src={(slide as any).src}
                                        alt="Slide image"
                                        className="w-full h-full object-cover"
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Mobile Slide Carousel (< md) */}
                <div className="flex md:hidden flex-col gap-4 mt-2">
                    <div
                        ref={mobileTrackRef}
                        onScroll={handleMobileScroll}
                        className="flex overflow-x-auto snap-x snap-mandatory gap-4 py-2 px-1 no-scrollbar scroll-smooth -mx-4 px-4"
                    >
                        {slides.map((slide) => (
                            <div
                                key={slide.id}
                                className={`shrink-0 w-[240px] h-[340px] sm:w-[260px] sm:h-[360px] snap-center rounded-[24px] overflow-hidden relative shadow-xl ${slide.bg}`}
                            >
                                {slide.image && (
                                    <img
                                        src={slide.image}
                                        alt=""
                                        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                                    />
                                )}

                                {slide.type === 'image' && (slide as any).src && (
                                    <img
                                        src={(slide as any).src}
                                        alt=""
                                        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                                    />
                                )}

                                {slide.type === 'text' && (
                                    <div className={`relative z-10 w-full h-full p-6 flex flex-col justify-between ${slide.image ? 'bg-gradient-to-t from-black/85 via-black/25 to-black/45' : 'bg-gradient-to-br from-white/10 to-black/10'}`}>
                                        {renderCardTitle(slide.title, true)}
                                        <p
                                            className="text-white/85 text-[7.07px] leading-[13.63px] tracking-[0px] font-[400] max-w-[180px] drop-shadow-md"
                                            style={{ fontFamily: "'Inter', sans-serif" }}
                                        >
                                            {slide.subtitle}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile Slide Indicator Dots */}
                    <div className="flex items-center justify-center gap-1.5 pt-2">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => scrollMobileTo(i)}
                                className={`transition-all duration-300 rounded-full cursor-pointer ${i === mobileIndex ? 'w-5 h-1.5 bg-black' : 'w-1.5 h-1.5 bg-gray-300'
                                    }`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

