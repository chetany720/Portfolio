import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Linkedin, Github, Heart } from 'lucide-react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+91 6377447860',
      link: 'tel:+916377447860',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'chetanykalaneya720@gmail.com',
      link: 'mailto:chetanykalaneya720@gmail.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'chetany-kalaneya',
      link: 'https://www.linkedin.com/in/chetany-kalaneya/',
      color: 'from-blue-600 to-indigo-600',
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: 'chetany720',
      link: 'https://github.com/chetany720',
      color: 'from-gray-700 to-gray-900',
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-950 via-purple-900 to-slate-950 relative overflow-hidden">
      {/* Animated Star Background */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 0.5}px`,
              height: `${Math.random() * 2 + 0.5}px`,
              animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-400 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-shift">
            Get In Touch
          </h2>
          <p className="text-center text-gray-300 mb-12 font-semibold">
            Let's connect and discuss opportunities to collaborate
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <a
                key={info.label}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : undefined}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-purple-900/40 transition-all duration-300 hover:scale-105 border border-purple-500/30 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/50 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${info.color} mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all`}>
                  {info.icon}
                </div>
                <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-300 transition-colors">{info.label}</h3>
                <p className="text-gray-300 text-sm break-all group-hover:text-gray-100 transition-colors">{info.value}</p>
              </a>
            ))}
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Heart className="w-5 h-5 text-pink-400 animate-pulse" />
                <h3 className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Hobbies & Interests</h3>
              </div>
              <p className="text-gray-300">
                Continuously learning new technologies and exploring innovative solutions to real-world problems
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
