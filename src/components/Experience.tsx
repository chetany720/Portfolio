import React from 'react';
import { Briefcase, Calendar, Building2 } from 'lucide-react';

const experiences = [
  {
    company: 'AICTE',
    position: 'AI/ML Intern',
    period: '01/2025 - 03/2025',
    description: 'Successfully completed a 10-week AI-ML Virtual Internship under the India Edu Program, supported by Google for Developers. Gained hands-on experience in AI/ML concepts, model development, and real-world applications.',
    logo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    company: 'Celebal Technologies',
    position: 'Data Science Intern',
    period: '03/2024 - 03/2024',
    description: 'Worked on data science projects, gaining hands-on experience in Python, machine learning, and data analysis. Enhanced problem-solving skills and understanding of data-driven decision-making through practical applications.',
    logo: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="pt-24">
      <h2 className="section-heading">Professional Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={exp.company}
            className="relative group"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            {/* Connection line */}
            {index !== experiences.length - 1 && (
              <div className="absolute left-8 top-24 w-0.5 h-24 bg-gradient-to-b from-blue-500 to-purple-500 opacity-30"></div>
            )}
            
            <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 md:p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Company Logo */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500 p-0.5">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold gradient-text">{exp.position}</h3>
                      <div className="flex items-center space-x-2 text-gray-400 mt-1">
                        <Building2 className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-purple-400 mt-2 md:mt-0">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  {/* Skills/Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.company === 'AICTE' ? (
                      ['AI/ML', 'Google Cloud', 'Python', 'Deep Learning'].map(skill => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-blue-500 bg-opacity-20 rounded-full text-blue-400 text-sm"
                        >
                          {skill}
                        </span>
                      ))
                    ) : (
                      ['Data Science', 'Python', 'Machine Learning', 'Data Analysis'].map(skill => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-purple-500 bg-opacity-20 rounded-full text-purple-400 text-sm"
                        >
                          {skill}
                        </span>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}