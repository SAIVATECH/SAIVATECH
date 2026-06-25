'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactClient() {
  const [formData, setFormData] = useState({ name: '', details: '', message: '' });

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Request from SaivaTech Website*%0A%0A*Name:* ${formData.name}%0A*Contact:* ${formData.details}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/919442101823?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 flex items-center relative overflow-hidden isolate">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#00FFFF]/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#00b8cc]/10 rounded-full blur-[150px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
         
         <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
         >
            <span className="text-[#00FFFF] font-mono text-sm tracking-widest uppercase block mb-4">INITIATE CONNECTION</span>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
               LET'S BUILD <br/>YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b8cc] to-[#00FFFF]">SYSTEM.</span>
            </h1>
            <p className="text-xl text-slate-400 mb-12 max-w-lg font-light leading-relaxed">
               Drop the old way of doing business. Connect directly with our lead architect to structure an automated pipeline for your company.
            </p>

            <div className="space-y-8">
               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 text-[#00FFFF]">
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                     <h4 className="text-white font-medium mb-1">Headquarters (Node 01)</h4>
                     <p className="text-slate-400">301/A2, Nadarajapuram, Kovilpatti<br/>Tamil Nadu 628502</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 text-[#00FFFF]">
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                     <h4 className="text-white font-medium mb-1">Direct Line</h4>
                     <p className="text-slate-400">+91 94421 01823</p>
                  </div>
               </div>
            </div>
         </motion.div>

         <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-panel p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden"
         >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00FFFF]/10 rounded-full blur-[80px]" />
            <h3 className="text-3xl font-bold text-white mb-2 relative z-10">Direct Priority Access</h3>
            <p className="text-slate-400 mb-8 text-sm relative z-10 font-light">Fill out this secure form mapping directly to our WhatsApp API to instantly speak with our engineers.</p>
            
            <form onSubmit={handleWhatsAppSubmit} className="relative z-10 flex flex-col gap-5">
               <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Name / Organization</label>
                  <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00FFFF]/50 transition-colors" placeholder="Karthik Raja" />
               </div>
               <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Email or Phone</label>
                  <input required value={formData.details} onChange={e => setFormData({...formData, details: e.target.value})} type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00FFFF]/50 transition-colors" placeholder="+91 98765 43210" />
               </div>
               <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Project Message</label>
                  <textarea required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00FFFF]/50 transition-colors resize-none" placeholder="Looking to build an automated funnel for my coaching academy..." />
               </div>

               <button type="submit" className="group w-full flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold text-[15px] py-4 mt-2 rounded-xl hover:bg-[#20bd5a] transition-colors shadow-[0_0_20px_rgba(37,211,102,0.2)]">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Send Request via WhatsApp
               </button>
            </form>
         </motion.div>
      </div>
    </div>
  );
}
