"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function IndustriesCTA() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-[#f4f4f4] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0b2677] rounded-2xl sm:rounded-[2rem] p-8 sm:p-12 md:p-16 shadow-2xl border border-[#0b2677]/20">
            <div className="text-center space-y-6 sm:space-y-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-[#9a01cd]/20 flex items-center justify-center">
                <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 text-[#9a01cd]" />
              </div>
              <h2 className="tracking-tight text-white leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[22pt]">
                Ready to Build Your Industry Team?
              </h2>
              <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                Whether you're in banking, technology, healthcare, or any other
                sector, we have the expertise to find the right talent for your
                organization.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4">
                <Button
                  className="rounded-lg bg-[#9a01cd] hover:bg-[#9a01cd]/90 text-white h-12 sm:h-14 px-6 sm:px-8 text-xs sm:text-sm font-bold tracking-widest uppercase"
                  asChild
                >
                  <Link href="/contact">
                    Discuss Your Needs
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-lg border-2 border-white/30 bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white h-12 sm:h-14 px-6 sm:px-8 text-xs sm:text-sm font-bold tracking-widest uppercase transition-all"
                  asChild
                >
                  <Link href="/jobs">
                    View Job Openings
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
