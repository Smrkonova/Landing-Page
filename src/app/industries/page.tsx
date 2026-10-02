import Link from 'next/link';
import Image from 'next/image';
import { industriesData } from '@/data/industries';

export const metadata = {
  title: 'Industries | Smrkonova',
  description: 'Explore the industries we serve including ecommerce, education, healthcare, manufacturing, and real estate.',
};

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-white text-black pt-40 md:pt-48 pb-24 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">

        {/* Header Section */}
        <div className="mb-14 md:mb-20">
          <p className="text-gray-400 text-[clamp(11px,0.6vw+4px,13px)] font-semibold uppercase tracking-[0.25em] mb-3">
            Who We Serve
          </p>
          <h1 className="text-[clamp(2.5rem,6vw+0.5rem,5.5rem)] font-black uppercase tracking-tighter text-[#111]">
            Industries
          </h1>
          <p className="text-gray-500 text-[clamp(0.9375rem,0.5vw+0.75rem,1.125rem)] max-w-2xl mt-4 font-light leading-relaxed">
            Partnering with ambitious brands across diverse sectors to deliver bespoke digital experiences and scalable growth.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {industriesData.map((industry) => (
            <Link
              key={industry.id}
              href={industry.link}
              className="group block relative w-full aspect-[4/5] p-2 md:p-3"
            >
              {/* Outer decorative brackets */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-3 h-3 group-hover:w-8 group-hover:h-8 transition-all duration-300 border-t border-l border-black/30"></div>
                <div className="absolute top-0 right-0 w-3 h-3 group-hover:w-8 group-hover:h-8 transition-all duration-300 border-t border-r border-black/30"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 group-hover:w-8 group-hover:h-8 transition-all duration-300 border-b border-l border-black/30"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 group-hover:w-8 group-hover:h-8 transition-all duration-300 border-b border-r border-black/30"></div>
              </div>

              {/* Inner Card Container */}
              <div className="relative w-full h-full overflow-hidden rounded-2xl border border-gray-200/80 bg-white hover:border-gray-300 group-hover:shadow-xl transition-all duration-300 flex flex-col justify-between p-6 md:p-8">
                
                {/* Top Section: Tags */}
                <div className="flex flex-wrap gap-2 z-10 relative">
                  {industry.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="bg-gray-100 border border-gray-200/60 text-gray-700 text-[clamp(9px,0.5vw+4px,11px)] font-bold px-2.5 py-1 tracking-wider uppercase rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Feature Graphic/Image in Center */}
                <div className="relative w-full h-[200px] sm:h-[220px] my-auto flex items-center justify-center pointer-events-none">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    unoptimized
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Hover Center Arrow Box */}
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-14 h-14 flex items-center justify-center border border-black/20 bg-white/90 backdrop-blur-md transition-transform duration-300 transform scale-75 group-hover:scale-100 rounded-lg shadow-lg">
                    <span className="text-black text-2xl font-light leading-none">↗</span>
                  </div>
                </div>

                {/* Title & Description Overlay (Bottom) */}
                <div className="z-10 relative mt-auto">
                  <h2 className="text-[#111] text-[clamp(1.125rem,1.2vw+0.5rem,1.5rem)] font-bold tracking-tight leading-tight mb-2 group-hover:text-black transition-colors">
                    {industry.title}
                  </h2>
                  <p className="text-gray-500 text-[clamp(11px,0.6vw+4px,13px)] line-clamp-2 leading-relaxed font-normal">
                    {industry.description}
                  </p>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}
