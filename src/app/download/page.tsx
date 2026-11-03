import React from "react";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { downloadItems } from "@/lib/data";
import { Download, ShieldCheck, Calendar, HardDrive, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "प्रपत्र डाउनलोड (Downloads) | श्री पद्मावती पुरवाल दिगंबर जैन परिवार",
  description: "पद्मावती पुरवाल परिवार जनगणना प्रपत्र, पंचायत नियमावली, वैवाहिक प्रपत्र एवं आधिकारिक दस्तावेज।",
};

export default async function DownloadPage() {
  const user = await getSession();

  // Strict Protection: Redirect to /login if unauthenticated
  if (!user) {
    redirect("/login?returnUrl=/download");
  }

  return (
    <div className="w-full bg-warm-bg pb-16">
      {/* Header Banner */}
      <div className="bg-maroon-dark text-white py-8 border-b border-maroon-700">
        <div className="max-w-desktop mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-bold uppercase mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>अधिकृत सदस्य क्षेत्र (Verified Downloads Area)</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-devanagari">
                प्रपत्र एवं दस्तावेज डाउनलोड (Downloads)
              </h1>
              <p className="text-xs text-white/80 font-devanagari mt-1">
                श्री पद्मावती पुरवाल दिगंबर जैन पंचायत के आधिकारिक प्रपत्र एवं प्रकाशन
              </p>
            </div>

            <div className="text-xs text-right bg-white/10 p-3 rounded-xl border border-white/15">
              <span className="text-white/70 block">लॉग इन सदस्य:</span>
              <strong className="text-gold">{user.fullname}</strong> ({user.mid || "Member"})
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-desktop mx-auto px-4 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {downloadItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-warm-border p-6 shadow-soft hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-maroon-50 text-maroon text-[11px] font-bold">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-2 text-xs text-content-secondary">
                    <HardDrive className="w-3.5 h-3.5 text-gold-dark" />
                    <span>{item.fileSize}</span>
                    <span>•</span>
                    <span className="font-bold text-maroon">{item.format}</span>
                  </div>
                </div>

                <h2 className="text-base font-bold text-content-primary font-devanagari leading-snug">
                  {item.title}
                </h2>

                <p className="text-xs sm:text-sm text-content-secondary leading-relaxed font-devanagari">
                  {item.description}
                </p>

                <div className="text-[11px] text-content-muted flex items-center gap-1.5 pt-1">
                  <Calendar className="w-3 h-3 text-gold-dark" />
                  <span>अंतिम संशोधन: {item.updatedAt}</span>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-warm-border flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-status-success font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>प्रमाणीकृत प्रति</span>
                </div>

                <a
                  href={`#download-${item.id}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-maroon text-white hover:bg-maroon-dark font-bold text-xs shadow-sm transition-all"
                >
                  <Download className="w-4 h-4 text-gold" />
                  <span>दस्तावेज डाउनलोड करें</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
