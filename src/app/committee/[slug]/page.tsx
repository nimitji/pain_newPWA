import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { committeeMembers } from "@/lib/data";
import { ChevronLeft, Phone, MapPin } from "lucide-react";

interface CommitteeDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CommitteeDetailPageProps) {
  const { slug } = await params;
  const member = committeeMembers.find((m) => m.slug === slug);
  if (!member) return { title: "Committee Member Not Found" };

  return {
    title: `${member.name} (${member.title}) | श्री पद्मावती पुरवाल दिगंबर जैन परिवार`,
    description: `${member.name}, ${member.title}, पद्मावती पुरवाल पंचायत`,
  };
}

export default async function CommitteeDetailPage({ params }: CommitteeDetailPageProps) {
  const { slug } = await params;
  const member = committeeMembers.find((m) => m.slug === slug);

  if (!member) {
    notFound();
  }

  return (
    <div className="w-full bg-warm-bg pb-16">
      {/* Top Banner */}
      <div className="bg-maroon-dark text-white py-8 border-b border-maroon-700">
        <div className="max-w-desktop mx-auto px-4">
          <Link
            href="/committees"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold hover:text-gold-light transition-colors mb-3"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>वापस कार्यकारिणी सूची (Back to Committees)</span>
          </Link>

          <p className="text-xs font-bold text-gold tracking-widest uppercase">।।श्री महावीराय नमः।।</p>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-devanagari mt-0.5">
            {member.name}
          </h1>
          <p className="text-xs text-gold-light font-semibold mt-1">
            पदनाम: {member.title} | श्री पद्मावती पुरवाल दिगंबर जैन पंचायत
          </p>
        </div>
      </div>

      <div className="max-w-desktop mx-auto px-4 pt-10">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-warm-border shadow-soft overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-10">
            {/* Left Photo & Badges */}
            <div className="md:col-span-5 flex flex-col items-center text-center space-y-4">
              <div className="relative w-48 h-56 sm:w-56 sm:h-64 rounded-2xl overflow-hidden bg-maroon-50 border-4 border-gold shadow-md">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover object-top"
                />
              </div>

              <div>
                <span className="inline-block px-4 py-1 rounded-full bg-maroon text-white font-bold text-xs shadow">
                  {member.title}
                </span>
                <p className="text-xs text-content-secondary mt-1 font-devanagari">
                  अखिल भारतीय पंचायत ट्रस्टी
                </p>
              </div>
            </div>

            {/* Right Information Details */}
            <div className="md:col-span-7 space-y-4">
              <div className="border-b border-warm-border pb-3">
                <h2 className="text-xl font-bold text-maroon font-devanagari">
                  {member.name}
                </h2>
                <p className="text-xs text-gold-dark font-semibold">
                  श्री पद्मावती पुरवाल दिगंबर जैन पंचायत (रजि.)
                </p>
              </div>

              {/* Attributes Table */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-warm-bg border border-warm-border">
                  <span className="text-content-muted block text-[11px]">Full Name</span>
                  <span className="font-bold text-content-primary font-devanagari">{member.name}</span>
                </div>

                <div className="p-3 rounded-xl bg-warm-bg border border-warm-border">
                  <span className="text-content-muted block text-[11px]">Gender</span>
                  <span className="font-bold text-content-primary">{member.gender || "Male"}</span>
                </div>

                <div className="p-3 rounded-xl bg-warm-bg border border-warm-border">
                  <span className="text-content-muted block text-[11px]">Caste & Gotra</span>
                  <span className="font-bold text-content-primary">{member.caste} ({member.gotra})</span>
                </div>

                <div className="p-3 rounded-xl bg-warm-bg border border-warm-border">
                  <span className="text-content-muted block text-[11px]">Title / Designation</span>
                  <span className="font-bold text-maroon">{member.title}</span>
                </div>

                <div className="p-3 rounded-xl bg-warm-bg border border-warm-border">
                  <span className="text-content-muted block text-[11px]">Contact Number</span>
                  <a href={`tel:${member.phone}`} className="font-bold text-maroon hover:underline flex items-center gap-1">
                    <Phone className="w-3 h-3 text-gold-dark" />
                    <span>{member.phone}</span>
                  </a>
                </div>

                <div className="p-3 rounded-xl bg-warm-bg border border-warm-border">
                  <span className="text-content-muted block text-[11px]">WhatsApp Number</span>
                  <span className="font-bold text-content-primary flex items-center gap-1">
                    <Phone className="w-3 h-3 text-status-success" />
                    <span>{member.whatsapp || member.phone}</span>
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-warm-bg border border-warm-border sm:col-span-2">
                  <span className="text-content-muted block text-[11px]">City & Permanent Address</span>
                  <span className="font-bold text-content-primary flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-maroon flex-shrink-0" />
                    <span>{member.address}, {member.city}</span>
                  </span>
                </div>
              </div>

              {/* Bio / Details */}
              {member.bio && (
                <div className="pt-2">
                  <h3 className="text-xs font-bold text-content-primary uppercase tracking-wider mb-1.5">
                    कार्यकारिणी दायित्व एवं विवरण (Detail)
                  </h3>
                  <div className="p-4 rounded-xl bg-gold-50/50 border border-gold/30 text-xs sm:text-sm text-content-primary leading-relaxed font-devanagari">
                    {member.bio}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
