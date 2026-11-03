import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { siteStats, newsArticles, magazines } from "@/lib/data";
import { 
  ShieldAlert, 
  Users, 
  BookOpen, 
  Newspaper, 
  FileText, 
  CheckCircle2, 
  Clock, 
  Plus, 
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

export const metadata = {
  title: "Admin Panel | श्री पद्मावती पुरवाल दिगंबर जैन परिवार",
  description: "पंचायत प्रशासनिक नियंत्रण कक्ष, सदस्य सत्यापन एवं सामग्री प्रबंधन।",
};

export default async function AdminDashboardPage() {
  const user = await getSession();

  if (!user) {
    redirect("/login?returnUrl=/admin");
  }

  // Role-Based Access Control: Only ADMIN or COMMITTEE members allowed
  if (user.role !== "ADMIN") {
    return (
      <div className="w-full min-h-[70vh] bg-warm-bg flex items-center justify-center py-16 px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-warm-border shadow-card text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-red-50 text-status-error mx-auto flex items-center justify-center">
            <ShieldAlert className="w-8 h-8" />
          </div>
          <h1 className="text-xl font-bold text-content-primary font-devanagari">
            अनधिकृत प्रवेश (403 Access Denied)
          </h1>
          <p className="text-xs text-content-secondary leading-relaxed font-devanagari">
            यह अनुभाग केवल पंचायत के अधिकृत ट्रस्टी एवं प्रबंध समिति प्रशासकों हेतु आरक्षित है। आपके खाते (<strong className="text-maroon">{user.mobile}</strong>) के पास व्यवस्थापक विशेषाधिकार नहीं हैं।
          </p>
          <div className="pt-2">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-maroon text-white font-bold text-xs"
            >
              <span>सदस्य डैशबोर्ड पर लौटें</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-warm-bg pb-16">
      {/* Top Banner */}
      <div className="bg-maroon-dark text-white py-8 border-b border-maroon-700">
        <div className="max-w-desktop mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-bold uppercase mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>व्यवस्थापक नियंत्रण कक्ष (Administrative Control Room)</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-devanagari">
                पंचायत प्रबंधन एवं जनगणना प्रशासन
              </h1>
              <p className="text-xs text-white/80 mt-1">
                लॉग इन प्रशासक: <strong className="text-gold">{user.fullname}</strong> | भूमिका: <span className="bg-white/10 px-2 py-0.5 rounded text-[11px] font-mono">ADMIN / TRUSTEE</span>
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Link
                href="/dashboard"
                className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-all"
              >
                सदस्य दृश्य
              </Link>
              <form action="/api/auth/logout" method="POST">
                <button
                  type="submit"
                  className="px-3.5 py-2 rounded-xl bg-maroon hover:bg-black/40 text-white text-xs font-semibold border border-white/10"
                >
                  लॉग आउट
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-desktop mx-auto px-4 pt-10">
        {/* KPI Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <div className="p-4 rounded-2xl bg-white border border-warm-border shadow-soft">
            <span className="text-[11px] font-bold text-content-secondary uppercase">कुल परिवार</span>
            <div className="text-2xl font-black text-maroon mt-1">{siteStats.totalFamilies}</div>
            <span className="text-[10px] text-status-success font-medium flex items-center gap-1 mt-0.5">
              <CheckCircle2 className="w-3 h-3" />
              100% सत्यापित
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-warm-border shadow-soft">
            <span className="text-[11px] font-bold text-content-secondary uppercase">कुल सदस्य</span>
            <div className="text-2xl font-black text-gold-dark mt-1">{siteStats.totalMembers}</div>
            <span className="text-[10px] text-content-secondary">जनगणना डेटाबेस</span>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-warm-border shadow-soft">
            <span className="text-[11px] font-bold text-content-secondary uppercase">प्रकाशित पत्रिकाएं</span>
            <div className="text-2xl font-black text-content-primary mt-1">{magazines.length}</div>
            <span className="text-[10px] text-content-secondary">FlipHTML5 डिजिटल अंक</span>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-warm-border shadow-soft">
            <span className="text-[11px] font-bold text-content-secondary uppercase">समाचार लेख</span>
            <div className="text-2xl font-black text-content-primary mt-1">{newsArticles.length}</div>
            <span className="text-[10px] text-content-secondary">सक्रिय बुलेटिन</span>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-warm-border shadow-soft col-span-2 lg:col-span-1">
            <span className="text-[11px] font-bold text-content-secondary uppercase">प्रतीक्षारत अनुमोदन</span>
            <div className="text-2xl font-black text-status-warning mt-1">3</div>
            <span className="text-[10px] text-status-warning font-medium flex items-center gap-1 mt-0.5">
              <Clock className="w-3 h-3" />
              सत्यापन आवश्यक
            </span>
          </div>
        </div>

        {/* Admin Modules Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Module Content */}
          <div className="lg:col-span-8 space-y-6">
            {/* 1. Pending Family Approvals Table */}
            <div className="bg-white rounded-2xl border border-warm-border p-6 shadow-soft space-y-4">
              <div className="flex items-center justify-between border-b border-warm-border pb-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-status-warning" />
                  <h2 className="text-sm font-bold text-content-primary font-devanagari">
                    नवीन परिवार पंजीकरण अनुमोदन (Pending Approvals)
                  </h2>
                </div>
                <span className="text-xs text-content-muted">३ नए आवेदन</span>
              </div>

              <div className="divide-y divide-warm-border text-xs">
                <div className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <strong className="font-devanagari text-content-primary text-sm">प्रवीण कुमार जैन</strong>
                      <span className="px-2 py-0.5 rounded bg-gold-50 text-gold-dark font-mono text-[11px] font-bold">PPJ0504 (New)</span>
                    </div>
                    <p className="text-content-secondary">पिता: श्री रमेश चंद्र जैन | नगर: आगरा | सदस्य: 4</p>
                    <p className="text-content-muted text-[11px]">मोबाइल: 9811223344 (OTP सत्यापित)</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 rounded-lg bg-status-success text-white font-bold hover:bg-emerald-700 transition-colors">
                      स्वीकार करें (Approve)
                    </button>
                    <button className="px-3 py-1.5 rounded-lg border border-warm-border text-content-secondary hover:text-red-600 transition-colors">
                      अस्वीकार
                    </button>
                  </div>
                </div>

                <div className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <strong className="font-devanagari text-content-primary text-sm">विकास जैन (एडवोकेट)</strong>
                      <span className="px-2 py-0.5 rounded bg-gold-50 text-gold-dark font-mono text-[11px] font-bold">PPJ0505 (New)</span>
                    </div>
                    <p className="text-content-secondary">पिता: स्व. श्री शांति स्वरूप जैन | नगर: दिल्ली | सदस्य: 3</p>
                    <p className="text-content-muted text-[11px]">मोबाइल: 9899112233 (OTP सत्यापित)</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 rounded-lg bg-status-success text-white font-bold hover:bg-emerald-700 transition-colors">
                      स्वीकार करें (Approve)
                    </button>
                    <button className="px-3 py-1.5 rounded-lg border border-warm-border text-content-secondary hover:text-red-600 transition-colors">
                      अस्वीकार
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Recent Active News & Announcements */}
            <div className="bg-white rounded-2xl border border-warm-border p-6 shadow-soft space-y-4">
              <div className="flex items-center justify-between border-b border-warm-border pb-3">
                <div className="flex items-center gap-2">
                  <Newspaper className="w-4 h-4 text-maroon" />
                  <h2 className="text-sm font-bold text-content-primary font-devanagari">
                    समाचार एवं परिपत्र प्रबंधन (News & Circulars)
                  </h2>
                </div>
                <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-maroon text-white text-xs font-bold hover:bg-maroon-dark transition-colors">
                  <Plus className="w-3.5 h-3.5" />
                  <span>नया समाचार जोड़ें</span>
                </button>
              </div>

              <div className="space-y-2.5 text-xs">
                {newsArticles.slice(0, 3).map((article) => (
                  <div
                    key={article.id}
                    className="p-3 rounded-xl border border-warm-border bg-warm-bg flex items-center justify-between gap-3"
                  >
                    <div className="space-y-0.5">
                      <h4 className="font-bold text-content-primary font-devanagari line-clamp-1">
                        {article.title}
                      </h4>
                      <p className="text-content-muted text-[11px]">प्रकाशित: {article.displayDate}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-status-success text-[10px] font-bold">
                        Published
                      </span>
                      <Link
                        href={`/news/${article.slug}`}
                        className="text-maroon hover:underline font-semibold"
                      >
                        देखें &rarr;
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Admin Quick Controls */}
          <div className="lg:col-span-4 space-y-5">
            {/* Quick Actions Card */}
            <div className="p-6 bg-white rounded-2xl border border-warm-border shadow-soft space-y-3">
              <h3 className="text-xs font-bold text-content-primary uppercase tracking-wider mb-2">
                प्रशासनिक कार्य (Admin Quick Actions)
              </h3>

              <Link
                href="/member-list"
                className="w-full flex items-center justify-between p-3 rounded-xl border border-warm-border hover:bg-maroon-50 text-xs font-semibold text-content-primary hover:text-maroon transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Users className="w-4 h-4 text-maroon" />
                  <span>सदस्य निर्देशिका खोजें</span>
                </div>
                <ChevronRight className="w-4 h-4 text-content-muted" />
              </Link>

              <Link
                href="/magazin"
                className="w-full flex items-center justify-between p-3 rounded-xl border border-warm-border hover:bg-maroon-50 text-xs font-semibold text-content-primary hover:text-maroon transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <BookOpen className="w-4 h-4 text-gold-dark" />
                  <span>किरण पत्रिका अंक प्रबंधित करें</span>
                </div>
                <ChevronRight className="w-4 h-4 text-content-muted" />
              </Link>

              <Link
                href="/committees"
                className="w-full flex items-center justify-between p-3 rounded-xl border border-warm-border hover:bg-maroon-50 text-xs font-semibold text-content-primary hover:text-maroon transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-maroon" />
                  <span>कार्यकारिणी सूची अपडेट करें</span>
                </div>
                <ChevronRight className="w-4 h-4 text-content-muted" />
              </Link>

              <Link
                href="/download"
                className="w-full flex items-center justify-between p-3 rounded-xl border border-warm-border hover:bg-maroon-50 text-xs font-semibold text-content-primary hover:text-maroon transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-blue-600" />
                  <span>प्रपत्र एवं दस्तावेज अपलोड</span>
                </div>
                <ChevronRight className="w-4 h-4 text-content-muted" />
              </Link>
            </div>

            {/* System Status Card */}
            <div className="p-5 bg-gradient-to-br from-maroon-dark to-maroon text-white rounded-2xl shadow-card space-y-2 text-xs">
              <h4 className="font-bold text-gold uppercase tracking-wider text-[11px]">
                प्रणाली स्थिति (System Health)
              </h4>
              <div className="space-y-1.5 text-white/90 pt-1">
                <div className="flex items-center justify-between">
                  <span>डेटाबेस स्थिति:</span>
                  <span className="text-emerald-400 font-bold">100% Active</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>सत्र सुरक्षा (Auth):</span>
                  <span className="text-emerald-400 font-bold">Encrypted Session</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>FlipHTML5 रीडर:</span>
                  <span className="text-emerald-400 font-bold">Connected</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>सत्यापित सदस्य:</span>
                  <span className="text-gold font-bold">490+ Records</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
