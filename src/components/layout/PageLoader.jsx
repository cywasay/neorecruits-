"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const loadingWords = ["INNOVATING", "CONNECTING", "EMPOWERING", "NEORECRUITS"];

export function PageLoader() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isVisible, setIsVisible] = React.useState(true);
  const [progress, setProgress] = React.useState(0);
  const [wordIndex, setWordIndex] = React.useState(0);

  React.useEffect(() => {
    let progressInterval;
    let loadTimer;

    document.body.style.overflow = "hidden";

    // Progress animation
    progressInterval = setInterval(() => {  
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        const increment = Math.random() * 8;
        return Math.min(prev + increment, 100);
      });
    }, 150);

    // Sync word index with progress
    const wordStep = 100 / loadingWords.length;
    const currentWordIndex = Math.min(
      Math.floor(progress / wordStep),
      loadingWords.length - 1
    );
    setWordIndex(currentWordIndex);

    if (progress === 100) {
      loadTimer = setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => {
          setIsVisible(false);
          document.body.style.overflow = "";
        }, 800);
      }, 500);
    }

    return () => {
      if (progressInterval) clearInterval(progressInterval);
      if (loadTimer) clearTimeout(loadTimer);
    };
  }, [progress]);

  if (!isVisible) return null;

  const panelVariants = {
    initial: { y: 0 },
    exit: (custom) => ({
      y: custom === "top" ? "-100%" : "100%",
      transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1], delay: 0.2 },
    }),
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden pointer-events-none">
      <AnimatePresence>
        {isLoading && (
          <>
            {/* Top Panel */}
            <motion.div
              custom="top"
              variants={panelVariants}
              initial="initial"
              exit="exit"
              className="absolute top-0 left-0 w-full h-1/2 bg-[#0b2677] z-10"
            />

            {/* Bottom Panel */}
            <motion.div
              custom="bottom"
              variants={panelVariants}
              initial="initial"
              exit="exit"
              className="absolute bottom-0 left-0 w-full h-1/2 bg-[#0b2677] z-10"
            />

            {/* Full Screen Diagonal Shimmer */}
            <motion.div
              className="absolute inset-0 z-15 pointer-events-none overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                className="absolute inset-0 w-[300%] h-[300%] bg-[linear-gradient(135deg,transparent_45%,rgba(255,255,255,0.08)_50%,transparent_55%)]"
                animate={{
                  x: ["-50%", "50%"],
                  y: ["-50%", "50%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ left: "-100%", top: "-100%" }}
              />
            </motion.div>

            {/* Content Container */}
            <motion.div
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="relative z-20 flex flex-col items-center justify-center p-8 pointer-events-auto"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 -z-10 bg-radial-gradient from-[#9a01cd]/20 to-transparent blur-3xl opacity-50" />

              {/* Logo Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-80 h-28 mb-16"
              >
                <Image
                  src="/mainLogo.png"
                  alt="NeoRecruits"
                  fill
                  className="object-contain brightness-0 invert"
                  priority
                />
              </motion.div>

              {/* Progress and Words */}
              <div className="flex flex-col items-center space-y-6">
                <div className="flex items-end space-x-4 overflow-hidden h-12">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={loadingWords[wordIndex]}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      exit={{ y: "-100%", opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="text-white/40 text-sm font-bold tracking-[0.3em] uppercase pb-2"
                    >
                      {loadingWords[wordIndex]}
                    </motion.span>
                  </AnimatePresence>

                  <span className="text-white font-mono text-4xl font-light w-24 tabular-nums">
                    {Math.round(progress)}%
                  </span>
                </div>

                {/* Modern Centered Progress Bar */}
                <div className="w-72 h-[1.5px] bg-white/10 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-linear-to-r from-transparent via-[#9a01cd] to-transparent"
                    animate={{ width: `${progress}%` }}
                    style={{ left: "50%", x: "-50%" }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-white/50"
                    animate={{ width: `${progress}%` }}
                    style={{ left: 0 }}
                    transition={{ type: "spring", damping: 20, stiffness: 100 }}
                  />
                </div>
              </div>

              {/* Technical Grid Overlay */}
              <div
                className="fixed inset-0 pointer-events-none opacity-[0.03]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, white 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
