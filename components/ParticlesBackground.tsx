'use client';

import { useCallback } from 'react';
import { Particles } from '@tsparticles/react';
import { Engine } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

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
          size: { value: { min: 1, max: 6 } },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            outModes: 'out',
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            onClick: { enable: true, mode: 'push' },
          },
          modes: {
            repulse: { distance: 100 },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}