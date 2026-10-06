import React from "react";
import ServicesScroll from "@/components/industries/ServicesScroll";

export const metadata = {
  title: "What We Do | Smrkonova",
  description: "Explore our 9 core disciplines from software engineering and UI/UX design to hosting, branding, digital marketing, and analytics.",
};

export default function WhatWeDoPage() {
  return (
    <main className="w-full bg-black min-h-screen">
      <ServicesScroll />
    </main>
  );
}
