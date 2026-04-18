import React from 'react';
import { motion } from 'framer-motion';
import { Figma, ExternalLink, Smartphone, Palette, Zap, Grid } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';

// Safely import images — using actual filenames from src/assets/
let figmaCodingGita, figmaSportsFit;
try { figmaCodingGita = new URL('../assets/figma-1.png', import.meta.url).href; } catch (e) { figmaCodingGita = null; }
try { figmaSportsFit = new URL('../assets/figma-2.png', import.meta.url).href; } catch (e) { figmaSportsFit = null; }

const figmaDesigns = [
  {
    title: "CodingGita Clone (Mobile View)",
    description: "Complete mobile-responsive UI design for CodingGita's placement platform. Features a placement statistics dashboard, student success stories section, modern gradient cards with glassmorphism effects, and a prominent 'Apply now' CTA. Designed for mobile-first experience with thumb-friendly touch targets.",
    process: [
      "Designed placement stats dashboard (30+ LPA highest, 12.2 LPA average)",
      "Student success stories with photos and achievements",
      "Modern gradient cards with glassmorphism effects",
      "Mobile-first with thumb-friendly 44px+ touch targets"
    ],
    figmaLink: "https://www.figma.com/design/pO5mo4Jd5DnrPRxa97SIJe/Untitled?node-id=0-1&t=1Jd90v7cdOs932bw-1",
    previewImage: figmaCodingGita,
    fallback: "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?w=600&q=80",
    color: "cyan"
  },
  {
    title: "Sports Fitness Discovery App",
    description: "Complete mobile UI for discovering local sports activities and fitness venues. Features personalized welcome, powerful search with sports/venue filtering, category grid (Football, Cricket, Gym, Swimming, Yoga), nearby activities with ratings and pricing, and bottom navigation.",
    process: [
      "Personalized welcome screen with activity recommendations",
      "Category browsing grid with 8 sport types",
      "Nearby venues with ratings (4.8★) and pricing (₹800/hr)",
      "Bottom navigation bar with Home, Explore, Events, Profile"
    ],
    figmaLink: "https://www.figma.com/make/dz4BtYP00789Mz2BAznVRP/Sports-Fitness-Discovery-App?fullscreen=1&t=dAvW1jW9bdUPbA1O-1",
    previewImage: figmaSportsFit,
    fallback: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80",
    color: "purple"
  }
];

const FigmaPage = ({ theme, toggleTheme }) => {
  return (
    <PageWrapper theme={theme} toggleTheme={toggleTheme}>
      <div className="container mx-auto px-6 py-12 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-xs font-bold uppercase tracking-widest text-accent-pink mb-6"
          >
            <Palette size={14} /> UI/UX Design
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6"
          >
            My <span className="text-transparent bg-clip-text bg-neon-gradient">Figma</span> Designs
          </motion.h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Mobile UI/UX designs built in Figma — focused on usability, modern aesthetics, and accessibility.
          </p>
        </div>

        <div className="space-y-28">
          {figmaDesigns.map((design, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Phone Mockup */}
              <div className="w-full lg:w-[40%] flex justify-center shrink-0">
                <div className="relative">
                  {/* Glow */}
                  <div className={`absolute -inset-8 bg-accent-${design.color}/20 blur-[60px] rounded-full -z-10`} />
                  {/* Phone frame */}
                  <div className="relative w-[240px] h-[490px] bg-[#111] rounded-[2.8rem] border-[6px] border-[#222] shadow-[0_30px_80px_rgba(0,0,0,0.6)] overflow-hidden">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#111] rounded-b-2xl z-20" />
                    {/* Screen */}
                    <img
                      src={design.previewImage}
                      alt={design.title}
                      className="w-full h-full object-cover object-top"
                      onError={(e) => { e.target.src = design.fallback; }}
                    />
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="w-full flex-1 space-y-7">
                <div className="flex items-center gap-3">
                  <div className={`p-3 glass rounded-2xl text-accent-${design.color}`}>
                    <Smartphone size={22} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">{design.title}</h2>
                </div>

                <p className="text-gray-400 text-base leading-relaxed">{design.description}</p>

                <div className="glass p-7 rounded-3xl border border-white/5 space-y-4">
                  <h3 className="text-white font-black text-base flex items-center gap-2">
                    <Grid size={16} className="text-accent-pink" /> Design Highlights
                  </h3>
                  <ul className="space-y-3">
                    {design.process.map((step, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                        <Zap size={14} className={`text-accent-${design.color} shrink-0 mt-0.5`} />
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={design.figmaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-premium inline-flex items-center gap-3 px-7 py-3.5 border border-accent-${design.color}/30 text-accent-${design.color} rounded-xl font-black uppercase tracking-widest text-sm hover:bg-accent-${design.color} hover:text-white hover:border-transparent transition-all interactive shadow-lg glass`}
                >
                  <Figma size={18} /> Open in Figma <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default FigmaPage;
