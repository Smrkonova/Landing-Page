"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Share2,
  Calendar,
  MapPin,
  Users,
  Check,
  ArrowUpRight,
  Sparkles,
  Radio,
  ExternalLink
} from "lucide-react";
import ContactDrawer from "@/components/layout/ContactDrawer";

const GALLERY_ITEMS = [
  {
    id: "mainstage",
    label: "MAINSTAGE",
    title: "Mainstage Plenary Presentation",
    subtitle:
      "Addressing 2,200+ healthcare delegates on real-time deterministic computing and low-latency critical care telemetry.",
    image: "/images/industries/healthcare/banner.jpg",
  },
  {
    id: "telemetry",
    label: "TELEMETRY",
    title: "Zero-Latency Bedside Telemetry Suite",
    subtitle:
      "Live demonstration of multi-parameter clinical monitors transmitting 12-lead waveforms with zero packet degradation.",
    image: "/images/industries/healthcare/1.png",
  },
  {
    id: "intensive-care",
    label: "INTENSIVE CARE",
    title: "ICU Telemetry Central Command",
    subtitle:
      "Deterministic alert routing console triaging critical hemodynamic fluctuations across 64 simulated ICU beds.",
    image: "/images/industries/healthcare/2.png",
  },
  {
    id: "workstations",
    label: "WORKSTATIONS",
    title: "Clinical Cockpit & Tactile Consoles",
    subtitle:
      "Evaluating physical rotary encoder interfaces designed to replace brittle glass touchscreens in sterile operating suites.",
    image: "/images/industries/healthcare/3.png",
  },
  {
    id: "bio-engineers",
    label: "BIO-ENGINEERS",
    title: "Biomedical Engineering Breakout Lab",
    subtitle:
      "In-depth workshop on WebAssembly memory buffers and deterministic event handling in hospital network fabrics.",
    image: "/images/industries/healthcare/4.png",
  },
  {
    id: "keynote-lab",
    label: "KEYNOTE LAB",
    title: "Tactile Firmware Demonstrator",
    subtitle:
      "Interactive hardware-in-the-loop sandbox stress-testing simulated sensor failover and micro-millisecond telemetry.",
    image: "/images/industries/healthcare/5.png",
  },
];

const RELATED_EVENTS = [
  {
    id: "healthtech-2026",
    badge: "HEALTHCARE",
    badgeColor: "bg-[#FF5E36]",
    dateTag: "APR 2026",
    subCategory: "PLENARY TALK",
    title: "Global HealthTech Innovation Forum 2026",
    description:
      "Architectural plenary presenting zero-leak CRDT state synchronization across distributed hospital records and edge telemetry nodes.",
    city: "KOCHI, IN",
    image: "/images/industries/healthcare/6.png",
    link: "/events",
  },
  {
    id: "webgl-spatial",
    badge: "SPATIAL TECH",
    badgeColor: "bg-[#00D2DF]",
    dateTag: "FEB 2026",
    subCategory: "SYMPOSIUM",
    title: "WebGL & Spatial Computing World Congress",
    description:
      "Dissecting hardware-accelerated canvas pipelines and zero-allocation WebAssembly primitives for micro-millisecond clinical renders.",
    city: "GLOBAL LIVE",
    image: "/uiux.png",
    link: "/events",
  },
  {
    id: "bangalore-tech",
    badge: "SYSTEMS",
    badgeColor: "bg-[#FF5E36]",
    dateTag: "JAN 2026",
    subCategory: "CONFERENCE",
    title: "Bangalore Tech Summit & Systems Conclave",
    description:
      "Evaluating sub-millisecond network topologies, fault-tolerant telemetry runtimes, and tactical hardware encoders for critical life-support nodes.",
    city: "BANGALORE, IN",
    image: "/software.png",
    link: "/events",
  },
];

