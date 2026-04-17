'use client';

import { motion } from 'framer-motion';
import servicesData from '@/data/services.json';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 text-center mb-24">
         <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6 text-white"
         >
            SOLUTIONS THAT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b8cc] to-[#00FFFF]">SCALE</span>
         </motion.h1>
         <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400"
         >
            Comprehensive digital stacks designed to eliminate human bottlenecks.
         </motion.p>
      </div>

      <div className="max-w-6xl mx-auto px-6 space-y-32">
         {servicesData.map((service, idx) => (
            <div id={service.id} key={service.id} className="relative scroll-mt-32">
               {/* Ambient Glow */}
               <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] aspect-square rounded-full blur-[100px] -z-10 opacity-20 ${idx % 2 === 0 ? 'bg-[#00FFFF]' : 'bg-[#00b8cc]'}`} />
               
               <div className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Visual Node */}
                  <motion.div 
                     initial={{ opacity: 0, scale: 0.9 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     className="w-full lg:w-1/2 aspect-square glass-panel rounded-[3rem] p-12 flex flex-col justify-between border-white/10 relative overflow-hidden group"
                  >
                     <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-0 pointer-events-none" />
                     <h3 className="text-4xl md:text-5xl font-bold text-white relative z-10 leading-tight">
                        {service.title}
                     </h3>
                     <p className="text-slate-400 text-lg relative z-10">
                        {service.description}
                     </p>
                  </motion.div>

                  {/* Logic Breakdown */}
                  <div className="w-full lg:w-1/2 flex flex-col space-y-8">
                     <motion.div 
                        initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-black/40 border-l-2 border-red-500/50 p-6 rounded-r-xl"
                     >
                        <span className="text-red-400 font-mono text-xs mb-2 block uppercase tracking-widest">The Problem</span>
                        <p className="text-slate-300">{service.problem}</p>
                     </motion.div>

                     <motion.div 
                        initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-black/40 border-l-2 border-[#00FFFF]/50 p-6 rounded-r-xl"
                     >
                        <span className="text-[#00FFFF] font-mono text-xs mb-2 block uppercase tracking-widest">The Solution</span>
                        <p className="text-slate-300">{service.solution}</p>
                     </motion.div>

                     <motion.div 
                        initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-black/40 border-l-2 border-green-500/50 p-6 rounded-r-xl"
                     >
                        <span className="text-green-400 font-mono text-xs mb-2 block uppercase tracking-widest">The Outcome</span>
                        <p className="text-white font-medium">{service.outcome}</p>
                     </motion.div>
                     
                     <div className="pt-6">
                        <a href="https://wa.me/919442101823" className="text-[#00FFFF] hover:text-white font-mono text-sm tracking-widest uppercase transition-colors flex items-center gap-2 group">
                           Initialize Module <span className="transform group-hover:translate-x-2 transition-transform">→</span>
                        </a>
                     </div>
                  </div>

               </div>
            </div>
         ))}
      </div>

      <div className="mt-32 max-w-4xl mx-auto px-6 text-center">
         <div className="glass-panel rounded-3xl p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-[#00FFFF]/5 z-0" />
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 relative z-10">Stop Scaling Human Effort</h2>
            <p className="text-slate-400 mb-10 text-lg relative z-10">Software scales infinitely. Implement your automated system today.</p>
            <Link href="/contact" className="relative z-10 inline-block px-8 py-4 bg-[#00FFFF] text-black font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform duration-300">
               Book Audit Call
            </Link>
         </div>
      </div>
    </div>
  );
}
