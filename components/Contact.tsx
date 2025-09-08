'use client';

import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, MapPin, Heart } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "6377447860",
      href: "tel:6377447860",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Mail,
      label: "Email", 
      value: "chetanykalaneya720@gmail.com",
      href: "mailto:chetanykalaneya720@gmail.com",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "chetany-kalaneya",
      href: "https://www.linkedin.com/in/chetany-kalaneya/",
      gradient: "from-blue-600 to-blue-800"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "chetany720",
      href: "https://github.com/chetany720",
      gradient: "from-gray-600 to-gray-800"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 animate-on-scroll">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities? Let's connect and create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-8 px-4 lg:px-0">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.label === 'LinkedIn' || info.label === 'GitHub' ? '_blank' : undefined}
                    className="group flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className={`p-2 sm:p-3 bg-gradient-to-r ${info.gradient} rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <info.icon size={24} className="text-white" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-white/60 text-sm">{info.label}</div>
                      <div className="text-white font-medium text-sm sm:text-base break-all">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Location & Availability */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white/80 text-sm sm:text-base">
                <MapPin size={20} className="text-cyan-400" />
                <span>Jaipur, Rajasthan, India</span>
              </div>
              <div className="flex items-center gap-3 text-white/80 text-sm sm:text-base">
                <Heart size={20} className="text-red-400" />
                <span>Available for new opportunities</span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/20">
              <div className="text-center p-4 bg-white/5 rounded-2xl">
                <div className="text-2xl font-bold text-cyan-400">24h</div>
                <div className="text-white/60 text-sm">Response Time</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-2xl">
                <div className="text-2xl font-bold text-green-400">100%</div>
                <div className="text-white/60 text-sm">Commitment</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="group relative px-4 lg:px-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white/80 font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300 text-sm sm:text-base"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white/80 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300 text-sm sm:text-base"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white/80 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={5}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300 resize-none text-sm sm:text-base"
                    placeholder="Tell me about your project or opportunity..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full group flex items-center justify-center gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-blue-500/25 text-sm sm:text-base"
                >
                  <Send size={20} />
                  Send Message
                  <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/20 text-center">
          <p className="text-white/60 mb-4">
            Made with <Heart size={16} className="inline text-red-400" fill="currentColor" /> by Chetany Kalaneya
          </p>
          <p className="text-white/40 text-sm">
            © 2025 Chetany Kalaneya. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}