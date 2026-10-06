"use client";

import React, { useEffect, useState } from "react";

export interface SectionItem {
  id: string;
  title: string;
}

export function TermsTOC({ sections }: { sections: SectionItem[] }) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
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

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const offset = 110;
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
    <aside className="w-full lg:w-[272px] shrink-0 lg:sticky lg:top-12 max-h-[calc(100vh-80px)] overflow-y-auto pr-4 select-none">
      {/* HorizontalBorder */}
      <div className="w-[272px] pb-2 border-b border-[#E5E5E5] mb-6">
        <h2 className="font-sans font-bold text-[11px] leading-4 tracking-[1.1px] uppercase text-[#A3A3A3]">
          TABLE OF CONTENT
        </h2>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-[12px] w-[272px]">
        {sections.map((section) => {
          const isActive = activeId === section.id;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => scrollToSection(e, section.id)}
              className={`block w-[272px] text-left transition-colors duration-150 ${
                isActive
                  ? "font-sans font-semibold text-[12px] leading-5 text-[#111827]"
                  : "font-sans font-medium text-[12px] leading-5 text-[#737373] hover:text-[#111827]"
              }`}
            >
              {section.title}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
