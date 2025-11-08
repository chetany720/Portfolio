import { useEffect, useRef, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-shift">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="group order-2 md:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 mx-auto max-w-sm md:max-w-none">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src="/ck image.jpg"
                  alt="Chetany Kalaneya"
                  className="relative rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 w-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                I am a highly motivated and passionate individual with a strong interest in technology and problem-solving.
                Having completed my Bachelor of Computer Applications (BCA), I am currently pursuing a Master of Computer
                Applications (MCA) to deepen my expertise in the field of IT.
              </p>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                I am dedicated to continuous learning and enjoy applying new skills to real-world challenges. My key interests
                include software development, web technologies, and data structures, and I thrive on tackling complex problems
                to create efficient and innovative solutions.
              </p>

              <div className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-purple-500/30 hover:border-purple-500/60 hover:bg-purple-900/40 transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">Key Attributes</h3>
                <ul className="space-y-3">
                  <li className="flex items-start group/item">
                    <span className="text-cyan-400 mr-2 text-lg transform group-hover/item:scale-125 transition-transform flex-shrink-0">•</span>
                    <span className="text-gray-300 group-hover/item:text-cyan-300 transition-colors text-sm sm:text-base">Proven ability to adapt to new challenges and technologies quickly</span>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="text-purple-400 mr-2 text-lg transform group-hover/item:scale-125 transition-transform flex-shrink-0">•</span>
                    <span className="text-gray-300 group-hover/item:text-purple-300 transition-colors text-sm sm:text-base">Exceptional teamwork and communication skills</span>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="text-pink-400 mr-2 text-lg transform group-hover/item:scale-125 transition-transform flex-shrink-0">•</span>
                    <span className="text-gray-300 group-hover/item:text-pink-300 transition-colors text-sm sm:text-base">Passion for leveraging technology to solve real-world problems</span>
                  </li>
                </ul>
              </div>

              <div className="flex items-center space-x-3 sm:space-x-4 pt-4 flex-wrap gap-3">
                <div className="bg-gradient-to-r from-cyan-900/40 to-cyan-800/40 px-3 sm:px-4 py-2 rounded-full border border-cyan-500/50 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 cursor-default">
                  <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent font-semibold text-sm sm:text-base">English</span>
                </div>
                <div className="bg-gradient-to-r from-purple-900/40 to-purple-800/40 px-3 sm:px-4 py-2 rounded-full border border-purple-500/50 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 cursor-default">
                  <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent font-semibold text-sm sm:text-base">Hindi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
