import React from "react";
import Link from "next/link";
import { UserPlus, CheckCircle, Shield, ArrowRight } from "lucide-react";

export default function FamilyCtaSection() {
  return (
    <section className="py-14 sm:py-18 bg-gradient-to-r from-maroon-dark via-maroon to-maroon-800 text-white relative overflow-hidden">
      <div className="max-w-desktop mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block px-3.5 py-1 rounded-full bg-gold/20 border border-gold/40 text-gold text-xs font-bold uppercase tracking-wider">
            जनगणना महाभियान में सहभागिता
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-devanagari leading-snug">
            क्या आपका परिवार पद्मावती पुरवाल जनगणना में पंजीकृत है?
          </h2>

          <p className="text-sm sm:text-base text-white/90 font-devanagari max-w-2xl mx-auto leading-relaxed">
            यदि नहीं, तो आज ही मात्र २ मिनट में अपने परिवार का निःशुल्क पंजीकरण कराएं। अपने समाज से जुड़े रहें, अधिकारों की रक्षा करें और भावी पीढ़ी को एक सुदृढ़ सामाजिक पहचान दें।
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-gold-light font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-gold" />
              १००% निःशुल्क पंजीकरण
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-gold" />
              मोबाइल OTP सत्यापन
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-gold" />
              डेटा पूर्णतः सुरक्षित एवं गोपनीय
            </span>
          </div>

          <div className="pt-2">
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-gold text-maroon-dark hover:bg-gold-light font-bold text-base shadow-xl transform hover:-translate-y-0.5 transition-all"
            >
              <UserPlus className="w-5 h-5 text-maroon-dark" />
              <span>अपने परिवार का पंजीकरण करें (Register Now)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
