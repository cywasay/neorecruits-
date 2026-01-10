"use client";

import * as React from "react";
import { Star, ChevronLeft, ChevronRight, User, Quote } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/Button";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";

const smoothTransition = {
  duration: 1,
  ease: [0.25, 0.1, 0.25, 1],
};

const staggerDelay = 0.2;

const testimonials = [
  {
    id: 1,
    content:
      "The talent partners at NeoRecruits are insightful, knowledgeable and responsive HR professional who has a great understanding of the UAE legal market and the requirements of in-house departments. I'm happy to recommend NeoRecruits after working on a couple of different projects with them.",
    author: "General Counsel",
    company: "Media Company",
    rating: 5,
    avatarGradient: "linear-gradient(to bottom right, #539ce0, #2165b8)",
  },
  {
    id: 2,
    content:
      "We needed to staff a major infrastructure project in record time. The NeoRecruits team delivered exceptional engineers and project managers within weeks, not months. Their screening process is incredibly thorough.",
    author: "Project Director",
    company: "BuildCorp Middle East",
    rating: 5,
    avatarGradient: "linear-gradient(to bottom right, #9a01cd, #7a01a5)",
  },
  {
    id: 3,
    content:
      "Finding specialized healthcare professionals is always a challenge. NeoRecruits' network in the medical field is unmatched. They found us a specialist we'd been seeking for over a year.",
    author: "Head of Surgery",
    company: "Royal City Hospital",
    rating: 5,
    avatarGradient: "linear-gradient(to bottom right, #2165b8, #0b2677)",
  },
];

