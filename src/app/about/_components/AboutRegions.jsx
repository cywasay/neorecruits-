"use client";

import * as React from "react";
import { Globe, Handshake, MapPin, Award } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const regions = [
  {
    name: "Middle East & GCC",
    countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman"],
  },
  {
    name: "Asia Pacific",
    countries: ["Pakistan", "India", "Singapore", "Malaysia"],
  },
  {
    name: "Europe",
    countries: ["United Kingdom", "Germany", "Netherlands"],
  },
  {
    name: "Americas",
    countries: ["United States", "Canada"],
  },
];

const partnerships = [
  {
    type: "Industry Leaders",
    description: "Trusted by Fortune 500 companies and government entities",
    icon: Award,
  },
  {
    type: "Global Networks",
    description: "Partnerships with leading recruitment associations worldwide",
    icon: Handshake,
  },
  {
    type: "Technology Partners",
    description: "Strategic alliances with HR tech innovators",
    icon: Globe,
  },
];

export function AboutRegions() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-[#0b2677]">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="tracking-tight text-white leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[22pt]">
              Global Reach & Strategic Partnerships
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed">
              Operating across multiple continents with trusted partnerships that
              enable us to deliver exceptional talent solutions worldwide.
            </p>
          </div>

          {/* Regions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {regions.map((region, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#9a01cd]" />
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {region.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {region.countries.map((country, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="bg-white/10 text-white border-white/30 text-xs"
                    >
                      {country}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Partnerships */}
          <div className="space-y-8 pt-8 border-t border-white/20">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center">
              Key Partnerships
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {partnerships.map((partnership, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 rounded-full bg-[#9a01cd]/20 flex items-center justify-center">
                    <partnership.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#9a01cd]" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-3">
                    {partnership.type}
                  </h4>
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                    {partnership.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
