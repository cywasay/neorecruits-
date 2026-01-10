"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const industryTitles = {
  "oil-gas": "Oil & Gas",
  "electrical-power": "Electrical & Power",
  "renewable-energy": "Renewable Energy & Sustainability",
  "technology": "Technology & Digital Transformation",
  "logistics": "Logistics, Supply Chain & Operations",
  "construction": "Construction, Engineering & Project Management",
  "manufacturing": "Industrial & Manufacturing",
};

export function IndustryDetailHero({ slug }) {
  const title = industryTitles[slug] || slug.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  return (
    <section className="relative pt-16 h-[40vh] min-h-[350px] w-full flex flex-col overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/hero-2-v2.png")',
        }}
      >
        <div className="absolute inset-0 bg-[#0b2677]/70" />
        <div className="absolute inset-0 bg-linear-to-b from-[#0b2677]/40 via-transparent to-[#0b2677]" />
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 sm:px-6 md:px-10 relative z-10 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl space-y-4 sm:space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase">
            {title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl">
            Specialized recruitment solutions tailored to the unique needs of the {title.toLowerCase()} industry.
          </p>
        </div>
      </div>
    </section>
  );
}
