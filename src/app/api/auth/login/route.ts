import { NextResponse } from "next/server";
import { setSession, verifiedTestAccounts } from "@/lib/auth";
import { rawMembers } from "@/lib/data";

export async function POST(request: Request) {
  try {
    const { mobile, password, remember } = await request.json();

    if (!mobile || !password) {
      return NextResponse.json(
        { error: "मोबाइल नंबर और पासवर्ड अनिवार्य हैं।" },
        { status: 400 }
      );
    }

    // 1. Check known verified committee/test accounts
    if (verifiedTestAccounts[mobile]) {
      const acc = verifiedTestAccounts[mobile];
      if (password === acc.pin) {
        await setSession(acc.user, remember ?? true);
        return NextResponse.json({ success: true, user: acc.user });
      } else {
        return NextResponse.json(
          { error: "दर्ज किया गया पासवर्ड गलत है।" },
          { status: 401 }
        );
      }
    }

    // 2. Check if mobile exists in members directory
    const matchedMember = rawMembers.find((m) => m.mobile.endsWith(mobile.slice(-4)));
    if (matchedMember) {
      // In production, compare hashed password from DB
      const user = {
        id: `usr-${matchedMember.id}`,
        fullname: matchedMember.fullname,
        mobile: mobile,
        gender: "Male",
        mid: matchedMember.mid,
        role: "MEMBER" as const,
      };

      await setSession(user, remember ?? true);
      return NextResponse.json({ success: true, user });
    }

    // 3. Fallback for newly created member
    const user = {
      id: `usr-${Date.now()}`,
      fullname: "पंजीकृत सदस्य",
      mobile: mobile,
      gender: "Male",
      mid: `PPJ${Math.floor(1000 + Math.random() * 9000)}`,
      role: "MEMBER" as const,
    };

    await setSession(user, remember ?? true);
    return NextResponse.json({ success: true, user });
  } catch (error) {
    console.error("Login route error:", error);
    return NextResponse.json(
      { error: "आंतरिक सर्वर त्रुटि हुई।" },
      { status: 500 }
    );
  }
}
