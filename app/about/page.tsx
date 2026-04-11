import { Metadata } from 'next';
import Image from 'next/image';
import founderImg from '../../data/image/founder.jpeg';
export const metadata: Metadata = {
  title: 'About SaivaTech | Software Agency in Kovilpatti',
  description: 'Learn about SaivaTech, our mission to help small businesses grow through digital transformation, and our commitment to Kovilpatti.',
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">
          Pioneering Digital <br className="hidden md:block"/>
          <span className="text-gradient">Growth in Kovilpatti</span>
        </h1>
        
        <div className="prose prose-invert prose-lg text-slate-400 mt-12 bg-slate-900/50 p-8 rounded-3xl border border-slate-800 shadow-2xl">
          <p className="lead text-xl text-slate-300 font-medium mb-6">
            SaivaTech was founded with a singular mission: to empower local businesses, coaching institutes, and startup founders with the same digital firepower used by enterprise giants.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Our Story</h2>
          <p className="mb-6 leading-relaxed">
            Starting in Kovilpatti, we noticed a massive gap between the ambition of local business owners and the quality of their digital presence. Too many "agencies" were delivering slow, bloated WordPress sites that didn't drive actual revenue. We decided to change that by introducing high-performance, conversion-optimized Next.js web applications to the local market.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Mission & Vision</h2>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <span className="text-primary-light font-bold mr-3 mt-0.5">•</span>
              <span><strong>Mission:</strong> To accelerate business growth for our clients by building websites that function as 24/7 automated sales machines.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-light font-bold mr-3 mt-0.5">•</span>
              <span><strong>Vision:</strong> To become the most trusted and results-driven software agency in South Tamil Nadu, known for uncompromised quality and speed.</span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Why We Focus on Small Businesses</h2>
          <p className="leading-relaxed">
            We believe that local businesses are the backbone of the economy. By providing affordable yet premium AI automation and web development services, we help level the playing field. When you grow, Kovilpatti grows.
          </p>

          <h2 className="text-2xl font-bold text-white mt-16 mb-8 text-center md:text-left">Meet the Founder</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-8 bg-slate-950/80 rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden group hover:border-[#00FFFF]/30 transition-colors duration-300">
            <div className="absolute inset-0 bg-primary-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-full overflow-hidden relative border-4 border-slate-800 shadow-[0_0_20px_rgba(0,255,255,0.1)] group-hover:border-[#00FFFF]/50 transition-colors duration-300">
              <Image src={founderImg} alt="Durai Gajendran M" fill className="object-cover" />
            </div>
            <div className="text-center md:text-left relative z-10">
              <h3 className="text-3xl font-bold text-white mb-1">Durai Gajendran M</h3>
              <p className="text-[#00FFFF] font-medium mb-6">Founder & CEO, SaivaTech</p>
              <p className="text-slate-400 leading-relaxed max-w-2xl">
                Holding a deep passion for technology and automation, SaivaTech was established to bring world-class digital solutions directly to Kovilpatti. The vision is to bridge the gap between local ambition and digital execution, ensuring that every small business, coaching institute, and startup has the exact same technological advantages as enterprise giants.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
