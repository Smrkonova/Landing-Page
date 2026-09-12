import Link from 'next/link';
import Image from 'next/image';
import { servicesData } from '@/data/services';

export const metadata = {
  title: 'Services | Smrkonova',
  description: 'Explore our full spectrum of digital services from custom web and mobile development to UI/UX, branding, marketing, and ongoing growth.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-black pt-40 md:pt-48 pb-24 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">

        {/* Header Section */}
        <div className="mb-14 md:mb-20">
          <p className="text-gray-400 text-xs md:text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            What We Do
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-[#111]">
            Services
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mt-4 font-light leading-relaxed">
            Full-cycle engineering, creative strategy, and digital growth services tailored to elevate ambitious brands globally.
          </p>
        </div>

        {/* Services Grid (Matches Projects Grid Architecture) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {servicesData.map((service) => (
            <Link
              key={service.id}
              href={service.link}
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
                  {service.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="bg-gray-100 border border-gray-200/60 text-gray-700 text-[10px] font-bold px-2.5 py-1 tracking-wider uppercase rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Feature Graphic/Image in Center */}
                <div className="relative w-full h-[200px] sm:h-[220px] my-auto flex items-center justify-center pointer-events-none">
                  <Image
                    src={service.image}
                    alt={service.title}
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
                  <h2 className="text-[#111] text-xl md:text-2xl font-bold tracking-tight leading-tight mb-2 group-hover:text-black transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-gray-500 text-xs md:text-[13px] line-clamp-2 leading-relaxed font-normal">
                    {service.description}
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
