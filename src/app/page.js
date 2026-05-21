import Banner from "@/components/Banner";
import AvailableTutors from "@/components/AvailableTutors";
import PlatformFeatures from "@/components/PlatformFeatures";
import BecomeMentor from "@/components/BecomeMentor";
import FAQSection from "@/components/FAQSection";

export const metadata = {
  title: "MediQueue | Best Tutor Finding Platform in Bangladesh",
  description: "Discover top-rated expert tutors across Bangladesh with MediQueue. Browse verified profiles, check availability, and book online or offline learning sessions easily.",
};

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <AvailableTutors></AvailableTutors>
      <PlatformFeatures></PlatformFeatures>
      <FAQSection></FAQSection>
      <BecomeMentor></BecomeMentor>
    </div>
  );
}
