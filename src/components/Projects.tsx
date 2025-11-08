import { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'HybridNet: Face Anti-Spoofing Detection',
    description: 'A Deep Learning Approach for Face Anti-Spoofing using multi-backbone ensemble with attention fusion',
    technologies: ['Python', 'Deep Learning', 'Computer Vision'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Kidney MRI Image Segmentation',
    description: 'Advanced medical imaging analysis using AttentionVgg16Unet architecture',
    technologies: ['Python', 'Deep Learning', 'Computer Vision'],
    color: 'from-cyan-500 to-teal-500',
  },
  {
    title: 'Customer Lifetime Value Prediction',
    description: 'Predictive analytics model for customer value assessment',
    technologies: ['Data Science', 'Machine Learning', 'Analytics'],
    color: 'from-teal-500 to-green-500',
  },
  {
    title: 'Movie Recommendation System',
    description: 'Personalized movie suggestions using collaborative filtering',
    technologies: ['Python', 'ML', 'Data Analysis'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Website Vulnerability Scanner',
    description: 'Security tool for identifying web application vulnerabilities',
    technologies: ['Python', 'Cybersecurity', 'Web Security'],
    color: 'from-blue-600 to-indigo-600',
  },
];

export default function Projects() {
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
    <section id="projects" ref={sectionRef} className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-shift">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group relative bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 overflow-hidden border border-purple-500/30 hover:border-purple-400 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>

                <div className="p-6 relative z-10">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-purple-500/50 transition-all`}>
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-4 leading-relaxed group-hover:text-gray-200 transition-colors">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-900/40 text-purple-300 text-sm rounded-full border border-purple-500/50 hover:border-purple-400 hover:text-purple-200 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-br from-purple-900/30 to-cyan-900/30 backdrop-blur-sm p-8 rounded-xl border border-purple-500/30 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-3">Research Paper Presentation</h3>
              <p className="text-gray-200 text-lg font-semibold mb-3">
                HybridNet: Multi-Backbone Ensemble with Attention Fusion for Face Anti-Spoofing
              </p>
              <p className="bg-gradient-to-r from-cyan-400 to-purple-300 bg-clip-text text-transparent mb-4 font-semibold">
                University of Engineering & Management, Jaipur (in collaboration with Springer Nature)
              </p>
              <div className="flex justify-center space-x-4 flex-wrap gap-2">
                <span className="px-4 py-2 bg-purple-900/40 text-purple-300 rounded-full border border-purple-500/50 hover:border-purple-400 transition-all">
                  Deep Learning
                </span>
                <span className="px-4 py-2 bg-cyan-900/40 text-cyan-300 rounded-full border border-cyan-500/50 hover:border-cyan-400 transition-all">
                  Machine Learning
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
