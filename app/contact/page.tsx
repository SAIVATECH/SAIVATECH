'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const text = `Hello SaivaTech!
New Contact Form Submission:
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Message:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/919442101823?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: '', phone: '', message: '' });
    
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
              Let's Build It <span className="text-gradient">Together</span>
            </h1>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed">
              Ready to transform your business? Drop us a line, or better yet, chat with us directly on WhatsApp for an immediate response.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-dark/20 rounded-xl flex items-center justify-center text-primary-light mr-6 border border-primary-dark/30">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Call Us</h3>
                  <p className="text-slate-400 font-medium">+91 94421 01823</p>
                  <p className="text-sm text-slate-500 mt-1">Available Mon-Sat, 9AM-7PM</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-dark/20 rounded-xl flex items-center justify-center text-primary-light mr-6 border border-primary-dark/30">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Visit Us</h3>
                  <p className="text-slate-400 font-medium leading-relaxed">Kovilpatti, Tamil Nadu<br />India</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-dark/20 rounded-xl flex items-center justify-center text-primary-light mr-6 border border-primary-dark/30">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Email Us</h3>
                  <p className="text-slate-400 font-medium">hello@saivatech.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-slate-900 border border-slate-800 rounded-2xl">
              <h3 className="text-white font-bold mb-2">Want a faster response?</h3>
              <a 
                href="https://wa.me/919442101823" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-green-400 font-medium hover:text-green-300 transition-colors inline-flex items-center"
              >
                Chat on WhatsApp →
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 p-8 md:p-10 rounded-3xl shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-8">Send a Message</h2>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-transparent transition-all"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-400 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-transparent transition-all"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Tell us about your project</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-transparent transition-all resize-none"
                    placeholder="We need a high-converting website for our coaching institute..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group bg-gradient-accent text-white font-bold rounded-xl px-4 py-4 hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending Request...' : 'Get Free Consultation'}
                  {!isSubmitting && <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />}
                </button>
                
                {isSuccess && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 text-sm text-center font-medium mt-4">
                    Message sent successfully! We'll be in touch shortly.
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}
