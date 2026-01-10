"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Upload, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function JobsCTA() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-[#0b2677] overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[50%] h-[120%] bg-linear-to-bl from-white/5 to-transparent pointer-events-none -skew-x-12 origin-top-right z-0 rounded-l-[100px] blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Side: Content */}
            <div className="space-y-6 sm:space-y-8">
              <h2 className="tracking-tight text-white leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[22pt]">
                Can't Find the Perfect Role?
              </h2>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                Join our talent network and get matched with exclusive
                opportunities. Submit your resume and let our recruiters find
                the right role for you.
              </p>
              <div className="space-y-4 pt-4">
                <Button
                  className="rounded-lg bg-[#9a01cd] hover:bg-[#9a01cd]/90 text-white h-12 sm:h-14 px-6 sm:px-8 text-xs sm:text-sm font-bold tracking-widest uppercase w-full sm:w-auto"
                  asChild
                >
                  <Link href="/jobs/upload-resume">
                    <Upload className="mr-2 w-5 h-5" />
                    Upload Your Resume
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-lg border-2 border-white/30 bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white h-12 sm:h-14 px-6 sm:px-8 text-xs sm:text-sm font-bold tracking-widest uppercase transition-all w-full sm:w-auto"
                  asChild
                >
                  <Link href="/contact">
                    <Mail className="mr-2 w-5 h-5" />
                    Contact Recruiter
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Side: Image */}
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="/job-man.png"
                alt="Professional with resume"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#0b2677]/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
