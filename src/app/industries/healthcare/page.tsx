import Image from "next/image";
import Link from "next/link";
import ManufacturingScrollCanvas from "@/components/industries/ManufacturingScrollCanvas";
import IndustryExtendedSection from "@/components/industries/IndustryExtendedSection";
import HealthcareCarousel from "@/components/industries/HealthcareCarousel";
import SolutionsGrid from "@/components/industries/SolutionsGrid";
import SliderSection from "@/components/industries/SliderSection";
import ProcessScroll from "@/components/industries/ProcessScroll";
import LocationsMarquee from "@/components/industries/LocationsMarquee";
import SystemCTA from "@/components/industries/SystemCTA";
import CaseStudiesSlider from "@/components/industries/CaseStudiesSlider";
import FaqSection from "@/components/industries/FaqSection";

export const metadata = {
  title: "Healthcare Industry Solutions | Smrkonova",
  description: "Secure, clinical-grade digital healthcare ecosystems, patient portals, and telemedicine solutions that build patient trust and elevate care.",
};

const healthcareSolutions = [
  { id: 1, number: "01", title: "Patient Portals" },
  { id: 2, number: "02", title: "Telemedicine Apps" },
  { id: 3, number: "03", title: "Appointment Scheduling" },
  { id: 4, number: "04", title: "EHR / EMR Integration" },
  { id: 5, number: "05", title: "Pharmacy Management" },
  { id: 6, number: "06", title: "Lab & Diagnostics Apps" },
  { id: 7, number: "07", title: "Doctor Consultation Platforms" },
  { id: 8, number: "08", title: "Healthcare CRM" },
  { id: 9, number: "09", title: "Billing & Insurance Systems" },
  { id: 10, number: "10", title: "Medical Record Archives" },
  { id: 11, number: "11", title: "Clinic Mobile Apps" },
  { id: 12, number: "12", title: "Emergency & On-Call Systems" },
  { id: 13, number: "13", title: "Remote Patient Monitoring" },
  { id: 14, number: "14", title: "Healthcare Analytics" },
  { id: 15, number: "15", title: "Multi-Chain Clinic ERP" },
  { id: 16, number: "16", title: "HIPAA Compliant Infrastructure" },
];

const healthcareSliders = [
  { id: 1, img: "/images/industries/healthcare/1.png", title: "MULTI-SPECIALTY\nHOSPITALS" },
  { id: 2, img: "/images/industries/healthcare/2.png", title: "DIAGNOSTIC &\nPATHOLOGY CHAINS" },
  { id: 3, img: "/images/industries/healthcare/3.png", title: "TELEHEALTH &\nVIRTUAL CARE" },
  { id: 4, img: "/images/industries/healthcare/4.png", title: "DENTAL & SPECIALTY\nCLINICS" },
  { id: 5, img: "/images/industries/healthcare/5.png", title: "PHARMACEUTICALS &\nBIOTECH" },
  { id: 6, img: "/images/industries/healthcare/6.png", title: "AYURVEDA & WELLNESS\nINSTITUTIONS" },
  { id: 7, img: "/images/industries/healthcare/7.png", title: "MEDICAL DEVICES &\nHEALTH-TECH APPS" },
];

const healthcareProcesses = [
  { id: 1, title: "FIND YOU", desc: "SEO-driven physician discovery, location\nfinders & digital touchpoints", img: "/images/industries/manufacturing/process/1.png" },
  { id: 2, title: "TRUST YOU", desc: "Credentialing, clinical clarity, patient\ntestimonials & accreditations", img: "/images/industries/manufacturing/process/2.png" },
  { id: 3, title: "CHOOSE YOU", desc: "Intuitive doctor scheduling, upfront service\ntransparency & instant booking", img: "/images/industries/manufacturing/process/3.png" },
  { id: 4, title: "EXPERIENCE YOU", desc: "Frictionless teleconsultations, digital\ncheck-in & automated care reminders", img: "/images/industries/manufacturing/process/1.png" },
  { id: 5, title: "RECOMMEND YOU", desc: "Post-care follow-up portals, prescription\naccess & patient loyalty networks", img: "/images/industries/manufacturing/process/2.png" },
];

