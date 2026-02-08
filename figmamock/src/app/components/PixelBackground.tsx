import React from 'react';

export function PixelBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#F8F8F8]">
      {/* Large Color Bleeds - Blurry soft spots */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#FFD23F]/20 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#3373FF]/15 blur-[120px]" />
      <div className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] rounded-full bg-[#EE4266]/10 blur-[120px]" />
      <div className="absolute bottom-[20%] left-[-5%] w-[30%] h-[40%] rounded-full bg-[#2EC4B6]/10 blur-[120px]" />

      {/* Noise/Peppered Layer using SVG Filter */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.4] mix-blend-overlay">
        <filter id="noiseFilter">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.6" 
            numOctaves="3" 
            stitchTiles="stitch" 
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* Subtle Pixel Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />
    </div>
  );
}
