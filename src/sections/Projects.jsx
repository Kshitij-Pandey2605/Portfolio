import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';
import havellsImg from '../assets/havells.png';
import { ExternalLink, Youtube, Github, Globe, Layers } from 'lucide-react';

const projects = [
  {
    title: "FitLife AI",
    description: "AI-powered health platform that analyzes user body data, generates personalized diet & workout plans, and tracks progress.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://dietanalyzer-fitlife.netlify.app",
    type: "AI Platform",
    image: "https://images.unsplash.com/photo-1594882645126-14020914d58d?w=1200&q=80"
  },
  {
    title: "Havells Website Clone",
    description: "Pixel-perfect Havells website clone using HTML and CSS.",
    tech: ["HTML", "CSS"],
    demo: "https://youtu.be/Ol9UBQls6OE",
    type: "Frontend Simulation",
    image: havellsImg
  }
];

const Projects = () => {
  return (
    <SectionWrapper id="projects">
      <div className="text-center mb-24">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-xs font-bold uppercase tracking-widest text-accent-purple mb-6"
        >
          <Layers size={14} /> My Portoflio
        </motion.div>
        <h2 className="text-5xl md:text-7xl font-black mb-6">
          My <span className="text-transparent bg-clip-text bg-neon-gradient">Projects</span>
        </h2>
        <div className="w-24 h-1 bg-neon-gradient mx-auto rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            whileHover={{ translateY: -12 }}
            className="group relative glass rounded-[2.5rem] overflow-hidden border border-white/10 shadow-premium active:scale-95 transition-transform duration-500"
          >
            {/* Project Image Viewport */}
            <div className="relative h-[300px] md:h-[400px] overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-primary/40 to-transparent" />
              
              {/* Type Badge */}
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 bg-accent-purple border border-white/20 text-white text-[10px] font-black rounded-xl uppercase tracking-widest shadow-lg">
                  {project.type}
                </span>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-accent-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px]" />
            </div>

            {/* Content Area */}
            <div className="p-10 relative bg-[#0a0a0a]/80 backdrop-blur-3xl -mt-12 rounded-t-[3rem] border-t border-white/10 flex flex-col h-full">
              <h3 className="text-3xl font-black mb-4 text-white group-hover:text-accent-cyan transition-colors tracking-tight">
                {project.title}
              </h3>
              <div className="min-h-[60px]">
                <p className="text-gray-400 mb-6 leading-relaxed text-lg font-medium opacity-80 line-clamp-2 group-hover:opacity-100 transition-opacity">
                  {project.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-10 min-h-[70px] content-start">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] font-black uppercase tracking-widest text-accent-cyan bg-accent-cyan/10 px-3 py-1.5 rounded-lg border border-accent-cyan/20">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mt-auto">
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-accent-cyan text-primary rounded-xl hover:scale-105 active:scale-95 transition-all font-black text-xs uppercase tracking-widest shadow-neon-cyan"
                  >
                    <Globe size={18} /> Live Experience
                  </a>
                )}
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-accent-pink text-white rounded-xl hover:scale-105 active:scale-95 transition-all font-black text-xs uppercase tracking-widest shadow-lg"
                  >
                    <Youtube size={18} /> Watch Demo
                  </a>
                )}
                <a 
                  href="https://github.com/Kshitij-Pandey2605" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 glass text-white rounded-xl hover:bg-white/10 hover:border-accent-cyan transition-all font-black text-xs uppercase tracking-widest"
                >
                  <Github size={18} /> Source Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
