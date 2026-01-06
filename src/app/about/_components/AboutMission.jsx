"use client";

import * as React from "react";

export function AboutMission() {
  return (
    <section className="relative py-24 bg-[#0f1d2d]">
      {/* Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-white uppercase leading-tight">
              Our Mission
            </h2>
          </div>
          <div className="border-l-2 border-[#00b8b0] pl-8">
            <p className="text-white/80 text-sm md:text-base leading-relaxed font-light">
              Our mission is to empower clients to enhance productivity with
              their talent acquisition strategies. We are dedicated to
              delivering efficient, cost-effective, and adaptable solutions that
              adhere to industry best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
