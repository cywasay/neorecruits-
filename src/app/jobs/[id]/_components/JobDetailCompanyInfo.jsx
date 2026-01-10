"use client";

import * as React from "react";
import { Building2, Globe, MapPin, Calendar, Users, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function JobDetailCompanyInfo({ job }) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#0b2677]">Company Information</h2>
      <div className="bg-[#f4f4f4] rounded-xl p-6 sm:p-8 space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Building2 className="w-6 h-6 text-[#9a01cd]" />
            <h3 className="text-xl sm:text-2xl font-bold text-[#0b2677]">{job.companyInfo.name}</h3>
          </div>
          <p className="text-base text-[#0b2677]/70 leading-relaxed">
            {job.companyInfo.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#e5e5e5]">
          <div className="flex items-start gap-3">
            <Users className="w-5 h-5 text-[#9a01cd] mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-[#0b2677]/60 uppercase tracking-wider">Size</p>
              <p className="text-base text-[#0b2677] font-medium">{job.companyInfo.size}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Briefcase className="w-5 h-5 text-[#9a01cd] mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-[#0b2677]/60 uppercase tracking-wider">Industry</p>
              <p className="text-base text-[#0b2677] font-medium">{job.companyInfo.industry}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Calendar className="w-5 h-5 text-[#9a01cd] mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-[#0b2677]/60 uppercase tracking-wider">Founded</p>
              <p className="text-base text-[#0b2677] font-medium">{job.companyInfo.founded}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#9a01cd] mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-[#0b2677]/60 uppercase tracking-wider">Location</p>
              <p className="text-base text-[#0b2677] font-medium">{job.companyInfo.address}</p>
            </div>
          </div>
        </div>

        {job.companyInfo.website && (
          <div className="pt-4 border-t border-[#e5e5e5]">
            <Button
              variant="outline"
              className="rounded-lg border-2 border-[#0b2677]/20 text-[#0b2677] hover:bg-[#0b2677] hover:text-white transition-all duration-300 font-bold text-xs uppercase tracking-widest"
              asChild
            >
              <Link href={job.companyInfo.website} target="_blank" rel="noopener noreferrer">
                <Globe className="mr-2 w-4 h-4" />
                Visit Company Website
              </Link>
            </Button>
          </div>
        )}

        {/* Map Placeholder */}
        <div className="pt-4 border-t border-[#e5e5e5]">
          <p className="text-sm font-semibold text-[#0b2677]/60 uppercase tracking-wider mb-3">
            Location Map
          </p>
          <div className="w-full h-64 bg-[#e5e5e5] rounded-lg flex items-center justify-center text-[#0b2677]/50">
            {/* In production, integrate with Google Maps or Mapbox */}
            <div className="text-center space-y-2">
              <MapPin className="w-12 h-12 mx-auto" />
              <p className="text-sm font-medium">Interactive map would appear here</p>
              <p className="text-xs">{job.companyInfo.address}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
