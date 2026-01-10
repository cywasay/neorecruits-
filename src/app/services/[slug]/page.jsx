import { ServiceDetailHero } from "./_components/ServiceDetailHero";
import { ServiceDetailOverview } from "./_components/ServiceDetailOverview";
import { ServiceDetailProcess } from "./_components/ServiceDetailProcess";
import { ServiceDetailRoles } from "./_components/ServiceDetailRoles";
import { ServiceDetailCTA } from "./_components/ServiceDetailCTA";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const serviceName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${serviceName} | NeoRecruits Services`,
    description: `Learn more about our ${serviceName} service, including overview, process, available roles, and how to get started.`,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  
  return (
    <main className="flex flex-col w-full">
      <ServiceDetailHero slug={slug} />
      <ServiceDetailOverview slug={slug} />
      <ServiceDetailProcess slug={slug} />
      <ServiceDetailRoles slug={slug} />
      <ServiceDetailCTA slug={slug} />
    </main>
  );
}
