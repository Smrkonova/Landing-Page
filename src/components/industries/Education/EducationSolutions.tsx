"use client";

import React from "react";
import SolutionsGrid from "@/components/industries/SolutionsGrid";

const solutionsData = [
  { id: 1, number: "01", title: "ADMISSION PORTALS" },
  {
    id: 2,
    number: "02",
    title: "LEARNING MANAGEMENT\nSYSTEMS (LMS)",
  },
  { id: 3, number: "03", title: "STUDENT INFORMATION\nSYSTEMS" },
  { id: 4, number: "04", title: "ONLINE EXAMINATION PLATFORMS" },
  { id: 5, number: "05", title: "COURSE DISCOVERY\nWEBSITES" },
  { id: 6, number: "06", title: "STUDENT MOBILE\nAPPS" },
  { id: 7, number: "07", title: "FACULTY\nPORTALS" },
  { id: 8, number: "08", title: "PARENT\nDASHBOARDS" },
  { id: 9, number: "09", title: "ONLINE FEE\nPAYMENT SYSTEMS" },
  { id: 10, number: "10", title: "PLACEMENT\nPORTALS" },
  { id: 11, number: "11", title: "ATTENDANCE\nSYSTEMS" },
  { id: 12, number: "12", title: "LIBRARY\nMANAGEMENT" },
  { id: 13, number: "13", title: "VIRTUAL CAMPUS\nTOURS" },
  { id: 14, number: "14", title: "AI STUDENT ASSISTANTS" },
  { id: 15, number: "15", title: "ANALYTICS\nDASHBOARDS" },
];

export default function EducationSolutions() {
  return (
    <div id="solutions">
      <SolutionsGrid
        tag="SOLUTIONS WE BUILD"
        tagClassName="font-sans font-normal text-[clamp(16px,1.4vw+8px,24px)] leading-[1.36] tracking-[0em] uppercase text-[#888]"
        title={
          <>
            BUILD A STRONG FOUNDATION AND<br className="hidden sm:block" />
            SCALE STUDENTS AND OPERATIONAL GROWTH.
          </>
        }
        titleClassName="font-sans font-light text-[clamp(2.25rem,3.8vw+0.5rem,64px)] leading-[1.22] tracking-[0em] uppercase text-[#111]"
        subtitle="DIGITAL SOLUTIONS DESIGNED AROUND THE WAY EDUCATIONAL INSTITUTIONS WORK"
        subtitleClassName="font-sans font-normal text-[clamp(14px,1.3vw+6px,24px)] leading-[1.36] tracking-[0em] uppercase text-[#444] max-w-2xl mt-4 md:mt-6 leading-relaxed"
        solutions={solutionsData}
        itemTitleClassName="font-sans font-normal text-[14px] leading-[1.36] tracking-[0em] uppercase text-[#222] whitespace-pre-line"
      />
    </div>
  );
}

