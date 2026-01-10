"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function AboutCEOMessage() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#f4f4f4] rounded-2xl sm:rounded-[2rem] p-8 sm:p-12 md:p-16 shadow-xl border border-[#e5e5e5]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
              {/* CEO Photo */}
              <div className="md:col-span-1 flex justify-center md:justify-start">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                  <Image
                    src="/hero-1.png"
                    alt="CEO"
                    fill
                    sizes="256px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Message Content */}
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h2 className="tracking-tight text-[#0b2677] leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[22pt] mb-2">
                    A Message from Our CEO
                  </h2>
                  <p className="text-[#9a01cd] font-semibold text-sm sm:text-base uppercase tracking-wider">
                    Leadership Vision
                  </p>
                </div>

                <div className="space-y-4 text-[#0b2677]/70 text-base sm:text-lg leading-relaxed">
                  <p>
                    At NeoRecruits, we believe that exceptional talent drives
                    exceptional business outcomes. Our commitment is to connect
                    the right people with the right opportunities, creating
                    lasting value for both our clients and candidates.
                  </p>
                  <p>
                    With operations spanning 40+ countries and deep expertise
                    across multiple industries, we're not just recruiters—we're
                    your strategic talent partners, dedicated to helping you
                    build the teams that will shape tomorrow.
                  </p>
                </div>

                {/* Signature */}
                <div className="pt-4 space-y-2">
                  <div className="relative w-40 h-16 sm:w-48 sm:h-20">
                    <Image
                      src="/mainLogo.png"
                      alt="CEO Signature"
                      fill
                      sizes="192px"
                      className="object-contain object-left brightness-0 opacity-50"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[#0b2677] font-bold text-lg">
                      [CEO Name]
                    </p>
                    <p className="text-[#0b2677]/60 text-sm sm:text-base">
                      Chief Executive Officer
                    </p>
                    <p className="text-[#0b2677]/60 text-sm sm:text-base">
                      NeoRecruits
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
