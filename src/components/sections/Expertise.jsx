"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight as ArrowIcon,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

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
    <section className="py-24 bg-[#f4f4f4] overflow-hidden">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Side: Content & Intro */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-8">
            <h2 className="tracking-tight text-[#0b2677] leading-tight">
              Industry Expertise
            </h2>

            <div className="space-y-6 text-[#0b2677]/70 leading-relaxed">
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
            </div>

            <div className="pt-2">
              <Button
                className="rounded-lg bg-[#9a01cd] hover:bg-[#9a01cd]/90 text-white h-12 px-6 text-xs md:text-sm font-bold tracking-widest uppercase"
                asChild
              >
                <Link href="/services">
                  Explore
                  <ArrowIcon className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Side: Carousel */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* Nav Buttons (Top Right of the right column) */}
            <div className="flex justify-end gap-2">
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
            </div>

            {/* Carousel Viewport */}
            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex -ml-6">
                {industries.map((industry) => (
                  <div
                    key={industry.id}
                    className="flex-[0_0_85%] md:flex-[0_0_48%] min-w-0 pl-6"
                  >
                    <div className="group cursor-pointer">
                      <div className="relative h-[280px] w-full overflow-hidden rounded-xl bg-gray-100">
                        <Image
                          src={industry.image}
                          alt={industry.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <h3 className="mt-6 text-[#0b2677] group-hover:text-[#9a01cd] transition-colors">
                        {industry.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
