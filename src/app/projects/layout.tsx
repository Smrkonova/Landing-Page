"use client";

import React from "react";
import StoryExperience from "@/components/animations/StoryExperience";

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full relative flex flex-col flex-grow">
      {children}
      <div id="process" className="w-full relative">
        <StoryExperience />
      </div>
    </div>
  );
}
