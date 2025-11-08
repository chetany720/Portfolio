import { useEffect, useRef, useState } from 'react';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'University of Engineering and Management Jaipur',
    status: 'Pursuing',
    year: '2025',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'University of Engineering and Management Jaipur',
    status: '8.68 CGPA',
    year: '2025',
  },
  {
    degree: 'Senior Secondary',
    institution: 'Nucleus Career Point Chomu',
    status: '91.40%',
    year: '2021',
  },
];

export default function Education() {
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
    <section id="education" ref={sectionRef} className="py-20 bg-gradient-to-b from-slate-800 via-slate-700 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-shift">
            Education
          </h2>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={edu.degree}
                className={`bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 border border-purple-500/30 hover:border-purple-400 transform ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-3 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-cyan-300 transition-colors">{edu.degree}</h3>
                    <p className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold mb-2">{edu.institution}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-300">
                      <span className="bg-purple-900/40 text-purple-300 px-3 py-1 rounded-full border border-purple-500/50">
                        {edu.status}
                      </span>
                      <span>{edu.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
