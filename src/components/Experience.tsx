import { useEffect, useRef, useState } from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Cybersecurity Intern',
    organization: 'All India Council for Technical Education (AICTE)',
    duration: 'Jul 2025 - Sep 2025 · 3 months',
    description: 'Completed cybersecurity internship focusing on security principles and best practices.',
  },
  {
    role: 'AI-ML Virtual Intern',
    organization: 'AICTE',
    duration: '01/2025 - 03/2025',
    description: 'Successfully completed a 10-week AI-ML Virtual Internship under the India Edu Program, supported by Google for Developers. Gained hands-on experience in AI/ML concepts, model development, and real-world applications.',
  },
  {
    role: 'Data Science Intern',
    organization: 'Celebal Technologies',
    duration: '03/2024 - 03/2024',
    description: 'Worked on data science projects, gaining hands-on experience in Python, machine learning, and data analysis, which enhanced problem-solving skills and understanding of data-driven decision-making.',
  },
];

export default function Experience() {
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
    <section id="experience" ref={sectionRef} className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-shift">
            Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.role}
                className={`bg-gradient-to-r from-purple-900/20 to-cyan-900/20 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 border border-purple-500/30 hover:border-purple-400 transform ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-3 rounded-lg flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-100 mb-2 group-hover:text-cyan-300 transition-colors">{exp.role}</h3>
                    <p className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold mb-2">{exp.organization}</p>
                    <p className="text-sm text-gray-400 mb-4">{exp.duration}</p>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-100 transition-colors">{exp.description}</p>
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
