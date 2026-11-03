"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, LogIn, UserPlus, Home, Users, BookOpen, Newspaper, Heart, Download, ShieldCheck, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  isAuthenticated?: boolean;
  userName?: string;
  isAdmin?: boolean;
}

export default function MobileNav({ isAuthenticated, userName, isAdmin }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about-us", label: "About Us", icon: ShieldCheck },
    { href: "/magazin", label: "Magazine", icon: BookOpen },
    { href: "/news", label: "News and Media", icon: Newspaper },
    { href: "/member-list", label: "Members", icon: Users },
    { href: "/search-var-vadhu", label: "Search Var - Vadhu", icon: Heart },
    { href: "/download", label: "Download", icon: Download },
  ];

  return (
    <div className="lg:hidden">
      {/* Hamburger Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open Navigation Menu"
        aria-expanded={isOpen}
        className="p-2.5 rounded-lg text-white hover:bg-maroon-dark/60 focus:outline-none focus:ring-2 focus:ring-gold transition-colors"
      >
        <Menu className="w-6 h-6 text-white" />
      </button>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Slide-out Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        className={cn(
          "fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-warm-surface z-50 shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out border-l border-warm-border",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Drawer Header */}
        <div className="p-4 bg-maroon-dark text-white flex items-center justify-between border-b border-maroon">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0">
              <Image
                src="/logo.png"
                alt="PPJain Logo"
                width={40}
                height={40}
                className="object-contain w-full h-full rounded-full"
              />
            </div>
            <div>
              <p className="text-[11px] font-semibold text-gold tracking-wide">।।श्री महावीराय नमः।।</p>
              <h2 className="text-sm font-bold text-white leading-tight font-devanagari">पद्मावती पुरवाल जैन</h2>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="p-2 rounded-md hover:bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-gold transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Auth CTA Banner in Drawer */}
        <div className="p-4 bg-warm-muted border-b border-warm-border">
          {isAuthenticated ? (
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-content-secondary">Logged in as</p>
                <p className="text-sm font-bold text-maroon">{userName || "Member"}</p>
              </div>
              <div className="flex items-center gap-1.5">
                {isAdmin && (
                  <Link
                    href="/admin"
                    className="px-2.5 py-1.5 bg-gold text-maroon-dark text-xs font-bold rounded-md hover:bg-gold-light"
                  >
                    Admin
                  </Link>
                )}
                <Link
                  href="/dashboard"
                  className="px-3 py-1.5 bg-maroon text-white text-xs font-semibold rounded-md hover:bg-maroon-dark"
                >
                  Dashboard
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/login"
                className="flex items-center justify-center gap-1.5 py-2 px-3 bg-maroon text-white rounded-lg text-xs font-semibold shadow hover:bg-maroon-dark transition-all"
              >
                <LogIn className="w-3.5 h-3.5" />
                Login
              </Link>
              <Link
                href="/register"
                className="flex items-center justify-center gap-1.5 py-2 px-3 bg-white text-maroon border border-maroon/30 rounded-lg text-xs font-semibold shadow-sm hover:bg-maroon-50 transition-all"
              >
                <UserPlus className="w-3.5 h-3.5" />
                Register
              </Link>
            </div>
          )}
        </div>

        {/* Nav Links */}
        <nav className="flex-1 overflow-y-auto py-2 px-3 space-y-1">
          {navLinks.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-maroon text-white font-semibold shadow-sm"
                    : "text-content-primary hover:bg-warm-muted hover:text-maroon"
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon className={cn("w-4 h-4", isActive ? "text-gold" : "text-content-secondary")} />
                  <span>{item.label}</span>
                </div>
                <ChevronRight className={cn("w-4 h-4 opacity-50", isActive ? "text-white" : "text-content-muted")} />
              </Link>
            );
          })}
        </nav>

        {/* Footer info in Drawer */}
        <div className="p-4 border-t border-warm-border text-center text-[11px] text-content-secondary bg-warm-bg">
          <p className="font-semibold text-maroon font-devanagari">प्रयास हमारा - साथ आपका</p>
          <p className="mt-0.5">सम्पर्क: info@ppjain.in</p>
        </div>
      </div>
    </div>
  );
}
