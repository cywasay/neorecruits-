"use client";

import * as React from "react";
import { MapPin, Briefcase, Clock, DollarSign, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function JobDetailHero({ job }) {
  return (
    <section className="relative pt-16 bg-[#0b2677]">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto py-12 sm:py-16">
          <div className="space-y-6 text-white">
            <div className="space-y-4">
              <div className="flex items-center gap-3 flex-wrap">
                <Badge className="bg-[#9a01cd] text-white font-bold text-xs uppercase tracking-wider">
                  {job.type}
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-white/10 text-white border-white/30 font-semibold text-xs"
                >
                  {job.industry}
                </Badge>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase">
                {job.title}
              </h1>
              <p className="text-xl sm:text-2xl text-white/80 font-semibold">{job.company}</p>
            </div>

            {/* Job Details */}
            <div className="flex flex-wrap items-center gap-6 text-base sm:text-lg text-white/90 pt-4 border-t border-white/20">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#9a01cd]" />
                <span>{job.location}</span>
              </div>
              {job.salary && (
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-[#9a01cd]" />
                  <span>{job.salary}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#9a01cd]" />
                <span>Posted {job.posted}</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#9a01cd]" />
                <span>{job.experience}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
