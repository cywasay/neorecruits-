"use client";

import * as React from "react";
import { Shield, Award, CheckCircle, FileCheck, Globe, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

const certifications = [
  {
    name: "ISO 9001:2015",
    description: "Quality Management System",
    icon: Award,
  },
  {
    name: "GDPR Compliant",
    description: "Data Protection & Privacy",
    icon: Shield,
  },
  {
    name: "SOC 2 Certified",
    description: "Security & Compliance",
    icon: Lock,
  },
  {
    name: "Licensed RPO Provider",
    description: "Recruitment Process Outsourcing",
    icon: FileCheck,
  },
  {
    name: "Global Recruitment Standards",
    description: "International Best Practices",
    icon: Globe,
  },
  {
    name: "Ethical Recruitment Certified",
    description: "Responsible Business Practices",
    icon: CheckCircle,
  },
];

export function AboutCompliance() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-[#f4f4f4]">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="tracking-tight text-[#0b2677] leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[22pt]">
              Compliance & Certifications
            </h2>
            <p className="text-[#0b2677]/70 text-base sm:text-lg leading-relaxed">
              We maintain the highest standards of compliance and hold
              certifications that demonstrate our commitment to quality, security,
              and ethical business practices.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#e5e5e5] hover:border-[#9a01cd]/20 text-center group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-lg bg-[#9a01cd]/10 flex items-center justify-center group-hover:bg-[#9a01cd] transition-colors duration-300">
                  <cert.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#9a01cd] group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-sm sm:text-base font-bold text-[#0b2677] mb-1 sm:mb-2 group-hover:text-[#9a01cd] transition-colors duration-300">
                  {cert.name}
                </h4>
                <p className="text-xs sm:text-sm text-[#0b2677]/60 leading-tight">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>

          {/* Compliance Statement */}
          <div className="bg-[#0b2677] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-center">
            <div className="max-w-3xl mx-auto space-y-4">
              <Shield className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-[#9a01cd]" />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                Committed to Excellence & Compliance
              </h3>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                NeoRecruits is fully committed to maintaining the highest
                standards of compliance, data protection, and ethical business
                practices. All our operations adhere to local and international
                regulations, ensuring the security and privacy of both client and
                candidate information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
