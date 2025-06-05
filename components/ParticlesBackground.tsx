'use client';

import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function ParticlesEffect() {
  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0"
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        background: { color: 'transparent' },
        particles: {
          number: { value: 20, density: { enable: true } },
          color: {
            value: [
              '#facc15', // Yellow for dark mode
              '#1f2937', // Dark gray for light mode
            ],
          },
          shape: { type: 'circle' },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 4 } },
          move: {
            enable: true,
            speed: 0.5,
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
            push: { quantity: 2 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}