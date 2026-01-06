"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ActionButtons = ({ mobile = false }) => (
    <div
      className={cn(
        "flex items-center gap-3",
        mobile && "flex-col w-full mt-4"
      )}
    >
      {!isScrolled ? (
        <React.Fragment key="auth-btns">
          <Button
            variant="ghost"
            className={cn(
              "font-semibold text-white hover:text-white hover:bg-white/10",
              !mobile &&
                "animate-in fade-in slide-in-from-right-4 duration-500",
              mobile &&
                "w-full justify-center text-lg py-6 text-[#0b2677] hover:text-[#0b2677] hover:bg-[#0b2677]/10"
            )}
          >
            Log in
          </Button>
          <Button
            className={cn(
              "bg-[#9a01cd] hover:bg-[#9a01cd]/90 text-white font-bold uppercase tracking-wider text-xs",
              !mobile &&
                "animate-in fade-in slide-in-from-right-4 duration-500 delay-75",
              mobile && "w-full justify-center text-lg py-6"
            )}
          >
            Sign up
          </Button>
        </React.Fragment>
      ) : (
        <Button
          key="contact-btn"
          className={cn(
            "bg-[#9a01cd] hover:bg-[#9a01cd]/90 text-white font-bold uppercase tracking-wider text-xs",
            !mobile && "animate-in fade-in zoom-in-95 duration-500",
            mobile && "w-full justify-center text-lg py-6"
          )}
        >
          Contact Us
        </Button>
      )}
    </div>
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-[#f4f4f4]/95 backdrop-blur-md border-[#e5e5e5] py-2 shadow-sm"
          : "bg-transparent border-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          {/* Brand Name */}
          <Link href="/" className="group relative h-10 w-40 block">
            <Image
              src="/mainLogo.png"
              alt="NeoRecruits"
              fill
              className={cn(
                "object-contain object-left transition-all duration-300"
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
                  "text-sm font-medium transition-colors",
                  isScrolled
                    ? "text-[#0b2677]/70 hover:text-[#9a01cd]"
                    : "text-white/80 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center">
            <ActionButtons />
          </div>

          {/* Mobile Navigation (Shadcn Sheet) */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
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
                className="w-[300px] sm:w-[400px] bg-[#f4f4f4]"
              >
                <SheetHeader>
                  <SheetTitle className="text-left">
                    <div className="relative h-10 w-40">
                      <Image
                        src="/mainLogo.png"
                        alt="NeoRecruits"
                        fill
                        className="object-contain object-left"
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
                  <ActionButtons mobile />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}
