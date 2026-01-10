import { ServicesHero } from "./_components/ServicesHero";
import { ServicesList } from "./_components/ServicesList";
import { ServicesProcess } from "./_components/ServicesProcess";
import { ServicesRequestForm } from "./_components/ServicesRequestForm";

export const metadata = {
  title: "Services | NeoRecruits",
  description:
    "Discover our comprehensive recruitment services including executive search, permanent staffing, contract recruitment, RPO, remote staffing, technical training, and manpower supply.",
};

export default function ServicesPage() {
  return (
    <main className="flex flex-col w-full">
      <ServicesHero />
      <ServicesList />
      <ServicesProcess />
      <ServicesRequestForm />
    </main>
  );
}
