import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';
import havellsImg from '../assets/havells.png';
import { ExternalLink, Youtube, Github, Globe, Layers } from 'lucide-react';

const projects = [
  {
    title: "FitLife AI",
    description: "AI-powered health platform that analyzes user body data, generates personalized diet & workout plans, and tracks progress.",
    tech: ["React.js", "Node.js", "Express", "MongoDB"],
    features: ["RESTful API Architecture", "Context API State Mgmt", "JWT Authentication"],
    link: "https://dietanalyzer-fitlife.netlify.app",
    type: "Full Stack AI",
    image: "https://images.unsplash.com/photo-1594882645126-14020914d58d?w=1200&q=80"
  },
  {
    title: "Havells Web Console",
    description: "Pixel-perfect frontend simulation of the Havells enterprise site with optimized asset loading.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    features: ["Responsive Grid System", "Asset Optimization", "Semantic HTML5"],
    demo: "https://youtu.be/Ol9UBQls6OE",
    type: "Frontend Engineering",
    image: havellsImg
  },
  {
    title: "Dream Engine Clone",
    description: "A high-performance clone of the Dream platform focusing on animation precision and UX speed.",
    tech: ["HTML5", "CSS3", "Framer Motion"],
    features: ["Advanced CSS Keyframes", "Performance Web Vitals", "UX Micro-interactions"],
    demo: "https://youtu.be/Wb-3WKllPEY",
    type: "Technical UI/UX",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
  }
];

const Projects = () => {
  return (
    <SectionWrapper id="projects">
      <div className="text-center mb-24">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-[10px] font-black uppercase tracking-[0.3em] text-accent-purple mb-6"
        >
          <Layers size={14} /> System Architecture
        </motion.div>
        <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
          Engineering <span className="text-transparent bg-clip-text bg-neon-gradient">Portfolio</span>
        </h2>
        <div className="w-24 h-1 bg-neon-gradient mx-auto rounded-full" />
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.8 }}
            className="group relative glass rounded-[2.5rem] overflow-hidden border border-white/5 bg-[#050505]/40 backdrop-blur-xl flex flex-col h-full hover:border-accent-cyan/20 transition-all duration-500"
          >
            {/* IDE Window Header */}
            <div className="flex items-center gap-1.5 px-6 py-4 bg-white/5 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <div className="flex-1 text-center font-mono text-[10px] text-gray-500 uppercase tracking-widest">{project.title}.exe</div>
            </div>

            {/* Project Image Viewport */}
            <div className="relative h-[220px] md:h-[280px] overflow-hidden">
               <img 
                 src={project.image} 
                 alt={project.title}
                 className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
               
               {/* Type Badge */}
               <div className="absolute bottom-6 left-6">
                 <span className="px-3 py-1.5 glass border border-white/10 text-white text-[9px] font-black rounded-lg uppercase tracking-widest bg-black/40">
                   {project.type}
                 </span>
               </div>
            </div>

            {/* Content Area */}
            <div className="p-8 md:p-10 relative flex flex-col flex-1">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-black text-white group-hover:text-accent-cyan transition-colors tracking-tight">
                  {project.title}
                </h3>
              </div>
              
              <div className="mb-8">
                <p className="text-gray-400 leading-relaxed text-base font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                  {project.description}
                </p>
              </div>

              {/* Technical Specs List */}
              <div className="mb-8 bg-white/5 rounded-2xl p-5 border border-white/5">
                <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4 border-b border-white/10 pb-2">Technical Specs</div>
                <div className="grid grid-cols-1 gap-3">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs font-bold text-gray-300">
                      <div className="w-1 h-1 rounded-full bg-accent-cyan shadow-[0_0_8px_rgba(0,243,255,0.5)]" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-10">
                {project.tech.map(t => (
                  <span key={t} className="font-mono text-[10px] text-accent-cyan bg-accent-cyan/10 px-3 py-1 rounded-md border border-accent-cyan/20">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mt-auto">
                {project.link && (
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-3 px-6 py-3.5 bg-accent-cyan text-black rounded-xl font-black text-[10px] uppercase tracking-[0.2em] shadow-neon-cyan/20 transition-all hover:shadow-neon-cyan/40"
                  >
                    <Globe size={16} /> Deploy
                  </motion.a>
                )}
                {project.demo && (
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-3 px-6 py-3.5 bg-accent-pink text-white rounded-xl font-black text-[10px] uppercase tracking-[0.2em] shadow-lg"
                  >
                    <Youtube size={16} /> Docs
                  </motion.a>
                )}
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/Kshitij-Pandey2605" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 glass text-white rounded-xl border border-white/10 hover:border-accent-cyan/40 transition-all"
                  title="View Source"
                >
                  <Github size={18} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
