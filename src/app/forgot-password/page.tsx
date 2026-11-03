"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { KeyRound, Phone, Lock, Eye, EyeOff, AlertCircle, CheckCircle2, Loader2 } from "lucide-react";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Step 1: Send OTP
  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!mobile || mobile.length !== 10) {
      setError("कृपया अपना १० अंकों का पंजीकृत मोबाइल नंबर दर्ज करें।");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "SEND_OTP", mobile }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "OTP भेजने में त्रुटि हुई।");
      }

      setStep(2);
      setSuccess("OTP आपके पंजीकृत मोबाइल पर भेजा गया है। (डेमो मोड में: 123456)");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "त्रुटि हुई।";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  // Step 2: Verify OTP and Reset Password
  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!otp || otp.length !== 6) {
      setError("कृपया ६ अंकों का OTP दर्ज करें।");
      return;
    }
    if (newPassword.length < 6) {
      setError("नया पासवर्ड कम से कम ६ अक्षरों का होना चाहिए।");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "VERIFY_AND_RESET", mobile, otp, newPassword }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "पासवर्ड रीसेट करने में त्रुटि हुई।");
      }

      setSuccess("पासवर्ड सफलतापूर्वक बदल दिया गया है! लॉगिन पर निर्देशित किया जा रहा है...");
      setTimeout(() => {
        router.push("/login");
      }, 1500);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "त्रुटि हुई।";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-[85vh] bg-warm-bg flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl border border-warm-border shadow-elevated p-6 sm:p-8">
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-full overflow-hidden mx-auto shadow-md flex items-center justify-center mb-2">
            <Image
              src="/logo.png"
              alt="PPJain Logo"
              width={64}
              height={64}
              className="object-contain w-full h-full rounded-full"
            />
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-content-primary font-devanagari">
            {step === 1 ? "पासवर्ड भूल गए (Forgot Password)" : "नया पासवर्ड बनाएं (Reset Password)"}
          </h1>
          <p className="text-xs text-content-secondary mt-1">
            {step === 1
              ? "Please enter your registered mobile number to receive OTP"
              : `मोबाइल ${mobile} पर भेजा गया OTP एवं नया पासवर्ड दर्ज करें`}
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-status-error flex items-center gap-2 text-xs font-semibold">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-status-success flex items-center gap-2 text-xs font-semibold">
            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
            <span>{success}</span>
          </div>
        )}

        {step === 1 ? (
          <form onSubmit={handleSendOtp} className="space-y-4">
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
                  placeholder="Enter Your Mobile No"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-warm-border bg-warm-bg text-sm text-content-primary placeholder:text-content-muted focus:bg-white transition-colors"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-maroon text-white hover:bg-maroon-dark font-bold text-sm shadow-md transition-all disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>OTP भेजा जा रहा है...</span>
                  </>
                ) : (
                  <span>Send OTP</span>
                )}
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleResetPassword} className="space-y-4">
            <div>
              <label htmlFor="otp" className="block text-xs font-bold text-content-primary mb-1">
                Enter 6-digit OTP <span className="text-status-error">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-content-muted">
                  <KeyRound className="w-4 h-4" />
                </div>
                <input
                  id="otp"
                  name="otp"
                  type="text"
                  required
                  maxLength={6}
                  placeholder="Enter 6-digit OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-warm-border bg-warm-bg text-sm text-content-primary placeholder:text-content-muted focus:bg-white tracking-widest font-mono text-center transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="newPassword" className="block text-xs font-bold text-content-primary mb-1">
                New Password <span className="text-status-error">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-content-muted">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  id="newPassword"
                  name="newPassword"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Min 6 characters"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-warm-border bg-warm-bg text-sm text-content-primary placeholder:text-content-muted focus:bg-white transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-content-muted"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="py-2.5 px-3 rounded-xl border border-warm-border text-xs font-bold text-content-secondary hover:bg-warm-muted"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-maroon text-white hover:bg-maroon-dark font-bold text-sm shadow-md transition-all disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>सत्यापित कर रहे हैं...</span>
                  </>
                ) : (
                  <span>Reset Password</span>
                )}
              </button>
            </div>
          </form>
        )}

        <div className="text-center pt-4 mt-4 text-xs text-content-secondary border-t border-warm-border">
          <span>Back to login? </span>
          <Link href="/login" className="text-maroon font-bold hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
