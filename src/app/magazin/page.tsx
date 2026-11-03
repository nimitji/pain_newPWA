import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, Calendar, ChevronRight, Eye, Sparkles } from "lucide-react";
import { magazines } from "@/lib/data";

export const metadata = {
  title: "Magazine | श्री पद्मावती पुरवाल दिगंबर जैन परिवार",
  description: "पद्मावती पुरवाल किरण त्रैमासिक पत्रिका अभिलेखागार, डिजिटल फ्लिपबुक संस्करण।",
};

export default function MagazineArchivePage() {
  return (
    <div className="w-full bg-warm-bg pb-16">
      {/* Header Banner */}
      <div className="bg-maroon-dark text-white py-8 border-b border-maroon-700">
        <div className="max-w-desktop mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold text-gold tracking-widest uppercase">।।श्री महावीराय नमः।।</p>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-devanagari mt-0.5">
                किरण पत्रिका (Magazine Archive)
              </h1>
              <p className="text-xs text-white/80 font-devanagari mt-1">
                श्री पद्मावती पुरवाल दिगंबर जैन समाज की त्रैमासिक डिजिटल पत्रिका
              </p>
            </div>

            <nav className="flex items-center gap-1.5 text-xs text-white/70">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-gold font-semibold">Magazine</span>
            </nav>
          </div>
        </div>
      </div>

      <div className="max-w-desktop mx-auto px-4 pt-10">
        {/* Intro Banner */}
        <div className="mb-10 p-6 rounded-2xl bg-gradient-to-r from-maroon/10 via-gold/10 to-transparent border border-gold/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/20 text-maroon font-bold text-xs">
              <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
              <span>डिजिटल 3D फ्लिपबुक वाचन</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-maroon font-devanagari">
              &lsquo;पद्मावती पुरवाल किरण&rsquo; पत्रिका संग्रह
            </h2>
            <p className="text-xs sm:text-sm text-content-secondary max-w-2xl leading-relaxed">
              समाज के गौरव, महापुरुषों के विचार, धार्मिक आयोजन, वैवाहिक उपलब्धियां एवं संगठनात्मक समाचारों से परिपूर्ण आधिकारिक पत्रिका को ऑनलाइन पढ़ें।
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href={`/magazine/${magazines[0].slug}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-maroon text-white hover:bg-maroon-dark font-bold text-xs sm:text-sm shadow-md transition-all"
            >
              <BookOpen className="w-4 h-4 text-gold" />
              <span>नवीनतम अंक पढ़ें (Latest Issue)</span>
            </Link>
          </div>
        </div>

        {/* Magazine Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {magazines.map((mag) => (
            <div
              key={mag.id}
              className="group bg-white rounded-2xl border border-warm-border overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 flex flex-col"
            >
              {/* Cover Image Container */}
              <div className="relative h-64 bg-maroon-50 p-4 flex items-center justify-center overflow-hidden border-b border-warm-border">
                <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src={mag.coverImage}
                    alt={mag.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-contain drop-shadow-md"
                  />
                </div>
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-maroon/90 text-gold text-[11px] font-bold backdrop-blur-sm shadow">
                  3D FlipBook
                </div>
              </div>

              {/* Info Container */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs text-content-muted">
                    <Calendar className="w-3.5 h-3.5 text-gold-dark" />
                    <span>{mag.publishDate || "विशेष अंक"}</span>
                  </div>
                  <h3 className="text-base font-bold text-content-primary group-hover:text-maroon transition-colors font-devanagari line-clamp-2">
                    {mag.title}
                  </h3>
                  <p className="text-xs text-content-secondary line-clamp-2 leading-relaxed">
                    {mag.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-warm-border">
                  <Link
                    href={`/magazine/${mag.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-warm-muted hover:bg-maroon hover:text-white text-maroon font-bold text-xs transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    <span>पत्रिका पढ़ें (Read Online)</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
