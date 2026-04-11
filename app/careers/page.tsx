'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Send, CheckCircle2 } from 'lucide-react';
import careersData from '@/data/careers.json';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function CareersPage() {
  const activeJobs = careersData.filter(job => job.isActive);

  return (
    <div className="pt-24 pb-20 min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00FFFF]/30 bg-[#00FFFF]/10 text-[#00FFFF] text-sm font-medium mb-6">
            <Briefcase size={16} />
            <span>Join Our Team</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Build the Future of <span className="text-[#00FFFF]">Digital Impact</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed mb-8">
            We are always on the lookout for passionate folks who want to bridge the technology gap for local businesses and startups. Join SaivaTech and do the best work of your career.
          </p>
        </motion.div>
      </section>

      {/* Open Positions */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Open Roles</h2>
          <p className="text-slate-400">Discover your next opportunity below.</p>
        </motion.div>

        {activeJobs.length === 0 ? (
          <div className="text-center py-20 bg-slate-900/50 border border-slate-800 rounded-3xl backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-2">No Open Roles Right Now</h3>
            <p className="text-slate-400 mb-6">We're fully staffed at the moment, but we'd still love to hear from you!</p>
            <a 
              href="https://wa.me/919442101823?text=Hi%20SaivaTech%20Team!%20I%20would%20like%20to%20send%20an%20open%20application%20for%20future%20roles." 
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#00FFFF] text-slate-950 font-bold rounded-full hover:bg-white transition-colors"
            >
              <Send size={18} /> Send Open Application
            </a>
          </div>
        ) : (
          <div className="space-y-6">
            {activeJobs.map((job) => (
              <motion.div key={job.id} variants={fadeIn} className="card-3d-wrap">
                <div className="card-3d-content bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 hover:border-[#00FFFF]/50 transition-colors w-full text-left relative overflow-hidden group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-6 relative z-10">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
                        <span className="flex items-center gap-1.5"><MapPin size={16} className="text-[#00FFFF]"/> {job.location}</span>
                        <span className="hidden sm:block">•</span>
                        <span className="px-3 py-1 bg-slate-800 rounded-full">{job.type}</span>
                        <span className="hidden sm:block">•</span>
                        <span className="px-3 py-1 bg-slate-800 rounded-full">{job.department}</span>
                      </div>
                    </div>
                    
                    <a 
                      href={`https://wa.me/919442101823?text=Hi%20SaivaTech%20Team!%20I%20would%20like%20to%20apply%20for%20the%20${encodeURIComponent(job.title)}%20position.`}
                      target="_blank" rel="noopener noreferrer"
                      className="whitespace-nowrap inline-flex items-center justify-center gap-2 px-8 py-3 bg-slate-800 hover:bg-[#00FFFF] text-white hover:text-slate-950 font-bold rounded-full border border-slate-700 hover:border-transparent transition-all shadow-none hover:shadow-[0_0_20px_rgba(0,255,255,0.4)]"
                    >
                      Apply via WhatsApp <Send size={18} />
                    </a>
                  </div>

                  <div className="relative z-10 border-t border-slate-800/50 pt-6 mt-6">
                    <p className="text-slate-300 leading-relaxed mb-6">{job.description}</p>
                    <h4 className="text-lg font-semibold text-white mb-4">Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-400">
                          <CheckCircle2 size={20} className="text-[#00FFFF] flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#00FFFF]/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#00FFFF]/10 transition-colors duration-500"/>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
