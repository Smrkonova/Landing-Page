"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Clock,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  X,
  Share2,
  Check,
  Send,
  Sparkles
} from "lucide-react";
import ContactDrawer from "@/components/layout/ContactDrawer";

// Types
export interface Article {
  id: string;
  category: string;
  categoryPill: string;
  badge: string;
  subCategory: string;
  readTime: string;
  title: string;
  excerpt: string;
  content: string[];
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  date: string;
  image: string;
  featured?: boolean;
}

const FEATURED_ARTICLE: Article = {
  id: "featured-patient-monitors",
  category: "HEALTHCARE TECH",
  categoryPill: "HEALTHCARE",
  badge: "HEALTHCARE • 12 MIN READ",
  subCategory: "INTENSIVE CARE SYSTEMS",
  readTime: "12 MIN READ",
  title: "Designing Reliable Real-Time Patient Monitors for Intensive Care.",
  excerpt:
    "In busy hospital wards, clear screens help save lives. Here is how we designed responsive, zero-delay monitors that help doctors and nurses stay focused when every second counts.",
  content: [
    "In clinical environments where vital parameters fluctuate in milliseconds, latency is not an annoyance—it is a critical failure mode. When we partnered with intensive care clinical boards to overhaul bedside monitoring systems, our mandate was uncompromising: sub-16ms telemetry rendering, zero interface latency, and ambient cognitive load reduction.",
    "Traditional medical monitors often suffer from visual clutter: overlapping waveforms, ambiguous color coding, and alert fatigue caused by non-actionable alarms. Our engineering studio decoupled the telemetry ingestion pipeline from the UI thread using Rust WebAssembly workers, guaranteeing that electrocardiogram (ECG) and arterial blood pressure curves render at a locked 60 FPS without dropping frames even during burst telemetry events.",
    "From an ergonomic standpoint, we introduced high-contrast, peripheral-vision-friendly typography with calibrated chromatic contrast. Triage teams can ascertain patient stability from 15 feet away across a bustling ICU corridor without having to lean over the bed rail."
  ],
  author: {
    name: "Mohit Ravindran",
    role: "Lead Engineering Architect",
    avatar: "/images/about/people/people-1.png",
  },
  date: "14 FEB 2026",
  image: "/images/industries/healthcare/banner.jpg",
  featured: true,
};

