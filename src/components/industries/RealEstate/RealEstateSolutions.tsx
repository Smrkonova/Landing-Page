"use client";

import React from "react";
import SolutionsGrid from "@/components/industries/SolutionsGrid";

const realEstateSolutionsData = [
  { id: 1, number: "01", title: "PROJECT SHOWCASE WEBSITES" },
  { id: 2, number: "02", title: "INTERACTIVE MASTER\nPLANS" },
  { id: 3, number: "03", title: "PROPERTY SEARCH\nPLATFORMS" },
  { id: 4, number: "04", title: "VIRTUAL TOUR EXPERIENCES" },
  { id: 5, number: "05", title: "BOOKING\nMANAGEMENT" },
  { id: 6, number: "06", title: "CRM INTEGRATION" },
  { id: 7, number: "07", title: "CUSTOMER\nPORTALS" },
  { id: 8, number: "08", title: "MOBILE APPS" },
  { id: 9, number: "09", title: "LEAD AUTOMATION" },
  { id: 10, number: "10", title: "SALES\nDASHBOARDS" },
  { id: 11, number: "11", title: "INVESTOR\nPORTALS" },
  { id: 12, number: "12", title: "PROPERTY MANAGEMENT\nSYSTEMS" },
  { id: 13, number: "13", title: "CONSTRUCTION PROGRESS\nDASHBOARDS" },
  { id: 14, number: "14", title: "WHATSAPP AUTOMATION" },
  { id: 15, number: "15", title: "AI CHATBOTS" },
];

export default function RealEstateSolutions() {
  return (
    <div id="solutions">
      <SolutionsGrid
        tag="SOLUTIONS WE BUILD"
        tagClassName="font-sans font-normal text-[clamp(16px,1.4vw+8px,24px)] leading-[1.36] tracking-[0em] uppercase text-[#888]"
        title={
          <>
            PROVEN BUSINESS SYSTEMS<br className="hidden sm:block" />
            FOR THE REAL ESTATE MARKET.
          </>
        }
        titleClassName="font-sans font-light text-[clamp(2.25rem,3.8vw+0.5rem,64px)] leading-[1.22] tracking-[0em] uppercase text-[#111]"
        subtitle={
          <>
            STREAMLINED REAL ESTATE SOFTWARE DRIVES STRONGER MARKETING,
            <br className="hidden sm:block" />
            CUSTOMER RELATIONSHIPS, AND SUSTAINABLE GROWTH.
          </>
        }
        subtitleClassName="font-sans font-normal text-[clamp(14px,1.3vw+6px,24px)] leading-[1.36] tracking-[0em] uppercase text-[#444] max-w-3xl mt-4 md:mt-6 leading-relaxed"
        solutions={realEstateSolutionsData}
        itemTitleClassName="font-sans font-normal text-[14px] leading-[1.36] tracking-[0em] uppercase text-[#222] whitespace-pre-line"
      />
    </div>
  );
}

