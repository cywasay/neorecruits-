"use client";

import * as React from "react";
import { Shield, CheckCircle, Award, FileCheck, Globe, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const complianceByIndustry = {
  "oil-gas": {
    title: "Compliance & Certifications",
    description: "The Oil & Gas industry requires strict adherence to safety, environmental, and operational standards. We ensure all candidates meet industry-specific compliance requirements.",
    requirements: [
      {
        title: "Safety Certifications",
        items: ["NEBOSH IGC/Diploma", "IOSH Managing Safely", "H2S Awareness", "Offshore Safety", "First Aid/CPR"],
        icon: Shield,
      },
      {
        title: "Technical Standards",
        items: ["API Certifications", "ISO 9001/14001/45001", "ASME Standards", "API RP Standards", "Process Safety Management"],
        icon: Award,
      },
      {
        title: "Regional Compliance",
        items: ["UAE/MENA Regulations", "Work Permits & Visas", "Local Engineering Registration", "Project-specific Certifications", "Environmental Permits"],
        icon: Globe,
      },
    ],
  },
  "electrical-power": {
    title: "Compliance & Certifications",
    description: "Electrical & Power sector professionals must meet stringent technical, safety, and regulatory standards to ensure reliable and safe power delivery.",
    requirements: [
      {
        title: "Electrical Certifications",
        items: ["IEEE Standards", "IEC Standards", "NEC Compliance", "Electrical Safety Certifications", "High Voltage Certifications"],
        icon: Shield,
      },
      {
        title: "Professional Licensing",
        items: ["PE License (where applicable)", "Electrical Engineer Registration", "Project Management Certifications", "ISO Standards", "Quality Certifications"],
        icon: Award,
      },
      {
        title: "Regional Requirements",
        items: ["DEWA/ADWEA Standards (UAE)", "Saudi SEC Standards", "Local Engineering Registration", "Work Permits", "Grid Code Compliance"],
        icon: Globe,
      },
    ],
  },
  "renewable-energy": {
    title: "Compliance & Certifications",
    description: "Renewable energy projects require adherence to environmental standards, grid interconnection requirements, and sustainable development certifications.",
    requirements: [
      {
        title: "Technical Certifications",
        items: ["Solar PV Installation", "Wind Turbine Certifications", "Energy Storage Systems", "Grid Integration Standards", "Performance Testing"],
        icon: Award,
      },
      {
        title: "Environmental & Safety",
        items: ["Environmental Impact Assessment", "Health & Safety Certifications", "ISO 14001 Environmental Management", "Sustainability Reporting", "Carbon Footprint Standards"],
        icon: Shield,
      },
      {
        title: "Regulatory Compliance",
        items: ["Renewable Energy Regulations", "Grid Code Compliance", "Feed-in Tariff Requirements", "Regional Energy Policies", "International Standards (IEC/IEEE)"],
        icon: Globe,
      },
    ],
  },
  "technology": {
    title: "Compliance & Standards",
    description: "Technology professionals must stay current with industry standards, security protocols, and regulatory requirements, especially in regulated sectors.",
    requirements: [
      {
        title: "Technical Certifications",
        items: ["Cloud Certifications (AWS/Azure/GCP)", "Cybersecurity Certifications", "Agile/Scrum Certifications", "ITIL Certification", "Professional Development Certificates"],
        icon: Award,
      },
      {
        title: "Security & Data Protection",
        items: ["ISO 27001", "GDPR Compliance", "Data Privacy Certifications", "SOC 2 Compliance", "Security Clearances (where required)"],
        icon: Shield,
      },
      {
        title: "Industry Standards",
        items: ["Software Development Standards", "Quality Assurance (ISO 9001)", "Accessibility Standards", "Regional Data Regulations", "Technology Licenses"],
        icon: FileCheck,
      },
    ],
  },
  "logistics": {
    title: "Compliance & Certifications",
    description: "Logistics and supply chain operations must comply with customs regulations, transportation standards, and international trade requirements.",
    requirements: [
      {
        title: "Supply Chain Certifications",
        items: ["CSCP (Certified Supply Chain Professional)", "CPIM (Certified in Production and Inventory Management)", "CILT (Chartered Institute of Logistics)", "Six Sigma", "Lean Certifications"],
        icon: Award,
      },
      {
        title: "Regulatory Compliance",
        items: ["Customs & Trade Regulations", "Import/Export Licenses", "Dangerous Goods Handling", "HACCP (Food Logistics)", "Pharmaceutical Compliance (if applicable)"],
        icon: FileCheck,
      },
      {
        title: "Regional Requirements",
        items: ["UAE/MENA Trade Regulations", "Free Zone Compliance", "Transportation Licenses", "Warehouse Licensing", "Regional Work Permits"],
        icon: Globe,
      },
    ],
  },
  "construction": {
    title: "Compliance & Certifications",
    description: "Construction projects require adherence to building codes, safety standards, quality certifications, and regional construction regulations.",
    requirements: [
      {
        title: "Safety Certifications",
        items: ["OSHA/NEBOSH", "Construction Safety Management", "Scaffolding/Crane Certifications", "First Aid", "Fire Safety"],
        icon: Shield,
      },
      {
        title: "Professional Certifications",
        items: ["PMP (Project Management Professional)", "P.Eng/Chartered Engineer", "RICS Membership", "BIM Certification", "LEED Certification"],
        icon: Award,
      },
      {
        title: "Regional Compliance",
        items: ["Dubai Municipality Standards", "ADM Building Codes", "Saudi Building Code", "Local Engineering Registration", "Construction Permits"],
        icon: Globe,
      },
    ],
  },
  "manufacturing": {
    title: "Compliance & Certifications",
    description: "Manufacturing operations must meet quality standards, safety regulations, environmental compliance, and industry-specific certifications.",
    requirements: [
      {
        title: "Quality Certifications",
        items: ["ISO 9001 Quality Management", "ISO 14001 Environmental", "ISO 45001 Occupational Health", "Six Sigma Certifications", "Lean Manufacturing"],
        icon: Award,
      },
      {
        title: "Safety & Regulatory",
        items: ["OSHA Compliance", "HACCP (Food Manufacturing)", "FDA/GMP (Pharmaceuticals)", "CE Marking (EU)", "Product Safety Standards"],
        icon: Shield,
      },
      {
        title: "Technical Standards",
        items: ["Industry-Specific Standards", "Process Safety Management", "Automation Certifications", "Calibration Standards", "Regional Manufacturing Regulations"],
        icon: FileCheck,
      },
    ],
  },
};

export function IndustryDetailCompliance({ slug }) {
  const compliance = complianceByIndustry[slug] || complianceByIndustry["oil-gas"];

  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="tracking-tight text-[#0b2677] leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[22pt]">
              {compliance.title}
            </h2>
            <p className="text-[#0b2677]/70 text-base sm:text-lg leading-relaxed">
              {compliance.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {compliance.requirements.map((req, index) => (
              <div
                key={index}
                className="bg-[#f4f4f4] rounded-xl p-6 sm:p-8 border border-[#e5e5e5] hover:border-[#9a01cd]/20 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#9a01cd]/10 flex items-center justify-center group-hover:bg-[#9a01cd] transition-colors duration-300">
                    <req.icon className="w-5 h-5 text-[#9a01cd] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0b2677] group-hover:text-[#9a01cd] transition-colors duration-300">
                    {req.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {req.items.map((requirement, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-2 text-sm sm:text-base text-[#0b2677]/70"
                    >
                      <CheckCircle className="w-4 h-4 text-[#9a01cd] mt-0.5 shrink-0" />
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-[#0b2677] rounded-xl p-6 sm:p-8 text-white">
            <div className="flex items-start gap-4">
              <Users className="w-8 h-8 sm:w-10 sm:h-10 text-[#9a01cd] shrink-0 mt-1" />
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold">
                  Our Compliance Expertise
                </h3>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  Our recruitment team understands the critical importance of compliance
                  in {slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}. We verify all certifications,
                  ensure regulatory compliance, and match candidates who not only have
                  the technical skills but also meet all industry-specific requirements
                  for your projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
