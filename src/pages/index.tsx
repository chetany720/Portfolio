import React, { useState, useEffect } from "react";
import Head from "next/head";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Calendar,
  MapPin,
  Award,
  Code,
  Database,
  Globe,
  Brain,
  Shield,
  Users,
  BookOpen,
  Briefcase,
  Sparkles,
  Zap,
  Star
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const skills = [
  { name: "Python", category: "Programming" },
  { name: "Java", category: "Programming" },
  { name: "C Programming", category: "Programming" },
  { name: "JavaScript", category: "Web" },
  { name: "React.js", category: "Web" },
  { name: "Node.js", category: "Web" },
  { name: "HTML", category: "Web" },
  { name: "CSS", category: "Web" },
  { name: "PHP", category: "Web" },
  { name: "ASP.NET", category: "Framework" },
  { name: "Laravel", category: "Framework" },
  { name: "MySQL", category: "Database" },
  { name: "WordPress", category: "CMS" },
  { name: "DSA", category: "Algorithms" }
];

const projects = [
  {
    title: "HybridNet: Face Anti-Spoofing Detection",
    description: "Advanced deep learning approach for face anti-spoofing using hybrid neural networks",
    tech: ["Python", "Deep Learning", "Computer Vision"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop"
  },
  {
    title: "Kidney MRI Image Segmentation",
    description: "Advanced medical imaging analysis using AttentionVgg16Unet architecture",
    tech: ["Python", "Deep Learning", "Computer Vision"],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop"
  },
  {
    title: "Customer Lifetime Value Prediction",
    description: "Predictive analytics model for customer value assessment",
    tech: ["Data Science", "Machine Learning", "Analytics"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop"
  },
  {
    title: "Movie Recommendation System",
    description: "Personalized movie suggestions using collaborative filtering",
    tech: ["Python", "ML", "Data Analysis"],
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&h=300&fit=crop"
  },
  {
    title: "Website Vulnerability Scanner",
    description: "Security tool for identifying web application vulnerabilities",
    tech: ["Python", "Cybersecurity", "Web Security"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=300&fit=crop"
  }
];

const experiences = [
  {
    title: "Cybersecurity Intern",
    company: "All India Council for Technical Education (AICTE)",
    period: "Jul 2025 - Sep 2025",
    description: "Successfully completed a 10-week AI-ML Virtual Internship under the India Edu Program, supported by Google for Developers. Gained hands-on experience in AI/ML concepts, model development, and real-world applications."
  },
  {
    title: "Intern",
    company: "All India Council for Technical Education (AICTE)",
    period: "Mar 2024",
    description: "Successfully completed a 10-week AI-ML Virtual Internship under the India Edu Program, supported by Google for Developers. Gained hands-on experience in AI/ML concepts, model development, and real-world applications."
  },
  {
    title: "Data Science Intern",
    company: "Celebal Technologies",
    period: "Mar 2024",
    description: "Worked on data science projects, gaining hands-on experience in Python, machine learning, and data analysis, which enhanced problem-solving skills and understanding of data-driven decision-making."
  }
];

const courseCategories = [
  {
    category: "Cybersecurity & Security",
    icon: Shield,
    courses: [
      { name: "Certified Ethical Hacker (CEH)", issuer: "LinkedIn", date: "Jul 2025", skills: ["Cybersecurity"] },
      { name: "Microsoft Security Essentials Professional Certificate", issuer: "Microsoft & LinkedIn", date: "Jul 2025", skills: ["AI Security"] },
      { name: "Microsoft Security Essentials: Concepts, Solutions, and AI-Powered Protection", issuer: "LinkedIn", date: "Jul 2025", skills: ["GRC", "Microsoft Security", "Cloud Security"] },
      { name: "Advanced Cybersecurity", issuer: "Coursera", date: "Aug 2024", skills: ["Advanced Cybersecurity"] }
    ]
  },
  {
    category: "Management & HR",
    icon: Users,
    courses: [
      { name: "Managing Employee Compensation", issuer: "University of Minnesota", date: "Feb 2025", skills: ["HR Management"] },
      { name: "Managing Employee Performance", issuer: "University of Minnesota", date: "Feb 2025", skills: ["Performance Management"] },
      { name: "Preparing to Manage Human Resources", issuer: "University of Minnesota", date: "Feb 2025", skills: ["HR Strategy"] },
      { name: "Recruiting, Hiring, and Onboarding Employees", issuer: "University of Minnesota", date: "Feb 2025", skills: ["Talent Acquisition"] },
      { name: "Decision-Making Strategies", issuer: "LinkedIn", date: "Apr 2024", skills: ["Decision-Making"] }
    ]
  },
  {
    category: "AI, Data & Cloud",
    icon: Brain,
    courses: [
      { name: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate", issuer: "Oracle", date: "2025", skills: ["Oracle Cloud", "Cloud Infrastructure"] },
      { name: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional", issuer: "Oracle", date: "2025", skills: ["Data Science", "Oracle Cloud"] },
      { name: "AI For Everyone", issuer: "Coursera", date: "Jan 2025", skills: ["Artificial Intelligence"] },
      { name: "Introduction to Project Management", issuer: "IBM", date: "Jan 2025", skills: ["Project Management"] },
      { name: "Software Engineering: Software Design and Project Management", issuer: "The Hong Kong University of Science and Technology", date: "Jan 2025", skills: ["Software Engineering", "Project Management"] },
      { name: "Python Data Structures", issuer: "Coursera", date: "Dec 2024", skills: ["Python", "Data Structures"] },
      { name: "Using Python to Access Web Data", issuer: "Coursera", date: "Dec 2024", skills: ["Python", "Web Data"] },
      { name: "Introduction to Microsoft Azure Cloud Services", issuer: "Coursera", date: "Oct 2024", skills: ["Microsoft Azure", "Cloud Services"] },
      { name: "Programming for Everybody (Getting Started with Python)", issuer: "Coursera", date: "Oct 2024", skills: ["Python Programming"] },
      { name: "Data Warehouse Fundamentals", issuer: "Coursera", date: "Sep 2024", skills: ["Data Warehousing"] }
    ]
  },
  {
    category: "Web Development",
    icon: Globe,
    courses: [
      { name: "Interactivity with JavaScript", issuer: "Coursera", date: "Sep 2024", skills: ["JavaScript", "Web Interactivity"] },
      { name: "PHP Tutorial", issuer: "Coursera", date: "Sep 2024", skills: ["PHP", "Backend Development"] }
    ]
  },
  {
    category: "Business & Language",
    icon: BookOpen,
    courses: [
      { name: "Word Forms and Simple Present Tense", issuer: "University of California, Irvine", date: "Feb 2025", skills: ["English Language", "Grammar"] }
    ]
  }
];

// Typing Effect Component
const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <span style={{ opacity: 1 }}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="text-primary"
      >
        |
      </motion.span>
    </span>
  );
};

// Floating Particles Component
const FloatingParticles = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const particles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="absolute w-1 h-1 bg-primary/20 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
            scale: 0
          }}
          animate={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
            scale: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

// Animated Counter Component
const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count < value) {
        setCount(prev => Math.min(prev + Math.ceil(value / 50), value));
      }
    }, 30);
    return () => clearTimeout(timer);
  }, [count, value]);

  return (
    <motion.span
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {count}{suffix}
    </motion.span>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Chetany Kalaneya - Portfolio</title>
        <meta name="description" content="Full Stack Developer & Cybersecurity Enthusiast" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen relative">
        {/* Floating Particles */}
        <FloatingParticles />

        {/* Navigation */}
        <motion.nav
          className="fixed top-0 w-full card-gradient backdrop-blur-md border-b border-gradient z-50"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <motion.div
                className="text-2xl font-bold text-gradient-primary"
                whileHover={{ scale: 1.05 }}
              >
                <motion.span
                  animate={{
                    textShadow: [
                      "0 0 5px hsl(271, 81%, 56%)",
                      "0 0 10px hsl(271, 81%, 56%)",
                      "0 0 5px hsl(271, 81%, 56%)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Chetany Kalaneya
                </motion.span>
              </motion.div>
              <div className="hidden md:flex space-x-8">
                {["About", "Skills", "Projects", "Experience", "Education", "Contact"].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-gradient-primary transition-all duration-300 relative"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item}
                    <motion.div
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary"
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-20 left-10 w-20 h-20 border border-primary/20 rounded-full"
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity }
              }}
            />
            <motion.div
              className="absolute top-40 right-20 w-16 h-16 border border-accent/20 rounded-full"
              animate={{
                rotate: -360,
                scale: [1, 1.3, 1],
              }}
              transition={{
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity }
              }}
            />
            <motion.div
              className="absolute bottom-20 left-1/4 w-12 h-12 bg-primary/10 rounded-full blur-xl"
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-gradient glow-primary"
                whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                animate={{
                  boxShadow: [
                    "0 0 20px hsla(271, 81%, 56%, 0.3)",
                    "0 0 40px hsla(271, 81%, 56%, 0.5)",
                    "0 0 20px hsla(271, 81%, 56%, 0.3)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  whileHover: { type: "spring", stiffness: 300 }
                }}
              >
                <motion.img
                  src="https://assets.co.dev/2fb36fe9-7a78-4688-96f0-8650d65a2336/whatsapp-image-2025-09-18-at-21.28.13_c8e0a200-c3f153c.jpg"
                  alt="Chetany Kalaneya"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-primary opacity-0"
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <motion.div
                className="mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-2">
                  <TypewriterText text="Chetany Kalaneya" delay={0.7} />
                </h1>
              </motion.div>

              <motion.div
                className="mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <p className="text-xl md:text-2xl text-foreground/80">
                  <TypewriterText text="Full Stack Developer & Cybersecurity Enthusiast" delay={2} />
                </p>
              </motion.div>

              <motion.div
                className="flex justify-center space-x-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 3 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="text-lg px-8 gradient-primary hover:glow-primary transition-all duration-300 group">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Mail className="mr-2 h-5 w-5" />
                    </motion.div>
                    Get In Touch
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" size="lg" className="text-lg px-8 border-gradient hover:card-gradient transition-all duration-300 group">
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ExternalLink className="mr-2 h-5 w-5" />
                    </motion.div>
                    View Resume
                  </Button>
                </motion.div>
              </motion.div>

              {/* Animated Stats */}
              <motion.div
                className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.5 }}
              >
                {[
                  { label: "Projects", value: 5 },
                  { label: "Certifications", value: 15 },
                  { label: "Skills", value: 14 },
                  { label: "Experience", value: 3 }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center p-4 card-gradient rounded-lg border-gradient"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-2xl md:text-3xl font-bold text-gradient-primary">
                      <AnimatedCounter value={stat.value} />
                    </div>
                    <div className="text-sm text-foreground/70">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-4xl font-bold text-center text-gradient-primary mb-12"
                variants={fadeInUp}
              >
                About Me
              </motion.h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div variants={fadeInUp}>
                  <div className="relative rounded-lg overflow-hidden border-gradient glow-secondary">
                    <img 
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" 
                      alt="About"
                      className="w-full"
                    />
                  </div>
                </motion.div>
                
                <motion.div variants={fadeInUp} className="space-y-6">
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    I am a highly motivated and passionate individual with a strong interest in technology and problem-solving. 
                    Having completed my Bachelor of Computer Applications (BCA), I am currently pursuing a Master of Computer 
                    Applications (MCA) to deepen my expertise in the field of IT.
                  </p>
                  
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    I am dedicated to continuous learning and enjoy applying new skills to real-world challenges. My key interests 
                    include software development, web technologies, and data structures, and I thrive on tackling complex problems 
                    to create efficient and innovative solutions.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="flex items-center space-x-2 p-3 card-gradient rounded-lg">
                      <Code className="h-5 w-5 text-primary" />
                      <span className="text-foreground">Problem Solver</span>
                    </div>
                    <div className="flex items-center space-x-2 p-3 card-gradient rounded-lg">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="text-foreground">Team Player</span>
                    </div>
                    <div className="flex items-center space-x-2 p-3 card-gradient rounded-lg">
                      <Brain className="h-5 w-5 text-primary" />
                      <span className="text-foreground">Quick Learner</span>
                    </div>
                    <div className="flex items-center space-x-2 p-3 card-gradient rounded-lg">
                      <Shield className="h-5 w-5 text-primary" />
                      <span className="text-foreground">Security Focused</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-4xl font-bold text-center text-gradient-secondary mb-12"
                variants={fadeInUp}
              >
                Technical Skills
              </motion.h2>
              
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"
                variants={staggerContainer}
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group"
                  >
                    <Badge 
                      variant="secondary" 
                      className="w-full py-3 px-4 text-center justify-center card-gradient border-gradient hover:gradient-primary hover:text-primary-foreground hover:glow-primary transition-all duration-300 cursor-pointer"
                    >
                      {skill.name}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-4xl font-bold text-center text-gradient-primary mb-12"
                variants={fadeInUp}
              >
                Featured Projects
              </motion.h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    variants={fadeInUp}
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="h-full overflow-hidden group cursor-pointer card-gradient border-gradient hover:glow-secondary transition-all duration-300">
                      <div className="relative overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                      </div>
                      <CardHeader>
                        <CardTitle className="group-hover:text-gradient-primary transition-all duration-300">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-foreground/70">{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs border-primary/30 hover:gradient-accent hover:text-primary-foreground transition-all duration-300">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-4xl font-bold text-center text-gradient-secondary mb-12"
                variants={fadeInUp}
              >
                Experience
              </motion.h2>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    variants={fadeInUp}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="p-6 card-gradient border-gradient hover:glow-primary transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="gradient-accent p-3 rounded-full">
                          <Briefcase className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gradient-primary">{exp.title}</h3>
                          <p className="text-foreground/80 font-medium">{exp.company}</p>
                          <p className="text-sm text-foreground/60 mb-3">{exp.period}</p>
                          <p className="text-foreground/70 leading-relaxed">{exp.description}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-4xl font-bold text-center text-gradient-primary mb-12"
                variants={fadeInUp}
              >
                Education & Certifications
              </motion.h2>
              
              {/* Education Card */}
              <motion.div variants={fadeInUp} className="mb-12">
                <Card className="p-6 card-gradient border-gradient hover:glow-secondary transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="gradient-success p-3 rounded-full">
                      <BookOpen className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gradient-secondary">Education</h3>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-4 card-gradient rounded-lg border border-primary/20">
                      <h4 className="font-semibold text-gradient-primary mb-2">Master of Computer Applications (MCA)</h4>
                      <p className="text-foreground/80 text-sm mb-1">University of Engineering and Management Jaipur</p>
                      <p className="text-xs text-foreground/60">Pursuing</p>
                    </div>
                    <div className="p-4 card-gradient rounded-lg border border-primary/20">
                      <h4 className="font-semibold text-gradient-primary mb-2">Bachelor of Computer Applications (BCA)</h4>
                      <p className="text-foreground/80 text-sm mb-1">University of Engineering and Management Jaipur</p>
                      <p className="text-xs text-foreground/60">8.68 CGPA, 2025</p>
                    </div>
                    <div className="p-4 card-gradient rounded-lg border border-primary/20">
                      <h4 className="font-semibold text-gradient-primary mb-2">Senior Secondary</h4>
                      <p className="text-foreground/80 text-sm mb-1">Nucleus Career Point Chomu</p>
                      <p className="text-xs text-foreground/60">91.40%, 2021</p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Courses & Certifications */}
              <motion.h3 
                className="text-3xl font-bold text-center text-gradient-secondary mb-8"
                variants={fadeInUp}
              >
                Courses & Certifications
              </motion.h3>
              
              <div className="space-y-8">
                {courseCategories.map((category, categoryIndex) => (
                  <motion.div
                    key={category.category}
                    variants={fadeInUp}
                    className="space-y-4"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="gradient-accent p-2 rounded-full">
                        <category.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <h4 className="text-xl font-semibold text-gradient-primary">{category.category}</h4>
                      <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent"></div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.courses.map((course, courseIndex) => (
                        <motion.div
                          key={courseIndex}
                          whileHover={{ scale: 1.02, y: -2 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Card className="p-4 h-full card-gradient border-gradient hover:glow-primary transition-all duration-300">
                            <div className="space-y-2">
                              <h5 className="font-medium text-gradient-primary text-sm leading-tight">{course.name}</h5>
                              <p className="text-xs text-foreground/70">{course.issuer}</p>
                              <p className="text-xs text-foreground/60 flex items-center">
                                <Calendar className="h-3 w-3 mr-1" />
                                {course.date}
                              </p>
                              <div className="flex flex-wrap gap-1 pt-2">
                                {course.skills.map((skill, skillIndex) => (
                                  <Badge 
                                    key={skillIndex} 
                                    variant="outline" 
                                    className="text-xs px-2 py-0.5 border-primary/30 hover:gradient-accent hover:text-primary-foreground transition-all duration-300"
                                  >
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-4xl font-bold text-center text-gradient-secondary mb-12"
                variants={fadeInUp}
              >
                Get In Touch
              </motion.h2>
              
              <motion.div 
                className="max-w-2xl mx-auto text-center"
                variants={fadeInUp}
              >
                <p className="text-lg text-foreground/80 mb-8">
                  I'm currently seeking a software developer role where I can apply my academic knowledge, 
                  collaborate with like-minded professionals, and continue expanding my skillset in a dynamic setting.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.a
                    href="mailto:chetanykalaneya720@gmail.com"
                    className="flex items-center justify-center space-x-3 p-4 card-gradient border-gradient rounded-lg hover:glow-primary transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-foreground">chetanykalaneya720@gmail.com</span>
                  </motion.a>
                  
                  <motion.a
                    href="tel:6377447860"
                    className="flex items-center justify-center space-x-3 p-4 card-gradient border-gradient rounded-lg hover:glow-secondary transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="text-foreground">+91 6377447860</span>
                  </motion.a>
                  
                  <motion.a
                    href="https://www.linkedin.com/in/chetany-kalaneya/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-3 p-4 card-gradient border-gradient rounded-lg hover:glow-primary transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="h-5 w-5 text-primary" />
                    <span className="text-foreground">LinkedIn Profile</span>
                  </motion.a>
                  
                  <motion.a
                    href="https://github.com/chetany720"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-3 p-4 card-gradient border-gradient rounded-lg hover:glow-secondary transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="h-5 w-5 text-primary" />
                    <span className="text-foreground">GitHub Profile</span>
                  </motion.a>
                </div>
                
                <motion.div 
                  className="mt-8 p-6 card-gradient border-gradient rounded-lg"
                  variants={fadeInUp}
                >
                  <p className="text-foreground/80 mb-2">
                    <strong className="text-gradient-primary">Hobbies:</strong> Try to learn new things ❤️
                  </p>
                  <p className="text-foreground/80">
                    <strong className="text-gradient-primary">Languages:</strong> English, Hindi 🌐
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
          <div className="max-w-7xl mx-auto text-center">
            <motion.p 
              className="text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              © 2025 Chetany Kalaneya. Built with Next.js and Tailwind CSS.
            </motion.p>
          </div>
        </footer>
      </div>
    </>
  );
}
