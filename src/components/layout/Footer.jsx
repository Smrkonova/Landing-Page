import React from 'react';
import { Database } from 'lucide-react';

export default function Footer() {
    return (
        // rounded-b-[40px] z-40 relative shadow-[0_20px_40px_rgba(0,0,0,0.05)]
        <footer className="w-full bg-[#111111] text-[#a1a1a6] py-16 px-6 md:px-12 lg:px-24 text-sm font-light">
            <div className="max-w-7xl mx-auto flex flex-col gap-16">

                {/* Top Info */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">

                    <div className="flex flex-col gap-6 md:w-1/3">
                        <div className="flex items-center gap-2 text-white">
                            <Database className="w-6 h-6" />
                            <span className="font-semibold tracking-wide text-lg">Smrkonova</span>
                        </div>
                        <p className="leading-relaxed">
                            We create high-performing digital experiences that help businesses grow, scale, and dominate online. Based in Bangalore, trusted worldwide.
                        </p>
                    </div>

                    {/* Links Directory */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 md:gap-24 w-full md:w-auto">
                        <div className="flex flex-col gap-4">
                            <h5 className="font-semibold text-white tracking-wide">Services</h5>
                            <ul className="flex flex-col gap-3">
                                <li><a href="#" className="hover:text-white transition-colors">Web Design</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">UI/UX Design</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Branding</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">E-Commerce</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Digital Marketing</a></li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h5 className="font-semibold text-white tracking-wide">Company</h5>
                            <ul className="flex flex-col gap-3">
                                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h5 className="font-semibold text-white tracking-wide">Legal</h5>
                            <ul className="flex flex-col gap-3">
                                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                            </ul>
                        </div>
                    </div>

                </div>

                {/* Divider */}
                <div className="w-full h-px bg-[#333336]"></div>

                {/* Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <p>
                        Copyright © {new Date().getFullYear()} Smrkonova Softech Solutions. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6 text-xs font-semibold uppercase tracking-widest">
                        <a href="#" className="hover:text-white transition-colors">Twitter</a>
                        <a href="#" className="hover:text-white transition-colors">Facebook</a>
                        <a href="#" className="hover:text-white transition-colors">Instagram</a>
                        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
