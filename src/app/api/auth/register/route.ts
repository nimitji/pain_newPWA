import { NextResponse } from "next/server";
import { setSession } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const { fullname, gender, mobile, password, password_confirmation, terms } = await request.json();

    if (!fullname || !mobile || !password) {
      return NextResponse.json(
        { error: "सभी आवश्यक फ़ील्ड भरें।" },
        { status: 400 }
      );
    }

    if (password !== password_confirmation) {
      return NextResponse.json(
        { error: "पासवर्ड और पुष्टि पासवर्ड मेल नहीं खाते।" },
        { status: 400 }
      );
    }

    if (!terms) {
      return NextResponse.json(
        { error: "कृपया सेवा की शर्तों को स्वीकार करें।" },
        { status: 400 }
      );
    }

    const newMid = `PPJ0${Math.floor(500 + Math.random() * 500)}`;
    const user = {
      id: `usr-${Date.now()}`,
      fullname,
      mobile,
      gender: gender === "female" ? "Female" : "Male",
      mid: newMid,
      role: "MEMBER" as const,
    };

    await setSession(user, true);

    return NextResponse.json({
      success: true,
      message: "खाता सफलतापूर्वक बना लिया गया है!",
      user,
    });
  } catch (error) {
    console.error("Register route error:", error);
    return NextResponse.json(
      { error: "पंजीकरण में त्रुटि हुई।" },
      { status: 500 }
    );
  }
}
