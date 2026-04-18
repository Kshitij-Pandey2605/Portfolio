import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';
import { Trophy, Star, Target, Zap, Medal } from 'lucide-react';

const achievements = [
  {
    icon: <Trophy size={24} />,
    title: "ContentCraft AI",
    desc: "Built AI-powered marketing assistant at CRAFTATHON 2025, reducing content creation time by 70% and deployed to 50+ beta users",
    color: "cyan"
  },
  {
    icon: <Target size={24} />,
    title: "LeetCode Solver",
    desc: "Solved 50+ data structure and algorithm problems including arrays, trees, dynamic programming",
    color: "purple"
  },
  {
    icon: <Zap size={24} />,
    title: "Full Stack Developer",
    desc: "Deployed 5+ production-ready applications including AI health platform, content generator, and e-commerce clones",
    color: "pink"
  },
  {
    icon: <Medal size={24} />,
    title: "Open Source Contributor",
    desc: "Active contributor on GitHub with 15+ repositories and 200+ total commits",
    color: "cyan"
  }
];

const Achievements = () => {
  return (
    <SectionWrapper id="achievements">
      <div className="text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-xs font-bold uppercase tracking-widest text-accent-pink mb-6"
        >
          <Star size={14} /> Milestones
        </motion.div>
        <h2 className="text-5xl md:text-7xl font-black mb-6">
          My <span className="text-transparent bg-clip-text bg-neon-gradient">Achievements</span>
        </h2>
        <div className="w-24 h-1 bg-neon-gradient mx-auto rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {achievements.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`group flex items-start gap-6 p-8 glass rounded-[2rem] border border-white/5 hover:border-accent-${item.color}/30 card-hover interactive`}
          >
            <div className={`w-16 h-16 shrink-0 rounded-2xl glass flex items-center justify-center text-accent-${item.color} shadow-lg group-hover:scale-110 transition-transform`}>
              {item.icon}
            </div>
            <div>
              <h3 className="text-xl font-black text-white mb-2 group-hover:text-accent-cyan transition-colors">{item.title}</h3>
              <p className="text-gray-400 font-medium leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Achievements;
