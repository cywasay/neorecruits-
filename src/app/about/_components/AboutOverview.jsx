"use client";

import * as React from "react";
import Image from "next/image";
import { TrendingUp, Users, Globe, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const milestones = [
  {
    year: "2010",
    title: "Founded",
    description: "Started with a vision to transform recruitment in the Middle East",
  },
  {
    year: "2015",
    title: "Regional Expansion",
    description: "Expanded operations across GCC countries",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Launched AI-powered recruitment platform",
  },
  {
    year: "2025",
    title: "Global Reach",
    description: "Operating in 40+ countries across 6 continents",
  },
];

const impactStats = [
  {
    value: "15,000+",
    label: "Successful Placements",
    icon: Users,
  },
  {
    value: "40+",
    label: "Countries Reached",
    icon: Globe,
  },
  {
    value: "25+",
    label: "Industries Served",
    icon: TrendingUp,
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    icon: Award,
  },
];

export function AboutOverview() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-[#f4f4f4]">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
          {/* Company Intro */}
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h2 className="tracking-tight text-[#0b2677] leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[22pt]">
              Company Overview
            </h2>
            <div className="space-y-4 text-[#0b2677]/70 text-base sm:text-lg leading-relaxed">
              <p>
                NeoRecruits enables clients to improve their performance through
                better talent acquisition. We deliver world-class talent
                acquisition solutions, from Board and Executive moves, through
                to training, strategic hiring projects and complex recruitment
                programmes across geographies.
              </p>
              <p>
                NeoRecruits has the expertise to provide best practice, cost
                effective and agile solutions. Bringing together Recruitment
                Process Outsourcing (RPO), Permanent Placement, Contract
                Staffing and Assessment Centres, NeoRecruits has the capability
                to create a unique solution to meet your needs.
              </p>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300 border border-[#e5e5e5]"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 rounded-full bg-[#9a01cd]/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#9a01cd]" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b2677] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-[#0b2677]/70 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Key Milestones */}
          <div className="space-y-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0b2677] text-center">
              Key Milestones
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="relative bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#e5e5e5]"
                >
                  <div className="absolute top-4 right-4 text-4xl sm:text-5xl font-bold text-[#0b2677]/10">
                    {milestone.year}
                  </div>
                  <div className="space-y-3 pt-4">
                    <h4 className="text-lg sm:text-xl font-bold text-[#0b2677]">
                      {milestone.title}
                    </h4>
                    <p className="text-sm sm:text-base text-[#0b2677]/70 leading-relaxed">
                      {milestone.description}
                    </p>
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
