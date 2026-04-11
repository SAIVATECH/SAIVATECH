import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-white tracking-widest">SAIVA</span>
              <span className="text-[#00FFFF] tracking-widest ml-0.5">TECH</span>
            </Link>
            <p className="text-slate-400 max-w-sm mt-4 leading-relaxed">
              We help small businesses, startups, and coaching institutes dominate their market with high-converting websites and AI automation.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-slate-400 hover:text-[#00FFFF] transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-[#00FFFF] transition-colors">Services</Link></li>
              <li><Link href="/projects" className="text-slate-400 hover:text-[#00FFFF] transition-colors">Projects</Link></li>
              <li><Link href="/careers" className="text-slate-400 hover:text-[#00FFFF] transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-[#00FFFF] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-slate-400">
                <MapPin className="mr-3 w-5 h-5 text-[#00FFFF] flex-shrink-0 mt-0.5" />
                <span>Kovilpatti, Tamil Nadu<br/>India</span>
              </li>
              <li className="flex items-center text-slate-400">
                <Phone className="mr-3 w-5 h-5 text-[#00FFFF] flex-shrink-0" />
                <span>+91 94421 01823</span>
              </li>
              <li className="flex items-center text-slate-400">
                <Mail className="mr-3 w-5 h-5 text-[#00FFFF] flex-shrink-0" />
                <span>hello@saivatech.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} SaivaTech. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
