"use client";

import * as React from "react";
import Link from "next/link";
import { MapPin, Briefcase, Clock, ArrowRight, DollarSign, SortAsc, SortDesc } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const jobListings = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Tech Innovations Inc.",
    location: "Dubai, UAE",
    country: "United Arab Emirates",
    city: "Dubai",
    type: "Full-time",
    salary: "$80,000 - $120,000",
    salaryMin: 80000,
    salaryMax: 120000,
    posted: "2 days ago",
    postedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    industry: "Technology & Digital",
    experience: "Senior Level (5-10 years)",
    description:
      "We're seeking an experienced software engineer to join our dynamic team. You'll work on cutting-edge AI projects and collaborate with top talent in the industry.",
    requirements: ["5+ years experience", "React, Node.js", "AI/ML knowledge"],
  },
  {
    id: 2,
    title: "Financial Analyst",
    company: "Global Finance Group",
    location: "Abu Dhabi, UAE",
    country: "United Arab Emirates",
    city: "Abu Dhabi",
    type: "Full-time",
    salary: "$60,000 - $90,000",
    salaryMin: 60000,
    salaryMax: 90000,
    posted: "3 days ago",
    postedDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    industry: "Banking & Finance",
    experience: "Mid Level (2-5 years)",
    description:
      "Join our finance team and help drive strategic financial decisions. Work with senior leadership on budgeting, forecasting, and financial analysis.",
    requirements: ["3+ years experience", "CFA preferred", "Excel expertise"],
  },
  {
    id: 3,
    title: "Petroleum Engineer",
    company: "Energy Solutions Ltd.",
    location: "Riyadh, Saudi Arabia",
    country: "Saudi Arabia",
    city: "Riyadh",
    type: "Full-time",
    salary: "$90,000 - $140,000",
    salaryMin: 90000,
    salaryMax: 140000,
    posted: "5 days ago",
    postedDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    industry: "Oil & Gas",
    experience: "Senior Level (5-10 years)",
    description:
      "Lead upstream exploration and production operations. Work with cutting-edge technology to optimize oil and gas extraction processes.",
    requirements: ["Bachelor's in Petroleum Engineering", "5+ years experience", "API certifications"],
  },
  {
    id: 4,
    title: "Project Manager - Construction",
    company: "BuildCorp International",
    location: "Doha, Qatar",
    country: "Qatar",
    city: "Doha",
    type: "Contract",
    salary: "$90,000 - $130,000",
    salaryMin: 90000,
    salaryMax: 130000,
    posted: "1 week ago",
    postedDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    industry: "Construction & Engineering",
    experience: "Executive (10+ years)",
    description:
      "Lead major infrastructure projects from conception to completion. Manage teams, budgets, and timelines for large-scale construction initiatives.",
    requirements: ["PMP certification", "10+ years experience", "Civil engineering"],
  },
  {
    id: 5,
    title: "Data Scientist",
    company: "AI Solutions Ltd.",
    location: "Remote / Dubai",
    country: "United Arab Emirates",
    city: "Dubai",
    type: "Remote",
    salary: "$85,000 - $125,000",
    salaryMin: 85000,
    salaryMax: 125000,
    posted: "4 days ago",
    postedDate: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
    industry: "Technology & Digital",
    experience: "Senior Level (5-10 years)",
    description:
      "Apply advanced machine learning techniques to solve complex business problems. Work with large datasets and build predictive models.",
    requirements: ["PhD/Master's", "Python, R", "ML frameworks"],
  },
  {
    id: 6,
    title: "Investment Banking Associate",
    company: "Capital Markets Group",
    location: "Dubai, UAE",
    country: "United Arab Emirates",
    city: "Dubai",
    type: "Full-time",
    salary: "$100,000 - $150,000",
    salaryMin: 100000,
    salaryMax: 150000,
    posted: "6 days ago",
    postedDate: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000),
    industry: "Banking & Finance",
    experience: "Mid Level (2-5 years)",
    description:
      "Support senior bankers in M&A transactions, IPOs, and corporate finance deals. Analyze market trends and prepare client presentations.",
    requirements: ["MBA preferred", "2+ years IB experience", "Strong analytical skills"],
  },
  {
    id: 7,
    title: "Electrical Power Systems Engineer",
    company: "PowerGrid Solutions",
    location: "Abu Dhabi, UAE",
    country: "United Arab Emirates",
    city: "Abu Dhabi",
    type: "Full-time",
    salary: "$75,000 - $110,000",
    salaryMin: 75000,
    salaryMax: 110000,
    posted: "1 day ago",
    postedDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    industry: "Electrical & Power",
    experience: "Mid Level (2-5 years)",
    description:
      "Design and maintain electrical power systems for critical infrastructure. Work on grid modernization and smart grid technologies.",
    requirements: ["Bachelor's in Electrical Engineering", "3+ years experience", "Power systems expertise"],
  },
  {
    id: 8,
    title: "Solar Energy Project Manager",
    company: "GreenTech Renewables",
    location: "Dubai, UAE",
    country: "United Arab Emirates",
    city: "Dubai",
    type: "Full-time",
    salary: "$70,000 - $100,000",
    salaryMin: 70000,
    salaryMax: 100000,
    posted: "3 days ago",
    postedDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    industry: "Renewable Energy",
    experience: "Senior Level (5-10 years)",
    description:
      "Lead solar energy project development from feasibility to commissioning. Manage cross-functional teams and ensure project delivery on time and budget.",
    requirements: ["Engineering degree", "5+ years solar experience", "Project management certification"],
  },
];

