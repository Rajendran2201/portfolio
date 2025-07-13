'use-client';
import Header from '@/components/Header';
import { getMediumLinks } from '@/lib/getMediumLinks';
import { getGitHubPosts } from '@/lib/githubPosts';
import ParticlesBackground from '@/components/ParticlesBackground';
import BooksCarousel from '@/components/booksCarousel';

export default async function Blog() {
  const mediumPosts = await getMediumLinks();
  const githubPosts = await getGitHubPosts();

  const allPosts = [
    ...mediumPosts.map((post) => ({
      title: post.title,
      link: post.link,
      type: 'medium',
    })),
    ...githubPosts.map((post) => ({
      title: post.slug,
      link: `/posts/${post.slug}`,
      type: 'github',
    })),
  ];

  return (
    <>
      <ParticlesBackground />

      <div className="relative min-h-screen bg-transparent text-white z-40">
        <Header />

        {/* Main Content - Two Column Layout */}
        <div className="py-16 px-6 max-w-7xl mx-auto relative z-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column - Blog Section */}
            <section id="blog">
              <h2 className="text-4xl font-bold mb-8 text-white text-left">Blog</h2>

              <ul className="space-y-4 list-disc list-inside text-white text-base">
                {allPosts.map((post, index) => (
                  <li
                    key={index}
                    className="hover:text-yellow-400 transition-colors duration-200"
                  >
                    <a
                      href={post.link}
                      target={post.type === 'medium' ? '_blank' : '_self'}
                      rel={post.type === 'medium' ? 'noopener noreferrer' : undefined}
                      className="underline-offset-2 hover:underline"
                    >
                      {post.title}
                    </a>
                    <span className="ml-2 text-xs text-gray-400">
                      [{post.type === 'medium' ? 'Medium' : 'GitHub'}]
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Right Column - Music Player */}
            <section id="music" className="lg:sticky lg:top-24 lg:self-start">
              <div className="w-full max-w-md mx-auto lg:mx-0 relative">
                {/* Floating vinyl record decoration */}
                <div className="absolute -top-8 -left-8 w-16 h-16 opacity-20 animate-spin-slow">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="48" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2"/>
                    <circle cx="50" cy="50" r="35" fill="transparent" stroke="#f59e0b" strokeWidth="1"/>
                    <circle cx="50" cy="50" r="25" fill="transparent" stroke="#f59e0b" strokeWidth="1"/>
                    <circle cx="50" cy="50" r="15" fill="transparent" stroke="#f59e0b" strokeWidth="1"/>
                    <circle cx="50" cy="50" r="6" fill="#1f2937"/>
                  </svg>
                </div>

                {/* Main player container with glassmorphism effect */}
                <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 shadow-2xl overflow-hidden">
                  
                  {/* Animated background glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-transparent to-yellow-400/10 animate-pulse"></div>
                  
                  {/* Musical notes floating animation */}
                  <div className="absolute top-2 right-2 text-yellow-400/30 animate-bounce">♪</div>
                  <div className="absolute top-4 right-8 text-yellow-400/20 animate-bounce" style={{animationDelay: '0.5s'}}>♫</div>
                  <div className="absolute top-6 right-4 text-yellow-400/25 animate-bounce" style={{animationDelay: '1s'}}>♪</div>

                  {/* Header with gradient text */}
                  <div className="relative z-10 mb-4">
                    <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                      Now Playing
                    </h3>
                    <div className="flex items-center mt-2 text-sm text-gray-300">
                      <div className="flex space-x-1 mr-3">
                        <div className="w-1 h-4 bg-yellow-400 animate-pulse" style={{animationDelay: '0s'}}></div>
                        <div className="w-1 h-6 bg-yellow-400 animate-pulse" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-1 h-3 bg-yellow-400 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-1 h-5 bg-yellow-400 animate-pulse" style={{animationDelay: '0.3s'}}></div>
                        <div className="w-1 h-2 bg-yellow-400 animate-pulse" style={{animationDelay: '0.4s'}}></div>
                      </div>
                      <span className="animate-pulse">🎧 Currently vibing to</span>
                    </div>
                  </div>

                  {/* Song info with creative styling */}
                  <div className="relative z-10 mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg animate-pulse">
                        <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM15.657 6.343a1 1 0 011.414 0A9.972 9.972 0 0119 12a9.972 9.972 0 01-1.929 5.657 1 1 0 11-1.414-1.414A7.971 7.971 0 0017 12c0-1.594-.463-3.07-1.343-4.243a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 12a5.983 5.983 0 01-.757 2.829 1 1 0 11-1.415-1.414A3.983 3.983 0 0013 12a3.983 3.983 0 00-.172-1.415 1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-white">Photograph</h4>
                        <p className="text-gray-400 text-sm">Ed Sheeran</p>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Spotify iframe with custom overlay */}
                  <div className="relative z-10">
                    <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-600/50">
                      {/* Custom overlay for additional styling */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent pointer-events-none z-10"></div>
                      
                      <iframe
                        src="https://open.spotify.com/embed/track/1HNkqx9Ahdgi1Ixy2xkKkL?utm_source=generator&theme=0"
                        width="100%"
                        height="152"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        className="rounded-xl"
                      />
                    </div>
                  </div>

                  {/* Custom progress bar visualization */}
                  <div className="relative z-10 mt-4">
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                      <span>0:00</span>
                      <span>3:24</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-1.5 rounded-full animate-pulse" style={{width: '35%'}}></div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-full blur-xl"></div>
                  <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-full blur-xl"></div>
                </div>

                {/* Sound waves decoration */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 opacity-30">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-yellow-400 rounded-full animate-pulse"
                      style={{
                        height: `${Math.random() * 20 + 10}px`,
                        animationDelay: `${i * 0.1}s`,
                        animationDuration: '1.5s'
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Books Carousel - Full Width Below */}
        <section id="books" className="py-16 px-6 max-w-6xl mx-auto relative z-40">
          <h2 className="text-4xl font-bold mb-8 text-white text-left">📚 Books I've Read</h2>
          <BooksCarousel />
        </section>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </>
  );
}