export function Testimonials() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const scrollPrev = React.useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = React.useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  React.useEffect(() => {
    if (!emblaApi) return;

    setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-24 bg-[#f4f4f4] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        {/* Main Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
          transition={{ ...smoothTransition, delay: staggerDelay * 0 }}
          className="text-center mb-10 sm:mb-16 md:mb-20"
        >
          <h2 className="text-[#0b2677] tracking-tight leading-tight text-xl sm:text-2xl md:text-3xl lg:text-[22pt]">
            What Our Clients Say About Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start lg:items-center">
          {/* Left Side: Static Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ ...smoothTransition, delay: staggerDelay * 1 }}
            className="lg:col-span-5 space-y-4 sm:space-y-6"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ ...smoothTransition, delay: staggerDelay * 2 }}
              className="text-[#0b2677] tracking-tight text-lg sm:text-xl md:text-2xl"
            >
              Their Words, Not Ours
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ ...smoothTransition, delay: staggerDelay * 3 }}
              className="text-[#0b2677]/70 leading-relaxed max-w-md text-sm sm:text-base"
            >
              NeoRecruits is trusted by government entities, global brands and
              local businesses to provide the best in talent solutions. But
              don't just take our word for it! Here's what some of our clients
              have to say.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ ...smoothTransition, delay: staggerDelay * 4 }}
              className="pt-2 space-y-4"
            >
              {/* Avatars Row with Gradient Backgrounds */}
              <div className="flex -space-x-3">
                {[
                  { gradient: "linear-gradient(to bottom right, #539ce0, #2165b8)" },
                  { gradient: "linear-gradient(to bottom right, #9a01cd, #7a01a5)" },
                  { gradient: "linear-gradient(to bottom right, #2165b8, #0b2677)" },
                  { gradient: "linear-gradient(to bottom right, #539ce0, #9a01cd)" },
                ].map((avatar, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -180 }}
                    transition={{ 
                      ...smoothTransition, 
                      delay: staggerDelay * (4.5 + i * 0.2),
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ scale: 1.15, zIndex: 10 }}
                    className="w-12 h-12 rounded-full border-2 border-white shadow-lg flex items-center justify-center text-white cursor-pointer hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                    style={{
                      backgroundImage: avatar.gradient
                    }}
                  >
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />
                    <User className="w-6 h-6 fill-white relative z-10" />
                    <motion.div
                      animate={{ 
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0"
                      style={{
                        backgroundImage: "linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), transparent)"
                      }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Rating Summary with Enhanced Styling */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ ...smoothTransition, delay: staggerDelay * 5.5 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-100/50 shadow-sm w-fit"
              >
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400 drop-shadow-sm"
                    />
                  ))}
                </div>
                <div className="h-4 w-px bg-gray-300" />
                <div className="flex items-baseline gap-1">
                  <span className="font-bold text-[#0b2677] text-base">5.0</span>
                  <span className="text-[#0b2677]/60 text-xs font-medium">(4 reviews)</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side: Carousel Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ ...smoothTransition, delay: staggerDelay * 1.5 }}
            className="lg:col-span-7 relative pl-0 lg:pl-10"
          >
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 sm:-left-2 lg:-left-4 z-20">
              <motion.button
                onClick={scrollPrev}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border-2 border-gray-200 hover:border-[#0b2677] shadow-lg hover:shadow-xl text-gray-600 hover:text-[#0b2677] flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
              >
                <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
              </motion.button>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 right-0 sm:-right-2 lg:-right-4 z-20">
              <motion.button
                onClick={scrollNext}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full text-white flex items-center justify-center transition-all duration-300 shadow-xl hover:shadow-2xl shadow-[#0b2677]/30"
                style={{
                  backgroundImage: "linear-gradient(to bottom right, #0b2677, #2165b8)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundImage = "linear-gradient(to bottom right, #2165b8, #0b2677)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundImage = "linear-gradient(to bottom right, #0b2677, #2165b8)";
                }}
              >
                <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
              </motion.button>
            </div>

            {/* Carousel Viewport */}
            <div
              className="overflow-hidden px-2 sm:px-4 py-6 sm:py-8"
              ref={emblaRef}
            >
              <div className="flex">
                {testimonials.map((item, index) => (
                  <div
                    key={item.id}
                    className="flex-[0_0_100%] min-w-0 px-2 sm:px-4"
                  >
                    <motion.div
                      key={`card-${item.id}-${selectedIndex}`}
                      initial={{ opacity: 0, y: 40, scale: 0.9 }}
                      animate={
                        selectedIndex === index
                          ? { opacity: 1, y: 0, scale: 1 }
                          : { opacity: 0.3, y: 30, scale: 0.95 }
                      }
                      transition={{ 
                        ...smoothTransition, 
                        delay: selectedIndex === index ? 0.2 : 0,
                        type: "spring",
                        stiffness: 100,
                        damping: 15
                      }}
                      className="relative pt-12 sm:pt-16"
                    >
                      {/* The Card */}
                      <div className="relative group">
                        {/* Gradient Background Layer */}
                        <div 
                          className="absolute inset-0 rounded-2xl sm:rounded-3xl transform group-hover:scale-[1.02] transition-transform duration-500"
                          style={{
                            backgroundImage: "linear-gradient(to bottom right, white, white, #f4f4f4)"
                          }}
                        />
                        
                        {/* Decorative Corner Elements */}
                        <div 
                          className="absolute top-0 left-0 w-20 h-20 rounded-2xl sm:rounded-3xl rounded-br-none rounded-tl-3xl"
                          style={{
                            backgroundImage: "linear-gradient(to bottom right, rgba(154, 1, 205, 0.05), transparent)"
                          }}
                        />
                        <div 
                          className="absolute bottom-0 right-0 w-24 h-24 rounded-2xl sm:rounded-3xl rounded-tl-none rounded-br-3xl"
                          style={{
                            backgroundImage: "linear-gradient(to top left, rgba(83, 156, 224, 0.05), transparent)"
                          }}
                        />

                        {/* Main Card Content */}
                        <div className="relative bg-white/90 backdrop-blur-md border border-gray-100/60 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-500 min-h-[280px] sm:min-h-[320px] flex flex-col justify-between group/card">
                          {/* Decorative Quote Icon Background */}
                          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-5 group-hover/card:opacity-10 transition-opacity duration-500">
                            <Quote className="w-20 h-20 sm:w-24 sm:h-24 text-[#9a01cd] transform rotate-12" />
                          </div>
                          
                          {/* Quote Icon - Left side */}
                          <motion.div
                            initial={false}
                            animate={selectedIndex === index ? { 
                              opacity: 0.08,
                              scale: 1,
                              rotate: 0
                            } : { 
                              opacity: 0.03,
                              scale: 0.9,
                              rotate: -5
                            }}
                            transition={{ duration: 0.5 }}
                            className="absolute top-6 left-6 sm:top-8 sm:left-8 group-hover/card:opacity-15 transition-opacity duration-300"
                          >
                            <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-[#0b2677] transform rotate-180" />
                          </motion.div>

                          {/* Floating Avatar with Gradient */}
                          <motion.div
                            initial={false}
                            animate={selectedIndex === index ? { 
                              scale: 1, 
                              rotate: 0,
                              y: 0
                            } : { 
                              scale: 0.85, 
                              rotate: -15,
                              y: -5
                            }}
                            transition={{ 
                              ...smoothTransition, 
                              delay: selectedIndex === index ? 0.3 : 0,
                              type: "spring",
                              stiffness: 250,
                              damping: 20
                            }}
                            className="absolute -top-8 sm:-top-10 left-1/2 -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-xl shadow-[#9a01cd]/20 border-4 border-white flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300 z-20"
                            style={{
                              backgroundImage: item.avatarGradient || "linear-gradient(to bottom right, #539ce0, #2165b8)"
                            }}
                          >
                            <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />
                            <User className="w-8 h-8 sm:w-10 sm:h-10 text-white relative z-10 fill-white" />
                            <motion.div
                              animate={{ rotate: [0, 360] }}
                              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                              className="absolute inset-0"
                              style={{
                                backgroundImage: "linear-gradient(to right, transparent, rgba(255, 255, 255, 0.2), transparent)"
                              }}
                            />
                          </motion.div>

                          {/* Content */}
                          <div className="flex-1 flex flex-col justify-center mt-8 sm:mt-10 space-y-4 sm:space-y-6">
                            {/* Quote Text */}
                            <motion.p
                              initial={false}
                              animate={selectedIndex === index ? { 
                                opacity: 1,
                                y: 0
                              } : { 
                                opacity: 0.5,
                                y: 10
                              }}
                              transition={{ 
                                ...smoothTransition, 
                                delay: selectedIndex === index ? 0.4 : 0
                              }}
                              className="text-[#0b2677]/90 leading-relaxed font-medium text-base sm:text-lg md:text-xl italic text-center relative z-10 px-4"
                            >
                              <motion.span
                                initial={{ opacity: 0, scale: 0 }}
                                animate={selectedIndex === index ? { opacity: 1, scale: 1 } : { opacity: 0.3, scale: 0.8 }}
                                transition={{ delay: selectedIndex === index ? 0.45 : 0 }}
                                className="text-2xl sm:text-3xl text-[#9a01cd]/30 font-serif mr-2 leading-none inline-block"
                              >
                                "
                              </motion.span>
                              {item.content}
                              <motion.span
                                initial={{ opacity: 0, scale: 0 }}
                                animate={selectedIndex === index ? { opacity: 1, scale: 1 } : { opacity: 0.3, scale: 0.8 }}
                                transition={{ delay: selectedIndex === index ? 0.45 : 0 }}
                                className="text-2xl sm:text-3xl text-[#9a01cd]/30 font-serif ml-2 leading-none inline-block"
                              >
                                "
                              </motion.span>
                            </motion.p>

                            {/* Rating Stars */}
                            <motion.div
                              initial={false}
                              animate={selectedIndex === index ? { 
                                opacity: 1, 
                                scale: 1,
                                y: 0
                              } : { 
                                opacity: 0.4, 
                                scale: 0.85,
                                y: 5
                              }}
                              transition={{ 
                                ...smoothTransition, 
                                delay: selectedIndex === index ? 0.5 : 0
                              }}
                              className="flex gap-1.5 sm:gap-2 justify-center items-center pt-3 sm:pt-4"
                            >
                              {[...Array(item.rating)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  initial={false}
                                  animate={selectedIndex === index ? { 
                                    scale: 1, 
                                    rotate: 0,
                                    opacity: 1
                                  } : { 
                                    scale: 0.7, 
                                    rotate: -90,
                                    opacity: 0.3
                                  }}
                                  transition={{ 
                                    ...smoothTransition, 
                                    delay: selectedIndex === index ? 0.55 + i * 0.1 : 0,
                                    type: "spring",
                                    stiffness: 300
                                  }}
                                >
                                  <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-[#9a01cd] text-[#9a01cd] drop-shadow-[0_2px_4px_rgba(154,1,205,0.3)]" />
                                </motion.div>
                              ))}
                            </motion.div>
                          </div>

                          {/* Author Info */}
                          <motion.div
                            initial={false}
                            animate={selectedIndex === index ? { 
                              opacity: 1, 
                              y: 0,
                              scale: 1
                            } : { 
                              opacity: 0.5, 
                              y: 15,
                              scale: 0.95
                            }}
                            transition={{ 
                              ...smoothTransition, 
                              delay: selectedIndex === index ? 0.7 : 0
                            }}
                            className="pt-4 sm:pt-6 border-t border-gray-100/50 mt-4 sm:mt-6 relative"
                          >
                            {/* Decorative line */}
                            <div 
                              className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-px"
                              style={{
                                backgroundImage: "linear-gradient(to right, transparent, rgba(154, 1, 205, 0.3), transparent)"
                              }}
                            />
                            <div className="flex flex-col items-center gap-1.5 sm:gap-2 relative z-10">
                              <h4 className="text-[#0b2677] font-bold text-base sm:text-lg tracking-tight group-hover:text-[#9a01cd] transition-colors duration-300">
                                {item.author}
                              </h4>
                              <p className="text-[#0b2677]/60 text-xs sm:text-sm font-medium">
                                {item.company}
                              </p>
                            </div>
                          </motion.div>

                          {/* Hover Glow Effect */}
                          <motion.div
                            initial={false}
                            animate={selectedIndex === index ? {
                              opacity: 1,
                              scale: 1
                            } : {
                              opacity: 0,
                              scale: 0.95
                            }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 rounded-2xl sm:rounded-3xl transition-all duration-500 pointer-events-none"
                            style={{
                              backgroundImage: selectedIndex === index
                                ? "linear-gradient(to bottom right, rgba(154, 1, 205, 0), rgba(83, 156, 224, 0), rgba(154, 1, 205, 0))"
                                : "linear-gradient(to bottom right, rgba(154, 1, 205, 0), rgba(83, 156, 224, 0), rgba(154, 1, 205, 0))"
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundImage = "linear-gradient(to bottom right, rgba(154, 1, 205, 0.05), rgba(83, 156, 224, 0.05), rgba(154, 1, 205, 0.05))";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundImage = "linear-gradient(to bottom right, rgba(154, 1, 205, 0), rgba(83, 156, 224, 0), rgba(154, 1, 205, 0))";
                            }}
                          />
                          
                          {/* Border glow on active */}
                          <motion.div
                            initial={false}
                            animate={selectedIndex === index ? {
                              opacity: 0.3,
                              scale: 1.02
                            } : {
                              opacity: 0,
                              scale: 1
                            }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-transparent -z-10 blur-sm pointer-events-none"
                            style={{
                              backgroundImage: selectedIndex === index
                                ? "linear-gradient(to bottom right, rgba(154, 1, 205, 0.2), rgba(83, 156, 224, 0.2), rgba(154, 1, 205, 0.2))"
                                : "linear-gradient(to bottom right, rgba(154, 1, 205, 0), rgba(83, 156, 224, 0), rgba(154, 1, 205, 0))"
                            }}
                          />
                        </div>
                      </div>

                      {/* Card Index Indicator with improved styling */}
                      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10 items-center">
                        {testimonials.map((_, idx) => (
                          <motion.button
                            key={idx}
                            onClick={() => emblaApi && emblaApi.scrollTo(idx)}
                            initial={false}
                            animate={{
                              width: selectedIndex === idx ? "40px" : "8px",
                              opacity: selectedIndex === idx ? 1 : 0.4,
                              scale: selectedIndex === idx ? 1 : 0.9,
                            }}
                            whileHover={{ scale: selectedIndex === idx ? 1.1 : 1 }}
                            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                            className={cn(
                              "h-2.5 rounded-full transition-all duration-300 cursor-pointer shadow-lg",
                              selectedIndex === idx ? "shadow-[#9a01cd]/30" : ""
                            )}
                            style={{
                              backgroundImage: selectedIndex === idx
                                ? "linear-gradient(to right, #9a01cd, #539ce0, #9a01cd)"
                                : "linear-gradient(to right, rgb(209, 213, 219), rgb(156, 163, 175))"
                            }}
                            onMouseEnter={(e) => {
                              if (selectedIndex !== idx) {
                                e.currentTarget.style.backgroundImage = "linear-gradient(to right, rgb(156, 163, 175), rgb(107, 114, 128))";
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (selectedIndex !== idx) {
                                e.currentTarget.style.backgroundImage = "linear-gradient(to right, rgb(209, 213, 219), rgb(156, 163, 175))";
                              }
                            }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
