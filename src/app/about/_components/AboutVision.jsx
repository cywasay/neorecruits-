"use client";

import * as React from "react";
import Image from "next/image";

export function AboutVision() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl group">
            {/* Decorative Background Element (Left Side) */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[50%] h-[120%] bg-[#0f1d2d] pointer-events-none -skew-x-12 origin-top-left z-0 -translate-x-1/2" />
            <Image
              src="/about-vision.png"
              alt="Team collaboration"
              fill
              className="object-cover relative z-10 transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0f1d2d] uppercase leading-tight">
              Our Vision
            </h2>
            <div className="space-y-6 text-[#0f1d2d]/70 text-sm md:text-base leading-relaxed font-light">
              <p>
                NeoRecruits Talent strives to be the partner of choice today to
                enhance the business performance of tomorrow.
              </p>
              <p>
                We envision a world where every organization has access to the
                exceptional talent they need to thrive, and every professional
                finds a career path that fulfills their potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
