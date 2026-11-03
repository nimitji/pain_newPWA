import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, ArrowRight } from "lucide-react";
import { committeeMembers } from "@/lib/data";

export default function CommitteeSection() {
  // First 5 core committee members as displayed on original homepage
  const coreMembers = committeeMembers.slice(0, 5);

  return (
    <section className="py-14 sm:py-20 bg-warm-bg border-b border-warm-border">
      <div className="max-w-desktop mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center space-y-2 mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-gold-50 border border-gold-200 text-gold-dark text-xs font-bold uppercase tracking-wider">
            कार्यकारिणी
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-content-primary font-devanagari">
            वर्तमान मुख्य समिति (Core Committee)
          </h2>
          <p className="text-xs sm:text-sm text-content-secondary max-w-lg mx-auto font-devanagari">
            पद्मावती पुरवाल दिगंबर जैन पंचायत के समर्पित ट्रस्टी एवं पदाधिकारी
          </p>
          <div className="w-16 h-1 bg-maroon mx-auto rounded-full mt-2" />
        </div>

        {/* Committee Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {coreMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-white rounded-2xl border border-warm-border overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 flex flex-col text-center"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full bg-maroon-50 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 20vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-maroon text-white text-[11px] font-bold shadow">
                  {member.title}
                </div>
              </div>

              {/* Info Container */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="text-sm font-bold text-content-primary group-hover:text-maroon transition-colors line-clamp-1 font-devanagari">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-gold-dark mt-0.5">
                    {member.title}
                  </p>
                </div>

                <div className="pt-2 border-t border-warm-border space-y-1 text-xs text-content-secondary">
                  <div className="flex items-center justify-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-maroon flex-shrink-0" />
                    <span className="truncate">{member.city}</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5 font-medium">
                    <Phone className="w-3.5 h-3.5 text-gold-dark flex-shrink-0" />
                    <span>{member.phone}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/committee/${member.slug}`}
                    className="inline-flex items-center justify-center w-full py-1.5 px-3 rounded-lg bg-warm-muted hover:bg-maroon hover:text-white text-maroon text-xs font-bold transition-colors"
                  >
                    <span>View Detail</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Action */}
        <div className="mt-10 text-center">
          <Link
            href="/committees"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-maroon text-white hover:bg-maroon-dark font-bold text-sm shadow-md transition-all transform hover:-translate-y-0.5"
          >
            <span>सभी समिति सदस्य देखें (View All Committee Members)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
