"use client";

import * as React from "react";
import { Briefcase, Users, GraduationCap, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const roleCategoriesByIndustry = {
  "oil-gas": [
    {
      category: "Engineering & Technical",
      roles: ["Petroleum Engineer", "Drilling Engineer", "Reservoir Engineer", "Process Engineer", "Facilities Engineer"],
      experience: "2-15 years",
    },
    {
      category: "Operations & Production",
      roles: ["Operations Manager", "Production Supervisor", "Field Operator", "Maintenance Manager", "HSE Manager"],
      experience: "3-20 years",
    },
    {
      category: "Project Management",
      roles: ["Project Manager", "Project Engineer", "Construction Manager", "Commissioning Manager", "Project Controls Specialist"],
      experience: "5-20 years",
    },
    {
      category: "Management & Leadership",
      roles: ["General Manager", "Operations Director", "Business Development Manager", "Country Manager", "VP Operations"],
      experience: "10+ years",
    },
  ],
  "electrical-power": [
    {
      category: "Engineering",
      roles: ["Electrical Engineer", "Power Systems Engineer", "Protection Engineer", "Design Engineer", "Project Engineer"],
      experience: "2-15 years",
    },
    {
      category: "Operations & Maintenance",
      roles: ["Maintenance Engineer", "Field Service Engineer", "Operations Manager", "Reliability Engineer", "Technician"],
      experience: "3-15 years",
    },
    {
      category: "Grid & Systems",
      roles: ["Grid Engineer", "Transmission Engineer", "Distribution Engineer", "SCADA Engineer", "Smart Grid Specialist"],
      experience: "3-12 years",
    },
  ],
  "renewable-energy": [
    {
      category: "Solar Energy",
      roles: ["Solar Engineer", "PV Design Engineer", "Solar Project Manager", "Solar Technician", "Solar Sales Engineer"],
      experience: "2-10 years",
    },
    {
      category: "Wind Energy",
      roles: ["Wind Engineer", "Wind Farm Manager", "Wind Technician", "Aerodynamics Engineer", "Turbine Engineer"],
      experience: "2-12 years",
    },
    {
      category: "Sustainability & Consulting",
      roles: ["Sustainability Consultant", "ESG Specialist", "Energy Analyst", "Carbon Management Specialist", "Renewable Energy Advisor"],
      experience: "3-15 years",
    },
  ],
  "technology": [
    {
      category: "Software Development",
      roles: ["Software Engineer", "Full Stack Developer", "Backend Developer", "Frontend Developer", "DevOps Engineer"],
      experience: "1-10 years",
    },
    {
      category: "AI & Machine Learning",
      roles: ["ML Engineer", "AI Researcher", "Data Scientist", "Deep Learning Engineer", "AI Product Manager"],
      experience: "2-12 years",
    },
    {
      category: "Cloud & Infrastructure",
      roles: ["Cloud Architect", "AWS/Azure Specialist", "Site Reliability Engineer", "Infrastructure Engineer", "Cloud Security Specialist"],
      experience: "3-15 years",
    },
    {
      category: "Leadership & Management",
      roles: ["CTO", "Engineering Manager", "VP Engineering", "Product Manager", "Technical Lead"],
      experience: "5-20 years",
    },
  ],
  "logistics": [
    {
      category: "Supply Chain Management",
      roles: ["Supply Chain Manager", "Procurement Manager", "Sourcing Specialist", "Demand Planner", "Category Manager"],
      experience: "3-15 years",
    },
    {
      category: "Logistics Operations",
      roles: ["Logistics Manager", "Transportation Manager", "Warehouse Manager", "Distribution Manager", "Fleet Manager"],
      experience: "3-15 years",
    },
    {
      category: "Operations & Planning",
      roles: ["Operations Manager", "Inventory Manager", "Supply Chain Analyst", "Operations Coordinator", "Planning Manager"],
      experience: "2-12 years",
    },
  ],
  "construction": [
    {
      category: "Engineering",
      roles: ["Civil Engineer", "Structural Engineer", "Project Engineer", "MEP Engineer", "Quantity Surveyor"],
      experience: "2-15 years",
    },
    {
      category: "Project Management",
      roles: ["Project Manager", "Construction Manager", "Site Manager", "Project Coordinator", "Planning Engineer"],
      experience: "5-20 years",
    },
    {
      category: "Technical & Specialized",
      roles: ["BIM Engineer", "Quality Engineer", "Safety Manager", "Contracts Manager", "Estimator"],
      experience: "3-15 years",
    },
  ],
  "manufacturing": [
    {
      category: "Manufacturing Engineering",
      roles: ["Manufacturing Engineer", "Process Engineer", "Production Engineer", "Industrial Engineer", "Automation Engineer"],
      experience: "2-15 years",
    },
    {
      category: "Production & Operations",
      roles: ["Production Manager", "Operations Manager", "Production Supervisor", "Plant Manager", "Shift Manager"],
      experience: "3-20 years",
    },
    {
      category: "Quality & Maintenance",
      roles: ["Quality Engineer", "Quality Manager", "Maintenance Engineer", "Reliability Engineer", "Calibration Technician"],
      experience: "2-15 years",
    },
  ],
};

export function IndustryDetailRoleCategories({ slug }) {
  const categories = roleCategoriesByIndustry[slug] || roleCategoriesByIndustry["oil-gas"];

  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-[#f4f4f4]">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="tracking-tight text-[#0b2677] leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[22pt]">
              Role Categories
            </h2>
            <p className="text-[#0b2677]/70 text-base sm:text-lg leading-relaxed">
              We recruit across all levels and specializations within this industry.
              Here are the key role categories we typically fill.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#e5e5e5] hover:border-[#9a01cd]/20 group flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#9a01cd]/10 flex items-center justify-center group-hover:bg-[#9a01cd] transition-colors duration-300">
                    <Briefcase className="w-5 h-5 text-[#9a01cd] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0b2677] group-hover:text-[#9a01cd] transition-colors duration-300">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-3 mb-4 grow">
                  {category.roles.map((role, roleIndex) => (
                    <div
                      key={roleIndex}
                      className="flex items-center gap-2 text-sm sm:text-base text-[#0b2677]/70"
                    >
                      <span className="text-[#9a01cd]">•</span>
                      <span>{role}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#e5e5e5]">
                  <Badge
                    variant="outline"
                    className="text-xs bg-[#f4f4f4] text-[#0b2677] border-[#0b2677]/20"
                  >
                    Experience: {category.experience}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
