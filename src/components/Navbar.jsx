import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, FileText } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Education', href: '/education' },
  { name: 'Certificates', href: '/certificates' },
  { name: 'Figma', href: '/figma' },
  { name: 'Hackathon', href: '/hackathon' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if link is active
  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return location.pathname === path;
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled || isMobileMenuOpen ? 'glass-dark py-4 border-b border-white/5' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link 
          to="/"
          className="group flex items-center gap-3"
        >
          <div className="relative w-10 h-10 group-hover:scale-110 transition-transform duration-300">
            <div className="absolute inset-0 bg-neon-gradient blur-md opacity-0 group-hover:opacity-40 transition-opacity rounded-xl" />
            <img src="/logo.svg" alt="KP Logo" className="w-full h-full relative z-10 rounded-xl" />
          </div>
          <span className="hidden sm:inline-block px-1.5 py-0.5 rounded-md bg-white/5 border border-white/5 text-[9px] font-mono font-bold text-gray-500 uppercase tracking-widest group-hover:border-white/20 transition-colors">v1.2.6</span>
          <span className="w-2 h-2 rounded-full bg-accent-cyan shadow-neon-cyan animate-pulse ml-1" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`nav-link px-2 py-2 text-xs font-bold uppercase tracking-widest ${
                isActive(link.href) ? 'active text-accent-cyan' : 'text-gray-400'
              }`}
            >
              <span className="relative z-10">{link.name}</span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Resume Button */}
          <Link
            to="/resume"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl text-white text-xs font-black uppercase tracking-widest interactive transition-all duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #0ea5e9, #7e22ce)', boxShadow: '0 0 15px rgba(126,34,206,0.3)' }}
          >
            <FileText size={14} /> Resume
          </Link>

          <button 
            onClick={toggleTheme} 
            className="p-2 glass rounded-xl text-gray-400 hover:text-white transition-colors interactive border border-transparent hover:border-white/10"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          {/* Mobile menu toggle */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 glass rounded-xl text-gray-400 hover:text-white transition-colors interactive border border-transparent hover:border-white/10"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full glass-dark border-b border-white/10"
          >
            <div className="flex flex-col p-6 space-y-4 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-bold uppercase tracking-[0.2em] py-3 rounded-xl transition-all ${
                    isActive(link.href) ? 'bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20' : 'text-gray-500 hover:text-white glass-dark border border-transparent border-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
