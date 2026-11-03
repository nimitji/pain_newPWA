import type { Metadata } from "next";
import { Inter, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getSession } from "@/lib/auth";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoDevanagari = Noto_Sans_Devanagari({
  variable: "--font-noto-sans-devanagari",
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "श्री पद्मावती पुरवाल दिगंबर जैन परिवार | सम्पूर्ण भारत - जनसंख्या अभियान",
  description: "अखिल भारतीय श्री पद्मावती पुरवाल दिगंबर जैन परिवार डिजिटल जनगणना, सदस्य निर्देशिका, वैवाहिक मंच एवं मासिक पत्रिका पोर्टल।",
  keywords: [
    "PPJain",
    "Padmawati Purwal Jain",
    "श्री पद्मावती पुरवाल दिगंबर जैन परिवार",
    "Purwal Jain Samaj",
    "Jain Census",
    "Var Vadhu Jain",
    "Padmawati Purwal Kiran"
  ],
  authors: [{ name: "Shri Padmawati Purwal Digamber Jain Pariwar" }],
  openGraph: {
    title: "श्री पद्मावती पुरवाल दिगंबर जैन परिवार",
    description: "सम्पूर्ण भारत | जनसंख्या अभियान | प्रयास हमारा - साथ आपका",
    url: "https://www.ppjain.com",
    siteName: "PPJain",
    locale: "hi_IN",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getSession();

  return (
    <html lang="hi" className={`${inter.variable} ${notoDevanagari.variable}`}>
      <body className="font-sans antialiased bg-warm-bg text-content-primary min-h-screen flex flex-col">
        <Header user={user} />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
