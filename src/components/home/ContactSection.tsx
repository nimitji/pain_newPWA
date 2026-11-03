"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, formType: "contact" }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "संदेश भेजने में त्रुटि हुई। कृपया पुनः प्रयास करें।");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "संदेश भेजने में त्रुटि हुई।";
      setStatus("error");
      setErrorMessage(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-14 sm:py-20 bg-warm-muted/30">
      <div className="max-w-desktop mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center space-y-2 mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-maroon-50 border border-maroon-200 text-maroon text-xs font-bold uppercase tracking-wider">
            सम्पर्क
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-content-primary font-devanagari">
            हमसे सम्पर्क करें (Contact Us)
          </h2>
          <p className="text-xs sm:text-sm text-content-secondary max-w-lg mx-auto font-devanagari">
            किसी भी जानकारी, सुझाव अथवा परिवार पंजीकरण में सहायता हेतु संदेश भेजें
          </p>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-white border border-warm-border shadow-soft flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-maroon-50 flex items-center justify-center flex-shrink-0 text-maroon">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-content-primary font-devanagari">कार्यालय पता</h3>
                <p className="text-xs text-content-secondary mt-1 leading-relaxed">
                  अखिल भारतीय श्री पद्मावती पुरवाल दिगंबर जैन पंचायत (रजि.) <br />
                  दिल्ली / फ़िरोज़ाबाद, भारत
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-warm-border shadow-soft flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold-50 flex items-center justify-center flex-shrink-0 text-gold-dark">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-content-primary font-devanagari">ईमेल</h3>
                <p className="text-xs text-content-secondary mt-1">
                  <a href="mailto:info@ppjain.in" className="hover:text-maroon underline font-medium">
                    info@ppjain.in
                  </a>
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-warm-border shadow-soft flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0 text-status-success">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-content-primary font-devanagari">हेल्पलाइन फोन</h3>
                <p className="text-xs text-content-secondary mt-1 font-medium">
                  +91 9837044877 / +91 9312237612
                </p>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7 p-6 sm:p-8 bg-white rounded-2xl border border-warm-border shadow-card">
            {status === "success" && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-status-success flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm font-semibold font-devanagari">
                  धन्यवाद! आपका संदेश सफलतापूर्वक भेज दिया गया है। पंचायत प्रतिनिधि शीघ्र ही आपसे सम्पर्क करेंगे।
                </p>
              </div>
            )}

            {status === "error" && (
              <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-status-error flex items-center gap-3">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm font-semibold">{errorMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-content-primary mb-1">
                    Your Name <span className="text-status-error">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-warm-border bg-warm-bg text-sm text-content-primary placeholder:text-content-muted focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-content-primary mb-1">
                    Your Email <span className="text-status-error">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-warm-border bg-warm-bg text-sm text-content-primary placeholder:text-content-muted focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-bold text-content-primary mb-1">
                  Subject <span className="text-status-error">*</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Subject of message"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-warm-border bg-warm-bg text-sm text-content-primary placeholder:text-content-muted focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-content-primary mb-1">
                  Message <span className="text-status-error">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-warm-border bg-warm-bg text-sm text-content-primary placeholder:text-content-muted focus:bg-white transition-colors resize-y"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-maroon text-white hover:bg-maroon-dark font-bold text-sm shadow-md transition-all disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>भेज रहे हैं...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
