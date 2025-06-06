// First, install the required packages:
// npm install react-particles tsparticles-slim tsparticles-engine

// ParticlesBackground.tsx
'use client';

import { useCallback, useMemo } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import type { Container, Engine } from 'tsparticles-engine';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    // Load only the slim version to reduce bundle size
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // Optional callback when particles are loaded
    console.log('Particles loaded:', container);
  }, []);

  const options = useMemo(() => ({
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: ['#facc15', '#ffffff', '#9ca3af'],
      },
      links: {
        color: '#facc15',
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
        triangles: {
          enable: true,
          opacity: 0.1,
        },
      },
      collisions: {
        enable: false,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: true,
        speed: 1,
        straight: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 50,
        limit: 100,
      },
      opacity: {
        value: { min: 0.3, max: 0.8 },
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.3,
          sync: false,
        },
      },
      shape: {
        type: ['circle', 'triangle'],
      },
      size: {
        value: { min: 1, max: 3 },
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 0.5,
          sync: false,
        },
      },
    },
    detectRetina: true,
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
  }), []);

  return (
    <div className="fixed inset-0 w-full h-full z-0" style={{ minHeight: '100vh' }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
        className="w-full h-full"
        style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
      />
    </div>
  );
}

// Alternative: More sophisticated particle configuration
export function EnhancedParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log('Enhanced particles loaded:', container);
  }, []);

  const enhancedOptions = useMemo(() => ({
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 60,
    fullScreen: {
      enable: false,
      zIndex: 0,
    },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: ['push', 'bubble'],
        },
        onHover: {
          enable: true,
          mode: 'connect',
          parallax: {
            enable: true,
            force: 60,
            smooth: 10,
          },
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 3,
        },
        bubble: {
          distance: 200,
          size: 6,
          duration: 0.3,
          opacity: 0.8,
        },
        connect: {
          distance: 120,
          links: {
            opacity: 0.5,
          },
          radius: 60,
        },
      },
    },
    particles: {
      color: {
        value: ['#facc15', '#ffffff', '#6b7280', '#f59e0b'],
      },
      links: {
        color: {
          value: '#facc15',
        },
        distance: 120,
        enable: true,
        opacity: 0.4,
        width: 1,
        warp: true,
        triangles: {
          enable: true,
          opacity: 0.05,
        },
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'out',
        },
        random: true,
        speed: { min: 0.5, max: 1.5 },
        straight: false,
        trail: {
          enable: false,
          length: 10,
          fillColor: '#000000',
        },
        vibrate: false,
        warp: false,
      },
      number: {
        density: {
          enable: true,
          area: 1000,
        },
        value: 60,
        limit: 120,
      },
      opacity: {
        value: { min: 0.2, max: 0.7 },
        animation: {
          count: 0,
          enable: true,
          speed: 1,
          sync: false,
          destroy: 'none',
          minimumValue: 0.2,
          startValue: 'random',
        },
      },
      reduceDuplicates: false,
      shape: {
        type: ['circle', 'triangle', 'polygon'],
        options: {
          polygon: {
            sides: 6,
          },
        },
      },
      size: {
        value: { min: 1, max: 4 },
        animation: {
          count: 0,
          enable: true,
          speed: 3,
          sync: false,
          destroy: 'none',
          minimumValue: 0.5,
          startValue: 'random',
        },
      },
      stroke: {
        width: 0,
      },
      zIndex: {
        value: 0,
        opacityRate: 1,
        sizeRate: 1,
        velocityRate: 1,
      },
      life: {
        count: 0,
        delay: {
          value: 0,
          sync: false,
        },
        duration: {
          value: 0,
          sync: false,
        },
      },
    },
    detectRetina: true,
    duration: 0,
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    responsive: [
      {
        maxWidth: 768,
        options: {
          particles: {
            number: {
              value: 30,
            },
            links: {
              distance: 100,
            },
          },
        },
      },
      {
        maxWidth: 480,
        options: {
          particles: {
            number: {
              value: 20,
            },
            links: {
              distance: 80,
            },
          },
        },
      },
    ],
  }), []);

  return (
    <div className="absolute inset-0 z-0">
      <Particles
        id="enhanced-tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={enhancedOptions}
        className="w-full h-full"
      />
    </div>
  );
}

// Minimal performance-focused version
export function MinimalParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const minimalOptions = useMemo(() => ({
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 30, // Lower FPS for better performance
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'grab',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 0.5,
          },
        },
      },
    },
    particles: {
      color: {
        value: '#facc15',
      },
      links: {
        color: '#facc15',
        distance: 120,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.8,
        direction: 'none',
        random: false,
        straight: false,
        outModes: {
          default: 'out',
        },
      },
      number: {
        density: {
          enable: true,
          area: 1200,
        },
        value: 40,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 2 },
      },
    },
    detectRetina: true,
  }), []);

  return (
    <div className="absolute inset-0 z-0">
      <Particles
        id="minimal-tsparticles"
        init={particlesInit}
        options={minimalOptions}
        className="w-full h-full"
      />
    </div>
  );
}