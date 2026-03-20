import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

import profileImg from '../assets/profile.jpg';

const Hero = () => {
  const [roleText, setRoleText] = useState('');
  const fullText = "Full Stack Developer";
  
  // Mouse tilt effect for the image
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setRoleText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        setTimeout(() => { index = 0; }, 2000);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center px-6 pt-20">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1 rounded-full border border-accent-cyan bg-accent-cyan/10 text-accent-cyan text-xs font-bold uppercase tracking-widest mb-6"
          >
            Available for hire
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl font-black mb-6 tracking-tight leading-none"
          >
            I'm <br />
            <span className="text-transparent bg-clip-text bg-neon-gradient">KSHITIJ PANDEY</span>
          </motion.h1>
          
          <div className="h-10 mb-8">
            <span className="text-2xl md:text-3xl font-bold text-gray-300">
              {roleText}
              <span className="text-accent-cyan animate-pulse">_</span>
            </span>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-gray-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
          >
            I build modern web applications with clean UI, smart logic, and powerful backend systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-6"
          >
            <a
              href="#projects"
              className="group relative px-8 py-4 rounded-xl bg-neon-gradient text-white font-bold text-lg overflow-hidden transition-all shadow-neon-purple hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl border border-white/10 glass text-white font-bold text-lg transition-all hover:bg-white/10 hover:border-accent-cyan"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div 
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative w-72 h-72 md:w-96 md:h-96"
          >
            {/* Glow Background */}
            <div className="absolute inset-0 bg-accent-purple/20 blur-[100px] rounded-full animate-pulse-slow" />
            
            {/* Image Container with Floating Animation */}
            <motion.div 
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 1, 0, -1, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative w-full h-full glass rounded-3xl p-4 overflow-hidden border border-white/20 shadow-premium"
            >
              <div className="w-full h-full rounded-2xl bg-[#0a0a0a] overflow-hidden flex items-center justify-center relative">
                {/* Profile Image - Adjusted Position to show face */}
                <img 
                  src={profileImg} 
                  alt="Kshitij Pandey"
                  className="w-full h-full object-cover object-[center_15%] opacity-90 transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                
                {/* Pulsing Halo */}
                <div className="absolute inset-0 border-2 border-accent-cyan/20 rounded-2xl animate-pulse" />
                
                <div className="absolute bottom-6 left-6">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
                    <span className="text-[10px] font-black text-accent-cyan uppercase tracking-widest">Based in Gandhinagar, IN</span>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-white/10 rounded-tr-3xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l border-white/10 rounded-bl-3xl" />
            </motion.div>
              {/* Fixed Floating Badges - Inside tilt wrapper for better anchoring */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 glass px-6 py-3 rounded-2xl shadow-neon-cyan border border-accent-cyan/30 z-20 hidden md:block"
              >
                <div className="text-accent-cyan font-black text-lg tracking-widest uppercase">React</div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -left-10 glass px-6 py-3 rounded-2xl shadow-neon-purple border border-accent-purple/30 z-20 hidden md:block"
              >
                <div className="text-accent-purple font-black text-lg tracking-widest uppercase">Node.js</div>
              </motion.div>
            </motion.div>
          </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 opacity-50 flex flex-col items-center gap-2 cursor-pointer transition-opacity hover:opacity-100"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Discovery</span>
        <ChevronDown size={18} />
      </motion.div>
    </section>
  );
};

export default Hero;
