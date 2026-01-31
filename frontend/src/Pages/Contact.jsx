import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Linkedin, Github, Calendar, MessageSquare, Send, Download } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
    agree: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  

  const services = [
    'AI Chatbot Development',
    'Full Stack Web Development',
    'PHP Web Development',
    'Machine Learning Solutions',
    'Product Design & UI/UX',
    'E-commerce Development'
  ];

  const budgetRanges = [
    '₹3,000 - ₹5,000',
    '₹5,000 - ₹10,000',
    '₹10,000 - ₹20,000',
    '₹20,000+'
  ];

  const timelines = [
    '1-2 weeks',
    '2-4 weeks',
    '1-2 months',
    '2-3 months',
    '3+ months'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      // Using fetch API (no external dependency needed)
      const response = await fetch('https://your-backend-url.vercel.app/api/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      
      if (response.ok && data.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you soon.'
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          budget: '',
          timeline: '',
          message: '',
          agree: false
        });
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: error.message || 'Failed to send message. Please try again or contact me directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('srharish34@gmail.com');
    alert('Email copied to clipboard!');
  };

  // Download Resume Function
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Harish_SR_Resume.pdf';
    link.download = 'Harish_SR_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Let's Work <span className="text-purple-400">Together</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Get in touch for projects, collaborations, or just to say hello!
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Quick Info */}
              <div className="p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl border border-purple-500/30">
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <p className="text-gray-400 mb-6">
                  I'm available for freelance projects and full-time opportunities. Let's create something amazing together!
                </p>

                <div className="space-y-4">
                  <div className="flex items-start p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors">
                    <Mail className="text-purple-400 mr-3 mt-1" size={20} />
                    <div className="flex-1">
                      <p className="text-sm text-gray-400 mb-1">Email</p>
                      <a href="mailto:srharish34@gmail.com" className="font-semibold hover:text-purple-400">
                        srharish34@gmail.com
                      </a>
                      <button
                        onClick={copyEmail}
                        className="text-xs text-purple-400 hover:underline mt-1 block"
                      >
                        Copy Email
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors">
                    <Phone className="text-purple-400 mr-3 mt-1" size={20} />
                    <div className="flex-1">
                      <p className="text-sm text-gray-400 mb-1">Phone</p>
                      <a href="tel:+916369254389" className="font-semibold hover:text-purple-400">
                        +91 6369254389
                      </a>
                      <a href="tel:+916369254389" className="text-xs text-purple-400 hover:underline mt-1 block">
                        Call Now
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-gray-800/50 rounded-xl">
                    <MapPin className="text-purple-400 mr-3 mt-1" size={20} />
                    <div className="flex-1">
                      <p className="text-sm text-gray-400 mb-1">Location</p>
                      <p className="font-semibold">Chennai, Tamil Nadu</p>
                      <p className="text-sm text-gray-400">India</p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-gray-800/50 rounded-xl">
                    <Clock className="text-purple-400 mr-3 mt-1" size={20} />
                    <div className="flex-1">
                      <p className="text-sm text-gray-400 mb-1">Availability</p>
                      <p className="font-semibold">Mon - Sat: 9 AM - 8 PM</p>
                      <span className="inline-block mt-1 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                        Available Now
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50">
                <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/harish1011"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 bg-blue-500/20 rounded-xl hover:bg-blue-500/30 transition-colors text-center"
                  >
                    <Linkedin className="mx-auto mb-1" size={24} />
                    <span className="text-xs">LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/srharish34-wq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 bg-gray-700/50 rounded-xl hover:bg-gray-600/50 transition-colors text-center"
                  >
                    <Github className="mx-auto mb-1" size={24} />
                    <span className="text-xs">GitHub</span>
                  </a>
                </div>
              </div>

              {/* Download Resume */}
              <button 
                onClick={handleDownloadResume}
                className="w-full p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:scale-105 transition-transform flex items-center justify-center"
              >
                <Download className="mr-2" size={20} />
                Download My Resume
              </button>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50">
                <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

                {submitStatus.message && (
                  <div className={`mb-6 p-4 rounded-xl ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-500/20 border border-green-500/50 text-green-300'
                      : 'bg-red-500/20 border border-red-500/50 text-red-300'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:border-purple-500 transition-colors text-white"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:border-purple-500 transition-colors text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:border-purple-500 transition-colors text-white"
                      />
                    </div>
                  </div>

                  {/* Service & Budget */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Service Interested In <span className="text-red-400">*</span>
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:border-purple-500 transition-colors text-white"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, idx) => (
                          <option key={idx} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Budget Range <span className="text-red-400">*</span>
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:border-purple-500 transition-colors text-white"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range, idx) => (
                          <option key={idx} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Project Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:border-purple-500 transition-colors text-white"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((time, idx) => (
                        <option key={idx} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Project Details <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Tell me about your project, requirements, and goals..."
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:border-purple-500 transition-colors resize-none text-white"
                    ></textarea>
                  </div>

                  {/* Agreement */}
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      name="agree"
                      checked={formData.agree}
                      onChange={handleChange}
                      required
                      className="mt-1 mr-3"
                    />
                    <label className="text-sm text-gray-400">
                      I agree to be contacted regarding my inquiry
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:scale-105 transition-all shadow-lg shadow-purple-500/50 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2" size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Quick Actions */}
              <div className="grid md:grid-cols-3 gap-4 mt-8">
                <a
                  href="https://calendly.com/srharish34/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all text-center"
                >
                  <Calendar className="mx-auto mb-2 text-purple-400" size={24} />
                  <h4 className="font-semibold mb-1">Schedule a Call</h4>
                  <p className="text-xs text-gray-400">Book a free consultation</p>
                </a>
                <a
                  href="https://wa.me/916369254389"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all text-center"
                >
                  <MessageSquare className="mx-auto mb-2 text-green-400" size={24} />
                  <h4 className="font-semibold mb-1">Quick Chat</h4>
                  <p className="text-xs text-gray-400">WhatsApp for quick queries</p>
                </a>
                <a
                  href="mailto:srharish34@gmail.com"
                  className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all text-center"
                >
                  <Mail className="mx-auto mb-2 text-blue-400" size={24} />
                  <h4 className="font-semibold mb-1">Email Me</h4>
                  <p className="text-xs text-gray-400">Send detailed requirements</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;