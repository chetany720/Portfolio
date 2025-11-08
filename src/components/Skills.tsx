import { useEffect, useRef, useState } from 'react';

const skills = [
  { name: 'Python', category: 'Programming' },
  { name: 'Java', category: 'Programming' },
  { name: 'C Programming', category: 'Programming' },
  { name: 'JavaScript', category: 'Web' },
  { name: 'React.js', category: 'Web' },
  { name: 'Node.js', category: 'Web' },
  { name: 'HTML', category: 'Web' },
  { name: 'CSS', category: 'Web' },
  { name: 'PHP', category: 'Web' },
  { name: 'ASP.NET', category: 'Framework' },
  { name: 'Laravel', category: 'Framework' },
  { name: 'MySQL', category: 'Database' },
  { name: 'WordPress', category: 'CMS' },
  { name: 'DSA', category: 'CS Fundamentals' },
];

export default function Skills() {
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
    <section id="skills" ref={sectionRef} className="py-20 bg-gradient-to-b from-slate-800 via-slate-700 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-shift">
            Technical Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`group relative bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 border border-purple-500/30 hover:border-purple-400 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="text-center relative z-10">
                  <h3 className="font-semibold text-gray-100 mb-2 group-hover:text-cyan-400 transition-colors">{skill.name}</h3>
                  <p className="text-xs bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-medium">{skill.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
