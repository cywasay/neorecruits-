"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Users,
  FileText,
  ClipboardCheck,
  BarChart3,
  Plus,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

// Smooth, professional transition config (no bounce)
const smoothTransition = {
  duration: 1,
  ease: [0.25, 0.1, 0.25, 1],
};

const staggerDelay = 0.2;

const services = [
  {
    id: "item-1",
    title: "Executive Search",
    icon: Users,
    description:
      "Identify and attract top-tier leadership talent to drive your organization's strategic vision forward.",
    link: "/services/executive-search",
  },
  {
    id: "item-2",
    title: "Contract Recruitment",
    icon: FileText,
    description:
      "Flexible staffing solutions to meet short-term project demands and seasonal peaks with skilled professionals.",
    link: "/services/contract-recruitment",
  },
  {
    id: "item-3",
    title: "Permanent Recruitment",
    icon: Briefcase,
    description:
      "Long-term talent acquisition strategies focused on finding candidates who fit your culture and goals.",
    link: "/services/permanent-recruitment",
  },
  {
    id: "item-4",
    title: "Payroll",
    icon: ClipboardCheck,
    description:
      "Comprehensive payroll management services ensuring compliance, accuracy, and timely processing for your workforce.",
    link: "/services/payroll",
  },
  {
    id: "item-5",
    title: "Recruitment Campaigns",
    icon: BarChart3,
    description:
      "Targeted, high-volume recruitment drives tailored to launch new divisions or scale operations rapidly.",
    link: "/services/recruitment-campaigns",
  },
];

export function Services() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-12 sm:py-16 md:py-24 bg-[#0b2677]">
      {/* Subtle Geometric Background Pattern Backdrop */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      {/* Decorative Background Element (Right Side) */}
      <div 
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[50%] h-[120%] pointer-events-none -skew-x-12 origin-top-right z-0 rounded-l-[100px] blur-3xl"
        style={{
          backgroundImage: "linear-gradient(to bottom left, rgba(255, 255, 255, 0.05), transparent)"
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-center max-w-7xl mx-auto">
          {/* Left Side: Service Accordion List */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ ...smoothTransition, delay: staggerDelay * 1 }}
            className="order-2 lg:order-1"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ ...smoothTransition, delay: staggerDelay * (1.5 + index * 0.3) }}
                >
                  <AccordionItem
                    value={service.id}
                    className="border-none bg-[#2165b8]/20 rounded-xl px-4 sm:px-6 transition-all duration-300 data-[state=open]:bg-white data-[state=open]:text-[#0b2677] group hover:bg-[#2165b8]/40"
                  >
                    <AccordionTrigger className="hover:no-underline py-4 sm:py-6 [&[data-state=open]>svg]:rotate-45">
                      <div className="flex items-center gap-3 sm:gap-4 text-left">
                        <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white/50 group-data-[state=open]:text-[#0b2677] transition-colors shrink-0" />
                        <span className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-white group-data-[state=open]:text-[#0b2677]">
                          {service.title}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 sm:pb-6">
                      <div className="space-y-4 sm:space-y-6 pt-2">
                        <p className="text-sm sm:text-base text-white/70 group-data-[state=open]:text-[#0b2677]/80 leading-relaxed font-medium">
                          {service.description}
                        </p>
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                          <Button
                            size="sm"
                            className="rounded-full font-bold bg-[#0b2677] text-white hover:bg-[#0b2677]/90"
                            asChild
                          >
                            <Link href={service.link}>Read More</Link>
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="rounded-full font-bold border-[#0b2677]/20 text-[#0b2677] hover:bg-[#0b2677]/5"
                            asChild
                          >
                            <Link href="/contact">Request Talent</Link>
                          </Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          {/* Right Side: Heading & Description */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ ...smoothTransition, delay: staggerDelay * 0 }}
            className="order-1 lg:order-2 space-y-4 sm:space-y-6 md:space-y-8"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ ...smoothTransition, delay: staggerDelay * 1 }}
              className="tracking-tight text-white leading-tight text-xl sm:text-2xl md:text-3xl lg:text-[22pt]"
            >
              Global Recruitment Solutions <br className="hidden lg:block" />
              for Every Industry.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ ...smoothTransition, delay: staggerDelay * 2 }}
              className="space-y-4 sm:space-y-6 text-white/70 leading-relaxed text-sm sm:text-base"
            >
              <p>
                NeoRecruits' recruitment and management services are operational
                across 6 continents. So whether you are a candidate exploring
                work overseas or want to work in your location; NeoRecruits
                offers a flexible and trusted partnership.
              </p>
              <p>
                Our comprehensive suite of services ensures that every aspect of
                your talent acquisition strategy is covered, from initial
                identification to successful onboarding.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ ...smoothTransition, delay: staggerDelay * 3 }}
                className="pt-4"
              >
                <Button
                  variant="link"
                  className="p-0 h-auto text-base sm:text-lg font-bold text-white hover:text-white/80 transition-colors border-b-2 border-white/20 hover:border-white rounded-none hover:no-underline"
                  asChild
                >
                  <Link href="/services">
                    View All Services
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
