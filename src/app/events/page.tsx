"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  MapPin,
  Calendar,
  Clock,
  ArrowUpRight,
  List,
  LayoutGrid,
  ExternalLink,
  SlidersHorizontal,
  ChevronRight,
  Sparkles
} from "lucide-react";
import ContactDrawer from "@/components/layout/ContactDrawer";

interface EventItem {
  id: string;
  month: string;
  day: string;
  year: string;
  category: string;
  subCategory: string;
  title: string;
  timeLocation: string;
  cityTag: string;
  description: string;
  image: string;
  featured?: boolean;
}

const EVENTS_DATA: EventItem[] = [
  {
    id: "hospex-2026",
    month: "MAR",
    day: "15",
    year: "2026",
    category: "Healthcare",
    subCategory: "Keynote Talk",
    title: "Hospex 2026 Kochi: Architecture of Critical Care & Hospital Operating Systems",
    timeLocation: "Lulu Bolgatty International Convention Centre, Kochi • 10:30 AM IST",
    cityTag: "Kochi, IN",
    description:
      "SMRKONOVA presented at Kerala's premier healthcare technology summit, demonstrating zero-latency ICU telemetry, deterministic medical alert protocols, and clinician-first digital hospital workflows.",
    image: "/images/industries/healthcare/banner.jpg",
    featured: true,
  },
  {
    id: "healthtech-2026",
    month: "MAR",
    day: "18",
    year: "2026",
    category: "Healthcare",
    subCategory: "Keynote Talk",
    title: "Global HealthTech Innovation Forum 2026",
    timeLocation: "Kochi, Kerala • 02:00 PM IST",
    cityTag: "Kochi, IN",
    description:
      "Delivering real-time clinical dashboards, fault-tolerant telemetry, and low-latency critical care communication systems.",
    image: "/images/industries/healthcare/1.png",
  },
  {
    id: "webgl-spatial-2026",
    month: "FEB",
    day: "04",
    year: "2026",
    category: "Spatial Tech",
    subCategory: "Symposium",
    title: "WebGL & Spatial Computing World Congress",
    timeLocation: "Virtual • Global Live Stream",
    cityTag: "Global Live",
    description:
      "Engineering GPU-accelerated spatial web canvases and interactive 3D simulations for modern enterprise browsers.",
    image: "/uiux.png",
  },
  {
    id: "bangalore-tech-2026",
    month: "JAN",
    day: "22",
    year: "2026",
    category: "Architecture",
    subCategory: "Conference",
    title: "Bangalore Tech Summit: Autonomous Edge Systems",
    timeLocation: "Bangalore, Karnataka • 11:00 AM IST",
    cityTag: "Bangalore, IN",
    description:
      "Unpacking distributed computing clusters, offline-first sync protocols, and high-throughput real-time APIs.",
    image: "/software.png",
  },
  {
    id: "typography-interaction-2025",
    month: "NOV",
    day: "12",
    year: "2025",
    category: "Keynotes",
    subCategory: "Biennial",
    title: "International Typography & Interaction Biennial",
    timeLocation: "Berlin & Online",
    cityTag: "Berlin / Hybrid",
    description:
      "Exploring brutalist minimalism, fluid responsive typography, and tactile motion systems in digital products.",
    image: "/brand-identity.png",
  },
];

