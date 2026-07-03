"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const isNazrPage = pathname === '/projects/nazr';
  const logoFilter = isNazrPage 
    ? 'brightness(0) saturate(100%) invert(23%) sepia(91%) saturate(7355%) hue-rotate(320deg) brightness(98%) contrast(109%)' 
    : 'none';
  const iconColor = isNazrPage ? "bg-white/70" : "bg-[#212121]";
  const borderColor = isNazrPage ? "border-white/20 hover:border-white/40" : "border-[#212121]/30 hover:border-[#212121]";
  const bottomBorder = isNazrPage ? "border-white/10" : "border-[#212121]/10";

  const [isOpen, setIsOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [time, setTime] = useState("");
  const [tz, setTz] = useState("LOCAL");

  const audioRef = useRef(null);

  // Disable body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (audioRef.current) {
      if (isAudioPlaying) {
        audioRef.current.play().catch(e => console.log("Audio play failed: ", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
      try {
        const timeString = new Intl.DateTimeFormat('en-US', { timeZoneName: 'short' }).format(now);
        const tzAbbr = timeString.split(' ').pop();
        if (tzAbbr) setTz(tzAbbr);
      } catch (e) {
        setTz("LOCAL");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source src="/audio/background.mpeg" type="audio/mpeg" />
      </audio>

      <header className="absolute top-0 left-0 w-full z-40 px-6 py-8 md:px-12 flex justify-center  pointer-events-none">
        <div className={`w-full max-w-7xl flex items-center justify-between border-b ${bottomBorder} pb-6 transition-colors duration-300`}>
          {/* Left: Logo */}
          <Link href="/" className="pointer-events-auto hover:opacity-70 transition-opacity">
            <div className="relative w-48 h-10 md:w-56 md:h-12">
              <Image
                src="/images/logo.svg"
                alt="SMRKONOVA"
                fill
                className="object-contain object-left transition-all duration-300"
                style={{ filter: logoFilter }}
              />
            </div>
          </Link>

          {/* Right: Audio & Menu Buttons */}
          <div className="flex items-center gap-4 pointer-events-auto">
            {/* Audio Equalizer Button */}
            <button
              suppressHydrationWarning
              onClick={() => setIsAudioPlaying(!isAudioPlaying)}
              className={`w-12 h-12 border flex items-center justify-center gap-[3px] transition-colors duration-300 ${borderColor}`}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ scaleY: isAudioPlaying ? [0.4, 1.2, 0.5, 1, 0.4] : 0.5 }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    delay: i * 0.15
                  }}
                  className={`w-px h-5 origin-center transition-colors duration-300 ${iconColor}`}
                />
              ))}
            </button>

            {/* Hamburger Menu Button */}
            <button
              suppressHydrationWarning
              onClick={() => setIsOpen(true)}
              className={`w-12 h-12 border flex flex-col items-center justify-center gap-1.5 transition-colors duration-300 ${borderColor}`}
            >
              <div className={`w-5 h-px transition-colors duration-300 ${iconColor}`} />
              <div className={`w-5 h-px transition-colors duration-300 ${iconColor}`} />
              <div className={`w-5 h-px transition-colors duration-300 ${iconColor}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
            />

            {/* Sidebar Overlay Wrapper (Handles animation, no clipping) */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="fixed top-0 right-0 w-full md:w-[55vw] lg:w-[45vw] h-screen z-[70]"
            >
              {/* Floating Close Button (Matches ContactDrawer entrance) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute top-1/2 -left-20 -translate-y-1/2 z-10 hidden sm:flex"
              >
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-14 h-14 bg-[#111111] flex items-center justify-center rounded-[12px] shadow-2xl border border-white/5 hover:bg-[#222] hover:scale-105 transition-all duration-300"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </motion.div>
              
              {/* Inner Scrolling Content Area */}
              <div className="w-full h-full bg-[#ffffff] flex flex-col justify-between p-8 md:p-12 text-black overflow-y-auto relative">
                {/* Mobile Close Button (Inside) */}
              <div className="flex sm:hidden justify-end w-full">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 bg-[#f0f0f0] flex items-center justify-center rounded-full text-black hover:bg-[#e0e0e0] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Menu Links */}
              <div className="flex flex-col gap-6 mt-24 mb-auto">
                <MenuLink href="/" title="HOME" active onClick={() => setIsOpen(false)} />
                <MenuLink href="/about" title="ABOUT US" onClick={() => setIsOpen(false)} />
                <MenuLink href="/services" title="SERVICES" onClick={() => setIsOpen(false)} />
                <MenuLink href="/projects" title="PROJECTS" onClick={() => setIsOpen(false)} />

                <div className="mt-16">
                  <MenuLink href="/contact" title="JOIN US" onClick={() => setIsOpen(false)} />
                </div>
              </div>

              {/* Overlay Footer */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between text-[8px] md:text-[9px]  uppercase tracking-[0.1em] text-gray-400 mt-16 gap-4">
                <div className="flex flex-wrap gap-4 md:gap-6">
                  <span>© 2026 SMRKONOVA.COM</span>
                  <Link href="#" className="hover:text-black transition-colors">Terms & Conditions</Link>
                  <Link href="#" className="hover:text-black transition-colors">Privacy Policy</Link>
                  <Link href="#" className="hover:text-black transition-colors">Cookies</Link>
                </div>
                <span>Site by SMRKONOVA.</span>
              </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function MenuLink({ href, title, active, onClick }) {
  return (
    <Link href={href} onClick={onClick} className="group flex items-center gap-6 w-fit">
      <span className="text-[10px]  text-black/50">
        ( {active ? "●" : "○"} )
      </span>
      <span className={`text-4xl md:text-6xl font-black uppercase tracking-tighter transition-colors duration-400 font-sans ${active ? "text-black" : "text-black/30 group-hover:text-black/60"}`}>
        {title}
      </span>
    </Link>
  );
}
