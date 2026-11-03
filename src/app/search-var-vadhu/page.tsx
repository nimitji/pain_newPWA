import React from "react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { sampleMatrimonialProfiles } from "@/lib/data";
import { Filter, ShieldCheck, Briefcase, GraduationCap, Phone } from "lucide-react";

export const metadata = {
  title: "वर-वधू खोज (Search Var - Vadhu) | श्री पद्मावती पुरवाल दिगंबर जैन परिवार",
  description: "पद्मावती पुरवाल दिगंबर जैन समाज वैवाहिक निर्देशिका, विवाह योग्य युवक-युवती खोज मंच।",
};

export default async function SearchVarVadhuPage() {
  const user = await getSession();

  // Strict Protection: Redirect to /login if unauthenticated
  if (!user) {
    redirect("/login?returnUrl=/search-var-vadhu");
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
                <span>अधिकृत सदस्य क्षेत्र (Verified Member Access)</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-devanagari">
                वर-वधू खोज (Search Var - Vadhu)
              </h1>
              <p className="text-xs text-white/80 font-devanagari mt-1">
                श्री पद्मावती पुरवाल दिगंबर जैन समाज वैवाहिक संबंध मंच
              </p>
            </div>

            <div className="text-xs text-right bg-white/10 p-3 rounded-xl border border-white/15">
              <span className="text-white/70 block">लॉग इन प्रयोक्ता:</span>
              <strong className="text-gold">{user.fullname}</strong> ({user.mid || "Member"})
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-desktop mx-auto px-4 pt-10">
        {/* Filter Bar */}
        <div className="p-6 bg-white rounded-2xl border border-warm-border shadow-soft mb-8">
          <div className="flex items-center justify-between border-b border-warm-border pb-3 mb-4">
            <h2 className="text-sm font-bold text-maroon font-devanagari flex items-center gap-2">
              <Filter className="w-4 h-4 text-gold-dark" />
              <span>खोज मापदंड (Search Filters)</span>
            </h2>
            <span className="text-xs text-content-secondary">
              कुल {sampleMatrimonialProfiles.length} सत्यापित प्रोफाइल उपलब्ध
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div>
              <label className="block font-bold text-content-primary mb-1">प्रत्याशी (Looking for)</label>
              <select className="w-full p-2.5 rounded-xl border border-warm-border bg-warm-bg text-content-primary focus:bg-white">
                <option value="all">सभी (Both Groom & Bride)</option>
                <option value="male">वर (Groom / Male)</option>
                <option value="female">वधू (Bride / Female)</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-content-primary mb-1">आयु सीमा (Age Range)</label>
              <select className="w-full p-2.5 rounded-xl border border-warm-border bg-warm-bg text-content-primary focus:bg-white">
                <option value="all">सभी आयु वर्ग</option>
                <option value="21-25">21 - 25 वर्ष</option>
                <option value="26-30">26 - 30 वर्ष</option>
                <option value="31-35">31 - 35 वर्ष</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-content-primary mb-1">नगर / क्षेत्र (City)</label>
              <select className="w-full p-2.5 rounded-xl border border-warm-border bg-warm-bg text-content-primary focus:bg-white">
                <option value="all">सभी नगर</option>
                <option value="delhi">Delhi NCR</option>
                <option value="noida">Noida</option>
                <option value="jaipur">Jaipur</option>
                <option value="firozabad">Firozabad</option>
                <option value="agra">Agra</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-content-primary mb-1">शिक्षा / व्यवसाय</label>
              <select className="w-full p-2.5 rounded-xl border border-warm-border bg-warm-bg text-content-primary focus:bg-white">
                <option value="all">सभी योग्यताएं</option>
                <option value="eng">Engineering / Tech</option>
                <option value="doc">Doctor / Medical</option>
                <option value="ca">CA / Finance</option>
                <option value="mba">MBA / Management</option>
              </select>
            </div>
          </div>
        </div>

        {/* Profile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sampleMatrimonialProfiles.map((profile) => (
            <div
              key={profile.id}
              className="bg-white rounded-2xl border border-warm-border shadow-soft overflow-hidden flex flex-col justify-between"
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  {/* Photo */}
                  <div className="relative w-20 h-24 sm:w-24 sm:h-28 rounded-xl overflow-hidden bg-maroon-50 border-2 border-gold flex-shrink-0">
                    <Image
                      src={profile.photoUrl}
                      alt={profile.name}
                      fill
                      sizes="100px"
                      className="object-cover"
                    />
                  </div>

                  {/* Top info */}
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-maroon-50 text-maroon">
                        {profile.candidateId}
                      </span>
                      <span className="text-xs font-bold text-gold-dark">
                        {profile.gender === "Male" ? "वर (Groom)" : "वधू (Bride)"}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-content-primary font-devanagari">
                      {profile.name}
                    </h3>

                    <p className="text-xs text-content-secondary">
                      {profile.age} वर्ष | ऊँचाई: {profile.height}
                    </p>

                    <div className="flex items-center gap-1.5 text-xs text-maroon font-semibold">
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span className="truncate">{profile.education}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-content-secondary">
                      <Briefcase className="w-3.5 h-3.5 text-gold-dark" />
                      <span>{profile.profession} ({profile.companyOrBusiness})</span>
                    </div>
                  </div>
                </div>

                {/* Details Breakdown */}
                <div className="mt-4 pt-4 border-t border-warm-border grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-content-muted block text-[11px]">नगर (City):</span>
                    <span className="font-semibold text-content-primary">{profile.city}, {profile.state}</span>
                  </div>
                  <div>
                    <span className="text-content-muted block text-[11px]">मूल निवास (Native):</span>
                    <span className="font-semibold text-content-primary">{profile.nativePlace}</span>
                  </div>
                  <div>
                    <span className="text-content-muted block text-[11px]">पिता का नाम:</span>
                    <span className="font-semibold text-content-primary font-devanagari">{profile.fatherName}</span>
                  </div>
                  <div>
                    <span className="text-content-muted block text-[11px]">स्व-गोत्र / मातृ-गोत्र:</span>
                    <span className="font-semibold text-content-primary">{profile.gotraSelf} / {profile.gotraMother}</span>
                  </div>
                </div>

                {/* Bio text */}
                <p className="mt-3 text-xs text-content-secondary leading-relaxed bg-warm-bg p-3 rounded-xl font-devanagari border border-warm-border/60">
                  {profile.aboutCandidate}
                </p>
              </div>

              {/* Contact Footer */}
              <div className="p-4 bg-warm-muted/50 border-t border-warm-border flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 font-medium text-maroon">
                  <Phone className="w-3.5 h-3.5 text-gold-dark" />
                  <span>सम्पर्क: <strong>{profile.maskedContact}</strong> ({profile.contactPerson})</span>
                </div>
                <button
                  type="button"
                  className="px-3 py-1.5 rounded-lg bg-maroon text-white font-bold text-xs hover:bg-maroon-dark transition-colors"
                >
                  रुचि भेजें (Express Interest)
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
