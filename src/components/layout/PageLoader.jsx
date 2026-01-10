"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function PageLoader() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isVisible, setIsVisible] = React.useState(true);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    let progressInterval;
    let maxTimer;
    let loadTimer;

    // Prevent body scroll while loader is visible
    document.body.style.overflow = "hidden";

    // Set mounted state to avoid hydration issues
    const handleComplete = () => {
      // Animate progress to 100%
      setProgress(100);
      
      // Wait a bit for progress animation, then fade out
      setTimeout(() => {
        setIsLoading(false);
        // Add delay before hiding to allow fade-out animation
        setTimeout(() => {
          setIsVisible(false);
          // Re-enable body scroll
          document.body.style.overflow = "";
        }, 500);
      }, 300);
    };

    const handleLoad = () => {
      // Minimum display time for smooth UX
      loadTimer = setTimeout(handleComplete, 800);
    };

    // Progress animation
    progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return prev;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    // Check if page is already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      // Listen for page load
      window.addEventListener("load", handleLoad);
    }

    // Fallback: hide loader after max time
    maxTimer = setTimeout(() => {
      if (progressInterval) clearInterval(progressInterval);
      handleComplete();
    }, 3000);

    return () => {
      if (progressInterval) clearInterval(progressInterval);
      if (maxTimer) clearTimeout(maxTimer);
      if (loadTimer) clearTimeout(loadTimer);
      window.removeEventListener("load", handleLoad);
      // Ensure body scroll is re-enabled on unmount
      document.body.style.overflow = "";
    };
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoading ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-linear-to-br from-[#0b2677] via-[#0b2677] to-[#1a3a8f]"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Gradient orbs */}
            <motion.div
              className="absolute top-0 left-0 w-96 h-96 bg-[#9a01cd]/20 rounded-full blur-3xl"
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-96 h-96 bg-[#9a01cd]/15 rounded-full blur-3xl"
              animate={{
                x: [0, -100, 0],
                y: [0, -50, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </div>

          {/* Logo Container */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            {/* Logo with animations */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.2,
              }}
              className="relative w-48 h-16 sm:w-56 sm:h-20 md:w-64 md:h-24"
            >
              <Image
                src="/mainLogo.png"
                alt="NeoRecruits"
                fill
                sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 256px"
                className="object-contain brightness-0 invert"
                priority
              />
              {/* Pulsing glow effect */}
              <motion.div
                className="absolute inset-0 -z-10 bg-white/20 rounded-lg blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.8,
              }}
              className="mt-8 flex items-center justify-center"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-white/80 text-sm font-medium tracking-wider uppercase"
              >
                Loading
              </motion.p>
            </motion.div>
          </div>

          {/* Progress bar at bottom */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full bg-linear-to-r from-[#9a01cd] via-white to-[#9a01cd]"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
