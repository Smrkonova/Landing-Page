import EducationHero from "@/components/industries/Education/EducationHero";
import EducationSystems from "@/components/industries/Education/EducationSystems";
import EducationEcosystems from "@/components/industries/Education/EducationEcosystems";
import EducationSolutions from "@/components/industries/Education/EducationSolutions";
import EducationVerticals from "@/components/industries/Education/EducationVerticals";
import Educationscroll from "@/components/industries/Education/Educationscroll";
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
      <EducationSolutions />
      <EducationVerticals />
      <Educationscroll />
      <EducationLocationsMarquee />
      <EducationSystemCTA />
      <EducationCaseStudiesSlider />
      <EducationFaqSection />
    </main>
  );
}
