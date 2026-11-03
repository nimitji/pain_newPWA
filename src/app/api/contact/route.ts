import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "कृपया सभी आवश्यक फ़ील्ड भरें।" },
        { status: 400 }
      );
    }

    // In a real email setup, this sends via Nodemailer or SendGrid
    console.log("Contact form submission received:", {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "संदेश सफलतापूर्वक भेजा गया।",
    });
  } catch (error) {
    console.error("Contact error:", error);
    return NextResponse.json(
      { error: "आंतरिक सर्वर त्रुटि हुई।" },
      { status: 500 }
    );
  }
}
