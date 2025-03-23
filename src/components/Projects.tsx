import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Website Vulnerability Scanner',
    description: 'Advanced security tool that performs comprehensive vulnerability assessments of web applications, detecting SQL injection, XSS, and CSRF vulnerabilities',
    tech: ['Python', 'Security', 'Penetration Testing'],
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Kidney MRI Image Segmentation',
    description: 'Advanced medical imaging analysis using AttentionVgg16Unet architecture',
    tech: ['Python', 'Deep Learning', 'Computer Vision'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Customer Lifetime Value Prediction',
    description: 'Predictive analytics model for customer value assessment',
    tech: ['Data Science', 'Machine Learning', 'Analytics'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Movie Recommendation System',
    description: 'Personalized movie suggestions using collaborative filtering',
    tech: ['Python', 'ML', 'Data Analysis'],
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="pt-24">
      <h2 className="section-heading">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={project.title}
            className="project-card group"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
            </div>
            <div className="p-6 relative">
              <h3 className="text-2xl font-semibold mb-3 gradient-text">{project.title}</h3>
              <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(tech => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-blue-500 bg-opacity-20 rounded-full text-blue-400 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500 bg-opacity-20 text-blue-400 hover:bg-opacity-30 transition-colors">
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-purple-500 bg-opacity-20 text-purple-400 hover:bg-opacity-30 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}