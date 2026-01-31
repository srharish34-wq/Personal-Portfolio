import React, { useState } from 'react';
import { ExternalLink, Github, Award, Users, TrendingUp, Cpu } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'IntelliQuery Hub',
      category: 'AI/ML',
      description: 'Developed an intelligent query processing system leveraging Large Language Models for automated response generation with 99% uptime and reliable performance.',
      longDescription: 'Advanced prompt engineering techniques, multiple LLM providers integration, and RESTful API implementation for seamless integration.',
      tech: ['Python', 'LLM APIs', 'FastAPI', 'NLP'],
      color: 'from-purple-500 to-pink-500',
      icon: '🤖',
      highlights: [
        'Advanced prompt engineering',
        'Multiple LLM providers integration',
        'RESTful API implementation',
        '99% uptime achieved'
      ]
    },
    {
      title: 'HackSphere',
      category: 'Full Stack',
      description: 'Comprehensive hackathon management platform supporting 500+ concurrent users with real-time judging systems, team formation, and project submission features.',
      longDescription: 'Built with MERN stack featuring user authentication, payment gateway integration, and responsive UI/UX design.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'TailwindCSS'],
      color: 'from-blue-500 to-cyan-500',
      icon: '🏆',
      highlights: [
        'User authentication & authorization',
        'Payment gateway integration',
        'Responsive UI/UX design',
        'Supports 500+ users'
      ]
    },

    {
      title: 'Brakes India Chatbot',
      category: 'AI/ML',
      description: 'Intelligent chatbot for Brakes India Limited using RASA framework and Azure for automating customer support and internal query handling.',
      longDescription: 'Natural language processing with Azure cloud deployment and multi-intent recognition.',
      tech: ['RASA Framework', 'Azure Cloud', 'NLP', 'Python'],
      color: 'from-purple-500 to-blue-500',
      icon: '💬',
      highlights: [
        'Natural language processing',
        'Azure cloud deployment',
        'Multi-intent recognition',
        'Customer support automation'
      ]
    },

    {
      title: 'Employee Portal',
      category: 'Web Development',
      description: 'Complete employee management system with attendance tracking, leave management, and performance evaluation features.',
      longDescription: 'Employee database management with attendance & leave tracking and performance reports.',
      tech: ['PHP', 'phpMyAdmin', 'MySQL', 'Bootstrap'],
      color: 'from-indigo-500 to-purple-500',
      icon: '👥',
      highlights: [
        'Employee database management',
        'Attendance & leave tracking',
        'Performance reports',
        'Admin dashboard'
      ]
    },

    {
      title: 'Thrift Store',
      category: 'E-commerce',
      description: 'Full-featured e-commerce platform for buying and selling pre-owned items with secure payment integration and inventory management.',
      longDescription: 'Product listing & search with payment gateway integration and user reviews & ratings.',
      tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      color: 'from-pink-500 to-rose-500',
      icon: '🛍️',
      highlights: [
        'Product listing & search',
        'Payment gateway integration',
        'User reviews & ratings',
        'Inventory management'
      ]
    },

    {
  title: 'Personal Portfolio',
  category: 'Web Development',
  description: 'A modern and responsive personal portfolio website built using React.js and Node.js to showcase skills, projects, and experience.',
  longDescription: 'Fully responsive portfolio with dynamic project rendering, contact form integration, smooth animations, and backend support for form submissions.',
  tech: ['React.js', 'Node.js', 'Express.js', 'JavaScript', 'CSS', 'Bootstrap'],
  color: 'from-blue-500 to-indigo-500',
  icon: '💼',
  highlights: [
    'Responsive UI with smooth animations',
    'Dynamic project and experience sections',
    'Backend API in Node.js for contact form',
    'SEO optimized and fast performance'
  ]
},



        {
      title: 'EcoWaste AI',
      category: 'AI/ML',
      description: 'AI-powered waste management solution with 92% accuracy in waste classification and predictive analytics for optimizing collection routes.',
      longDescription: 'Image recognition models with IoT sensor integration and predictive analytics dashboard.',
      tech: ['Python', 'TensorFlow', 'Computer Vision', 'IoT', 'React.js'],
      color: 'from-orange-500 to-red-500',
      icon: '♻️',
      highlights: [
        'Image recognition models',
        'IoT sensor integration',
        'Predictive analytics dashboard',
        '92% classification accuracy'
      ]
    },
    {
      title: 'MedVault',
      category: 'Full Stack',
      description: 'Secure healthcare application for patient medical record management with HIPAA compliance and encrypted data storage.',
      longDescription: 'Role-based access control, encrypted data storage, and appointment scheduling system.',
      tech: ['MongoDB', 'Express.js', 'Node.js', 'JWT', 'React'],
      color: 'from-blue-500 to-indigo-500',
      icon: '🏥',
      highlights: [
        'Role-based access control',
        'Encrypted data storage',
        'Appointment scheduling',
        'HIPAA compliant'
      ]
    },

    {
      title: 'SmartAttend',
      category: 'AI/ML',
      description: 'Face recognition attendance system with 95% accuracy using computer vision techniques and real-time processing capabilities.',
      longDescription: 'Automated attendance tracking with MySQL database integration and web-based admin dashboard.',
      tech: ['Python', 'OpenCV', 'Machine Learning', 'MySQL', 'Flask'],
      color: 'from-green-500 to-emerald-500',
      icon: '👤',
      highlights: [
        'Automated attendance tracking',
        'MySQL database integration',
        'Web-based admin dashboard',
        '95% accuracy rate'
      ]
    },

    
    
    
  ];

  const categories = ['all', 'AI/ML', 'Full Stack', 'Web Development', 'E-commerce'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const achievements = [
    {
      icon: <Award className="text-yellow-400" size={32} />,
      title: 'MSME Hackathon Finalist',
      description: 'Selected for finals with 4.5/5 rating'
    },
    {
      icon: <TrendingUp className="text-green-400" size={32} />,
      title: 'SynapHack Top 20',
      description: 'Top 20 finalist in national hackathon'
    },
    {
      icon: <Users className="text-blue-400" size={32} />,
      title: '500+ Users',
      description: 'Platforms serving hundreds of users'
    },
    {
      icon: <Cpu className="text-purple-400" size={32} />,
      title: '95%+ Accuracy',
      description: 'High-performance AI models'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            My <span className="text-purple-400">Projects</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Explore my latest work and innovations in AI/ML, Full Stack Development, and Web Applications
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto"></div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  filter === category
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-105'
                    : 'bg-gray-800/50 hover:bg-gray-700/50'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, idx) => (
              <div
                key={idx}
                className="group relative p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all hover:scale-105"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}></div>
                
                <div className="relative z-10">
                  {/* Icon & Category */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-6xl">{project.icon}</div>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-700/50 rounded-full text-sm hover:bg-purple-500/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start">
                        <span className="text-purple-400 mr-2">✓</span>
                        <span className="text-gray-400 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-6 border-t border-gray-700">
                    <button className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:scale-105 transition-transform flex items-center justify-center">
                      <ExternalLink className="mr-2" size={18} />
                      View Demo
                    </button>
                    <button className="px-4 py-3 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-colors">
                      <Github size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Achievements & <span className="text-purple-400">Highlights</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 text-center hover:scale-105 transition-transform"
              >
                <div className="flex justify-center mb-4">
                  {achievement.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Showcase */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Technologies <span className="text-purple-400">Used</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {Array.from(new Set(projects.flatMap(p => p.tech))).map((tech, idx) => (
              <div
                key={idx}
                className="px-6 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-full border border-purple-500/30 hover:border-purple-500 hover:scale-110 transition-all"
              >
                <span className="font-semibold">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl backdrop-blur-sm border border-purple-500/30">
            <h2 className="text-4xl font-bold mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Let's collaborate and create something extraordinary together
            </p>
           
            <a 
          href="mailto:srharish34@gmail.com" 
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:scale-105 transition-all shadow-lg shadow-purple-500/50"
>
        Start a Project
        <ExternalLink className="ml-2" size={20} />
</a>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;    