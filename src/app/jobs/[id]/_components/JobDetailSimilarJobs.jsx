"use client";

import * as React from "react";
import Link from "next/link";
import { MapPin, Briefcase, Clock, ArrowRight, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/badge";

// Mock similar jobs - In production, this would be fetched based on industry/location
const similarJobs = [
  {
    id: 2,
    title: "Financial Analyst",
    company: "Global Finance Group",
    location: "Abu Dhabi, UAE",
    type: "Full-time",
    salary: "$60,000 - $90,000",
    posted: "3 days ago",
    industry: "Banking & Finance",
  },
  {
    id: 5,
    title: "Data Scientist",
    company: "AI Solutions Ltd.",
    location: "Remote / Dubai",
    type: "Remote",
    salary: "$85,000 - $125,000",
    posted: "4 days ago",
    industry: "Technology & Digital",
  },
  {
    id: 7,
    title: "Electrical Power Systems Engineer",
    company: "PowerGrid Solutions",
    location: "Abu Dhabi, UAE",
    type: "Full-time",
    salary: "$75,000 - $110,000",
    posted: "1 day ago",
    industry: "Electrical & Power",
  },
];

export function JobDetailSimilarJobs({ currentJobId }) {
  // Filter out current job and limit to 3 similar jobs
  const filteredJobs = similarJobs.filter((job) => job.id !== currentJobId).slice(0, 3);

  if (filteredJobs.length === 0) return null;

  return (
    <section className="space-y-6 pt-8 border-t border-[#e5e5e5]">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#0b2677]">Similar Jobs</h2>
      <div className="grid grid-cols-1 gap-4">
        {filteredJobs.map((job) => (
          <Link
            key={job.id}
            href={`/jobs/${job.id}`}
            className="block p-6 bg-white rounded-xl border border-[#e5e5e5] hover:border-[#9a01cd]/30 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2 grow">
                <h3 className="text-xl font-bold text-[#0b2677] group-hover:text-[#9a01cd] transition-colors duration-300">
                  {job.title}
                </h3>
                <p className="text-base font-semibold text-[#0b2677]/80">{job.company}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-[#0b2677]/60 pt-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  {job.salary && (
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      <span>{job.salary}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{job.posted}</span>
                  </div>
                </div>
                <div className="pt-2">
                  <Badge
                    variant="outline"
                    className="bg-[#0b2677]/5 text-[#0b2677] border-[#0b2677]/20 text-xs"
                  >
                    <Briefcase className="w-3 h-3 mr-1" />
                    {job.industry}
                  </Badge>
                </div>
              </div>
              <ArrowRight className="w-6 h-6 text-[#0b2677]/40 group-hover:text-[#9a01cd] transition-colors duration-300 shrink-0 mt-1" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
