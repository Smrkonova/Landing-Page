"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";
import { useSmoothScroll } from "./SmoothScroll";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export default function WhatsAppButton({
  phoneNumber = "919740662046",
  message = "Hi! I would like to know more about your services.",
}: WhatsAppButtonProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { lenis, scrollTo } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop || 0;
      // Hide at top in hero section, appear when reaching lower sections (e.g. ~3rd section, ~550px)
      const threshold = Math.max(500, window.innerHeight * 0.7);
      setShowScrollTop(scrollPosition > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    if (lenis) {
      lenis.on("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (lenis) {
        lenis.off("scroll", handleScroll);
      }
    };
  }, [lenis]);

  const handleScrollToTop = () => {
    if (scrollTo) {
      scrollTo(0, { duration: 1.2 });
    }
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    trackWhatsAppClick("floating_home_button");
  };

  return (
    <aside
      aria-label="Floating Actions"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none"
    >
      {/* Round Scroll-to-Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 15 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center group pointer-events-auto"
          >
            {/* Tooltip on hover */}
            <span className="hidden md:inline-block mr-3 px-3 py-1.5 text-xs font-medium text-white bg-neutral-900/90 backdrop-blur-sm rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none select-none whitespace-nowrap">
              Scroll to top
            </span>

            <button
              type="button"
              onClick={handleScrollToTop}
              aria-label="Scroll to top"
              className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#111111] text-white border border-white/20 shadow-2xl hover:border-white/50 hover:bg-[#222222] transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-black/30 cursor-pointer"
            >
              <ArrowUp className="w-6 h-6 text-white transition-transform duration-300 group-hover:-translate-y-1" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <div className="flex items-center group pointer-events-auto">
        {/* Tooltip on hover */}
        <span className="hidden md:inline-block mr-3 px-3 py-1.5 text-xs font-medium text-white bg-neutral-900/90 backdrop-blur-sm rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none select-none whitespace-nowrap">
          Chat with us on WhatsApp
        </span>

        {/* Floating Button */}
        <a
          id="whatsapp-floating-button"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          aria-label="Chat with us on WhatsApp at +91 97406 62046"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-green-500/30 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-green-300 cursor-pointer"
        >
          {/* Subtle Ping Pulse Effect */}
          <span className="absolute -inset-0.5 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

          {/* WhatsApp SVG Icon */}
          <svg
            className="w-7 h-7 fill-current relative z-10"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </a>
      </div>
    </aside>
  );
}
