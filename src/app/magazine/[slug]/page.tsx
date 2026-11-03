import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { magazines } from "@/lib/data";
import { ChevronLeft, Calendar, ExternalLink, Sparkles } from "lucide-react";

interface MagazineDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: MagazineDetailPageProps) {
  const { slug } = await params;
  const mag = magazines.find((m) => m.slug === slug);
  if (!mag) return { title: "Magazine Not Found" };

  return {
    title: `${mag.title} | श्री पद्मावती पुरवाल दिगंबर जैन परिवार`,
    description: mag.description,
  };
}

export default async function MagazineDetailPage({ params }: MagazineDetailPageProps) {
  const { slug } = await params;
  const mag = magazines.find((m) => m.slug === slug);

  if (!mag) {
    notFound();
  }

  return (
    <div className="w-full bg-warm-bg pb-16 min-h-screen flex flex-col">
      {/* Top Header Bar */}
      <div className="bg-maroon-dark text-white py-6 border-b border-maroon-700">
        <div className="max-w-desktop mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <Link
                href="/magazin"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold hover:text-gold-light transition-colors mb-2"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>वापस पत्रिका संग्रह (Back to Magazines)</span>
              </Link>
              <h1 className="text-xl sm:text-2xl font-black text-white font-devanagari">
                {mag.title}
              </h1>
              <div className="flex items-center gap-3 text-xs text-white/80 mt-1">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-gold" />
                  {mag.publishDate || "विशेष संस्करण"}
                </span>
                <span>•</span>
                <span className="text-gold">FlipHTML5 Digital Reader</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <a
                href={mag.embedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gold text-maroon-dark hover:bg-gold-light text-xs font-bold shadow-md transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>पूर्ण स्क्रीन में खोलें (Full Screen)</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded 3D FlipBook Viewer Container */}
      <div className="max-w-desktop mx-auto px-4 py-6 w-full flex-1 flex flex-col">
        <div className="w-full bg-white rounded-2xl border-2 border-gold/40 shadow-card overflow-hidden flex flex-col" style={{ height: "80vh", minHeight: "600px" }}>
          {/* Viewer Top Status Bar */}
          <div className="bg-maroon px-4 py-2 text-white text-xs flex items-center justify-between border-b border-maroon-700">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span className="font-semibold font-devanagari">पद्मावती पुरवाल डिजिटल किरण ई-बुक रीडर</span>
            </div>
            <span className="text-[11px] text-white/70">
              पृष्ठ पलटने हेतु किनारों पर क्लिक करें अथवा स्वाइप करें
            </span>
          </div>

          {/* Iframe */}
          <div className="relative w-full flex-1 bg-warm-muted">
            <iframe
              src={mag.embedUrl}
              title={mag.title}
              className="absolute inset-0 w-full h-full border-0"
              allow="fullscreen"
              allowFullScreen
            />
          </div>
        </div>

        {/* Magazine Description & Details */}
        <div className="mt-8 p-6 bg-white rounded-2xl border border-warm-border shadow-soft">
          <h2 className="text-base font-bold text-maroon font-devanagari mb-2">
            इस अंक के बारे में:
          </h2>
          <p className="text-sm text-content-primary leading-relaxed font-devanagari">
            {mag.description}
          </p>
          <div className="mt-4 pt-4 border-t border-warm-border flex flex-col sm:flex-row items-center justify-between text-xs text-content-secondary gap-2">
            <span>प्रकाशक: श्री पद्मावती पुरवाल दिगंबर जैन पंचायत (रजि.), दिल्ली / फ़िरोज़ाबाद</span>
            <Link href="/magazin" className="text-maroon font-bold hover:underline">
              अन्य सभी अंक देखें &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
