import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Github, Youtube, Layers, Laptop, Code2, Copy, ExternalLink } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import { projectsData, projectCategories } from '../data/projects';

const ProjectsPage = ({ theme, toggleTheme }) => {
  const [activeTab, setActiveTab] = useState('All');
  const navigate = useNavigate();

  const filteredProjects = activeTab === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeTab);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Clones': return <Copy size={16} />;
      case 'Full Stack': return <Layers size={16} />;
      case 'Frontend': return <Laptop size={16} />;
      default: return <Code2 size={16} />;
    }
  };

  const handleLiveClick = (e, project) => {
    if (project.isInternal) {
      e.preventDefault();
      navigate(project.live);
    }
  };

  return (
    <PageWrapper theme={theme} toggleTheme={toggleTheme}>
      <div className="container mx-auto px-6 py-12 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-xs font-bold uppercase tracking-widest text-accent-cyan mb-6"
          >
            <Layers size={14} /> Portfolio Grid
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6"
          >
            My Creative <span className="text-transparent bg-clip-text bg-neon-gradient">Arsenal</span>
          </motion.h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            6+ production-ready projects — full-stack platforms, frontend apps, and pixel-perfect clones.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 interactive ${
                activeTab === category
                  ? 'bg-accent-purple text-white shadow-neon-purple scale-105'
                  : 'glass text-gray-400 hover:text-white border border-white/10 hover:border-accent-purple/50'
              }`}
            >
              {getCategoryIcon(category)} {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="group relative glass rounded-[2.5rem] overflow-hidden border border-white/10 card-hover flex flex-col h-full bg-[#0a0a0a]/80"
              >
                {/* Image */}
                <div className="relative h-[220px] overflow-hidden shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = `https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-accent-cyan/20 border border-accent-cyan/50 text-accent-cyan text-[10px] font-black rounded-xl uppercase tracking-widest backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1.5 bg-accent-pink/20 border border-accent-pink/40 text-accent-pink text-[10px] font-black rounded-xl uppercase tracking-widest backdrop-blur-md">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="text-xl font-black mb-2 text-white group-hover:text-accent-cyan transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-[15px] leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] font-bold uppercase tracking-widest text-gray-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-[80px] flex items-center justify-center gap-1.5 py-2.5 glass rounded-xl border border-white/10 text-white hover:bg-white/10 transition-all interactive text-xs font-bold uppercase tracking-widest"
                      >
                        <Github size={14} /> Code
                      </a>
                    )}
                    {project.live && (
                      project.isInternal ? (
                        <Link
                          to={project.live}
                          className="flex-1 min-w-[80px] flex items-center justify-center gap-1.5 py-2.5 bg-neon-gradient text-white rounded-xl interactive text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
                        >
                          <Globe size={14} /> Open
                        </Link>
                      ) : (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 min-w-[80px] flex items-center justify-center gap-1.5 py-2.5 bg-neon-gradient text-white rounded-xl interactive text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
                        >
                          <Globe size={14} /> Live
                        </a>
                      )
                    )}
                    {project.youtube && (
                      <a
                        href={project.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-[80px] flex items-center justify-center gap-1.5 py-2.5 bg-accent-pink/20 text-accent-pink border border-accent-pink/30 hover:bg-accent-pink hover:text-white rounded-xl transition-all interactive text-xs font-bold uppercase tracking-widest"
                      >
                        <Youtube size={14} /> Video
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default ProjectsPage;
