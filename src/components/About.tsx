import React from 'react';
import { Code2, Brain, Users, Rocket } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="pt-24 min-h-screen flex items-center">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-6xl font-bold gradient-text leading-tight">
            CHETANY KALANEYA
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            I am a motivated and passionate individual with a strong interest in technology and problem-solving. 
            Currently pursuing my BCA, I am dedicated to learning and applying new skills in the field of IT.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Code2 className="w-8 h-8 text-blue-400" />, text: "Problem Solver" },
              { icon: <Brain className="w-8 h-8 text-purple-400" />, text: "Quick Learner" },
              { icon: <Users className="w-8 h-8 text-pink-400" />, text: "Team Player" },
              { icon: <Rocket className="w-8 h-8 text-green-400" />, text: "Innovator" }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-4 bg-gray-800 bg-opacity-50 p-4 rounded-lg">
                {item.icon}
                <span className="text-lg font-medium">{item.text}</span>
              </div>
            ))}
          </div>
          <div className="space-y-4 text-gray-300">
            <h3 className="text-2xl font-semibold gradient-text">Key Attributes:</h3>
            <ul className="space-y-3">
              {[
                "Proven ability to adapt to new challenges and technologies quickly.",
                "Exceptional teamwork and communication skills.",
                "Passion for leveraging technology to solve real-world problems."
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap gap-4 text-gray-300">
            <div className="bg-gray-800 bg-opacity-50 px-4 py-2 rounded-full">
              ❤️ Hobbies: Try to learn new things
            </div>
            <div className="bg-gray-800 bg-opacity-50 px-4 py-2 rounded-full">
              🌐 Languages: English, Hindi
            </div>
          </div>
        </div>
        <div className="relative animate-float">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20"></div>
          <img 
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Programming Setup"
            className="rounded-2xl shadow-2xl relative z-10 border-4 border-gray-800"
          />
        </div>
      </div>
    </section>
  );
}