import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ChevronDown, ArrowRight, FileText, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

// Try to import profile; falls back gracefully if file missing
let profileImg;
try {
  profileImg = new URL('../assets/profile.jpg', import.meta.url).href;
} catch {
  profileImg = null;
}

const ROLES = ["Full Stack Developer", "UI/UX Designer", "React Engineer", "Problem Solver"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Mouse tilt effect for the image
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['8deg', '-8deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-8deg', '8deg']);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  // Typewriter effect
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout;

    if (!isDeleting && displayText.length < currentRole.length) {
      timeout = setTimeout(() => setDisplayText(currentRole.slice(0, displayText.length + 1)), 100);
    } else if (!isDeleting && displayText.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 50);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-start px-6 pt-20 pb-12">
      <div className="container mx-auto max-w-6xl">
        {/* Main hero grid — tighter gap */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center">

          {/* ── Left: Text Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="z-10 order-2 lg:order-1"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-cyan bg-accent-cyan/10 text-accent-cyan text-xs font-bold uppercase tracking-widest mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-ping" />
              Available for hire
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05] mb-4"
            >
              I'm{' '}
              <span className="text-transparent bg-clip-text bg-neon-gradient block sm:inline">
                KSHITIJ<br className="hidden sm:block" /> PANDEY
              </span>
            </motion.h1>

            {/* Typewriter role */}
            <div className="h-12 flex items-center mb-5">
              <span className="text-xl md:text-2xl font-bold text-gray-300">
                {displayText}
                <span className="text-accent-cyan animate-pulse">|</span>
              </span>
            </div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 text-gray-500 text-sm font-medium mb-6"
            >
              <MapPin size={14} className="text-accent-pink" />
              Gandhinagar, Gujarat, IN
            </motion.div>

            {/* Sub-text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-gray-400 text-base md:text-lg max-w-lg mb-10 leading-relaxed"
            >
              I build modern web applications with clean UI, powerful backend systems, and a focus on real-world impact.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 mt-8"
              style={{ willChange: 'transform' }}
            >
              <Link
                to="/projects"
                className="btn-premium group relative px-7 py-3.5 rounded-xl bg-neon-gradient text-white font-bold overflow-hidden shadow-neon-purple inline-flex items-center gap-2 interactive"
              >
                View My Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
              </Link>
              <a
                href={profileImg ? new URL('../assets/Kshitij_Pandey_Resume.pdf', import.meta.url).href : "/Kshitij_Pandey_Resume.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium group relative px-7 py-3.5 rounded-xl text-white font-bold overflow-hidden inline-flex items-center gap-2 interactive border border-accent-cyan/30 glass hover:border-accent-cyan"
              >
                <FileText size={18} />
                View Resume
              </a>
            </motion.div>

          </motion.div>

          {/* ── Right: Profile Image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative flex justify-center order-1 lg:order-2 w-full lg:w-auto"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ willChange: 'transform' }}
          >
            <motion.div
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d', willChange: 'transform' }}
              className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] shrink-0"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-accent-purple/20 blur-[80px] rounded-full animate-pulse-slow pointer-events-none" />

              {/* Float */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-full h-full glass rounded-[50%] sm:rounded-[30px] p-3 border border-white/20 shadow-premium overflow-hidden z-10"
                style={{ willChange: 'transform' }}
              >
                <div className="w-full h-full rounded-[50%] sm:rounded-[24px] overflow-hidden bg-[#0a0a0a] relative">
                  {profileImg ? (
                    <img
                      src={profileImg}
                      alt="Kshitij Pandey"
                      className="w-full h-full object-cover object-top relative z-0 scale-105"
                      onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&q=80'; }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-6xl font-black text-transparent bg-clip-text bg-neon-gradient">KP</span>
                    </div>
                  )}
                  {/* Removed absolute black gradient overlay blocking the image */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center z-20 pointer-events-none">
                    <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full text-[10px] font-black text-accent-cyan uppercase tracking-widest border border-white/10 flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse shadow-neon-cyan" />
                       Gandhinagar, IN
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 glass px-4 py-2 rounded-2xl shadow-neon-cyan border border-accent-cyan/30 z-30 hidden md:block"
                style={{ willChange: 'transform' }}
              >
                <div className="text-accent-cyan font-black text-sm tracking-widest uppercase">React</div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-2xl shadow-neon-purple border border-accent-purple/30 z-30 hidden md:block"
                style={{ willChange: 'transform' }}
              >
                <div className="text-accent-purple font-black text-sm tracking-widest uppercase">Node.js</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-1 cursor-pointer hover:text-gray-300 transition-colors"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
          <ChevronDown size={16} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
