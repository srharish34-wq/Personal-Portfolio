import React from 'react';
import { Download, Mail, Phone, MapPin, GraduationCap, Briefcase, Award, Calendar } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: 'Bachelor of Technology - Computer Science',
      institution: 'Rajalakshmi Institute of Technology',
      duration: '2023 - 2027',
      cgpa: '8.00/10',
      description: 'Focus on AI/ML, Web Development, and Cloud Computing'
    },
    {
      degree: 'Higher Secondary Education (HSSC)',
      institution: 'Paavai Vidhyashram Global School',
      duration: '2022-2023',
      percentage: '72.6%'
    },
    {
      degree: 'Secondary Education (SSC)',
      institution: 'Kendriya Vidyalaya NLC Neyveli',
      duration: '2020-2021',
      percentage: '89.20%'
    }
  ];

  const experience = [
    {
      role: 'AI Software Enginner',
      company: 'Brakes India  Private Limited',
      location: 'Padi, Chennai',
      duration: '3 Months | Current',
      responsibilities: [
        'Building an intelligent RAG-based chatbot using Azure AI services for scalable deployment',
        'Implementing NLP, embeddings, and vector search to enable accurate, context-aware responses',
        'Integrating Azure Cognitive Search and internal knowledge sources for real-time information retrieval',
        'Testing and optimizing retrieval pipelines and conversation flows for improved user engagement'
      ]
    },
    {
      role: 'Full Stack Developer Intern',
      company: 'Clouds Dial IT Services Pvt Ltd',
      location: 'Chennai',
      duration: '6 Months | Current',
      responsibilities: [
        'Developed web applications using modern technologies',
        'Worked on both frontend and backend development',
        'Collaborated with team on various client projects',
        'Created Many PHP Websites and CRMs and worked on Real Time Projects with client Requirements'
      ]
    }
  ];

  const skills = {
    'Programming Languages': ['Python', 'Java', 'JavaScript', 'HTML5', 'CSS3', 'PHP'],
    'Frameworks & Technologies': ['Node.js', 'Bootstrap', 'React.js', 'MongoDB', 'MySQL', 'Tailwind', 'Firebase'],
    'AI/ML & Cloud': ['Machine Learning', 'TensorFlow', 'Microsoft Azure', 'RAG Modulation', 'Data Analytics'],
    'Tools': ['Git', 'VS Code',  'Adobe Photoshop']
  };

  const certifications = [
    { name: 'Azure Fundamentals', issuer: 'Microsoft Learn', year: '2025' },
    { name: 'Google AI Essentials', issuer: 'Google', year: '2025' },
    { name: 'AI & Generative AI', issuer: 'Infosys Springboard', year: '2025' },
    { name: 'Python & ML', issuer: 'Kaggle', year: '2025' },
    // { name: 'AWS Cloud Foundations', issuer: 'Amazon Web Services', year: '2025' }
  ];

  const achievements = [
    { title: 'MSME Hackathon Finalist', description: 'Selected for finals with 4.5/5 rating' },
    { title: 'SynapHack Top 20', description: 'Top 20 finalist in national hackathon' },
    { title: 'Academic Excellence', description: '8.00 CGPA with consistent performance' },
    { title: '4+ Certifications', description: 'Industry-recognized certifications' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image/Info Card */}
            <div className="relative">
              <div className="p-8 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl backdrop-blur-sm border border-purple-500/30">
                <div className="text-center mb-6">
                  
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gradient-to-br from-purple-500 to-pink-500 shadow-xl">
  <img 
    src="/harish-photo.jpg" 
    alt="Harish SR" 
    className="w-full h-full object-cover"
  />
</div>
                  <h2 className="text-3xl font-bold mb-2">Harish SR</h2>
                  <p className="text-purple-400 text-lg">Full Stack Developer & AI Engineer</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-gray-800/50 rounded-lg">
                    <Mail className="text-purple-400 mr-3" size={20} />
                    <a href="mailto:srharish34@gmail.com" className="text-sm hover:text-purple-400">
                      srharish34@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center p-3 bg-gray-800/50 rounded-lg">
                    <Phone className="text-purple-400 mr-3" size={20} />
                    <a href="tel:+916369254389" className="text-sm hover:text-purple-400">
                      +91 6369254389
                    </a>
                  </div>
                  <div className="flex items-center p-3 bg-gray-800/50 rounded-lg">
                    <MapPin className="text-purple-400 mr-3" size={20} />
                    <span className="text-sm">Chennai, Tamil Nadu</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-800/50 rounded-lg">
                    <GraduationCap className="text-purple-400 mr-3" size={20} />
                    <span className="text-sm">CGPA: 8.00/10</span>
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <a
                    href="mailto:srharish34@gmail.com"
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold text-center hover:scale-105 transition-transform"
                  >
                    Hire Me
                  </a>
                  <button 
                 onClick={() => {
                 const link = document.createElement('a');
                 link.href = '/Harish_SR_Resume.pdf';
                 link.download = 'Harish_SR_Resume.pdf';
                 document.body.appendChild(link);
                 link.click();
                 document.body.removeChild(link);
                 }}
  className="flex-1 px-4 py-3 bg-gray-800 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
>
                Download CV
              </button>
                  
                </div>
              </div>
            </div>

            {/* Right - About Text */}
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl font-bold mb-4">
                  About <span className="text-purple-400">Me</span>
                </h1>
                <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6"></div>
              </div>

              <p className="text-gray-400 leading-relaxed text-lg">
                I'm a passionate Computer Science student at Rajalakshmi Institute of Technology with a strong academic foundation and a CGPA of 8.00. I actively engage in learning modern technologies and strengthening my knowledge through coursework, practical assignments, and real-world academic projects. I am also strong in Full-Stack Development, continually improving my skills through hands-on coding and project-based learning.
              </p>

              <p className="text-gray-400 leading-relaxed text-lg">
                Currently, I’m gaining experience as an AI Software Engineer Intern at Brakes India Limited, where I work on developing intelligent conversational systems using RAG-based modules and Azure Cloud. I also have 3 months of internship experience at Clouds Dial IT Services Private Limited, where I worked on real-time projects and CRM systems focused on PHP development.              </p>

              <p className="text-gray-400 leading-relaxed text-lg">
                I specialize in creating innovative solutions using React.js, PHP, HTML, CSS, Python, Java, Node.js, and MongoDB. My passion lies in building applications that solve real-world problems and deliver efficient, user-focused experiences.
              </p>

              <p className="text-gray-400 leading-relaxed text-lg">
               HR Web Solutions was founded and is led by me, supported by a skilled team of two dedicated freelance professionals.
  Together, we deliver high-quality, modern, and result-driven web solutions for clients across various industries.
  Every project is handled with personal care, strong collaboration, and a commitment to excellence.
  Through this freelancing journey, I have gained valuable experience and knowledge that helps me serve clients even better.
  Our goal is to provide reliable, innovative, and affordable digital services that help businesses grow.
  </p>

  

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-gray-800/50 rounded-xl">
                  <div className="text-3xl font-bold text-purple-400 mb-1">10+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
                <div className="p-4 bg-gray-800/50 rounded-xl">
                  <div className="text-3xl font-bold text-pink-400 mb-1">4+</div>
                  <div className="text-sm text-gray-400">Certifications</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <GraduationCap className="inline mr-3 text-purple-400" size={36} />
            Education
          </h2>

          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-bold text-purple-400">{edu.degree}</h3>
                  <span className="text-gray-400 text-sm">{edu.duration}</span>
                </div>
                <p className="text-gray-300 font-semibold mb-2">{edu.institution}</p>
                {edu.cgpa && <p className="text-gray-400">CGPA: {edu.cgpa}</p>}
                {edu.percentage && <p className="text-gray-400">Percentage: {edu.percentage}</p>}
                {edu.description && <p className="text-gray-400 mt-2">{edu.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <Briefcase className="inline mr-3 text-purple-400" size={36} />
            Work Experience
          </h2>

          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-400 mb-1">{exp.role}</h3>
                    <p className="text-gray-300 font-semibold">{exp.company}</p>
                    <p className="text-gray-400 text-sm">{exp.location}</p>
                  </div>
                  <span className="text-gray-400 text-sm mt-2 md:mt-0">{exp.duration}</span>
                </div>

                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span className="text-gray-400">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items], idx) => (
              <div
                key={idx}
                className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50"
              >
                <h3 className="text-xl font-bold text-purple-400 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-gray-700/50 rounded-full text-sm hover:bg-purple-500/20 hover:border-purple-500/50 border border-transparent transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <Award className="inline mr-3 text-purple-400" size={36} />
            Certifications
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl border border-purple-500/30 hover:scale-105 transition-transform"
              >
                <Award className="text-purple-400 mb-3" size={32} />
                <h3 className="text-lg font-bold mb-2">{cert.name}</h3>
                <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                <p className="text-purple-400 text-sm">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Achievements & Highlights</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 text-center hover:border-purple-500/50 hover:scale-105 transition-all"
              >
                <div className="text-4xl mb-3">🏆</div>
                <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
