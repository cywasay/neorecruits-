"use client";

import * as React from "react";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Send,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-[#0b2677] text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Social */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <h2 className="text-2xl font-extrabold tracking-tight uppercase">
                Neo<span className="text-[#9a01cd]">Recruits</span>
              </h2>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Reshaping the future of recruitment with AI-driven insights and a
              human-centric approach. Connecting elite talent with global
              visionaries.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#9a01cd] hover:text-white transition-all duration-300 text-white/60"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#9a01cd] hover:text-white transition-all duration-300 text-white/60"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#9a01cd] hover:text-white transition-all duration-300 text-white/60"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#9a01cd] hover:text-white transition-all duration-300 text-white/60"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-white/60 hover:text-[#9a01cd] transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white/60 hover:text-[#9a01cd] transition-colors text-sm"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/jobs"
                  className="text-white/60 hover:text-[#9a01cd] transition-colors text-sm"
                >
                  Job Portal
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="text-white/60 hover:text-[#9a01cd] transition-colors text-sm"
                >
                  Insights & News
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/60 hover:text-[#9a01cd] transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-white/60 hover:text-[#9a01cd] transition-colors text-sm"
                >
                  Executive Search
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/60 hover:text-[#9a01cd] transition-colors text-sm"
                >
                  Contract Staffing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/60 hover:text-[#9a01cd] transition-colors text-sm"
                >
                  RPO Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/60 hover:text-[#9a01cd] transition-colors text-sm"
                >
                  Global Mobility
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/60 hover:text-[#00b8b0] transition-colors text-sm"
                >
                  Talent Advisory
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold uppercase tracking-wider">
              Stay Updated
            </h4>
            <p className="text-white/60 text-sm leading-relaxed">
              Subscribe to our newsletter for the latest job market trends and
              career advice.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/5 border-white/10 text-white pl-10 focus:border-[#9a01cd] focus:ring-[#9a01cd]/20 h-10"
                />
              </div>
              <Button className="w-full bg-[#9a01cd] hover:bg-[#9a01cd]/90 text-white font-bold uppercase tracking-wider h-10 text-xs">
                Subscribe Now
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} NeoRecruits. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-white/40 hover:text-white text-xs transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/40 hover:text-white text-xs transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-white/40 hover:text-white text-xs transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