const sortOptions = [
  { value: "latest", label: "Latest First" },
  { value: "oldest", label: "Oldest First" },
  { value: "salary-high", label: "Salary: High to Low" },
  { value: "salary-low", label: "Salary: Low to High" },
  { value: "relevance", label: "Relevance" },
];

export function JobsListings({ filters = null }) {
  const [sortBy, setSortBy] = React.useState("latest");
  const [filteredJobs, setFilteredJobs] = React.useState(jobListings);

  React.useEffect(() => {
    let jobs = [...jobListings];

    // Apply filters
    if (filters) {
      if (filters.keyword) {
        const keyword = filters.keyword.toLowerCase();
        jobs = jobs.filter(
          (job) =>
            job.title.toLowerCase().includes(keyword) ||
            job.company.toLowerCase().includes(keyword) ||
            job.description.toLowerCase().includes(keyword) ||
            job.requirements.some((r) => r.toLowerCase().includes(keyword))
        );
      }

      if (filters.country && filters.country !== "All Countries") {
        jobs = jobs.filter((job) => job.country === filters.country);
      }

      if (filters.city && filters.city !== "All Cities") {
        jobs = jobs.filter((job) => job.city === filters.city);
      }

      if (filters.industry && filters.industry !== "All Industries") {
        jobs = jobs.filter((job) => job.industry === filters.industry);
      }

      if (filters.jobType && filters.jobType !== "All Types") {
        jobs = jobs.filter((job) => job.type === filters.jobType);
      }

      if (filters.experience && filters.experience !== "All Levels") {
        jobs = jobs.filter((job) => job.experience === filters.experience);
      }
    }

    // Apply sorting
    switch (sortBy) {
      case "latest":
        jobs.sort((a, b) => b.postedDate - a.postedDate);
        break;
      case "oldest":
        jobs.sort((a, b) => a.postedDate - b.postedDate);
        break;
      case "salary-high":
        jobs.sort((a, b) => (b.salaryMax || 0) - (a.salaryMax || 0));
        break;
      case "salary-low":
        jobs.sort((a, b) => (a.salaryMin || 0) - (b.salaryMin || 0));
        break;
      case "relevance":
        // Relevance based on keyword match score (if keyword exists)
        if (filters?.keyword) {
          const keyword = filters.keyword.toLowerCase();
          jobs.sort((a, b) => {
            const aScore =
              (a.title.toLowerCase().includes(keyword) ? 10 : 0) +
              (a.company.toLowerCase().includes(keyword) ? 5 : 0) +
              (a.description.toLowerCase().includes(keyword) ? 3 : 0);
            const bScore =
              (b.title.toLowerCase().includes(keyword) ? 10 : 0) +
              (b.company.toLowerCase().includes(keyword) ? 5 : 0) +
              (b.description.toLowerCase().includes(keyword) ? 3 : 0);
            return bScore - aScore;
          });
        }
        break;
    }

    setFilteredJobs(jobs);
  }, [filters, sortBy]);

  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-[#f4f4f4]">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="tracking-tight text-[#0b2677] leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[22pt] mb-2">
                Current Job Openings
              </h2>
              <p className="text-[#0b2677]/70 text-base sm:text-lg">
                {filteredJobs.length} {filteredJobs.length === 1 ? "job" : "jobs"} found
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <SortAsc className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0b2677]/40 pointer-events-none" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-white border border-[#e5e5e5] rounded-lg text-[#0b2677] text-sm font-medium focus:border-[#9a01cd] focus:ring-2 focus:ring-[#9a01cd]/20 cursor-pointer appearance-none"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Job Listings Grid */}
          {filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {filteredJobs.map((job) => (
                <Card
                  key={job.id}
                  className="group hover:shadow-xl transition-all duration-300 border-[#e5e5e5] hover:border-[#9a01cd]/30 bg-white"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2 grow">
                        <CardTitle className="text-xl sm:text-2xl font-bold text-[#0b2677] group-hover:text-[#9a01cd] transition-colors duration-300">
                          {job.title}
                        </CardTitle>
                        <CardDescription className="text-base font-semibold text-[#0b2677]/80">
                          {job.company}
                        </CardDescription>
                      </div>
                      <Badge
                        variant="outline"
                        className="bg-[#9a01cd]/10 text-[#9a01cd] border-[#9a01cd]/30 font-semibold uppercase text-xs"
                      >
                        {job.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm sm:text-base text-[#0b2677]/70 leading-relaxed line-clamp-2">
                      {job.description}
                    </p>

                    {/* Job Details */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-[#0b2677]/60">
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

                    {/* Industry Badge */}
                    <div className="pt-2">
                      <Badge
                        variant="outline"
                        className="bg-[#0b2677]/5 text-[#0b2677] border-[#0b2677]/20 text-xs"
                      >
                        <Briefcase className="w-3 h-3 mr-1" />
                        {job.industry}
                      </Badge>
                    </div>

                    {/* Requirements */}
                    <div className="pt-2 space-y-2">
                      <p className="text-xs font-semibold text-[#0b2677]/60 uppercase tracking-wider">
                        Key Requirements:
                      </p>
                      <ul className="flex flex-wrap gap-2">
                        {job.requirements.map((req, index) => (
                          <li
                            key={index}
                            className="text-xs px-2 py-1 bg-[#f4f4f4] rounded text-[#0b2677]/70"
                          >
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full rounded-lg border-2 border-[#0b2677]/20 text-[#0b2677] hover:bg-[#9a01cd] hover:border-[#9a01cd] hover:text-white transition-all duration-300 font-bold text-xs uppercase tracking-widest"
                      asChild
                    >
                      <Link href={`/jobs/${job.id}`}>
                        View Details
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-[#0b2677]/70">No jobs found matching your criteria.</p>
              <p className="text-sm text-[#0b2677]/50 mt-2">Try adjusting your filters.</p>
            </div>
          )}

          {/* Load More Button */}
          {filteredJobs.length > 0 && filteredJobs.length >= 8 && (
            <div className="text-center pt-8">
              <Button
                variant="outline"
                className="rounded-lg border-2 border-[#0b2677]/20 text-[#0b2677] hover:bg-[#0b2677] hover:text-white transition-all duration-300 font-bold text-xs uppercase tracking-widest px-8 h-12"
              >
                Load More Jobs
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
