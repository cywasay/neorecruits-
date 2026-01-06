"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Jobs() {
  return (
    <section className="relative py-24 bg-[#f4f4f4] overflow-hidden">
      <div className="container mx-auto px-10">
        {/* Top Section: Matching Screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side: Overlapping Images */}
          <div className="relative h-[450px] w-full order-2 lg:order-1">
            {/* Back Image */}
            <div className="absolute top-0 left-0 w-[80%] h-[320px] rounded-2xl overflow-hidden shadow-xl z-0">
              <Image
                src="/job-man.png"
                alt="Professional walking"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#0b2677]/10" />
            </div>

            {/* Front Image */}
            <div className="absolute bottom-0 right-0 w-[75%] h-[280px] rounded-2xl overflow-hidden shadow-2xl border-8 border-white z-10">
              <Image
                src="/job-office.png"
                alt="Office team"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="tracking-tight text-[#0b2677] leading-tight">
              Ready for your next <br /> opportunity?
            </h2>

            <div className="space-y-6 text-[#0b2677]/70 leading-relaxed">
              <p>
                NeoRecruits connects talented professionals with top employers
                across the GCC and beyond. Whether you're seeking permanent
                roles, contract work, or project-based assignments — we're here
                to help you succeed.
              </p>
            </div>

            <div className="pt-2">
              <Button
                className="rounded-lg bg-[#9a01cd] hover:bg-[#9a01cd]/90 text-white h-12 px-6 text-xs md:text-sm font-bold tracking-widest uppercase"
                asChild
              >
                <Link href="/jobs">
                  View All Job Openings
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
