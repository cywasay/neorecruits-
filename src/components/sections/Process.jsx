"use client";

import * as React from "react";
import { ClipboardList, Search, Users, ShieldCheck } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const smoothTransition = {
  duration: 1,
  ease: [0.25, 0.1, 0.25, 1],
};

const staggerDelay = 0.2;

const steps = [
  {
    id: 1,
    title: "REQUIREMENT",
    description:
      "Our experts conduct an in-depth analysis of your specific talent needs and corporate culture.",
    timeline: "24-48 Hours",
    icon: ClipboardList,
  },
  {
    id: 2,
    title: "SHORTLIST",
    description:
      "Rapid market mapping and rigorous screening to identify the top 5% of suitable candidates.",
    timeline: "3-5 Business Days",
    icon: Search,
  },
  {
    id: 3,
    title: "INTERVIEWS",
    description:
      "We facilitate seamless interview processes, managing all logistics and feedback loops.",
    timeline: "Flexible Schedule",
    icon: Users,
  },
  {
    id: 4,
    title: "ONBOARDING",
    description:
      "Finalizing the selection and ensuring a smooth transition into your powerhouse team.",
    timeline: "Ongoing Support",
    icon: ShieldCheck,
  },
];

export function Process() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-12 sm:py-16 md:py-24 bg-[#0b2677] overflow-hidden">
      {/* Geometric Background Pattern (same as Intro) */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-10 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
          transition={{ ...smoothTransition, delay: staggerDelay * 0 }}
          className="space-y-3 sm:space-y-4 mb-10 sm:mb-16 md:mb-20"
        >
          <h2 className="tracking-tight text-white leading-tight text-xl sm:text-2xl md:text-3xl lg:text-[22pt]">
            How We Work
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "100%" } : { width: 0 }}
            transition={{ ...smoothTransition, delay: staggerDelay * 1 }}
            className="w-16 sm:w-20 h-1 sm:h-1.5 bg-[#9a01cd] mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ ...smoothTransition, delay: staggerDelay * (1.5 + index * 0.3) }}
              className="group flex flex-col items-center space-y-5 sm:space-y-6 md:space-y-8"
            >
              {/* Pentagon Icon Container inspired by SS */}
              <motion.div
                initial={{ scale: 0.8, rotate: -10 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0.8, rotate: -10 }}
                transition={{ ...smoothTransition, delay: staggerDelay * (2 + index * 0.3) }}
                className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center"
              >
                {/* Custom Pentagon Shape via Clip Path */}
                <div
                  className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors duration-500"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
                  }}
                />
                <step.icon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-[#539ce0] relative z-10 transition-transform duration-500 group-hover:scale-110" />
              </motion.div>

              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-white tracking-widest text-sm sm:text-base">
                  {step.title}
                </h3>
                <p className="text-white/60 leading-relaxed px-2 sm:px-4 text-sm sm:text-base">
                  {step.description}
                </p>
                <div className="inline-block px-2 sm:px-3 py-1 rounded-full bg-[#539ce0]/10 border border-[#539ce0]/20 text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.15em] sm:tracking-[0.2em] text-[#539ce0]">
                  Turnaround: {step.timeline}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
