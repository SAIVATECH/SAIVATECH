'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Data imports
import projectsData from '@/data/projects.json';
import servicesData from '@/data/services.json';
import testimonialsData from '@/data/testimonials.json';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  // Parallax elements
  const heroTextY = useTransform(scrollYProgress, [0, 0.2], ['0%', '50%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  const [activeTab, setActiveTab] = useState(0);

  // Split text for hero animation
  const titleText = "EMPOWERING BUSINESSES WITH AI & AUTOMATION".split(" ");

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden bg-[#020617] text-white">

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1: HERO — Single CTA, no dual-button pattern
          (Addresses Point 2 & Point 6)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full h-[120vh] min-h-[900px] flex items-center justify-center isolate px-6">
        {/* Deep 3D background elements */}
        <div className="absolute inset-0 -z-20 bg-[url('/noise.png')] opacity-20 pointer-events-none mix-blend-overlay" />

        {/* Floating abstract glowing objects */}
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '-80%']) }}
          className="absolute top-1/4 right-[10%] w-[500px] h-[500px] bg-gradient-to-br from-[#00FFFF]/20 to-transparent rounded-full blur-[100px] -z-10"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '60%']) }}
          className="absolute bottom-1/4 left-[10%] w-[300px] h-[300px] bg-gradient-to-tr from-[#00b8cc]/30 to-transparent rounded-full blur-[80px] -z-10"
        />

        <motion.div
          style={{ y: heroTextY, opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 flex flex-col items-center text-center max-w-6xl mx-auto w-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <span className="text-xs font-semibold tracking-[0.2em] text-[#00FFFF] uppercase inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00FFFF] animate-pulse" />
              Elite Software, AI & Automation Agency in TamilNadu
            </span>
          </motion.div>

          <h1 className="text-[clamp(2.5rem,6vw,7rem)] font-black leading-[0.9] tracking-tighter text-white mb-8 perspective-[1000px]">
            {titleText.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, rotateX: -90, y: 40 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                transition={{ duration: 1, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
                className={`inline-block mr-[2vw] ${word === 'AI' || word === 'AUTOMATION' ? 'text-transparent bg-clip-text bg-gradient-to-br from-white to-[#00FFFF]' : ''}`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="max-w-2xl text-lg md:text-2xl font-light text-slate-400 mb-12"
          >
            We deploy bespoke web applications, AI conversational agents, and WhatsApp funnels designed strictly to shatter conversion metrics and scale your operations.
          </motion.p>

          {/* SINGLE CTA — no dual button pattern */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col items-center"
          >
            <a
             href="https://wa.me/919442101823?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20services."
              className="group relative px-10 py-5 bg-[#00FFFF] text-black font-bold text-lg rounded-full overflow-hidden hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(0,255,255,0.2)]"
            >
              <div className="absolute inset-0 w-full h-full bg-white/30 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
              <span className="relative z-10">Talk to Us on WhatsApp</span>
            </a>
            <span className="text-slate-500 text-sm mt-4 font-mono tracking-wide">Typically replies within 5 minutes</span>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-slate-500"
        >
          <span className="text-xs tracking-[0.2em] uppercase font-mono">Scroll Sequence</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-slate-500 to-transparent" />
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 2: PROJECTS SHOWCASE REEL — replaces Process section
          (Addresses Point 1 & Point 3 — no numbered steps, unique section)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-32 px-6 lg:px-24 border-t border-white/5 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              SHIPPED & LIVE
            </h2>
            <p className="text-xl text-slate-400 font-light leading-relaxed mt-6 max-w-2xl">
              Real products, real businesses, real results. Here's what we've engineered and deployed for clients across Tamil Nadu.
            </p>
          </motion.div>

          {/* Auto-scrolling marquee — pauses on hover */}
          <div className="overflow-hidden -mx-6 px-6">
            <motion.div
              className="flex gap-8 w-max group/marquee"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 25, ease: 'linear' } }}
              style={{ willChange: 'transform' }}
              whileHover={{ animationPlayState: 'paused' }}
            >
              {/* Duplicate array for seamless loop */}
              {[...projectsData, ...projectsData].map((project, idx) => (
                <a
                  key={`${project.id}-${idx}`}
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative min-w-[340px] md:min-w-[420px] rounded-3xl overflow-hidden border border-white/10 bg-slate-900/50 backdrop-blur-sm hover:border-[#00FFFF]/40 transition-colors duration-500 flex-shrink-0 [.group\\/marquee:hover_&]:![animation-play-state:paused]"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                  </div>
                  <div className="p-6 relative z-10">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00FFFF] transition-colors duration-300">{project.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
                    <span className="inline-block mt-4 text-[#00FFFF] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Live ↗
                    </span>
                  </div>
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 3: SERVICES — Tab-based, no numbering, no arrows
          (Addresses Point 7 — completely different pattern)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-32 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            className="mb-20 text-center"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">OUR MODULES</h2>
            <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">Replacing fragmented solutions with synchronized digital ecosystems.</p>
          </motion.div>

          {/* Tab navigation — no numbers, no arrows */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {servicesData.map((service, idx) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border ${
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
              {/* Background glow */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00FFFF]/5 rounded-full blur-[100px] -z-10" />

              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{servicesData[activeTab].title}</h3>
              <p className="text-lg text-slate-300 mb-10 max-w-3xl">{servicesData[activeTab].description}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/20">
                  <span className="text-red-400 font-mono text-xs mb-2 block">THE PROBLEM</span>
                  <p className="text-slate-300 text-sm leading-relaxed">{servicesData[activeTab].problem}</p>
                </div>
                <div className="p-6 rounded-2xl bg-[#00FFFF]/5 border border-[#00FFFF]/20">
                  <span className="text-[#00FFFF] font-mono text-xs mb-2 block">OUR SOLUTION</span>
                  <p className="text-slate-300 text-sm leading-relaxed">{servicesData[activeTab].solution}</p>
                </div>
                <div className="p-6 rounded-2xl bg-green-500/5 border border-green-500/20">
                  <span className="text-green-400 font-mono text-xs mb-2 block">THE OUTCOME</span>
                  <p className="text-white font-medium text-sm leading-relaxed">{servicesData[activeTab].outcome}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 4: TESTIMONIALS — Star-rating carousel, no role/location
          (Addresses Point 5 — completely different format)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-32 px-6 lg:px-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            className="mb-16 text-center"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">CLIENT VOICES</h2>
            <p className="text-slate-400 mt-6 max-w-xl mx-auto text-lg">What our partners say after going live.</p>
          </motion.div>

          <div className="overflow-hidden -mx-6 px-6 py-4">
            <motion.div
              className="flex gap-8 w-max group/marquee-testimonials"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 30, ease: 'linear' } }}
              style={{ willChange: 'transform' }}
              whileHover={{ animationPlayState: 'paused' }}
            >
              {[...testimonialsData, ...testimonialsData, ...testimonialsData].map((t, idx) => (
                <div
                  key={idx}
                  className="relative p-8 w-[320px] md:w-[400px] flex-shrink-0 whitespace-normal rounded-3xl border border-white/10 bg-slate-900/30 backdrop-blur-sm hover:border-[#00FFFF]/30 transition-colors duration-500 [.group\/marquee-testimonials:hover_&]:![animation-play-state:paused]"
                >
                  {/* Star rating — prominent, top of card */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className={`w-5 h-5 ${i < Math.floor(t.rating) ? 'text-[#00FFFF]' : 'text-slate-700'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Review text */}
                  <p className="text-slate-300 leading-relaxed mb-6 text-[15px]">"{t.review}"</p>

                  {/* First name only */}
                  <span className="text-white font-semibold text-sm">— {t.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 5: CTA — Rewritten copy, single action
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-32 lg:py-48 flex items-center justify-center border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] to-black -z-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square bg-[#00FFFF]/10 rounded-full blur-[150px] -z-10" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center px-6"
        >
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
            LET'S BUILD <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b8cc] to-[#00FFFF]">SOMETHING GREAT</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-xl mx-auto mb-12">
            Your next customer is searching right now. Let's make sure they find you first.
          </p>

          <a
            href="https://wa.me/919442101823?text=Hi%2C%20I%27m%20interested%20in%20working%20with%20you.%0A%0ABusiness%20type%3A%20____%0ACurrent%20monthly%20revenue%3A%20____%0AGoal%3A%20____"
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-black font-bold text-xl rounded-full hover:bg-[#00FFFF] transition-colors duration-500 group shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(0,255,255,0.3)]"
          >
            Start a Conversation
          </a>
        </motion.div>
      </section>

    </div>
  );
}
