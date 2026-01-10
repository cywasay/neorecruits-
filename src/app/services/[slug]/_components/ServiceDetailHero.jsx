"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const serviceTitles = {
  "executive-search": "Executive Search",
  "permanent-staffing": "Permanent Staffing",
  "contract-recruitment": "Contract / Temporary Recruitment",
  "outsource-rpo": "Outsource Staffing / RPO",
  "remote-staffing": "Remote / Virtual Staffing",
  "technical-training": "Technical Training Services",
  "manpower-supply": "Manpower Supply Services",
};

export function ServiceDetailHero({ slug }) {
  const title = serviceTitles[slug] || slug.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  return (
    <section className="relative pt-16 h-[40vh] min-h-[350px] w-full flex flex-col overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/hero-1-v2.png")',
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
            Comprehensive solution tailored to your talent acquisition needs.
          </p>
        </div>
      </div>
    </section>
  );
}
