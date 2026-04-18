import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import MemoryCardGame from '../games/MemoryCardGame';
import NumberGuessingGame from '../games/NumberGuessingGame';

const GameModal = ({ isOpen, onClose, gameId }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 backdrop-blur-xl">
        {/* Overlay */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80"
        />
        
        {/* Modal Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass rounded-[2rem] border border-white/10 shadow-premium bg-[#0a0a0a]/95 flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10 sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-md z-10">
            <h3 className="text-xl font-black text-white px-2 tracking-wide">
              {gameId === 'memory-card' ? 'Memory Match' : 'Number Guesser'}
            </h3>
            <button 
              onClick={onClose}
              className="p-2 rounded-xl glass hover:bg-white/10 text-gray-400 hover:text-white transition-colors interactive border border-white/5"
            >
              <X size={20} />
            </button>
          </div>

          {/* Game Body */}
          <div className="p-6 md:p-10 flex-1">
            {gameId === 'memory-card' && <MemoryCardGame />}
            {gameId === 'number-guess' && <NumberGuessingGame />}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default GameModal;
