'use client';

import { ReactNode, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const ParticlesBackground = dynamic(() => import('./ParticlesBackground'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 z-0 flex items-center justify-center">
      <div className="text-yellow-400 text-sm opacity-50">
        Initializing particles...
      </div>
    </div>
  )
});

export default function ClientBody({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`relative min-h-screen bg-black text-white ${className}`}>
      {mounted && <ParticlesBackground />}
      <div className="relative z-10 min-h-screen">{children}</div>
    </div>
  );
}