export default function HospexEventDetailPage() {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const activePhoto = GALLERY_ITEMS[activeGalleryIndex];

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <main className="relative w-full bg-[#FFFFFF] text-[#0B0C0E] font-sans selection:bg-[#000000] selection:text-[#FFFFFF] overflow-x-hidden pt-24 sm:pt-28 pb-20">
      <ContactDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      {/* Atmospheric Ambient Glow Elements (Figma specs: Ellipse 20 & Gradient+Blur) */}
      <div
        className="absolute pointer-events-none -z-10 right-[2%] top-[112px] w-[350px] sm:w-[475px] h-[350px] sm:h-[444px] rounded-full blur-[106px] opacity-70"
        style={{
          background:
            "conic-gradient(from 175.13deg at 50% 50%, #126EE3 -107.31deg, #4DB4B1 126.35deg, #126EE3 252.69deg, #4DB4B1 486.35deg)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute pointer-events-none -z-10 left-0 top-[384px] w-[380px] sm:w-[550px] h-[380px] sm:h-[550px] rounded-full blur-[32px] opacity-60"
        style={{
          background:
            "radial-gradient(92.2% 92.2% at 30% 60%, rgba(0, 240, 255, 0.18) 0%, rgba(99, 102, 241, 0.06) 40%, rgba(99, 102, 241, 0) 75%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-16">
        {/* Section - Sub-Navigation & Breadcrumbs Bar */}
        <div className="pt-6 pb-8">
          <Link
            href="/events"
            className="group inline-flex items-center gap-2 text-[#646A74] hover:text-[#0B0C0E] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="font-sans font-semibold text-[12px] leading-[16px] tracking-[2.16px] uppercase">
              All Events
            </span>
          </Link>
        </div>

        {/* Section - Hero & Executive Keynote Header */}
        <section className="pb-12 max-w-[960px]">
          <h1 className="font-sans font-light text-[34px] sm:text-[48px] md:text-[56px] lg:text-[60px] leading-[1.1] md:leading-[72px] tracking-[-2px] md:tracking-[-2.52px] uppercase text-[#0B0C0E]">
            HOSPEX 2026: ARCHITECTURE OF CRITICAL CARE &amp; HOSPITAL SYSTEMS
          </h1>

          <p className="mt-6 font-sans font-normal text-lg sm:text-[20px] leading-[28px] text-[#646A74] max-w-[768px]">
            SMRKONOVA mainstage plenary detailing sub-millisecond ICU telemetry architectures, fail-safe clinical distributed systems, and reducing cognitive saturation across critical hospital operations.
          </p>

          {/* CTA Cluster */}
          <div className="mt-8 flex items-center gap-4">
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-2.5 px-5 py-3 bg-[#FFFFFF] border border-[#E4E7EC] hover:border-[#CBD5E1] rounded-[4px] shadow-sm transition-all font-sans font-semibold text-[12px] leading-[16px] tracking-[1.92px] uppercase text-[#646A74] hover:text-[#0B0C0E]"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-600">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-[#646A74]" />
                  <span>Share Article</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => setIsDrawerOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#0B0C0E] text-white hover:bg-[#222] rounded-[4px] shadow-sm transition-all font-sans font-semibold text-[12px] leading-[16px] tracking-[1.5px] uppercase"
            >
              <span>Connect with Team</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </section>

        {/* Section - Editorial Narrative & Mainstage Presentation */}
        <section className="space-y-12 pb-16">
          {/* Lead Image Frame with Architectural Treatment */}
          <div className="relative w-full h-[320px] sm:h-[420px] md:h-[502px] bg-[#171717] border border-[#E5E5E5]/80 rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden">
            <Image
              src="/images/industries/healthcare/banner.jpg"
              alt="Hospex 2026 Mainstage Plenary Presentation"
              fill
              priority
              className="object-cover object-center"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10"
              aria-hidden="true"
            />

            {/* Live presentation status badge */}
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-10 flex items-center gap-2.5 bg-black/60 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full">
              <span className="w-2.5 h-2.5 rounded-full bg-[#34D399] animate-pulse" />
              <span className="font-sans font-medium text-[12px] leading-[16px] tracking-[0.6px] uppercase text-white">
                Mainstage Presentation • Kochi 2026
              </span>
            </div>
          </div>

          {/* Section - Structured Metadata Bento Matrix with Glowing Accents */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Bento Card 1: Date & Time */}
            <div className="relative bg-[#FFFFFF] border border-[#E4E7EC]/80 rounded-[8px] p-6 shadow-sm overflow-hidden flex flex-col justify-between">
              <div
                className="absolute -right-8 -top-8 w-28 h-28 bg-[#FED7AA]/30 rounded-full blur-[12px] pointer-events-none"
                aria-hidden="true"
              />
              <div className="flex items-center justify-between pb-3">
                <span className="font-sans font-semibold text-[11px] leading-[16px] tracking-[1.98px] uppercase text-[#646A74]">
                  Date &amp; Time
                </span>
                <Calendar className="w-3.5 h-3.5 text-[#0B0C0E]" />
              </div>
              <div className="space-y-1">
                <h3 className="font-sans font-normal text-[18px] leading-[28px] text-[#0B0C0E]">
                  April 24–26, 2026
                </h3>
                <p className="font-sans font-normal text-[12px] leading-[16px] text-[#646A74]">
                  Plenary: 10:30 AM – 11:15 AM IST
                </p>
              </div>
            </div>

            {/* Bento Card 2: Assembly Node */}
            <div className="relative bg-[#FFFFFF] border border-[#E4E7EC]/80 rounded-[8px] p-6 shadow-sm overflow-hidden flex flex-col justify-between">
              <div
                className="absolute -right-8 -top-8 w-28 h-28 bg-[#A5F3FC]/30 rounded-full blur-[12px] pointer-events-none"
                aria-hidden="true"
              />
              <div className="flex items-center justify-between pb-3">
                <span className="font-sans font-semibold text-[11px] leading-[16px] tracking-[1.98px] uppercase text-[#646A74]">
                  Assembly Node
                </span>
                <MapPin className="w-3.5 h-3.5 text-[#0B0C0E]" />
              </div>
              <div className="space-y-1">
                <h3 className="font-sans font-normal text-[18px] leading-[28px] text-[#0B0C0E]">
                  Lulu Bolgatty ICC
                </h3>
                <p className="font-sans font-normal text-[12px] leading-[16px] text-[#646A74]">
                  Grand Hyatt Waterfront, Kochi
                </p>
              </div>
            </div>

            {/* Bento Card 3: Scope */}
            <div className="relative bg-[#FFFFFF] border border-[#E4E7EC]/80 rounded-[8px] p-6 shadow-sm overflow-hidden flex flex-col justify-between">
              <div
                className="absolute -right-8 -top-8 w-28 h-28 bg-[#FED7AA]/30 rounded-full blur-[12px] pointer-events-none"
                aria-hidden="true"
              />
              <div className="flex items-center justify-between pb-3">
                <span className="font-sans font-semibold text-[11px] leading-[16px] tracking-[1.98px] uppercase text-[#646A74]">
                  Scope &amp; Audience
                </span>
                <Users className="w-3.5 h-3.5 text-[#0B0C0E]" />
              </div>
              <div className="space-y-1">
                <h3 className="font-sans font-normal text-[18px] leading-[28px] text-[#0B0C0E]">
                  2,200+ Clinicians &amp; Execs
                </h3>
                <p className="font-sans font-normal text-[12px] leading-[16px] text-[#646A74]">
                  Directors, Bio-Engineers &amp; CDOs
                </p>
              </div>
            </div>
          </div>

          {/* Editorial Body Text */}
          <div className="max-w-[992px] space-y-8 pt-6">
            <h2 className="font-sans font-medium text-[20px] sm:text-[24px] leading-[32px] tracking-[-0.6px] text-[#0B0C0E]">
              Tertiary hospital environments across the globe operate under an unprecedented burden of hardware fragmentation and acoustic cacophony. At Hospex 2026, SMRKONOVA presented an architectural doctrine demonstrating how deterministic computational systems and low-latency micro-frontends can fundamentally resolve cognitive saturation across acute care wards.
            </h2>

            <p className="font-sans font-normal text-base sm:text-[18px] leading-[28px] text-[#646A74]">
              The keynote unpacked our production deployment of WebAssembly-based rendering pipelines capable of rendering 12-lead ECG, SpO2 waveforms, and arterial blood pressures with millisecond-exact phase alignment. By eliminating the volatile browser event loops typically found in modern hospital UI stacks, telemetry interfaces achieve deterministic framerates regardless of background network jitter or server lag.
            </p>

            {/* SMRKONOVA Pullquote Card with Soft Ambient Mesh Glow */}
            <div className="relative bg-[#FAFAFA] border-l-2 border-[#0B0C0E] rounded-r-[8px] p-6 sm:p-8 space-y-2">
              <p className="font-sans font-normal text-base sm:text-[18px] leading-[28px] text-[#646A74] italic">
                “A critical focus was auditory and visual de-escalation: counteracting alarm fatigue by algorithmically segregating sensory triggers. Non-critical anomalies degrade gracefully into ambient visual pulses, reserving piercing auditory signals strictly for hemodynamic collapse events. In parallel, physical tactile encoder consoles replace brittle glass touchscreens, allowing gloved clinicians to administer life-saving titrations purely via muscle memory during emergencies.”
              </p>
            </div>
          </div>

          {/* Article Meta Footer */}
          <div className="pt-6 border-t border-[#E4E7EC] flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-sans font-semibold text-[12px] leading-[16px] tracking-[2.16px] uppercase text-[#646A74] mr-2">
                Topics &amp; Tech
              </span>
              <span className="px-3 py-1 bg-[#F8F9FA] border border-[#E4E7EC] rounded-[4px] font-sans font-medium text-[12px] leading-[16px] text-[#0B0C0E]">
                CRITICAL CARE
              </span>
              <span className="px-3 py-1 bg-[#F8F9FA] border border-[#E4E7EC] rounded-[4px] font-sans font-medium text-[12px] leading-[16px] text-[#0B0C0E]">
                HOSPITAL OS
              </span>
              <span className="px-3 py-1 bg-[#F8F9FA] border border-[#E4E7EC] rounded-[4px] font-sans font-medium text-[12px] leading-[16px] text-[#0B0C0E]">
                WEBASSEMBLY
              </span>
            </div>

            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 font-sans font-bold text-[12px] leading-[16px] tracking-[1.92px] uppercase text-[#0B0C0E] hover:text-[#646A74] transition-colors"
            >
              <Share2 className="w-3.5 h-3.5 text-[#0B0C0E]" />
              <span>Share Keynote</span>
            </button>
          </div>
        </section>

        {/* Section - Event Showcase Gallery with Ambient Glowing Aura */}
        <section
          aria-label="Event Showcase Gallery"
          className="relative bg-[#F8F9FA] border-y border-[#E4E7EC]/80 -mx-6 sm:-mx-12 lg:-mx-16 px-6 sm:px-12 lg:px-16 py-16 md:py-20 overflow-hidden"
        >
          {/* Subtle Glow behind gallery grid */}
          <div
            className="absolute -right-10 top-20 w-[450px] h-[450px] rounded-full blur-[32px] opacity-40 pointer-events-none"
            style={{
              background:
                "radial-gradient(91.92% 91.92% at 65% 35%, rgba(255, 138, 76, 0.22) 0%, rgba(255, 87, 51, 0.08) 35%, rgba(255, 87, 51, 0) 70%)",
            }}
            aria-hidden="true"
          />

          <div className="max-w-[1280px] mx-auto space-y-10">
            {/* Section Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <span className="font-sans font-bold text-[12px] leading-[16px] tracking-[2.88px] uppercase text-[#404040]">
                  Gallery
                </span>
                <h2 className="mt-2 font-sans font-light text-[32px] sm:text-[42px] md:text-[48px] leading-[1.05] text-[#0B0C0E]">
                  EVENT GALLERY &amp; CAPTURED MOMENTS
                </h2>
              </div>
              <p className="max-w-[448px] font-sans font-normal text-[14px] leading-[20px] text-[#646A74]">
                High-resolution captures from the Hospex 2026 mainstage address, technical architectural breakout sessions, and live bedside telemetry demonstrator suites.
              </p>
            </div>

            {/* Master / Detail Interactive Photo Gallery */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Large Master Preview Display */}
              <div className="lg:col-span-8 relative min-h-[380px] sm:min-h-[480px] bg-[#171717] border border-[#E4E7EC] rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col justify-end">
                <Image
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  fill
                  className="object-cover object-center transition-all duration-700"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                <div className="relative z-10 p-6 sm:p-8 space-y-2">
                  <h3 className="font-sans font-bold text-[20px] sm:text-[24px] leading-[32px] tracking-[-0.6px] text-white">
                    {activePhoto.title}
                  </h3>
                  <p className="font-sans font-normal text-[14px] leading-[20px] text-[#D4D4D4] max-w-[576px]">
                    {activePhoto.subtitle}
                  </p>
                </div>
              </div>

              {/* Thumbnail Selection Matrix (2 columns x 3 rows) */}
              <div className="lg:col-span-4 grid grid-cols-2 gap-3">
                {GALLERY_ITEMS.map((item, idx) => {
                  const isSelected = activeGalleryIndex === idx;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveGalleryIndex(idx)}
                      className={`group relative h-[112px] rounded-[12px] overflow-hidden transition-all text-left ${
                        isSelected
                          ? "ring-2 ring-[#0B0C0E] shadow-md"
                          : "ring-1 ring-[#E4E7EC] opacity-80 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt={item.label}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/45 group-hover:bg-black/30 transition-colors" />
                      <span className="absolute bottom-2 left-2 z-10 font-sans font-bold text-[10px] leading-[15px] tracking-[0.5px] uppercase text-white">
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Section - Related Keynotes & Engagements Archive */}
        <section aria-label="Related Keynotes Archive" className="pt-16 md:pt-20 space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="font-sans font-light text-[30px] sm:text-[36px] leading-[40px] text-[#0B0C0E]">
              RELATED KEYNOTES &amp; INDUSTRY SUMMITS
            </h2>
            <p className="max-w-[448px] font-sans font-normal text-[14px] leading-[20px] text-[#646A74]">
              Explore neighboring technical addresses, architecture symposiums, and engineering conferences delivered by the SMRKONOVA studio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RELATED_EVENTS.map((item) => (
              <article
                key={item.id}
                className="group bg-[#FFFFFF] border border-[#E4E7EC]/80 hover:border-[#CBD5E1] rounded-[16px] shadow-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-md"
              >
                <div>
                  {/* Top Image Preview */}
                  <div className="relative w-full h-[208px] bg-[#171717] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Top overlay badges */}
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-2 bg-black/75 backdrop-blur-sm px-3 py-1 rounded-[4px]">
                      <span className={`w-2 h-2 rounded-full ${item.badgeColor}`} />
                      <span className="font-sans font-semibold text-[11px] leading-[16px] tracking-[0.55px] uppercase text-white">
                        {item.badge}
                      </span>
                    </div>

                    <div className="absolute top-3.5 right-3.5 bg-white px-2.5 py-1 rounded-[4px]">
                      <span className="font-sans font-bold text-[10px] leading-[15px] tracking-[1px] uppercase text-[#0B0C0E]">
                        {item.dateTag}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="font-sans font-bold text-[11px] leading-[16px] tracking-[0.55px] uppercase text-[#0B0C0E]">
                        {item.badge}
                      </span>
                      <span className="text-[#D4D4D4]">•</span>
                      <span className="font-sans font-medium text-[11px] leading-[16px] tracking-[0.55px] uppercase text-[#646A74]">
                        {item.subCategory}
                      </span>
                    </div>

                    <h3 className="font-sans font-normal text-[18px] leading-[25px] text-[#0B0C0E] group-hover:text-black/80 transition-colors">
                      {item.title}
                    </h3>

                    <p className="font-sans font-normal text-[12px] leading-[20px] text-[#646A74]">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="px-6 py-4 border-t border-[#E4E7EC]/60 flex items-center justify-between">
                  <span className="font-sans font-medium text-[11px] leading-[16px] tracking-[0.55px] uppercase text-[#646A74]">
                    {item.city}
                  </span>

                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1 font-sans font-bold text-[12px] leading-[16px] tracking-[1.2px] uppercase text-[#0B0C0E] group-hover:text-blue-600 transition-colors"
                  >
                    <span>View Event</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
