import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SectionWrapper = ({ children, id, className = "" }) => {
  const ref = useRef(null);
  
  // Advanced Parallax Effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.05, 0]);

  return (
    <section 
      ref={ref}
      id={id} 
      className={`relative min-h-screen py-24 px-6 md:px-12 lg:px-24 flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Background Parallax Layer */}
      <motion.div 
        style={{ y: yBg, opacity: opacityBg }}
        className="absolute inset-0 pointer-events-none flex items-center justify-center z-0 overflow-hidden"
      >
        <div className="w-[150vw] h-[150vw] md:w-[2500px] md:h-[2500px] border-[1px] border-white rounded-full opacity-[0.03] flex-shrink-0" />
        <div className="absolute w-[100vw] h-[100vw] md:w-[1500px] md:h-[1500px] border-[1px] border-white rounded-full opacity-[0.03] flex-shrink-0" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-7xl relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