const healthcareFaqs = [
  {
    question: "How much does a hospital website cost?",
    answer: "Hospital website costs depend on scope, features, and clinical integrations. A modern, high-performance informational hospital website typically starts around $4,000 to $8,000, while comprehensive enterprise healthcare platforms with custom patient portals, EHR/EMR integrations, appointment engines, and HIPAA compliance range from $12,000 to $30,000+.",
  },
  {
    question: "Why does a hospital need SEO?",
    answer: "Patients increasingly search online before choosing a doctor, department, or hospital. SEO helps your hospital become visible for relevant searches such as specialities, doctors, treatments, locations, and emergency services—bringing high-intent patients to the right information at the right time.",
  },
  {
    question: "Can you build HIPAA/GDPR-compliant platforms?",
    answer: "Yes. Every healthcare platform we build adheres to strict security standards including HIPAA, GDPR, and ABDM protocols. We implement end-to-end AES-256 encryption at rest and in transit, role-based access control (RBAC), multi-factor authentication, secure audit trails, and automated vulnerability scanning.",
  },
  {
    question: "Do you build appointment systems?",
    answer: "Yes. We design and build intelligent patient appointment booking systems with real-time doctor availability calendars, automated SMS and email reminders, digital token management, multi-department triage, and secure online consultation fee payments.",
  },
  {
    question: "Can you integrate WhatsApp booking?",
    answer: "Yes. We integrate the official WhatsApp Business API so patients can check doctor schedules, book or reschedule appointments, receive instant confirmations, and download diagnostic lab reports directly within WhatsApp with zero friction.",
  },
  {
    question: "How long does a hospital app take?",
    answer: "A custom hospital or clinic mobile app typically takes 8 to 14 weeks from initial architecture and UI/UX design through development, EHR integration, HIPAA compliance testing, and App Store/Play Store deployment.",
  },
  {
    question: "Can you redesign an existing hospital website?",
    answer: "Yes. We specialize in comprehensive hospital website redesigns that elevate patient experience, improve speed, modernize branding, and optimize mobile responsiveness—all while preserving your existing SEO rankings, search traffic, and backend data.",
  },
];

