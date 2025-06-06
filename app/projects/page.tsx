'use client';

import Header from '@/components/Header';
import ParticlesBackground from '@/components/ParticlesBackground'; // Add this import
import { motion } from 'framer-motion';
import { CodeBracketIcon } from '@heroicons/react/24/outline';
import { projects } from '@/src/data/projectsData'; 

export default function Projects() {
  return (
    <div className="relative bg-black text-white">
      {/* ParticlesBackground - fixed to viewport */}
      <div className="fixed inset-0 z-0">
        <ParticlesBackground />
      </div>
      
      {/* Header with higher z-index to stay above particles */}
      <div className="relative z-20">
        <Header />
      </div>
      
      {/* Main content with higher z-index and proper spacing */}
      <div className="relative z-10 min-h-screen px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-8 text-white flex items-center gap-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <CodeBracketIcon className="w-10 h-10 text-white" />
            My Projects
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                className="bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg hover:shadow-yellow-500/20 hover:bg-black/60 hover:border-yellow-400/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <h2 className="text-xl font-semibold text-yellow-300 mb-2">{project.title}</h2>
                <p className="text-white/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-sm bg-yellow-400/10 text-white/70 px-2 py-1 rounded-full border border-yellow-400/20"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-yellow-400 hover:text-yellow-300 hover:underline transition-colors duration-200"
                  >
                    View Project →
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}