"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl px-4 md:px-0">
      <nav className="relative flex items-center justify-between px-6 py-3 rounded-full bg-white/80 dark:bg-[#161617]/80 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-colors duration-300 z-50">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-32 h-8">
            <Image
              src="/images/logo.svg"
              alt="SMRKONOVA"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
          <li>
            <Link href="/" className="text-black dark:text-white font-semibold transition-colors">Home</Link>
          </li>
          <li className="group">
            <button className="flex items-center gap-1 hover:text-black dark:hover:text-white transition-colors cursor-pointer py-2">
              Services <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
            </button>

            {/* Apple-Style Mega Menu Dropdown */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[90vw] max-w-4xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 before:content-[''] before:absolute before:-top-4 before:left-0 before:w-full before:h-4">
              <div className="bg-white/95 dark:bg-[#161617]/95 backdrop-blur-3xl border border-black/10 dark:border-white/10 rounded-3xl p-10 shadow-2xl flex flex-col md:flex-row gap-12 md:gap-24 text-left">
                {/* Column 1 */}
                <div className="flex flex-col gap-5">
                  <h3 className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest">Explore Services</h3>
                  <div className="flex flex-col gap-3">
                    <Link href="/services/web-design" className="text-2xl font-semibold text-black dark:text-white hover:opacity-70 transition-opacity">Web Design</Link>
                    <Link href="/services/development" className="text-2xl font-semibold text-black dark:text-white hover:opacity-70 transition-opacity">Development</Link>
                    <Link href="/services/marketing" className="text-2xl font-semibold text-black dark:text-white hover:opacity-70 transition-opacity">Digital Marketing</Link>
                    <Link href="/services/seo" className="text-2xl font-semibold text-black dark:text-white hover:opacity-70 transition-opacity">SEO & Strategy</Link>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-5">
                  <h3 className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest">Solutions</h3>
                  <div className="flex flex-col gap-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                    <Link href="/solutions/ecommerce" className="hover:text-black dark:hover:text-white transition-colors">E-Commerce</Link>
                    <Link href="/solutions/corporate" className="hover:text-black dark:hover:text-white transition-colors">Corporate Websites</Link>
                    <Link href="/solutions/startups" className="hover:text-black dark:hover:text-white transition-colors">Startup Packages</Link>
                    <Link href="/solutions/branding" className="hover:text-black dark:hover:text-white transition-colors">Brand Identity</Link>
                  </div>
                </div>

                {/* Column 3 */}
                <div className="flex flex-col gap-5">
                  <h3 className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest">Resources</h3>
                  <div className="flex flex-col gap-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                    <Link href="/case-studies" className="hover:text-black dark:hover:text-white transition-colors">Case Studies</Link>
                    <Link href="/process" className="hover:text-black dark:hover:text-white transition-colors">Our Process</Link>
                    <Link href="/faq" className="hover:text-black dark:hover:text-white transition-colors">FAQ</Link>
                    <Link href="/support" className="hover:text-black dark:hover:text-white transition-colors">Support Center</Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link href="/projects" className="hover:text-black dark:hover:text-white transition-colors">Projects</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-black dark:hover:text-white transition-colors">About Us</Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-black dark:hover:text-white transition-colors">Blog</Link>
          </li>
        </ul>

        {/* CTA Button / Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:inline-flex bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md"
          >
            Contact Us Now
          </Link>
          <button 
            className="md:hidden p-2 text-black dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-4 right-4 mt-4 bg-white/95 dark:bg-[#161617]/95 backdrop-blur-2xl border border-black/10 dark:border-white/10 rounded-3xl p-6 shadow-2xl flex flex-col gap-6 md:hidden z-40"
          >
            <ul className="flex flex-col gap-4 text-lg font-semibold text-black dark:text-white">
              <li>
                <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
              </li>
              <li className="flex flex-col gap-3">
                <button 
                  className="flex items-center justify-between w-full text-left"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  Services <ChevronDown className={`w-5 h-5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="flex flex-col gap-3 pl-4 text-base font-medium text-gray-600 dark:text-gray-300 overflow-hidden"
                    >
                      <Link href="/services/web-design" onClick={() => setIsOpen(false)}>Web Design</Link>
                      <Link href="/services/development" onClick={() => setIsOpen(false)}>Development</Link>
                      <Link href="/services/marketing" onClick={() => setIsOpen(false)}>Digital Marketing</Link>
                      <Link href="/services/seo" onClick={() => setIsOpen(false)}>SEO & Strategy</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
              <li>
                <Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
              </li>
              <li>
                <Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link>
              </li>
              <li>
                <Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
              </li>
            </ul>
            <div className="pt-6 border-t border-black/10 dark:border-white/10">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex justify-center bg-black dark:bg-white text-white dark:text-black px-5 py-3 rounded-full text-base font-medium transition-all"
              >
                Contact Us Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
