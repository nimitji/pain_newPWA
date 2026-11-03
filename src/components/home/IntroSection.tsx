import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Shield, HeartHandshake } from "lucide-react";

export default function IntroSection() {
  return (
    <section className="py-14 sm:py-20 bg-warm-muted/40 border-b border-warm-border">
      <div className="max-w-desktop mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-maroon-50 border border-maroon-200 text-maroon text-xs font-bold uppercase tracking-wider">
            परिचय एवं उद्देश्य
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-content-primary font-devanagari">
            पद्मावती पुरवाल दिगंबर जैन परिवार का गौरवशाली इतिहास
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Historical & Purpose Card */}
          <div className="lg:col-span-8 p-6 sm:p-8 bg-white rounded-2xl border border-warm-border shadow-soft space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-maroon font-devanagari flex items-center gap-2">
              <span>सादर जय जिनेंद्र,</span>
            </h3>

            <p className="text-sm sm:text-base text-content-primary leading-relaxed font-devanagari text-justify">
              पद्मावती पुरवाल दिगंबर जैन परिवार आज देश में ही नहीं दुनिया के विभिन्न देशों में निवास कर रहे हैं। भारत में भी विभिन्न प्रांतों में पद्मावती पुरवाल दिगंबर जैन परिवार उच्च श्रेणी में व्यापार एवं अपनी योग्यता से विविध उच्च पदों पर आसीन होकर धार्मिकता एवं सम्पन्नता के साथ जीवन यापन कर रहे हैं।
            </p>

            <p className="text-sm sm:text-base text-content-secondary leading-relaxed font-devanagari text-justify">
              भौतिकवादी युग में बहुत अधिक दूर-दराज में बिखराव के कारण एक दूसरे से अनभिज्ञ होना, मिलन न होना एवं जानकारी का भी अभाव होना बड़ी दुर्बलता है। इसलिए बहुत सोच विचार करने के उपरांत पद्मावती पुरवाल दिगंबर जैन परिवारों को जोड़ने एवं भाईचारे को पूर्व की भांति बनाने के उद्देश्य से आपके सहयोग एवं सजातीय भावना को जागृत करने के लिए जन जागृति जन जनगणना का प्रोग्राम डिजिटल माध्यम से तैयार किया गया है।
            </p>

            <div className="pt-2">
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 text-sm font-bold text-maroon hover:text-gold transition-colors"
              >
                <span>विस्तृत परिचय एवं उद्देश्य पढ़ें (Read Full About Us)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Key Pillars */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-5 rounded-2xl bg-white border border-warm-border shadow-soft flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-gold-50 flex items-center justify-center flex-shrink-0 text-gold-dark">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-content-primary font-devanagari">गोपनीयता एवं सुरक्षा</h4>
                <p className="text-xs text-content-secondary mt-1 font-devanagari">
                  आपका सभी विवरण सुरक्षित होगा, केवल परिवार के पंजीकृत सदस्य ही अपने विवरण को देख एवं संपादित कर सकेंगे।
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-warm-border shadow-soft flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-maroon-50 flex items-center justify-center flex-shrink-0 text-maroon">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-content-primary font-devanagari">आपसी सहयोग एवं संवाद</h4>
                <p className="text-xs text-content-secondary mt-1 font-devanagari">
                  विवाह योग्य युवक-युवतियों का चयन करने में सहायक, विद्वत जनों का परिचय तथा आवश्यकता होने पर पारस्परिक सहायता।
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-warm-border shadow-soft flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0 text-status-success">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-content-primary font-devanagari">डिजिटल किरण पत्रिका</h4>
                <p className="text-xs text-content-secondary mt-1 font-devanagari">
                  समाज की त्रैमासिक पत्रिका &lsquo;पद्मावती पुरवाल किरण&rsquo; को मोबाइल एवं कंप्यूटर पर कहीं भी डिजिटल रूप से पढ़ें।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
