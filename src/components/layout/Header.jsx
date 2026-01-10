"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Job Portal", href: "/jobs" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    // Handle scroll state on mount and scroll events
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      // Transition to solid after 15px scroll (middle of 10-20px range)
      setIsScrolled(scrollY > 15);
    };

    // Check initial scroll position on mount
    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ease-out",
        isScrolled
          ? "bg-white border-b border-[#e5e5e5] shadow-md backdrop-blur-sm"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="relative h-10 w-40 block">
            <Image
              src="/mainLogo.png"
              alt="NeoRecruits"
              fill
              sizes="160px"
              className={cn(
                "object-contain object-left transition-all duration-300",
                isScrolled ? "brightness-0" : "brightness-0 invert"
              )}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-300",
                  isScrolled
                    ? "text-[#0b2677] hover:text-[#9a01cd]"
                    : "text-white hover:text-white/80"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3 min-w-[200px] justify-end">
            <AnimatePresence mode="wait">
              {!isScrolled ? (
                <motion.div
                  key="auth-buttons"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-3"
                >
                  <Button
                    variant="ghost"
                    className="font-semibold transition-all duration-300 text-white hover:bg-white/10"
                  >
                    Log in
                  </Button>
                  <Button className="bg-[#9a01cd] hover:bg-[#9a01cd]/90 text-white font-bold uppercase tracking-wider text-xs">
                    Sign up
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key="contact-button"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Button
                    variant="outline"
                    className="border-2 border-[#0b2677]/20 text-[#0b2677] hover:bg-[#0b2677] hover:text-white font-bold uppercase tracking-wider text-xs px-4 py-2 transition-all duration-300"
                    asChild
                  >
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "transition-all duration-300",
                    isScrolled
                      ? "text-[#0b2677] hover:bg-[#0b2677]/10"
                      : "text-white hover:bg-white/10"
                  )}
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] bg-white"
              >
                <SheetHeader>
                  <SheetTitle className="text-left">
                    <div className="relative h-10 w-40">
                      <Image
                        src="/mainLogo.png"
                        alt="NeoRecruits"
                        fill
                        sizes="160px"
                        className="object-contain object-left brightness-0"
                      />
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-lg font-semibold border-b border-[#e5e5e5] pb-4 text-[#0b2677] hover:text-[#9a01cd] transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <div className="flex flex-col gap-3 mt-4">
                    <Button
                      variant="ghost"
                      className="w-full justify-center text-lg py-6 text-[#0b2677] hover:bg-[#0b2677]/10 font-semibold"
                    >
                      Log in
                    </Button>
                    <Button className="w-full justify-center text-lg py-6 bg-[#9a01cd] hover:bg-[#9a01cd]/90 text-white font-bold uppercase tracking-wider">
                      Sign up
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-center text-lg py-6 border-2 border-[#0b2677]/20 text-[#0b2677] hover:bg-[#0b2677] hover:text-white font-bold uppercase tracking-wider"
                      asChild
                    >
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}
