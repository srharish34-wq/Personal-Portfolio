import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Moon, Sun } from 'lucide-react';
import { ThemeContext } from '../ThemeContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();

  const { isDark, toggleTheme } = useContext(ThemeContext);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrollY > 50 
        ? isDark 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg shadow-purple-500/10' 
          : 'bg-white/95 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="group">
            <div className={`text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform`}>
              HARISH SEETHARAMAN RAMA
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`relative transition-all duration-300 hover:text-purple-400 ${
                  isActive(item.path) 
                    ? 'text-purple-400 font-semibold' 
                    : isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></span>
                )}
              </Link>
            ))}
            <button
              onClick={toggleTheme} 
              className={`p-2 rounded-lg transition-colors ${
                isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-200'
              }`}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >   
              {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-700" />}
            </button>
            <a 
              href="mailto:srharish34@gmail.com" 
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:scale-105 transition-transform text-white"
            >
              <Mail className="mr-2" size={18} />
              Let's Talk
            </a>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-200'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className={`md:hidden backdrop-blur-md border-t ${
          isDark ? 'bg-gray-900/95 border-gray-800' : 'bg-white/95 border-gray-200'
        }`}>
          {navigation.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              onClick={() => setIsMenuOpen(false)} 
              className={`block px-4 py-3 transition-colors ${
                isActive(item.path) 
                  ? isDark 
                    ? 'text-purple-400 bg-gray-800/50' 
                    : 'text-purple-600 bg-purple-50'
                  : isDark
                    ? 'hover:bg-gray-800'
                    : 'hover:bg-gray-100'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="px-4 py-3">
            <button
              onClick={toggleTheme} 
              className={`w-full p-2 rounded-lg transition-colors flex items-center justify-center ${
                isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-200'
              }`}
            >   
              {isDark ? (
                <>
                  <Sun size={20} className="text-yellow-400 mr-2" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon size={20} className="text-gray-700 mr-2" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>
          <a 
            href="mailto:srharish34@gmail.com" 
            className="block mx-4 my-3 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold text-center text-white"
          >
            Let's Talk
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;