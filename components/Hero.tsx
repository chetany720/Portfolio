'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = 'Software Developer & AI Enthusiast';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="text-center z-10 px-6 max-w-6xl mx-auto">
        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
              CHETANY
            </span>
            <br />
            <span className="text-white/90">KALANEYA</span>
          </h1>
        </div>

        {/* Animated Subtitle */}
        <div className="mb-12 h-16 flex items-center justify-center">
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-light text-center">
            {text}
            <span className="animate-ping">|</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <button 
            onClick={() => scrollToSection('projects')}
            className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-blue-500/25 text-sm sm:text-base"
          >
            View My Work
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/20 text-white rounded-full font-semibold hover:bg-white/10 hover:border-white/40 transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
          >
            Get In Touch
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 sm:gap-6 mb-16">
          <a 
            href="https://github.com/chetany720" 
            target="_blank"
            className="p-2 sm:p-3 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
          >
            <Github size={20} className="sm:w-6 sm:h-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/chetany-kalaneya/" 
            target="_blank"
            className="p-2 sm:p-3 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={20} className="sm:w-6 sm:h-6" />
          </a>
          <a 
            href="mailto:chetanykalaneya720@gmail.com"
            className="p-2 sm:p-3 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
          >
            <Mail size={20} className="sm:w-6 sm:h-6" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={() => scrollToSection('about')}
          className="animate-bounce text-white/40 hover:text-white/80 transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </section>
  );
}