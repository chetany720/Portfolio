'use client';

import { AlignCenterVertical as Certificate, Shield, Brain, Code, Users, Globe, Award } from 'lucide-react';

export default function Courses() {
  const courseCategories = [
    {
      title: "Cybersecurity & Security",
      icon: Shield,
      gradient: "from-red-500 to-pink-500",
      courses: [
        { name: "Certified Ethical Hacker (CEH)", provider: "LinkedIn", date: "Jul 2025" },
        { name: "Microsoft Security Essentials Professional Certificate", provider: "Microsoft & LinkedIn", date: "Jul 2025" },
        { name: "Microsoft Security Essentials: Concepts, Solutions, and AI-Powered Protection", provider: "LinkedIn", date: "Jul 2025" },
        { name: "Advanced Cybersecurity", provider: "Coursera", date: "Aug 2024" }
      ]
    },
    {
      title: "AI, Data & Cloud",
      icon: Brain,
      gradient: "from-blue-500 to-cyan-500", 
      courses: [
        { name: "AI For Everyone", provider: "Coursera", date: "Jan 2025" },
        { name: "Python Data Structures", provider: "Coursera", date: "Dec 2024" },
        { name: "Using Python to Access Web Data", provider: "Coursera", date: "Dec 2024" },
        { name: "Introduction to Microsoft Azure Cloud Services", provider: "Coursera", date: "Oct 2024" },
        { name: "Programming for Everybody (Getting Started with Python)", provider: "Coursera", date: "Oct 2024" },
        { name: "Data Warehouse Fundamentals", provider: "Coursera", date: "Sep 2024" }
      ]
    },
    {
      title: "Management & HR",
      icon: Users,
      gradient: "from-green-500 to-teal-500",
      courses: [
        { name: "Managing Employee Compensation", provider: "University of Minnesota", date: "Feb 2025" },
        { name: "Managing Employee Performance", provider: "University of Minnesota", date: "Feb 2025" },
        { name: "Preparing to Manage Human Resources", provider: "University of Minnesota", date: "Feb 2025" },
        { name: "Recruiting, Hiring, and Onboarding Employees", provider: "University of Minnesota", date: "Feb 2025" },
        { name: "Decision-Making Strategies", provider: "LinkedIn", date: "Apr 2024" }
      ]
    },
    {
      title: "Software Engineering",
      icon: Code,
      gradient: "from-purple-500 to-indigo-500",
      courses: [
        { name: "Introduction to Project Management", provider: "IBM", date: "Jan 2025" },
        { name: "Software Engineering: Software Design and Project Management", provider: "The Hong Kong University of Science and Technology", date: "Jan 2025" }
      ]
    },
    {
      title: "Web Development",
      icon: Globe,
      gradient: "from-orange-500 to-red-500",
      courses: [
        { name: "Interactivity with JavaScript", provider: "Coursera", date: "Sep 2024" },
        { name: "PHP Tutorial", provider: "Coursera", date: "Sep 2024" }
      ]
    },
    {
      title: "Business & Language",
      icon: Award,
      gradient: "from-yellow-500 to-orange-500",
      courses: [
        { name: "Word Forms and Simple Present Tense", provider: "University of California, Irvine", date: "Feb 2025" }
      ]
    }
  ];

  const totalCourses = courseCategories.reduce((sum, cat) => sum + cat.courses.length, 0);

  return (
    <section id="courses" className="py-20 px-6 animate-on-scroll">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Certifications & <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Courses</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
          <div className="flex items-center justify-center gap-2 text-white/80">
            <Certificate size={20} />
            <span className="text-lg font-medium">{totalCourses} Professional Certifications</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {courseCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="group relative"
              style={{ animationDelay: `${categoryIndex * 150}ms` }}
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${category.gradient} rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500`}></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full hover:bg-white/10 transition-all duration-300">
                
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 bg-gradient-to-r ${category.gradient} rounded-xl`}>
                    <category.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    <span className="text-white/60 text-sm">{category.courses.length} certifications</span>
                  </div>
                </div>

                {/* Courses List */}
                <div className="space-y-4">
                  {category.courses.map((course, courseIndex) => (
                    <div 
                      key={courseIndex}
                      className="group/course relative overflow-hidden rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover/course:opacity-10 transition-opacity duration-300`}></div>
                      <div className="relative p-4">
                        <h4 className="text-white font-medium text-sm mb-2 leading-tight">
                          {course.name}
                        </h4>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-white/60">{course.provider}</span>
                          <span className="text-white/50">{course.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Total Certifications", value: totalCourses.toString(), color: "text-blue-400" },
            { label: "Top Universities", value: "5+", color: "text-green-400" },
            { label: "Skill Areas", value: "6", color: "text-purple-400" },
            { label: "Continuous Learning", value: "2025", color: "text-cyan-400" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}