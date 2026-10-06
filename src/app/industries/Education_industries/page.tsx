import EducationHero from "@/components/industries/Education/EducationHero";
import EducationSystems from "@/components/industries/Education/EducationSystems";
import EducationEcosystems from "@/components/industries/Education/EducationEcosystems";
import ServicesScroll from "@/components/industries/ServicesScroll";
import EducationSolutions from "@/components/industries/Education/EducationSolutions";
import EducationVerticals from "@/components/industries/Education/EducationVerticals";
import StoryExperience from "@/components/animations/StoryExperience";
import EducationLocationsMarquee from "@/components/industries/Education/EducationLocationsMarquee";
import EducationSystemCTA from "@/components/industries/Education/EducationSystemCTA";
import EducationCaseStudiesSlider from "@/components/industries/Education/EducationCaseStudiesSlider";
import EducationFaqSection from "@/components/industries/Education/EducationFaqSection";

export const metadata = {
  title: "Education Industry | Bridge The Decision Gap | Smrkonova",
  description:
    "Create a connected admissions experience that answers student questions, showcases your institution, and supports every step from discovery and research to application and enrollment.",
};

export default function EducationIndustriesPage() {
  return (
    <main className="w-full bg-black text-white min-h-screen">
      <EducationHero />
      <EducationSystems />
      <EducationEcosystems />
      <ServicesScroll />
      <EducationSolutions />
      <EducationVerticals />
      <div id="process" className="w-full relative">
        <StoryExperience />
      </div>
      <EducationLocationsMarquee />
      <EducationSystemCTA />
      <EducationCaseStudiesSlider />
      <EducationFaqSection />
    </main>
  );
}
