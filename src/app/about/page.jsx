import { AboutHero } from "./_components/AboutHero";
import { AboutOverview } from "./_components/AboutOverview";
import { AboutRegions } from "./_components/AboutRegions";
import { AboutCEOMessage } from "./_components/AboutCEOMessage";
import { AboutMissionValues } from "./_components/AboutMissionValues";
import { AboutServices } from "./_components/AboutServices";
import { AboutOffices } from "./_components/AboutOffices";
import { AboutCompliance } from "./_components/AboutCompliance";

export const metadata = {
  title: "About Us | NeoRecruits",
  description:
    "Learn more about NeoRecruits, our story, mission, values, global presence, and commitment to excellence in recruitment.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col w-full">
      <AboutHero />
      <AboutOverview />
      <AboutRegions />
      <AboutCEOMessage />
      <AboutMissionValues />
      <AboutServices />
      <AboutOffices />
      <AboutCompliance />
    </main>
  );
}
