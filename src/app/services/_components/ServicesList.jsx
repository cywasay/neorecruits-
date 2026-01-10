"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Users,
  FileText,
  Building2,
  Laptop,
  GraduationCap,
  UserCheck,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "executive-search",
    title: "Executive Search",
    icon: Users,
    description:
      "Identify and attract top-tier leadership talent to drive your organization's strategic vision forward.",
    industries: ["Banking & Finance", "Technology", "Healthcare", "Manufacturing"],
    link: "/services/executive-search",
  },
  {
    id: "permanent-staffing",
    title: "Permanent Staffing",
    icon: Briefcase,
    description:
      "Long-term talent acquisition strategies focused on finding candidates who fit your culture and goals.",
    industries: ["All Industries", "Technology", "Finance", "Healthcare", "Engineering"],
    link: "/services/permanent-staffing",
  },
  {
    id: "contract-recruitment",
    title: "Contract / Temporary Recruitment",
    icon: FileText,
    description:
      "Flexible staffing solutions to meet short-term project demands and seasonal peaks with skilled professionals.",
    industries: ["Technology", "Construction", "Healthcare", "Retail", "Logistics"],
    link: "/services/contract-recruitment",
  },
  {
    id: "outsource-rpo",
    title: "Outsource Staffing / RPO",
    icon: Building2,
    description:
      "End-to-end recruitment process outsourcing to streamline your hiring operations and reduce costs.",
    industries: ["Technology", "Finance", "Healthcare", "Call Centers", "Manufacturing"],
    link: "/services/outsource-rpo",
  },
  {
    id: "remote-staffing",
    title: "Remote / Virtual Staffing",
    icon: Laptop,
    description:
      "Build distributed teams with remote professionals skilled in working across time zones and cultures.",
    industries: ["Technology", "Digital Marketing", "Customer Support", "Data Analytics", "IT Services"],
    link: "/services/remote-staffing",
  },
  {
    id: "technical-training",
    title: "Technical Training Services",
    icon: GraduationCap,
    description:
      "Comprehensive training programs to upskill your workforce and prepare them for emerging technologies.",
    industries: ["Technology", "Engineering", "Manufacturing", "Healthcare", "Finance"],
    link: "/services/technical-training",
  },
  {
    id: "manpower-supply",
    title: "Manpower Supply Services",
    icon: UserCheck,
    description:
      "Specialized manpower solutions for Saudi Arabia market, ensuring compliance with local regulations and cultural fit.",
    industries: ["Construction", "Manufacturing", "Hospitality", "Retail", "Logistics"],
    link: "/services/manpower-supply",
    region: "Saudi Arabia",
  },
];

export function ServicesList() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-[#f4f4f4]">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="tracking-tight text-[#0b2677] leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[22pt]">
              Our Core Services
            </h2>
            <p className="text-[#0b2677]/70 text-base sm:text-lg leading-relaxed">
              Comprehensive recruitment solutions designed to meet your unique
              business needs across all industries.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#e5e5e5] hover:border-[#9a01cd]/20 group flex flex-col"
              >
                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-[#9a01cd]/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#9a01cd] transition-colors duration-300">
                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#9a01cd] group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#0b2677] group-hover:text-[#9a01cd] transition-colors duration-300 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#0b2677]/70 leading-relaxed mb-4 sm:mb-6 grow">
                  {service.description}
                </p>

                {/* Industries */}
                <div className="mb-4 sm:mb-6 space-y-2">
                  <p className="text-xs sm:text-sm font-semibold text-[#0b2677]/60 uppercase tracking-wider">
                    Suitable Industries:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.industries.slice(0, 3).map((industry, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-xs bg-[#f4f4f4] text-[#0b2677] border-[#0b2677]/20"
                      >
                        {industry}
                      </Badge>
                    ))}
                    {service.industries.length > 3 && (
                      <Badge
                        variant="outline"
                        className="text-xs bg-[#f4f4f4] text-[#0b2677]/60 border-[#0b2677]/20"
                      >
                        +{service.industries.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Region Badge (if applicable) */}
                {service.region && (
                  <div className="mb-4">
                    <Badge
                      variant="outline"
                      className="text-xs bg-[#9a01cd]/10 text-[#9a01cd] border-[#9a01cd]/30 font-semibold"
                    >
                      Available in {service.region}
                    </Badge>
                  </div>
                )}

                {/* Actions */}
                <div className="flex flex-col gap-3 pt-4 border-t border-[#e5e5e5]">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-lg border-2 border-[#0b2677]/20 text-[#0b2677] hover:bg-[#0b2677] hover:text-white transition-all duration-300 font-bold text-xs uppercase tracking-widest w-full"
                    asChild
                  >
                    <Link href={service.link}>
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button
                    size="sm"
                    className="rounded-lg bg-[#9a01cd] hover:bg-[#9a01cd]/90 text-white font-bold text-xs uppercase tracking-widest w-full"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("request-talent")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                  >
                    Request Talent
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
