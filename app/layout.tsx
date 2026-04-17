import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadChatbot from "@/components/LeadChatbot";
import LenisProvider from "@/components/LenisProvider";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "SaivaTech | Empowering Businesses with AI & Automation",
  description: "Architecting high-converting web applications, WhatsApp auto-funnels, and bespoke AI Chatbots. Turn conversations into customers using automation.",
  keywords: ["web development", "AI Chatbot", "WhatsApp Automation", "Software Agency", "SaivaTech"],
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
          <main className="min-h-screen flex flex-col">
            {children}
          </main>
          <Footer />
          <LeadChatbot />
        </LenisProvider>
      </body>
    </html>
  );
}