const ARTICLES: Article[] = [
  {
    id: "card-1-modernizing-core-systems",
    category: "SOFTWARE ARCHITECTURE",
    categoryPill: "ENGINEERING",
    badge: "ENGINEERING • 6 MIN READ",
    subCategory: "BACKEND ARCHITECTURE",
    readTime: "6 MIN READ",
    title: "Modernizing Core Systems Without Interrupting Daily Business",
    excerpt:
      "How we safely migrated an essential payment network to modern cloud services while keeping every transaction…",
    content: [
      "Migrating high-throughput transactional backends while processing millions in daily GMV requires a surgeon's precision. We implemented the Strangler Fig architectural pattern, deploying an event-driven reverse proxy layer that gradually redirected traffic from legacy monolithic mainframes to decoupled, horizontally scalable Go microservices.",
      "Dual-write replication, automated reconciliation jobs, and zero-downtime database cutovers ensured that not a single payment record was dropped or duplicated throughout the 90-day deployment window."
    ],
    author: {
      name: "Elena Vance",
      role: "Principal Systems Engineer",
    },
    date: "28 JAN 2026",
    image: "/images/industries/system.png",
  },
  {
    id: "card-2-crafting-intuitive-wearables",
    category: "INDUSTRIAL HARDWARE",
    categoryPill: "IOT & HARDWARE",
    badge: "IOT & HARDWARE • 7 MIN READ",
    subCategory: "PRODUCT DESIGN",
    readTime: "7 MIN READ",
    title: "Crafting Intuitive Wearables for Emergency Response",
    excerpt:
      "Pairing simple physical buttons with connected apps to send instant emergency alerts when users need…",
    content: [
      "In personal safety emergencies, cognitive processing narrows drastically. Touchscreens and complex gesture menus become unreliable. For the Nazr hardware initiative, we engineered an ultra-compact Bluetooth Low Energy (BLE) peripheral with physical tactile feedback and dual-redundancy cellular fallback.",
      "A triple-click mechanical switch dispatches geolocation telemetry, triggers silent audio streaming, and notifies primary emergency contacts within 1.2 seconds of actuation."
    ],
    author: {
      name: "Aarav Mehta",
      role: "Senior IoT Product Designer",
    },
    date: "22 JAN 2026",
    image: "/images/projects/nazr.png",
  },
  {
    id: "card-3-building-fast-bug-free-web-apps",
    category: "SOFTWARE ARCHITECTURE",
    categoryPill: "FRONTEND CORE",
    badge: "FRONTEND CORE • 9 MIN READ",
    subCategory: "WEB PLATFORMS",
    readTime: "9 MIN READ",
    title: "Building Fast, Bug-Free Web Apps Across Multiple Teams",
    excerpt:
      "Practical steps to keep large web apps organized, snappy, and reliable as engineering teams scale and collaborate.",
    content: [
      "As engineering teams grow past 50 contributors, codebases tend to degrade unless structural guardrails are established. We share our battle-tested monorepo architecture utilizing Turborepo, micro-frontend module federation, and strict TypeScript boundaries.",
      "By isolating design tokens and automating end-to-end visual regression in CI/CD pipelines, release cycles decreased from bi-weekly releases to continuous, multi-deploy daily cadences."
    ],
    author: {
      name: "Devon Vance",
      role: "Frontend Platform Lead",
    },
    date: "19 JAN 2026",
    image: "/images/industries/manufacturing/banner.png",
  },
  {
    id: "card-4-connecting-cultural-heritage",
    category: "PRODUCT DESIGN & UI",
    categoryPill: "BRAND & DESIGN",
    badge: "BRAND & DESIGN • 5 MIN READ",
    subCategory: "BRAND IDENTITY",
    readTime: "5 MIN READ",
    title: "Connecting Cultural Heritage With Modern Brand Design",
    excerpt:
      "How we blended regional Indian patterns with clean, contemporary typography for a luxury hospitality identity.",
    content: [
      "Authenticity in brand design cannot be fabricated—it must be excavated. For Rayara Tamara, we researched traditional regional motifs, geometric temple stone carvings, and heirloom brassware, translating historical visual vernacular into modular vector design systems.",
      "The resulting brand ecosystem marries centuries of South Indian heritage with international typographic elegance, captivating both global connoisseurs and local patrons."
    ],
    author: {
      name: "Priya Nair",
      role: "Creative Director, Brand",
    },
    date: "15 JAN 2026",
    image: "/images/projects/rayara-tamara/Rectangle 44.png",
  },
  {
    id: "card-5-simplifying-hospital-software",
    category: "HEALTHCARE TECH",
    categoryPill: "HEALTHCARE UX",
    badge: "HEALTHCARE UX • 8 MIN READ",
    subCategory: "HEALTHCARE UX",
    readTime: "8 MIN READ",
    title: "Simplifying Hospital Software for Emergency Rooms",
    excerpt:
      "Cutting unnecessary clicks and streamlining check-in forms so triage teams can pull up patient records in less…",
    content: [
      "Emergency room triage nurses handle intense pressure while navigating cumbersome Electronic Health Record (EHR) software. Through in-situ hospital observation and cognitive walkthroughs, our design studio identified that 64% of screen interactions were redundant.",
      "We restructured the admission workflow into an adaptive single-screen pane that autocompletes insurance records, flags critical allergies instantly, and cuts triage intake time from 6 minutes down to 90 seconds."
    ],
    author: {
      name: "Rohan Sen",
      role: "Senior Healthcare UX Researcher",
    },
    date: "11 JAN 2026",
    image: "/images/industries/healthcare/1.png",
  },
  {
    id: "card-6-bringing-fluid-console-grade-3d",
    category: "SYSTEMS & RUST",
    categoryPill: "SPATIAL GRAPHICS",
    badge: "SPATIAL GRAPHICS • 10 MIN READ",
    subCategory: "3D GRAPHICS",
    readTime: "10 MIN READ",
    title: "Bringing Fluid, Console-Grade 3D Graphics to the Web",
    excerpt:
      "Practical optimization techniques for rendering detailed interactive 3D visuals smoothly inside any web browser.",
    content: [
      "Running complex 3D experiences at 60 FPS on mobile browsers requires ruthless optimization. In this technical deep dive, we break down our custom WebGL and WebGPU rendering pipeline: compute-shader-driven particle simulations, Level of Detail (LOD) mesh decimation, and texture compression via KTX2 and Basis Universal.",
      "Learn how we achieved console-fidelity interactive fidelity on the HiroGuild platform while keeping the initial bundle payload under 3.5 MB."
    ],
    author: {
      name: "Kavita Iyer",
      role: "WebGL & Spatial Graphics Engineer",
    },
    date: "06 JAN 2026",
    image: "/images/projects/heroguild.png",
  },
];

