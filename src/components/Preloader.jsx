import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2800); // 2.8s total loading time
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        y: -50,
        filter: "blur(10px)",
        transition: { duration: 0.8, ease: "easeInOut" } 
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505] overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-neon-gradient opacity-10 blur-[100px] animate-pulse-slow" />
      
      <div className="relative flex flex-col items-center">
        {/* Animated Rings */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[-40px] border border-accent-cyan/20 rounded-full border-t-accent-cyan"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[-60px] border border-accent-purple/20 rounded-full border-b-accent-purple"
        />

        {/* Core Logo Draw Reveal */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          <motion.svg
            viewBox="0 0 100 100"
            className="w-full h-full text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* K Path */}
            <motion.path
              d="M30 20 L30 80 M30 50 L60 20 M30 50 L60 80"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            {/* P Path */}
            <motion.path
              d="M70 20 L70 80 M70 20 C85 20, 85 50, 70 50"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
            />
          </motion.svg>
        </div>
        
        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute -bottom-16 flex items-center gap-3"
        >
          <div className="flex gap-1">
            <motion.div 
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0 }}
              className="w-1.5 h-1.5 bg-accent-cyan rounded-full shadow-neon-cyan" 
            />
            <motion.div 
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
              className="w-1.5 h-1.5 bg-accent-purple rounded-full shadow-neon-purple" 
            />
            <motion.div 
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
              className="w-1.5 h-1.5 bg-accent-pink rounded-full shadow-[0_0_10px_rgba(236,72,153,0.8)]" 
            />
          </div>
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400">System Ready</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;
