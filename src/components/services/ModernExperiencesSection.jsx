"use client";

import React from 'react';

export default function ModernExperiencesSection() {
    return (
        <section className="w-full bg-[#f8f9fa] py-20 md:py-32 px-4 md:px-12 flex justify-center overflow-hidden">
            
            {/* Main Rounded Card Container */}
            <div className="relative w-full max-w-7xl bg-white rounded-[40px] md:rounded-[60px] shadow-[0_20px_80px_rgba(0,0,0,0.05)] overflow-hidden">
                
                {/* --- BACKGROUND GLOWS & MESH GRADIENTS --- */}
                {/* Large soft pink/purple glow in the center/right */}
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-pink-200/40 rounded-full blur-[100px] pointer-events-none -translate-y-1/4"></div>
                {/* Orange glow on the far right */}
                <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-orange-200/50 rounded-full blur-[120px] pointer-events-none translate-x-1/4"></div>
                
                <div className="relative z-10 flex flex-col lg:flex-row p-10 md:p-20 lg:p-24 min-h-[600px]">
                    
                    {/* Left Content Area */}
                    <div className="flex-1 flex flex-col justify-center z-20">
                        <h2 className="text-[50px] md:text-[70px] lg:text-[85px] leading-[1.05] tracking-tight text-[#1a1a1a] mb-8">
                            <span className="block font-black">MODERN</span>
                            <span className="block font-black">EXPERIENCES</span>
                            <span className="block font-light text-gray-500">PEOPLE REMEMBER.</span>
                        </h2>
                        
                        <p className="text-gray-600 text-[15px] md:text-[17px] font-medium leading-relaxed max-w-[380px]">
                            We don't start with templates. Every project starts by understanding your business, your customers and your goals before a single screen is designed.
                        </p>
                    </div>

                    {/* Right Graphics Area */}
                    <div className="flex-1 relative flex items-center justify-center mt-20 lg:mt-0 z-10 min-h-[400px]">
                        {/* Placeholder for the exact image from the design */}
                        <div className="relative w-[500px] h-[500px]">
                            {/* Replace this src with your actual image path, e.g., /images/services/website/modern-graphics.png */}
                            <img 
                                src="/images/services/website/modern-graphics.png" 
                                alt="Modern Experiences Graphic" 
                                className="object-contain w-full h-full"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Static Text */}
                <div className="relative w-full pb-12 overflow-hidden flex justify-center">
                    <p className="text-[13px] font-medium text-gray-500 tracking-wider text-center px-4 whitespace-nowrap">
                        Smooth transition . Interactive sections . Smooth transition . Interactive sections . Smooth transition . Interactive sections . Smooth transition . Interactive sections .
                    </p>
                </div>
                
            </div>
        </section>
    );
}
