"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const serviceData = {
  "executive-search": {
    overview: "Our Executive Search service specializes in identifying and attracting top-tier leadership talent to drive your organization's strategic vision forward. We leverage extensive networks and deep industry knowledge to find C-suite executives, senior management, and specialized leaders who align with your company culture and objectives.",
    keyFeatures: [
      "C-suite and senior executive placement",
      "Global talent network access",
      "Cultural fit assessment",
      "Confidential search process",
      "Market intelligence and benchmarking",
      "Competitive analysis",
    ],
  },
  "permanent-staffing": {
    overview: "Long-term talent acquisition strategies focused on finding candidates who fit your culture and goals. We take a holistic approach to permanent placements, ensuring both technical competency and cultural alignment for lasting success.",
    keyFeatures: [
      "Full-time position placement",
      "Culture fit assessment",
      "Competitive market analysis",
      "Retention support programs",
      "Onboarding assistance",
      "Long-term career planning",
    ],
  },
  "contract-recruitment": {
    overview: "Flexible staffing solutions to meet short-term project demands and seasonal peaks with skilled professionals. Whether you need technical experts for a specific project or temporary staff during busy periods, we provide rapid, qualified candidates ready to hit the ground running.",
    keyFeatures: [
      "Rapid candidate placement",
      "Project-based staffing",
      "Short and long-term contracts",
      "Seamless onboarding support",
      "Payroll management options",
      "Flexible contract terms",
    ],
  },
  "outsource-rpo": {
    overview: "End-to-end Recruitment Process Outsourcing (RPO) to streamline your hiring operations and reduce costs. We manage the entire recruitment lifecycle, from sourcing to onboarding, allowing you to focus on core business activities.",
    keyFeatures: [
      "Complete recruitment lifecycle management",
      "Dedicated recruitment team",
      "Cost-effective solutions",
      "Scalable operations",
      "Technology and tools included",
      "Performance metrics and reporting",
    ],
  },
  "remote-staffing": {
    overview: "Build distributed teams with remote professionals skilled in working across time zones and cultures. Our remote staffing solutions help you access global talent pools while maintaining high productivity and collaboration standards.",
    keyFeatures: [
      "Global remote talent pool",
      "Time zone coordination",
      "Cultural integration support",
      "Remote work tools and infrastructure",
      "Virtual team management",
      "Cross-cultural communication training",
    ],
  },
  "technical-training": {
    overview: "Comprehensive training programs to upskill your workforce and prepare them for emerging technologies. Our technical training services cover a wide range of technologies and methodologies, ensuring your team stays ahead of industry trends.",
    keyFeatures: [
      "Customized training programs",
      "Industry expert instructors",
      "Hands-on practical sessions",
      "Certification programs",
      "Ongoing support and mentorship",
      "Technology stack training",
    ],
  },
  "manpower-supply": {
    overview: "Specialized manpower solutions for the Saudi Arabia market, ensuring compliance with local regulations and cultural fit. We provide comprehensive workforce solutions tailored to the unique requirements of the Saudi market.",
    keyFeatures: [
      "Saudi Arabia market expertise",
      "Local regulatory compliance",
      "Cultural fit assessment",
      "Work visa and documentation support",
      "Large-scale manpower supply",
      "Industry-specific expertise",
    ],
  },
};

export function ServiceDetailOverview({ slug }) {
  const service = serviceData[slug] || serviceData["executive-search"];

  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
          <div className="space-y-6">
            <h2 className="tracking-tight text-[#0b2677] leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[22pt]">
              Service Overview
            </h2>
            <p className="text-[#0b2677]/70 text-base sm:text-lg leading-relaxed">
              {service.overview}
            </p>
          </div>

          <div className="space-y-6 pt-8 border-t border-[#e5e5e5]">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0b2677]">
              Key Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {service.keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-[#f4f4f4] rounded-lg border border-[#e5e5e5]"
                >
                  <span className="text-[#9a01cd] font-bold text-lg mt-0.5">•</span>
                  <span className="text-sm sm:text-base text-[#0b2677]/70 leading-relaxed grow">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
