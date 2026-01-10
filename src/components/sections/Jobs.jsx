"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/Button";

const smoothTransition = {
  duration: 1,
  ease: [0.25, 0.1, 0.25, 1],
};

const staggerDelay = 0.2;

export function Jobs() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-12 sm:py-16 md:py-24 bg-[#f4f4f4] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        {/* Top Section: Matching Screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Left Side: Overlapping Images */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ ...smoothTransition, delay: staggerDelay * 0 }}
            className="relative h-[320px] sm:h-[380px] md:h-[450px] w-full order-2 lg:order-1"
          >
            {/* Back Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ ...smoothTransition, delay: staggerDelay * 0.5 }}
              className="absolute top-0 left-0 w-[75%] sm:w-[80%] h-[220px] sm:h-[270px] md:h-[320px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl z-0"
            >
              <Image
                src="/job-man.png"
                alt="Professional walking"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#0b2677]/10" />
            </motion.div>

            {/* Front Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 40 }}
              transition={{ ...smoothTransition, delay: staggerDelay * 1 }}
              className="absolute bottom-0 right-0 w-[70%] sm:w-[75%] h-[180px] sm:h-[230px] md:h-[280px] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-4 sm:border-8 border-white z-10"
            >
              <Image
                src="/job-office.png"
                alt="Office team"
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
            className="space-y-4 sm:space-y-6 md:space-y-8 order-1 lg:order-2"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ ...smoothTransition, delay: staggerDelay * 1 }}
              className="tracking-tight text-[#0b2677] leading-tight text-xl sm:text-2xl md:text-3xl lg:text-[22pt]"
            >
              Ready for your next <br className="hidden sm:block" />
              opportunity?
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ ...smoothTransition, delay: staggerDelay * 2 }}
              className="space-y-4 sm:space-y-6 text-[#0b2677]/70 leading-relaxed text-sm sm:text-base"
            >
              <p>
                NeoRecruits connects talented professionals with top employers
                across the GCC and beyond. Whether you're seeking permanent
                roles, contract work, or project-based assignments — we're here
                to help you succeed.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ ...smoothTransition, delay: staggerDelay * 3 }}
              className="pt-2"
            >
              <Button
                className="rounded-lg bg-[#9a01cd] hover:bg-[#9a01cd]/90 text-white h-11 sm:h-12 px-5 sm:px-6 text-xs font-bold tracking-widest uppercase w-full sm:w-auto"
                asChild
              >
                <Link href="/jobs">
                  View All Job Openings
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
