import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, MessageSquare, User, AtSign, Zap, Headphones } from 'lucide-react';

const Contact = () => {
  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-24">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-xs font-bold uppercase tracking-widest text-accent-cyan mb-6"
        >
          <Headphones size={14} /> Open to Talk
        </motion.div>
        <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
          Let’s <span className="text-transparent bg-clip-text bg-neon-gradient">Connect</span>
        </h2>
        <div className="w-24 h-1 bg-neon-gradient mx-auto rounded-full" />
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
        {/* Left Side: Info & Visual */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <h3 className="text-4xl font-black text-white tracking-tight">Got a project in <br /> <span className="text-accent-cyan">mind?</span></h3>
            <p className="text-gray-400 text-lg font-medium leading-relaxed max-w-sm">
              I’m always open to new opportunities, collaborations, and exciting projects. Feel free to reach out — I’d love to connect with you!
            </p>
          </div>

          <div className="space-y-6">
            <a 
              href="mailto:kshitij.pandey.cg@gmail.com"
              className="group flex items-center gap-8 p-6 glass rounded-3xl border border-white/5 hover:border-accent-cyan/30 transition-all duration-300 shadow-premium"
            >
              <div className="w-16 h-16 glass rounded-[1.25rem] flex items-center justify-center text-accent-cyan group-hover:scale-110 group-hover:bg-accent-cyan/10 transition-all duration-500 shadow-lg">
                <Mail size={28} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Direct Line</span>
                <span className="text-lg font-bold text-white group-hover:text-accent-cyan transition-colors">kshitij.pandey.cg@gmail.com</span>
              </div>
            </a>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://www.linkedin.com/in/kshitij-pandey-b79617398/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-1 min-w-[180px] p-6 glass rounded-3xl border border-white/5 hover:border-accent-purple/30 transition-all duration-300 flex flex-col items-center text-center shadow-lg hover:translate-y-[-5px]"
              >
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-accent-purple mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Linkedin size={24} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">LinkedIn</span>
              </a>

              <a 
                href="https://github.com/Kshitij-Pandey2605"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-1 min-w-[180px] p-6 glass rounded-3xl border border-white/5 hover:border-accent-pink/30 transition-all duration-300 flex flex-col items-center text-center shadow-lg hover:translate-y-[-5px]"
              >
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-accent-pink mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Github size={24} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">GitHub</span>
              </a>
            </div>
          </div>

          <div className="relative p-8 glass rounded-[2rem] border border-accent-cyan/20 bg-accent-cyan/5 overflow-hidden group">
            <Zap className="absolute top-4 right-4 text-accent-cyan/20 animate-pulse pointer-events-none" size={48} />
            <p className="text-gray-300 font-bold text-sm leading-relaxed relative z-10 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-accent-cyan shadow-neon-cyan animate-ping" />
              ⚡ I usually respond within 24 hours.
            </p>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full"
        >
          {/* Form Decoration */}
          <div className="absolute -inset-4 bg-neon-gradient/10 blur-[60px] rounded-[3rem] opacity-30 pointer-events-none" />
          
          <form className="relative glass p-10 md:p-12 rounded-[3rem] border border-white/10 space-y-8 shadow-premium" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-2 px-1">
                <User size={12} className="text-accent-cyan" /> Identity / Full Name
              </label>
              <input 
                type="text" 
                placeholder="What is your name?"
                className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-cyan focus:bg-white/10 transition-all text-white placeholder-gray-600 font-medium shadow-inner"
              />
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-2 px-1">
                <AtSign size={12} className="text-accent-purple" /> Contact / Email Address
              </label>
              <input 
                type="email" 
                placeholder="Where can I reach you?"
                className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-purple focus:bg-white/10 transition-all text-white placeholder-gray-600 font-medium shadow-inner"
              />
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-2 px-1">
                <MessageSquare size={12} className="text-accent-pink" /> Objective / Your Message
              </label>
              <textarea 
                rows="5" 
                placeholder="Tell me about your project or inquiry..."
                className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-5 focus:outline-none focus:border-accent-pink focus:bg-white/10 transition-all text-white placeholder-gray-600 font-medium shadow-inner resize-none"
              ></textarea>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 bg-neon-gradient text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl shadow-neon-purple flex items-center justify-center gap-3 transition-shadow hover:shadow-[0_20px_40px_rgba(157,0,255,0.4)]"
            >
              <Send size={18} /> Teleport Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
