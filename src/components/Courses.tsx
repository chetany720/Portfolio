import React from 'react';
import { BookOpen, CheckCircle } from 'lucide-react';

const courses = [
  'Cloud Computing - NPTEL',
  'Ethical Hacking Essentials (EHE) - Coursera',
  'Introduction to Java - Coursera',
  'Introduction to Career Skills in Software Development - LinkedIn',
  'AI Fundamentals for Data Professionals - LinkedIn',
  'Programming Foundations: Discrete Mathematics - LinkedIn',
  'WordPress: Ecommerce - LinkedIn',
  'Artificial Intelligence Foundations: Thinking Machines - LinkedIn',
  'Building Computer Vision Applications with Python - LinkedIn',
  'Getting Started with AI and Machine Learning - LinkedIn',
  'Introduction to AI Governance - LinkedIn',
  'The State of AI and Copyright - LinkedIn',
  'Responsible AI: Principles and Practical Applications - LinkedIn',
  'Ethics in the Age of Generative AI - LinkedIn',
  'Responsible AI Foundations - LinkedIn',
  'Introduction to IT Architecture - LinkedIn',
  'Foundations of Learning Management Systems (LMS) - LinkedIn',
  'Decision-Making Strategies - LinkedIn'
];

export default function Courses() {
  return (
    <section id="courses" className="pt-24">
      <h2 className="section-heading">Professional Development</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course, index) => (
          <div 
            key={course}
            className="group bg-gray-800 bg-opacity-50 rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-1"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-purple-500 bg-opacity-20 rounded-lg group-hover:bg-opacity-30 transition-colors">
                <BookOpen className="w-5 h-5 text-purple-400" />
              </div>
              <div className="flex-1">
                <p className="text-gray-300 group-hover:text-white transition-colors">{course}</p>
                <div className="flex items-center mt-2 text-green-400">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span className="text-sm">Completed</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}