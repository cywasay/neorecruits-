"use client";

import * as React from "react";
import { Briefcase, MapPin, DollarSign, Clock, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const rolesByService = {
  "executive-search": [
    { title: "CEO / Managing Director", location: "Dubai, UAE", salary: "$150K - $300K" },
    { title: "CFO / Finance Director", location: "Riyadh, Saudi Arabia", salary: "$120K - $250K" },
    { title: "CTO / Technology Director", location: "Dubai, UAE", salary: "$140K - $280K" },
    { title: "VP of Operations", location: "Abu Dhabi, UAE", salary: "$130K - $220K" },
  ],
  "permanent-staffing": [
    { title: "Senior Software Engineer", location: "Dubai, UAE", salary: "$80K - $120K" },
    { title: "Financial Analyst", location: "Riyadh, Saudi Arabia", salary: "$60K - $90K" },
    { title: "Project Manager", location: "Abu Dhabi, UAE", salary: "$70K - $110K" },
    { title: "Marketing Manager", location: "Dubai, UAE", salary: "$65K - $95K" },
  ],
  "contract-recruitment": [
    { title: "Contract Developer", location: "Remote / Dubai", salary: "$50/hour" },
    { title: "Temporary Finance Manager", location: "Riyadh, Saudi Arabia", salary: "$70/hour" },
    { title: "Project Consultant", location: "Abu Dhabi, UAE", salary: "$80/hour" },
  ],
  "outsource-rpo": [
    { title: "Volume Recruitment Programs", location: "Multiple Locations", salary: "Custom Pricing" },
    { title: "Recruitment Team Setup", location: "Client Site / Remote", salary: "Custom Pricing" },
  ],
  "remote-staffing": [
    { title: "Remote Developer", location: "Remote", salary: "$60K - $100K" },
    { title: "Virtual Assistant", location: "Remote", salary: "$30K - $50K" },
    { title: "Remote Project Manager", location: "Remote", salary: "$70K - $110K" },
  ],
  "technical-training": [
    { title: "AI/ML Training Program", location: "Dubai, UAE", duration: "6 weeks" },
    { title: "Cloud Architecture Course", location: "Riyadh, Saudi Arabia", duration: "4 weeks" },
    { title: "DevOps Training", location: "Remote", duration: "8 weeks" },
  ],
  "manpower-supply": [
    { title: "Construction Workers", location: "Saudi Arabia", quantity: "50-200" },
    { title: "Manufacturing Staff", location: "Saudi Arabia", quantity: "100-500" },
    { title: "Hospitality Staff", location: "Saudi Arabia", quantity: "20-100" },
  ],
};

export function ServiceDetailRoles({ slug }) {
  const roles = rolesByService[slug] || rolesByService["permanent-staffing"];

  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="tracking-tight text-[#0b2677] leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[22pt]">
              Available Roles & Positions
            </h2>
            <p className="text-[#0b2677]/70 text-base sm:text-lg leading-relaxed">
              Examples of positions we typically fill through this service. This
              list is not exhaustive and we can source for any role within your
              requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {roles.map((role, index) => (
              <div
                key={index}
                className="bg-[#f4f4f4] rounded-xl p-6 sm:p-8 border border-[#e5e5e5] hover:border-[#9a01cd]/20 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-[#9a01cd]" />
                  <h3 className="text-lg sm:text-xl font-bold text-[#0b2677] group-hover:text-[#9a01cd] transition-colors duration-300">
                    {role.title}
                  </h3>
                </div>
                <div className="space-y-3 text-sm sm:text-base">
                  <div className="flex items-center gap-2 text-[#0b2677]/70">
                    <MapPin className="w-4 h-4 text-[#9a01cd]" />
                    <span>{role.location}</span>
                  </div>
                  {role.salary && (
                    <div className="flex items-center gap-2 text-[#0b2677]/70">
                      <DollarSign className="w-4 h-4 text-[#9a01cd]" />
                      <span>{role.salary}</span>
                    </div>
                  )}
                  {role.duration && (
                    <div className="flex items-center gap-2 text-[#0b2677]/70">
                      <Clock className="w-4 h-4 text-[#9a01cd]" />
                      <span>{role.duration}</span>
                    </div>
                  )}
                  {role.quantity && (
                    <div className="flex items-center gap-2 text-[#0b2677]/70">
                      <Users className="w-4 h-4 text-[#9a01cd]" />
                      <span>Quantity: {role.quantity}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <p className="text-[#0b2677]/60 text-sm sm:text-base mb-4">
              Don't see the role you're looking for? We can source for any position.
            </p>
            <Button
              variant="outline"
              className="rounded-lg border-2 border-[#0b2677]/20 text-[#0b2677] hover:bg-[#0b2677] hover:text-white transition-all duration-300 font-bold text-xs uppercase tracking-widest"
              asChild
            >
              <Link href="/services#request-talent">
                Request Custom Role
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
