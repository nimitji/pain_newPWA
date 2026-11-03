"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LogIn, UserPlus, User } from "lucide-react";
import MobileNav from "./MobileNav";
import { cn } from "@/lib/utils";

interface HeaderProps {
  user?: { fullname: string; mobile: string; role?: string } | null;
}

export default function Header({ user }: HeaderProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/magazin", label: "Magazine" },
    { href: "/news", label: "News and Media" },
    { href: "/member-list", label: "Members" },
    { href: "/search-var-vadhu", label: "Search Var - Vadhu" },
    { href: "/download", label: "Download" },
  ];

  return (
    <header className="w-full relative z-40 bg-warm-bg">
      {/* 1. Cultural Heritage Top Bar */}
      <div className="bg-maroon-dark text-white border-b border-maroon-600">
        <div className="max-w-desktop mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Left Logo */}
            <Link href="/" className="flex-shrink-0 group flex items-center gap-3">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="श्री पद्मावती पुरवाल दिगंबर जैन परिवार"
                  width={64}
                  height={64}
                  priority
                  className="object-contain w-full h-full rounded-full"
                />
              </div>
            </Link>

            {/* Center Sacred Slogan */}
            <div className="text-center flex-1 px-2">
              <div className="inline-block px-3 py-0.5 rounded-full bg-gold/15 border border-gold/30 mb-1">
                <span className="text-xs sm:text-sm font-bold text-gold tracking-widest">
                  ।।श्री महावीराय नमः।।
                </span>
              </div>
              <h1 className="text-base sm:text-2xl md:text-3xl font-extrabold text-white tracking-wide font-devanagari drop-shadow-sm">
                श्री पद्मावती पुरवाल दिगंबर जैन परिवार
              </h1>
              <p className="text-[11px] sm:text-xs md:text-sm font-medium text-gold-light mt-0.5 font-devanagari">
                सम्पूर्ण भारत | जनसंख्या अभियान | प्रयास हमारा - साथ आपका
              </p>
            </div>

            {/* Right Emblem / Mobile Trigger */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="hidden lg:flex w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="श्री पद्मावती पुरवाल दिगंबर जैन परिवार"
                  width={64}
                  height={64}
                  className="object-contain w-full h-full rounded-full"
                />
              </div>

              {/* Mobile Drawer trigger */}
              <MobileNav
                isAuthenticated={!!user}
                userName={user?.fullname}
                isAdmin={user?.role === "ADMIN"}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2. Sticky Modern Navigation Bar */}
      <nav
        className={cn(
          "sticky top-0 w-full z-40 transition-all duration-200 border-b border-maroon-700 bg-maroon text-white",
          isScrolled ? "shadow-lg bg-maroon/95 backdrop-blur-md py-1" : "py-1.5"
        )}
      >
        <div className="max-w-desktop mx-auto px-4 flex items-center justify-between">
          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "inline-flex items-center px-3.5 py-2 text-sm font-semibold rounded-md transition-all",
                      isActive
                        ? "bg-gold text-maroon-dark shadow-sm font-bold"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop Auth Actions */}
          <div className="hidden lg:flex items-center gap-2.5">
            {user ? (
              <div className="flex items-center gap-2">
                {user.role === "ADMIN" && (
                  <Link
                    href="/admin"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gold text-maroon-dark hover:bg-gold-light text-xs font-bold transition-all shadow-sm"
                  >
                    <span>Admin Panel</span>
                  </Link>
                )}
                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white/15 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-all"
                >
                  <User className="w-3.5 h-3.5 text-gold" />
                  <span>{user.fullname}</span>
                </Link>
                <form action="/api/auth/logout" method="POST">
                  <button
                    type="submit"
                    className="px-3 py-1.5 rounded-md bg-maroon-dark hover:bg-black/40 text-white text-xs font-medium border border-white/10"
                  >
                    Logout
                  </button>
                </form>
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold rounded-md bg-white text-maroon hover:bg-gold hover:text-maroon-dark transition-all shadow-sm"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span>Login</span>
                </Link>
                <Link
                  href="/register"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold rounded-md bg-gold text-maroon-dark hover:bg-gold-light transition-all shadow-sm"
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  <span>Register</span>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Quick bar inside sticky nav */}
          <div className="lg:hidden flex items-center justify-between w-full py-1 text-xs">
            <span className="font-semibold text-gold-light truncate">
              {pathname === "/" ? "Home" : navItems.find((n) => n.href === pathname)?.label || "PPJain Community"}
            </span>
            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className="px-2.5 py-1 rounded bg-white text-maroon font-bold text-[11px] shadow-sm flex items-center gap-1"
              >
                <LogIn className="w-3 h-3" />
                Login
              </Link>
              <Link
                href="/register"
                className="px-2.5 py-1 rounded bg-gold text-maroon-dark font-bold text-[11px] shadow-sm flex items-center gap-1"
              >
                <UserPlus className="w-3 h-3" />
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
