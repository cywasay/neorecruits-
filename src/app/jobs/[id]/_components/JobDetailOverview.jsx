"use client";

import * as React from "react";

export function JobDetailOverview({ job }) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#0b2677]">Job Overview</h2>
      <div className="prose prose-lg max-w-none">
        <p className="text-base sm:text-lg text-[#0b2677]/70 leading-relaxed">
          {job.overview}
        </p>
      </div>
    </section>
  );
}
