"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, MapPin, Briefcase, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { Button } from "@/components/ui/Button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const slides = [
  {
    id: 1,
    title: "Connecting Elite Talent with Global Leaders",
    subtitle:
      "Empowering businesses through strategic recruitment and personalized career coaching.",
    image: "/hero-1-v2.png",
    cta1: { text: "Find Jobs", href: "/jobs" },
    cta2: { text: "Request Talent", href: "/services" },
    badge: "Premium Recruitment",
    // Slide 1: Fade in from left
    animation: {
      badge: { initial: { opacity: 0, x: -60 }, animate: { opacity: 1, x: 0 } },
      title: {
        initial: { opacity: 0, x: -100 },
        animate: { opacity: 1, x: 0 },
      },
      subtitle: {
        initial: { opacity: 0, x: -80 },
        animate: { opacity: 1, x: 0 },
      },
      buttons: {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
      },
    },
  },
  {
    id: 2,
    title: "The Future of Tech Hiring is Here",
    subtitle:
      "Discover high-impact roles in AI, Fintech, and emerging technologies.",
    image: "/hero-2-v2.png",
    cta1: { text: "Explore Roles", href: "/jobs" },
    cta2: { text: "Hire Engineers", href: "/services" },
    badge: "Tech Focus",
    // Slide 2: Fade in from bottom
    animation: {
      badge: { initial: { opacity: 0, y: -40 }, animate: { opacity: 1, y: 0 } },
      title: { initial: { opacity: 0, y: 80 }, animate: { opacity: 1, y: 0 } },
      subtitle: {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
      },
      buttons: {
        initial: { opacity: 0, scale: 0.8, y: 40 },
        animate: { opacity: 1, scale: 1, y: 0 },
      },
    },
  },
  {
    id: 3,
    title: "Building Dynamic Teams Across Industries",
    subtitle:
      "From logistics to finance, we provide specialized workforce solutions that drive growth.",
    image: "/hero-3.png",
    cta1: { text: "Search Portal", href: "/jobs" },
    cta2: { text: "Partner with Us", href: "/services" },
    badge: "Industry Leaders",
    showSearch: true,
    // Slide 3: Fade in from right with scale
    animation: {
      badge: { initial: { opacity: 0, x: 60 }, animate: { opacity: 1, x: 0 } },
      title: {
        initial: { opacity: 0, x: 120, scale: 0.9 },
        animate: { opacity: 1, x: 0, scale: 1 },
      },
      subtitle: {
        initial: { opacity: 0, x: 80 },
        animate: { opacity: 1, x: 0 },
      },
      buttons: {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
      },
      search: {
        initial: { opacity: 0, y: 80, scale: 0.9 },
        animate: { opacity: 1, y: 0, scale: 1 },
      },
    },
  },
];

// Smooth, professional transition config (no bounce)
const smoothTransition = {
  duration: 1,
  ease: [0.25, 0.1, 0.25, 1], // cubic-bezier for smooth deceleration
};

const staggerDelay = 0.2;

