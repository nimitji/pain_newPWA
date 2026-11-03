"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { LogIn, Eye, EyeOff, Lock, Phone, AlertCircle, Loader2 } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!mobile || mobile.length < 10) {
      setError("कृपया १० अंकों का वैध मोबाइल नंबर दर्ज करें।");
      return;
    }
    if (!password) {
      setError("कृपया अपना पासवर्ड दर्ज करें।");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile, password, remember }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "लॉगिन विफल। कृपया सही विवरण दर्ज करें।");
      }

      // Redirect to member dashboard or original returnUrl
      router.push("/dashboard");
      router.refresh();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "लॉगिन करने में त्रुटि हुई।";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-[85vh] bg-warm-bg flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-4xl bg-white rounded-3xl border border-warm-border shadow-elevated overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        {/* Left Heritage Branding Panel (Desktop) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-maroon-dark via-maroon to-maroon-900 text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C89B52_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="relative z-10 space-y-4">
            <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="PPJain Logo"
                width={80}
                height={80}
                className="object-contain w-full h-full rounded-full"
              />
            </div>
            <div>
              <p className="text-xs font-bold text-gold tracking-widest uppercase">।।श्री महावीराय नमः।।</p>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-devanagari mt-1">
                श्री पद्मावती पुरवाल <br />दिगंबर जैन परिवार
              </h2>
            </div>
            <p className="text-xs text-white/80 leading-relaxed font-devanagari">
              डिजिटल जनगणना पोर्टल में आपका स्वागत है। अपने परिवार का विवरण देखें, अद्यतन करें एवं समाज की नई गतिविधियों से जुड़े रहें।
            </p>
          </div>

          <div className="relative z-10 pt-6 border-t border-white/10 text-[11px] text-gold-light font-devanagari">
            सम्पूर्ण भारत | जनसंख्या अभियान | प्रयास हमारा - साथ आपका
          </div>
        </div>

        {/* Right Login Form */}
        <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center">
          <div className="mb-6">
            <h1 className="text-2xl font-black text-content-primary font-devanagari">
              सदस्य लॉगिन (Member Login)
            </h1>
            <p className="text-xs text-content-secondary mt-1">
              Please enter your registered mobile number and password
            </p>
          </div>

          {error && (
            <div className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-status-error flex items-center gap-2.5 text-xs font-semibold">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Mobile Field */}
            <div>
              <label htmlFor="mobile" className="block text-xs font-bold text-content-primary mb-1">
                Mobile No. <span className="text-status-error">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-content-muted">
                  <Phone className="w-4 h-4" />
                </div>
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  required
                  placeholder="Enter Your 10-digit Mobile No"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-warm-border bg-warm-bg text-sm text-content-primary placeholder:text-content-muted focus:bg-white transition-colors"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-xs font-bold text-content-primary mb-1">
                Password <span className="text-status-error">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-content-muted">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-warm-border bg-warm-bg text-sm text-content-primary placeholder:text-content-muted focus:bg-white transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-content-muted hover:text-content-primary"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  name="remember"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="w-4 h-4 rounded text-maroon focus:ring-gold border-warm-border"
                />
                <span className="text-content-secondary font-medium">Remember Me</span>
              </label>

              <Link
                href="/forgot-password"
                className="text-maroon hover:text-gold font-bold underline transition-colors"
              >
                Forgot your password?
              </Link>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-maroon text-white hover:bg-maroon-dark font-bold text-sm shadow-md transition-all disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>सत्यापित कर रहे हैं...</span>
                  </>
                ) : (
                  <>
                    <LogIn className="w-4 h-4" />
                    <span>Login (लॉग इन करें)</span>
                  </>
                )}
              </button>
            </div>

            {/* Demo Credential Helper */}
            <div className="p-3 rounded-xl bg-warm-muted/60 border border-warm-border text-[11px] text-content-secondary space-y-1">
              <p className="font-bold text-maroon">परीक्षण लॉगिन (Test Credentials):</p>
              <p>मोबाइल: <code className="bg-white px-1.5 py-0.5 rounded font-mono text-content-primary">9899805745</code> | पासवर्ड: <code className="bg-white px-1.5 py-0.5 rounded font-mono text-content-primary">123456</code></p>
            </div>

            {/* Register Link */}
            <div className="text-center pt-2 text-xs text-content-secondary border-t border-warm-border">
              <span>Not a member yet? </span>
              <Link href="/register" className="text-maroon font-bold hover:underline">
                Register here (नया खाता बनाएं)
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
