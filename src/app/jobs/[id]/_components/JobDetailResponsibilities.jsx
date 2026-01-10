"use client";

import * as React from "react";
import { CheckCircle } from "lucide-react";

export function JobDetailResponsibilities({ job }) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#0b2677]">Key Responsibilities</h2>
      <ul className="space-y-4">
        {job.responsibilities.map((responsibility, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-[#9a01cd] mt-0.5 shrink-0" />
            <span className="text-base sm:text-lg text-[#0b2677]/70 leading-relaxed grow">
              {responsibility}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
