import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ParticleBackground from "@/components/ParticleBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SaivaTech – Software Company in Kovilpatti",
  description: "Masterful web development, AI automation, and SEO marketing services. Accelerating local businesses in Kovilpatti.",
  keywords: ["web development Kovilpatti", "website for coaching institutes", "small business website India", "software agency", "SaivaTech"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-transparent text-slate-50 antialiased selection:bg-[#00FFFF]/30 selection:text-white relative min-h-screen`}>
        {/* Live Wallpaper System */}
        <ParticleBackground />
        
        {/* Depth glowing orbs over particles */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-grid-cyan opacity-10"></div>
          <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-[#00FFFF]/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#00b8cc]/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000"></div>
        </div>

        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
