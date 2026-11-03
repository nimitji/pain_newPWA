import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { User, Users, PlusCircle, Edit3, Shield, Heart, Download, BookOpen, LogOut } from "lucide-react";

export const metadata = {
  title: "Member Dashboard | श्री पद्मावती पुरवाल दिगंबर जैन परिवार",
  description: "पद्मावती पुरवाल सदस्य डैशबोर्ड एवं पारिवारिक प्रोफाइल प्रबंधन।",
};

export default async function DashboardPage() {
  const user = await getSession();

  if (!user) {
    redirect("/login?returnUrl=/dashboard");
  }

  // Sample family members associated with this logged-in Head of Family
  const familyMembers = [
    {
      id: "fm-1",
      name: user.fullname,
      relation: "Head of Family (परिवार प्रमुख)",
      gender: user.gender || "Male",
      age: 48,
      occupation: "Business / Self-Employed",
      bloodGroup: "B+",
      maritalStatus: "Married",
    },
    {
      id: "fm-2",
      name: "श्रीमती सुनीता जैन",
      relation: "Wife (धर्मपत्नी)",
      gender: "Female",
      age: 45,
      occupation: "Homemaker",
      bloodGroup: "O+",
      maritalStatus: "Married",
    },
    {
      id: "fm-3",
      name: "अमित जैन",
      relation: "Son (पुत्र)",
      gender: "Male",
      age: 22,
      occupation: "Student / B.Tech",
      bloodGroup: "B+",
      maritalStatus: "Unmarried",
    },
    {
      id: "fm-4",
      name: "पूजा जैन",
      relation: "Daughter (पुत्री)",
      gender: "Female",
      age: 19,
      occupation: "Student / B.Com",
      bloodGroup: "O+",
      maritalStatus: "Unmarried",
    },
  ];

  return (
    <div className="w-full bg-warm-bg pb-16">
      {/* Top Header Banner */}
      <div className="bg-maroon-dark text-white py-8 border-b border-maroon-700">
        <div className="max-w-desktop mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-bold uppercase mb-2">
                <Shield className="w-3.5 h-3.5" />
                <span>सत्यापित सदस्य पोर्टल (Member Portal)</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-devanagari">
                {user.fullname} का पारिवारिक डैशबोर्ड
              </h1>
              <p className="text-xs text-white/80 mt-1 font-mono">
                MID: <span className="text-gold font-bold">{user.mid || "PPJ0483"}</span> | पंजीकृत मोबाइल: {user.mobile}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <form action="/api/auth/logout" method="POST">
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition-all"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Logout (लॉग आउट)</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-desktop mx-auto px-4 pt-10">
        {/* Quick Nav Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <Link
            href="/search-var-vadhu"
            className="p-4 rounded-2xl bg-white border border-warm-border shadow-soft hover:shadow-card transition-all text-center group"
          >
            <div className="w-10 h-10 rounded-xl bg-gold-50 text-gold-dark mx-auto flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-content-primary font-devanagari">वर-वधू खोज</h3>
            <p className="text-[11px] text-content-secondary mt-0.5">वैवाहिक निर्देशिका</p>
          </Link>

          <Link
            href="/download"
            className="p-4 rounded-2xl bg-white border border-warm-border shadow-soft hover:shadow-card transition-all text-center group"
          >
            <div className="w-10 h-10 rounded-xl bg-maroon-50 text-maroon mx-auto flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Download className="w-5 h-5" />
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-content-primary font-devanagari">दस्तावेज डाउनलोड</h3>
            <p className="text-[11px] text-content-secondary mt-0.5">प्रपत्र एवं नियमावली</p>
          </Link>

          <Link
            href="/magazin"
            className="p-4 rounded-2xl bg-white border border-warm-border shadow-soft hover:shadow-card transition-all text-center group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-status-success mx-auto flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-content-primary font-devanagari">किरण ई-पत्रिका</h3>
            <p className="text-[11px] text-content-secondary mt-0.5">त्रैमासिक अंक</p>
          </Link>

          <Link
            href="/member-list"
            className="p-4 rounded-2xl bg-white border border-warm-border shadow-soft hover:shadow-card transition-all text-center group"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 mx-auto flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-content-primary font-devanagari">सदस्य निर्देशिका</h3>
            <p className="text-[11px] text-content-secondary mt-0.5">४९०+ परिवार प्रमुख</p>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Family Head Information Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-warm-border p-6 shadow-soft space-y-4">
            <div className="flex items-center justify-between border-b border-warm-border pb-3">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-maroon" />
                <h2 className="text-sm font-bold text-maroon font-devanagari">
                  परिवार प्रमुख विवरण (Head of Family)
                </h2>
              </div>
              <button
                type="button"
                className="text-xs text-gold-dark hover:text-maroon font-bold flex items-center gap-1"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit</span>
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-warm-bg border border-warm-border">
                <span className="text-content-muted block text-[11px]">Member ID (MID)</span>
                <span className="font-bold text-maroon font-mono text-sm">{user.mid || "PPJ0483"}</span>
              </div>

              <div className="p-3 rounded-xl bg-warm-bg border border-warm-border">
                <span className="text-content-muted block text-[11px]">Full Name (पूरा नाम)</span>
                <span className="font-bold text-content-primary text-sm font-devanagari">{user.fullname}</span>
              </div>

              <div className="p-3 rounded-xl bg-warm-bg border border-warm-border">
                <span className="text-content-muted block text-[11px]">Contact Number (मोबाइल)</span>
                <span className="font-bold text-content-primary font-mono">{user.mobile}</span>
              </div>

              <div className="p-3 rounded-xl bg-warm-bg border border-warm-border">
                <span className="text-content-muted block text-[11px]">Native Place (मूल निवास)</span>
                <span className="font-semibold text-content-primary">फ़िरोज़ाबाद / आगरा, उत्तर प्रदेश</span>
              </div>

              <div className="p-3 rounded-xl bg-warm-bg border border-warm-border">
                <span className="text-content-muted block text-[11px]">Current Address (वर्तमान पता)</span>
                <span className="font-semibold text-content-primary">95/3 Gali no. 3, Bus Stand Agra Gate, Firozabad</span>
              </div>

              <div className="p-3 rounded-xl bg-warm-bg border border-warm-border">
                <span className="text-content-muted block text-[11px]">Gotra (गोत्र)</span>
                <span className="font-semibold text-content-primary">पद्मावती पुरवाल (कश्यप)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Family Members Management Table */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-warm-border p-6 shadow-soft space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-warm-border pb-3">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-maroon" />
                <h2 className="text-sm font-bold text-maroon font-devanagari">
                  परिवार के सदस्य ({familyMembers.length})
                </h2>
              </div>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gold text-maroon-dark hover:bg-gold-light text-xs font-bold shadow-sm transition-all"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>नया सदस्य जोड़ें (Add Member)</span>
              </button>
            </div>

            {/* Members List */}
            <div className="space-y-3">
              {familyMembers.map((member) => (
                <div
                  key={member.id}
                  className="p-4 rounded-xl border border-warm-border bg-warm-bg hover:bg-warm-muted/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-content-primary font-devanagari">
                        {member.name}
                      </h4>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-maroon-50 text-maroon">
                        {member.relation}
                      </span>
                    </div>

                    <div className="text-xs text-content-secondary flex flex-wrap items-center gap-3">
                      <span>आयु: {member.age} वर्ष</span>
                      <span>•</span>
                      <span>लिंग: {member.gender}</span>
                      <span>•</span>
                      <span>रक्त समूह: {member.bloodGroup}</span>
                      <span>•</span>
                      <span>व्यवसाय: {member.occupation}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="px-2.5 py-1 rounded-lg border border-warm-border text-xs text-content-secondary hover:text-maroon hover:border-maroon transition-colors"
                    >
                      संपादित करें
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 text-xs text-content-muted leading-relaxed font-devanagari">
              * परिवार के किसी भी सदस्य का विवरण जोड़ने या संशोधित करने पर केंद्रीय डिजिटल जनगणना रजिस्टर में स्वतः अद्यतन हो जाता है।
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
