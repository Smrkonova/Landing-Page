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
          <p className="text-gray-400 text-[clamp(11px,0.6vw+4px,13px)] font-semibold uppercase tracking-[0.25em] mb-3">
            What We Do
          </p>
          <h1 className="text-[clamp(2.5rem,6vw+0.5rem,5.5rem)] font-black uppercase tracking-tighter text-[#111]">
            Services
          </h1>
          <p className="text-gray-500 text-[clamp(0.9375rem,0.5vw+0.75rem,1.125rem)] max-w-2xl mt-4 font-light leading-relaxed">
            Full-cycle engineering, creative strategy, and digital growth services tailored to elevate ambitious brands globally.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesData.map((service) => (
            <Link
              key={service.id}
              href={service.link}
              className="group block relative w-full"
            >
              <div className="relative w-full aspect-[404.94/269.96] overflow-hidden rounded-2xl bg-neutral-900 shadow-sm group-hover:shadow-2xl transition-all duration-300">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Gradient overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Overlay Text (Bottom-Left) */}
                <div className="absolute bottom-5 left-5 md:bottom-6 md:left-6 z-10 max-w-[160px] pointer-events-none">
                  <h2
                    style={{
                      fontFamily: "var(--font-inter), Inter, sans-serif",
                      fontWeight: 600,
                      fontSize: "15.72px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                    }}
                    className="text-white drop-shadow-md select-none"
                  >
                    {service.title}
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
