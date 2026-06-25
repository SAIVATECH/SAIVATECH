import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadChatbot from "@/components/LeadChatbot";
import LenisProvider from "@/components/LenisProvider";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import ExitIntentPopup from "@/components/ExitIntentPopup";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "SaivaTech | WhatsApp Automation & Web Development Tamil Nadu",
  description: "Boost your sales with official WhatsApp automation funnels, AI chatbots, and fast websites. We help Tamil Nadu shops, gyms, clinics, and academies get more customers on autopilot.",
  keywords: ["WhatsApp automation Tamil Nadu", "AI chatbot Kovilpatti", "website development Tirunelveli", "automated lead generation Madurai", "WhatsApp business automation India", "SaivaTech"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} bg-[#020617] text-slate-50 antialiased selection:bg-[#00FFFF]/30 selection:text-white relative min-h-screen overflow-x-hidden font-sans`}>
        <LenisProvider>
          {/* Depth glowing orbs */}
          <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            <div className="absolute top-[10%] left-[-10%] w-[40rem] h-[50rem] bg-[#00FFFF]/10 rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[30rem] h-[40rem] bg-[#00b8cc]/10 rounded-full mix-blend-screen filter blur-[120px] animate-pulse delay-1000"></div>
          </div>

          <Navbar />
          <main className="min-h-screen flex flex-col pb-16 md:pb-0">
            {children}
          </main>
          <Footer />
          <LeadChatbot />
          <FloatingWhatsApp />
          <StickyMobileCTA />
          <ExitIntentPopup />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "SaivaTech",
                "image": "https://saivatech.in/icon.png",
                "@id": "https://saivatech.in/#organization",
                "url": "https://saivatech.in",
                "telephone": "+919442101823",
                "priceRange": "₹₹",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "301/A2, Nadarajapuram",
                  "addressLocality": "Kovilpatti",
                  "addressRegion": "Tamil Nadu",
                  "postalCode": "628502",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 9.1723,
                  "longitude": 77.8762
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                  ],
                  "opens": "09:00",
                  "closes": "21:00"
                }
              })
            }}
          />
        </LenisProvider>
      </body>
    </html>
  );
}
