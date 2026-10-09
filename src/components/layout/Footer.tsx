"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useContactModal } from '@/context/ContactModalContext';
import { trackContactButtonClick } from '@/lib/analytics';

const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-5 md:h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-5 md:h-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);

const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-5 md:h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

export default function Footer() {
    const { openContactModal } = useContactModal();
    return (
        <footer className="relative z-10 w-full max-w-full overflow-hidden bg-[#111111] text-[#888888] py-8 px-4 sm:px-6 md:px-12 flex flex-col font-mono uppercase text-[10px] md:text-xs" style={{ minHeight: "calc(100vh / var(--desktop-scale, 1))" }}>
            <div className="max-w-7xl mx-auto w-full flex flex-col justify-between flex-1">
                {/* Top Section */}
                <div className="flex justify-between items-start w-full leading-tight">
                    <div className="text-left">
                        WE DON'T MAKE ADS.<br />
                        WE MAKE CULTURE.
                    </div>
                    <div className="text-right">
                        THEN WE PUT IT IN<br />
                        FRONT OF THE WORLD.
                    </div>
                </div>

                {/* Middle Section: Giant Logo Text */}
                <div className="flex flex-col items-center justify-center flex-1 w-full gap-8 my-16">
                    {/* The user requested a logo here matching the giant AGENTURA text */}
                    <div className="relative w-full max-w-[90vw] md:max-w-[75vw] lg:max-w-[1200px] flex justify-center z-10 my-4">
                        <Image
                            src="/images/footer-logo.svg"
                            alt="Smrkonova Logo"
                            width={1500}
                            height={300}
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-[#cccccc] font-sans font-semibold tracking-wider text-[10px] md:text-xs mt-4">
                        <Link href="/projects" className="hover:text-white transition-colors">PROJECTS</Link>
                        <Link href="/services" className="hover:text-white transition-colors">SERVICES</Link>
                        <Link href="/industries" className="hover:text-white transition-colors">INDUSTRIES</Link>
                        <Link href="/about" className="hover:text-white transition-colors">ABOUT US</Link>
                        <Link href="/blog" className="hover:text-white transition-colors">BLOGS</Link>
                        <Link href="/events" className="hover:text-white transition-colors">EVENTS</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">TERMS & CONDITIONS</Link>
                        <Link href="/privacy" className="hover:text-white transition-colors">PRIVACY POLICY</Link>
                        <Link href="#" className="hover:text-white transition-colors">COOKIES</Link>
                        <button
                            type="button"
                            onClick={() => {
                                trackContactButtonClick("CONTACT", "footer_nav");
                                openContactModal();
                            }}
                            className="hover:text-white transition-colors cursor-pointer uppercase"
                        >
                            CONTACT
                        </button>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-8 mt-4 text-[#cccccc]">
                        <a 
                            href="https://www.facebook.com/people/Smrkonova/61577012679507/#" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="Facebook"
                            className="hover:text-white transition-colors"
                        >
                            <FacebookIcon />
                        </a>
                        <a 
                            href="https://www.instagram.com/smrkonova" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="Instagram"
                            className="hover:text-white transition-colors"
                        >
                            <InstagramIcon />
                        </a>
                        <a 
                            href="https://www.linkedin.com/company/smrkonova/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="LinkedIn"
                            className="hover:text-white transition-colors"
                        >
                            <LinkedinIcon />
                        </a>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex justify-between items-end w-full leading-tight">
                    <div className="text-left">
                        © {new Date().getFullYear()} SMRKONOVA. ALL<br />
                        RIGHTS RESERVED.
                    </div>
                    <div className="text-right">
                        CRAFTED BY: SMRKONOVA
                    </div>
                </div>
            </div>
        </footer>
    );
}
