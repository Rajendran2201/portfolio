'use client';

import { ReactNode } from 'react';
import { Particles } from '@tsparticles/react';
import { useCallback } from 'react';      

function ParticlesBackground() {
  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        background: { color: 'transparent' },
        particles: {
          number: { value: 40, density: { enable: true } },
          color: { value: '#facc15' },
          shape: { type: 'circle' },
          opacity: { value: 0.2 },
          size: { value: 6 },
          move: { enable: true, speed: 1, direction: 'none', outModes: 'out' },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            onClick: { enable: true, mode: 'push' },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default function ClientBody({ children, className }: { children: ReactNode; className: string }) {
  return (
    <div className={className} style={{ position: 'relative', zIndex: 1 }}>
      <ParticlesBackground />
      <div style={{ position: 'relative', zIndex: 2 }}>{children}</div>
    </div>
  );
}