'use client';

import { useEffect, useRef } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Courses from '@/components/Courses';
import Contact from '@/components/Contact';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 -z-10" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent -z-10" />
      
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Courses />
      <Contact />
    </div>
  );
}