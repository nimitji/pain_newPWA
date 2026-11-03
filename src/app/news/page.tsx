import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ChevronRight, ArrowRight } from "lucide-react";
import { newsArticles } from "@/lib/data";

export const metadata = {
  title: "News and Media | श्री पद्मावती पुरवाल दिगंबर जैन परिवार",
  description: "पद्मावती पुरवाल दिगंबर जैन परिवार के नवीनतम समाचार, बैठकें, सामाजिक एवं धार्मिक गतिविधियां।",
};

export default function NewsListingPage() {
  return (
    <div className="w-full bg-warm-bg pb-16">
      {/* Header Banner */}
      <div className="bg-maroon-dark text-white py-8 border-b border-maroon-700">
        <div className="max-w-desktop mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold text-gold tracking-widest uppercase">।।श्री महावीराय नमः।।</p>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-devanagari mt-0.5">
                समाचार एवं गतिविधियां (News & Media)
              </h1>
              <p className="text-xs text-white/80 font-devanagari mt-1">
                पद्मावती पुरवाल दिगंबर जैन समाज की आधिकारिक घोषणाएं एवं समाचार
              </p>
            </div>

            <nav className="flex items-center gap-1.5 text-xs text-white/70">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-gold font-semibold">News and Media</span>
            </nav>
          </div>
        </div>
      </div>

      <div className="max-w-desktop mx-auto px-4 pt-10">
        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsArticles.map((article) => {
            const hasCustomBanner = article.banner && !article.banner.includes("no_image");

            return (
              <article
                key={article.id}
                className="group bg-white rounded-2xl border border-warm-border overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-content-secondary">
                    <Calendar className="w-3.5 h-3.5 text-gold-dark" />
                    <span>{article.displayDate || article.publishDate}</span>
                  </div>

                  <h2 className="text-lg font-bold text-content-primary group-hover:text-maroon transition-colors font-devanagari leading-snug">
                    <Link href={`/news/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-content-secondary leading-relaxed font-devanagari line-clamp-3">
                    {article.summary || article.content.slice(0, 150)}
                  </p>
                </div>

                {hasCustomBanner && (
                  <div className="relative h-48 w-full bg-maroon-50 overflow-hidden border-y border-warm-border">
                    <Image
                      src={article.banner}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}

                <div className="p-6 pt-3 border-t border-warm-border/60">
                  <Link
                    href={`/news/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-maroon hover:text-gold transition-colors"
                  >
                    <span>Continue reading (विस्तार से पढ़ें)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
