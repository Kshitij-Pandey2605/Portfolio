import React from 'react';
import { Heart } from 'lucide-react';
import { socialLinks } from '../data/social';
import { Github, Linkedin, Twitter, Youtube, Code2, Mail } from 'lucide-react';

const Footer = () => {
  const getSocialIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'github': return <Github size={20} />;
      case 'linkedin': return <Linkedin size={20} />;
      case 'twitter': return <Twitter size={20} />;
      case 'youtube': return <Youtube size={20} />;
      case 'leetcode': return <Code2 size={20} />;
      default: return <Mail size={20} />;
    }
  };

  return (
    <footer className="relative py-16 px-6 overflow-hidden border-t border-white/5 bg-[#050505]/80 backdrop-blur-3xl mt-24">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-accent-cyan to-transparent opacity-30" />
      
      <div className="container mx-auto flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4">
          <div className="text-3xl font-black text-white tracking-tighter">
            KP<span className="text-accent-purple">.</span>
          </div>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.5em]">Creative Developer</p>
        </div>

        <div className="flex gap-6">
          {socialLinks.map((social, i) => (
            <a 
              key={i}
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-gray-400 hover:text-white hover:scale-110 hover:border-accent-cyan transition-all duration-300 interactive shadow-lg"
              title={social.label}
            >
              {getSocialIcon(social.iconName)}
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
            Made with <Heart size={12} className="text-accent-pink animate-pulse" /> for the future
          </p>
          <p className="text-gray-600 text-[9px] uppercase tracking-widest">
            © {new Date().getFullYear()} Kshitij Pandey. Engineered for visual excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
