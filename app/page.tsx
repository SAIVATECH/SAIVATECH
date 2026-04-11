'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import projectsData from '@/data/projects.json';
import servicesData from '@/data/services.json';
import testimonialsData from '@/data/testimonials.json';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  return (
    <div className="pt-20">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="inline-block py-1 px-3 rounded-full bg-slate-800/50 border border-slate-700 text-sm font-medium mb-8"
          >
            🔥 Driving Digital Success in Kovilpatti & Beyond
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
          >
            Turn Your Website Into An<br className="hidden md:block" />
            <span className="text-gradient">Automated Sales Machine</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            We help coaching institutes, local businesses, and startups scale exponentially with premium web development and AI automation solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-accent text-white font-semibold rounded-full hover:shadow-[0_0_25px_rgba(14,165,233,0.5)] transition-all flex items-center justify-center group"
            >
              Book Free Strategy Call
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/919442101823"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-slate-800 text-white font-semibold rounded-full hover:bg-slate-700 transition-colors border border-slate-700 flex items-center justify-center"
            >
              Chat on WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="flex -space-x-3 mb-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 overflow-hidden relative">
                  <Image src={`https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=100&h=100&auto=format&fit=crop`} alt="avatar" fill className="object-cover" />
                </div>
              ))}
            </div>
            <div className="flex items-center text-sm font-medium">
              <span className="flex text-yellow-500 mr-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </span>
              <span className="text-slate-300">Trusted by 50+ Local Businesses</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What We Do Best</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">High-impact solutions designed exclusively for growth and operational efficiency.</p>
          </motion.div>

          <motion.div
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id} variants={fadeIn}
                className="card-3d-wrap"
              >
                <div className="card-3d-content h-full bg-slate-950/80 backdrop-blur-md border border-slate-800 p-8 rounded-2xl relative overflow-hidden group hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] hover:border-[#00FFFF] transition-all duration-300">
                  <div className="w-12 h-12 bg-primary-dark/20 rounded-lg flex items-center justify-center mb-6 text-[#00FFFF]">
                    <span className="font-bold text-xl">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed mb-6">{service.description}</p>
                  <Link href={`/services#${service.id}`} className="inline-flex items-center text-sm font-semibold text-[#00FFFF] hover:text-white transition-colors">
                    Learn more <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#00FFFF]/5 rounded-bl-full -z-10" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. PROJECTS SHOWCASE */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Work</h2>
              <p className="text-slate-400 text-lg">See how we've transformed businesses with custom digital solutions.</p>
            </motion.div>
            <Link href="/projects" className="mt-6 md:mt-0 text-[#00FFFF] hover:text-white font-medium flex items-center transition-colors">
              View All Projects <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.slice(0, 4).map((project) => (
              <motion.a
                key={project.id}
                href={project.liveLink}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                className="card-3d-wrap"
              >
                <div className="card-3d-content block relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl group hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] hover:border-[#00FFFF] transition-all duration-300">
                  <div className="relative h-72 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent opacity-80" />
                  </div>
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-300 line-clamp-2">{project.description}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US & TESTIMONIALS */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Partner With SaivaTech?</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                We don't just build websites; we engineer growth platforms. Our focus is strictly on maximizing your return on investment through speed, design, and conversion psychology.
              </p>

              <ul className="space-y-5">
                {[
                  "Lightning-Fast Delivery Without Compromising Quality",
                  "Business-Focused Solutions Tailored for Conversions",
                  "Dedicated Local Support & Transparent Communication",
                  "Affordable Pricing for Startups and Institutes"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary-light mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <div className="space-y-6">
              {testimonialsData.map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-xl hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] hover:border-[#00FFFF] transition-all duration-300"
                >
                  <div className="flex text-yellow-500 mb-3">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-slate-300 mb-4 italic">"{testimonial.review}"</p>
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-gradient opacity-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Ready to Dominate Your Local Market?
          </motion.h2>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="text-xl text-slate-400 mb-10"
          >
            Limited slots available for this month's web strategy sessions.
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <Link
              href="/contact"
              className="inline-flex px-10 py-5 bg-gradient-accent text-white text-lg font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(14,165,233,0.6)]"
            >
              Book Free Strategy Call Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
