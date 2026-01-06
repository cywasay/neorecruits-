"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Jobs() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-[#f4f4f4] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        {/* Top Section: Matching Screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Left Side: Overlapping Images */}
          <div className="relative h-[320px] sm:h-[380px] md:h-[450px] w-full order-2 lg:order-1">
            {/* Back Image */}
            <div className="absolute top-0 left-0 w-[75%] sm:w-[80%] h-[220px] sm:h-[270px] md:h-[320px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl z-0">
              <Image
                src="/job-man.png"
                alt="Professional walking"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#0b2677]/10" />
            </div>

            {/* Front Image */}
            <div className="absolute bottom-0 right-0 w-[70%] sm:w-[75%] h-[180px] sm:h-[230px] md:h-[280px] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-4 sm:border-8 border-white z-10">
              <Image
                src="/job-office.png"
                alt="Office team"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 order-1 lg:order-2">
            <h2 className="tracking-tight text-[#0b2677] leading-tight text-xl sm:text-2xl md:text-3xl lg:text-[22pt]">
              Ready for your next <br className="hidden sm:block" />
              opportunity?
            </h2>

            <div className="space-y-4 sm:space-y-6 text-[#0b2677]/70 leading-relaxed text-sm sm:text-base">
              <p>
                NeoRecruits connects talented professionals with top employers
                across the GCC and beyond. Whether you're seeking permanent
                roles, contract work, or project-based assignments — we're here
                to help you succeed.
              </p>
            </div>

            <div className="pt-2">
              <Button
                className="rounded-lg bg-[#9a01cd] hover:bg-[#9a01cd]/90 text-white h-11 sm:h-12 px-5 sm:px-6 text-xs font-bold tracking-widest uppercase w-full sm:w-auto"
                asChild
              >
                <Link href="/jobs">
                  View All Job Openings
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
