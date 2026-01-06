import { AboutHero } from "./_components/AboutHero";
import { AboutStory } from "./_components/AboutStory";
import { AboutMission } from "./_components/AboutMission";
import { AboutVision } from "./_components/AboutVision";
import { AboutValues } from "./_components/AboutValues";

export const metadata = {
  title: "About Us | NeoRecruits",
  description:
    "Learn more about NeoRecruits, our story, mission, vision, and core values.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col w-full">
      <AboutHero />
      <AboutStory />
      <AboutMission />
      <AboutVision />
      <AboutValues />
    </main>
  );
}
