import { IndustryDetailHero } from "./_components/IndustryDetailHero";
import { IndustryDetailOverview } from "./_components/IndustryDetailOverview";
import { IndustryDetailRoleCategories } from "./_components/IndustryDetailRoleCategories";
import { IndustryDetailCompliance } from "./_components/IndustryDetailCompliance";
import { IndustryDetailCTA } from "./_components/IndustryDetailCTA";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const industryName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${industryName} | NeoRecruits Industries`,
    description: `Explore our expertise in ${industryName}, including role categories, compliance requirements, and how we can help you find the right talent.`,
  };
}

export default async function IndustryDetailPage({ params }) {
  const { slug } = await params;
  
  return (
    <main className="flex flex-col w-full">
      <IndustryDetailHero slug={slug} />
      <IndustryDetailOverview slug={slug} />
      <IndustryDetailRoleCategories slug={slug} />
      <IndustryDetailCompliance slug={slug} />
      <IndustryDetailCTA slug={slug} />
    </main>
  );
}
