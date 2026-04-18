import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoverState, setHoverState] = useState('default');

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const interactiveEl = target.closest('button, a, .interactive, .card-hover');
      
      if (interactiveEl) {
        if (interactiveEl.classList.contains('card-hover')) {
          setHoverState('card');
        } else {
          setHoverState('hover');
        }
      } else {
        setHoverState('default');
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const variantsInner = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      backgroundColor: 'var(--color-accent-cyan)',
      boxShadow: '0 0 10px var(--color-accent-cyan), 0 0 20px var(--color-accent-cyan)',
      scale: 1,
      opacity: 1
    },
    hover: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      backgroundColor: 'var(--color-accent-pink)',
      boxShadow: '0 0 15px var(--color-accent-pink), 0 0 30px var(--color-accent-pink)',
      scale: 1.5,
      opacity: 1
    },
    card: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      backgroundColor: 'var(--color-accent-purple)',
      scale: 0.5,
      opacity: 0.5
    }
  };

  const variantsOuter = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      borderColor: 'var(--color-accent-cyan)',
      scale: 1,
      backgroundColor: 'transparent',
      opacity: 0.5
    },
    hover: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      borderColor: 'var(--color-accent-pink)',
      scale: 1.8,
      backgroundColor: 'rgba(255, 0, 128, 0.1)',
      opacity: 1
    },
    card: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      borderColor: 'var(--color-accent-purple)',
      scale: 2.5,
      backgroundColor: 'rgba(157, 0, 255, 0.05)',
      opacity: 0.8
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 pointer-events-none"
        style={{ originX: 0.5, originY: 0.5, zIndex: 99999 }}
        variants={variantsOuter}
        animate={hoverState}
        transition={{ type: 'spring', stiffness: 100, damping: 20, mass: 0.8 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none"
        style={{ originX: 0.5, originY: 0.5, zIndex: 100000 }}
        variants={variantsInner}
        animate={hoverState}
        transition={{ type: 'spring', stiffness: 400, damping: 28, mass: 0.1 }}
      />
    </>
  );
};

export default CustomCursor;
