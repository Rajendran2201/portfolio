'use client';

import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

const ParticlesEffect = dynamic(() => import('./Particlesbackground'), {
  ssr: false,
});

export default function ClientBody({ children, className }: { children: ReactNode; className: string }) {
  return (
    <div className={className} style={{ position: 'relative', zIndex: 1 }}>
      <ParticlesEffect />
      <div style={{ position: 'relative', zIndex: 2 }}>{children}</div>
    </div>
  );
}