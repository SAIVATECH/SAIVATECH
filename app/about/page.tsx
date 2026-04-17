'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import teamData from '@/data/team.json';

export default function AboutPage() {
   return (
      <div className="min-h-screen pt-32 pb-24 px-6 md:px-12">
         <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               className="text-center mb-24"
            >
               <h1 className="text-5xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00FFFF]">
                  ARCHITECTING THE FUTURE
               </h1>
               <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
                  SaivaTech was built on a singular premise: most businesses are operating at 10% of their digital capacity. We engineer the systems to unlock the remaining 90%.
               </p>
            </motion.div>

            {/* Mission & Vision grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
               <motion.div
                  whileHover={{ y: -5 }}
                  className="glass-panel p-10 rounded-3xl"
               >
                  <span className="text-[#00FFFF] font-mono text-sm tracking-widest uppercase block mb-4">Our Mission</span>
                  <h3 className="text-3xl font-bold text-white mb-6">Engineering Dominance</h3>
                  <p className="text-slate-400 leading-relaxed text-lg">
                     Our mission is not to build websites. Our mission is to deploy automated ecosystems that actively lower customer acquisition costs while multiplying conversion rates through AI logic and high-end aesthetics.
                  </p>
               </motion.div>

               <motion.div
                  whileHover={{ y: -5 }}
                  className="glass-panel p-10 rounded-3xl"
               >
                  <span className="text-[#00b8cc] font-mono text-sm tracking-widest uppercase block mb-4">Our Vision</span>
                  <h3 className="text-3xl font-bold text-white mb-6">The Automated Enterprise</h3>
                  <p className="text-slate-400 leading-relaxed text-lg">
                     We visualize a local business landscape where operations, lead generation, and customer support are handled by frictionless silicon systems—allowing founders to scale infinitely.
                  </p>
               </motion.div>
            </div>

            {/* Founder / Team */}
            <div className="mb-20">
               <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">CORE ARCHITECTS</h2>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {teamData.map((member, idx) => (
                     <motion.div
                        key={member.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.6 }}
                        className="group relative rounded-3xl overflow-hidden glass-panel border border-white/5 hover:border-[#00FFFF]/30 transition-all duration-500"
                     >
                        {/* Replace with actual images or placeholders */}
                        <div className="w-full aspect-square bg-slate-800 relative overflow-hidden group">
                           <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10" />
                           <img src={member.image} alt={member.name} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 mix-blend-luminosity hover:mix-blend-normal" />
                        </div>
                        <div className="p-8 relative z-20">
                           <h4 className="text-5xl font-bold text-white mb-1 group-hover:text-[#00FFFF] transition-colors">{member.name}</h4>
                           <span className="text-[#00b8cc] font-mono text-xl uppercase tracking-widest block mb-4">{member.role}</span>
                           <p className="text-slate-400 text-lg leading-relaxed">{member.bio}</p>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}
