"use client";

import * as React from "react";
import Image from "next/image";

export function AboutStory() {
  return (
    <section id="who-we-are" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0f1d2d] uppercase leading-tight">
              Our Story
            </h2>
            <div className="space-y-6 text-[#0f1d2d]/70 text-sm md:text-base leading-relaxed font-light">
              <p>
                NeoRecruits enables clients to improve their performance through
                better talent acquisition. We deliver world-class talent
                acquisition solutions, from Board and Executive moves, through
                to training, strategic hiring projects and complex recruitment
                programmes across geographies.
              </p>
              <p>
                NeoRecruits has the expertise to provide best practice, cost
                effective and agile solutions. Bringing together Recruitment
                Process Outsourcing (RPO), Permanent Placement, Contract
                Staffing and Assessment Centres, NeoRecruits has the capability
                to create a unique solution to meet your needs.
              </p>
            </div>
          </div>

          {/* Right: Abstract Image */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-[500px] aspect-square animate-in fade-in zoom-in duration-1000">
              <Image
                src="/about-pentagon.png"
                alt="Abstract Pentagon Symbol"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
