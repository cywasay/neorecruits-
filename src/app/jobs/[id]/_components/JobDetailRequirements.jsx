"use client";

import * as React from "react";
import { Award } from "lucide-react";

export function JobDetailRequirements({ job }) {
  return (
    <section className="space-y-6 bg-[#f4f4f4] rounded-xl p-6 sm:p-8">
      <div className="flex items-center gap-3">
        <Award className="w-6 h-6 text-[#9a01cd]" />
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0b2677]">Requirements</h2>
      </div>
      <ul className="space-y-3">
        {job.requirements.map((requirement, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-[#9a01cd] font-bold text-lg mt-0.5">•</span>
            <span className="text-base sm:text-lg text-[#0b2677]/70 leading-relaxed grow
              {requirement}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