const CATEGORIES = ["All Events", "Healthcare", "Keynotes", "Architecture", "Spatial Tech"];
const YEARS = ["2026", "2025", "2024"];

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Events");
  const [selectedYear, setSelectedYear] = useState("2026");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [currentPage, setCurrentPage] = useState(1);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const filteredEvents = useMemo(() => {
    return EVENTS_DATA.filter((evt) => {
      // Exclude spotlight event from general listing
      if (evt.id === "hospex-2026") return false;

      const matchesCategory =
        selectedCategory === "All Events" || evt.category.toLowerCase() === selectedCategory.toLowerCase();

      const matchesYear = !selectedYear || evt.year === selectedYear;

      const matchesSearch =
        !searchQuery.trim() ||
        evt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        evt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        evt.cityTag.toLowerCase().includes(searchQuery.toLowerCase()) ||
        evt.timeLocation.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesYear && matchesSearch;
    });
  }, [selectedCategory, selectedYear, searchQuery]);

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#000000] font-sans selection:bg-[#000000] selection:text-[#FFFFFF] overflow-x-hidden">
      {/* Contact Drawer for RSVP/Details */}
      <ContactDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      {/* Atmospheric Hero Title Section with SMRKONOVA Contrast Typography */}
      <section className="relative w-full bg-[#FFFFFF] border-b border-[#F5F5F5] pt-28 sm:pt-36 md:pt-40 pb-16 md:pb-24 px-6 sm:px-12 lg:px-24 overflow-hidden">
        {/* Overlay+Blur Decorative Element */}
        <div
          className="absolute -left-20 top-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#F5F5F5]/70 rounded-full blur-[20px] pointer-events-none z-0"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-[1288px] mx-auto flex flex-col items-start gap-6">
          <h1 className="max-w-[896px] font-sans font-light text-[38px] sm:text-[56px] md:text-[68px] lg:text-[72px] leading-[1.05] tracking-[-1.8px] uppercase text-[#000000]">
            EVENTS, KEYNOTES &amp; GLOBAL SUMMITS.
          </h1>
          <p className="max-w-[654px] font-sans font-normal text-base sm:text-lg leading-[28px] text-[#525252]">
            Engineering symposiums, keynote architecture labs, and developer summits shaping the frontier of design, systems engineering, and computing.
          </p>
        </div>
      </section>

      <div className="max-w-[1251px] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-12">
        {/* Section - Hero Spotlight Event Banner (Hospex 2026) */}
        <section
          aria-label="Spotlight Event"
          className="relative w-full bg-[#FFFFFF] border border-[#E5E5E5] rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(245,245,245,0.8),0px_8px_10px_-6px_rgba(245,245,245,0.8)] overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row min-h-[540px]">
            {/* Spotlight Image Visual Column */}
            <div className="relative w-full lg:w-[58%] min-h-[340px] sm:min-h-[420px] lg:min-h-[540px] bg-[#171717] overflow-hidden">
              <Image
                src="/images/industries/healthcare/banner.jpg"
                alt="Hospex 2026 Kochi - Architecture of Critical Care"
                fill
                priority
                className="object-cover object-center"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-40 pointer-events-none"
                aria-hidden="true"
              />
              <div className="absolute top-6 left-6 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/20 text-white rounded text-[11px] font-mono uppercase tracking-wider">
                  <Sparkles className="w-3 h-3 text-emerald-400" />
                  Keynote Spotlight
                </span>
              </div>
            </div>

            {/* Spotlight Narrative Column */}
            <div className="w-full lg:w-[42%] bg-[#FFFFFF] p-6 sm:p-8 md:p-12 flex flex-col justify-between">
              <div className="space-y-4">
                <h2 className="font-sans font-light text-[24px] sm:text-[28px] md:text-[30px] leading-[1.2] tracking-[-0.75px] text-[#000000]">
                  Hospex 2026 Kochi: Architecture of Critical Care &amp; Hospital Operating Systems
                </h2>

                <p className="font-sans font-normal text-[13px] sm:text-[14px] leading-[23px] text-[#525252]">
                  SMRKONOVA presented at Kerala's premier healthcare technology summit, demonstrating zero-latency ICU telemetry, deterministic medical alert protocols, and clinician-first digital hospital workflows.
                </p>

                {/* Technical Node Specs Box */}
                <div className="bg-[#FAFAFA] border border-[#F5F5F5] rounded-[12px] p-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#171717] mt-1 shrink-0" />
                    <span className="font-sans font-medium text-[12px] leading-[16px] text-[#262626]">
                      Keynote &amp; Live Architecture Deployment
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-[#525252]">
                    <Calendar className="w-3.5 h-3.5 text-[#A3A3A3] shrink-0" />
                    <span className="font-sans font-medium text-[12px] leading-[16px]">
                      March 15, 2026 • 10:30 AM IST
                    </span>
                  </div>

                  <div className="flex items-start gap-3 text-[#525252]">
                    <MapPin className="w-3.5 h-3.5 text-[#A3A3A3] shrink-0 mt-0.5" />
                    <span className="font-sans font-medium text-[12px] leading-[16px]">
                      Lulu Bolgatty International Convention Centre, Kochi
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons Styled in SMRKONOVA Aesthetic */}
              <div className="pt-6 mt-6 border-t border-[#F5F5F5] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setIsDrawerOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#000000] text-[#FFFFFF] rounded-[4px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] hover:bg-[#222222] transition-colors font-sans font-medium text-[12px] leading-[16px] tracking-[0.3px]"
                >
                  <span>View details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FFFFFF]" />
                </button>

                <span className="text-[11px] font-mono text-[#A3A3A3] uppercase tracking-wider">
                  Kochi, Kerala
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section - Filter & View Switcher Bar (SMRKONOVA Style Pill Controls) */}
        <section
          aria-label="Filter and View Controls"
          className="w-full bg-[#FFFFFF] border border-[#E5E5E5] rounded-[12px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] p-3 flex flex-col lg:flex-row items-center justify-between gap-4"
        >
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full lg:w-auto pb-1 lg:pb-0 scrollbar-none">
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-2 rounded-[8px] font-sans font-medium text-[12px] leading-[16px] transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? "bg-[#000000] text-[#FFFFFF]"
                      : "bg-[#F5F5F5] text-[#525252] hover:bg-[#EBEBEB] hover:text-[#000000]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Controls: Search + Year Selectors + Grid/List Toggle */}
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-between lg:justify-end">
            {/* Search Input */}
            <div className="relative w-full sm:w-[240px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#A3A3A3]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search talks, cities..."
                className="w-full h-[32px] bg-[#FAFAFA] border border-[#E5E5E5] rounded-[4px] pl-8 pr-3 font-sans font-medium text-[12px] text-[#000000] placeholder-[#A3A3A3] focus:outline-none focus:border-[#000000] transition-colors"
              />
            </div>

            {/* Year Selector Pills */}
            <div className="flex items-center gap-1 p-1 bg-[#F5F5F5] rounded-[4px]">
              {YEARS.map((year) => {
                const isSelected = selectedYear === year;
                return (
                  <button
                    key={year}
                    type="button"
                    onClick={() => setSelectedYear(year)}
                    className={`px-2.5 py-1 rounded-[4px] font-sans font-medium text-[12px] leading-[16px] transition-all ${
                      isSelected
                        ? "bg-[#FFFFFF] text-[#000000] shadow-[0px_1px_2px_rgba(0,0,0,0.05)]"
                        : "text-[#737373] hover:text-[#000000]"
                    }`}
                  >
                    {year}
                  </button>
                );
              })}
            </div>

            {/* Grid / List View Switcher */}
            <div className="flex items-center gap-1 p-1 bg-[#F5F5F5] rounded-[4px]">
              <button
                type="button"
                onClick={() => setViewMode("list")}
                aria-label="List View"
                className={`p-1.5 rounded-[4px] transition-all ${
                  viewMode === "list"
                    ? "bg-[#FFFFFF] text-[#000000] shadow-[0px_1px_2px_rgba(0,0,0,0.05)]"
                    : "text-[#737373] hover:text-[#000000]"
                }`}
              >
                <List className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                aria-label="Grid View"
                className={`p-1.5 rounded-[4px] transition-all ${
                  viewMode === "grid"
                    ? "bg-[#FFFFFF] text-[#000000] shadow-[0px_1px_2px_rgba(0,0,0,0.05)]"
                    : "text-[#737373] hover:text-[#000000]"
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </section>

        {/* Section - Curated Featured Events Chronological Matrix */}
        <section aria-label="Chronological Events Matrix" className="space-y-4">
          {filteredEvents.length === 0 ? (
            <div className="bg-[#FFFFFF] border border-[#E5E5E5] rounded-[12px] p-12 text-center space-y-3">
              <p className="font-sans font-medium text-base text-[#404040]">No events found matching your criteria</p>
              <p className="text-sm text-[#737373]">Try resetting your search query or category filter</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("All Events");
                  setSelectedYear("2026");
                  setSearchQuery("");
                }}
                className="mt-2 inline-flex items-center px-4 py-2 bg-[#000000] text-white text-xs font-mono uppercase tracking-wider rounded"
              >
                Reset Filters
              </button>
            </div>
          ) : viewMode === "list" ? (
            /* LIST VIEW */
            <div className="flex flex-col gap-4">
              {filteredEvents.map((evt) => (
                <article
                  key={evt.id}
                  className="group relative bg-[#FFFFFF] border border-[#E5E5E5] hover:border-[#CCCCCC] rounded-[12px] p-6 sm:p-7 transition-all duration-300 hover:shadow-sm"
                >
                  <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">
                    {/* Vertical Border Date Block */}
                    <div className="flex lg:flex-col items-center lg:items-start justify-start gap-2 lg:gap-1 lg:pr-6 lg:border-r border-[#F5F5F5] min-w-[100px] shrink-0">
                      <span className="font-sans font-semibold text-[12px] leading-[16px] tracking-[0.6px] uppercase text-[#404040]">
                        {evt.month}
                      </span>
                      <span className="font-sans font-light text-[48px] sm:text-[60px] leading-[60px] tracking-[-3px] text-[#000000]">
                        {evt.day}
                      </span>
                      <span className="font-sans font-medium text-[12px] leading-[16px] text-[#A3A3A3]">
                        {evt.year}
                      </span>
                    </div>

                    {/* Image Column */}
                    <div className="relative w-full lg:w-[320px] h-[190px] sm:h-[220px] lg:h-[210px] bg-[#171717] border border-[#F5F5F5] rounded-[8px] overflow-hidden shrink-0">
                      <Image
                        src={evt.image}
                        alt={evt.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Narrative & Details Column */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        {/* Meta Tags */}
                        <div className="flex items-center gap-3">
                          <span className="font-sans font-semibold text-[12px] leading-[16px] text-[#404040]">
                            {evt.category}
                          </span>
                          <span className="font-sans font-normal text-[16px] text-[#D4D4D4] leading-none">/</span>
                          <span className="font-sans font-medium text-[12px] leading-[16px] text-[#737373]">
                            {evt.subCategory}
                          </span>
                        </div>

                        {/* Heading */}
                        <h3 className="font-sans font-light text-[22px] sm:text-[24px] leading-[32px] tracking-[-0.6px] text-[#000000] group-hover:text-black/80 transition-colors">
                          {evt.title}
                        </h3>

                        {/* Location / Meta */}
                        <div className="flex items-center gap-2 text-[#737373]">
                          <span className="w-2 h-2 rounded-full bg-[#000000] shrink-0" />
                          <span className="font-sans font-medium text-[12px] leading-[16px]">
                            {evt.timeLocation}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="font-sans font-normal text-[14px] leading-[23px] text-[#525252] pt-1">
                          {evt.description}
                        </p>
                      </div>

                      {/* Horizontal Border Row */}
                      <div className="pt-4 mt-4 border-t border-[#F5F5F5] flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => setIsDrawerOpen(true)}
                          className="inline-flex items-center gap-1.5 font-sans font-medium text-[12px] leading-[16px] text-[#000000] hover:text-[#525252] transition-colors"
                        >
                          <span>View event overview</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#000000]" />
                        </button>

                        <span className="font-sans font-medium text-[12px] leading-[16px] text-[#A3A3A3]">
                          {evt.cityTag}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* GRID VIEW */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredEvents.map((evt) => (
                <article
                  key={evt.id}
                  className="group bg-[#FFFFFF] border border-[#E5E5E5] hover:border-[#CCCCCC] rounded-[12px] p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-sm"
                >
                  <div className="space-y-4">
                    <div className="relative w-full h-[200px] bg-[#171717] rounded-[8px] overflow-hidden">
                      <Image
                        src={evt.image}
                        alt={evt.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded text-black font-mono text-[11px] font-semibold">
                        {evt.month} {evt.day}, {evt.year}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-sans font-semibold text-[12px] text-[#404040]">{evt.category}</span>
                      <span className="text-[#D4D4D4]">•</span>
                      <span className="font-sans font-medium text-[12px] text-[#737373]">{evt.subCategory}</span>
                    </div>

                    <h3 className="font-sans font-light text-[20px] leading-[28px] tracking-[-0.5px] text-[#000000]">
                      {evt.title}
                    </h3>

                    <p className="font-sans font-normal text-[13px] leading-[20px] text-[#525252]">
                      {evt.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-[#F5F5F5] flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setIsDrawerOpen(true)}
                      className="inline-flex items-center gap-1.5 font-sans font-medium text-[12px] text-[#000000] hover:text-[#525252]"
                    >
                      <span>View details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-sans font-medium text-[12px] text-[#A3A3A3]">{evt.cityTag}</span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Section - Pagination & Historical Archive Callout */}
        <section
          aria-label="Pagination and Historical Archive"
          className="pt-6 border-t border-[#E5E5E5] flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          {/* Pagination */}
          <div className="flex items-center gap-2">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                className={`w-[32px] h-[32px] rounded-[4px] font-sans font-medium text-[12px] flex items-center justify-center transition-colors ${
                  currentPage === page
                    ? "bg-[#000000] text-[#FFFFFF]"
                    : "bg-[#F5F5F5] text-[#404040] hover:bg-[#EBEBEB]"
                }`}
              >
                {page}
              </button>
            ))}
            <span className="font-sans font-medium text-[12px] text-[#A3A3A3] px-1">...</span>
            <button
              type="button"
              onClick={() => setCurrentPage(12)}
              className={`w-[32px] h-[32px] rounded-[4px] font-sans font-medium text-[12px] flex items-center justify-center transition-colors ${
                currentPage === 12
                  ? "bg-[#000000] text-[#FFFFFF]"
                  : "bg-[#F5F5F5] text-[#404040] hover:bg-[#EBEBEB]"
              }`}
            >
              12
            </button>
          </div>

          {/* Historical Archive Link */}
          <button
            type="button"
            onClick={() => setIsDrawerOpen(true)}
            className="inline-flex items-center gap-2 font-sans font-medium text-[12px] leading-[16px] text-[#525252] hover:text-[#000000] transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5 text-[#525252]" />
            <span>Access complete historical archive (2020 – 2025)</span>
          </button>
        </section>
      </div>
    </main>
  );
}
