'use client';

import { User, Target, Heart, Globe } from 'lucide-react';

export default function About() {
  const attributes = [
    {
      icon: User,
      title: "Quick Adaptor",
      description: "Proven ability to adapt to new challenges and technologies quickly"
    },
    {
      icon: Target,
      title: "Team Player",
      description: "Exceptional teamwork and communication skills through academic projects"
    },
    {
      icon: Heart,
      title: "Problem Solver",
      description: "Passion for leveraging technology to solve real-world problems"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 animate-on-scroll">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="lg:order-2 flex justify-center px-4">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/30 to-purple-600/30 blur-2xl rounded-full opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                  <img 
                    src="/WhatsApp Image 2025-08-28 at 07.47.12_f7f16013.jpg" 
                    alt="Chetany Kalaneya - Professional Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating elements around image */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/30 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500/30 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-cyan-500/30 rounded-full animate-pulse delay-2000"></div>
              </div>
            </div>
          </div>

          {/* Left Side - Description */}
          <div className="space-y-6 lg:order-1 px-4 lg:px-0">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-xl rounded-3xl"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8">
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  I am a highly motivated and passionate individual with a strong interest in technology and problem-solving. 
                  Having completed my <span className="text-cyan-400 font-semibold">Bachelor of Computer Applications (BCA)</span>, 
                  I am currently pursuing a <span className="text-blue-400 font-semibold">Master of Computer Applications (MCA)</span> 
                  to deepen my expertise in the field of IT.
                </p>
                <p className="text-white/80 leading-relaxed mb-6">
                  I am dedicated to continuous learning and enjoy applying new skills to real-world challenges. My key interests include 
                  software development, web technologies, and data structures, and I thrive on tackling complex problems to create 
                  efficient and innovative solutions.
                </p>
                <p className="text-white/70 leading-relaxed">
                  Currently seeking a software developer role where I can apply my academic knowledge, collaborate with like-minded 
                  professionals, and continue expanding my skillset in a dynamic setting.
                </p>
              </div>
            </div>

            {/* Personal Info */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm">
              <div className="flex items-center gap-2 text-white/60">
                <Heart size={16} className="text-red-400" />
                <span>Try to learn new things</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <Globe size={16} className="text-green-400" />
                <span>English, Hindi</span>
              </div>
            </div>
          </div>

          {/* Right Side - Key Attributes */}
          <div className="space-y-6 lg:order-3 lg:col-span-2 px-4 lg:px-0">
            <h3 className="text-2xl font-bold text-white mb-8">Key Attributes</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {attributes.map((attr, index) => (
                <div 
                  key={index}
                  className="group relative"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/20 group-hover:to-purple-600/20 blur-xl rounded-2xl transition-all duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="text-center">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mx-auto w-fit mb-4">
                        <attr.icon size={24} className="text-white" />
                      </div>
                      <h4 className="text-white font-semibold text-base sm:text-lg mb-2">{attr.title}</h4>
                      <p className="text-white/70 leading-relaxed text-sm">{attr.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}