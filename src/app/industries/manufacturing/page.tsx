import ManufacturingHero from "@/components/industries/Manufacturing/ManufacturingHero";
import AutomationCarousel from "@/components/industries/AutomationCarousel";
import ServicesScroll from "@/components/industries/ServicesScroll";
import SolutionsGrid from "@/components/industries/SolutionsGrid";
import SliderSection from "@/components/industries/SliderSection";
import StoryExperience from "@/components/animations/StoryExperience";
import LocationsMarquee from "@/components/industries/LocationsMarquee";
import SystemCTA from "@/components/industries/SystemCTA";
import CaseStudiesSlider from "@/components/industries/CaseStudiesSlider";
import FaqSection from "@/components/industries/FaqSection";
import ManufacturingScrollCanvas from "@/components/industries/ManufacturingScrollCanvas";

export default function Page() {
    return (
        <main className="w-full">
            {/* Hero Section */}
            <ManufacturingHero />


            {/* Full-width Scroll Animation Section */}
            <div className="w-full bg-white relative">
                <ManufacturingScrollCanvas />
            </div>

            {/* Automation Ecosystems Carousel Section */}
            <AutomationCarousel />

            <ServicesScroll />
            <SolutionsGrid />
            <SliderSection />
            <div id="process" className="w-full relative">
                <StoryExperience />
            </div>
            <LocationsMarquee />
            <SystemCTA />
            <CaseStudiesSlider />
            <FaqSection />
        </main>
    );
}
