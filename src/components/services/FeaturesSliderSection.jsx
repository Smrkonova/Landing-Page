"use client";

import React from 'react';

const features = [
    {
        title: "Appointment booking",
        buttonText: "BOOK NOW",
        gradient: "bg-gradient-to-b from-[#e0f2fe] to-white", // Light Blue
        lines: [4, 4, 3, 2] // Mockup lines width representation
    },
    {
        title: "Customer login",
        buttonText: "LOGIN",
        gradient: "bg-gradient-to-b from-[#f3e8ff] to-white", // Light Purple
        lines: [3, 3]
    },
    {
        title: "Admin dashboard",
        buttonText: "ADMIN LOGIN",
        gradient: "bg-gradient-to-b from-[#0ea5e9] to-[#bae6fd]", // Deep Blue to Light Blue
        lines: [3, 3]
    },
    {
        title: "Blogs",
        buttonText: "READ NOW",
        gradient: "bg-gradient-to-b from-[#dcfce7] to-white", // Light Green
        lines: [4, 2, 4, 4, 3]
    },
    {
        title: "Product catalog",
        buttonText: "VIEW ALL",
        gradient: "bg-gradient-to-b from-[#e0f2fe] to-white", // Light Blue
        lines: [4, 4, 4]
    },
    {
        title: "Payment gateway",
        buttonText: "PAY NOW",
        gradient: "bg-gradient-to-b from-[#f3e8ff] to-white", // Light Purple
        lines: [3, 2, 3]
    }
];

export default function FeaturesSliderSection() {
    return (
        <section className="w-full bg-white py-20 overflow-hidden">
            
            {/* Title Container - Constrained Width */}
            <div className="max-w-[1400px] mx-auto px-4 md:px-12">
                <h2 className="text-[20px] md:text-[24px] font-light tracking-wide text-[#1a1a1a] uppercase mb-12 ml-4 md:ml-0">
                    FEATURES WE CAN BUILD
                </h2>
            </div>

            {/* Slider Container - Full Viewport Width */}
            <div className="w-full overflow-x-auto pb-12 hide-scrollbar cursor-grab active:cursor-grabbing px-4 md:px-12 xl:pl-[max(3rem,calc((100vw-1400px)/2+3rem))]">
                <div className="flex gap-6 w-max">
                    {features.map((feature, idx) => (
                        <div 
                            key={idx} 
                            className={`relative w-[280px] md:w-[320px] h-[450px] md:h-[500px] shrink-0 rounded-[30px] p-8 flex flex-col items-center justify-between transition-transform duration-300 hover:-translate-y-2 shadow-sm hover:shadow-xl ${feature.gradient}`}
                            style={{ cursor: "url('/images/services/website/cursor.svg'), pointer" }}
                        >
                                {/* UI Mockup Graphic */}
                                <div className="w-full mt-8 flex flex-col items-center gap-4">
                                    {/* Mockup Lines */}
                                    <div className="w-full flex flex-col gap-3">
                                        {feature.lines.map((lineWidth, i) => (
                                            <div 
                                                key={i} 
                                                className={`h-3 rounded-full ${feature.gradient.includes('0ea5e9') ? 'bg-white/40' : 'bg-gray-200/60'} ${
                                                    lineWidth === 4 ? 'w-full' : 
                                                    lineWidth === 3 ? 'w-3/4' : 'w-1/2'
                                                }`}
                                            ></div>
                                        ))}
                                    </div>

                                    {/* Mockup Button */}
                                    <div className="mt-4 bg-white shadow-sm w-full py-3 rounded-sm flex items-center justify-center">
                                        <span className="text-[10px] font-bold text-black tracking-widest uppercase">
                                            {feature.buttonText}
                                        </span>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-[22px] md:text-[26px] font-medium text-center text-black leading-tight max-w-[200px]">
                                    {feature.title.split(' ').map((word, i) => (
                                        <React.Fragment key={i}>
                                            {word}
                                            {i !== feature.title.split(' ').length - 1 && <br />}
                                        </React.Fragment>
                                    ))}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>

            <style>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}
