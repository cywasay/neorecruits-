"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function IndustryDetailCTA({ slug }) {
  const industryName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-[#0b2677] overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-[2rem] p-8 sm:p-12 md:p-16 border border-white/20 shadow-2xl">
            <div className="text-center space-y-6 sm:space-y-8">
              <h2 className="tracking-tight text-white leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[22pt]">
                Ready to Find Talent in {industryName}?
              </h2>
              <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                Let's discuss how our specialized recruitment expertise in {industryName.toLowerCase()}
                can help you find the right professionals for your organization. Get in touch with our team today.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4">
                <Button
                  className="rounded-lg bg-[#9a01cd] hover:bg-[#9a01cd]/90 text-white h-12 sm:h-14 px-6 sm:px-8 text-xs sm:text-sm font-bold tracking-widest uppercase"
                  asChild
                >
                  <Link href="/services#request-talent">
                    Request Talent
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-lg border-2 border-white/30 bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white h-12 sm:h-14 px-6 sm:px-8 text-xs sm:text-sm font-bold tracking-widest uppercase transition-all"
                  asChild
                >
                  <Link href="tel:+97141234567">
                    <Phone className="mr-2 w-5 h-5" />
                    Call Us
                  </Link>
                </Button>
              </div>

              <div className="flex items-center justify-center gap-6 pt-6 border-t border-white/10">
                <a
                  href="mailto:info@neorecruits.com"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm sm:text-base"
                >
                  <Mail className="w-5 h-5" />
                  info@neorecruits.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
