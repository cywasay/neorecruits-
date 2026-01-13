"use client";

import * as React from "react";
import { MapPin, Phone, Clock, Mail, ExternalLink } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const smoothTransition = {
  duration: 1,
  ease: [0.25, 0.1, 0.25, 1],
};

const staggerDelay = 0.2;

const offices = [
  {
    id: 1,
    city: "Dubai",
    country: "United Arab Emirates",
    address: "Level 14, Emirates Towers, Sheikh Zayed Road, Dubai",
    phone: "+971 4 123 4567",
    hours: "Sun - Thu: 9:00 AM - 6:00 PM",
    coords: { x: "42%", y: "45%" },
  },
  {
    id: 2,
    city: "Riyadh",
    country: "Saudi Arabia",
    address: "KAFD, Building 5.04, Al Aqiq, Riyadh 13519",
    phone: "+966 11 987 6543",
    hours: "Sun - Thu: 9:00 AM - 6:00 PM",
    coords: { x: "32%", y: "48%" },
  },
  {
    id: 3,
    city: "Abu Dhabi",
    country: "United Arab Emirates",
    address: "ADGM Square, Al Maryah Island, Abu Dhabi",
    phone: "+971 2 444 5566",
    hours: "Sun - Thu: 9:00 AM - 6:00 PM",
    coords: { x: "40%", y: "52%" },
  },
  {
    id: 4,
    city: "London",
    country: "United Kingdom",
    address: "30 St Mary Axe (The Gherkin), London EC3A 8BF",
    phone: "+44 20 7765 4321",
    hours: "Mon - Fri: 9:00 AM - 5:30 PM",
    coords: { x: "15%", y: "25%" },
  },
];

export function Locations() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [activeOffice, setActiveOffice] = React.useState(null);

  return (
    <section ref={ref} className="relative py-12 sm:py-16 md:py-24 bg-[#0b2677] overflow-hidden">
      {/* Subtle Geometric Background Pattern Backdrop */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-10 relative z-10 max-w-full overflow-x-hidden">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 items-center w-full max-w-7xl mx-auto">
          {/* Left Side: Interactive Stylized Map */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ ...smoothTransition, delay: staggerDelay * 0 }}
            className="lg:col-span-1 w-full lg:w-3/5 min-w-0"
          >
            <div className="relative aspect-4/3 sm:aspect-video w-full max-w-full bg-[#2165b8]/20 rounded-2xl sm:rounded-3xl border border-white/10 overflow-hidden group">
              {/* Simple Stylized Map SVG Backdrop */}
              <svg
                viewBox="0 0 1000 500"
                className="w-full h-full opacity-20 grayscale"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  fill="white"
                  d="M150,100 L850,100 L850,400 L150,400 Z M300,150 Q450,100 600,150 T900,250 L900,350 Q750,400 600,350 T100,250 Z"
                  className="animate-pulse"
                />
                {/* Simplified continents representation */}
                <circle cx="200" cy="150" r="80" fill="white" />
                <circle cx="500" cy="250" r="120" fill="white" />
                <circle cx="800" cy="180" r="60" fill="white" />
                <circle cx="350" cy="350" r="70" fill="white" />
              </svg>

              {/* Glowing Connection Lines (Purely Decorative) */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-cyan-500/20 rounded-full animate-ping opacity-20" />
              </div>

              {/* Office Pins */}
              {offices.map((office) => (
                <div
                  key={office.id}
                  className="absolute cursor-pointer transition-all duration-300 z-10"
                  style={{ left: office.coords.x, top: office.coords.y }}
                  onMouseEnter={() => setActiveOffice(office.id)}
                  onMouseLeave={() => setActiveOffice(null)}
                >
                  <div className="relative">
                    <div
                      className={cn(
                        "w-4 h-4 rounded-full bg-[#9a01cd] shadow-[0_0_15px_rgba(154,1,205,0.8)] transition-transform duration-300",
                        activeOffice === office.id ? "scale-150" : "scale-100"
                      )}
                    />
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap max-w-[150px] overflow-hidden">
                      <span
                        className={cn(
                          "text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-[#0b2677]/80 text-white border border-white/10 transition-opacity duration-300 inline-block",
                          activeOffice === office.id
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      >
                        {office.city}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-8">
                <h3 className="text-white/40 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em]">
                  NeoRecruits Global Footprint
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Content & Office Blocks */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ ...smoothTransition, delay: staggerDelay * 1 }}
            className="w-full lg:w-2/5 space-y-6 sm:space-y-8 md:space-y-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ ...smoothTransition, delay: staggerDelay * 2 }}
              className="space-y-3 sm:space-y-4"
            >
              <h2 className="tracking-tight text-white leading-tight text-xl sm:text-2xl md:text-3xl lg:text-[22pt]">
                Where to find us
              </h2>
              <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                Our global reach ensures we are exactly where you need us to be.
                Connect with our regional experts today.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              {offices.map((office, index) => (
                <motion.div
                  key={office.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ ...smoothTransition, delay: staggerDelay * (2.5 + index * 0.3) }}
                  className={cn(
                    "group relative p-4 sm:p-6 rounded-xl sm:rounded-2xl border transition-all duration-500 overflow-hidden cursor-default",
                    activeOffice === office.id
                      ? "bg-white border-white"
                      : "bg-white/5 border-white/10 hover:border-white/20"
                  )}
                  onMouseEnter={() => setActiveOffice(office.id)}
                  onMouseLeave={() => setActiveOffice(null)}
                >
                  <div className="relative z-10 flex justify-between items-start">
                    <div className="space-y-1">
                      <div
                        className={cn(
                          "text-xs font-bold uppercase tracking-widest transition-colors",
                          activeOffice === office.id
                            ? "text-[#9a01cd]"
                            : "text-white/40"
                        )}
                      >
                        {office.country}
                      </div>
                      <h4
                        className={cn(
                          "text-lg sm:text-xl md:text-2xl font-bold tracking-tight transition-colors",
                          activeOffice === office.id
                            ? "text-[#0b2677]"
                            : "text-white"
                        )}
                      >
                        {office.city} Office
                      </h4>
                    </div>
                    <MapPin
                      className={cn(
                        "w-5 h-5 transition-colors",
                        activeOffice === office.id
                          ? "text-[#9a01cd]"
                          : "text-white/20"
                      )}
                    />
                  </div>

                  {/* Hover Details */}
                  <div
                    className={cn(
                      "grid grid-cols-1 gap-3 sm:gap-4 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t transition-all duration-500 origin-top",
                      activeOffice === office.id
                        ? "opacity-100 max-h-40 border-[#0b2677]/10"
                        : "opacity-0 max-h-0 border-transparent overflow-hidden"
                    )}
                  >
                    <div className="flex items-start gap-2 sm:gap-3 text-[#0b2677]/80 text-xs sm:text-sm">
                      <MapPin className="w-4 h-4 mt-0.5 text-[#9a01cd]" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 text-[#0b2677]/80 text-xs sm:text-sm">
                      <Phone className="w-4 h-4 text-[#9a01cd]" />
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 text-[#0b2677]/80 text-xs sm:text-sm font-medium">
                      <Clock className="w-4 h-4 text-[#9a01cd]" />
                      <span>{office.hours}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
