'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import siteLogo from '@/app/icon.png';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      {/* Background Glass container */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${scrolled ? 'opacity-100 bg-[#020617]/80 backdrop-blur-2xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'opacity-0'}`} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex justify-between items-center bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 hidden md:flex">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-[#00FFFF]/20 shadow-[0_0_15px_rgba(0,255,255,0.2)] group-hover:scale-110 transition-transform duration-500">
              <Image src={siteLogo} alt="SaivaTech Logo" fill className="object-cover" />
            </div>
            <span className="text-xl font-black tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#00FFFF] transition-all duration-300">
              SaivaTech<span className="text-[#00FFFF]">.</span>
            </span>
          </Link>
          
          <div className="flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors group overflow-hidden rounded-full"
              >
                <span className="relative z-10">{link.name}</span>
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </div>

          <a
           href="https://wa.me/919442101823?text=Hi%2C%20I%20want%20a%20free%20AI%20%26%20automation%20audit.%0ABusiness%3A%20____%0ACurrent%20challenge%3A%20____"
            className="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-black bg-[#00FFFF] rounded-full overflow-hidden transition-transform hover:scale-105 duration-300"
          >
            <div className="absolute inset-0 w-full h-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
            <span className="relative z-10 drop-shadow-md">Get Free Audit</span>
            <div className="absolute -inset-2 bg-[#00FFFF]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </a>
        </div>

        {/* Mobile Nav Top Bar */}
        <div className="md:hidden flex justify-between items-center w-full px-4 py-3 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-7 h-7 rounded-md overflow-hidden border border-[#00FFFF]/20">
              <Image src={siteLogo} alt="SaivaTech Logo" fill className="object-cover" />
            </div>
            <span className="text-xl font-black tracking-tight text-white">
              SaivaTech<span className="text-[#00FFFF]">.</span>
            </span>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-300 hover:text-white focus:outline-none p-2 bg-white/5 rounded-full"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="absolute top-24 left-6 right-6 md:hidden glass-panel rounded-2xl p-6"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                  key={link.name}
                >
                  <Link
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block text-lg font-medium text-slate-300 hover:text-[#00FFFF] transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                href="https://wa.me/919442101823?text=Hi%2C%20I%20want%20to%20build%20a%20website%20with%20AI%20automation.%0ACan%20we%20discuss%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full py-4 bg-gradient-to-r from-[#00b8cc] to-[#00FFFF] rounded-xl text-black text-center font-bold shadow-[0_0_20px_rgba(0,255,255,0.3)]"
              >
                Get Free Consultation
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
