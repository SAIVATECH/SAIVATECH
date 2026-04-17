import Link from 'next/link';
import Image from 'next/image';
import siteLogo from '@/app/icon.png';

export default function Footer() {
  return (
    <footer className="relative bg-[#020617] border-t border-white/5 pt-20 pb-10 overflow-hidden isolate">
      {/* Abstract Glowing Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00FFFF]/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#00b8cc]/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 lg:col-span-2">
          <Link href="/" className="inline-flex items-center gap-3 text-2xl font-black tracking-tight text-white mb-6 group">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-[#00FFFF]/20 shadow-[0_0_15px_rgba(0,255,255,0.2)] group-hover:scale-110 transition-transform duration-500">
              <Image src={siteLogo} alt="SaivaTech Logo" fill className="object-cover" />
            </div>
            <span>SaivaTech<span className="text-[#00FFFF]">.</span></span>
          </Link>
          <p className="text-slate-400 font-light max-w-sm mb-8">
            Empowering modern businesses with bespoke AI integrations, automated WhatsApp funnels, and high-performance digital ecosystems.
          </p>
          <div className="flex gap-4">
             {['Twitter', 'LinkedIn', 'Instagram'].map(social => (
               <a key={social} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#00FFFF] hover:bg-[#00FFFF]/10 transition-colors duration-300">
                 {/* Placeholder for icons */}
                 <span className="text-xs">{social[0]}</span>
               </a>
             ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-medium mb-6">Quick Links</h4>
          <ul className="space-y-4">
            {['Home', 'About', 'Services', 'Projects', 'Careers', 'Contact'].map(link => (
              <li key={link}>
                <Link href={link === 'Home' ? '/' : `/${link.toLowerCase()}`} className="text-slate-400 hover:text-[#00FFFF] transition-colors">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-6">Head Office</h4>
          <address className="not-italic text-slate-400 space-y-4">
            <p>301/A2, Nadarajapuram</p>
            <p>Kovilpatti, Tamil Nadu 628502</p>
            <p className="pt-4">
              <a href="tel:+919442101823" className="hover:text-white transition-colors block">Phone: +91 94421 01823</a>
            </p>
            <p>
              <a href="mailto:saivatech786@gmail.com" className="hover:text-white transition-colors block">Email: saivatech786@gmail.com</a>
            </p>
          </address>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} SaivaTech. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-slate-500">
           <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
           <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
