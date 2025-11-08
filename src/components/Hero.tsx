import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

// Generate random stars for background
const generateStars = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));
};

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [stars] = useState(generateStars(50));

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-purple-900 to-slate-950 overflow-hidden">
      {/* Animated Star Background */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animation: `twinkle ${star.duration}s ease-in-out infinite`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-pink-400 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-cyan-400 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="mb-6 sm:mb-8 inline-block animate-scale-in">
            <div className="relative w-32 sm:w-40 h-32 sm:h-40">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full animate-spin opacity-75" style={{ animationDuration: '3s' }}></div>
              <img
                src="/ck image.jpg"
                alt="Chetany Kalaneya"
                className="absolute inset-1 w-full h-full rounded-full border-4 border-slate-950 shadow-2xl object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 sm:mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-shift">
            CHETANY KALANEYA
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-pink-300 to-cyan-300 bg-clip-text text-transparent mb-6 sm:mb-8 font-semibold px-2">
            Software Developer | AI/ML Enthusiast | Problem Solver
          </p>

          <div className="flex justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 animate-slide-in-left flex-wrap" style={{ animationDelay: '0.2s' }}>
            <a
              href="https://github.com/chetany720"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
              <Github className="w-6 h-6 text-white relative z-10" />
            </a>
            <a
              href="https://www.linkedin.com/in/chetany-kalaneya/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-blue-600 to-cyan-600 p-3 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
              <Linkedin className="w-6 h-6 text-white relative z-10" />
            </a>
            <a
              href="mailto:chetanykalaneya720@gmail.com"
              className="group relative bg-gradient-to-br from-pink-600 to-red-600 p-3 rounded-full hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 hover:scale-110"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
              <Mail className="w-6 h-6 text-white relative z-10" />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="relative px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold shadow-lg overflow-hidden group bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-pink-500 hover:to-cyan-500 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 text-sm sm:text-base"
          >
            <span className="relative z-10">Explore My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-cyan-400 hover:text-pink-400 transition-colors"
      >
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>
    </section>
  );
}
