import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Courses from './components/Courses';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-10 bg-cover bg-center"></div>
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4 py-8 space-y-20">
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Education />
          <Courses />
          <Contact />
        </main>
        <footer className="bg-gray-800 bg-opacity-50 py-6 mt-20 border-t border-gray-700">
          <div className="container mx-auto px-4 text-center text-gray-400">
            <p className="text-sm">© 2024 Chetany Kalaneya. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;