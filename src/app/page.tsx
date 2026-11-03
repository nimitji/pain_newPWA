import React from "react";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import IntroSection from "@/components/home/IntroSection";
import CommitteeSection from "@/components/home/CommitteeSection";
import FamilyCtaSection from "@/components/home/FamilyCtaSection";
import ContactSection from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Stats */}
      <StatsSection />

      {/* 3. Community Introduction */}
      <IntroSection />

      {/* 4. Core Committee */}
      <CommitteeSection />

      {/* 5. Family Registration CTA */}
      <FamilyCtaSection />

      {/* 6. Contact */}
      <ContactSection />
    </div>
  );
}
