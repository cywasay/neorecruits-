import { IndustriesHero } from "./_components/IndustriesHero";
import { IndustriesShowcase } from "./_components/IndustriesShowcase";
import { IndustriesExpertise } from "./_components/IndustriesExpertise";
import { IndustriesCTA } from "./_components/IndustriesCTA";

export const metadata = {
  title: "Industries | NeoRecruits",
  description:
    "Discover our industry expertise across Oil & Gas, Electrical & Power, Renewable Energy, Technology, Logistics, Construction, and Manufacturing.",
};

export default function IndustriesPage() {
  return (
    <main className="flex flex-col w-full">
      <IndustriesHero />
      <IndustriesShowcase />
      <IndustriesExpertise />
      <IndustriesCTA />
    </main>
  );
}
