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
    cta: { text: "Learn More", href: "/services" },
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
    cta: { text: "Learn More", href: "/services" },
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
    cta: { text: "Learn More", href: "/services" },
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
    <section className="relative w-full overflow-hidden bg-[#0b2677] h-screen">
      <Carousel
        setApi={setApi}
        plugins={[autoplay.current, fade.current]}
        opts={{
          loop: true,
          duration: 30,
        }}
        className="w-full h-full"
      >
        <CarouselContent className="ml-0 h-full">
          {slides.map((slide, index) => (
            <CarouselItem
              key={slide.id}
              className={cn(
                "pl-0 relative w-full",
                slide.showSearch
                  ? "h-screen sm:h-[750px] md:h-[800px] lg:h-screen"
                  : "h-screen sm:h-[600px] md:h-[700px] lg:h-screen"
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
                <div
                  className="absolute inset-0 bg-primary/90"
                />
              </div>

              {/* Smoke Layer */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-10"
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
              <div className="relative z-10 container mx-auto px-4 h-full grid grid-cols-2 place-items-center pt-20 sm:pt-24 md:pt-16 max-w-7xl">
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
                          className="h-11 sm:h-12 px-5 sm:px-6 rounded-lg shadow-2xl shadow-[#9a01cd]/30 bg-white hover:bg-gray-50 text-primary border-none text-xs font-bold tracking-widest uppercase w-full sm:w-auto"
                          asChild
                        >
                          <Link href={slide.cta.href}>
                            {slide.cta.text}
                            <ArrowRight className="ml-2 w-5 h-5" />
                          </Link>
                        </Button>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <Image src="/spinner-nobg.png" alt="logo" width={500} height={500} className="size-100 animate-[spin_20s_linear_infinite]" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Vertical Navigation Dots */}
      <div className="absolute right-6 sm:right-10 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(154,1,205,0.6)]",
              current === index
                ? "bg-white h-8"
                : "bg-white/30 hover:bg-white/60"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
