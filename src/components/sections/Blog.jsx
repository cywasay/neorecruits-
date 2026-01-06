"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/badge";

const posts = [
  {
    id: 1,
    title: "The Future of AI in Executive Search",
    excerpt:
      "How artificial intelligence is reshaping the way we identify and vet top-tier leadership talent across global markets.",
    category: "Technology",
    readTime: "5 min read",
    image: "/expertise-tech.png",
    date: "Oct 12, 2025",
  },
  {
    id: 2,
    title: "Building Resilient Teams in Remote Era",
    excerpt:
      "Strategies for fostering culture, collaboration, and productivity when your workforce is distributed across continents.",
    category: "Leadership",
    readTime: "7 min read",
    image: "/job-office.png",
    date: "Sep 28, 2025",
  },
  {
    id: 3,
    title: "Global Hiring Trends: GCC Market Report",
    excerpt:
      "An in-depth analysis of the salary benchmarks and demand shifts in the Banking and Construction sectors for Q4.",
    category: "Market Insights",
    readTime: "10 min read",
    image: "/hero-3.png",
    date: "Sep 15, 2025",
  },
];

export function Blog() {
  return (
    <section className="relative py-24 bg-[#0b2677] overflow-hidden">
      {/* Subtle Geometric Background Pattern Backdrop */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-10 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="space-y-4">
            <h2 className="tracking-tight text-white leading-tight">
              Latest Insights
            </h2>
            <p className="text-white/70 leading-relaxed max-w-xl">
              Stay ahead of the curve with our expert analysis on recruitment
              trends, leadership strategies, and market shifts.
            </p>
          </div>
          <Button
            className="rounded-lg bg-[#9a01cd] hover:bg-[#9a01cd]/90 text-white h-12 px-6 text-xs md:text-sm font-bold tracking-widest uppercase"
            asChild
          >
            <Link href="/insights">
              View All News
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              href={`/insights/${post.id}`}
              key={post.id}
              className="group flex flex-col h-full bg-[#2165b8]/20 border border-white/5 rounded-2xl overflow-hidden hover:border-[#539ce0]/30 hover:shadow-2xl hover:shadow-[#539ce0]/5 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#0b2677]/20 group-hover:bg-transparent transition-colors duration-300" />

                <div className="absolute top-4 left-4">
                  <Badge className="bg-[#0b2677]/80 hover:bg-[#0b2677] backdrop-blur-sm text-white border-white/10 uppercase tracking-wider text-[10px] font-bold px-3 py-1.5">
                    {post.category}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-8 space-y-4">
                <div className="flex items-center gap-4 text-xs font-bold text-white/40 uppercase tracking-wider">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#539ce0]" />
                    {post.readTime}
                  </span>
                  <span>|</span>
                  <span>{post.date}</span>
                </div>

                <h3 className="text-white group-hover:text-[#539ce0] transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-6 flex items-center text-[#9a01cd] text-sm font-bold uppercase tracking-wider group/link">
                  Read Article
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
