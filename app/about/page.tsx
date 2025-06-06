"use client";

import React from "react";
import Header from "@/components/Header";
import { aboutContent } from "@/src/data/aboutContent";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const photoGallery = [
  "/images/photo1.jpeg",
  "/images/photo2.jpeg",
  "/images/photo3.jpeg",
  "/images/photo4.jpeg",
  "/images/photo5.jpeg",
  // Add your image paths here
];

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <section className="max-w-4xl mx-auto px-6 py-16 text-gray-100 bg-black/80 rounded-lg shadow-lg">
        {/* Heading with Download Button */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-4xl font-bold text-yellow-400">{aboutContent.title}</h2>
          <a
            href="/resume.pdf"
            download
            className="px-5 py-2 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-400 transition"
          >
            Download Resume
          </a>
        </div>

        {aboutContent.highlights.map((paragraph, idx) => (
          <p key={idx} className="text-lg leading-relaxed mb-4">
            {paragraph}
          </p>
        ))}

        {/* GitHub Contribution Graph */}
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

        {/* LeetCode Contribution Graph */}
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

        {/* WakaTime Coding Activity */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
            Coding Activity
          </h3>
          <div className="w-full max-w-3xl mx-auto rounded-lg overflow-hidden">
            <embed
              src="https://wakatime.com/share/@62373636-da3e-441b-8aac-c95bda45f20d/7e7da86c-120d-47fa-81b6-f462dd78eaa9.svg"
              type="image/svg+xml"
              className="w-full h-[400px]"
            />
          </div>
        </div>

        {/* Photo Carousel */}
      {/* Photo Carousel (3-at-a-time scrollable view) */}
{/* Infinite Scrolling Photo Carousel */}
<div className="mt-12 overflow-hidden">
  <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
    Photos
  </h3>
  <div className="w-full overflow-hidden relative">
    <div className="flex gap-4 animate-slide-infinite w-max">
      {[...photoGallery, ...photoGallery].map((src, idx) => (
        <div
          key={idx}
          className="flex-shrink-0 w-64 h-40 rounded-lg overflow-hidden shadow-lg border border-gray-700"
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
  );
};

export default About;
