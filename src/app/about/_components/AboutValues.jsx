"use client";

import * as React from "react";
import Image from "next/image";
import {
  TrendingUp,
  Users,
  ShieldCheck,
  HeartHandshake,
  Globe2,
} from "lucide-react";

const values = [
  {
    title: "Value Creation",
    description: "Going Beyond Expectations",
    icon: TrendingUp,
  },
  {
    title: "Customer Focus",
    description: "Building Lasting Relationships",
    icon: Users,
  },
  {
    title: "Integrity",
    description: "Acting Ethically and Taking Ownership",
    icon: ShieldCheck,
  },
  {
    title: "Teamwork",
    description: "Collaborating to achieve",
    icon: HeartHandshake,
  },
  {
    title: "Community",
    description: "Making Life Meaningful",
    icon: Globe2,
  },
];

export function AboutValues() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Values List */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0f1d2d] uppercase leading-tight">
                Core Values
              </h2>
              <p className="text-[#00b8b0] font-bold text-sm tracking-widest uppercase">
                The Spirit of Team Neo
              </p>
              {/* Decorative underline */}
              <svg
                width="200"
                height="20"
                viewBox="0 0 200 20"
                className="text-[#00b8b0] fill-current"
              >
                <path
                  d="M0,10 Q50,20 100,10 T200,10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
              </svg>
            </div>

            <div className="grid gap-8">
              {values.map((value, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-[#00b8b0]/10 flex items-center justify-center text-[#00b8b0] group-hover:bg-[#00b8b0] group-hover:text-white transition-colors duration-300">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0f1d2d] group-hover:text-[#00b8b0] transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-[#0f1d2d]/60 text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image Collage */}
          <div className="relative h-[600px] w-full hidden lg:block">
            {/* Top Image */}
            <div className="absolute top-0 right-0 w-[80%] h-[350px] rounded-2xl overflow-hidden shadow-xl z-0">
              <Image
                src="/about-values-1.png"
                alt="Value Creation"
                fill
                className="object-cover"
              />
            </div>
            {/* Bottom Image */}
            <div className="absolute bottom-0 left-0 w-[80%] h-[350px] rounded-2xl overflow-hidden shadow-2xl border-8 border-white z-10">
              <Image
                src="/about-values-2.png"
                alt="Teamwork"
                fill
                className="object-cover"
              />
            </div>
            {/* Text Overlay Graphic */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-lg w-64 text-center">
              <h4 className="text-3xl font-black text-[#0f1d2d] leading-none mb-1">
                IMPACT
              </h4>
              <p className="text-xs font-bold text-[#00b8b0] tracking-widest uppercase mb-1">
                STARTS WITH
              </p>
              <h4 className="text-2xl font-black text-[#0f1d2d] leading-none mb-1">
                EXCEPTIONAL
              </h4>
              <h4 className="text-3xl font-black text-[#00b8b0] leading-none">
                TALENT
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
