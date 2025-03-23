import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const education = [
  {
    school: 'University of Engineering and Management Jaipur',
    degree: 'BCA',
    year: '2025',
    score: '9.84 CGPA'
  },
  {
    school: 'LBS PUBLIC SR SEC SCH, CHOMU',
    degree: 'Senior Secondary',
    year: '2021',
    score: '91.40%'
  }
];

export default function Education() {
  return (
    <section id="education" className="pt-24">
      <h2 className="section-heading">Education Journey</h2>
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div 
            key={edu.school}
            className="bg-gray-800 bg-opacity-50 rounded-lg p-8 border border-gray-700 hover:border-blue-500 transition-colors card-hover"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-500 bg-opacity-20 rounded-lg">
                <GraduationCap className="w-8 h-8 text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold gradient-text">{edu.school}</h3>
                <p className="text-xl text-gray-400 mt-2">{edu.degree}</p>
                <div className="flex items-center space-x-6 mt-4 text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-purple-400" />
                    <span>{edu.year}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-green-400" />
                    <span>{edu.score}</span>
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