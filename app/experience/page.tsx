"use client";

import Header from "@/components/Header";
import ParticlesBackground from "@/components/ParticlesBackground";
import { experienceTimeline } from "@/src/data/experienceTimeline";
import { motion } from "framer-motion";
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
                As a{" "}
                <span className="text-yellow-300 font-medium">
                  Research Intern
                </span>{" "}
                at{" "}
                <span className="text-yellow-300 font-medium">
                  Telkom University, Indonesia
                </span>
                , I conducted applied research at the intersection of{" "}
                <span className="text-yellow-300 font-medium">
                  Computer Vision
                </span>{" "}
                and <span className="text-yellow-300 font-medium">Edge AI</span>
                , focusing on developing efficient models for Waste Object
                Detection and Classification. I collaborated with international
                researchers and faculty to design real-time{" "}
                <span className="text-yellow-300 font-medium">
                  Object Detection
                </span>{" "}
                systems for smart city applications, leveraging{" "}
                <span className="text-yellow-300 font-medium">TensorFlow</span>{" "}
                and <span className="text-yellow-300 font-medium">YOLO</span>
                -based Object Detection models. This experience enriched my
                understanding of global research methodologies, improved my{" "}
                <span className="text-yellow-300 font-medium">
                  research communication
                </span>{" "}
                and{" "}
                <span className="text-yellow-300 font-medium">
                  collaborative development
                </span>{" "}
                skills, and enabled me to translate theory into impactful,
                real-world solutions.
              </p>
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-yellow-400 text-center mb-16">
            My Journey
          </h2>

          {/* Timeline Container */}
          <div className="relative w-full">
            {/* Horizontal timeline for md+ screens */}
            <div className="hidden md:block relative w-full overflow-x-auto overflow-y-visible">
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
                      idx % 2 === 0 ? "mt-[-120px]" : "mb-[-120px]"
                    }`}
                  >
                    {/* Line dot */}
                    <div className="w-5 h-5 rounded-full bg-black border-4 border-red-500 z-20"></div>

                    {/* Timeline card */}
                    <div className="mt-4 bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-lg shadow-lg text-center transition-transform hover:scale-105">
                      <h3 className="font-bold text-yellow-300 text-sm">
                        {exp.role}
                      </h3>
                      <p className="text-yellow-100 text-xs mt-1">{exp.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Vertical timeline for small screens */}
            <div className="flex flex-col md:hidden max-w-md mx-auto space-y-12">
              {experienceTimeline.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-6"
                >
                  {/* Vertical line dot */}
                  <div className="flex flex-col items-center">
                    <div className="w-5 h-5 rounded-full bg-black border-4 border-red-500 z-20"></div>
                    {idx !== experienceTimeline.length - 1 && (
                      <div className="w-[2px] bg-red-500 flex-1 mt-1"></div>
                    )}
                  </div>

                  {/* Card */}
                  <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-lg shadow-lg flex-1 transition-transform hover:scale-105">
                    <h3 className="font-bold text-yellow-300 text-sm">
                      {exp.role}
                    </h3>
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
