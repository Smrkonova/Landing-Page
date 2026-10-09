import HealthcareHero from "@/components/industries/Healthcare/HealthcareHero";
import ManufacturingScrollCanvas from "@/components/industries/ManufacturingScrollCanvas";
import IndustryExtendedSection from "@/components/industries/IndustryExtendedSection";
import HealthcareCarousel from "@/components/industries/HealthcareCarousel";
import SolutionsGrid from "@/components/industries/SolutionsGrid";
import ServicesScroll from "@/components/industries/ServicesScroll";
import HealthcareVerticals from "@/components/industries/Healthcare/HealthcareVerticals";
import StoryExperience from "@/components/animations/StoryExperience";
import LocationsMarquee from "@/components/industries/LocationsMarquee";
import SystemCTA from "@/components/industries/SystemCTA";
import HealthcareCaseStudiesSlider from "@/components/industries/Healthcare/HealthcareCaseStudiesSlider";
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
      {/* Hero Section */}
      <HealthcareHero />

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

      {/* What We Do Sticky Scroll */}
      <ServicesScroll />

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

      {/* Healthcare Verticals Slider Section */}
      <HealthcareVerticals />

      {/* Process / Story Animation */}
      <div id="process" className="w-full relative">
        <StoryExperience />
      </div>

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
      <HealthcareCaseStudiesSlider />

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
