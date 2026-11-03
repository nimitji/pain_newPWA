import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-maroon-dark text-white border-t-4 border-gold">
      {/* Upper Footer */}
      <div className="max-w-desktop mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Col 1: Community Brand & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="PPJain Logo"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full rounded-full"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-gold tracking-widest">।।श्री महावीराय नमः।।</p>
                <h3 className="text-base font-bold text-white font-devanagari">श्री पद्मावती पुरवाल दिगंबर जैन परिवार</h3>
              </div>
            </div>
            <p className="text-xs text-white/80 leading-relaxed font-devanagari">
              सम्पूर्ण भारत एवं विश्व भर में निवासरत पद्मावती पुरवाल दिगंबर जैन परिवारों को एक सूत्र में पिरोने, 
              सामाजिक एकता, सांस्कृतिक संस्कार और डिजिटल जनगणना का एक समर्पित अभियान।
            </p>
            <div className="pt-1 text-xs text-gold-light font-semibold">
              प्रयास हमारा — साथ आपका
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-gold uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              महत्वपूर्ण कड़ियां (Quick Links)
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="text-white/80 hover:text-gold transition-colors flex items-center gap-1.5">
                  <span className="text-gold">›</span> मुख्य पृष्ठ (Home)
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-white/80 hover:text-gold transition-colors flex items-center gap-1.5">
                  <span className="text-gold">›</span> हमारे बारे में (About Us)
                </Link>
              </li>
              <li>
                <Link href="/member-list" className="text-white/80 hover:text-gold transition-colors flex items-center gap-1.5">
                  <span className="text-gold">›</span> सदस्य निर्देशिका (Members List)
                </Link>
              </li>
              <li>
                <Link href="/magazin" className="text-white/80 hover:text-gold transition-colors flex items-center gap-1.5">
                  <span className="text-gold">›</span> किरण पत्रिका (Magazine)
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-white/80 hover:text-gold transition-colors flex items-center gap-1.5">
                  <span className="text-gold">›</span> समाचार एवं गतिविधियां (News)
                </Link>
              </li>
              <li>
                <Link href="/committees" className="text-white/80 hover:text-gold transition-colors flex items-center gap-1.5">
                  <span className="text-gold">›</span> कार्यकारिणी समिति (Committees)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Member Services */}
          <div>
            <h4 className="text-sm font-bold text-gold uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              सदस्य सेवाएं (Services)
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/register" className="text-white/80 hover:text-gold transition-colors flex items-center gap-1.5">
                  <span className="text-gold">›</span> परिवार पंजीकरण (Register Family)
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-white/80 hover:text-gold transition-colors flex items-center gap-1.5">
                  <span className="text-gold">›</span> सदस्य लॉगिन (Member Login)
                </Link>
              </li>
              <li>
                <Link href="/search-var-vadhu" className="text-white/80 hover:text-gold transition-colors flex items-center gap-1.5">
                  <span className="text-gold">›</span> वर-वधू खोज (Matrimonial Search)
                </Link>
              </li>
              <li>
                <Link href="/download" className="text-white/80 hover:text-gold transition-colors flex items-center gap-1.5">
                  <span className="text-gold">›</span> प्रपत्र डाउनलोड (Forms Download)
                </Link>
              </li>
              <li>
                <Link href="/forgot-password" className="text-white/80 hover:text-gold transition-colors flex items-center gap-1.5">
                  <span className="text-gold">›</span> पासवर्ड भूल गए? (Reset Password)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div>
            <h4 className="text-sm font-bold text-gold uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              सम्पर्क सूत्र (Contact Us)
            </h4>
            <div className="space-y-3 text-xs text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>अखिल भारतीय श्री पद्मावती पुरवाल दिगंबर जैन पंचायत (रजि.), दिल्ली / फ़िरोज़ाबाद, भारत</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="mailto:info@ppjain.in" className="hover:text-gold underline">info@ppjain.in</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span>+91 9837044877 / +91 9312237612</span>
              </div>
              <div className="pt-2 text-[11px] text-white/60">
                सुरक्षित एवं गोपनीयता-युक्त सामुदायिक पोर्टल
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar & Legal Attribution */}
      <div className="border-t border-white/10 bg-black/30 py-4 text-xs text-white/70">
        <div className="max-w-desktop mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>
            &copy; {currentYear} <strong>श्री पद्मावती पुरवाल दिगंबर जैन परिवार</strong>. All Rights Reserved.
          </p>
          <p className="text-[11px] text-gold-light/90">
            This website owned, created and maintained by <strong>Biswaas Enterprises</strong>.
          </p>
        </div>
      </div>
    </footer>
  );
}
