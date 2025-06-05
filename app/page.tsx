import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <Header />

      {/* About Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6">
        <div className="relative">
          <Image
            src="/hero.png"
            alt="Raj's photo"
            width={300}
            height={400}
            className="rounded-lg"
          />
          <div className="absolute bottom-0 left-0 flex space-x-2">
            <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
            <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
            <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
          </div>
        </div>
        <div className="md:ml-16 mt-12 md:mt-0 text-center md:text-left w-full max-w-2xl">
          <p className="text-gray-400 text-lg">Hey guys,</p>
          <h1 className="text-6xl md:text-7xl font-bold mt-4">I'm Raj.</h1>
          <h2 className="text-3xl mt-6 font-bold leading-snug">
            <span className="relative inline-block mr-2">
              <span className="text-gray-300">I </span>
              <span className="inline-block relative">
                <span className="font-bold text-gray-300 underline decoration-4 decoration-gray-400 underline-offset-4">explore</span>
                {/* SVG underline */}
                <svg className="absolute left-0 bottom-0 w-full h-2" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,8 Q50,12 100,8" stroke="#d1d5db" strokeWidth="2" fill="none" />
                </svg>
              </span>
              <span className="text-gray-300">, </span>
            </span>
            <span className="relative mx-2 align-middle">
              <span className="relative z-10 text-gray-900 font-bold px-1">create</span>
              <span className="absolute inset-0 bg-yellow-400 rounded-sm z-0 h-5/6 top-1/2 -translate-y-1/2" style={{zIndex: 0}}></span>
            </span>
            <span className="text-gray-300"> and bring ideas to </span>
            <span className="relative ml-2 align-middle inline-block">
              <span className="font-bold text-gray-300 relative z-10">life</span>
              {/* Hand-drawn box using SVG */}
              <svg className="absolute -inset-1 z-0" width="100%" height="100%" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="116" height="36" rx="8" stroke="#d1d5db" strokeWidth="3" strokeDasharray="8 6"/>
              </svg>
            </span>.
          </h2>
          <p className="text-gray-400 mt-6 max-w-md text-lg">
            Undergraduate AI Student, who loves building things in public. Manifests code to work, writes blogs, and loves to teach.
          </p>
          <div className="relative inline-block mt-8">
            <Link href="/contact">
              <button className="px-8 py-3 border-2 border-yellow-500 text-yellow-500 text-lg font-semibold hover:bg-yellow-500 hover:text-black transition rounded-lg relative z-10">
                Contact me
              </button>
            </Link>
            {/* Handwritten arrow and note */}
            <svg className="absolute left-full top-1/2 -translate-y-1/2 ml-2 w-32 h-16" viewBox="0 0 120 60" fill="none">
              <path d="M0,40 Q60,10 120,40" stroke="#fff" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#fff"/>
              </marker>
            </svg>
            <span className="absolute left-full top-1/2 ml-36 mt-2 text-white font-mono text-sm" style={{fontFamily: 'Comic Sans MS, Comic Sans, cursive'}}>Say hi!</span>
          </div>
          <p className="font-gloria text-gray-400 mt-10 italic text-lg">
            "Whoever is delighted in solitude, is either a wild beast or a god."
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}