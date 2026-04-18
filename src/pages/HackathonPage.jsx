import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Code2, Users, Rocket, GitBranch, ExternalLink, Zap, Activity, Clock, Award, Cpu, ChevronLeft, ChevronRight, X } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';

// Import all 4 ContentCraft screenshots — filenames have spaces so we use URL constructor
let ccImg1, ccImg2, ccImg3, ccImg4;
try { ccImg1 = new URL('../assets/contentceraft1 (1).png', import.meta.url).href; } catch { ccImg1 = null; }
try { ccImg2 = new URL('../assets/contentceraft1 (2).png', import.meta.url).href; } catch { ccImg2 = null; }
try { ccImg3 = new URL('../assets/contentceraft1 (3).png', import.meta.url).href; } catch { ccImg3 = null; }
try { ccImg4 = new URL('../assets/contentceraft1 (4).png', import.meta.url).href; } catch { ccImg4 = null; }

const FALLBACK = 'https://images.unsplash.com/photo-1618044733300-9472054094ee?w=1600&q=80';
const screenshots = [
  { src: ccImg1, label: 'Dashboard Overview' },
  { src: ccImg2, label: 'AI Tweet Generator' },
  { src: ccImg3, label: 'Analytics Panel' },
  { src: ccImg4, label: 'Content Calendar' },
];

