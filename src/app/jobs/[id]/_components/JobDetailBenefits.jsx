"use client";

import * as React from "react";
import { Heart, Check } from "lucide-react";

export function JobDetailBenefits({ job }) {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <Heart className="w-6 h-6 text-[#9a01cd]" />
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0b2677]">Benefits & Perks</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {job.benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-4 bg-white rounded-lg border border-[#e5e5e5] hover:border-[#9a01cd]/30 transition-colors duration-300"
          >
            <Check className="w-5 h-5 text-[#9a01cd] mt-0.5 shrink-0" />
            <span className="text-base text-[#0b2677]/70 leading-relaxed grow">
              {benefit}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
