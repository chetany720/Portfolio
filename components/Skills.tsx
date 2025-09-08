'use client';

import { useState } from 'react';
import { Code, Database, Globe, Server, Brain, Shield } from 'lucide-react';

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Python", "Java", "C Programming", "JavaScript", "PHP"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Frontend Development", 
      skills: ["React.js", "HTML", "CSS", "JavaScript"],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Server,
      title: "Backend & Frameworks",
      skills: ["ASP.NET", "Node.js", "Laravel Framework"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Database,
      title: "Database & CMS",
      skills: ["MySQL", "WordPress"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Brain,
      title: "Data Science & AI",
      skills: ["DSA", "Machine Learning", "Deep Learning", "Computer Vision"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      skills: ["Ethical Hacking", "Security Essentials", "Cloud Security"],
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 animate-on-scroll">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${category.color} rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500`}></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 h-full hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-3 sm:gap-4 mb-6">
                  <div className={`p-3 bg-gradient-to-r ${category.color} rounded-xl`}>
                    <category.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="relative overflow-hidden"
                      onMouseEnter={() => setHoveredSkill(`${index}-${skillIndex}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                        <div className="relative bg-white/5 rounded-lg px-3 sm:px-4 py-2 sm:py-3 border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer">
                          <span className="text-white/90 font-medium text-sm sm:text-base">{skill}</span>
                        <span className="text-white/90 font-medium">{skill}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Animation */}
        <div className="mt-16 relative overflow-hidden hidden sm:block">
          <div className="flex animate-marquee space-x-8">
            {[...Array(2)].map((_, groupIndex) => (
              <div key={groupIndex} className="flex space-x-8 min-w-full">
                {skillCategories.flatMap(cat => cat.skills).map((skill, index) => (
                  <div 
                    key={`${groupIndex}-${index}`}
                    className="flex-shrink-0 px-6 py-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-full border border-white/20 text-white/80 font-medium whitespace-nowrap"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}