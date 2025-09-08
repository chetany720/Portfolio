'use client';

import { GraduationCap, Award, Calendar } from 'lucide-react';

export default function Education() {
  const education = [
    {
      institution: "University of Engineering and Management Jaipur",
      degree: "Master of Computer Applications (MCA)",
      status: "Currently Pursuing",
      year: "2024-2026",
      description: "Advanced studies in computer applications, software engineering, and emerging technologies",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      institution: "University of Engineering and Management Jaipur", 
      degree: "Bachelor of Computer Applications (BCA)",
      status: "Completed",
      year: "2022-2025",
      cgpa: "9.84 CGPA",
      description: "Comprehensive foundation in computer science, programming, and software development",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      institution: "Nucleus Career Point Chomu",
      degree: "Senior Secondary Education",
      status: "Completed", 
      year: "2021",
      cgpa: "91.40%",
      description: "Strong academic foundation with focus on mathematics and science",
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="education" className="py-20 px-6 animate-on-scroll">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Educational <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 hidden md:block"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="relative flex items-start gap-8"
                style={{ animationDelay: `${index * 300}ms` }}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex relative z-10">
                  <div className={`p-3 bg-gradient-to-r ${edu.gradient} rounded-full shadow-lg`}>
                    <GraduationCap size={24} className="text-white" />
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 group">
                  <div className={`absolute -inset-1 bg-gradient-to-r ${edu.gradient} rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500`}></div>
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                      <div className="flex items-center gap-3 mb-2 lg:mb-0">
                        <Calendar size={18} className="text-white/60" />
                        <span className="text-white/80 font-medium">{edu.year}</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          edu.status === 'Currently Pursuing' 
                            ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' 
                            : 'bg-green-500/20 text-green-300 border border-green-500/30'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                      
                      {edu.cgpa && (
                        <div className="flex items-center gap-2">
                          <Award size={18} className="text-yellow-400" />
                          <span className="text-yellow-400 font-bold">{edu.cgpa}</span>
                        </div>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                    <h4 className="text-lg text-white/80 font-medium mb-4">{edu.institution}</h4>
                    <p className="text-white/70 leading-relaxed">{edu.description}</p>

                    {/* Academic Highlights */}
                    {index === 1 && (
                      <div className="mt-6 grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                        <div className="text-center">
                          <div className="text-xl font-bold text-cyan-400">9.84</div>
                          <div className="text-white/60 text-sm">CGPA</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold text-green-400">Excellent</div>
                          <div className="text-white/60 text-sm">Performance</div>
                        </div>
                      </div>
                    )}
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