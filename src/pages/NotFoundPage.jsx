import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';

const NotFoundPage = ({ theme, toggleTheme }) => {
  return (
    <PageWrapper theme={theme} toggleTheme={toggleTheme}>
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative inline-block"
        >
          <div className="text-[150px] md:text-[200px] font-black leading-none text-transparent bg-clip-text bg-neon-gradient opacity-20">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl md:text-6xl font-black text-white">Oops!</span>
          </div>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-400 mt-4 mb-10 max-w-md mx-auto"
        >
          The page you are looking for has been teleported to another dimension.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            to="/"
            className="btn-premium px-8 py-4 bg-neon-gradient text-white rounded-xl font-black uppercase tracking-widest text-sm flex items-center gap-3 interactive shadow-neon-cyan"
          >
            <Home size={18} /> Return To Base
          </Link>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default NotFoundPage;
