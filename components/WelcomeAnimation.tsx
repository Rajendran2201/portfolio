'use client'
import { useEffect, useState } from "react";

export default function WelcomeAnimation() {
  const [visible, setVisible] = useState(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    setAnimate(true);
  }, []);

  const handleOkClick = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center px-4">
        {/* Character Container */}
        <div 
          className={`relative bg-gradient-to-br from-gray-900 via-black to-gray-800 p-6 sm:p-8 rounded-3xl shadow-2xl border-4 border-yellow-400/30 transform transition-all duration-700
            ${animate ? 'scale-100 opacity-100 rotate-0' : 'scale-0 opacity-0 rotate-180'}
            max-w-[90vw] sm:max-w-md
          `}
          style={{
            animation: animate ? 'bounceIn 0.8s ease-out, float 2s ease-in-out infinite 0.8s' : 'none',
            boxShadow: '0 0 50px rgba(251, 191, 36, 0.3), inset 0 0 30px rgba(251, 191, 36, 0.1)'
          }}
        >
          {/* Anime Character */}
          <div className="text-center">
            <div className="mb-6 relative">
              {/* Character Image Container */}
              <div 
                className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto rounded-full border-4 border-yellow-400 shadow-lg overflow-hidden"
                style={{
                  animation: 'characterFloat 3s ease-in-out infinite, glow 2s ease-in-out infinite alternate',
                  background: 'linear-gradient(135deg, #1f2937 0%, #111827 50%, #0f172a 100%)'
                }}
              >
                {/* Anime Character Illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="180" height="180" viewBox="0 0 180 180" className="drop-shadow-xl">
                    {/* Character Head */}
                    <circle cx="90" cy="90" r="70" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2"/>
                    
                    {/* Hair */}
                    <path d="M 30 70 Q 45 20 90 30 Q 135 20 150 70 Q 140 25 90 25 Q 40 25 30 70" fill="#1f2937"/>
                    <path d="M 35 75 Q 50 35 90 40 Q 130 35 145 75" fill="#374151"/>
                    
                    {/* Hair strands */}
                    <path d="M 60 35 Q 70 25 80 40" stroke="#4b5563" strokeWidth="3" fill="none"/>
                    <path d="M 100 35 Q 110 25 120 40" stroke="#4b5563" strokeWidth="3" fill="none"/>
                    
                    {/* Eyes */}
                    <ellipse cx="70" cy="80" rx="12" ry="8" fill="white"/>
                    <ellipse cx="110" cy="80" rx="12" ry="8" fill="white"/>
                    
                    {/* Golden irises */}
                    <circle cx="70" cy="80" r="8" fill="#fbbf24">
                      <animate attributeName="r" values="8;6;8" dur="3s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="110" cy="80" r="8" fill="#fbbf24">
                      <animate attributeName="r" values="8;6;8" dur="3s" repeatCount="indefinite"/>
                    </circle>
                    
                    {/* Pupils */}
                    <circle cx="70" cy="80" r="4" fill="black">
                      <animate attributeName="r" values="4;2;4" dur="3s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="110" cy="80" r="4" fill="black">
                      <animate attributeName="r" values="4;2;4" dur="3s" repeatCount="indefinite"/>
                    </circle>
                    
                    {/* Eye highlights */}
                    <circle cx="72" cy="77" r="2" fill="white" opacity="0.8">
                      <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="112" cy="77" r="2" fill="white" opacity="0.8">
                      <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    
                    {/* Golden sparkles in eyes */}
                    <circle cx="68" cy="82" r="1" fill="#fde047">
                      <animate attributeName="opacity" values="1;0;1" dur="1.5s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="108" cy="82" r="1" fill="#fde047">
                      <animate attributeName="opacity" values="1;0;1" dur="1.5s" repeatCount="indefinite"/>
                    </circle>
                    
                    {/* Eyebrows */}
                    <path d="M 60 65 Q 70 62 80 65" stroke="#1f2937" strokeWidth="3" fill="none"/>
                    <path d="M 100 65 Q 110 62 120 65" stroke="#1f2937" strokeWidth="3" fill="none"/>
                    
                    {/* Nose */}
                    <path d="M 88 95 L 90 100 L 92 95" stroke="#d97706" strokeWidth="2" fill="none"/>
                    
                    {/* Mouth */}
                    <path d="M 80 110 Q 90 118 100 110" stroke="#dc2626" strokeWidth="3" fill="none" strokeLinecap="round">
                      <animate attributeName="d" values="M 80 110 Q 90 118 100 110;M 80 110 Q 90 122 100 110;M 80 110 Q 90 118 100 110" dur="4s" repeatCount="indefinite"/>
                    </path>
                    
                    {/* Neck */}
                    <rect x="85" y="155" width="10" height="20" fill="#fef3c7"/>
                    
                    {/* Clothing collar */}
                    <path d="M 75 175 L 90 165 L 105 175 L 90 185 Z" fill="#1f2937" stroke="#fbbf24" strokeWidth="2"/>
                  </svg>
                </div>
                
                {/* Floating golden particles around character */}
                <div className="absolute top-2 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                <div className="absolute top-8 right-2 w-1 h-1 bg-yellow-300 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute bottom-6 left-2 w-1.5 h-1.5 bg-yellow-500 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-2 right-6 w-2 h-2 bg-yellow-400 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
              </div>
            </div>
            
            {/* Speech Bubble */}
            <div className="relative bg-black border-2 border-yellow-400 rounded-2xl p-4 sm:p-6 mb-6 shadow-xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-b-6 border-transparent border-b-black"></div>
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-5 border-r-5 border-b-5 border-transparent border-b-yellow-400"></div>
              
              <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-2">
                Welcome! ✨
              </h2>
              <p className="text-yellow-200 text-base sm:text-lg">
                Ready to explore my world?
              </p>
              
              {/* Floating golden sparkles */}
              <div className="absolute -top-2 -right-2">
                <span className="text-yellow-400 text-lg animate-pulse">⭐</span>
              </div>
              <div className="absolute -bottom-1 -left-1">
                <span className="text-yellow-300 text-sm animate-pulse" style={{animationDelay: '0.5s'}}>✨</span>
              </div>
            </div>
            
            {/* OK Button */}
            <button
              onClick={handleOkClick}
              className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-bold py-3 px-8 sm:py-4 sm:px-10 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95 border-2 border-yellow-300 text-lg sm:text-xl"
              style={{
                animation: 'buttonGlow 2s ease-in-out infinite',
                textShadow: '0 1px 2px rgba(0,0,0,0.5)'
              }}
            >
              Let's Go! 🚀
            </button>
          </div>
          
          {/* Corner decorative elements */}
          <div className="absolute -top-3 -left-3 w-6 h-6 border-2 border-yellow-400 rounded-full animate-spin" style={{animationDuration: '3s'}}></div>
          <div className="absolute -top-3 -right-3 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-3 -left-3 w-5 h-5 bg-yellow-500 rounded-full animate-bounce"></div>
          <div className="absolute -bottom-3 -right-3 w-6 h-6 border-2 border-yellow-300 rotate-45 animate-pulse"></div>
        </div>
      </div>
      
      {/* Custom Animations */}
      <style jsx>{`
        @keyframes bounceIn {
          0% {
            transform: scale(0.3) rotate(180deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.05) rotate(-10deg);
          }
          70% {
            transform: scale(0.9) rotate(5deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(1deg);
          }
        }
        
        @keyframes characterFloat {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-8px) scale(1.02);
          }
        }
        
        @keyframes glow {
          0% {
            box-shadow: 0 0 20px rgba(251, 191, 36, 0.3);
          }
          100% {
            box-shadow: 0 0 30px rgba(251, 191, 36, 0.6);
          }
        }
        
        @keyframes buttonGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(251, 191, 36, 0.4);
          }
          50% {
            box-shadow: 0 0 35px rgba(251, 191, 36, 0.8);
          }
        }
      `}</style>
    </>
  );
}
