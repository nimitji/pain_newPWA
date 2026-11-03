import React from "react";
import Link from "next/link";
import Image from "next/image";
import { committeeMembers } from "@/lib/data";
import { Phone, MapPin, ChevronRight, Eye } from "lucide-react";

export const metadata = {
  title: "कार्यकारिणी समिति (Committees) | श्री पद्मावती पुरवाल दिगंबर जैन परिवार",
  description: "श्री पद्मावती पुरवाल दिगंबर जैन पंचायत के सम्मानित पदाधिकारी एवं ट्रस्टी मंडल।",
};

export default function CommitteesListingPage() {
  return (
    <div className="w-full bg-warm-bg pb-16">
      {/* Header Banner */}
      <div className="bg-maroon-dark text-white py-8 border-b border-maroon-700">
        <div className="max-w-desktop mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold text-gold tracking-widest uppercase">।।श्री महावीराय नमः।।</p>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-devanagari mt-0.5">
                कार्यकारिणी समिति (Core Committee Members)
              </h1>
              <p className="text-xs text-white/80 font-devanagari mt-1">
                श्री पद्मावती पुरवाल दिगंबर जैन पंचायत (रजि.)
              </p>
            </div>

            <nav className="flex items-center gap-1.5 text-xs text-white/70">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-gold font-semibold">Committees</span>
            </nav>
          </div>
        </div>
      </div>

      <div className="max-w-desktop mx-auto px-4 pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {committeeMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-white rounded-2xl border border-warm-border overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 w-full bg-maroon-50 overflow-hidden border-b border-warm-border">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-maroon text-gold text-xs font-bold shadow">
                    {member.title}
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="text-base font-bold text-content-primary group-hover:text-maroon transition-colors font-devanagari">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-gold-dark">
                    पद: {member.title}
                  </p>

                  <div className="pt-2 border-t border-warm-border space-y-1.5 text-xs text-content-secondary">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-maroon flex-shrink-0" />
                      <span>{member.city}</span>
                    </div>
                    <div className="flex items-center gap-2 font-medium">
                      <Phone className="w-3.5 h-3.5 text-gold-dark flex-shrink-0" />
                      <span>{member.phone}</span>
                    </div>
                    {member.gotra && (
                      <div className="text-[11px] text-content-muted">
                        गोत्र: <strong className="text-content-primary">{member.gotra}</strong>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <Link
                  href={`/committee/${member.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-warm-muted hover:bg-maroon hover:text-white text-maroon font-bold text-xs transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>व्यक्तिगत विवरण देखें (View Profile)</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
