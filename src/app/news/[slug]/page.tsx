import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { newsArticles } from "@/lib/data";
import { ChevronLeft, Calendar } from "lucide-react";

interface NewsDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);
  if (!article) return { title: "News Not Found" };

  return {
    title: `${article.title} | श्री पद्मावती पुरवाल दिगंबर जैन परिवार`,
    description: article.summary,
  };
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const hasCustomBanner = article.banner && !article.banner.includes("no_image");

  return (
    <div className="w-full bg-warm-bg pb-16">
      {/* Top Banner */}
      <div className="bg-maroon-dark text-white py-8 border-b border-maroon-700">
        <div className="max-w-desktop mx-auto px-4">
          <Link
            href="/news"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold hover:text-gold-light transition-colors mb-3"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>वापस समाचार सूची (Back to News)</span>
          </Link>

          <h1 className="text-xl sm:text-3xl font-extrabold text-white font-devanagari max-w-4xl leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-2 text-xs text-white/80 mt-3">
            <Calendar className="w-3.5 h-3.5 text-gold" />
            <span>प्रकाशित तिथि: <strong>{article.displayDate || article.publishDate}</strong></span>
          </div>
        </div>
      </div>

      {/* Main Content Article */}
      <div className="max-w-desktop mx-auto px-4 pt-10">
        <div className="max-w-3xl mx-auto bg-white p-6 sm:p-10 rounded-2xl border border-warm-border shadow-soft space-y-6">
          {hasCustomBanner && (
            <div className="relative h-72 sm:h-96 w-full rounded-xl overflow-hidden bg-maroon-50 border border-warm-border">
              <Image
                src={article.banner}
                alt={article.title}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-contain"
              />
            </div>
          )}

          <div className="prose prose-sm sm:prose-base max-w-none text-content-primary font-devanagari leading-relaxed whitespace-pre-line text-justify">
            {article.content}
          </div>

          <div className="pt-6 border-t border-warm-border flex flex-col sm:flex-row items-center justify-between text-xs text-content-secondary gap-3">
            <span>स्रोत: अखिल भारतीय श्री पद्मावती पुरवाल दिगंबर जैन पंचायत (रजि.)</span>
            <Link
              href="/news"
              className="inline-flex items-center gap-1 font-bold text-maroon hover:text-gold transition-colors"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>अन्य सभी समाचार देखें</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
