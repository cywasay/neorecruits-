"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Droplets,
  Zap,
  Leaf,
  Laptop,
  Truck,
  Building2,
  Factory,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const industries = [
  {
    id: "oil-gas",
    title: "Oil & Gas",
    icon: Droplets,
    description:
      "Specialized recruitment for upstream, midstream, and downstream operations, connecting top talent with leading energy companies across exploration, production, refining, and distribution.",
    image: "/hero-1-v2.png",
    stats: "800+ placements",
    link: "/industries/oil-gas",
    isCore: true,
    keyRoles: ["Petroleum Engineers", "Operations Managers", "Project Engineers"],
  },
  {
    id: "electrical-power",
    title: "Electrical & Power",
    icon: Zap,
    description:
      "Recruiting experts for power generation, transmission, distribution, and electrical engineering roles to support critical infrastructure and energy systems.",
    image: "/hero-2-v2.png",
    stats: "500+ placements",
    link: "/industries/electrical-power",
    keyRoles: ["Electrical Engineers", "Power Systems Specialists", "Maintenance Engineers"],
  },
  {
    id: "renewable-energy",
    title: "Renewable Energy & Sustainability",
    icon: Leaf,
    description:
      "Leading recruitment for solar, wind, hydro, and emerging renewable energy technologies, supporting the global transition to sustainable energy solutions.",
    image: "/hero-3.png",
    stats: "400+ placements",
    link: "/industries/renewable-energy",
    keyRoles: ["Solar Engineers", "Wind Energy Specialists", "Sustainability Consultants"],
  },
  {
    id: "technology",
    title: "Technology & Digital Transformation",
    icon: Laptop,
    description:
      "Connecting technology leaders with software engineers, AI/ML specialists, cloud architects, and digital transformation experts driving innovation.",
    image: "/expertise-tech.png",
    stats: "1200+ placements",
    link: "/industries/technology",
    keyRoles: ["Software Engineers", "AI/ML Specialists", "Cloud Architects"],
  },
  {
    id: "logistics",
    title: "Logistics, Supply Chain & Operations",
    icon: Truck,
    description:
      "Recruiting supply chain professionals, logistics managers, operations specialists, and warehouse leaders to optimize global supply networks.",
    image: "/hero-1.png",
    stats: "600+ placements",
    link: "/industries/logistics",
    keyRoles: ["Supply Chain Managers", "Logistics Coordinators", "Operations Directors"],
  },
  {
    id: "construction",
    title: "Construction, Engineering & Project Management",
    icon: Building2,
    description:
      "Building teams for infrastructure projects, civil engineering, project management, and construction leadership roles across major developments.",
    image: "/hero-2.png",
    stats: "700+ placements",
    link: "/industries/construction",
    keyRoles: ["Civil Engineers", "Project Managers", "Construction Managers"],
  },
  {
    id: "manufacturing",
    title: "Industrial & Manufacturing",
    icon: Factory,
    description:
      "Specialized recruitment for manufacturing operations, industrial engineering, quality control, and production management across diverse manufacturing sectors.",
    image: "/hero-1-v2.png",
    stats: "550+ placements",
    link: "/industries/manufacturing",
    keyRoles: ["Manufacturing Engineers", "Production Managers", "Quality Engineers"],
  },
];

export function IndustriesShowcase() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[#f4f4f4]">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="tracking-tight text-[#0b2677] leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[22pt]">
              Industries We Serve
            </h2>
            <p className="text-[#0b2677]/70 text-base sm:text-lg leading-relaxed">
              Specialized recruitment solutions across diverse industries, connecting
              elite talent with sector-leading organizations.
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="group cursor-pointer bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-[#e5e5e5] hover:border-[#9a01cd]/20"
              >
                {/* Image */}
                <div className="relative h-[200px] sm:h-[240px] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0b2677]/60 via-transparent to-transparent" />
                  {/* Core Badge */}
                  {industry.isCore && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-[#9a01cd] text-white font-bold text-xs uppercase tracking-wider">
                        Core Industry
                      </Badge>
                    </div>
                  )}
                  {/* Icon Overlay */}
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#9a01cd] transition-colors duration-300">
                    <industry.icon className="w-6 h-6 text-white group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col grow space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0b2677] group-hover:text-[#9a01cd] transition-colors duration-300">
                      {industry.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#9a01cd] uppercase tracking-wider">
                      {industry.stats}
                    </p>
                  </div>
                  <p className="text-sm sm:text-base text-[#0b2677]/70 leading-relaxed grow">
                    {industry.description}
                  </p>

                  {/* Key Roles Preview */}
                  <div className="space-y-2 pt-2 border-t border-[#e5e5e5]">
                    <p className="text-xs font-semibold text-[#0b2677]/60 uppercase tracking-wider">
                      Key Roles:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {industry.keyRoles.slice(0, 2).map((role, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs bg-[#f4f4f4] text-[#0b2677] border-[#0b2677]/20"
                        >
                          {role}
                        </Badge>
                      ))}
                      {industry.keyRoles.length > 2 && (
                        <Badge
                          variant="outline"
                          className="text-xs bg-[#f4f4f4] text-[#0b2677]/60 border-[#0b2677]/20"
                        >
                          +{industry.keyRoles.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-lg border-2 border-[#0b2677]/20 text-[#0b2677] hover:bg-[#9a01cd] hover:border-[#9a01cd] hover:text-white transition-all duration-300 font-bold text-xs uppercase tracking-widest self-start"
                    asChild
                  >
                    <Link href={industry.link}>
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
