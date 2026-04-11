import { Metadata } from 'next';
import projectsData from '@/data/projects.json';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Projects Portfolio | SaivaTech',
  description: 'View the stunning, high-converting websites and systems built by SaivaTech.',
};

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Proven <span className="text-gradient">Results</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mb-16">
          A showcase of digital platforms we've built for ambitious businesses. No mockups, just real-world impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div key={project.id} className="card-3d-wrap">
              <div className="card-3d-content bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden group hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] hover:border-[#00FFFF] transition-all duration-300">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-slate-950/20" />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-3">{project.title}</h2>
                  <p className="text-slate-400 line-clamp-3 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <a 
                    href={project.liveLink} 
                    className="inline-flex items-center text-sm font-semibold text-[#00FFFF] hover:text-white transition-colors"
                  >
                    View Live Project <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
