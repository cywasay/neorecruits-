"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Building2, Globe2 } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

// Smooth, professional transition config (no bounce)
const smoothTransition = {
  duration: 1,
  ease: [0.25, 0.1, 0.25, 1], // cubic-bezier for smooth deceleration
};

const staggerDelay = 0.2;

const stats = [
  {
    label: "Successful Placements",
    value: "15,000+",
    icon: Users,
    color: "text-[#539ce0]",
  },
  {
    label: "Industries Served",
    value: "25+",
    icon: Building2,
    color: "text-[#2165b8]",
  },
  {
    label: "Countries Reached",
    value: "40+",
    icon: Globe2,
    color: "text-[#9a01cd]",
  },
  {
    label: "Client Satisfaction",
    value: "98%",
    icon: Users,
    color: "text-[#539ce0]",
  },
];

export function Intro() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-16 overflow-hidden bg-[#0b2677]">
      {/* Subtle Geometric Background Pattern Backdrop */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Side: Overlapping Images (Reflecting the SS) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ ...smoothTransition, delay: staggerDelay * 0 }}
            className="relative h-[300px] sm:h-[350px] md:h-[400px] w-full"
          >
            {/* Back Image (Architecture/City) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ ...smoothTransition, delay: staggerDelay * 0.5 }}
              className="absolute top-0 left-0 w-[65%] sm:w-[70%] h-[200px] sm:h-[240px] md:h-[280px] rounded-xl overflow-hidden shadow-lg z-0"
            >
              <Image
                src="/hero-3.png"
                alt="Infrastructure"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#0b2677]/20" />
            </motion.div>

            {/* Front Image (People/Office) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 40 }}
              transition={{ ...smoothTransition, delay: staggerDelay * 1 }}
              className="absolute bottom-0 right-0 w-[70%] sm:w-[75%] h-[180px] sm:h-[220px] md:h-[260px] rounded-xl overflow-hidden shadow-2xl border-4 border-[#0b2677] z-10"
            >
              <Image
                src="/intro-experience.png"
                alt="Teamwork"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ ...smoothTransition, delay: staggerDelay * 0 }}
            className="space-y-4 sm:space-y-6"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ ...smoothTransition, delay: staggerDelay * 1 }}
              className="tracking-tight text-white leading-tight text-xl sm:text-2xl md:text-3xl lg:text-[22pt]"
            >
              We build leading edge infrastructure within your organisation
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ ...smoothTransition, delay: staggerDelay * 2 }}
              className="space-y-3 sm:space-y-4 text-white/70 leading-relaxed text-sm sm:text-base"
            >
              <p>
                NeoRecruits is considered the best recruitment agency in the
                region that provides a comprehensive range of solutions to
                deliver optimum business performance. Our dedicated, highly
                experienced teams work with you every step of the way to ensure
                your HR needs are taken care of.
              </p>
              <p>
                Trusted by global brands and industry giants, NeoRecruits
                operates across 40 countries, bringing local expertise on a
                global scale.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ ...smoothTransition, delay: staggerDelay * 3 }}
              className="pt-2"
            >
              <Link href="/about" className="group h-11 sm:h-12 w-fit px-5 sm:px-6 rounded-lg bg-white text-black hover:bg-white/90 border-none flex items-center gap-3 transition-all text-xs font-bold tracking-widest uppercase justify-center sm:justify-start">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section - More compact */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ ...smoothTransition, delay: staggerDelay * 4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 sm:pt-12 border-t border-white/5 mt-8 sm:mt-12 max-w-7xl mx-auto place-items-center"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ ...smoothTransition, delay: staggerDelay * (4 + index * 0.5) }}
              className="space-y-1 group text-center sm:text-left"
            >
              <div className="flex items-center gap-2 mb-1 justify-center sm:justify-start">
                <stat.icon
                  className={cn(
                    "w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity",
                    stat.color
                  )}
                />
                <span className="text-xl sm:text-2xl font-bold tracking-tighter text-white">
                  {stat.value}
                </span>
              </div>
              <div className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-[0.15em] group-hover:text-white/60 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
