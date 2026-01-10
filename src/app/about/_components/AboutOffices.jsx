"use client";

import * as React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { cn } from "@/lib/utils";

const offices = [
  {
    country: "United Arab Emirates",
    city: "Dubai",
    address: "Level 14, Emirates Towers, Sheikh Zayed Road, Dubai",
    phone: "+971 4 123 4567",
    email: "dubai@neorecruits.com",
    hours: "Sun - Thu: 9:00 AM - 6:00 PM",
    flag: "🇦🇪",
  },
  {
    country: "Saudi Arabia",
    city: "Riyadh",
    address: "KAFD, Building 5.04, Al Aqiq, Riyadh 13519",
    phone: "+966 11 987 6543",
    email: "riyadh@neorecruits.com",
    hours: "Sun - Thu: 9:00 AM - 6:00 PM",
    flag: "🇸🇦",
  },
  {
    country: "United Arab Emirates",
    city: "Abu Dhabi",
    address: "ADGM Square, Al Maryah Island, Abu Dhabi",
    phone: "+971 2 444 5566",
    email: "abudhabi@neorecruits.com",
    hours: "Sun - Thu: 9:00 AM - 6:00 PM",
    flag: "🇦🇪",
  },
  {
    country: "United Kingdom",
    city: "London",
    address: "30 St Mary Axe (The Gherkin), London EC3A 8BF",
    phone: "+44 20 7765 4321",
    email: "london@neorecruits.com",
    hours: "Mon - Fri: 9:00 AM - 5:30 PM",
    flag: "🇬🇧",
  },
  {
    country: "Pakistan",
    city: "Karachi",
    address: "Clifton, Block 9, Karachi 75600",
    phone: "+92 21 1234 5678",
    email: "karachi@neorecruits.com",
    hours: "Mon - Sat: 9:00 AM - 6:00 PM",
    flag: "🇵🇰",
  },
];

export function AboutOffices() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-[#0b2677] overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="tracking-tight text-white leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[22pt]">
              Global Presence & Offices
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed">
              Our global reach ensures we are exactly where you need us to be.
              Connect with our regional experts today.
            </p>
          </div>

          {/* Offices Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {offices.map((office, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Badge
                        variant="outline"
                        className="bg-[#9a01cd]/20 text-white border-[#9a01cd]/50 text-xs mb-2"
                      >
                        {office.flag} {office.country}
                      </Badge>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {office.city} Office
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm sm:text-base">
                    <div className="flex items-start gap-3 text-white/70">
                      <MapPin className="w-5 h-5 text-[#9a01cd] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{office.address}</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/70">
                      <Phone className="w-5 h-5 text-[#9a01cd] shrink-0" />
                      <a
                        href={`tel:${office.phone.replace(/\s/g, "")}`}
                        className="hover:text-white transition-colors"
                      >
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-white/70">
                      <Mail className="w-5 h-5 text-[#9a01cd] shrink-0" />
                      <a
                        href={`mailto:${office.email}`}
                        className="hover:text-white transition-colors break-all"
                      >
                        {office.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-white/70">
                      <Clock className="w-5 h-5 text-[#9a01cd] shrink-0" />
                      <span>{office.hours}</span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-2 border-white/30 text-white hover:bg-white hover:text-[#0b2677] transition-all duration-300 font-bold text-xs uppercase tracking-widest"
                    asChild
                  >
                    <Link href="/contact">Contact Office</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
