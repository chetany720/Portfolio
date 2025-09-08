'use client';

import { ExternalLink, Github, Eye, Brain, Shield, Database, Search, Film, Heart } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "HybridNet: Face Anti-Spoofing Detection",
      description: "Advanced deep learning approach for detecting face spoofing attacks using hybrid neural networks",
      tags: ["Deep Learning", "Computer Vision", "Python", "Security"],
      icon: Shield,
      gradient: "from-red-500 to-pink-500",
      featured: true
    },
    {
      title: "Kidney MRI Image Segmentation", 
      description: "Advanced medical imaging analysis using AttentionVgg16Unet architecture for precise kidney segmentation",
      tags: ["Deep Learning", "Medical Imaging", "Computer Vision", "Python"],
      icon: Brain,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Customer Lifetime Value Prediction",
      description: "Predictive analytics model for assessing customer value using machine learning algorithms",
      tags: ["Data Science", "Machine Learning", "Analytics", "Python"],
      icon: Database,
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Movie Recommendation System",
      description: "Personalized movie suggestion engine using collaborative filtering and content-based algorithms",
      tags: ["Machine Learning", "Recommendation System", "Python", "Data Analysis"],
      icon: Film,
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      title: "Website Vulnerability Scanner",
      description: "Comprehensive security scanning tool for identifying web application vulnerabilities",
      tags: ["Cybersecurity", "Python", "Web Security", "Vulnerability Assessment"],
      icon: Search,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 animate-on-scroll">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500`}></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 h-full hover:bg-white/10 transition-all duration-500">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                    <div className="p-3 sm:p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex-shrink-0">
                      <project.icon size={24} className="text-white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-white mb-2 text-lg sm:text-xl leading-tight">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <div className="flex items-center gap-2 text-yellow-400">
                          <Heart size={16} fill="currentColor" />
                          <span className="text-sm font-medium">Featured Project</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 sm:gap-3 flex-shrink-0">
                    <button className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 hover:scale-110 hidden sm:block">
                      <Github size={20} />
                    </button>
                    <button className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 hover:scale-110 hidden sm:block">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>

                <p className="text-white/80 leading-relaxed mb-6 text-sm sm:text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 sm:px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs sm:text-sm font-medium text-white/90 hover:bg-white/20 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Mobile Action Buttons */}
                <div className="flex gap-3 sm:hidden">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white/80 hover:bg-white/20 transition-colors duration-300">
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white/80 hover:bg-white/20 transition-colors duration-300">
                    <ExternalLink size={16} />
                    <span className="text-sm">Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}