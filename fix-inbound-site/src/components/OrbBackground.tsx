import React, { useEffect, useState } from 'react';
import Orb from './Orb';

const OrbBackground: React.FC = () => {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrolled = window.scrollY;
      const fadeStart = heroHeight * 0.3;
      const fadeEnd = heroHeight * 0.8;

      if (scrolled <= fadeStart) {
        setScrollOpacity(1);
      } else if (scrolled >= fadeEnd) {
        setScrollOpacity(0);
      } else {
        const fadeProgress = (scrolled - fadeStart) / (fadeEnd - fadeStart);
        setScrollOpacity(1 - fadeProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Main Orb - only visible in header/hero area */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] transition-opacity duration-300"
        style={{ opacity: scrollOpacity * 0.4 }}
      >
        <Orb
          hue={240}
          hoverIntensity={0.3}
          rotateOnHover={true}
          backgroundColor="#000000"
        />
      </div>
    </div>
  );
};

export default OrbBackground;