export default function HealthcareIndustryPage() {
  return (
    <main className="w-full">
      {/* Banner / Hero Section */}
      <div 
        className="relative bg-black text-white flex items-center pt-32 md:pt-0 pb-16 md:pb-0 overflow-hidden" 
        style={{ minHeight: "calc(100vh / var(--desktop-scale, 1))" }}
      >
        {/* Full Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/industries/healthcare/banner.png"
            alt="Futuristic Healthcare Digital System"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Gradient overlays to blend smoothly and keep text legible on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 md:via-black/75 to-transparent w-full md:w-[65%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
        </div>

        <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 relative z-10">
          {/* Hero Content */}
          <div className="flex flex-col items-start text-left space-y-6 md:space-y-8 max-w-2xl">
            <div className="space-y-3 md:space-y-4">
              <h1 className="font-good-times font-bold text-[clamp(2.75rem,5.8vw+1rem,96px)] leading-[0.91] tracking-[0.05em] uppercase text-white break-words">
                PATIENTS<br />
                EXPECT<br />
                CLARITY
              </h1>
              <h2 className="font-sans font-light text-[clamp(1.1rem,1.8vw+0.2rem,1.75rem)] tracking-[0.1em] text-white/90 uppercase leading-snug">
                SPEED AND TRUST AT<br />
                EVERY INTERACTION.
              </h2>
            </div>

            <p className="font-sans font-light text-[12px] leading-[1.55] tracking-[0.05em] text-[#ccc] max-w-xl">
              Help your patients choose your practice with confidence through healthcare marketing that builds trust, simplifies the patient journey, and strengthens every digital touchpoint.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-black text-[clamp(10px,0.4vw+4px,12px)] font-bold tracking-widest uppercase hover:bg-neutral-200 transition-colors text-center w-full sm:w-auto shadow-lg"
              >
                START YOUR PROJECT
              </Link>
              <Link
                href="#solutions"
                className="px-8 py-4 bg-transparent border border-white text-white text-[clamp(10px,0.4vw+4px,12px)] font-bold tracking-widest uppercase hover:bg-white/10 transition-colors text-center w-full sm:w-auto"
              >
                SEE WHAT WE BUILD
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Exploded Architecture Animation Section ("MAKE THE SHIFT") */}
      <div className="w-full bg-white relative">
        <ManufacturingScrollCanvas
          badge="MAKE THE SHIFT"
          showBadgeUnderline={false}
          hideDetails={true}
          title={
            <>
              BUILD CONNECTED SYSTEMS FOR EVERY<br />
              STAGE OF CARE.
            </>
          }
        />
      </div>

      {/* Service Narrative & Glowing Card */}
      <IndustryExtendedSection
        tag="HOW SMRKONOVA THINKS"
        tagClassName="font-sans font-normal text-[14px] leading-[1.22] tracking-[0.05em] uppercase text-[#888]"
        title="WE ENGINEER DIGITAL ECOSYSTEMS THAT CONNECT EVERY STAGE OF THE PATIENT JOURNEY."
        titleClassName="font-sans font-extralight text-[clamp(2rem,3.8vw+0.5rem,64px)] leading-[1.22] tracking-[0.05em] uppercase text-[#111]"
        paragraphs={[
          "Patients experience your healthcare system as one. Every touchpoint, platform, and process should work together to create better patient experiences while making communication, care delivery and operations more efficient."
        ]}
        paragraphClassName="font-sans font-light text-[12px] leading-[1.39] tracking-[0.05em] text-[#555]"
        cardTitle="HOSPITAL & CLINIC DIGITAL SYSTEMS"
        cardTitleClassName="font-sans font-normal text-[16px] leading-[1.22] tracking-normal uppercase text-[#111]"
        cardDescription="End-to-end healthcare platforms: patient portals, telemedicine apps, appointment engines, EHR/EMR integrations, and HIPAA-compliant infrastructures."
        cardDescriptionClassName="font-sans font-light text-[14px] leading-[1.39] tracking-[0.05em] text-[#666]"
        cardImage="/images/industries/healthcare/1.png"
        carousel={<HealthcareCarousel />}
      />

      {/* Solutions Grid */}
      <div id="solutions">
        <SolutionsGrid
          tag="SOLUTIONS WE BUILD"
          tagClassName="font-sans font-normal text-[clamp(16px,1.4vw+8px,24px)] leading-[1.36] tracking-[0em] uppercase text-[#888]"
          title="BETTER SYSTEMS FOR BEST EXPERIENCE."
          titleClassName="font-sans font-light text-[clamp(2.25rem,3.8vw+0.5rem,64px)] leading-[1.22] tracking-[0em] uppercase text-[#111]"
          subtitle="BUILD THE BUILDING BLOCKS OF CONNECTED HEALTHCARE"
          subtitleClassName="font-sans font-normal text-[clamp(14px,1.3vw+6px,24px)] leading-[1.36] tracking-[0em] uppercase text-[#444] max-w-2xl mt-4 md:mt-6 leading-relaxed"
          solutions={healthcareSolutions}
          itemTitleClassName="font-sans font-normal text-[14px] leading-[1.36] tracking-[0em] uppercase text-[#222]"
        />
      </div>

      {/* Slider Section */}
      <SliderSection
        headerContainerClassName="mb-14 md:mb-20 text-center flex flex-col items-center justify-center space-y-3"
        headerTag="INDUSTRIES WITHIN HEALTHCARE"
        headerTagClassName="font-sans font-semibold text-[clamp(1.75rem,3.2vw+0.5rem,52.58px)] leading-[1.22] tracking-[0em] text-center uppercase text-[#111]"
        title="20+ HEALTHCARE SECTORS WE HELP TRANSFORM"
        titleClassName="font-sans font-extralight text-[clamp(2rem,3.8vw+0.5rem,64px)] leading-[1.22] tracking-[0em] text-center uppercase text-[#111]"
        borderBox={true}
        items={healthcareSliders}
      />

      {/* Process Scroll */}
      <ProcessScroll
        headline="PATIENT JOURNEY"
        processes={healthcareProcesses}
      />

      {/* Locations Marquee */}
      <LocationsMarquee
        title="SUPPORTING HEALTHCARE INSTITUTIONS AROUND INDIA"
        titleClassName="font-sans font-normal text-[clamp(1.75rem,2.8vw+0.5rem,40px)] leading-[1.22] tracking-[0em] uppercase text-[#111] mb-8"
        description="Healthcare today extends far beyond the consultation room. Patients expect seamless digital experiences, while healthcare teams need systems that simplify operations and improve collaboration. Smrkonova brings these together by engineering connected digital ecosystems that unite branding, patient engagement, technology, and operations into one cohesive experience."
        descriptionClassName="font-sans font-light text-[12px] leading-[1.39] tracking-[0.05em] text-[#666] max-w-md mb-12"
        primaryBtn="BUILD YOUR SYSTEM"
        primaryBtnClassName="bg-[#111] text-white px-8 py-4 font-sans font-medium text-[12px] leading-[1.22] tracking-[0.05em] uppercase hover:bg-black transition-colors w-full sm:w-auto"
        secondaryBtn="SEE WHAT WE BUILD"
        secondaryBtnClassName="bg-transparent text-[#111] border border-[#111] px-8 py-4 font-sans font-medium text-[12px] leading-[1.22] tracking-[0.05em] uppercase hover:bg-gray-50 transition-colors w-full sm:w-auto"
      />

      {/* Rainbow Iridescent System CTA */}
      <SystemCTA
        title={
          <>
            SCALE SYSTEMS THAT KEEP THE DREAM<br />
            LIVING
          </>
        }
        titleClassName="font-sans font-light text-[clamp(1.75rem,2.8vw+0.5rem,40px)] leading-[1.12] tracking-[0em] text-center uppercase text-[#111] mb-8"
        description={"Smrkonova partners with healthcare leaders to build digital systems leading to sustainable growth. We develop custom CRM platforms, operational software, and intelligent workflows that connect people, processes, and data across your institution.\n\nBy replacing repetitive manual work with purpose-built technology, your team gains the clarity and capacity to improve operations, strengthen customer relationships, and pursue new business opportunities with confidence."}
        descriptionClassName="font-sans font-light text-[12px] leading-[1.39] tracking-[0.05em] text-center text-gray-800 max-w-3xl mx-auto mb-12 whitespace-pre-line"
        primaryBtn="BUILD EPIC SYSTEMS"
        primaryBtnClassName="bg-[#1b1b1b] text-white px-8 py-4 font-sans font-medium text-[12px] leading-[1.22] tracking-[0.05em] uppercase hover:bg-black transition-colors w-full sm:w-auto"
        secondaryBtn="SEE WHAT WE BUILD"
        secondaryBtnClassName="bg-transparent text-[#111] border border-[#111] px-8 py-4 font-sans font-medium text-[12px] leading-[1.22] tracking-[0.05em] uppercase hover:bg-white/40 transition-colors w-full sm:w-auto"
      />

      {/* Case Studies Slider */}
      <CaseStudiesSlider
        tag="Built to become a landmark"
        tagClassName="font-sans font-extralight text-[clamp(1.25rem,2vw+0.5rem,32px)] leading-[1.36] tracking-[0em] uppercase text-[#666] mb-2"
        title="CASE STUDIES"
        titleClassName="font-sans font-extrabold text-[clamp(2.25rem,4vw+0.5rem,64px)] leading-[1.36] tracking-[0em] uppercase text-[#111]"
      />

      {/* FAQ Section */}
      <FaqSection
        title="ANSWERS BEFORE YOU ASK"
        titleClassName="font-sans font-extralight text-[clamp(2rem,3.2vw+0.5rem,48px)] leading-[1.36] tracking-[0em] text-center uppercase text-[#111]"
        subtitle="THE QUESTIONS FOUNDERS, DOCTORS AND STAKEHOLDERS IN HEALTHCARE ASK US."
        subtitleClassName="font-sans font-normal text-[clamp(14px,1.3vw+6px,24px)] leading-[1.36] tracking-[0em] text-center uppercase text-[#666] mt-4"
        questionClassName="font-sans font-light text-[14px] leading-[1.39] tracking-[0.05em] text-[#333]"
        faqs={healthcareFaqs}
      />
    </main>
  );
}
