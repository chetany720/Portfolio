import React from 'react';
import { Code, Database, Globe, Terminal } from 'lucide-react';

const skills = [
  { name: 'Python', level: 90, category: 'Programming', icon: <Terminal className="w-6 h-6" /> },
  { name: 'Java', level: 85, category: 'Programming', icon: <Code className="w-6 h-6" /> },
  { name: 'C Programming', level: 80, category: 'Programming', icon: <Terminal className="w-6 h-6" /> },
  { name: 'ASP.NET', level: 75, category: 'Web', icon: <Globe className="w-6 h-6" /> },
  { name: 'HTML', level: 95, category: 'Web', icon: <Code className="w-6 h-6" /> },
  { name: 'CSS', level: 90, category: 'Web', icon: <Code className="w-6 h-6" /> },
  { name: 'JavaScript', level: 85, category: 'Programming', icon: <Code className="w-6 h-6" /> },
  { name: 'PHP', level: 80, category: 'Web', icon: <Globe className="w-6 h-6" /> },
  { name: 'MySQL', level: 85, category: 'Database', icon: <Database className="w-6 h-6" /> },
  { name: 'WordPress', level: 80, category: 'Web', icon: <Globe className="w-6 h-6" /> },
  { name: 'React.js', level: 85, category: 'Web', icon: <Code className="w-6 h-6" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="pt-24">
      <h2 className="section-heading">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div 
            key={skill.name}
            className="skill-card"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-blue-500 bg-opacity-20 rounded-lg text-blue-400">
                {skill.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <span className="text-sm text-gray-400">{skill.category}</span>
              </div>
            </div>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-blue-400">
                    {skill.level}%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-gray-700">
                <div 
                  style={{ width: `${skill.level}%` }}
                  className="animate-progress shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-blue-400 to-purple-500"
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}