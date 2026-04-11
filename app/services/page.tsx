import { Metadata } from 'next';
import servicesData from '@/data/services.json';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services | SaivaTech',
  description: 'Explore our tailored web development, AI automation, and SEO services.',
};

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Solutions That <span className="text-gradient">Scale</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mb-16">
          We don't sell templates. We architect custom solutions designed to solve your specific business bottlenecks.
        </p>

        <div className="space-y-12">
          {servicesData.map((service, i) => (
            <div key={service.id} id={service.id} className="card-3d-wrap">
              <div 
                className={`card-3d-content flex flex-col md:flex-row gap-12 items-center bg-slate-900/80 backdrop-blur-sm p-10 rounded-3xl border border-slate-800 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''} group hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] hover:border-[#00FFFF] transition-all duration-300`}
              >
                <div className="flex-1 space-y-6">
                  <div className="inline-block px-4 py-1 rounded-full bg-primary-dark/20 text-[#00FFFF] font-medium text-sm border border-primary-dark/30">
                    {service.title} Package
                  </div>
                  <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-red-400 mb-2">The Problem:</h3>
                      <p className="text-slate-400">Outdated, slow websites or manual processes that frustrate your customers and waste your team's time.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-green-400 mb-2">The SaivaTech Solution:</h3>
                      <p className="text-slate-300 leading-relaxed font-medium">{service.description}</p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-slate-400 font-medium text-sm">Custom Pricing Available</span>
                    <Link href="/contact" className="px-6 py-2.5 bg-primary text-slate-900 font-bold rounded-full hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                      Get a Quote
                    </Link>
                  </div>
                </div>
                <div className="flex-1 w-full bg-slate-950 rounded-2xl aspect-video flex items-center justify-center border border-slate-800 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-primary-gradient opacity-10" />
                    <div className="text-center z-10">
                        <span className="text-6xl mb-4 block">🚀</span>
                        <p className="text-slate-400 font-medium">High-Performance Delivery</p>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center bg-primary-dark/10 p-12 rounded-3xl border border-primary-dark/30">
          <h2 className="text-3xl font-bold mb-6">Need a custom feature?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">We build completely bespoke internal tools and web apps tailored to your operational needs.</p>
          <a href="https://wa.me/919442101823" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary-light font-bold hover:text-white transition-colors">
            Chat with our engineers <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
