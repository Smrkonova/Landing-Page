import Link from 'next/link';
import Image from 'next/image';
import { projectsData } from '@/data/projects';

export const metadata = {
  title: 'Projects | Smrkonova',
  description: 'View our data-driven UX case studies from global projects.',
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-black pt-50 pb-24 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">

        {/* Header Section */}
        <div className="mb-16">
          {/* <p className="text-pink-600 text-xs md:text-sm font-semibold uppercase tracking-widest mb-4">
            Data-Driven UX Case Studies From Global Projects
          </p> */}
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
            Projects
          </h1>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projectsData.map((project) => (
            <Link
              key={project.id}
              href={project.link}
              className="group block relative w-full aspect-[4/5] p-2 md:p-3"
            >
              {/* Outer decorative brackets (dark for white background) */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-3 h-3 group-hover:w-8 group-hover:h-8 transition-all duration-300 border-t border-l border-black/30"></div>
                <div className="absolute top-0 right-0 w-3 h-3 group-hover:w-8 group-hover:h-8 transition-all duration-300 border-t border-r border-black/30"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 group-hover:w-8 group-hover:h-8 transition-all duration-300 border-b border-l border-black/30"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 group-hover:w-8 group-hover:h-8 transition-all duration-300 border-b border-r border-black/30"></div>
              </div>

              {/* Inner Image Container */}
              <div className="relative w-full h-full overflow-hidden group-hover:shadow-2xl transition-shadow duration-300">

                {/* Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Overlay for all four corners/sides */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Center Hover Arrow (Square Box) */}
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-16 h-16 flex items-center justify-center border border-white/50 bg-transparent transition-transform duration-300 transform scale-75 group-hover:scale-100">
                    <span className="text-white text-2xl font-light leading-none">↗</span>
                  </div>
                </div>

                {/* Tags (Top Left) */}
                <div className="absolute top-6 left-6 flex flex-wrap gap-2 z-10">
                  {/* Using placeholder tags as seen in the design */}
                  {['WEBSITE', 'APP', 'ENTERTAINMENT'].map((tag) => (
                    <span key={tag} className="bg-[#1a1a1a]/80 backdrop-blur-sm text-gray-200 text-[10px] font-bold px-2.5 py-1 tracking-wider uppercase">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title Overlay (Bottom Left) */}
                <div className="absolute bottom-6 left-6 z-10">
                  <h2 className="text-white text-2xl md:text-3xl font-medium tracking-tight">
                    {project.title}
                  </h2>
                </div>

              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
