'use client';

import { motion } from 'framer-motion';
import projectsData from '@/data/projects.json';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-24"
         >
            <span className="text-[#00FFFF] font-mono text-sm tracking-widest uppercase block mb-4">Deployed Projects</span>
            <h1 className="text-5xl md:text-7xl font-black text-white">CASE STUDIES</h1>
         </motion.div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {projectsData.map((project, idx) => (
               <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                  className="group relative"
               >
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="block relative w-full aspect-[4/3] rounded-3xl overflow-hidden glass-panel group-hover:border-[#00FFFF]/50 transition-all duration-700">
                     {/* Image Display */}
                     <div className="absolute inset-0 bg-slate-900 group-hover:scale-105 transition-transform duration-[1000ms] ease-out">
                         <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                     </div>
                     
                     <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent opacity-80" />
                     
                     <div className="absolute bottom-0 left-0 p-8 w-full">
                        <div className="flex gap-2 mb-4">
                           {project.tags.map(tag => (
                              <span key={tag} className="text-[10px] font-mono text-[#00FFFF] border border-[#00FFFF]/30 bg-black/50 px-3 py-1 rounded-full uppercase tracking-widest">
                                 {tag}
                              </span>
                           ))}
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-slate-400 line-clamp-2 mb-4">{project.description}</p>
                        <div className="text-white font-mono text-xs border-b border-white/20 inline-block pb-1 uppercase tracking-widest group-hover:border-[#00FFFF] group-hover:text-[#00FFFF] transition-colors">
                           View Deployment →
                        </div>
                     </div>
                  </a>
               </motion.div>
            ))}
         </div>
      </div>
    </div>
  );
}
