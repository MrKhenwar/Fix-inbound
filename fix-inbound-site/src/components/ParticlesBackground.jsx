import React from 'react';
import ColorBends from './ColorBends';

const ParticlesBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <ColorBends
        colors={['#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B']}
        rotation={45}
        speed={0.15}
        transparent={true}
        scale={0.8}
        frequency={1.2}
        warpStrength={0.8}
        mouseInfluence={0.5}
        parallax={0.3}
        noise={0.08}
        className="w-full h-full"
      />
    </div>
  );
};

export default ParticlesBackground;
