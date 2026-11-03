import React from "react";
import { Users, Home, MapPin, CheckCircle2 } from "lucide-react";
import { siteStats } from "@/lib/data";

export default function StatsSection() {
  const statCards = [
    {
      label: "कुल पंजीकृत परिवार (Registered Families)",
      value: siteStats.totalFamilies.toLocaleString("en-IN"),
      sub: "सत्यापित परिवार प्रमुख",
      icon: Home,
      color: "border-maroon text-maroon",
      bg: "bg-maroon-50",
    },
    {
      label: "कुल पंजीकृत सदस्य (Registered Members)",
      value: siteStats.totalMembers.toLocaleString("en-IN"),
      sub: "जनसंख्या अभियान डेटाबेस",
      icon: Users,
      color: "border-gold text-gold-dark",
      bg: "bg-gold-50",
    },
    {
      label: "सक्रिय नगर एवं क्षेत्र (Active Cities)",
      value: `${siteStats.activeCities}+`,
      sub: "सम्पूर्ण भारत एवं विदेश",
      icon: MapPin,
      color: "border-maroon text-maroon",
      bg: "bg-maroon-50",
    },
    {
      label: "सत्यापन एवं गोपनीयता (Privacy & OTP)",
      value: "100%",
      sub: "मोबाइल OTP द्वारा सुरक्षित",
      icon: CheckCircle2,
      color: "border-status-success text-status-success",
      bg: "bg-emerald-50",
    },
  ];

  return (
    <section className="py-10 bg-warm-bg border-b border-warm-border">
      <div className="max-w-desktop mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {statCards.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-5 rounded-2xl bg-white border border-warm-border shadow-soft hover:shadow-card transition-all transform hover:-translate-y-1 text-center"
              >
                <div className={`w-12 h-12 mx-auto rounded-xl ${item.bg} flex items-center justify-center mb-3`}>
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-content-primary tracking-tight">
                  {item.value}
                </div>
                <p className="text-xs sm:text-sm font-bold text-maroon mt-1 font-devanagari">
                  {item.label}
                </p>
                <p className="text-[11px] text-content-secondary mt-0.5">
                  {item.sub}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
