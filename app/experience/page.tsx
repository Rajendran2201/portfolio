'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import ParticlesBackground from '@/components/ParticlesBackground'; // make sure path is correct
import { experiences } from '@/src/data/experienceData';

export default function Experience() {
  return (
    <>
      {/* Particles fixed in background */}
      <ParticlesBackground />

      {/* Main container with relative positioning and z-index above particles */}
      <div className="relative min-h-screen flex flex-col bg-transparent text-white z-40">
        {/* Header */}
        <Header />

        {/* Experience Section */}
        <section className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 pt-20 md:pt-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center text-white">
            Work
          </h2>

          <div className="space-y-6 sm:space-y-8 max-w-3xl w-full">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-900/80 backdrop-blur-md p-4 sm:p-6 rounded-lg"
                // slightly transparent with blur for better contrast on particles
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                  {exp.title}
                </h3>
                <p className="text-gray-300 mt-2 text-sm sm:text-base">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
