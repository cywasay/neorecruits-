"use client";

import * as React from "react";
import { Search, Briefcase, MapPin, Filter, Building2, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const countries = [
  "All Countries",
  "United Arab Emirates",
  "Saudi Arabia",
  "Qatar",
  "Kuwait",
  "Bahrain",
  "Oman",
];

const cities = {
  "All Countries": ["All Cities"],
  "United Arab Emirates": ["All Cities", "Dubai", "Abu Dhabi", "Sharjah", "Ajman"],
  "Saudi Arabia": ["All Cities", "Riyadh", "Jeddah", "Dammam", "Khobar"],
  "Qatar": ["All Cities", "Doha"],
  "Kuwait": ["All Cities", "Kuwait City"],
  "Bahrain": ["All Cities", "Manama"],
  "Oman": ["All Cities", "Muscat"],
};

const industries = [
  "All Industries",
  "Oil & Gas",
  "Electrical & Power",
  "Renewable Energy",
  "Technology & Digital",
  "Logistics & Supply Chain",
  "Construction & Engineering",
  "Industrial & Manufacturing",
];

const jobTypes = ["All Types", "Full-time", "Part-time", "Contract", "Temporary", "Remote"];

const experienceLevels = [
  "All Levels",
  "Entry Level (0-2 years)",
  "Mid Level (2-5 years)",
  "Senior Level (5-10 years)",
  "Executive (10+ years)",
];

export function JobsSearch({ onFilterChange }) {
  const [filters, setFilters] = React.useState({
    keyword: "",
    country: "All Countries",
    city: "All Cities",
    industry: "All Industries",
    jobType: "All Types",
    experience: "All Levels",
  });

  const availableCities = cities[filters.country] || cities["All Countries"];

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    // Reset city when country changes
    if (key === "country") {
      newFilters.city = "All Cities";
    }
    setFilters(newFilters);
    if (onFilterChange) {
      onFilterChange(newFilters);
    }
  };

  const handleSearch = () => {
    if (onFilterChange) {
      onFilterChange(filters);
    }
  };

  return (
    <section className="relative py-8 sm:py-12 md:py-16 bg-[#f4f4f4] border-b border-[#e5e5e5]">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Search Box */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-[#e5e5e5]">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#0b2677] mb-4">
                <Search className="w-5 h-5" />
                <h3 className="text-lg sm:text-xl font-bold">Search Jobs</h3>
              </div>

              {/* Main Search Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Keyword Search */}
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0b2677]/40" />
                  <Input
                    type="text"
                    placeholder="Job title or keyword"
                    value={filters.keyword}
                    onChange={(e) => handleFilterChange("keyword", e.target.value)}
                    className="pl-10 h-12 bg-[#f4f4f4] border-[#e5e5e5] focus:border-[#9a01cd] focus:ring-[#9a01cd]/20 text-[#0b2677] placeholder:text-[#0b2677]/50"
                  />
                </div>

                {/* Country Filter */}
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0b2677]/40" />
                  <select
                    value={filters.country}
                    onChange={(e) => handleFilterChange("country", e.target.value)}
                    className="w-full pl-10 pr-4 h-12 bg-[#f4f4f4] border border-[#e5e5e5] rounded-md focus:border-[#9a01cd] focus:ring-2 focus:ring-[#9a01cd]/20 text-[#0b2677] appearance-none cursor-pointer"
                  >
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>

                {/* City Filter */}
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0b2677]/40" />
                  <select
                    value={filters.city}
                    onChange={(e) => handleFilterChange("city", e.target.value)}
                    disabled={filters.country === "All Countries"}
                    className="w-full pl-10 pr-4 h-12 bg-[#f4f4f4] border border-[#e5e5e5] rounded-md focus:border-[#9a01cd] focus:ring-2 focus:ring-[#9a01cd]/20 text-[#0b2677] appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {availableCities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Secondary Filters Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Industry Filter */}
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0b2677]/40" />
                  <select
                    value={filters.industry}
                    onChange={(e) => handleFilterChange("industry", e.target.value)}
                    className="w-full pl-10 pr-4 h-12 bg-[#f4f4f4] border border-[#e5e5e5] rounded-md focus:border-[#9a01cd] focus:ring-2 focus:ring-[#9a01cd]/20 text-[#0b2677] appearance-none cursor-pointer"
                  >
                    {industries.map((ind) => (
                      <option key={ind} value={ind}>
                        {ind}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Job Type Filter */}
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0b2677]/40" />
                  <select
                    value={filters.jobType}
                    onChange={(e) => handleFilterChange("jobType", e.target.value)}
                    className="w-full pl-10 pr-4 h-12 bg-[#f4f4f4] border border-[#e5e5e5] rounded-md focus:border-[#9a01cd] focus:ring-2 focus:ring-[#9a01cd]/20 text-[#0b2677] appearance-none cursor-pointer"
                  >
                    {jobTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Experience Level Filter */}
                <div className="relative">
                  <Award className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0b2677]/40" />
                  <select
                    value={filters.experience}
                    onChange={(e) => handleFilterChange("experience", e.target.value)}
                    className="w-full pl-10 pr-4 h-12 bg-[#f4f4f4] border border-[#e5e5e5] rounded-md focus:border-[#9a01cd] focus:ring-2 focus:ring-[#9a01cd]/20 text-[#0b2677] appearance-none cursor-pointer"
                  >
                    {experienceLevels.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Action Row */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
                <Button
                  onClick={handleSearch}
                  className="rounded-lg bg-[#9a01cd] hover:bg-[#9a01cd]/90 text-white h-12 px-8 text-xs font-bold tracking-widest uppercase w-full sm:w-auto"
                >
                  Search Jobs
                  <Search className="ml-2 w-4 h-4" />
                </Button>
                <div className="text-sm text-[#0b2677]/60 text-center sm:text-right">
                  <span className="font-semibold text-[#0b2677]">1,200+</span> job
                  openings available
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
