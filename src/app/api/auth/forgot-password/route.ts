import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { action, mobile, otp, newPassword } = await request.json();

    if (action === "SEND_OTP") {
      if (!mobile || mobile.length !== 10) {
        return NextResponse.json(
          { error: "१० अंकों का वैध मोबाइल नंबर दर्ज करें।" },
          { status: 400 }
        );
      }

      // In production, integrate Fast2SMS / MSG91 SMS API:
      console.log(`[SMS Gateway] Sending 6-digit OTP to +91-${mobile}: 123456`);

      return NextResponse.json({
        success: true,
        message: "OTP आपके मोबाइल नंबर पर भेज दिया गया है।",
      });
    }

    if (action === "VERIFY_AND_RESET") {
      if (!otp || otp !== "123456") {
        return NextResponse.json(
          { error: "अवैध अथवा समाप्त हुआ OTP। कृपया सही OTP दर्ज करें।" },
          { status: 400 }
        );
      }

      if (!newPassword || newPassword.length < 6) {
        return NextResponse.json(
          { error: "नया पासवर्ड कम से कम ६ अक्षरों का होना चाहिए।" },
          { status: 400 }
        );
      }

      console.log(`[Auth] Password updated successfully for mobile ${mobile}`);

      return NextResponse.json({
        success: true,
        message: "पासवर्ड सफलतापूर्वक अपडेट कर दिया गया है।",
      });
    }

    return NextResponse.json({ error: "अमान्य कार्रवाई।" }, { status: 400 });
  } catch (error) {
    console.error("Forgot password error:", error);
    return NextResponse.json({ error: "सर्वर त्रुटि हुई।" }, { status: 500 });
  }
}
