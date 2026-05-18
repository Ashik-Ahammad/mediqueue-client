import Banner from "@/components/Banner";
import AvailableTutors from "@/components/AvailableTutors";
import PlatformFeatures from "@/components/PlatformFeatures";
import BecomeMentor from "@/components/BecomeMentor";
import FAQSection from "@/components/FAQSection";


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
