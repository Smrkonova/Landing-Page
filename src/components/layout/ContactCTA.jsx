"use client";

import React, { useState } from 'react';
import { Send } from 'lucide-react';
import ContactDrawer from './ContactDrawer';

export default function ContactCTA() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <section className="sticky top-0 z-0 w-full h-[100vh] flex items-center justify-center overflow-hidden bg-black">
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
      <div className="absolute inset-0 bg-black/20" />

      {/* Content Area */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 -mt-20">

        <p className="text-white text-sm md:text-lg tracking-[0.2em] md:tracking-[0.3em] uppercase font-light mb-2 drop-shadow-md">
          Ready to build something
        </p>

        <h2 className="text-white text-5xl md:text-7xl lg:text-[100px] font-good-times font-black uppercase tracking-tight mb-8 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
          Extraordinary?
        </h2>

        {/* Divider with Logo Placeholder */}
        <div className="flex items-center gap-6 w-full max-w-[400px] mb-8 opacity-80">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white" />
          {/* Mockup logo - roughly matching the shape in the design */}
          <div className="flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3L2 21H22L12 3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 9L7 18H17L12 9Z" fill="white" />
            </svg>
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white" />
        </div>

        <p className="text-white text-[10px] md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase font-medium mb-10 drop-shadow-md">
          Let's engineer your next peak together
        </p>

        {/* Glowing Button */}
        <button 
          suppressHydrationWarning
          onClick={() => setIsDrawerOpen(true)}
          className="flex items-center gap-3 px-8 md:px-10 py-3 md:py-4 bg-black/30 backdrop-blur-md border border-[#4ea2f5]/60 hover:bg-[#4ea2f5]/20 hover:border-[#4ea2f5] transition-all duration-300 rounded-[2px] shadow-[0_0_20px_rgba(78,162,245,0.4)] hover:shadow-[0_0_30px_rgba(78,162,245,0.6)] group"
        >
          <Send className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:translate-x-1 transition-transform" />
          <span className="text-white text-xs md:text-sm font-semibold tracking-wide uppercase">Get in Touch</span>
        </button>
        
      </div>
    </section>

      {/* Spacer to delay the footer by 100vh (1 scroll), creating the '2 scroll stay' effect */}
      <div className="w-full h-[100vh] pointer-events-none" />

      {/* Slide-out Drawer */}
      <ContactDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}
