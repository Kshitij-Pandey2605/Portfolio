import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import BackToTop from './BackToTop';
import CustomCursor from './CustomCursor';
import ThreeBackground from './ThreeBackground';

const PageWrapper = ({ children, theme, toggleTheme }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <ScrollProgress />
      {/* Premium Visual Overlays */}
      <div className="fixed inset-0 pointer-events-none z-1">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />
        <div className="absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      </div>
      
      <ThreeBackground theme={theme} />
      <CustomCursor />
      
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="relative z-10 pt-[100px] min-h-[calc(100vh-200px)]">
        {children}
      </main>
      <BackToTop />
      <Footer />
    </>
  );
};

export default PageWrapper;
