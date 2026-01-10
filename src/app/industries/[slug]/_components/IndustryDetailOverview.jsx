"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const industryData = {
  "oil-gas": {
    overview: "The Oil & Gas industry is at the heart of global energy supply, driving economic growth and powering industries worldwide. As a core industry for NeoRecruits, we have extensive expertise in connecting top-tier talent with leading energy companies across upstream exploration and production, midstream transportation and storage, and downstream refining and distribution operations.",
    keyFeatures: [
      "Upstream exploration and production expertise",
      "Midstream infrastructure and logistics",
      "Downstream refining and petrochemicals",
      "Offshore and onshore operations",
      "Health, Safety, and Environmental compliance",
      "Project management and engineering excellence",
    ],
    marketInsights: "The industry continues to evolve with technological innovation, sustainability initiatives, and digital transformation reshaping traditional operations while maintaining focus on operational excellence and safety.",
  },
  "electrical-power": {
    overview: "The Electrical & Power sector is critical infrastructure that powers economies and communities. We specialize in recruiting experts for power generation, transmission, distribution, and electrical engineering roles to support the reliable delivery of electricity across grids and industrial facilities.",
    keyFeatures: [
      "Power generation and plant operations",
      "Transmission and distribution systems",
      "Electrical engineering and design",
      "Grid modernization and smart systems",
      "Maintenance and reliability engineering",
      "Renewable energy integration",
    ],
    marketInsights: "The sector is experiencing rapid transformation with grid modernization, renewable energy integration, and smart grid technologies creating new opportunities for skilled professionals.",
  },
  "renewable-energy": {
    overview: "Renewable Energy & Sustainability represents the future of global energy systems. We lead recruitment for solar, wind, hydro, and emerging renewable energy technologies, supporting the global transition to sustainable energy solutions that combat climate change and drive innovation.",
    keyFeatures: [
      "Solar and photovoltaic systems",
      "Wind energy development",
      "Hydroelectric and tidal power",
      "Energy storage solutions",
      "Sustainability and ESG consulting",
      "Green technology innovation",
    ],
    marketInsights: "Renewable energy is experiencing exponential growth with government commitments, corporate sustainability goals, and technological advancements driving unprecedented demand for specialized talent.",
  },
  "technology": {
    overview: "Technology & Digital Transformation is reshaping every industry. We connect technology leaders with software engineers, AI/ML specialists, cloud architects, and digital transformation experts who are driving innovation and competitive advantage for organizations worldwide.",
    keyFeatures: [
      "Software engineering and development",
      "Artificial Intelligence and Machine Learning",
      "Cloud architecture and DevOps",
      "Cybersecurity and data protection",
      "Digital transformation consulting",
      "Product management and innovation",
    ],
    marketInsights: "The technology sector continues to evolve rapidly with AI, cloud computing, and digital transformation creating continuous demand for highly skilled professionals across all levels.",
  },
  "logistics": {
    overview: "Logistics, Supply Chain & Operations is the backbone of global commerce. We recruit supply chain professionals, logistics managers, operations specialists, and warehouse leaders who optimize global supply networks, ensure efficient distribution, and drive operational excellence.",
    keyFeatures: [
      "Supply chain strategy and optimization",
      "Warehouse and distribution management",
      "Transportation and fleet management",
      "Procurement and sourcing",
      "Inventory management and planning",
      "Logistics technology and automation",
    ],
    marketInsights: "The logistics sector is evolving with e-commerce growth, supply chain digitization, and automation technologies creating demand for professionals who can navigate complex global networks.",
  },
  "construction": {
    overview: "Construction, Engineering & Project Management shapes the built environment. We build teams for infrastructure projects, civil engineering, project management, and construction leadership roles across major developments, from skyscrapers to transportation networks.",
    keyFeatures: [
      "Civil and structural engineering",
      "Project management and planning",
      "Construction management and supervision",
      "Infrastructure development",
      "Building information modeling (BIM)",
      "Quality control and safety management",
    ],
    marketInsights: "The construction industry is experiencing growth driven by infrastructure investment, urbanization, and sustainable building practices, requiring skilled professionals who can manage complex projects.",
  },
  "manufacturing": {
    overview: "Industrial & Manufacturing drives production and economic output. We specialize in recruiting for manufacturing operations, industrial engineering, quality control, and production management across diverse manufacturing sectors, from automotive to electronics to pharmaceuticals.",
    keyFeatures: [
      "Manufacturing engineering and operations",
      "Production planning and control",
      "Quality assurance and control",
      "Industrial automation and Industry 4.0",
      "Lean manufacturing and process improvement",
      "Maintenance and reliability engineering",
    ],
    marketInsights: "Manufacturing is transforming with Industry 4.0, automation, and smart manufacturing creating demand for professionals skilled in both traditional manufacturing and emerging technologies.",
  },
};

export function IndustryDetailOverview({ slug }) {
  const industry = industryData[slug] || industryData["oil-gas"];

  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
          <div className="space-y-6">
            <h2 className="tracking-tight text-[#0b2677] leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[22pt]">
              Industry Overview
            </h2>
            <p className="text-[#0b2677]/70 text-base sm:text-lg leading-relaxed">
              {industry.overview}
            </p>
          </div>

          <div className="space-y-6 pt-8 border-t border-[#e5e5e5]">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0b2677]">
              Our Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {industry.keyFeatures.map((feature, index) => (
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

          <div className="space-y-4 pt-8 border-t border-[#e5e5e5] bg-[#f4f4f4] rounded-xl p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-bold text-[#0b2677]">
              Market Insights
            </h3>
            <p className="text-sm sm:text-base text-[#0b2677]/70 leading-relaxed">
              {industry.marketInsights}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
