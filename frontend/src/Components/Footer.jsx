import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Github, Heart } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    'AI Chatbot Development',
    'Full Stack Development',
    'Machine Learning',
    'PHP Development',
    'E-commerce Solutions'
  ];

  return (
    <footer className="relative bg-gray-900/50 backdrop-blur-sm border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              HARISHSR
            </h3>
            <p className="text-gray-400 mb-4">
              Full Stack Developer & AI Engineer passionate about building innovative solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/harish1011" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-purple-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/srharish34-wq" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-purple-500 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-purple-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, idx) => (
                <li key={idx} className="text-gray-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="mr-2 mt-1 text-purple-400" size={18} />
                <a href="mailto:srharish34@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  srharish34@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="mr-2 mt-1 text-purple-400" size={18} />
                <a href="tel:+916369254389" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  +91 6369254389
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 text-purple-400" size={18} />
                <span className="text-gray-400 text-sm">Chennai, Tamil Nadu, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Harish SR. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart className="mx-1 text-red-500" size={16} fill="currentColor" /> by Harish SR
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;