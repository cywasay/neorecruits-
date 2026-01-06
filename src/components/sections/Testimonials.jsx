"use client";

import * as React from "react";
import { Star, ChevronLeft, ChevronRight, User } from "lucide-react";
import { Button } from "@/components/ui/Button";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    content:
      "The talent partners at NeoRecruits are insightful, knowledgeable and responsive HR professional who has a great understanding of the UAE legal market and the requirements of in-house departments. I'm happy to recommend NeoRecruits after working on a couple of different projects with them.",
    author: "General Counsel",
    company: "Media Company",
    rating: 5,
  },
  {
    id: 2,
    content:
      "We needed to staff a major infrastructure project in record time. The NeoRecruits team delivered exceptional engineers and project managers within weeks, not months. Their screening process is incredibly thorough.",
    author: "Project Director",
    company: "BuildCorp Middle East",
    rating: 5,
  },
  {
    id: 3,
    content:
      "Finding specialized healthcare professionals is always a challenge. NeoRecruits' network in the medical field is unmatched. They found us a specialist we'd been seeking for over a year.",
    author: "Head of Surgery",
    company: "Royal City Hospital",
    rating: 5,
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = React.useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = React.useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[#f4f4f4] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        {/* Main Section Heading */}
        <div className="text-center mb-10 sm:mb-16 md:mb-20">
          <h2 className="text-[#0b2677] tracking-tight leading-tight text-xl sm:text-2xl md:text-3xl lg:text-[22pt]">
            What Our Clients Say About Us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start lg:items-center">
          {/* Left Side: Static Content */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <h3 className="text-[#0b2677] tracking-tight text-lg sm:text-xl md:text-2xl">
              Their Words, Not Ours
            </h3>

            <p className="text-[#0b2677]/70 leading-relaxed max-w-md text-sm sm:text-base">
              NeoRecruits is trusted by government entities, global brands and
              local businesses to provide the best in talent solutions. But
              don't just take our word for it! Here's what some of our clients
              have to say.
            </p>

            <div className="pt-2 space-y-4">
              {/* Avatars Row */}
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-gray-400"
                  >
                    <User className="w-5 h-5 fill-current" />
                  </div>
                ))}
              </div>

              {/* Rating Summary */}
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-bold text-[#0b2677] text-sm">5.0</span>
                <span className="text-[#0b2677]/60 text-xs">(4 reviews)</span>
              </div>
            </div>
          </div>

          {/* Right Side: Carousel Card */}
          <div className="lg:col-span-7 relative pl-0 lg:pl-10">
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 sm:-left-2 lg:-left-0 z-20">
              <button
                onClick={scrollPrev}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-600 flex items-center justify-center transition-colors -ml-2 sm:-ml-6"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 right-0 sm:-right-2 lg:-right-6 z-20">
              <button
                onClick={scrollNext}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#0b2677] hover:bg-[#0b2677]/90 text-white flex items-center justify-center transition-colors shadow-xl -mr-2 sm:mr-0"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Carousel Viewport */}
            <div
              className="overflow-hidden px-2 sm:px-4 py-6 sm:py-8"
              ref={emblaRef}
            >
              <div className="flex">
                {testimonials.map((item) => (
                  <div
                    key={item.id}
                    className="flex-[0_0_100%] min-w-0 px-2 sm:px-4"
                  >
                    <div className="relative pt-8 sm:pt-10">
                      {/* The Card */}
                      <div className="bg-white border border-gray-100 rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 relative z-10 min-h-[220px] sm:min-h-[280px] flex flex-col justify-center items-center">
                        {/* Floating Avatar - Simplified */}
                        <div className="absolute -top-6 sm:-top-8 left-1/2 -translate-x-1/2 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400">
                          <User className="w-6 h-6 sm:w-8 sm:h-8 fill-current" />
                        </div>

                        <div className="text-center mt-4 sm:mt-6 space-y-3 sm:space-y-5 w-full">
                          <p className="text-[#0b2677]/80 leading-relaxed font-medium text-sm sm:text-base">
                            "{item.content}"
                          </p>

                          <div className="flex flex-col items-center gap-2 pt-4 w-full border-none">
                            <div className="flex gap-1 justify-center">
                              {[...Array(item.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-4 h-4 fill-[#9a01cd] text-[#9a01cd]"
                                />
                              ))}
                            </div>
                            <div className="text-[#0b2677] font-bold text-sm uppercase tracking-wide">
                              {item.author}
                            </div>
                            <div className="text-[#0b2677]/50 text-xs font-medium -mt-1">
                              {item.company}
                            </div>
                          </div>
                        </div>
                      </div>
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
