import EcommerceHero from "@/components/industries/Ecommerce/EcommerceHero";
import ManufacturingScrollCanvas from "@/components/industries/ManufacturingScrollCanvas";
import IndustryExtendedSection from "@/components/industries/IndustryExtendedSection";
import EcommerceCarousel from "@/components/industries/EcommerceCarousel";
import SolutionsGrid from "@/components/industries/SolutionsGrid";
import ServicesScroll from "@/components/industries/ServicesScroll";
import EcommerceVerticals from "@/components/industries/Ecommerce/EcommerceVerticals";
import StoryExperience from "@/components/animations/StoryExperience";
import LocationsMarquee from "@/components/industries/LocationsMarquee";
import SystemCTA from "@/components/industries/SystemCTA";
import EcommerceCaseStudiesSlider from "@/components/industries/Ecommerce/EcommerceCaseStudiesSlider";
import FaqSection from "@/components/industries/FaqSection";

export const metadata = {
  title: "E-Commerce Industry Solutions | Smrkonova",
  description: "Bespoke Shopify Plus, Headless Commerce, and connected storefront systems built to maximize conversion and scale global revenue.",
};

const ecommerceSolutions = [
  { id: 1, number: "01", title: "Custom Shopify Stores" },
  { id: 2, number: "02", title: "Shopify Plus Development" },
  { id: 3, number: "03", title: "Headless Commerce Solutions" },
  { id: 4, number: "04", title: "Fully Custom eCommerce Websites" },
  { id: 5, number: "05", title: "WooCommerce Development" },
  { id: 6, number: "06", title: "Magento Development" },
  { id: 7, number: "07", title: "Marketplace Development" },
  { id: 8, number: "08", title: "Custom Product Configurators" },
  { id: 9, number: "09", title: "Animated Shopping Experiences" },
  { id: 10, number: "10", title: "Premium Landing Pages" },
  { id: 11, number: "11", title: "Custom Checkout Experiences" },
  { id: 12, number: "12", title: "Property Management Systems" },
  { id: 13, number: "13", title: "Payment Gateway Integrations" },
  { id: 14, number: "14", title: "Razorpay Integration" },
  { id: 15, number: "15", title: "Stripe Integration" },
];

const ecommerceProcesses = [
  { id: 1, title: "UNDERSTAND", desc: "Customer behavior, funnel analysis,\nand conversion blockers", img: "/images/industries/manufacturing/process/1.png" },
  { id: 2, title: "RESEARCH", desc: "Market benchmarks, tech stack audit,\nand buyer journey mapping", img: "/images/industries/manufacturing/process/2.png" },
  { id: 3, title: "ENGINEER", desc: "Architect fast headless storefronts,\ncustom checkout & APIs", img: "/images/industries/manufacturing/process/3.png" },
  { id: 4, title: "DEVELOP", desc: "High-performance store builds with\nbespoke UI/UX and themes", img: "/images/industries/manufacturing/process/1.png" },
  { id: 5, title: "INTEGRATE", desc: "Connect ERPs, CRMs, inventory tracking,\npayment gateways & 3PLs", img: "/images/industries/manufacturing/process/2.png" },
  { id: 6, title: "TEST", desc: "Comprehensive load testing, edge\nlatency & security verification", img: "/images/industries/manufacturing/process/3.png" },
  { id: 7, title: "LAUNCH", desc: "Flawless deployment with zero\ndowntime and conversion tracking", img: "/images/industries/manufacturing/process/1.png" },
];

const ecommerceFaqs = [
  {
    question: "What eCommerce platforms do you build and specialize in?",
    answer: "We specialize in custom Shopify & Shopify Plus development, Headless Commerce setups (Next.js with Shopify, Medusa, or Commercelayer), custom WooCommerce solutions, and bespoke full-stack marketplace architectures.",
  },
  {
    question: "Can you migrate our store from another platform without losing SEO or orders?",
    answer: "Yes. We execute zero-downtime migrations with complete URL redirects, customer data mapping, order history retention, and preservation of your search engine rankings.",
  },
  {
    question: "How do you optimize stores for higher conversion rates (CRO)?",
    answer: "We optimize every friction point: micro-interactions, sub-second page loads, simplified one-click checkouts, personalized product recommendations, and mobile-first responsive architecture.",
  },
  {
    question: "Can you connect our ERP, CRM, and custom warehouse management systems?",
    answer: "Absolutely. We build robust API integrations connecting your storefront directly to SAP, Salesforce, Zoho, Shiprocket, Unicommerce, and custom warehouse databases for automated inventory sync and fulfillment.",
  },
  {
    question: "Do you offer post-launch maintenance, support, and speed monitoring?",
    answer: "Yes, we provide ongoing SLAs covering security audits, performance monitoring, continuous feature development, promotional campaign support, and 24/7 incident response.",
  },
];