export function Hero() {
  const autoplay = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  const fade = React.useRef(Fade());

  const [api, setApi] = React.useState();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative w-full overflow-hidden bg-[#0b2677]">
      <Carousel
        setApi={setApi}
        plugins={[autoplay.current, fade.current]}
        opts={{
          loop: true,
          duration: 30,
        }}
        className="w-full"
      >
        <CarouselContent className="ml-0">
          {slides.map((slide, index) => (
            <CarouselItem
              key={slide.id}
              className={cn(
                "pl-0 relative w-full",
                slide.showSearch
                  ? "h-[750px] sm:h-[700px] md:h-[750px] lg:h-[calc(100vh-80px)] min-h-[700px]"
                  : "h-[550px] sm:h-[600px] md:h-[700px] lg:h-[calc(100vh-80px)] min-h-[550px]"
              )}
            >
              {/* Image Container */}
              <div className="absolute inset-0 w-full h-full z-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className="object-cover object-center transition-transform duration-10000 hover:scale-105"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-linear-to-r from-[#0b2677] via-[#0b2677]/60 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-t from-[#0b2677]/40 via-transparent to-transparent" />
              </div>

              {/* Smoke Layer */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-[5]"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent 0%, black 20%, black 100%), radial-gradient(ellipse 90% 80% at 60% 45%, black 40%, transparent 75%)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent 0%, black 20%, black 100%), radial-gradient(ellipse 90% 80% at 60% 45%, black 40%, transparent 75%)",
                  maskComposite: "intersect",
                  WebkitMaskComposite: "source-in",
                }}
              >
                {/* Layer 1: Slow horizontal drift from left to right */}
                <motion.img
                  src="/smoke.png"
                  alt="smoke layer 1"
                  initial={{ opacity: 0, x: "-15%" }}
                  animate={{ opacity: 0.35, x: "15%" }}
                  transition={{
                    duration: 22,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "110%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                {/* Layer 2: Diagonal drift with scale pulse */}
                <motion.img
                  src="/smoke.png"
                  alt="smoke layer 2"
                  initial={{ opacity: 0, x: "20%", y: "-10%", scale: 1.15 }}
                  animate={{ opacity: 0.28, x: "-10%", y: "8%", scale: 1.35 }}
                  transition={{
                    duration: 28,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    delay: 2,
                  }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "120%",
                    height: "110%",
                    objectFit: "cover",
                    transformOrigin: "center right",
                  }}
                />
                {/* Layer 3: Vertical float with rotation hint */}
                <motion.img
                  src="/smoke.png"
                  alt="smoke layer 3"
                  initial={{ opacity: 0, scale: 1.05, y: "12%", rotate: -2 }}
                  animate={{ opacity: 0.2, scale: 1.3, y: "-8%", rotate: 2 }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 5,
                  }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "115%",
                    height: "120%",
                    objectFit: "cover",
                    transformOrigin: "top center",
                  }}
                />
              </div>

              {/* Content Layer with Framer Motion Animations */}
              <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-10 h-full flex items-center">
                <AnimatePresence mode="wait">
                  {current === index && (
                    <motion.div
                      key={slide.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="max-w-3xl space-y-4 sm:space-y-5 md:space-y-6"
                    >
                      {/* Badge */}
                      <motion.div
                        initial={slide.animation.badge.initial}
                        animate={slide.animation.badge.animate}
                        transition={{
                          ...smoothTransition,
                          delay: staggerDelay * 0,
                        }}
                      >
                        <Badge
                          variant="outline"
                          className="px-3 py-1 sm:px-4 sm:py-1.5 text-white border-white/30 bg-white/10 backdrop-blur-md text-xs sm:text-sm font-semibold"
                        >
                          {slide.badge}
                        </Badge>
                      </motion.div>

                      {/* Title */}
                      <motion.h1
                        initial={slide.animation.title.initial}
                        animate={slide.animation.title.animate}
                        transition={{
                          ...smoothTransition,
                          delay: staggerDelay * 1,
                        }}
                        className="tracking-tight text-white leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[34pt]"
                      >
                        {slide.title}
                      </motion.h1>

                      {/* Subtitle */}
                      <motion.p
                        initial={slide.animation.subtitle.initial}
                        animate={slide.animation.subtitle.animate}
                        transition={{
                          ...smoothTransition,
                          delay: staggerDelay * 2,
                        }}
                        className="text-white/70 max-w-2xl leading-relaxed text-sm sm:text-base md:text-lg"
                      >
                        {slide.subtitle}
                      </motion.p>

                      {/* Buttons */}
                      <motion.div
                        initial={slide.animation.buttons.initial}
                        animate={slide.animation.buttons.animate}
                        transition={{
                          ...smoothTransition,
                          delay: staggerDelay * 3,
                        }}
                        className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4"
                      >
                        <Button
                          className="h-11 sm:h-12 px-5 sm:px-6 rounded-lg shadow-2xl shadow-[#9a01cd]/30 bg-[#9a01cd] hover:bg-[#9a01cd]/90 text-white border-none text-xs font-bold tracking-widest uppercase w-full sm:w-auto"
                          asChild
                        >
                          <Link href={slide.cta1.href}>
                            {slide.cta1.text}
                            <ArrowRight className="ml-2 w-5 h-5" />
                          </Link>
                        </Button>
                        <Button
                          variant="outline"
                          className="h-11 sm:h-12 px-5 sm:px-6 rounded-lg border-2 bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white transition-all text-xs font-bold tracking-widest uppercase w-full sm:w-auto"
                          asChild
                        >
                          <Link href={slide.cta2.href}>{slide.cta2.text}</Link>
                        </Button>
                      </motion.div>

                      {/* Search Box (only on slide 3) */}
                      {slide.showSearch && slide.animation.search && (
                        <motion.div
                          initial={slide.animation.search.initial}
                          animate={slide.animation.search.animate}
                          transition={{
                            ...smoothTransition,
                            delay: staggerDelay * 4,
                          }}
                          className="mt-6 sm:mt-8 md:mt-12 p-2 sm:p-3 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-2xl sm:rounded-[2rem] shadow-[0_32px_64px_-15px_rgba(0,0,0,0.3)] max-w-3xl"
                        >
                          <div className="flex flex-col gap-2">
                            <div className="flex flex-col sm:flex-row items-stretch gap-2">
                              <div className="relative flex-1 group">
                                <Briefcase className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-white transition-colors group-focus-within:text-white" />
                                <Input
                                  placeholder="Job title or keyword"
                                  className="pl-10 sm:pl-12 h-12 sm:h-14 bg-transparent border-none focus-visible:ring-0 text-white text-base sm:text-lg placeholder:text-white/50"
                                />
                              </div>
                              <div className="w-px bg-white/20 hidden sm:block my-3" />
                              <div className="relative flex-1 group">
                                <MapPin className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-white transition-colors group-focus-within:text-white" />
                                <Input
                                  placeholder="Location"
                                  className="pl-10 sm:pl-12 h-12 sm:h-14 bg-transparent border-none focus-visible:ring-0 text-white text-base sm:text-lg placeholder:text-white/50"
                                />
                              </div>
                            </div>
                            <Button className="h-11 sm:h-12 px-6 sm:px-8 rounded-lg font-bold text-xs uppercase tracking-widest shadow-xl shadow-[#9a01cd]/20 active:scale-95 transition-transform bg-[#9a01cd] hover:bg-[#9a01cd]/90 text-white w-full sm:w-auto sm:self-end">
                              Search
                            </Button>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
