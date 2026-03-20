import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

const ParallaxBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const layer1X = useTransform(smoothX, [ -0.5, 0.5 ], [ 50, -50 ]);
  const layer1Y = useTransform(smoothY, [ -0.5, 0.5 ], [ 50, -50 ]);
  
  const layer2X = useTransform(smoothX, [ -0.5, 0.5 ], [ -30, 30 ]);
  const layer2Y = useTransform(smoothY, [ -0.5, 0.5 ], [ -30, 30 ]);

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="fixed inset-0 -z-10 overflow-hidden bg-[#050505]"
    >
      {/* Mesh Gradients */}
      <motion.div 
        style={{ x: layer1X, y: layer1Y }}
        className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-accent-cyan opacity-20 blur-[150px]"
      />
      <motion.div 
        style={{ x: layer2X, y: layer2Y }}
        className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-accent-purple opacity-20 blur-[150px]"
      />
      
      {/* Animated Particles (Manual) */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.2
            }}
            animate={{ 
              y: [null, Math.random() * -100 - 50],
              opacity: [null, 0]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_10px_white]"
          />
        ))}
      </div>

      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
    </div>
  );
};

export default ParallaxBackground;
