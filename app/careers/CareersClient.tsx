'use client';

import { motion } from 'framer-motion';
import careersData from '@/data/careers.json';

export default function CareersClient() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
         >
            <span className="text-[#00FFFF] font-mono text-sm tracking-widest uppercase block mb-4">JOIN THE COLLECTIVE</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">CAREERS</h1>
            <p className="text-slate-400 text-lg font-light leading-relaxed">
              We are always looking for high-agency individuals to help us build the next generation of automated internet infrastructure.
            </p>
         </motion.div>

         <div className="space-y-6">
            {careersData.map((job, idx) => (
               <motion.div 
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-panel p-8 rounded-3xl group hover:border-[#00FFFF]/50 transition-colors duration-500 relative overflow-hidden"
               >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00FFFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative z-10 gap-6">
                     <div>
                        <div className="flex gap-3 mb-3">
                           <span className="text-[10px] font-mono text-slate-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full uppercase">{job.type}</span>
                           <span className="text-[10px] font-mono text-slate-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full uppercase">{job.location}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">{job.description}</p>
                     </div>
                     <div className="shrink-0 w-full md:w-auto">
                        <a 
                           href={`https://wa.me/919442101823?text=${encodeURIComponent('Hello SaivaTech, I am interested in applying for the ' + job.title + ' role.')}`} 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="inline-block w-full md:w-auto text-center px-6 py-3 bg-white/5 hover:bg-[#00FFFF] border border-white/10 hover:border-[#00FFFF] text-white hover:text-black font-bold uppercase tracking-widest text-xs rounded-full transition-all duration-300"
                        >
                           Apply Now
                        </a>
                     </div>
                  </div>
               </motion.div>
            ))}
         </div>
      </div>
    </div>
  );
}