const HackathonPage = ({ theme, toggleTheme }) => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImg = () => setLightboxIndex((p) => (p - 1 + screenshots.length) % screenshots.length);
  const nextImg = () => setLightboxIndex((p) => (p + 1) % screenshots.length);
  return (
    <PageWrapper theme={theme} toggleTheme={toggleTheme}>
      {/* Hero */}
      <section className="relative pt-16 pb-28 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent-purple/15 blur-[130px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full glass border border-accent-purple/30 text-xs font-black uppercase tracking-widest text-accent-purple mb-8 shadow-neon-purple"
          >
            <Trophy size={16} /> CRAFTATHON 2025 · Gandhinagar University
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-6 leading-[1.05]"
          >
            ContentCraft <span className="text-transparent bg-clip-text bg-neon-gradient">AI</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            AI Powered Viral Content & Digital Marketing Assistant — built in 36 hours at CRAFTATHON 2025.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="https://contentcraft-ai-snowy.vercel.app/login" target="_blank" rel="noopener noreferrer"
              className="btn-premium px-8 py-4 bg-neon-gradient text-white rounded-xl font-black text-sm uppercase tracking-widest flex items-center gap-3 shadow-neon-purple interactive">
              <ExternalLink size={18} /> Live Demo
            </a>
            <a href="https://github.com/Kshitij-Pandey2605/contentcraft-ai" target="_blank" rel="noopener noreferrer"
              className="btn-premium px-8 py-4 glass border border-white/10 text-white rounded-xl font-black text-sm uppercase tracking-widest flex items-center gap-3 hover:bg-white/5 interactive">
              <GitBranch size={18} /> Source Code
            </a>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="container mx-auto px-6 max-w-6xl -mt-16 relative z-20 pb-24 space-y-10">
        {/* Screenshot Gallery — 2x2 grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass p-4 rounded-[2.5rem] border border-white/10 shadow-premium bg-[#050505]/80"
        >
          <div className="grid grid-cols-2 gap-3">
            {screenshots.map((shot, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden cursor-pointer group bg-[#0a0a0a] aspect-video"
                onClick={() => openLightbox(i)}
              >
                <img
                  src={shot.src}
                  alt={shot.label}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500"
                  onError={(e) => { e.target.src = FALLBACK; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="text-white/80 text-[10px] font-black uppercase tracking-widest">{shot.label}</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="px-3 py-1.5 glass rounded-lg text-accent-cyan text-[10px] font-black uppercase tracking-widest border border-accent-cyan/30">
                    Click to Expand
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-3 px-2">
            <span className="px-4 py-2 glass rounded-xl text-accent-cyan text-xs font-black uppercase tracking-widest border border-accent-cyan/30">
              ContentCraft AI · 4 App Screens
            </span>
          </div>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                className="relative max-w-5xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={screenshots[lightboxIndex].src}
                  alt={screenshots[lightboxIndex].label}
                  className="w-full rounded-2xl shadow-2xl object-contain max-h-[80vh]"
                  onError={(e) => { e.target.src = FALLBACK; }}
                />
                <div className="absolute top-4 right-4">
                  <button onClick={closeLightbox} className="p-2 glass rounded-xl text-white hover:text-accent-pink transition-colors">
                    <X size={20} />
                  </button>
                </div>
                <button onClick={prevImg} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 glass rounded-xl text-white hover:text-accent-cyan transition-colors">
                  <ChevronLeft size={22} />
                </button>
                <button onClick={nextImg} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 glass rounded-xl text-white hover:text-accent-cyan transition-colors">
                  <ChevronRight size={22} />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 glass rounded-xl text-white text-xs font-black uppercase tracking-widest">
                  {screenshots[lightboxIndex].label} · {lightboxIndex + 1} / {screenshots.length}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Problem / Solution */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass p-9 rounded-[2rem] border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-accent-pink/50 group-hover:bg-accent-pink transition-colors duration-500" />
            <h3 className="text-xl font-black text-white mb-4 flex items-center gap-3">
              <span className="p-2 rounded-xl bg-accent-pink/10 text-accent-pink"><Activity size={22} /></span>
              The Challenge
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Marketers spend hours crafting content, analyzing trends, and predicting engagement — all in separate tools.
              The challenge was to build a unified AI platform that accelerates content creation and predicts virality in real-time.
            </p>
          </div>
          <div className="glass p-9 rounded-[2rem] border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-accent-cyan/50 group-hover:bg-accent-cyan transition-colors duration-500" />
            <h3 className="text-xl font-black text-white mb-4 flex items-center gap-3">
              <span className="p-2 rounded-xl bg-accent-cyan/10 text-accent-cyan"><Award size={22} /></span>
              The Solution
            </h3>
            <p className="text-gray-400 leading-relaxed">
              ContentCraft AI was built with OpenAI GPT API and Natural.js. It generates tweets with engagement predictions,
              suggests trending hashtags, manages a scheduling calendar, performs sentiment analysis, and serves a personalized analytics dashboard.
            </p>
          </div>
        </div>

        {/* Features + Metrics */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 glass p-9 rounded-[2rem] border border-white/5">
            <h3 className="text-xl font-black text-white mb-8">Key Features</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: <Zap size={20} />, title: "AI Tweet Generator", desc: "GPT-powered copy with built-in engagement prediction score." },
                { icon: <Activity size={20} />, title: "Sentiment Analysis", desc: "Real-time audience reaction analysis using NLP models." },
                { icon: <Clock size={20} />, title: "Content Calendar", desc: "Smart scheduling that picks optimal posting times per platform." },
                { icon: <Users size={20} />, title: "Analytics Dashboard", desc: "Track content performance via Chart.js visualizations with JWT auth." },
              ].map((f, i) => (
                <div key={i} className="flex gap-4">
                  <div className="text-accent-purple shrink-0 mt-1">{f.icon}</div>
                  <div>
                    <h4 className="text-white font-bold mb-1 text-sm">{f.title}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass p-9 rounded-[2rem] border-l-4 border-l-accent-cyan border-white/5 flex flex-col justify-center bg-accent-cyan/5">
            <h3 className="text-xl font-black text-white mb-8">Impact Metrics</h3>
            <div className="space-y-8">
              <div>
                <div className="text-5xl font-black text-accent-cyan mb-1.5">70%</div>
                <div className="text-gray-400 text-sm">Reduction in content creation time</div>
              </div>
              <div className="w-full h-px bg-white/10" />
              <div>
                <div className="text-5xl font-black text-accent-pink mb-1.5">40%</div>
                <div className="text-gray-400 text-sm">Increase in predicted engagement (A/B testing)</div>
              </div>
              <div className="w-full h-px bg-white/10" />
              <div>
                <div className="text-5xl font-black text-accent-purple mb-1.5">50+</div>
                <div className="text-gray-400 text-sm">Beta users onboarded post-hackathon</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="text-center">
          <h3 className="text-xl font-black text-white mb-7 flex items-center justify-center gap-2">
            <Cpu size={20} className="text-accent-cyan" /> Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["React", "Node.js", "Express", "MongoDB", "OpenAI API", "Natural.js", "Chart.js", "JWT Auth", "Vercel"].map((tech) => (
              <span key={tech} className="px-5 py-2.5 glass rounded-xl border border-white/10 text-gray-300 font-bold text-sm tracking-wide hover:border-accent-cyan/30 hover:text-accent-cyan transition-colors interactive">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default HackathonPage;
