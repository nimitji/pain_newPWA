import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, UserPlus, Lock } from "lucide-react";

export const metadata = {
  title: "About Us | श्री पद्मावती पुरवाल दिगंबर जैन परिवार",
  description: "पद्मावती पुरवाल दिगंबर जैन परिवार का इतिहास, उद्देश्य, डिजिटल जनगणना अभियान एवं सामाजिक एकता का संकल्प।",
};

export default function AboutUsPage() {
  return (
    <div className="w-full bg-warm-bg pb-16">
      {/* Breadcrumb Header */}
      <div className="bg-maroon-dark text-white py-8 border-b border-maroon-700">
        <div className="max-w-desktop mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <p className="text-xs font-bold text-gold tracking-widest uppercase">।।श्री महावीराय नमः।।</p>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-devanagari mt-0.5">
                हमारे बारे में (About Us)
              </h1>
            </div>
            <nav className="flex items-center gap-1.5 text-xs text-white/70">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-gold font-semibold">About Us</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-desktop mx-auto px-4 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Article Body */}
          <div className="lg:col-span-8 space-y-6 bg-white p-6 sm:p-10 rounded-2xl border border-warm-border shadow-soft">
            <div className="border-b border-warm-border pb-4">
              <h2 className="text-xl sm:text-2xl font-black text-maroon font-devanagari">
                श्री पद्मावती पुरवाल दिगंबर जैन परिवार,
              </h2>
              <p className="text-base font-bold text-gold-dark mt-1 font-devanagari">
                सादर जय जिनेंद्र,
              </p>
            </div>

            <div className="space-y-5 text-sm sm:text-base text-content-primary leading-relaxed font-devanagari text-justify">
              <p>
                पद्मावती पुरवाल दिगंबर जैन परिवार आज देश में ही नहीं दुनिया के विभिन्न देशों में निवास कर रहे हैं। 
                भारत में भी विभिन्न प्रांतों में पद्मावती पुरवाल दिगंबर जैन परिवार उच्च श्रेणी में व्यापार एवं अपनी योग्यता से 
                विविध उच्च पदों पर आसीन होकर धार्मिकता एवं सम्पन्नता के साथ जीवन यापन कर रहे हैं।
              </p>

              <div className="p-4 rounded-xl bg-gold-50 border-l-4 border-gold text-content-primary italic">
                &ldquo;भौतिकवादी युग में बहुत अधिक दूर-दराज में बिखराव के कारण एक दूसरे से अनभिज्ञ होना, मिलन न होना 
                एवं जानकारी का भी अभाव होना बड़ी दुर्बलता है जिस कारण हम अन्य-अन्य समाज में मिलने का प्रयास करते हैं।&rdquo;
              </div>

              <p>
                इसलिए बहुत सोच विचार करने के उपरांत पद्मावती पुरवाल दिगंबर जैन परिवारों को जोड़ने एवं भाईचारे को पूर्व की भांति 
                बनाने के उद्देश्य से आपके सहयोग एवं सजातीय भावना को जागृत करने के लिए <strong>जन जागृति जन जनगणना</strong> का प्रोग्राम 
                डिजिटल माध्यम से तैयार किया गया है।
              </p>

              <p>
                जिसमें देश-विदेश में निवास कर रहे पद्मावती पुरवाल दिगंबर जैन सजातीय बंधु परिवार सहित ऑनलाइन माध्यम से आपस में जुड़ सकेंगे।
                आपका सभी विवरण सुरक्षित होगा, केवल आप या परिवार के पंजीकृत सदस्य ही अपने विवरण को देख एवं संपादित कर सकेंगे। 
                पंजीकरण प्रक्रिया पंजीकृत मोबाइल पर पंचायत द्वारा भेजे गए <strong>ओ.टी.पी. (OTP)</strong> देने पर ही पूर्ण होगी।
              </p>

              <h3 className="text-lg font-bold text-maroon font-devanagari pt-2">
                इस डिजिटल जनगणना प्रोग्राम के प्रमुख लाभ:
              </h3>

              <ul className="space-y-2.5 pl-2">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-maroon-50 text-maroon font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">१</span>
                  <span>पद्मावती पुरवाल परिवार की वास्तविक जनसंख्या एवं जनसांख्यिकीय डेटाबेस तैयार होगा।</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-maroon-50 text-maroon font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">२</span>
                  <span>अखिल भारतीय सामाजिक एकता संगठन और प्रभावी संवाद तंत्र स्थापित हो सकेगा।</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-maroon-50 text-maroon font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">३</span>
                  <span>विवाह योग्य लड़के-लड़कियों (वर-वधू) का प्रामाणिक चयन करने में परिवारजनों को विशेष सहायता मिलेगी।</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-maroon-50 text-maroon font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">४</span>
                  <span>समाज के विद्वत जनों, प्रशासनिक अधिकारियों, चिकित्सकों, उद्योगपतियों एवं युवाओं का पारस्परिक परिचय होगा।</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-maroon-50 text-maroon font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">५</span>
                  <span>आवश्यकता पड़ने पर आपसी यथायोग्य सहायता करना अथवा प्राप्त करना सहज व पारदर्शी होगा।</span>
                </li>
              </ul>

              <p className="pt-2">
                अतः आप अपने परिवारजनों एवं आस-पास में रह रहे पद्मावती पुरवाल परिवारों को इस प्रोग्राम से जोड़ें एवं जोड़ने के लिए प्रोत्साहन दें। 
                किसी भी प्रकार का भेद-भाव, अमीरी-गरीबी, योग्यता-अयोग्यता, छोटा व्यापार या बड़ा व्यापार, उच्च शिक्षा या कम शिक्षा आदि को छोड़ 
                आपस में मेल-जोल करें और संगठित होकर एक खोए हुए अस्तित्व को पुनः प्राप्त करें।
              </p>
            </div>

            <div className="pt-6 border-t border-warm-border text-xs text-content-secondary text-right">
              This website owned, created and maintained by <strong>Biswaas Enterprises</strong>.
            </div>
          </div>

          {/* Right Sidebar Info */}
          <div className="lg:col-span-4 space-y-5">
            {/* CTA Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-maroon to-maroon-dark text-white shadow-card space-y-4 text-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mx-auto shadow-md flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="PPJain"
                  width={64}
                  height={64}
                  className="object-contain w-full h-full rounded-full"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold font-devanagari text-white">परिवार पंजीकरण</h3>
                <p className="text-xs text-gold-light mt-1 font-devanagari">
                  अपने परिवार की प्रविष्टि करें और समाज के डिजिटल नेटवर्क से जुड़ें।
                </p>
              </div>
              <Link
                href="/register"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gold text-maroon-dark font-bold text-sm shadow hover:bg-gold-light transition-all"
              >
                <UserPlus className="w-4 h-4" />
                <span>नया पंजीकरण करें</span>
              </Link>
            </div>

            {/* Privacy Card */}
            <div className="p-5 rounded-2xl bg-white border border-warm-border shadow-soft space-y-3">
              <div className="flex items-center gap-2 text-maroon font-bold text-sm">
                <Lock className="w-4 h-4 text-gold-dark" />
                <span>गोपनीयता नीति (Privacy)</span>
              </div>
              <p className="text-xs text-content-secondary leading-relaxed font-devanagari">
                सार्वजनिक निर्देशिका में केवल परिवार प्रमुख का नाम, MID, नगर एवं मुखौटायुक्त (masked) दूरभाष प्रदर्शित किया जाता है। 
                विस्तृत पारिवारिक विवरण केवल अधिकृत पंजीकृत सदस्यों को ही लॉग इन के उपरांत दिखाई देता है।
              </p>
            </div>

            {/* Quick Links */}
            <div className="p-5 rounded-2xl bg-white border border-warm-border shadow-soft space-y-2">
              <h4 className="text-xs font-bold text-content-primary uppercase tracking-wider mb-2">
                अन्य अनुभाग
              </h4>
              <Link
                href="/member-list"
                className="flex items-center justify-between py-2 text-xs font-medium text-content-primary hover:text-maroon border-b border-warm-border last:border-0"
              >
                <span>सदस्य निर्देशिका (Member Directory)</span>
                <ChevronRight className="w-4 h-4 text-content-muted" />
              </Link>
              <Link
                href="/committees"
                className="flex items-center justify-between py-2 text-xs font-medium text-content-primary hover:text-maroon border-b border-warm-border last:border-0"
              >
                <span>वर्तमान कार्यकारिणी (Committees)</span>
                <ChevronRight className="w-4 h-4 text-content-muted" />
              </Link>
              <Link
                href="/magazin"
                className="flex items-center justify-between py-2 text-xs font-medium text-content-primary hover:text-maroon"
              >
                <span>किरण पत्रिका अभिलेखागार (Magazine)</span>
                <ChevronRight className="w-4 h-4 text-content-muted" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
