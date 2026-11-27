import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Our Products | Smrkonova',
  description: 'Technology solutions designed to simplify and improve the way businesses operate.',
};

export default function ProductsPage() {
  const features = [
    { name: 'Clinical Workflows' },
    { name: 'Patient Telemetry' },
    { name: 'Care Coordination' },
    { name: 'Clinic Operations' },
  ];

  return (
    <main className="min-h-screen bg-white text-black pt-[clamp(7rem,8vw+2rem,10.5rem)] pb-[clamp(5rem,6vw+1rem,7.5rem)] px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="max-w-[1360px] mx-auto">
        {/* Header Section */}
        <div className="mb-[clamp(2.5rem,4vw+1rem,5rem)]">
          <p className="text-[#94A3B8] font-semibold text-[clamp(11px,0.6vw+4px,13px)] uppercase tracking-[0.25em] mb-3">
            WHAT WE BUILD
          </p>
          <h1 className="text-[#111111] font-black text-[clamp(2.5rem,6vw+0.5rem,5.25rem)] tracking-tight leading-none uppercase mb-[clamp(1rem,1.5vw+0.5rem,1.5rem)]">
            OUR PRODUCTS
          </h1>
          <p className="text-[#64748B] text-[clamp(0.9375rem,0.5vw+0.75rem,1.1875rem)] font-light max-w-2xl leading-relaxed">
            Technology solutions designed to simplify and improve the way businesses operate.
          </p>
        </div>

        {/* Product Showcase Card */}
        <div className="relative rounded-2xl lg:rounded-[24px] border border-slate-200/80 bg-white overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.03)] p-[clamp(1.25rem,3vw+0.5rem,3.5rem)]">
          {/* Subtle Ambient Glow Behind Dashboard on Right */}
          <div
            className="absolute top-0 right-0 w-full lg:w-[60%] h-full pointer-events-none -z-0 opacity-80"
            style={{
              background:
                'radial-gradient(ellipse at 80% 50%, rgba(168, 85, 247, 0.14) 0%, rgba(56, 189, 248, 0.12) 45%, rgba(255, 255, 255, 0) 75%)',
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
            {/* Left Column: Product Info */}
            <div className="lg:col-span-5 flex flex-col items-start order-2 lg:order-1">
              {/* Product Logo */}
              <div className="mb-5">
                <Image
                  src="/images/Product/Frame 7.png"
                  alt="SMRKOMED"
                  width={240}
                  height={40}
                  priority
                  className="h-8 sm:h-9 w-auto object-contain"
                />
              </div>

              {/* Tag / Category Badge */}
              <div className="mb-5">
                <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#F1F5F9]/90 border border-slate-200/80 text-[#475569] text-[clamp(11.5px,0.25vw+10.5px,13px)] font-medium tracking-normal">
                  Healthcare Management Platform
                </span>
              </div>

              {/* Description */}
              <p className="text-[#475569] text-[clamp(0.9375rem,0.4vw+0.75rem,1.0625rem)] leading-relaxed mb-8 max-w-[440px] font-normal">
                An integrated healthcare platform that connects clinical workflows, patient communication, care
                coordination, and clinic operations in one system.
              </p>

              {/* 2x2 Feature Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5 mb-9 w-full max-w-[440px]">
                {features.map((feature) => (
                  <div key={feature.name} className="flex items-center gap-2.5">
                    <div className="text-[#0284C7] shrink-0">
                      <svg
                        className="w-[18px] h-[18px]"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="10" cy="10" r="8" stroke="#0284C7" strokeWidth="1.5" />
                        <path
                          d="M6.5 10L9 12.5L13.5 7.5"
                          stroke="#0284C7"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-[clamp(13px,0.25vw+12px,14px)] font-medium text-[#334155]">
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div>
                <a
                  href="https://www.smrkomed.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#0B0F17] hover:bg-[#1E293B] text-white text-[13.5px] sm:text-sm font-medium rounded-[4px] transition-all duration-200 group shadow-sm hover:shadow hover:-translate-y-0.5"
                >
                  <span>Explore SmrkoMed</span>
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column: SaaS Dashboard Preview */}
            <div className="lg:col-span-7 flex items-center justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative w-full rounded-xl lg:rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.01]">
                <Image
                  src="/images/Product/Right Visual Column (7 Cols) - Realistic SaaS Dashboard Preview (1).png"
                  alt="SmrkoMed SaaS Dashboard Preview"
                  width={1400}
                  height={880}
                  priority
                  className="w-full h-auto object-contain block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
