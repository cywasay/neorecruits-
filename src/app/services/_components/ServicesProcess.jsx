"use client";

import * as React from "react";
import { Search, Users, CheckCircle, UserCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const processSteps = [
  {
    id: 1,
    title: "Discovery & Strategy",
    description:
      "We begin by understanding your business needs, culture, and specific requirements to develop a tailored recruitment strategy.",
    icon: Search,
  },
  {
    id: 2,
    title: "Sourcing & Screening",
    description:
      "Our team leverages extensive networks and advanced screening techniques to identify qualified candidates who match your criteria.",
    icon: Users,
  },
  {
    id: 3,
    title: "Interview & Selection",
    description:
      "We conduct thorough interviews and assessments to ensure candidates meet both technical and cultural fit requirements.",
    icon: CheckCircle,
  },
  {
    id: 4,
    title: "Placement & Support",
    description:
      "We facilitate smooth onboarding and provide ongoing support to ensure successful integration and long-term retention.",
    icon: UserCheck,
  },
];

export function ServicesProcess() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-[#f4f4f4]">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16">
          <div className="text-center space-y-4">
            <h2 className="tracking-tight text-[#0b2677] leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[22pt]">
              Our Recruitment Process
            </h2>
            <p className="text-[#0b2677]/70 text-base sm:text-lg max-w-2xl mx-auto">
              A systematic approach ensuring the right talent, at the right time,
              for your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className="relative group"
              >
                <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col space-y-4 border border-[#e5e5e5] hover:border-[#9a01cd]/20">
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#9a01cd]/10 flex items-center justify-center group-hover:bg-[#9a01cd] transition-colors duration-300">
                      <step.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#9a01cd] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-4xl sm:text-5xl font-bold text-[#0b2677]/5 group-hover:text-[#9a01cd]/10 transition-colors duration-300">
                      {String(step.id).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#0b2677] group-hover:text-[#9a01cd] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#0b2677]/70 leading-relaxed grow">
                    {step.description}
                  </p>

                  {/* Connector Line (hidden on last item) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#e5e5e5] transform translate-x-0">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-[#e5e5e5] border-t-4 border-t-transparent border-b-4 border-b-transparent" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
