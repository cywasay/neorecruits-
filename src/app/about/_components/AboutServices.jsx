"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Users,
  FileText,
  Briefcase,
  ClipboardCheck,
  BarChart3,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";

const services = [
  {
    id: 1,
    title: "Executive Search",
    description:
      "Identify and attract top-tier leadership talent to drive your organization's strategic vision forward.",
    icon: Users,
    link: "/services/executive-search",
    image: "/hero-1.png",
  },
  {
    id: 2,
    title: "Contract Recruitment",
    description:
      "Flexible staffing solutions to meet short-term project demands and seasonal peaks with skilled professionals.",
    icon: FileText,
    link: "/services/contract-recruitment",
    image: "/hero-2.png",
  },
  {
    id: 3,
    title: "Permanent Recruitment",
    description:
      "Long-term talent acquisition strategies focused on finding candidates who fit your culture and goals.",
    icon: Briefcase,
    link: "/services/permanent-recruitment",
    image: "/hero-3.png",
  },
  {
    id: 4,
    title: "Payroll",
    description:
      "Comprehensive payroll management services ensuring compliance, accuracy, and timely processing.",
    icon: ClipboardCheck,
    link: "/services/payroll",
    image: "/hero-1-v2.png",
  },
  {
    id: 5,
    title: "Recruitment Campaigns",
    description:
      "Targeted, high-volume recruitment drives tailored to launch new divisions or scale operations rapidly.",
    icon: BarChart3,
    link: "/services/recruitment-campaigns",
    image: "/hero-2-v2.png",
  },
];

export function AboutServices() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = React.useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = React.useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="tracking-tight text-[#0b2677] leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[22pt]">
              Our Services
            </h2>
            <p className="text-[#0b2677]/70 text-base sm:text-lg leading-relaxed">
              Comprehensive recruitment solutions designed to meet your unique
              business needs and drive organizational success.
            </p>
          </div>

          {/* Carousel Navigation */}
          <div className="flex justify-center sm:justify-end gap-2 mb-6">
            <button
              className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center rounded-lg border-2 border-[#0b2677]/20 text-[#0b2677]/40 hover:text-[#0b2677] hover:border-[#9a01cd] transition-all bg-white hover:bg-[#9a01cd]/5"
              onClick={scrollPrev}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center rounded-lg border-2 border-[#0b2677]/20 text-[#0b2677]/40 hover:text-[#0b2677] hover:border-[#9a01cd] transition-all bg-white hover:bg-[#9a01cd]/5"
              onClick={scrollNext}
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Carousel */}
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex -ml-4 sm:-ml-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="flex-[0_0_85%] sm:flex-[0_0_70%] md:flex-[0_0_48%] lg:flex-[0_0_38%] min-w-0 pl-4 sm:pl-6"
                >
                  <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-[#e5e5e5] hover:border-[#9a01cd]/20 group">
                    <div className="relative h-[200px] sm:h-[240px] md:h-[280px] w-full overflow-hidden bg-gray-100">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-[#0b2677]/60 via-transparent to-transparent" />
                    </div>
                    <div className="p-6 sm:p-8 flex flex-col grow space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#9a01cd]/10 flex items-center justify-center group-hover:bg-[#9a01cd] transition-colors duration-300">
                          <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#9a01cd] group-hover:text-white transition-colors duration-300" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#0b2677] group-hover:text-[#9a01cd] transition-colors duration-300">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-sm sm:text-base text-[#0b2677]/70 leading-relaxed grow">
                        {service.description}
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-lg border-2 border-[#0b2677]/20 text-[#0b2677] hover:bg-[#9a01cd] hover:border-[#9a01cd] hover:text-white transition-all duration-300 font-bold text-xs uppercase tracking-widest self-start"
                        asChild
                      >
                        <Link href={service.link}>
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* View All Link */}
          <div className="text-center pt-4">
            <Button
              variant="link"
              className="text-[#0b2677] hover:text-[#9a01cd] font-bold text-base sm:text-lg border-b-2 border-[#0b2677]/20 hover:border-[#9a01cd] rounded-none hover:no-underline transition-colors"
              asChild
            >
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
