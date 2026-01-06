"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Who We Are", href: "#who-we-are" },
  { label: "Locations", href: "#locations" },
  { label: "Why NeoRecruits", href: "#why-neorecruits" },
  { label: "Leadership", href: "#leadership" },
  { label: "Key Facts", href: "#key-facts" },
];

export function AboutHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] w-full flex flex-col overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/about-hero-bg.png")',
        }}
      >
        <div className="absolute inset-0 bg-[#0f1d2d]/60" />
        <div className="absolute inset-0 bg-linear-to-b from-[#0f1d2d]/30 via-transparent to-[#0f1d2d]" />
      </div>

      {/* Main Content Area - Title Left Aligned */}
      <div className="container mx-auto px-10 relative z-10 flex-1 flex flex-col justify-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase animate-in fade-in slide-in-from-bottom-8 duration-700">
          Who We Are
        </h1>
      </div>

      {/* Bottom Navigation Buttons - Overlaying the background */}
      <div className="absolute bottom-8 left-0 w-full z-20">
        <div className="container mx-auto px-10">
          <div className="flex flex-wrap gap-4 justify-center">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "px-8 py-3 rounded-lg border border-white/20 bg-[#0f1d2d]/30 backdrop-blur-md text-white/80 font-bold uppercase tracking-widest text-xs transition-all hover:bg-white hover:text-[#0f1d2d] hover:border-white min-w-[140px] text-center",
                  index === 0 &&
                    "bg-transparent border-[#00b8b0] text-white shadow-[0_0_20px_rgba(0,184,176,0.3)] hover:border-[#00b8b0] hover:text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
