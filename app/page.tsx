import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="h-screen bg-black text-white relative overflow-hidden">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center px-6 relative" style={{ height: 'calc(100vh - 120px)' }}>
        {/* Left - Image */}
        <div className="relative flex-shrink-0">
          <Image
            src="/hero.png"
            alt="Raj's photo"
            width={240}
            height={320}
            className="rounded-lg object-contain"
          />
          <div className="absolute bottom-0 left-0 flex space-x-2">
            <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
            <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          </div>
        </div>

        {/* Right - Text */}
        <div className="md:ml-12 mt-10 md:mt-0 text-center md:text-left w-full max-w-xl">
          <p className="text-yellow-400 text-lg">Hey guys,</p>
          <h1 className="text-5xl md:text-6xl font-bold mt-4">I'm Raj.</h1>
          <h2 className="text-xl md:text-2xl mt-6 font-bold leading-tight whitespace-nowrap">
            <span className="text-gray-300">I </span>
            <span className="inline-block relative">
              <span className="font-bold text-gray-300 underline decoration-2 decoration-gray-400 underline-offset-2">
                explore
              </span>
              <svg
                className="absolute left-0 bottom-0 w-full h-1"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,8 Q50,12 100,8"
                  stroke="#d1d5db"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </span>
            <span className="text-gray-300">, </span>
            <span className="relative mx-1 align-middle">
              <span className="relative z-10 text-gray-900 font-bold px-1">
                create
              </span>
              <span className="absolute inset-0 bg-yellow-400 rounded-sm z-0 h-4/5 top-1/2 -translate-y-1/2"></span>
            </span>
            <span className="text-gray-300"> and bring ideas to </span>
            <span className="relative ml-1 align-middle inline-block">
              <span className="font-bold text-gray-300 relative z-10 px-1">
                life
              </span>
              <svg
                className="absolute top-0 left-0 w-full h-full z-0"
                viewBox="0 0 120 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <rect
                  x="2"
                  y="2"
                  width="116"
                  height="36"
                  rx="6"
                  stroke="#d1d5db"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                />
              </svg>
            </span>
            <span className="text-gray-300">.</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-md text-lg">
            Undergraduate AI Student, who loves building things in public.
            Manifests code to work, writes blogs, and loves to teach.
          </p>

          <div className="relative inline-block mt-8">
            <Link href="/contact">
              <button className="px-8 py-3 border-2 border-yellow-500 text-yellow-500 text-lg font-semibold hover:bg-yellow-500 hover:text-black transition rounded-lg relative z-10">
                Contact me
              </button>
            </Link>

            {/* Handwritten arrow and note */}
            <svg
              className="absolute left-full top-1/2 -translate-y-1/2 ml-2 w-32 h-16"
              viewBox="0 0 120 60"
              fill="none"
            >
              <path
                d="M0,40 Q60,10 120,40"
                stroke="#fff"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead)"
              />
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="10"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 10 3.5, 0 7" fill="#fff" />
              </marker>
            </svg>

            <span
              className="absolute left-full top-1/2 ml-36 mt-2 text-white font-mono text-sm"
              style={{ fontFamily: "Comic Sans MS, Comic Sans, cursive" }}
            >
              Say hi!
            </span>
          </div>
        </div>

        {/* Quote - Always Visible at Bottom */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full px-4 z-20">
          <p className="text-white-400 italic text-base text-center max-w-xl mx-auto">
            "Whoever is delighted in solitude, is either a wild beast or a god."
          </p>
        </div>
      </section>
    </div>
  );
}