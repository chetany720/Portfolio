'use client';

import { Briefcase, Calendar, MapPin, Star } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: "AICTE",
      position: "AI-ML Virtual Intern",
      duration: "01/2025 - 03/2025",
      location: "India Edu Program",
      type: "Internship",
      description: "Successfully completed a 10-week AI-ML Virtual Internship under the India Edu Program, supported by Google for Developers. Gained hands-on experience in AI/ML concepts, model development, and real-world applications.",
      highlights: [
        "Google for Developers Support",
        "10-week comprehensive program", 
        "AI/ML model development",
        "Real-world applications"
      ],
      gradient: "from-blue-500 to-cyan-500",
      current: true
    },
    {
      company: "Celebal Technologies",
      position: "Data Science Intern", 
      duration: "03/2024 - 03/2024",
      location: "Remote",
      type: "Internship",
      description: "During my internship at Celebal Technologies, I worked on data science projects, gaining hands-on experience in Python, machine learning, and data analysis, which enhanced my problem-solving skills and understanding of data-driven decision-making.",
      highlights: [
        "Data Science Projects",
        "Python & Machine Learning",
        "Data Analysis & Visualization",
        "Problem-solving Enhancement"
      ],
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 animate-on-scroll">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="relative flex items-start gap-8"
                style={{ animationDelay: `${index * 300}ms` }}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex relative z-10">
                  <div className={`p-3 bg-gradient-to-r ${exp.gradient} rounded-full shadow-lg ${exp.current ? 'animate-pulse' : ''}`}>
                    <Briefcase size={24} className="text-white" />
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 group">
                  <div className={`absolute -inset-1 bg-gradient-to-r ${exp.gradient} rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500`}></div>
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
                    
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-white">{exp.position}</h3>
                          {exp.current && (
                            <span className="px-3 py-1 bg-green-500/20 text-green-300 border border-green-500/30 rounded-full text-xs font-medium animate-pulse">
                              Current
                            </span>
                          )}
                        </div>
                        <h4 className="text-xl text-white/80 font-medium mb-3">{exp.company}</h4>
                        
                        <div className="flex flex-wrap gap-4 text-white/60">
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span className="text-sm">{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                          <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-medium text-white/80">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/80 leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-3">
                      <h5 className="text-white font-semibold flex items-center gap-2">
                        <Star size={16} className="text-yellow-400" />
                        Key Highlights
                      </h5>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {exp.highlights.map((highlight, hIndex) => (
                          <div 
                            key={hIndex}
                            className="flex items-center gap-2 text-white/70 text-sm"
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.gradient}`}></div>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/20 rounded-full">
            <Briefcase size={20} className="text-white/80" />
            <span className="text-white/80 font-medium">Open to new opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
}