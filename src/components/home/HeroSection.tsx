import React from "react";
import Link from "next/link";
import Image from "next/image";
import { UserPlus, Users, ArrowRight, ShieldCheck, Heart, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-maroon-dark via-maroon to-maroon-900 text-white py-14 sm:py-20 lg:py-24 border-b border-gold/30">
      {/* Decorative Sacred Backdrop Patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#C89B52_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-maroon-light/30 blur-3xl pointer-events-none" />

      <div className="max-w-desktop mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text & Call to Action */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-gold/40 text-gold text-xs font-semibold backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
              <span>डिजिटल जनगणना अभियान २०२५-२०२६</span>
            </div>

            <div className="space-y-2">
              <p className="text-sm sm:text-base font-bold text-gold tracking-widest font-devanagari">
                ।।श्री महावीराय नमः।।
              </p>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight font-devanagari">
                श्री पद्मावती पुरवाल <br />
                <span className="text-gold">दिगंबर जैन परिवार</span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-white/90 font-medium font-devanagari max-w-xl mx-auto lg:mx-0 leading-relaxed">
              एकता, संस्कार और प्रगति की ओर एक डिजिटल पहल। अपने परिवार का विवरण दर्ज कर समाज के इस ऐतिहासिक डिजिटल जनगणना महाअभियान का अभिन्न अंग बनें।
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Link
                href="/register"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gold text-maroon-dark hover:bg-gold-light font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
              >
                <UserPlus className="w-5 h-5 text-maroon-dark" />
                <span>अपने परिवार का विवरण भरें</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/member-list"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/25 font-bold text-sm sm:text-base backdrop-blur-sm transition-all"
              >
                <Users className="w-5 h-5 text-gold" />
                <span>सदस्य सूची देखें</span>
              </Link>
            </div>

            {/* Highlights Bar */}
            <div className="pt-4 grid grid-cols-3 gap-2 sm:gap-4 border-t border-white/10 text-center lg:text-left">
              <div className="p-2 rounded-lg bg-black/20 backdrop-blur-sm">
                <p className="text-xs text-white/70">पूर्णतः सुरक्षित</p>
                <p className="text-xs sm:text-sm font-bold text-gold">OTP सत्यापित डेटा</p>
              </div>
              <div className="p-2 rounded-lg bg-black/20 backdrop-blur-sm">
                <p className="text-xs text-white/70">अखिल भारतीय</p>
                <p className="text-xs sm:text-sm font-bold text-gold">सजातीय एकता</p>
              </div>
              <div className="p-2 rounded-lg bg-black/20 backdrop-blur-sm">
                <p className="text-xs text-white/70">वैवाहिक मंच</p>
                <p className="text-xs sm:text-sm font-bold text-gold">वर-वधू खोज</p>
              </div>
            </div>
          </div>

          {/* Right Cultural Emblem Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md p-6 rounded-2xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 backdrop-blur-md shadow-2xl text-center">
              <div className="w-28 h-28 sm:w-36 sm:h-36 mx-auto rounded-full overflow-hidden shadow-xl mb-4 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="श्री पद्मावती पुरवाल दिगंबर जैन परिवार"
                  width={144}
                  height={144}
                  priority
                  className="object-contain w-full h-full rounded-full"
                />
              </div>

              <h2 className="text-lg sm:text-xl font-bold text-white font-devanagari">
                अखिल भारतीय पुरवाल महापंचायत
              </h2>
              <p className="text-xs text-gold-light mt-1 font-devanagari">
                सम्पूर्ण भारत | जनसंख्या अभियान | प्रयास हमारा - साथ आपका
              </p>

              <div className="mt-5 p-3 rounded-xl bg-black/30 border border-white/10 text-left text-xs space-y-2 text-white/90">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>केवल पंजीकृत परिवार ही विवरण देख और संपादित कर सकते हैं।</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>विवाह योग्य युवक-युवतियों के लिए प्रामाणिक मंच।</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