const CATEGORIES = [
  "ALL MANUSCRIPTS",
  "SOFTWARE ARCHITECTURE",
  "HEALTHCARE TECH",
  "PRODUCT DESIGN & UI",
  "SYSTEMS & RUST",
  "INDUSTRIAL HARDWARE",
];

export default function BlogContent() {
  const [selectedCategory, setSelectedCategory] = useState("ALL MANUSCRIPTS");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"latest" | "readTime">("latest");
  const [currentPage, setCurrentPage] = useState(1);
  const [isContactDrawerOpen, setIsContactDrawerOpen] = useState(false);
  const [readingArticle, setReadingArticle] = useState<Article | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) return;
    setNewsletterStatus("loading");
    setTimeout(() => {
      setNewsletterStatus("success");
      setNewsletterEmail("");
    }, 800);
  };

  const handleShare = (article: Article, e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof window !== "undefined") {
      navigator.clipboard?.writeText(window.location.href);
      setCopiedId(article.id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  // Filtered articles
  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      const matchesCategory =
        selectedCategory === "ALL MANUSCRIPTS" ||
        article.category.toUpperCase() === selectedCategory.toUpperCase();

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.subCategory.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query) ||
        article.author.name.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortOrder === "readTime") {
        return parseInt(a.readTime) - parseInt(b.readTime);
      }
      return 0; // Default order is curated chronological
    });
  }, [selectedCategory, searchQuery, sortOrder]);

  return (
    <div className="w-full bg-[#FFFFFF] text-[#111827] font-sans antialiased selection:bg-[#111827] selection:text-white pt-20 md:pt-24">
      {/* 
        ========================================================================
        SECTION 1: EDITORIAL HEADER
        ========================================================================
      */}
      <section className="w-full border-b border-[#F3F4F6] bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 pt-12 md:pt-16 pb-12 flex flex-col items-start gap-8">
          {/* Metadata tag */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono uppercase tracking-wider bg-[#F3F4F6] text-[#4B5563] border border-[#E5E7EB]">
              <Sparkles className="w-3 h-3 text-[#111827]" />
              SMRKONOVA JOURNAL
            </span>
            <span className="text-[12px] font-mono text-[#9CA3AF] uppercase">
              • PERSPECTIVES &amp; DISPATCHES
            </span>
          </div>

          {/* Main Headline & Description */}
          <div className="flex flex-col items-start gap-4 max-w-[896px]">
            <h1 className="font-sans font-normal text-[42px] sm:text-[52px] lg:text-[60px] leading-[1] tracking-[-1.5px] text-[#111827]">
              Blogs
            </h1>
            <p className="font-sans font-normal text-[17px] sm:text-[20px] leading-[28px] text-[#6B7280] max-w-[672px]">
              Engineering dispatches, architectural insights, and strategic perspectives from the Smrkonova engineering &amp; design studios.
            </p>
          </div>

          {/* Search & Filter Controls */}
          <div className="w-full pt-6 border-t border-[#F3F4F6] flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full lg:w-[271px] shrink-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-[13.5px] h-[13.5px] text-[#9CA3AF] pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search telemetry, flutter, rust, protocol..."
                className="w-full h-[33px] bg-[#F9FAFB] border border-[#E5E7EB] rounded-[6px] pl-9 pr-3 text-[12px] leading-[15px] text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#111827] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#111827]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 w-full lg:w-auto">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setCurrentPage(1);
                    }}
                    className={`h-[30px] px-3.5 py-1.5 rounded-full text-[12px] font-sans font-normal uppercase tracking-[0.6px] leading-[16px] whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-[#111827] text-white border border-[#111827] shadow-xs"
                        : "bg-white text-[#4B5563] border border-[#E5E7EB] hover:border-[#111827] hover:text-[#111827]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 2: LEAD FEATURED ARTICLE
        ========================================================================
      */}
      <section className="w-full bg-white py-12">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">
          <article
            onClick={() => setReadingArticle(FEATURED_ARTICLE)}
            className="w-full bg-[#FFFFFF] border border-[#E5E7EB] rounded-[12px] overflow-hidden flex flex-col lg:flex-row min-h-[462px] shadow-xs hover:shadow-md transition-all duration-300 group cursor-pointer"
          >
            {/* Featured Visual */}
            <div className="relative w-full lg:w-[58.3%] h-[260px] sm:h-[340px] lg:h-[462px] bg-[#F3F4F6] overflow-hidden">
              <Image
                src={FEATURED_ARTICLE.image}
                alt={FEATURED_ARTICLE.title}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />
            </div>

            {/* Content Narrative */}
            <div className="w-full lg:w-[41.7%] p-6 sm:p-10 lg:p-12 flex flex-col justify-between gap-6 bg-white">
              <div className="flex flex-col gap-4">
                {/* Tag & Read Time */}
                <div className="flex items-center gap-3">
                  <span className="bg-[#F3F4F6] text-[#374151] px-2.5 py-0.5 rounded-[4px] text-[12px] leading-[16px] font-sans uppercase font-normal tracking-wide">
                    {FEATURED_ARTICLE.categoryPill}
                  </span>
                  <div className="flex items-center gap-1 text-[#9CA3AF] text-[12px] leading-[16px]">
                    <Clock className="w-[11px] h-[11px]" />
                    <span className="font-mono">{FEATURED_ARTICLE.readTime}</span>
                  </div>
                </div>

                {/* Heading 2 */}
                <h2 className="font-sans font-normal text-[24px] sm:text-[28px] lg:text-[30px] leading-[36px] tracking-[-0.75px] text-[#111827] group-hover:text-black transition-colors">
                  {FEATURED_ARTICLE.title}
                </h2>

                {/* Excerpt */}
                <p className="font-sans font-normal text-[15px] sm:text-[16px] leading-[24px] text-[#6B7280]">
                  {FEATURED_ARTICLE.excerpt}
                </p>
              </div>

              {/* Author & Action Link Bar */}
              <div className="pt-6 border-t border-[#F3F4F6] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-[36px] h-[36px] rounded-full bg-[#F3F4F6] border border-[#E5E7EB] overflow-hidden flex items-center justify-center relative shrink-0">
                    <span className="font-mono font-bold text-[12px] text-[#111827]">MR</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans font-medium text-[14px] leading-[14px] text-[#111827]">
                      {FEATURED_ARTICLE.author.name}
                    </span>
                    <span className="font-sans font-normal text-[12px] leading-[15px] text-[#9CA3AF] mt-1 font-mono">
                      {FEATURED_ARTICLE.date}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => handleShare(FEATURED_ARTICLE, e)}
                    className="w-[32px] h-[32px] rounded-full border border-[#E5E7EB] flex items-center justify-center text-[#6B7280] hover:border-[#111827] hover:text-[#111827] transition-all"
                    title="Share link"
                  >
                    {copiedId === FEATURED_ARTICLE.id ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Share2 className="w-3.5 h-3.5" />
                    )}
                  </button>
                  <div className="w-[32px] h-[32px] rounded-full border border-[#D1D5DB] flex items-center justify-center text-[#1F2937] group-hover:bg-[#111827] group-hover:text-white group-hover:border-[#111827] transition-all duration-300">
                    <ArrowUpRight className="w-[14px] h-[14px]" />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 3: ARTICLE GRID
        ========================================================================
      */}
      <section className="w-full bg-white py-10">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">
          {/* Section Header */}
          <div className="w-full pb-3 border-b border-[#E5E7EB] flex items-center justify-between">
            <h3 className="font-sans font-normal text-[20px] sm:text-[24px] leading-[32px] text-[#111827]">
              {selectedCategory === "ALL MANUSCRIPTS" ? "All Articles" : selectedCategory}
              <span className="ml-2 text-xs font-mono text-[#9CA3AF]">
                ({filteredArticles.length})
              </span>
            </h3>

            <div className="flex items-center gap-2 text-[12px] leading-[16px]">
              <span className="font-medium text-[#6B7280]">SORT BY:</span>
              <button
                onClick={() => setSortOrder(prev => prev === "latest" ? "readTime" : "latest")}
                className="font-medium text-[#111827] underline hover:text-black cursor-pointer uppercase transition-colors"
              >
                {sortOrder === "latest" ? "RELEVANCE (LATEST)" : "READ TIME"}
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          {filteredArticles.length === 0 ? (
            <div className="py-24 text-center flex flex-col items-center justify-center gap-3">
              <p className="text-base text-[#6B7280]">No manuscripts matched your search criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory("ALL MANUSCRIPTS");
                  setSearchQuery("");
                }}
                className="text-xs font-mono uppercase underline text-[#111827] hover:text-black"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  onClick={() => setReadingArticle(article)}
                  className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-[8px] overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 group cursor-pointer min-h-[439px]"
                >
                  {/* Top Portion: Image & Body */}
                  <div className="flex flex-col">
                    {/* Visual Container */}
                    <div className="relative w-full h-[208px] bg-[#F3F4F6] overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />

                      {/* Floating Badge */}
                      <div className="absolute left-3 top-3 bg-white/95 border border-[#E5E7EB] backdrop-blur-[2px] rounded-[4px] px-2 py-0.5 z-10 shadow-xs">
                        <span className="font-sans font-normal text-[11px] sm:text-[12px] leading-[15px] uppercase text-[#374151]">
                          {article.badge}
                        </span>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-5 flex flex-col gap-2.5">
                      {/* Category row */}
                      <div className="flex items-center justify-between text-[12px] leading-[16px] text-[#6B7280]">
                        <span className="font-sans font-normal uppercase tracking-wide">
                          {article.subCategory}
                        </span>
                        <div className="w-[8.67px] h-[8.67px] rounded-full bg-[#9CA3AF]/60" />
                      </div>

                      {/* Title */}
                      <h4 className="font-sans font-normal text-[16px] leading-[22px] text-[#111827] group-hover:text-black transition-colors line-clamp-2">
                        {article.title}
                      </h4>

                      {/* Excerpt */}
                      <p className="font-sans font-normal text-[12px] leading-[20px] text-[#6B7280] line-clamp-2">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Portion: Author & Date Footer */}
                  <div className="px-5 py-3 border-t border-[#F3F4F6] flex items-center justify-between bg-white">
                    <div className="flex items-center gap-2.5">
                      <div className="w-[24px] h-[24px] rounded-full bg-[#F3F4F6] border border-[#E5E7EB] flex items-center justify-center font-mono text-[10px] font-bold text-[#111827] overflow-hidden">
                        {article.author.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-sans font-normal text-[12px] leading-[12px] text-[#111827]">
                          {article.author.name}
                        </span>
                        <span className="font-sans font-normal text-[11px] sm:text-[12px] leading-[15px] text-[#9CA3AF] font-mono mt-0.5">
                          {article.date}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={(e) => handleShare(article, e)}
                      className="text-[#9CA3AF] hover:text-[#111827] p-1 transition-colors"
                      title="Share link"
                    >
                      {copiedId === article.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Share2 className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 4: MINIMAL NEWSLETTER CALLOUT
        ========================================================================
      */}
      <section className="w-full bg-white py-12">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">
          <div className="w-full bg-[#F9FAFB]/70 border border-[#E5E7EB] rounded-[12px] p-6 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            {/* Left Content */}
            <div className="flex flex-col gap-3 max-w-[576px]">
              <h3 className="font-sans font-normal text-[26px] sm:text-[30px] leading-[36px] tracking-[-0.75px] text-[#111827]">
                Subscribe to our blog
              </h3>
              <p className="font-sans font-normal text-[15px] sm:text-[16px] leading-[24px] text-[#4B5563]">
                Get our latest architectural breakdowns, engineering postmortems, and digital design insights delivered straight to your inbox every two weeks.
              </p>
            </div>

            {/* Right Form */}
            <div className="w-full lg:w-[500.5px] flex flex-col gap-2.5">
              {newsletterStatus === "success" ? (
                <div className="h-[38px] flex items-center gap-2 px-3 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-[4px] text-xs font-mono">
                  <Check className="w-4 h-4" />
                  Thank you! You are now subscribed to the Smrkonova Journal.
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row items-stretch gap-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="h-[38px] flex-1 bg-[#FFFFFF] border border-[#E5E7EB] rounded-[4px] px-3.5 text-[12px] leading-[15px] text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#111827] transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={newsletterStatus === "loading"}
                    className="h-[38px] px-5 bg-[#111827] hover:bg-black text-white rounded-[4px] text-[12px] leading-[16px] font-semibold flex items-center justify-center tracking-wide transition-colors whitespace-nowrap cursor-pointer"
                  >
                    {newsletterStatus === "loading" ? "Subscribing..." : "Subscribe"}
                  </button>
                </form>
              )}
              <span className="font-sans font-normal text-[10px] leading-[15px] uppercase text-[#9CA3AF] tracking-wide">
                BY SUBSCRIBING YOU ACCEPT SMRKONOVA DATA TERMS AND CONDITIONS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 5: PAGINATION CONTROL STRIP
        ========================================================================
      */}
      <section className="w-full bg-white py-8">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">
          <div className="w-full pt-6 border-t border-[#E5E7EB] flex items-center justify-between flex-wrap gap-4">
            {/* Previous Button */}
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="h-[30px] px-3 border border-[#E5E7EB] rounded-[4px] flex items-center gap-1.5 text-[12px] leading-[16px] font-normal uppercase text-[#4B5563] hover:bg-[#F9FAFB] hover:text-[#111827] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-[10px] h-[10px] text-[#4B5563]" />
              PREVIOUS
            </button>

            {/* Page Buttons */}
            <div className="flex items-center gap-1">
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-[32px] h-[32px] rounded-[4px] font-mono text-[12px] leading-[16px] flex items-center justify-center transition-all ${
                    currentPage === page
                      ? "bg-[#111827] text-white border border-[#111827]"
                      : "bg-white text-[#4B5563] border border-[#E5E7EB] hover:bg-[#F9FAFB]"
                  }`}
                >
                  {page}
                </button>
              ))}

              <span className="w-[32px] h-[32px] flex items-center justify-center font-mono text-[12px] text-[#9CA3AF]">
                ...
              </span>

              {[8, 9, 14].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-[32px] h-[32px] rounded-[4px] font-mono text-[12px] leading-[16px] flex items-center justify-center transition-all ${
                    currentPage === page
                      ? "bg-[#111827] text-white border border-[#111827]"
                      : "bg-white text-[#4B5563] border border-[#E5E7EB] hover:bg-[#F9FAFB]"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={() => setCurrentPage((p) => p + 1)}
              className="h-[30px] px-3 border border-[#E5E7EB] rounded-[4px] flex items-center gap-1.5 text-[12px] leading-[16px] font-normal uppercase text-[#4B5563] hover:bg-[#F9FAFB] hover:text-[#111827] transition-colors"
            >
              NEXT
              <ChevronRight className="w-[10px] h-[10px] text-[#4B5563]" />
            </button>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 6: CONVERSION CALL TO ACTION
        ========================================================================
      */}
      <section className="w-full bg-[#F9FAFB]/50 border-t border-[#E5E7EB] py-16 md:py-20">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">
          <div className="max-w-[896px] mx-auto flex flex-col items-center text-center gap-6">
            {/* Pill */}
            <div className="bg-white border border-[#E5E7EB] rounded-full px-3 py-1 shadow-xs">
              <span className="font-sans font-normal text-[12px] leading-[15px] uppercase tracking-[0.5px] text-[#4B5563]">
                READY TO ARCHITECT SOMETHING MONUMENTAL?
              </span>
            </div>

            {/* Heading 2 */}
            <h2 className="font-sans font-normal text-[36px] sm:text-[44px] lg:text-[48px] leading-[1.05] tracking-[-1.2px] text-[#111827] max-w-[818px]">
              Let&apos;s engineer your next digital breakthrough.
            </h2>

            {/* Text */}
            <p className="font-sans font-normal text-[16px] sm:text-[18px] leading-[28px] text-[#6B7280] max-w-[672px]">
              From high-reliability enterprise platforms to immersive consumer experiences, our cross-disciplinary studios turn complex technical challenges into competitive advantages.
            </p>

            {/* Links / Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => setIsContactDrawerOpen(true)}
                className="w-full sm:w-auto h-[38px] px-6 bg-[#111827] hover:bg-black text-white rounded-[4px] text-[12px] leading-[16px] font-medium uppercase tracking-[0.6px] flex items-center justify-center transition-colors shadow-xs cursor-pointer"
              >
                SCHEDULE STUDIO DISCOVERY
              </button>

              <Link
                href="/projects"
                className="w-full sm:w-auto h-[38px] px-6 bg-white hover:bg-[#F9FAFB] text-[#374151] border border-[#E5E7EB] rounded-[4px] text-[12px] leading-[16px] font-medium uppercase tracking-[0.6px] flex items-center justify-center transition-colors shadow-xs"
              >
                INSPECT CASE STUDIES [08]
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        INTERACTIVE READING MODAL FOR ARTICLES
        ========================================================================
      */}
      <AnimatePresence>
        {readingArticle && (
          <div className="fixed inset-0 z-[1050] flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setReadingArticle(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Sheet */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-[840px] max-h-[90vh] bg-white rounded-[16px] shadow-2xl border border-[#E5E7EB] overflow-hidden flex flex-col z-10"
            >
              {/* Header bar */}
              <div className="p-4 sm:p-6 border-b border-[#F3F4F6] flex items-center justify-between bg-white/90 backdrop-blur-md sticky top-0 z-10">
                <div className="flex items-center gap-2 text-xs font-mono text-[#6B7280]">
                  <span className="uppercase text-[#111827] font-semibold">
                    {readingArticle.subCategory}
                  </span>
                  <span>•</span>
                  <span>{readingArticle.readTime}</span>
                </div>
                <button
                  onClick={() => setReadingArticle(null)}
                  className="w-8 h-8 rounded-full bg-[#F3F4F6] hover:bg-[#E5E7EB] flex items-center justify-center text-[#111827] transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto p-6 sm:p-10 flex flex-col gap-6">
                {/* Hero Image */}
                <div className="relative w-full h-[260px] sm:h-[340px] rounded-[12px] overflow-hidden bg-[#F3F4F6]">
                  <Image
                    src={readingArticle.image}
                    alt={readingArticle.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Article Header */}
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#9CA3AF]">
                    PUBLISHED ON {readingArticle.date}
                  </span>
                  <h1 className="font-sans font-normal text-2xl sm:text-3xl lg:text-4xl leading-tight text-[#111827]">
                    {readingArticle.title}
                  </h1>
                </div>

                {/* Author Info */}
                <div className="py-4 border-y border-[#F3F4F6] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#111827] text-white flex items-center justify-center font-mono font-bold text-xs">
                      {readingArticle.author.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[#111827]">
                        {readingArticle.author.name}
                      </div>
                      <div className="text-xs text-[#6B7280]">
                        {readingArticle.author.role}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={(e) => handleShare(readingArticle, e)}
                    className="flex items-center gap-1.5 px-3 py-1.5 border border-[#E5E7EB] rounded-full text-xs font-mono uppercase text-[#374151] hover:bg-[#F9FAFB]"
                  >
                    {copiedId === readingArticle.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Share2 className="w-3.5 h-3.5" />
                        Share
                      </>
                    )}
                  </button>
                </div>

                {/* Body Paragraphs */}
                <div className="flex flex-col gap-5 text-[#374151] text-base leading-relaxed font-sans">
                  {readingArticle.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {/* Callout Box */}
                <div className="p-6 bg-[#F9FAFB] rounded-[12px] border border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
                  <div>
                    <h5 className="font-medium text-sm text-[#111827]">
                      Need custom architecture for your organization?
                    </h5>
                    <p className="text-xs text-[#6B7280] mt-1">
                      Our engineers design and ship production-grade platforms worldwide.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setReadingArticle(null);
                      setIsContactDrawerOpen(true);
                    }}
                    className="px-4 py-2 bg-[#111827] text-white rounded-[4px] text-xs font-medium uppercase tracking-wider hover:bg-black whitespace-nowrap cursor-pointer"
                  >
                    TALK TO OUR TEAM
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Global Contact Drawer */}
      <ContactDrawer
        isOpen={isContactDrawerOpen}
        onClose={() => setIsContactDrawerOpen(false)}
      />
    </div>
  );
}
