import React from 'react';

/**
 * Static stacked card display matching exact Figma specs:
 * 
 * 1. Rectangle 115 (top-right background card):
 *    - 473.33px × 343.53px, left: 301.13px, top: ~85px, rotation: -17.52deg
 *    - border: 8px solid #FFFFFF, border-radius: 23px, opacity: 0.41, bg: #D9D9D9
 * 
 * 2. Brochure Card (behindcard1.jpg):
 *    - 459.18px × 326.47px, left: 139.18px, top: 209.42px, rotation: -7.63deg
 *    - border: 7px solid #FFFFFF, border-radius: 34px, opacity: 1
 * 
 * 3. Billboard Card (centercard.jpg - front center):
 *    - ~470px × 334px, left: 68px, top: 442px, rotation: 0deg
 *    - border: 7px solid #FFFFFF, border-radius: 34px, prominent drop shadow
 * 
 * 4. Tablet Card (behindcard2.png):
 *    - 507.79px × 344.9px, left: 138.55px, top: 699.4px, rotation: 17.67deg
 *    - border: 7px solid #FFFFFF, border-radius: 31px, opacity: 1
 * 
 * 5. Rectangle 117 (bottom-right background card):
 *    - 473.33px × 343.53px, left: 372.34px, top: 761.13px, rotation: 30.8deg
 *    - border: 8px solid #FFFFFF, border-radius: 23px, opacity: 0.40, bg: #D9D9D9
 * 
 * Reference canvas frame: 800px × 1080px
 */

export default function RaisingStructureCards() {
  return (
    <div className="w-full flex justify-center items-center py-6">
      <div 
        className="relative w-full max-w-[620px] lg:max-w-[680px] select-none" 
        style={{ aspectRatio: '800 / 1080' }}
      >
        {/* Layer 1: Rectangle 115 (decorative back card, top-right) */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '59.17%',
            height: '31.81%',
            top: '7.87%',
            left: '37.64%',
            transform: 'rotate(-17.52deg)',
            transformOrigin: 'center center',
            zIndex: 1,
            borderRadius: 'clamp(14px, 2.8vw, 23px)',
            border: 'clamp(4px, 0.9vw, 8px) solid #FFFFFF',
            backgroundColor: '#D9D9D9',
            opacity: 0.41,
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
          }}
        />

        {/* Layer 2: Brochure Card (behindcard1.jpg - top, tilted CCW) */}
        <div
          className="absolute"
          style={{
            width: '57.40%',
            height: '30.23%',
            top: '19.39%',
            left: '17.40%',
            transform: 'rotate(-7.63deg)',
            transformOrigin: 'center center',
            zIndex: 4,
            borderRadius: 'clamp(18px, 4vw, 34px)',
            border: 'clamp(4px, 0.85vw, 7px) solid #FFFFFF',
            boxShadow: '0 16px 36px -6px rgba(0, 0, 0, 0.14)',
            backgroundColor: '#FFFFFF',
            overflow: 'hidden',
          }}
        >
          <div 
            className="w-full h-full overflow-hidden"
            style={{ borderRadius: 'clamp(12px, 3.2vw, 27px)' }}
          >
            <img
              src="/images/behindcard1.jpg"
              alt="Neelachandra Brochure"
              className="w-full h-full object-cover block"
            />
          </div>
        </div>

        {/* Layer 3: Rectangle 117 (decorative back card, bottom-right) */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '59.17%',
            height: '31.81%',
            top: '70.47%',
            left: '46.54%',
            transform: 'rotate(30.8deg)',
            transformOrigin: 'center center',
            zIndex: 2,
            borderRadius: 'clamp(14px, 2.8vw, 23px)',
            border: 'clamp(4px, 0.9vw, 8px) solid #FFFFFF',
            backgroundColor: '#D9D9D9',
            opacity: 0.40,
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
          }}
        />

        {/* Layer 4: Tablet Card (behindcard2.png - bottom, tilted CW) */}
        <div
          className="absolute"
          style={{
            width: '63.47%',
            height: '31.94%',
            top: '64.76%',
            left: '17.32%',
            transform: 'rotate(17.67deg)',
            transformOrigin: 'center center',
            zIndex: 5,
            borderRadius: 'clamp(16px, 3.6vw, 31px)',
            border: 'clamp(4px, 0.85vw, 7px) solid #FFFFFF',
            boxShadow: '0 16px 40px -8px rgba(0, 0, 0, 0.16)',
            backgroundColor: '#FFFFFF',
            overflow: 'hidden',
          }}
        >
          <div 
            className="w-full h-full overflow-hidden"
            style={{ borderRadius: 'clamp(11px, 2.8vw, 24px)' }}
          >
            <img
              src="/images/behindcard2.png"
              alt="Neelachandra Tablet Showcase"
              className="w-full h-full object-cover block"
            />
          </div>
        </div>

        {/* Layer 5: Billboard Card (centercard.jpg - front center, straight) */}
        <div
          className="absolute"
          style={{
            width: '58.75%',
            height: '30.93%',
            top: '40.93%',
            left: '8.50%',
            transform: 'rotate(0deg)',
            transformOrigin: 'center center',
            zIndex: 10,
            borderRadius: 'clamp(18px, 4vw, 34px)',
            border: 'clamp(4px, 0.85vw, 7px) solid #FFFFFF',
            boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.22)',
            backgroundColor: '#FFFFFF',
            overflow: 'hidden',
          }}
        >
          <div 
            className="w-full h-full overflow-hidden"
            style={{ borderRadius: 'clamp(12px, 3.2vw, 27px)' }}
          >
            <img
              src="/images/centercard.jpg"
              alt="Neelachandra Outdoor Billboard Campaign"
              className="w-full h-full object-cover block"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
