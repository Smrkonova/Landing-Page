"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface IndustryExtendedSectionProps {
  tag?: string;
  tagClassName?: string;
  title: React.ReactNode;
  titleClassName?: string;
  paragraphs: string[];
  paragraphClassName?: string;
  cardTitle?: string;
  cardTitleClassName?: string;
  cardDescription?: string;
  cardDescriptionClassName?: string;
  cardImage?: string;
  carousel?: React.ReactNode;
}

export default function IndustryExtendedSection({
  tag = "FULL-STACK DIGITAL SERVICE",
  tagClassName,
  title,
  titleClassName,
  paragraphs,
  paragraphClassName,
  cardTitle = "HOSPITAL & CLINIC DIGITAL SYSTEMS",
  cardTitleClassName,
  cardDescription = "End-to-end healthcare platforms: patient portals, telemedicine apps, appointment engines, EHR/EMR integrations, and HIPAA-compliant infrastructures.",
  cardDescriptionClassName,
  cardImage,
  carousel,
}: IndustryExtendedSectionProps) {
  return (
    <section className="bg-[#fcfcfc] text-black py-28 md:py-36 w-full overflow-hidden relative border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* Left Column: Headline and Narrative */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 md:space-y-8 z-10 relative">
          <span className={tagClassName || "text-[clamp(10px,0.4vw+5px,12px)] font-bold tracking-[0.25em] uppercase text-[#888]"}>
            {tag}
          </span>
          <h2 className={titleClassName || "text-[clamp(2rem,3.8vw+0.5rem,3.75rem)] font-light tracking-tight leading-[1.1] text-[#111] uppercase"}>
            {title}
          </h2>
          <div className="space-y-5 text-[#555] max-w-xl">
            {paragraphs.map((para, i) => (
              <p key={i} className={paragraphClassName || "text-[clamp(13px,0.4vw+7px,15px)] leading-[1.9] font-normal"}>{para}</p>
            ))}
          </div>
        </div>

        {/* Right Column: Carousel or Glowing Frosted Card */}
        <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end">
          {carousel ? (
            carousel
          ) : (
            <>
              {/* Ambient Warm Radial Blur Behind Card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full bg-gradient-to-tr from-[#ff9a44] via-[#ff6a00] to-[#ffd074] blur-[80px] opacity-40 pointer-events-none"></div>

              {/* Frosted Glass Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-full max-w-[420px] min-h-[500px] md:min-h-[540px] rounded-[32px] bg-white border border-neutral-100 p-7 md:p-9 flex flex-col justify-between overflow-hidden group transition-all duration-500"
              >

                {/* 3D Floating Graphic in Card */}
                {cardImage && (
                  <div className="relative w-full h-[220px] md:h-[260px] my-auto flex items-center justify-center z-10">
                    <motion.div
                      animate={{ y: [-6, 6, -6] }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                      className="relative w-full h-full flex items-center justify-center"
                    >
                      <Image
                        src={cardImage}
                        alt={cardTitle || "Healthcare Digital System"}
                        fill
                        className="object-contain p-2 group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </motion.div>
                  </div>
                )}

                {/* Card Bottom: Text Content */}
                <div className="relative z-10 space-y-2 pt-3 border-t border-black/[0.04]">
                  <h3 className={cardTitleClassName || "text-[clamp(1.125rem,1.4vw+0.5rem,1.35rem)] font-bold text-[#111] uppercase tracking-wide leading-tight"}>
                    {cardTitle}
                  </h3>
                  <p className={cardDescriptionClassName || "text-[clamp(11px,0.4vw+6px,12.5px)] text-[#666] leading-relaxed font-normal"}>
                    {cardDescription}
                  </p>
                </div>
              </motion.div>
            </>
          )}
        </div>

      </div>
    </section>
  );
}
