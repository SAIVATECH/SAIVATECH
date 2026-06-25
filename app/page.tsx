'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Data imports
import projectsData from '@/data/projects.json';
import servicesData from '@/data/services.json';
import testimonialsData from '@/data/testimonials.json';

// Component imports
import ROICalculator from '@/components/ROICalculator';
import FAQSection from '@/components/FAQSection';
import ComparisonTable from '@/components/ComparisonTable';
import { Phone, MessageSquare, ShieldCheck, Zap, HelpCircle } from 'lucide-react';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  // Parallax elements
  const heroTextY = useTransform(scrollYProgress, [0, 0.2], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const [activeTab, setActiveTab] = useState(0);
  const [homeForm, setHomeForm] = useState({ name: '', phone: '', business: '', challenge: '' });

  const handleHomeFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setHomeForm({ ...homeForm, [e.target.name]: e.target.value });
  };

  const handleHomepageFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Free Audit Request from SaivaTech Website*%0A%0A*Name:* ${homeForm.name}%0A*Contact:* ${homeForm.phone}%0A*Business:* ${homeForm.business}%0A*Challenge:* ${homeForm.challenge}`;
    window.open(`https://wa.me/919442101823?text=${text}`, '_blank');
  };

  // Plain-language headline matching audit consultant recommendations
  const titleText = "More Customers. Zero Extra Staff. We Automate Your Business.".split(" ");

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden bg-[#020617] text-white">

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1: HERO — Outcome-first, dual CTA
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[90vh] md:min-h-screen flex items-center justify-center isolate px-6 pt-24">
        {/* Deep 3D background elements */}
        <div className="absolute inset-0 -z-20 bg-[url('/noise.png')] opacity-20 pointer-events-none mix-blend-overlay" />

        {/* Floating abstract glowing objects */}
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '-60%']) }}
          className="absolute top-1/4 right-[10%] w-[400px] h-[400px] bg-[#00FFFF]/10 rounded-full blur-[100px] -z-10"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '40%']) }}
          className="absolute bottom-1/4 left-[10%] w-[300px] h-[300px] bg-gradient-to-tr from-[#00b8cc]/20 to-transparent rounded-full blur-[80px] -z-10"
        />

        <motion.div
          style={{ y: heroTextY, opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto w-full pt-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <span className="text-xs font-semibold tracking-[0.2em] text-[#00FFFF] uppercase inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00FFFF] animate-pulse" />
              AI Automation Agency • Tamil Nadu
            </span>
          </motion.div>

          <h1 className="text-[clamp(2.2rem,5vw,5.5rem)] font-black leading-[1.0] tracking-tighter text-white mb-6 max-w-4xl">
            {titleText.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
                className={`inline-block mr-[1.5vw] ${
                  word.includes('Customers') || word.includes('Staff') || word.includes('Automate') || word.includes('WhatsApp') 
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00FFFF]' 
                    : ''
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="max-w-2xl text-lg md:text-xl font-light text-slate-400 mb-10 leading-relaxed"
          >
            We build official WhatsApp funnels and custom AI bots that get you more leads—even while you sleep. No tech knowledge needed. You get more customers, we handle the software.
          </motion.p>

          {/* DUAL CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center px-4"
          >
            <a
              href="https://wa.me/919442101823?text=Hi%20SaivaTech%2C%20I%20want%20to%20know%20more%20about%20WhatsApp%20Automation%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto relative px-8 py-4 bg-[#25D366] text-white font-bold rounded-full overflow-hidden hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(37,211,102,0.3)] flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
              <span className="relative z-10">Talk to Us on WhatsApp</span>
            </a>

            <a
              href="#audit-booking"
              className="w-full sm:w-auto px-8 py-4 border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-bold rounded-full transition-colors flex items-center justify-center gap-2"
            >
              <span>Get Free 15-Min Audit</span>
            </a>
          </motion.div>
          
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-slate-500 text-xs mt-4 font-mono tracking-wide block"
          >
            Typically replies within 5 minutes on WhatsApp
          </motion.span>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          LOCAL TRUST BAR — targets local business audiences
      ═══════════════════════════════════════════════════════════════ */}
      <div className="w-full bg-slate-950/70 border-y border-white/5 py-8 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#00FFFF] block mb-2 font-semibold">Local Resonance</span>
          <h2 className="text-slate-300 text-base md:text-xl font-medium tracking-tight">
            Automating customer replies for shops, academies, and services from <span className="text-white font-bold">Kovilpatti, Tirunelveli, Madurai, to Chennai</span>.
          </h2>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          HOW IT WORKS SECTION — 3 simple steps
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-24 px-6 lg:px-24 border-b border-white/5 bg-black/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">HOW IT WORKS</h2>
            <p className="text-slate-400 mt-4 text-base md:text-lg">Get started in 3 simple steps. No tech setup required from you.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
            <div className="glass-panel p-8 rounded-3xl relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-[#00FFFF]/10 border border-[#00FFFF]/20 flex items-center justify-center text-[#00FFFF] font-bold text-lg mb-6">1</div>
              <h3 className="text-xl font-bold text-white mb-3">Free 15-Min Audit</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We review your current customer response times and show you exactly how many inquiries you are losing.
              </p>
            </div>
            
            <div className="glass-panel p-8 rounded-3xl relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-[#00FFFF]/10 border border-[#00FFFF]/20 flex items-center justify-center text-[#00FFFF] font-bold text-lg mb-6">2</div>
              <h3 className="text-xl font-bold text-white mb-3">We Build & Approve</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We connect your business phone to the official Meta Cloud API and design custom auto-replies in 7–14 days.
              </p>
            </div>
            
            <div className="glass-panel p-8 rounded-3xl relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-[#00FFFF]/10 border border-[#00FFFF]/20 flex items-center justify-center text-[#00FFFF] font-bold text-lg mb-6">3</div>
              <h3 className="text-xl font-bold text-white mb-3">Autopilot Leads</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Your AI bot handles basic inquiries instantly, 24/7. Hot leads are sent straight to your phone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          COMPARISON SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-24 px-6 lg:px-24 border-b border-white/5 bg-slate-900/10">
        <div className="max-w-5xl mx-auto">
          <ComparisonTable />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          MODULES/SERVICES SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-24 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">OUR SERVICES</h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto text-base md:text-lg">Replacing slow manual work with automated customer growth systems.</p>
          </motion.div>

          {/* Tab navigation */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {servicesData.map((service, idx) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-3 rounded-full text-xs md:text-sm font-medium transition-all duration-300 border ${
                  activeTab === idx
                    ? 'bg-[#00FFFF] text-black border-[#00FFFF] shadow-[0_0_20px_rgba(0,255,255,0.2)]'
                    : 'bg-transparent text-slate-400 border-white/10 hover:text-white hover:border-white/30'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Active service detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-sm p-8 md:p-12 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00FFFF]/5 rounded-full blur-[100px] -z-10 animate-pulse" />

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{servicesData[activeTab].title}</h3>
              <p className="text-base md:text-lg text-slate-300 mb-8 max-w-3xl leading-relaxed">{servicesData[activeTab].description}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/20">
                  <span className="text-red-400 font-mono text-xs mb-2 block font-bold tracking-widest">THE PROBLEM</span>
                  <p className="text-slate-300 text-sm leading-relaxed">{servicesData[activeTab].problem}</p>
                </div>
                <div className="p-6 rounded-2xl bg-[#00FFFF]/5 border border-[#00FFFF]/20">
                  <span className="text-[#00FFFF] font-mono text-xs mb-2 block font-bold tracking-widest">OUR SOLUTION</span>
                  <p className="text-slate-300 text-sm leading-relaxed">{servicesData[activeTab].solution}</p>
                </div>
                <div className="p-6 rounded-2xl bg-green-500/5 border border-green-500/20">
                  <span className="text-green-400 font-mono text-xs mb-2 block font-bold tracking-widest">THE OUTCOME</span>
                  <p className="text-white font-medium text-sm leading-relaxed">{servicesData[activeTab].outcome}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          ROI SAVINGS CALCULATOR
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-24 px-6 lg:px-24 border-y border-white/5 bg-black/45">
        <div className="max-w-5xl mx-auto">
          <ROICalculator />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 2: PROJECTS/CASE STUDIES SHOWCASE REEL
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-24 px-6 lg:px-24 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            className="mb-16"
          >
            <span className="text-xs font-mono text-[#00FFFF] uppercase tracking-widest block mb-2 font-semibold">Real Business Work</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
              SHIPPED CASE STUDIES
            </h2>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed mt-4 max-w-2xl font-light">
              Real platforms and WhatsApp systems deployed for clients. We focus on results, not just designs.
            </p>
          </motion.div>

          {/* Scrolling marquee */}
          <div className="overflow-hidden -mx-6 px-6">
            <motion.div
              className="flex gap-8 w-max group/marquee"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 25, ease: 'linear' } }}
              style={{ willChange: 'transform' }}
              whileHover={{ animationPlayState: 'paused' }}
            >
              {[...projectsData, ...projectsData].map((project, idx) => (
                <a
                  key={`${project.id}-${idx}`}
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative min-w-[320px] md:min-w-[400px] rounded-3xl overflow-hidden border border-white/10 bg-slate-900/50 backdrop-blur-sm hover:border-[#00FFFF]/40 transition-colors duration-500 flex-shrink-0"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                  </div>
                  <div className="p-6 relative z-10">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00FFFF] transition-colors duration-300">{project.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">{project.description}</p>
                    <span className="inline-block mt-4 text-[#00FFFF] text-xs font-semibold uppercase tracking-wider">
                      View Live Website ↗
                    </span>
                  </div>
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 4: TESTIMONIALS — star ratings + photos + businesses + outcomes
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-24 px-6 lg:px-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">CLIENT VOICES</h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto text-base md:text-lg">What real business owners say after automating with us.</p>
          </motion.div>

          <div className="overflow-hidden -mx-6 px-6 py-4">
            <motion.div
              className="flex gap-8 w-max group/marquee-testimonials"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 30, ease: 'linear' } }}
              style={{ willChange: 'transform' }}
              whileHover={{ animationPlayState: 'paused' }}
            >
              {[...testimonialsData, ...testimonialsData].map((t, idx) => (
                <div
                  key={idx}
                  className="relative p-8 w-[320px] md:w-[420px] flex-shrink-0 whitespace-normal rounded-3xl border border-white/10 bg-slate-900/30 backdrop-blur-sm hover:border-[#00FFFF]/30 transition-colors duration-500 flex flex-col justify-between"
                >
                  <div>
                    {/* Star rating */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg key={i} className={`w-5 h-5 ${i < Math.floor(t.rating) ? 'text-[#00FFFF]' : 'text-slate-700'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="text-slate-300 leading-relaxed mb-6 text-[14px] md:text-[15px] italic">"{t.review}"</p>
                  </div>

                  <div>
                    {/* Outcome Badge */}
                    <div className="inline-block px-3 py-1 mb-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold rounded-full">
                      🚀 Result: {t.result}
                    </div>

                    {/* User profile layout */}
                    <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 bg-slate-800 shrink-0">
                        <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <span className="text-white font-bold text-sm block">{t.name}</span>
                        <span className="text-slate-500 text-xs block">{t.business} • {t.city}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          PRICING ANCHOR SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-24 px-6 lg:px-24 border-t border-white/5 bg-slate-900/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00FFFF] font-mono text-xs uppercase tracking-widest block mb-2 font-bold">SIMPLE PRICING</span>
            <h2 className="text-4xl md:text-5xl font-black text-white">TRANSPARENT PLANS FOR LOCAL SMBs</h2>
            <p className="text-slate-400 mt-4 text-sm md:text-base max-w-xl mx-auto">High-value, automated reply systems priced cheaper than hiring a full-time assistant.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
            {/* Plan 1 */}
            <div className="glass-panel p-8 rounded-3xl flex flex-col justify-between border border-white/5 hover:border-white/10 transition-all duration-300">
              <div>
                <span className="text-slate-500 font-mono text-xs uppercase tracking-wider block mb-2 font-semibold">Local Shops & Academies</span>
                <h3 className="text-2xl font-bold text-white mb-4">WhatsApp Starter</h3>
                <div className="flex items-baseline gap-1 mb-6 border-b border-white/5 pb-6">
                  <span className="text-3xl font-black text-white">₹4,999</span>
                  <span className="text-slate-500 text-sm">/ month</span>
                </div>
                <ul className="space-y-3.5 text-sm text-slate-400 mb-8">
                  <li className="flex items-center gap-2">✓ Meta WhatsApp API Connection</li>
                  <li className="flex items-center gap-2">✓ Basic shop Q&A auto-replies</li>
                  <li className="flex items-center gap-2">✓ Click-to-WhatsApp Website button</li>
                  <li className="flex items-center gap-2">✓ Customer contact exports</li>
                  <li className="flex items-center gap-2">✓ WhatsApp text support</li>
                </ul>
              </div>
              <a href="https://wa.me/919442101823?text=Hi%20SaivaTech%2C%20I%20want%20to%20know%20more%20about%20the%20WhatsApp%20Growth%20Starter%20plan." className="w-full py-3 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl text-center text-sm block transition-colors">Select Starter</a>
            </div>

            {/* Plan 2 */}
            <div className="glass-panel p-8 rounded-3xl flex flex-col justify-between border border-[#00FFFF]/30 relative bg-gradient-to-b from-[#00FFFF]/5 to-transparent hover:border-[#00FFFF]/50 transition-all duration-300">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#00FFFF] text-black text-[10px] font-mono font-bold uppercase rounded-full tracking-widest">Most Popular</div>
              <div>
                <span className="text-[#00FFFF] font-mono text-xs uppercase tracking-wider block mb-2 font-bold">Growing Local Brands</span>
                <h3 className="text-2xl font-bold text-white mb-4">AI Chatbot Pro Suite</h3>
                <div className="flex items-baseline gap-1 mb-6 border-b border-white/5 pb-6">
                  <span className="text-4xl font-black text-[#00FFFF]">₹14,999</span>
                  <span className="text-slate-300 text-sm">/ month</span>
                </div>
                <ul className="space-y-3.5 text-sm text-slate-300 mb-8">
                  <li className="flex items-center gap-2 text-white">✓ Everything in Starter</li>
                  <li className="flex items-center gap-2 text-white">✓ Custom AI bot trained on your info</li>
                  <li className="flex items-center gap-2">✓ Automatic lead qualification flow</li>
                  <li className="flex items-center gap-2">✓ 3-page high-converting fast website</li>
                  <li className="flex items-center gap-2">✓ Auto follow-up triggers</li>
                  <li className="flex items-center gap-2">✓ Priority call & remote support</li>
                </ul>
              </div>
              <a href="https://wa.me/919442101823?text=Hi%20SaivaTech%2C%20I%20want%20to%20know%20more%20about%20the%20AI%20Chatbot%20Pro%20Suite." className="w-full py-4 bg-[#00FFFF] text-black font-bold rounded-xl text-center text-sm block transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(0,255,255,0.2)]">Choose AI Pro</a>
            </div>

            {/* Plan 3 */}
            <div className="glass-panel p-8 rounded-3xl flex flex-col justify-between border border-white/5 hover:border-white/10 transition-all duration-300">
              <div>
                <span className="text-slate-500 font-mono text-xs uppercase tracking-wider block mb-2 font-semibold">Larger Enterprises</span>
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise Custom</h3>
                <div className="flex items-baseline gap-1 mb-6 border-b border-white/5 pb-6">
                  <span className="text-3xl font-black text-white">Custom</span>
                </div>
                <ul className="space-y-3.5 text-sm text-slate-400 mb-8">
                  <li className="flex items-center gap-2">✓ Custom CRM/Billing integration</li>
                  <li className="flex items-center gap-2">✓ Multiple agents support dashboard</li>
                  <li className="flex items-center gap-2">✓ Unlimited monthly chats</li>
                  <li className="flex items-center gap-2">✓ Complete software suite build</li>
                  <li className="flex items-center gap-2">✓ Dedicated engineer support</li>
                </ul>
              </div>
              <a href="https://wa.me/919442101823?text=Hi%20SaivaTech%2C%20I%20want%20to%20know%20more%20about%20the%20Enterprise%20Custom%20plan." className="w-full py-3 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl text-center text-sm block transition-colors">Request Quote</a>
            </div>
          </div>
          
          {/* Guarantee */}
          <div className="mt-16 text-center max-w-2xl mx-auto p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/15">
            <span className="text-emerald-400 font-mono text-xs uppercase tracking-widest font-bold block mb-2">🛡️ 90-Day Money Back Guarantee</span>
            <p className="text-slate-300 text-sm leading-relaxed">
              If we build your automated replies and you do not see a clear improvement in response speed or customer leads within 90 days, we'll refund your setup fee. No questions asked.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          INLINE HOMEPAGE LEAD CAPTURE / AUDIT BOOKING
      ═══════════════════════════════════════════════════════════════ */}
      <section id="audit-booking" className="relative w-full py-24 px-6 lg:px-24 border-t border-white/5 bg-black/10">
        <div className="max-w-4xl mx-auto glass-panel p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden border border-white/10">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00FFFF]/5 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#00FFFF] block mb-2 font-semibold">Risk-Free Opportunity</span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">CLAIM YOUR FREE AUTOMATION AUDIT</h2>
            <p className="text-slate-400 text-sm md:text-base mt-3 max-w-md mx-auto">Fill out this 60-second form and we'll check your business leads process, completely free.</p>
          </div>
          
          <form onSubmit={handleHomepageFormSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            <div className="space-y-1">
              <label className="text-xs font-mono text-slate-400 uppercase tracking-widest ml-1 block">Your Name</label>
              <input required type="text" name="name" value={homeForm.name} onChange={handleHomeFormChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00FFFF]/50 transition-colors" placeholder="Karthik Raja" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-mono text-slate-400 uppercase tracking-widest ml-1 block">WhatsApp / Phone Number</label>
              <input required type="tel" name="phone" value={homeForm.phone} onChange={handleHomeFormChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00FFFF]/50 transition-colors" placeholder="+91 98765 43210" />
            </div>
            <div className="space-y-1 md:col-span-2">
              <label className="text-xs font-mono text-slate-400 uppercase tracking-widest ml-1 block">Business Name & Location</label>
              <input required type="text" name="business" value={homeForm.business} onChange={handleHomeFormChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00FFFF]/50 transition-colors" placeholder="Ayyappas Academy - Kovilpatti" />
            </div>
            <div className="space-y-1 md:col-span-2">
              <label className="text-xs font-mono text-slate-400 uppercase tracking-widest ml-1 block">Biggest Problem in Your Business</label>
              <textarea required rows={2} name="challenge" value={homeForm.challenge} onChange={handleHomeFormChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00FFFF]/50 transition-colors resize-none" placeholder="We miss inquiries that come in late at night or during busy hours..." />
            </div>
            <button type="submit" className="md:col-span-2 w-full py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl text-sm transition-transform active:scale-[0.98] shadow-[0_0_20px_rgba(37,211,102,0.2)] flex items-center justify-center gap-2">
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Submit Audit Request on WhatsApp</span>
            </button>
          </form>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FAQ SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-24 px-6 lg:px-24 border-t border-white/5 bg-slate-900/5">
        <FAQSection />
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FOOTER CTA — Rewritten copy, single action
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-32 lg:py-48 flex items-center justify-center border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] to-black -z-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square bg-[#00FFFF]/10 rounded-full blur-[150px] -z-10 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center px-6"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none">
            LET'S AUTOMATE <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b8cc] to-[#00FFFF]">YOUR GROWTH</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto mb-12">
            Your competitors take hours to reply on WhatsApp. Let's make sure you reply in 30 seconds and close the customer first.
          </p>

          <a
            href="https://wa.me/919442101823?text=Hi%20SaivaTech%2C%20I%20want%20to%20get%20started%20with%20WhatsApp%20Automation.%20Let%27s%20schedule%20a%20strategy%20call."
            className="inline-flex items-center justify-center px-10 py-5 bg-[#00FFFF] text-black font-bold text-lg rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_35px_rgba(0,255,255,0.3)]"
          >
            Start a Conversation Now
          </a>
        </motion.div>
      </section>

    </div>
  );
}
