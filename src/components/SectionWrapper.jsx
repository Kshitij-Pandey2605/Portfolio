import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, className = "" }) => {
  return (
    <section 
      id={id} 
      className={`min-h-screen py-24 px-6 md:px-12 lg:px-24 flex items-center justify-center ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-7xl"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
