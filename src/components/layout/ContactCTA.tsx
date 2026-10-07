"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Send } from 'lucide-react';
import { usePathname } from 'next/navigation';
import ContactDrawer from './ContactDrawer';
import { trackContactButtonClick } from '@/lib/analytics';

export default function ContactCTA() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  const pathLower = pathname?.toLowerCase() || '';

  if (
    pathname === '/' ||
    pathLower.includes('/industries') ||
    pathLower.includes('/services') ||
    pathLower.includes('/projects') ||
    pathname === '/privacy' ||
    pathname === '/terms'
  ) {
    return null;
  }
  const isEcommerce = pathLower.includes('/industries/ecommerce') || pathLower.includes('/industries/e-commerce');
  const isHealthcare = pathLower.includes('/industries/healthcare');
  const isEducation = pathLower.includes('/industries/education');
  const isRealEstate = pathLower.includes('/industries/real-estate') || pathLower.includes('/industries/real_estate');
  const isManufacturing = pathLower.includes('/industries/manufacturing');
  const isIndustryPill = isEcommerce || isHealthcare || isEducation || isRealEstate || isManufacturing;

  let pretitle = "Ready to build something";
  let title: React.ReactNode = "Extraordinary?";
  let subtext = "Let's engineer your next peak together";
  let buttonText = "Get in Touch";

  if (isEcommerce) {
    pretitle = "READY TO BUILD SOMETHING";
    title = (
      <>
        Build a future-ready<br className="hidden sm:block" /> e-Commerce business
      </>
    );
    subtext = "Partner with Smrkonova to engineer resilient commerce systems that convert traffic, delight shoppers, and scale globally.";
    buttonText = "Schedule a Strategy Session";
  } else if (isHealthcare) {
    pretitle = "READY TO BUILD SOMETHING";
    title = (
      <>
        Build a future-ready<br className="hidden sm:block" /> healthcare system
      </>
    );
    subtext = "Smrkonova inspires healthcare organizations with digital solutions for institution management, healthcare marketing, branding, admissions and patient engagement.";
    buttonText = "Schedule a Strategy Session";
  } else if (isEducation) {
    pretitle = "READY TO BUILD SOMETHING";
    title = (
      <>
        Build a future-ready<br className="hidden sm:block" /> institution
      </>
    );
    subtext = "Smrkonova inspires schools, colleges and universities with digital solutions for institution management, education marketing, branding, admissions and student engagement.";
    buttonText = "Schedule a Strategy Session";
  } else if (isRealEstate) {
    pretitle = "READY TO BUILD SOMETHING";
    title = (
      <>
        Build a future-ready<br className="hidden sm:block" /> real estate business
      </>
    );
    subtext = "Smrkonova inspires real estate developers, builders and property brands with digital solutions for property marketing, branding, lead acquisition and immersive sales experiences.";
    buttonText = "Schedule a Strategy Session";
  } else if (isManufacturing) {
    pretitle = "READY TO BUILD SOMETHING";
    title = (
      <>
        Build a future-ready<br className="hidden sm:block" /> manufacturing enterprise
      </>
    );
    subtext = "Smrkonova partners with manufacturers and industrial brands to engineer automated digital workflows, B2B portals, and connected operations.";
    buttonText = "Schedule a Strategy Session";
  }

  return (
    <>
      <section className="sticky top-0 z-0 w-full max-w-full flex items-center justify-center overflow-hidden bg-black" style={{ height: "calc(100vh / var(--desktop-scale, 1))" }}>
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/contact.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay to ensure text is highly legible over the video */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Content Area */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 -mt-16 md:-mt-20 max-w-5xl mx-auto">

          <p className="text-white text-xs sm:text-sm md:text-base tracking-[0.2em] md:tracking-[0.3em] uppercase font-light mb-3 drop-shadow-md">
            {pretitle}
          </p>

          <h2 className={`text-white break-words max-w-full leading-[1.08] mb-6 drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)] ${
            isIndustryPill 
              ? "font-sans font-normal text-3xl sm:text-5xl md:text-6xl lg:text-[76px] tracking-tight" 
              : "font-good-times font-black uppercase text-2xl sm:text-4xl md:text-6xl lg:text-[76px] tracking-tight"
          }`}>
            {title}
          </h2>

          {/* Divider with Logo Placeholder */}
          <div className="flex items-center gap-6 w-full max-w-[400px] mb-6 opacity-80">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white" />
            <div className="flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L2 21H22L12 3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 9L7 18H17L12 9Z" fill="white" />
              </svg>
            </div>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white" />
          </div>

          <p className="text-white/90 text-xs sm:text-sm md:text-base tracking-[0.08em] font-normal mb-8 drop-shadow-md max-w-2xl leading-relaxed">
            {subtext}
          </p>

          {/* Action Button */}
          {isIndustryPill ? (
            <Link
              href="/contact"
              onClick={() => trackContactButtonClick(buttonText, "contact_cta_industry")}
              className="flex items-center gap-2.5 px-8 md:px-10 py-3.5 md:py-4 bg-[#1e2329]/80 hover:bg-[#2a3038] text-white/95 rounded-full border border-white/20 backdrop-blur-md shadow-lg transition-all duration-300 text-xs sm:text-sm font-medium tracking-wide group cursor-pointer"
            >
              <span className="text-base select-none">📅</span>
              <span className="text-white text-xs sm:text-sm font-medium tracking-wide">
                {buttonText}
              </span>
            </Link>
          ) : (
            <button
              suppressHydrationWarning
              onClick={() => {
                trackContactButtonClick(buttonText, "contact_cta_section");
                setIsDrawerOpen(true);
              }}
              className="flex items-center gap-3 px-8 md:px-10 py-3 md:py-4 bg-black/30 backdrop-blur-md border border-[#4ea2f5]/60 hover:bg-[#4ea2f5]/20 hover:border-[#4ea2f5] transition-all duration-300 rounded-[2px] shadow-[0_0_20px_rgba(78,162,245,0.4)] hover:shadow-[0_0_30px_rgba(78,162,245,0.6)] group cursor-pointer"
            >
              <Send className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:translate-x-1 transition-transform" />
              <span className="text-white text-xs md:text-sm font-semibold tracking-wide uppercase">{buttonText}</span>
            </button>
          )}

        </div>
      </section>

      {/* Spacer to delay the footer by 100vh (1 scroll), creating the '2 scroll stay' effect */}
      <div className="w-full pointer-events-none" style={{ height: "calc(100vh / var(--desktop-scale, 1))" }} />

      {/* Slide-out Drawer */}
      <ContactDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}
