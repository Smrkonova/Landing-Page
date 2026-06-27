import React from 'react';
import Image from 'next/image';

const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-5 md:h-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
);

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-5 md:h-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);

const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-5 md:h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

export default function Footer() {
    return (
        <footer className="w-full bg-[#111111] text-[#888888] py-8 px-6 md:px-12 flex flex-col min-h-[80vh] font-mono uppercase text-[10px] md:text-xs">
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
                        <a href="#" className="hover:text-white transition-colors">PROJECTS</a>
                        <a href="#" className="hover:text-white transition-colors">PROJECT SINGLE</a>
                        <a href="#" className="hover:text-white transition-colors">BLOG</a>
                        <a href="#" className="hover:text-white transition-colors">BLOG SINGLE</a>
                        <a href="#" className="hover:text-white transition-colors">CONTACT</a>
                        <a href="#" className="hover:text-white transition-colors">ABOUT US</a>
                        <a href="#" className="hover:text-white transition-colors">404 PAGE</a>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-8 mt-4 text-[#cccccc]">
                        <a href="#" className="hover:text-white transition-colors"><TwitterIcon /></a>
                        <a href="#" className="hover:text-white transition-colors"><InstagramIcon /></a>
                        <a href="#" className="hover:text-white transition-colors"><LinkedinIcon /></a>
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
