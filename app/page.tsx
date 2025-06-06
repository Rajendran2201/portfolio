import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="bg-black text-white relative">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center mr-30 px-4 md:px-6">
        {/* Left - Image */}
        <div className="relative flex-shrink-0">
          <Image
            src="/hero.png"
            alt="Raj's photo"
            width={240}
            height={320}
            className="rounded-lg object-contain"
            priority
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

          <div className="flex flex-col items-center mt-8 md:relative md:inline-block md:items-start">
            <Link href="/contact">
              <button className="px-8 py-3 border-2 border-yellow-500 text-yellow-500 text-lg font-semibold hover:bg-yellow-500 hover:text-black transition rounded-lg relative z-10">
                Contact me
              </button>
            </Link>
            {/* Arrow and label for desktop (right of button) */}
            <svg
              className="hidden md:absolute md:left-full md:top-1/2 md:-translate-y-1/2 md:ml-2 md:w-32 md:h-16 md:block"
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
              className="hidden md:block md:absolute md:left-full md:top-1/2 md:ml-36 md:mt-2 text-white font-mono text-sm"
              style={{ fontFamily: "Comic Sans MS, Comic Sans, cursive" }}
            >
              Say hi!
            </span>
          </div>
        </div>
      </section>
      {/* Quote - Always Visible at Bottom */}
      <div className="w-full px-4 mt-4 mb-6">
        <p className="text-white-400 italic text-base mt-20 text-center max-w-xl mx-auto font-gloria-hallelujah">
          "Whoever is delighted in solitude, is either a wild beast or a god."
        </p>
      </div>
    </div>
  );
}