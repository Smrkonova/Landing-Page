"use client";

import React, { useEffect, useState, useRef } from "react";

export interface LegalSectionItem {
  id: string;
  title: string;
  shortTitle?: string;
}

interface LegalTopTOCProps {
  sections: LegalSectionItem[];
}

export default function LegalTopTOC({ sections }: LegalTopTOCProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || "");
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Offset accounting for the sticky top bar and breathing room
      const scrollPosition = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveId(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  // Keep the active tab scrolled into view inside the horizontal bar
  useEffect(() => {
    if (activeId && tabRefs.current[activeId] && scrollContainerRef.current) {
      const activeBtn = tabRefs.current[activeId];
      const container = scrollContainerRef.current;
      if (activeBtn) {
        const btnLeft = activeBtn.offsetLeft;
        const btnWidth = activeBtn.offsetWidth;
        const containerWidth = container.offsetWidth;
        const scrollLeft = container.scrollLeft;

        // If button is out of viewport to the right or left, scroll it into view smoothly
        if (btnLeft + btnWidth > scrollLeft + containerWidth - 20) {
          container.scrollTo({
            left: btnLeft - 40,
            behavior: "smooth",
          });
        } else if (btnLeft < scrollLeft + 40) {
          container.scrollTo({
            left: Math.max(0, btnLeft - 40),
            behavior: "smooth",
          });
        }
      }
    }
  }, [activeId]);

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveId(id);
    }
  };

  return (
    <div className="sticky top-0 z-40 w-full bg-[#F8FAFC]/95 backdrop-blur-md border-y border-[#E2E8F0] shadow-xs">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-[52px] flex items-center gap-3 sm:gap-4">
        {/* TOC: Prefix Label */}
        <div className="shrink-0 flex items-center">
          <span className="font-sans font-bold text-[12px] leading-none tracking-[0.08em] text-[#8E95A5] uppercase select-none">
            TOC:
          </span>
        </div>

        {/* Horizontal Scrollable Tabs */}
        <div
          ref={scrollContainerRef}
          className="flex-1 flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1"
        >
          {sections.map((section) => {
            const isActive = activeId === section.id;
            const displayTitle = section.shortTitle || section.title;

            return (
              <button
                key={section.id}
                ref={(el) => {
                  tabRefs.current[section.id] = el;
                }}
                onClick={() => scrollToSection(section.id)}
                className={`px-3.5 py-1.5 rounded-full text-[13px] leading-5 font-sans whitespace-nowrap transition-all duration-150 cursor-pointer shrink-0 ${
                  isActive
                    ? "bg-white text-[#0F172A] font-semibold border border-[#CBD5E1] shadow-xs"
                    : "bg-white/60 text-[#475569] font-medium border border-[#E2E8F0]/80 hover:text-[#0F172A] hover:bg-white hover:border-[#CBD5E1]"
                }`}
                title={section.title}
              >
                {displayTitle}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
