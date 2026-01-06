"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Building2, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const stats = [
  {
    label: "Successful Placements",
    value: "15,000+",
    icon: Users,
    color: "text-[#539ce0]",
  },
  {
    label: "Industries Served",
    value: "25+",
    icon: Building2,
    color: "text-[#2165b8]",
  },
  {
    label: "Countries Reached",
    value: "40+",
    icon: Globe2,
    color: "text-[#9a01cd]",
  },
  {
    label: "Client Satisfaction",
    value: "98%",
    icon: Users,
    color: "text-[#539ce0]",
  },
];

export function Intro() {
  return (
    <section className="relative py-16 overflow-hidden bg-[#0b2677]">
      {/* Subtle Geometric Background Pattern Backdrop */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Overlapping Images (Reflecting the SS) */}
          <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-full">
            {/* Back Image (Architecture/City) */}
            <div className="absolute top-0 left-0 w-[65%] sm:w-[70%] h-[200px] sm:h-[240px] md:h-[280px] rounded-xl overflow-hidden shadow-lg z-0">
              <Image
                src="/hero-3.png"
                alt="Infrastructure"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#0b2677]/20" />
            </div>

            {/* Front Image (People/Office) */}
            <div className="absolute bottom-0 right-0 w-[70%] sm:w-[75%] h-[180px] sm:h-[220px] md:h-[260px] rounded-xl overflow-hidden shadow-2xl border-4 border-[#0b2677] z-10">
              <Image
                src="/intro-experience.png"
                alt="Teamwork"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="tracking-tight text-white leading-tight text-xl sm:text-2xl md:text-3xl lg:text-[22pt]">
              We build leading edge infrastructure within your organisation
            </h2>

            <div className="space-y-3 sm:space-y-4 text-white/70 leading-relaxed text-sm sm:text-base">
              <p>
                NeoRecruits is considered the best recruitment agency in the
                region that provides a comprehensive range of solutions to
                deliver optimum business performance. Our dedicated, highly
                experienced teams work with you every step of the way to ensure
                your HR needs are taken care of.
              </p>
              <p>
                Trusted by global brands and industry giants, NeoRecruits
                operates across 40 countries, bringing local expertise on a
                global scale.
              </p>
            </div>

            <div className="pt-2">
              <Button
                variant="outline"
                className="group h-11 sm:h-12 px-5 sm:px-6 rounded-lg bg-white text-black hover:bg-white/90 border-none flex items-center gap-3 transition-all text-xs font-bold tracking-widest uppercase w-full sm:w-auto justify-center sm:justify-start"
                asChild
              >
                <Link href="/about">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Section - More compact */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 sm:pt-12 border-t border-white/5 mt-8 sm:mt-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="space-y-1 group text-center sm:text-left"
            >
              <div className="flex items-center gap-2 mb-1 justify-center sm:justify-start">
                <stat.icon
                  className={cn(
                    "w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity",
                    stat.color
                  )}
                />
                <span className="text-xl sm:text-2xl font-bold tracking-tighter text-white">
                  {stat.value}
                </span>
              </div>
              <div className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-[0.15em] group-hover:text-white/60 transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