export default function EcommerceIndustryPage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <EcommerceHero />

      {/* Exploded Architecture Animation Section ("MAKE THE SHIFT") */}
      <div className="w-full bg-white relative">
        <ManufacturingScrollCanvas
          badge="MAKE THE SHIFT"
          showBadgeUnderline={false}
          hideDetails={true}
          title={
            <>
              BUILD EXPERIENCES THAT<br />
              CONVERT VISITORS INTO CUSTOMERS AND<br />
              SCALE YOUR ECOMMERCE GROWTH
            </>
          }
        />
      </div>

      {/* Service Narrative & Glowing Card */}
      <IndustryExtendedSection
        tag="How Smrkonova thinks"
        tagClassName="font-sans font-normal text-[14px] leading-[1.22] tracking-[0.05em] uppercase text-[#888]"
        title="Your products may be unique. Your website shouldn't look ordinary."
        titleClassName="font-sans font-extralight text-[clamp(2rem,3.8vw+0.5rem,64px)] leading-[1.22] tracking-[0.05em] uppercase text-[#111]"
        paragraphs={[
          "Nothing in eCommerce operates in isolation. Your website, product catalogue, marketing, CRM, payments, inventory, warehouse, shipping, customer support, and analytics all need to work together.",
          "Smrkonova creates connected eCommerce ecosystems that make every customer interaction simpler while helping your business operate more efficiently."
        ]}
        paragraphClassName="font-sans font-light text-[12px] leading-[1.39] tracking-[0.05em] text-[#555]"
        cardTitle="e-Commerce Website Development"
        cardTitleClassName="font-sans font-normal text-[16px] leading-[1.22] tracking-normal uppercase text-[#111]"
        cardDescription="eCommerce Website Development that creates fast, intuitive, conversion-focused online stores."
        cardDescriptionClassName="font-sans font-light text-[14px] leading-[1.39] tracking-[0.05em] text-[#666]"
        carousel={<EcommerceCarousel />}
      />

      {/* What We Do Sticky Scroll */}
      <ServicesScroll />

      {/* Solutions Grid */}
      <div id="solutions">
        <SolutionsGrid
          tag="Solutions we build"
          tagClassName="font-sans font-normal text-[clamp(16px,1.4vw+8px,24px)] leading-[1.36] tracking-[0em] uppercase text-[#888]"
          title="Turn your storefront into a connected commerce system."
          titleClassName="font-sans font-light text-[clamp(2.25rem,3.8vw+0.5rem,64px)] leading-[1.22] tracking-[0em] uppercase text-[#111]"
          subtitle="Digital solutions designed around the way modern customers shop"
          subtitleClassName="font-sans font-normal text-[clamp(14px,1.3vw+6px,24px)] leading-[1.36] tracking-[0em] uppercase text-[#444] max-w-2xl mt-4 md:mt-6 leading-relaxed"
          solutions={ecommerceSolutions}
          itemTitleClassName="font-sans font-normal text-[14px] leading-[1.36] tracking-[0em] uppercase text-[#222]"
        />
      </div>

      {/* Ecommerce Verticals Slider Section */}
      <EcommerceVerticals />

      {/* Process / Story Animation */}
      <div id="process" className="w-full relative">
        <StoryExperience />
      </div>

      {/* Locations Marquee */}
      <LocationsMarquee
        title="Supporting eCommerce growth across India"
        titleClassName="font-sans font-normal text-[clamp(1.75rem,2.8vw+0.5rem,40px)] leading-[1.22] tracking-[0em] uppercase text-[#111] mb-8"
        description={"Smrkonova helps eCommerce businesses across India's fastest-growing startup and retail ecosystems build online stores, custom eCommerce platforms, digital commerce systems, and customer experiences designed for long-term growth.\n\nFrom D2C brands and online retailers to B2B commerce businesses and growing marketplaces, we connect your eCommerce website, marketing, customer data, payments, inventory, logistics, and analytics around a single growth strategy."}
        descriptionClassName="font-sans font-light text-[12px] leading-[1.39] tracking-[0.05em] text-[#666] max-w-md mb-12"
        primaryBtn="BUILD YOUR SYSTEM"
        primaryBtnClassName="bg-[#111] text-white px-8 py-4 font-sans font-medium text-[12px] leading-[1.22] tracking-[0.05em] uppercase hover:bg-black transition-colors w-full sm:w-auto"
        secondaryBtn="See what we build"
        secondaryBtnClassName="bg-transparent text-[#111] border border-[#111] px-8 py-4 font-sans font-medium text-[12px] leading-[1.22] tracking-[0.05em] uppercase hover:bg-gray-50 transition-colors w-full sm:w-auto"
      />

      {/* Rainbow Iridescent System CTA */}
      <SystemCTA
        title="Put your growth on systems that can keep up"
        titleClassName="font-sans font-light text-[clamp(1.75rem,2.8vw+0.5rem,40px)] leading-[1.12] tracking-[0em] text-center uppercase text-[#111] mb-8"
        description="Smrkonova partners with eCommerce founders, brands, and business leaders to build digital systems that support sustainable growth."
        descriptionClassName="font-sans font-light text-[12px] leading-[1.39] tracking-[0.05em] text-center text-gray-800 max-w-3xl mx-auto mb-12"
        primaryBtn="Start your store"
        secondaryBtn="See case studies"
      />

      {/* Case Studies Slider */}
      <EcommerceCaseStudiesSlider />

      {/* FAQ Section */}
      <FaqSection
        title="Answers before you ask"
        titleClassName="font-sans font-extralight text-[clamp(2rem,3.2vw+0.5rem,48px)] leading-[1.36] tracking-[0em] text-center uppercase text-[#111]"
        subtitle="The questions eCommerce founders, marketers and business leaders ask us."
        subtitleClassName="font-sans font-normal text-[clamp(14px,1.3vw+6px,24px)] leading-[1.36] tracking-[0em] text-center uppercase text-[#666] mt-4"
        questionClassName="font-sans font-light text-[14px] leading-[1.39] tracking-[0.05em] text-[#333]"
        faqs={ecommerceFaqs}
      />
    </main>
  );
}
