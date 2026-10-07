import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Projects | Smrkonova',
  description: 'View our data-driven UX case studies from global projects.',
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-black pt-28 md:pt-36 pb-28 px-4 sm:px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto">
        {/* Header Section */}
        <div className="mb-12 md:mb-16">
          <p className="text-gray-400 text-xs md:text-sm font-semibold tracking-widest uppercase mb-3">
            Selected Case Studies
          </p>
          <h1 className="text-[clamp(2.5rem,5.5vw+1rem,4.5rem)] font-black uppercase tracking-tighter leading-none">
            Projects
          </h1>
        </div>

        {/* 6-Card Figma Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 max-w-[1160px] mx-auto items-start pt-6">

          {/* CARD 1: Rayara Tamara */}
          <Link
            href="/projects/rayara-tamara"
            className="group relative block w-full max-w-[345px] h-[374px] mx-auto transition-transform duration-300 hover:-translate-y-1"
          >
            {/* Gradient Background Box */}
            <div
              className="absolute inset-0 w-full h-full shadow-sm"
              style={{
                background: 'linear-gradient(181.17deg, #FBAA12 -24.53%, #FFFFFF 100%)',
              }}
            />

            {/* Title (Top-Left) */}
            <div className="absolute top-[34px] left-[34px] z-20">
              <h2 className="text-white text-[32px] font-extrabold leading-[39px] font-sans tracking-tight">
                Rayara Tamara
              </h2>
            </div>

            {/* Floating 3D Image Asset */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 pt-12">
              <div
                className="relative w-[286px] h-[286px] transition-transform duration-500 group-hover:scale-105"
                style={{
                  filter: 'drop-shadow(0px 24px 50px rgba(0, 0, 0, 0.24))',
                }}
              >
                <Image
                  src="/rayar tamara.png"
                  alt="Rayara Tamara"
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
            </div>

            {/* Subtitle (Bottom-Left: 2 Lines) */}
            <div className="absolute bottom-[28px] left-[34px] z-20">
              <p className="text-[#212121] text-[12px] font-light leading-[15px] font-sans">
                Heritage<br />Restaurant
              </p>
            </div>
          </Link>

          {/* CARD 2: Hiro Guild */}
          <Link
            href="/projects/hiro-guild"
            className="group relative block w-full max-w-[345px] h-[374px] mx-auto transition-transform duration-300 hover:-translate-y-1"
          >
            {/* White / Seamless Background Box */}
            <div className="absolute inset-0 w-full h-full bg-white" />

            {/* Subtitle (Top-Left: 2 Lines) */}
            <div className="absolute top-[31px] left-[28px] z-20">
              <p className="text-[#212121] text-[12px] font-light leading-[15px] font-sans">
                Gamified<br />Delivery
              </p>
            </div>

            {/* Floating Character Image */}
            <div className="absolute inset-0 flex items-end justify-center pointer-events-none z-10 pb-0">
              <div className="relative w-[312px] h-[280px] transition-transform duration-500 group-hover:scale-105">
                <Image
                  src="/hiro guild.png"
                  alt="Hiro Guild"
                  fill
                  unoptimized
                  className="object-contain object-bottom"
                />
                {/* Soft dark shadow blur at bottom */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[240px] h-[45px] bg-black/40 blur-[26px] pointer-events-none rounded-full" />
              </div>
            </div>

            {/* Title (Bottom-Right over the jacket: 2 Lines) */}
            <div className="absolute bottom-[30px] right-[28px] z-20 pointer-events-none">
              <h2 className="text-white text-[35px] font-extrabold leading-[40px] font-sans tracking-tight text-right drop-shadow-md">
                Hiro<br />Guild
              </h2>
            </div>
          </Link>

          {/* CARD 3: Nazar (3D Overlapping Box breakout - enlarged to match reference) */}
          <Link
            href="/projects/nazr"
            className="group relative block w-full max-w-[345px] h-[374px] mx-auto transition-transform duration-300 hover:-translate-y-1 overflow-visible"
          >
            {/* Pink Gradient Background Box */}
            <div
              className="absolute inset-0 w-full h-full shadow-sm"
              style={{
                background: 'linear-gradient(175.77deg, #FF033E -29.54%, #FFFFFF 78.84%)',
              }}
            />

            {/* 3D Overlapping Boxes (Blue & Pink enlarged with dramatic breakout) */}
            <div className="absolute inset-0 pointer-events-none z-10 overflow-visible">
              {/* Pink Box (Behind/Left, tilted ~15deg, sticking slightly out the left edge) */}
              <div
                className="absolute -left-[12px] top-[70px] w-[215px] h-[225px] z-10 transition-transform duration-500 group-hover:rotate-[17deg]"
                style={{
                  transform: 'rotate(15deg)',
                  filter: 'drop-shadow(0px 24px 34px rgba(0, 0, 0, 0.22))',
                }}
              >
                <Image
                  src="/pink.png"
                  alt="Nazar Pink"
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>

              {/* Blue Box (Front/Right, tilted ~15deg, breaking out high above top edge) */}
              <div
                className="absolute right-[12px] -top-[48px] w-[245px] h-[255px] z-20 transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-[17deg]"
                style={{
                  transform: 'rotate(15deg)',
                  filter: 'drop-shadow(0px 28px 38px rgba(0, 0, 0, 0.28))',
                }}
              >
                <Image
                  src="/blue.png"
                  alt="Nazar Blue"
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
            </div>

            {/* Bottom Bar: Subtitle on Left, Title on Right */}
            <div className="absolute bottom-[24px] left-[28px] right-[28px] flex items-end justify-between z-20">
              <p className="text-[#212121] text-[12px] font-light leading-[15px] font-sans">
                Be confident<br />Everywhere
              </p>
              <h2 className="text-[#000000] text-[40px] font-bold leading-[48px] font-sans tracking-tight">
                Nazar
              </h2>
            </div>
          </Link>

          {/* CARD 4: Neelachandra */}
          <Link
            href="/projects/neelachandra"
            className="group relative block w-full max-w-[345px] h-[374px] mx-auto transition-transform duration-300 hover:-translate-y-1"
          >
            {/* Orange Gradient Background Box */}
            <div
              className="absolute inset-0 w-full h-full shadow-sm"
              style={{
                background: 'linear-gradient(175.69deg, #FB6F12 1.44%, #FFFFFF 94.66%)',
              }}
            />

            {/* Title (Top-Left) */}
            <div className="absolute top-[35px] left-[34px] z-20">
              <h2 className="text-white text-[32px] font-semibold leading-[39px] font-sans tracking-tight">
                Neelachandra
              </h2>
            </div>

            {/* Image (Eagle Soaring) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 pt-10">
              <div
                className="relative w-[304px] h-[284px] transition-transform duration-500 group-hover:scale-105"
                style={{
                  filter: 'drop-shadow(0px 20px 35px rgba(0, 0, 0, 0.18))',
                }}
              >
                <Image
                  src="/neelachandra.png"
                  alt="Neelachandra"
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
            </div>

            {/* Subtitle (Bottom-Right: 2 Lines) */}
            <div className="absolute bottom-[28px] right-[34px] z-20 text-right">
              <p className="text-[#212121] text-[12px] font-light leading-[15px] font-sans">
                Building<br />Trust
              </p>
            </div>
          </Link>

          {/* CARD 5: Cineartery (Clapperboard breakout) */}
          <Link
            href="/projects/cineartery"
            className="group relative block w-full max-w-[345px] h-[374px] mx-auto transition-transform duration-300 hover:-translate-y-1 overflow-visible"
          >
            {/* Blue Gradient Background Box */}
            <div
              className="absolute inset-0 w-full h-full shadow-sm"
              style={{
                background: 'linear-gradient(183.03deg, #3A66CD -20.77%, #FFFFFF 101.34%)',
              }}
            />

            {/* Floating 3D Clapperboard Asset breaking out top-left */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 overflow-visible -mt-4">
              <div
                className="relative w-[346px] h-[346px] transition-transform duration-500 group-hover:scale-105 group-hover:rotate-[-30deg]"
                style={{
                  transform: 'rotate(-34.77deg)',
                  filter: 'drop-shadow(0px 35px 55px rgba(0, 0, 0, 0.32))',
                }}
              >
                <Image
                  src="/cineartery.png"
                  alt="Cineartery"
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
            </div>

            {/* Bottom Bar: Title on Left, Subtitle on Right (2 Lines) */}
            <div className="absolute bottom-[26px] left-[28px] right-[28px] flex items-end justify-between z-20">
              <h2 className="text-white text-[35px] font-extrabold leading-[42px] font-sans tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.3)]">
                Cineartery
              </h2>
              <p className="text-[#212121] text-[12px] font-light leading-[15px] font-sans text-right">
                Creative<br />Collaboration
              </p>
            </div>
          </Link>

          {/* CARD 6: Reading Elf */}
          <Link
            href="/projects/reading-elf"
            className="group relative block w-full max-w-[345px] h-[374px] mx-auto transition-transform duration-300 hover:-translate-y-1"
          >
            {/* Cream/Yellow Gradient Background Box */}
            <div
              className="absolute inset-0 w-full h-full shadow-sm"
              style={{
                background: 'linear-gradient(162.54deg, #FFEDB6 -19.81%, #FFFFFF 88.03%)',
              }}
            />

            {/* Subtitle (Top-Left: 2 Lines) */}
            <div className="absolute top-[32px] left-[32px] z-20">
              <p className="text-[#212121] text-[12px] font-light leading-[15px] font-sans">
                Children’s<br />Library
              </p>
            </div>

            {/* Image (Girl flying with book) */}
            <div className="absolute inset-0 flex items-center justify-end pointer-events-none z-10 pr-4 pt-2">
              <div
                className="relative w-[265px] h-[285px] transition-transform duration-500 group-hover:scale-105"
                style={{
                  filter: 'drop-shadow(0px 18px 30px rgba(0, 0, 0, 0.12))',
                }}
              >
                <Image
                  src="/readong elf.png"
                  alt="Reading Elf"
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
            </div>

            {/* Title (Bottom-Left) */}
            <div className="absolute bottom-[28px] left-[32px] z-20">
              <h2 className="text-[#000000] text-[32px] font-bold leading-[39px] font-sans tracking-tight">
                Reading Elf
              </h2>
            </div>
          </Link>

        </div>
      </div>
    </main>
  );
}
