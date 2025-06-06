'use client';

import Header from '@/components/Header';
import ParticlesBackground from '@/components/ParticlesBackground';
import { experienceTimeline } from '@/src/data/experienceTimeline';
import { motion } from 'framer-motion';
import { FaLaptopCode } from "react-icons/fa";

export default function Experience() {
  return (
    <>
      <ParticlesBackground />
      <div className="relative min-h-screen bg-black/80 text-white z-40 overflow-hidden">
        <Header />
        <section className="w-full py-24 px-4 sm:px-8 bg-transparent">

        <h2 className="text-4xl sm:text-5xl font-bold text-yellow-400 text-center mb-16">
            Work Experience
          </h2>
           {/* Research Internship Highlight */}
      <div className="flex flex-col items-center justify-center mb-14">
        <div className="bg-white/10 border border-yellow-400 rounded-xl shadow-lg p-6 md:p-8 max-w-4xl w-full backdrop-blur-sm">
          <div className="flex items-center gap-4 mb-4">
            <FaLaptopCode className="text-yellow-400 text-3xl" />
            <h3 className="text-2xl font-semibold text-yellow-300">
              Research Intern – Telkom University, Indonesia
            </h3>
          </div>
          <p className="text-sm text-gray-300 mb-2 italic">
            May 2025 – Present (2 months)
          </p>
          <p className="text-md text-gray-200 leading-relaxed">
            Selected for an international research program where I’m currently
            working on AI-powered solutions in collaboration with leading
            academicians. The work focuses on <span className="text-yellow-300 font-medium">Deep Learning</span>,{" "}
            <span className="text-yellow-300 font-medium">Natural Language Processing</span>, and{" "}
            <span className="text-yellow-300 font-medium">real-world AI applications</span>. This
            internship has enhanced my domain knowledge, research
            documentation, and collaborative development skills.
          </p>
        </div>
      </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-yellow-400 text-center mb-16">
            My Journey
          </h2>

         
          {/* Horizontal Scroll Timeline */}
          <div className="relative w-full overflow-x-auto overflow-y-hidden">
            <div className="min-w-[1800px] h-[400px] relative flex items-center px-10">

              {/* S-Curve Path */}
              <svg
                viewBox="0 0 1800 200"
                className="absolute top-1/2 left-0 -translate-y-1/2 w-[1800px] h-40"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,100 C300,0 600,200 900,100 S1500,100 1800,100"
                  stroke="#ef4444"
                  strokeWidth="4"
                  fill="none"
                />
              </svg>

              {/* Timeline Cards */}
              {experienceTimeline.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative w-56 mx-6 flex flex-col items-center ${
                    idx % 2 === 0 ? 'mt-[-120px]' : 'mb-[-120px]'
                  }`}
                >
                  {/* Line dot */}
                  <div className="w-5 h-5 rounded-full bg-black border-4 border-red-500 z-20"></div>

                  {/* Timeline card */}
                  <div className="mt-4 bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-lg shadow-lg text-center transition-transform hover:scale-105">
                    <h3 className="font-bold text-yellow-300 text-sm">{exp.role}</h3>
                    <p className="text-yellow-100 text-xs mt-1">{exp.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
