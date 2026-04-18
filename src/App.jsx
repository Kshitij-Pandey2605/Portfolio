import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';

import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import CertificatesPage from './pages/CertificatesPage';
import FigmaPage from './pages/FigmaPage';
import HackathonPage from './pages/HackathonPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import Resume from './sections/Resume';
import WeatherApp from './pages/WeatherApp';
import SmartTodo from './pages/SmartTodo';

import EducationPage from './pages/EducationPage';

function App() {
  const [theme, setTheme] = useState('dark');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('light-theme', savedTheme === 'light');
    window.scrollTo(0, 0);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
    document.documentElement.classList.toggle('light-theme', newTheme === 'light');
  };

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className="relative min-h-screen transition-colors duration-500 selection:bg-accent-cyan/30 selection:text-white">
        <Routes>
          <Route path="/" element={<HomePage theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/education" element={<EducationPage theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/projects" element={<ProjectsPage theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/certificates" element={<CertificatesPage theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/figma" element={<FigmaPage theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/hackathon" element={<HackathonPage theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/contact" element={<ContactPage theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/resume" element={<Resume theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/weather" element={<WeatherApp theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/todo" element={<SmartTodo theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="*" element={<NotFoundPage theme={theme} toggleTheme={toggleTheme} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
