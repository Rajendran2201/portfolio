"use client";

import React, { useState, useEffect } from "react";
import { aboutContent } from "@/src/data/aboutContent";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import dynamic from "next/dynamic";
import Header from "@/components/Header";

const ParticlesBackground = dynamic(() => import("@/components/ParticlesBackground"), {
  ssr: false,
});

const photoGallery = [
  "/images/photo1.jpeg",
  "/images/photo2.jpeg",
  "/images/photo3.jpeg",
  "/images/photo4.jpeg",
  "/images/photo5.jpeg",
];

const About: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-black/60">
      {/* Particles background fixed and behind everything - only render on client */}
      {isClient && (
        <div className="fixed inset-0 z-0">
          <ParticlesBackground />
        </div>
      )}

      {/* Foreground content with higher z-index */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-gray-100 bg-black/60 rounded-lg shadow-lg backdrop-blur-md">
          {/* Heading and Resume Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400">
              {aboutContent.title}
            </h2>
            <a
              href="/resume.pdf"
              download
              className="px-5 py-2 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-400 transition"
            >
              Download Resume
            </a>
          </div>

          {aboutContent.highlights.map((paragraph, idx) => (
            <p key={idx} className="text-base sm:text-lg leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}

          {/* GitHub Contributions */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
              GitHub Contributions
            </h3>
            <img
              src="https://ghchart.rshah.org/Rajendran2201"
              alt="GitHub contribution graph"
              className="w-full max-w-xl mx-auto rounded-lg shadow-lg"
            />
          </div>

          {/* LeetCode Contributions */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
              LeetCode Contributions
            </h3>
            <img
              src="https://leetcard.jacoblin.cool/rajendran2201?theme=dark"
              alt="LeetCode stats card"
              className="w-full max-w-xl mx-auto rounded-lg shadow-lg"
            />
          </div>

          {/* WakaTime Activity */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
              Coding Activity
            </h3>
            <div className="w-full max-w-3xl mx-auto rounded-lg overflow-hidden">
              <embed
                src="https://wakatime.com/share/@62373636-da3e-441b-8aac-c95bda45f20d/7e7da86c-120d-47fa-81b6-f462dd78eaa9.svg"
                type="image/svg+xml"
                className="w-full h-[300px] sm:h-[400px]"
              />
            </div>
          </div>

          {/* Photo Carousel */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Photos</h3>
            <div className="w-full overflow-hidden relative">
              <div className="flex gap-4 animate-slide-infinite w-max">
                {[...photoGallery, ...photoGallery].map((src, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 w-56 sm:w-64 h-36 sm:h-40 rounded-lg overflow-hidden shadow-lg border border-gray-700"
                  >
                    <img
                      src={src}
                      alt={`Photo ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
