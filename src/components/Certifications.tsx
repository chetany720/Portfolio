import { useEffect, useRef, useState } from 'react';
import { Award, ExternalLink } from 'lucide-react';

const certificationCategories = [
  {
    provider: '☁️ Amazon Web Services (AWS)',
    certs: [
      { name: 'AWS Academy Graduate – Generative AI Foundations – Training Badge', issued: 'Nov 2025' },
    ],
    color: 'from-orange-500 to-amber-500',
  },
  {
    provider: '🎓 Coursera',
    certs: [
      { name: 'Basics of Entrepreneurship: Thinking and Doing', credentialId: 'L25DD3WEX03U' },
      { name: 'Cyber Security Fundamentals', credentialId: '1YDVD8XE6TAJ' },
      { name: 'Data Structures in C', credentialId: 'AAX8GURE8N9L' },
      { name: 'Discrete Mathematics for Computer Science and Engineering', credentialId: 'HR4ND7BNKQOD' },
      { name: 'Fundamentals of Computer Organization', credentialId: '8E39I39ULRSP' },
      { name: 'Work Smarter with Microsoft Word', credentialId: '0H96HNFJKLQI' },
      { name: 'AI For Everyone', credentialId: '4BOY2LCLZ75O' },
      { name: 'Python Data Structures', credentialId: 'AKTAZPRGW9XQ' },
      { name: 'Using Python to Access Web Data', credentialId: 'FWUNG873B92D' },
      { name: 'Introduction to Microsoft Azure Cloud Services', credentialId: '2MEGDHVPXLJ9' },
      { name: 'Programming for Everybody (Getting Started with Python)', credentialId: 'DO976ECALH1C' },
      { name: 'Data Warehouse Fundamentals', credentialId: '242ZO7F0YXGX' },
      { name: 'Interactivity with JavaScript', credentialId: 'VRI4JRS8W9HR' },
      { name: 'PHP Tutorial', credentialId: 'KWX5I6E7Y1J9' },
      { name: 'Advanced Cybersecurity', credentialId: 'OQ0N67LGJPDV' },
      { name: 'Introduction to Computers and Operating Systems and Security', credentialId: 'T46SPEA3T45Z' },
      { name: 'Ethical Hacking Essentials (EHE)', credentialId: 'PVH9GVM2YQVP' },
      { name: 'Introduction to Java', credentialId: 'VRMLZ562LT2X' },
    ],
    color: 'from-blue-500 to-cyan-500',
    issued: 'May 2023 – Nov 2025',
  },
  {
    provider: '🧠 LinkedIn Learning',
    certs: [
      { name: 'Programming Foundations: Numerical Mathematics and Calculations' },
      { name: 'Certified Ethical Hacker (CEH)' },
      { name: 'Microsoft Security Essentials: Concepts, Solutions, and AI-Powered Protection' },
      { name: 'Decision-Making Strategies' },
      { name: 'Foundations of Learning Management Systems (LMS)' },
      { name: 'Introduction to IT Architecture' },
      { name: 'Artificial Intelligence Foundations: Thinking Machines' },
      { name: 'Building Computer Vision Applications with Python' },
      { name: 'Ethics in the Age of Generative AI' },
      { name: 'Getting Started with AI and Machine Learning' },
      { name: 'Introduction to AI Governance' },
      { name: 'Responsible AI Foundations' },
      { name: 'Responsible AI: Principles and Practical Applications' },
      { name: 'The State of AI and Copyright' },
      { name: 'WordPress: Ecommerce' },
      { name: 'Programming Foundations: Discrete Mathematics' },
      { name: 'AI Fundamentals for Data Professionals' },
      { name: 'Introduction to Career Skills in Software Development' },
    ],
    color: 'from-blue-600 to-indigo-600',
    issued: 'Dec 2023 – Oct 2025',
  },
  {
    provider: '☁️ Oracle',
    certs: [
      { name: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate', credentialId: '102624970OCI25AICFA' },
      { name: 'Oracle Cloud Infrastructure 2025 Certified Data Science Professional', credentialId: '102651296OCI25DSOCP' },
      { name: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional', credentialId: '102651296OCI25GAIOCP' },
    ],
    color: 'from-red-500 to-rose-500',
  },
  {
    provider: '🧩 Microsoft',
    certs: [
      { name: 'Microsoft Security Essentials Professional Certificate (by Microsoft & LinkedIn)' },
    ],
    color: 'from-blue-400 to-blue-600',
  },
  {
    provider: '🎓 University of Minnesota (Coursera Specialization)',
    certs: [
      { name: 'Preparing to Manage Human Resources', credentialId: '2SM8OK9594DE' },
      { name: 'Managing Employee Performance', credentialId: '2XJ1YYK45JU6' },
      { name: 'Managing Employee Compensation', credentialId: '0VV2TDJXE0N5' },
      { name: 'Recruiting, Hiring, and Onboarding Employees', credentialId: 'P484HTFEC8Y3' },
    ],
    color: 'from-purple-500 to-indigo-500',
  },
  {
    provider: '🏫 University of California, Irvine',
    certs: [
      { name: 'Word Forms and Simple Present Tense', credentialId: '0REWNYM1RGYH' },
    ],
    color: 'from-yellow-500 to-orange-500',
  },
  {
    provider: '💼 IBM',
    certs: [
      { name: 'Introduction to Project Management', credentialId: '6A3IH3KBWNTD' },
    ],
    color: 'from-indigo-600 to-blue-600',
  },
  {
    provider: '🧠 The Hong Kong University of Science and Technology',
    certs: [
      { name: 'Software Engineering: Software Design and Project Management', credentialId: 'ZEPSHSCRM5LJ' },
    ],
    color: 'from-red-500 to-pink-500',
  },
  {
    provider: '🌍 Google for Education',
    certs: [
      { name: 'Gemini Certified University Student', credentialId: '163517868', issued: 'Oct 2025 – Expires Oct 2028' },
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    provider: '🧑‍💻 Unstop',
    certs: [
      { name: 'Certificate of Participation – Tata Imagination Challenge 2023 (Round 1)', credentialId: '4dea006e-2e5c-4193-86b3-87b3e03ccf25' },
    ],
    color: 'from-pink-500 to-rose-500',
  },
  {
    provider: '🧾 Forage',
    certs: [
      { name: 'Investment Banking Virtual Experience Program' },
    ],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    provider: '💡 Eduhub Community',
    certs: [
      { name: 'Cohort 1', credentialId: '66339be3-3024-4e4b-83a4-e5f2bdadf967' },
      { name: 'Can We Get Our Dream Job', credentialId: '1fa0b108-12fb-4a8b-b528-65aceb2e462d' },
      { name: 'Steps into Web3.0 Universe', credentialId: '0c4b6923-a0ba-49a7-8203-2d5c6cad0113' },
      { name: 'Hacktoberfest 2022', credentialId: '403f0c6c-b0f8-4e00-8817-3b48d9c823d3' },
    ],
    color: 'from-green-500 to-teal-500',
  },
  {
    provider: '🧠 ITRONIX SOLUTION',
    certs: [
      { name: 'Itronix Certification', credentialId: '#00108477' },
    ],
    color: 'from-purple-600 to-pink-600',
  },
  {
    provider: '🧬 BrainSeed Networks',
    certs: [
      { name: 'Inaugural Event of BrainSeed Networks', credentialId: '5cabdc76-c9f5-456d-b891-f98b600b2c75' },
    ],
    color: 'from-teal-500 to-cyan-500',
  },
  {
    provider: '💻 Codesta',
    certs: [
      { name: '2 Days Hands-On Workshop', credentialId: 'ec99eb4a-6c20-4ee7-8d52-028f663cd229' },
    ],
    color: 'from-orange-500 to-red-500',
  },
  {
    provider: '🧮 Indian Institute of Technology (IIT) Kharagpur – NPTEL',
    certs: [
      { name: 'Cloud Computing (NPTEL Certified)' },
    ],
    color: 'from-indigo-500 to-purple-500',
  },
];

export default function Certifications() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
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

  return (
    <section id="certifications" ref={sectionRef} className="py-20 bg-gradient-to-b from-slate-800 via-slate-700 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-shift">
            Licenses & Certifications
          </h2>
          <p className="text-center text-gray-400 mb-12">60+ Professional Certifications</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {certificationCategories.map((category, index) => (
              <div
                key={category.provider}
                className={`bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 overflow-hidden border border-purple-500/30 hover:border-purple-400 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>

                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color}`}>
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-100 text-sm">{category.provider}</h3>
                  </div>

                  {category.issued && (
                    <p className="text-xs text-cyan-400 mb-3 font-semibold">{category.issued}</p>
                  )}

                  <div className="space-y-2">
                    {category.certs.slice(0, expandedCategory === index ? undefined : 2).map((cert, certIndex) => (
                      <div key={certIndex} className="flex items-start space-x-2 group/cert">
                        <span className="text-cyan-400 mt-1 group-hover/cert:text-purple-400 transition-colors flex-shrink-0">•</span>
                        <div>
                          <p className="text-sm text-gray-300 group-hover/cert:text-gray-100 transition-colors">{typeof cert === 'string' ? cert : cert.name}</p>
                          {typeof cert !== 'string' && cert.credentialId && (
                            <p className="text-xs text-purple-400 mt-1">ID: {cert.credentialId}</p>
                          )}
                          {typeof cert !== 'string' && cert.issued && (
                            <p className="text-xs text-cyan-400 mt-1">{cert.issued}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {category.certs.length > 2 && (
                    <button
                      onClick={() => setExpandedCategory(expandedCategory === index ? null : index)}
                      className="mt-4 text-cyan-400 text-sm font-semibold hover:text-purple-400 transition-colors"
                    >
                      {expandedCategory === index ? '- Show Less' : `+ ${category.certs.length - 2} More`}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Research Paper Section */}
          <div className="mt-12">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              🧬 Research & Publications
            </h3>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-cyan-300 transition-colors">
                      HybridNet: Multi-Backbone Ensemble with Attention Fusion for Face Anti-Spoofing
                    </h4>
                    <p className="text-gray-300 mb-3">
                      Presented at <span className="font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        University of Engineering & Management, Jaipur
                      </span> (in collaboration with <span className="font-semibold text-pink-400">Springer Nature</span>)
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-purple-900/40 text-purple-300 text-sm rounded-full border border-purple-500/50 hover:border-purple-400 transition-all">
                        Deep Learning
                      </span>
                      <span className="px-3 py-1 bg-cyan-900/40 text-cyan-300 text-sm rounded-full border border-cyan-500/50 hover:border-cyan-400 transition-all">
                        Machine Learning
                      </span>
                      <span className="px-3 py-1 bg-pink-900/40 text-pink-300 text-sm rounded-full border border-pink-500/50 hover:border-pink-400 transition-all">
                        Computer Vision
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-br from-purple-900/30 to-cyan-900/30 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-purple-500/30 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
              <p className="text-gray-300">
                Additional certifications from leading institutions including <span className="font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Microsoft</span>,{' '}
                <span className="font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">IBM</span>,{' '}
                <span className="font-semibold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Google</span>,{' '}
                <span className="font-semibold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Oracle</span>, and many more
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
