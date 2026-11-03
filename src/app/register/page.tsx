"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { UserPlus, User, Lock, Phone, Eye, EyeOff, AlertCircle, CheckCircle2, Loader2 } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullname: "",
    gender: "male",
    mobile: "",
    password: "",
    password_confirmation: "",
    terms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.fullname.trim()) {
      setError("कृपया अपना पूरा नाम दर्ज करें।");
      return;
    }
    if (!formData.mobile || formData.mobile.length !== 10) {
      setError("कृपया १० अंकों का वैध मोबाइल नंबर दर्ज करें।");
      return;
    }
    if (formData.password.length < 6) {
      setError("पासवर्ड कम से कम ६ अक्षरों का होना चाहिए।");
      return;
    }
    if (formData.password !== formData.password_confirmation) {
      setError("पासवर्ड और पुष्टि पासवर्ड मेल नहीं खाते।");
      return;
    }
    if (!formData.terms) {
      setError("कृपया सेवा की शर्तों को स्वीकार करें।");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "पंजीकरण विफल हुआ। कृपया पुनः प्रयास करें।");
      }

      setSuccess(true);
      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "पंजीकरण में त्रुटि हुई।";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-[85vh] bg-warm-bg flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl border border-warm-border shadow-elevated p-6 sm:p-10">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full overflow-hidden mx-auto shadow-md flex items-center justify-center mb-3">
            <Image
              src="/logo.png"
              alt="PPJain Logo"
              width={64}
              height={64}
              className="object-contain w-full h-full rounded-full"
            />
          </div>
          <p className="text-xs font-bold text-gold tracking-widest uppercase">।।श्री महावीराय नमः।।</p>
          <h1 className="text-2xl font-black text-content-primary font-devanagari mt-1">
            खाता बनाएं (Create Your Account)
          </h1>
          <p className="text-xs text-content-secondary mt-1">
            श्री पद्मावती पुरवाल दिगंबर जैन परिवार डिजिटल जनगणना पोर्टल
          </p>
        </div>

        {error && (
          <div className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-status-error flex items-center gap-2.5 text-xs font-semibold">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="mb-5 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-status-success flex items-center gap-3 text-xs font-semibold">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
            <span>खाता सफलतापूर्वक बना लिया गया है! आपको डैशबोर्ड पर निर्देशित किया जा रहा है...</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label htmlFor="fullname" className="block text-xs font-bold text-content-primary mb-1">
              Full Name <span className="text-status-error">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-content-muted">
                <User className="w-4 h-4" />
              </div>
              <input
                id="fullname"
                name="fullname"
                type="text"
                required
                placeholder="Enter Full Name"
                value={formData.fullname}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-warm-border bg-warm-bg text-sm text-content-primary placeholder:text-content-muted focus:bg-white transition-colors"
              />
            </div>
          </div>

          {/* Gender Radio */}
          <div>
            <label className="block text-xs font-bold text-content-primary mb-1.5">
              I am a <span className="text-status-error">*</span>
            </label>
            <div className="flex items-center gap-6 p-3 rounded-xl border border-warm-border bg-warm-bg">
              <label className="flex items-center gap-2 text-sm text-content-primary font-medium cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                  className="w-4 h-4 text-maroon focus:ring-gold"
                />
                <span>Male (पुरुष)</span>
              </label>

              <label className="flex items-center gap-2 text-sm text-content-primary font-medium cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                  className="w-4 h-4 text-maroon focus:ring-gold"
                />
                <span>Female (महिला)</span>
              </label>
            </div>
          </div>

          {/* Mobile */}
          <div>
            <label htmlFor="mobile" className="block text-xs font-bold text-content-primary mb-1">
              Mobile Number <span className="text-status-error">*</span>
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
                placeholder="Enter Your 10-digit Mobile No."
                value={formData.mobile}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    mobile: e.target.value.replace(/\D/g, "").slice(0, 10),
                  }))
                }
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-warm-border bg-warm-bg text-sm text-content-primary placeholder:text-content-muted focus:bg-white transition-colors"
              />
            </div>
            <p className="text-[11px] text-content-muted mt-1">
              इस मोबाइल नंबर पर पंचायत द्वारा सत्यापन OTP प्राप्त होगा।
            </p>
          </div>

          {/* Password & Confirm Password */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  placeholder="Min 6 characters"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-warm-border bg-warm-bg text-sm text-content-primary placeholder:text-content-muted focus:bg-white transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-content-muted"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="password_confirmation" className="block text-xs font-bold text-content-primary mb-1">
                Confirm Password <span className="text-status-error">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-content-muted">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  id="password_confirmation"
                  name="password_confirmation"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Re-enter password"
                  value={formData.password_confirmation}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-warm-border bg-warm-bg text-sm text-content-primary placeholder:text-content-muted focus:bg-white transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Terms checkbox */}
          <div className="pt-2">
            <label className="flex items-start gap-2.5 cursor-pointer text-xs text-content-secondary leading-relaxed">
              <input
                type="checkbox"
                name="terms"
                required
                checked={formData.terms}
                onChange={handleChange}
                className="w-4 h-4 mt-0.5 rounded text-maroon focus:ring-gold border-warm-border"
              />
              <span>
                खाता बनाकर, आप पद्मावती पुरवाल समाज की सेवा शर्तों एवं गोपनीयता नीति से सहमत होते हैं। (By creating an account, you agree to terms of service)
              </span>
            </label>
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-maroon text-white hover:bg-maroon-dark font-bold text-sm shadow-md transition-all disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>प्रक्रियाधीन है...</span>
                </>
              ) : (
                <>
                  <UserPlus className="w-4 h-4" />
                  <span>Create Your Account (खाता बनाएं)</span>
                </>
              )}
            </button>
          </div>

          {/* Login Link */}
          <div className="text-center pt-3 text-xs text-content-secondary border-t border-warm-border">
            <span>Already on PPJain? </span>
            <Link href="/login" className="text-maroon font-bold hover:underline">
              Log in (लॉग इन करें)
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
