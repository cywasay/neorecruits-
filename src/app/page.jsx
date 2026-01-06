import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Services } from "@/components/sections/Services";
import { Expertise } from "@/components/sections/Expertise";
import { Process } from "@/components/sections/Process";
import { Jobs } from "@/components/sections/Jobs";
import { Locations } from "@/components/sections/Locations";
import { Testimonials } from "@/components/sections/Testimonials";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Intro />
      <Services />
      <Expertise />
      <Process />
      <Jobs />
      <Locations />
      <Testimonials />
      <Blog />
      <Contact />
    </div>
  );
}
