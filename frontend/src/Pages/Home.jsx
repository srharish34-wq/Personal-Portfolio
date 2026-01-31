import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Mail, ChevronRight, Sparkles, Code, Zap, Trophy } from 'lucide-react';

const Home = () => {
  const stats = [
    { value: '3+', label: 'Years Learning', color: 'text-purple-400' },
    { value: '10+', label: 'Projects', color: 'text-pink-400' },
    { value: '8.00', label: 'CGPA', color: 'text-blue-400' },
    { value: '5+', label: 'Certifications', color: 'text-green-400' }
  ];

  const highlights = [
    {
      icon: <Code className="text-purple-400" size={32} />,
      title: 'Full Stack Developer',
      description: 'Building scalable web applications with modern technologies'
    },
    {
      icon: <Code className="text-green-400" size={32} />,
      title: 'PHP Web Developer',
      description: 'Building many live Web applications and CRM'
    },
    {
      icon: <Sparkles className="text-pink-400" size={32} />,
      title: 'AI Engineer',
      description: 'Developing intelligent solutions with Machine Learning'
    },
    {
      icon: <Zap className="text-yellow-400" size={32} />,
      title: 'Quick Learner',
      description: 'Always exploring new technologies and frameworks'
    },
    {
      icon: <Trophy className="text-green-400" size={32} />,
      title: 'Award Winner',
      description: 'Recognized in multiple hackathons and competitions'
    }
  ];

  const techStack = [
    'Python', 'JavaScript', 'React.js', 'Node.js', 'MongoDB', 
    'TensorFlow', 'Azure', 'PHP', 'FastAPI', 'MySQL', 'HTML', 'CSS', 'RAG Modulation'
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Harish_SR_Resume.pdf';
    link.download = 'Harish_SR_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section - Mobile Responsive */}
      <section className="relative min-h-screen flex items-center py-10 md:py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* LEFT SIDE - TEXT CONTENT */}
            <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
              {/* Available Badge */}
              <div className="inline-flex items-center px-3 py-2 md:px-4 bg-purple-500/20 rounded-full text-purple-300 text-xs md:text-sm backdrop-blur-sm border border-purple-500/30">
                <span className="relative flex h-2 w-2 md:h-3 md:w-3 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-full w-full bg-green-500"></span>
                </span>
                Available For Hire
              </div>

              {/* Heading */}
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-3 md:mb-4">
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                    Harish SR
                  </span>
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 font-semibold mb-4 md:mb-6">
                  Full Stack Developer &{' '}
                  <span className="text-purple-400">AI Engineer</span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl">
                  I am a Computer Science student at Rajalakshmi Institute of Technology with strong skills in Full-Stack Development, PHP, Python, and modern web technologies. I have 3 months of internship experience at Brakes India Private Limited and 3 months of internship experience at Clouds Dial IT Services Private Limited. I am passionate about building efficient and scalable software solutions.
                </p>
              </div>

              {/* Stats Grid - Responsive */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {stats.map((stat, idx) => (
                  <div key={idx} className="p-3 md:p-4 bg-gray-800/50 rounded-lg md:rounded-xl backdrop-blur-sm border border-gray-700/50 hover:scale-105 transition-transform">
                    <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                    <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons - Mobile Stacked, Desktop Horizontal */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
                <a href="mailto:srharish34@gmail.com" className="group inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg md:rounded-xl font-semibold hover:scale-105 transition-all shadow-lg shadow-purple-500/50 text-sm md:text-base">
                  <Mail className="mr-2" size={18} />
                  Let's Talk
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </a>
                <button onClick={handleDownloadCV} className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-gray-800/80 backdrop-blur-sm rounded-lg md:rounded-xl font-semibold hover:bg-gray-700 transition-all border border-gray-700 text-sm md:text-base">
                  <Download className="mr-2" size={18} />
                  Download CV
                </button>
              </div>

              {/* Social Links Box - Responsive */}
              <div className="inline-flex flex-wrap items-center gap-2 sm:gap-4 p-3 md:p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg md:rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-all w-full sm:w-auto">
                <a 
                  href="https://www.linkedin.com/in/harish1011" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 sm:flex-none px-3 md:px-4 py-2 bg-gray-700/50 rounded-lg hover:bg-purple-500/20 hover:text-purple-400 transition-all font-medium text-xs md:text-sm text-center"
                >
                  🔗 LinkedIn
                </a>
                <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
                <a 
                  href="https://github.com/srharish34-wq" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 sm:flex-none px-3 md:px-4 py-2 bg-gray-700/50 rounded-lg hover:bg-purple-500/20 hover:text-purple-400 transition-all font-medium text-xs md:text-sm text-center"
                >
                  💻 GitHub
                </a>
                <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
                <Link 
                  to="/contact" 
                  className="flex-1 sm:flex-none px-3 md:px-4 py-2 bg-gray-700/50 rounded-lg hover:bg-purple-500/20 hover:text-purple-400 transition-all font-medium text-xs md:text-sm text-center"
                >
                  ✉️ Contact
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE - PHOTO & CURRENT ROLE */}
            <div className="relative space-y-4 md:space-y-6 order-1 lg:order-2">
              
              {/* PHOTO BOX - Responsive Heights */}
              <div className="relative p-4 md:p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl md:rounded-3xl backdrop-blur-sm border border-purple-500/20">
                <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 p-2 md:p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl md:rounded-2xl shadow-lg">
                  <Sparkles size={16} className="md:hidden" />
                  <Sparkles size={20} className="hidden md:block" />
                </div>
                
                {/* Responsive Image Container */}
                <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-xl md:rounded-2xl overflow-hidden">
                  <img 
                    src="/harish-photo.jpg" 
                    alt="Harish SR" 
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* CURRENT ROLE BOX - Responsive */}
              <div className="p-4 md:p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl md:rounded-2xl backdrop-blur-sm border border-purple-500/20">
                <div className="text-center mb-3 md:mb-4">
                  <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Current Role</h3>
                  <p className="text-purple-400 text-sm md:text-base">AI Chatbot Developer</p>
                  <p className="text-gray-400 text-xs md:text-sm">@ Brakes India Limited</p>
                </div>

                <div className="space-y-2 md:space-y-3">
                  <div className="p-2 md:p-3 bg-gray-800/50 rounded-lg md:rounded-xl">
                    <div className="text-xs text-gray-400 mb-1">Institution</div>
                    <div className="font-semibold text-xs md:text-sm">Rajalakshmi Institute of Technology</div>
                  </div>
                  <div className="p-2 md:p-3 bg-gray-800/50 rounded-lg md:rounded-xl">
                    <div className="text-xs text-gray-400 mb-1">Specialization</div>
                    <div className="font-semibold text-xs md:text-sm">Computer Science & Engineering</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* What I Do Best Section - Responsive */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
              What I Do <span className="text-purple-400">Best</span>
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto px-4">
              Combining technical expertise with creative problem-solving to deliver exceptional results
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
            {highlights.map((item, idx) => (
              <div key={idx} className="group p-5 md:p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl md:rounded-2xl border border-gray-700/50 hover:border-purple-500/50 hover:scale-105 transition-all">
                <div className="mb-3 md:mb-4 transform group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-xs md:text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section - Responsive */}
      <section className="py-12 md:py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technologies I <span className="text-purple-400">Work With</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {techStack.map((tech, idx) => (
              <div key={idx} className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-full border border-purple-500/30 hover:border-purple-500 hover:scale-110 transition-all cursor-pointer">
                <span className="font-semibold text-xs md:text-base">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Responsive */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 md:p-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl md:rounded-3xl backdrop-blur-sm border border-purple-500/30 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-400 mb-6 md:mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg md:rounded-xl font-semibold hover:scale-105 transition-all shadow-lg shadow-purple-500/50 text-sm md:text-base">
                Get In Touch
                <ChevronRight className="ml-2" size={18} />
              </Link>
              <Link to="/projects" className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-gray-800/80 backdrop-blur-sm rounded-lg md:rounded-xl font-semibold hover:bg-gray-700 transition-all border border-gray-700 text-sm md:text-base">
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;