"use client";

import * as React from "react";
import { ShieldCheck, Zap, Award, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const values = [
  {
    title: "Integrity",
    description:
      "We conduct business with the highest ethical standards, maintaining transparency and building trust through honest, accountable actions in every interaction.",
    icon: ShieldCheck,
  },
  {
    title: "Speed",
    description:
      "We deliver rapid, efficient solutions without compromising quality, ensuring timely placements that meet your business needs and deadlines.",
    icon: Zap,
  },
  {
    title: "Quality",
    description:
      "We maintain rigorous standards in candidate assessment and placement, ensuring every match meets the highest quality benchmarks for success.",
    icon: Award,
  },
  {
    title: "Compliance",
    description:
      "We adhere strictly to local and international regulations, ensuring all processes meet legal requirements and industry best practices.",
    icon: CheckCircle2,
  },
];

const mission = {
  title: "Our Mission",
  description:
    "To empower organizations with exceptional talent acquisition solutions that drive business performance. We are dedicated to delivering efficient, cost-effective, and adaptable strategies that adhere to industry best practices, creating lasting value for our clients and candidates alike.",
};

export function AboutMissionValues() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-[#f4f4f4]">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
          {/* Mission */}
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="tracking-tight text-[#0b2677] leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[22pt]">
              {mission.title}
            </h2>
            <p className="text-[#0b2677]/70 text-base sm:text-lg leading-relaxed">
              {mission.description}
            </p>
          </div>

          {/* Values Grid */}
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0b2677] text-center mb-8 sm:mb-12">
              Our Core Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#e5e5e5] hover:border-[#9a01cd]/20 group"
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-[#9a01cd]/10 flex items-center justify-center group-hover:bg-[#9a01cd] transition-colors duration-300 shrink-0">
                      <value.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#9a01cd] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="grow space-y-3">
                      <h4 className="text-lg sm:text-xl font-bold text-[#0b2677] group-hover:text-[#9a01cd] transition-colors duration-300">
                        {value.title}
                      </h4>
                      <p className="text-sm sm:text-base text-[#0b2677]/70 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
