'use client'

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import ParticlesBackground from "@/components/ParticlesBackground";
import { motion } from "framer-motion";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { projects } from "@/src/data/projectsData";


export default function Projects() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      <ParticlesBackground />
      <div className="relative min-h-screen bg-transparent text-white">
        <div className="relative z-50">
          <Header />
        </div>

        <div className="relative z-40 px-6 py-16 max-w-5xl mx-auto">
          {/* Skills Section */}
          {mounted && (
            <motion.div
              className="mb-12 bg-gray-900/80 backdrop-blur-lg p-6 rounded-2xl border border-gray-700/50 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-yellow-300 mb-4">
                Languages and Tools
              </h2>
              <div className="flex flex-wrap gap-4">
                {[
                  {
                    name: "C",
                    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
                  },
                  {
                    name: "C++",
                    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
                  },
                  {
                    name: "C#",
                    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
                  },
                  {
                    name: "CSS3",
                    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
                  },
                  {
                    name: "Git",
                    src: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
                  },
                  {
                    name: "Bootstrap",
                    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
                  },
                  {
                    name: "HTML5",
                    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
                  },
                  {
                    name: "Java",
                    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
                  },
                  {
                    name: "JavaScript",
                    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
                  },
                  {
                    name: "Python",
                    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
                  },
                  {
                    name: "Flask",
                    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg",
                  },
                  {
                    name: "R",
                    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/r/r-original.svg",
                  },
                  {
                    name: "Pandas",
                    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg",
                  },
                  {
                    name: "Scikit-learn",
                    src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
                  },
                  {
                    name: "Seaborn",
                    src: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg",
                  },
                  {
                    name: "TensorFlow",
                    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg",
                  },
                  {
                    name: "PyTorch",
                    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg",
                  },
                  {
                    name: "MySQL",
                    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
                  },
                  {
                    name: "MongoDB",
                    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
                  },
                  {
                    name: "OpenCV",
                    src: "https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg",
                  },
                  {
                    name: "React",
                    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
                  },
                  {
                    name: "Next.js",
                    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
                  },
                  {
                    name: "Django",
                    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg",
                  },
                  {
                    name: "Firebase",
                    src: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
                  },
                  {
                    name: "AWS",
                    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
                  },
                ].map((tool, index) => (
                  <img
                    key={index}
                    src={tool.src}
                    alt={tool.name}
                    title={tool.name}
                    width="40"
                    height="40"
                    className="hover:scale-110 transition-transform duration-200"
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* Projects Section */}
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
                className="bg-gray-900/80 backdrop-blur-lg p-6 rounded-2xl border border-gray-700/50 shadow-2xl hover:shadow-yellow-500/20 hover:bg-gray-900/90 hover:border-yellow-400/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg mb-4 border border-yellow-500/30 shadow-inner"
                  />
                )}

                <h2 className="text-xl font-semibold text-yellow-300 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-sm bg-yellow-400/20 text-yellow-200 px-3 py-1 rounded-full border border-yellow-400/30 backdrop-blur-sm"
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
                    className="inline-flex items-center text-sm text-yellow-400 hover:text-yellow-300 hover:underline transition-colors duration-200 font-medium"
                  >
                    View Project
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
