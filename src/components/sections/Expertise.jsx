"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight as ArrowIcon,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

const smoothTransition = {
  duration: 1,
  ease: [0.25, 0.1, 0.25, 1],
};

const staggerDelay = 0.2;

const industries = [
  {
    id: 1,
    title: "Banking & Finance",
    image: "/expertise-banking.png",
  },
  {
    id: 2,
    title: "Technology & AI",
    image: "/expertise-tech.png",
  },
  {
    id: 3,
    title: "Healthcare & Life Sciences",
    image: "/expertise-healthcare.png",
  },
  {
    id: 4,
    title: "Construction & Engineering",
    image: "/hero-1.png", // Reusing existing assets for demo
  },
  {
    id: 5,
    title: "Energy & Renewables",
    image: "/hero-3.png",
  },
];

export function Expertise() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = React.useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = React.useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-24 bg-[#f4f4f4] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-20 max-w-7xl mx-auto">
          {/* Left Side: Content & Intro */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ ...smoothTransition, delay: staggerDelay * 0 }}
            className="lg:col-span-4 flex flex-col justify-center space-y-4 sm:space-y-6 md:space-y-8"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ ...smoothTransition, delay: staggerDelay * 1 }}
              className="tracking-tight text-[#0b2677] leading-tight text-xl sm:text-2xl md:text-3xl lg:text-[22pt]"
            >
              Industry Expertise
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ ...smoothTransition, delay: staggerDelay * 2 }}
              className="space-y-4 sm:space-y-6 text-[#0b2677]/70 leading-relaxed text-sm sm:text-base"
            >
              <p>
                NeoRecruits believes in employing the best. We are the best
                recruitment agency in the region, consisting of a team of
                dedicated professionals, each with their own skillset and
                extensive experience.
              </p>
              <p>
                Using a unique balance of tradition and technology, we blend
                personal, face-to-face interaction with the latest technology
                tools and trends to ensure the happiness and well-being of our
                stakeholders.
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
                <Link href="/services">
                  Explore
                  <ArrowIcon className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side: Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ ...smoothTransition, delay: staggerDelay * 1 }}
            className="lg:col-span-8 flex flex-col gap-6 sm:gap-8"
          >
            {/* Nav Buttons (Top Right of the right column) */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ ...smoothTransition, delay: staggerDelay * 2 }}
              className="flex justify-center sm:justify-end gap-2"
            >
              <button
                className="h-10 w-10 flex items-center justify-center rounded-md border border-gray-200 text-gray-300 hover:text-[#0b2677] hover:border-gray-400 transition-all bg-white"
                onClick={scrollPrev}
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                className="h-10 w-10 flex items-center justify-center rounded-md border border-gray-200 text-gray-300 hover:text-[#0b2677] hover:border-gray-400 transition-all bg-white"
                onClick={scrollNext}
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>

            {/* Carousel Viewport */}
            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex -ml-4 sm:-ml-6">
                {industries.map((industry, index) => (
                  <motion.div
                    key={industry.id}
                    initial={{ opacity: 0, scale: 0.9, y: 40 }}
                    animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 40 }}
                    transition={{ ...smoothTransition, delay: staggerDelay * (2.5 + index * 0.2) }}
                    className="flex-[0_0_85%] sm:flex-[0_0_70%] md:flex-[0_0_48%] min-w-0 pl-4 sm:pl-6"
                  >
                    <div className="group cursor-pointer">
                      <div className="relative h-[200px] sm:h-[240px] md:h-[280px] w-full overflow-hidden rounded-xl bg-gray-100">
                        <Image
                          src={industry.image}
                          alt={industry.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <h3 className="mt-4 sm:mt-6 text-[#0b2677] group-hover:text-[#9a01cd] transition-colors text-base sm:text-lg md:text-xl">
                        {industry.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
