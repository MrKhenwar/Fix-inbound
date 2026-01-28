import React from 'react';
import Orb from './Orb';

const OrbBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Main Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-40">
        <Orb
          hue={240}
          hoverIntensity={0.3}
          rotateOnHover={true}
          backgroundColor="#000000"
        />
      </div>

      {/* Secondary smaller orbs for depth */}
      
    </div>
  );
};

export default OrbBackground;
