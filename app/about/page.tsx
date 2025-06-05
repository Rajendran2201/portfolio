import React from "react";
import Header from "@/components/Header";

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-foreground)' }}>
    <Header />
    <section className="max-w-4xl mx-auto px-6 py-16 text-gray-100 bg-black rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold mb-6 text-yellow-400">About Me</h2>
      <p className="text-lg leading-relaxed mb-4">
        I am a dedicated and curious student specializing in Artificial Intelligence and Data Science at Coimbatore Institute of Technology (CIT). My passion lies in leveraging cutting-edge AI technologies to solve real-world problems and contribute meaningful solutions that impact society.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        Throughout my academic journey, I have cultivated strong analytical and programming skills, complemented by hands-on experience in diverse projects spanning advanced object detection, medical AI applications, and intelligent educational platforms. I am deeply interested in research that explores the intersection of machine learning, computer vision, and signal processing, striving to push the boundaries of what AI can achieve.
      </p>
      <p className="text-lg leading-relaxed">
        Beyond technical expertise, I actively seek opportunities to collaborate, learn, and mentor peers, believing that knowledge-sharing fuels innovation. I am enthusiastic about continuous learning and excited to contribute to impactful projects that address challenges across industries.
      </p>
    </section>
    </div>
  );
};

export default About;
