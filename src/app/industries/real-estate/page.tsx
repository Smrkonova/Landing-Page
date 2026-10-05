import RealEstateHero from "@/components/industries/RealEstate/RealEstateHero";
import RealEstateSystems from "@/components/industries/RealEstate/RealEstateSystems";
import RealEstateEcosystems from "@/components/industries/RealEstate/RealEstateEcosystems";
import RealEstateSolutions from "@/components/industries/RealEstate/RealEstateSolutions";
import RealEstateVerticals from "@/components/industries/RealEstate/RealEstateVerticals";
import RealEstateProcessScroll from "@/components/industries/RealEstate/RealEstateProcessScroll";
import RealEstateLocationsMarquee from "@/components/industries/RealEstate/RealEstateLocationsMarquee";
import RealEstateSystemCTA from "@/components/industries/RealEstate/RealEstateSystemCTA";
import RealEstateCaseStudiesSlider from "@/components/industries/RealEstate/RealEstateCaseStudiesSlider";
import RealEstateFaqSection from "@/components/industries/RealEstate/RealEstateFaqSection";

export const metadata = {
  title: "Real Estate Industry | The Way People Buy Real Estate Has Changed | Smrkonova",
  description:
    "Over the years, we have made the shift from offline to a combination of offline and online strategies to convert a hot lead into a deal. Smrkonova builds robust digital systems for real estate.",
};

export default function RealEstateIndustriesPage() {
  return (
    <main className="w-full bg-black text-white min-h-screen">
      <RealEstateHero />
      <RealEstateSystems />
      <RealEstateEcosystems />
      <RealEstateSolutions />
      <RealEstateVerticals />
      <RealEstateProcessScroll />
      <RealEstateLocationsMarquee />
      <RealEstateSystemCTA />
      <RealEstateCaseStudiesSlider />
      <RealEstateFaqSection />
    </main>
  );
}
