import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Code, Database, Brain, Palette, ShoppingCart, Zap, CheckCircle, ArrowRight, Download, FileText, Home } from 'lucide-react';
import { Mail } from 'lucide-react';

const Services = () => {
  const services = [
   
    {
      icon: <Code size={40} />,
      title: 'Full Stack Web Development',
      description: 'Creating responsive, scalable web applications using Node.js, MongoDB, and modern frontend technologies.',
      features: [
        'Custom web applications',
        'Deployment and hosting',
        'A live Website',
        'Database design',
         'Responsive design'
  ],
      price: '₹5,000',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Database size={40} />,
      title: 'PHP Web Development',
      description: 'Developing dynamic websites and web applications using PHP, MySQL, and phpMyAdmin for robust backend solutions.',
      features: [
        'Custom PHP applications',
        'MySQL database integration',
        'Admin panels',
        'CRM Development',
        'Product management',
        'Dialer Development'
      ],
      price: '₹7,000',
      color: 'from-orange-500 to-red-500'
    },
     {
      icon: <Bot size={40} />,
      title: 'AI Chatbot Development',
      description: 'Building intelligent conversational AI systems using RAG architecture, NLP, and cloud platforms (Azure & AWS) for context-aware customer support and automated query handling.',
      features: [
        'Custom chatbot solutions',
        'NLP integration',
        'Multi-platform deployment',
        'AWS Cloud Integration',
        'Azure cloud integration'
      ],
      price: '₹10,000',
      color: 'from-purple-500 to-pink-500'
    },
     {
      icon: <Palette size={40} />,
      title: 'Product Design & UI/UX',
      description: 'Designing intuitive user interfaces and experiences that enhance user engagement and satisfaction.',
      features: [
        'UI/UX design',
        'Prototyping',
        'User research',
        'Logo Design',
        'Design systems'
      ],
      price: '₹3,000',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: <Brain size={40} />,
      title: 'Machine Learning Solutions',
      description: 'Implementing AI/ML models for data analysis, prediction, and automation using Python, TensorFlow, and scikit-learn.',
      features: [
        'Custom ML models',
        'Data analysis',
        'RAG Modulation',
        'Predictive analytics',
        'Model deployment'
      ],
      price: '₹10,000',
      color: 'from-green-500 to-emerald-500'
    }
    
  ];

  const whyChooseMe = [
    {
      icon: <Zap className="text-yellow-400" size={32} />,
      title: 'Fast Delivery',
      description: 'Quick turnaround time without compromising quality'
    },
    {
      icon: <CheckCircle className="text-green-400" size={32} />,
      title: 'Quality Work',
      description: 'Clean, maintainable code following best practices'
    },
    {
      icon: <ArrowRight className="text-blue-400" size={32} />,
      title: 'Revisions',
      description: 'Unlimited revisions until you\'re satisfied'
    },
    {
      icon: <Code className="text-purple-400" size={32} />,
      title: 'Communication',
      description: 'Regular updates and transparent communication'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Services I <span className="text-purple-400">Offer</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Transforming Ideas into Innovative Reality with Expert Development Services
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-8"></div>
          
          {/* HR Web Solutions Banner */}
          <div className="mt-12 p-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl border border-purple-500/30 backdrop-blur-sm max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Logo */}
              <div className="flex-shrink-0">
                <img 
                  src="/hr-web-logo.png" 
                  alt="HR Web Solutions Logo" 
                  className="w-24 h-24 md:w-28 md:h-28 object-contain"
                />
              </div>
              
              {/* Company Info */}
              <div className="text-center md:text-left flex-1">
                <h2 className="text-3xl font-bold mb-2">
                  <span className="text-purple-400">HR Web Solutions</span>
                </h2>
                <p className="text-gray-300 mb-2">
                  “End-to-end digital solutions that help your business grow smarter.”

                </p>
                <p className="text-sm text-gray-400">
                 Professional team • Affordable pricing • On-time delivery • Trusted by multiple clients
                </p>
              </div>
              
              {/* Download Button */}
              <a
                href="/HR_WEB_SOLUTIONS.pdf"
                download="HR_Web_Solutions_Brochure.pdf"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:scale-105 transition-all shadow-lg shadow-purple-500/50 whitespace-nowrap"
              >
                <Download className="mr-2" size={20} />
                Download Brochure
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group relative p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all hover:scale-105"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex p-4 bg-gradient-to-br ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="text-green-400 mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-700">
                    <div>
                      <p className="text-sm text-gray-400">Starting at</p>
                      <p className="text-2xl font-bold text-purple-400">{service.price}</p>
                    </div>
                    <Link
                      to="/contact"
                      className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:scale-105 transition-transform"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose <span className="text-purple-400">Me?</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseMe.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 text-center hover:scale-105 transition-transform"
              >
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our <span className="text-purple-400">Clients</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Client 1 - Om Sai Real Estate */}
            <div className="group relative p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all hover:scale-105">
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity"></div>
              
              <div className="relative z-10">
                {/* Real Estate Icon/Image */}
                {/* <div className="inline-flex p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                  <Home size={40} className="text-white" />
                </div> */}
                <div className="mb-6 rounded-xl overflow-hidden">
  <img 
    src="/real-estate-home.jpg" 
    alt="Real Estate" 
    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
  />
</div>

                {/* Client Name */}
                <h3 className="text-2xl font-bold mb-3">OM SAI REAL ESTATE</h3>
                <p className="text-gray-400 mb-2">Property Consultant</p>
                <p className="text-sm text-purple-400 font-semibold">OMR, Chennai</p>
                
                {/* Description */}
                <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                  Professional real estate consulting services providing comprehensive property solutions in the OMR corridor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            My <span className="text-purple-400">Work Process</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discuss', desc: 'Understanding your requirements' },
              { step: '02', title: 'Plan', desc: 'Creating a detailed project roadmap' },
              { step: '03', title: 'Develop', desc: 'Building with best practices' },
              { step: '04', title: 'Deliver', desc: 'Launch and ongoing support' }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl border border-purple-500/30 text-center">
                  <div className="text-5xl font-bold text-purple-400 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="text-purple-400" size={24} />
                  </div>
                )}
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
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Let's discuss your requirements and bring your ideas to life
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:scale-105 transition-all shadow-lg shadow-purple-500/50"
              >
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <a 
                href="mailto:srharish34@gmail.com" 
                className="inline-flex items-center px-8 py-4 bg-gray-800/80 backdrop-blur-sm rounded-xl font-semibold hover:bg-gray-700 transition-all border border-gray-700"
              >
                <Mail className="mr-2" size={20} />
                Email Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;