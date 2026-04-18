import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';
import { Trophy, Star, Code2, ExternalLink, Award, Cpu, GitBranch, Zap, BookOpen, Shield, Activity } from 'lucide-react';

const highlights = [
  {
    tag: "Competition",
    icon: <Award size={22} />,
    color: "purple",
    title: "Codefest — NIT Durgapur",
    subtitle: "Nationwide Hackathon · Unstop",
    body: "Participated in Codefest, a nationwide hackathon organised by NIT Durgapur. Showcased rapid prototyping and problem-solving skills under pressure against top developers across India.",
    link: "https://unstop.com/certificate-preview/3ca79ca3-e3be-49d3-8366-261ce8da4fde",
    linkLabel: "View Certificate",
    pills: ["Competitive Coding", "Unstop", "NIT Durgapur"],
    featured: false,
  },
  {
    tag: "Certification",
    icon: <Shield size={22} />,
    color: "pink",
    title: "5 Verified Certificates",
    subtitle: "SoloLearn · Simplilearn · Forage",
    body: "Earned industry-recognised credentials covering JavaScript, C programming, Generative AI Studio, and a Software Development Job Simulation by Datacom (via Forage).",
    link: "/certificates",
    linkLabel: "See All →",
    pills: ["JavaScript", "C Lang", "GenAI Studio"],
    featured: false,
    internal: true,
  },
  {
    tag: "Open Source",
    icon: <GitBranch size={22} />,
    color: "cyan",
    title: "38+ Public Repositories",
    subtitle: "GitHub · Kshitij-Pandey2605",
    body: "Actively building and publishing projects on GitHub — from full-stack platforms to Figma-powered UI/UX work. All repos are public and open for collaboration.",
    link: "https://github.com/Kshitij-Pandey2605",
    linkLabel: "GitHub Profile",
    pills: ["Full Stack", "React", "UI/UX"],
    featured: false,
  },
  {
    tag: "DSA",
    icon: <Code2 size={22} />,
    color: "cyan",
    title: "LeetCode Problem Solving",
    subtitle: "KshitijPandey2605 · Live Stats",
    body: "Consistently solving data structure and algorithm problems on LeetCode. Strong grasp on logic building, data manipulation, and software design fundamentals.",
    link: "https://leetcode.com/u/KshitijPandey2605/",
    linkLabel: "LeetCode Profile",
    pills: ["Arrays", "Trees", "DP", "Graphs"],
    featured: false,
  },
];

const colorMap = {
  cyan:   { badge: 'bg-accent-cyan/10 text-accent-cyan border-accent-cyan/30',   icon: 'bg-accent-cyan/10 text-accent-cyan', border: 'border-accent-cyan/20', pill: 'bg-accent-cyan/10 text-accent-cyan/80 border-accent-cyan/20', glow: 'bg-accent-cyan/15', btn: 'border-accent-cyan/30 text-accent-cyan hover:bg-accent-cyan/10' },
  purple: { badge: 'bg-accent-purple/10 text-accent-purple border-accent-purple/30', icon: 'bg-accent-purple/10 text-accent-purple', border: 'border-accent-purple/20', pill: 'bg-accent-purple/10 text-accent-purple/80 border-accent-purple/20', glow: 'bg-accent-purple/15', btn: 'border-accent-purple/30 text-accent-purple hover:bg-accent-purple/10' },
  pink:   { badge: 'bg-accent-pink/10 text-accent-pink border-accent-pink/30',   icon: 'bg-accent-pink/10 text-accent-pink',   border: 'border-accent-pink/20',   pill: 'bg-accent-pink/10 text-accent-pink/80 border-accent-pink/20',   glow: 'bg-accent-pink/15',   btn: 'border-accent-pink/30 text-accent-pink hover:bg-accent-pink/10'   },
};

const Achievements = () => {
  const rest = highlights;

  return (
    <SectionWrapper id="achievements">
      {/* ── Header ── */}
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-xs font-bold uppercase tracking-widest text-accent-pink mb-6"
        >
          <Star size={14} /> Real Milestones
        </motion.div>
        <h2 className="text-5xl md:text-7xl font-black mb-6">
          My <span className="text-transparent bg-clip-text bg-neon-gradient">Achievements</span>
        </h2>
        <p className="text-gray-400 text-base max-w-xl mx-auto">
          Every milestone listed here is real and verifiable — no inflated numbers, no filler.
        </p>
        <div className="w-24 h-1 bg-neon-gradient mx-auto rounded-full mt-6" />
      </div>

      {/* ── Grid Cards ── */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {rest.map((item, i) => {
          const c = colorMap[item.color];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className={`group relative glass rounded-[2rem] border ${c.border} p-6 flex flex-col gap-4 overflow-hidden card-hover h-full`}
            >
              <div className={`absolute -top-10 -right-10 w-40 h-40 ${c.glow} blur-[70px] rounded-full pointer-events-none opacity-30 group-hover:opacity-70 transition-opacity duration-700`} />

              <div className="flex items-start justify-between relative z-10">
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center border ${c.border} ${c.icon} group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <span className={`text-[9px] font-black uppercase tracking-[0.2em] px-2.5 py-1 rounded-full border ${c.badge}`}>{item.tag}</span>
              </div>

              <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="text-lg font-black text-white mb-1 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-neon-gradient transition-all">{item.title}</h3>
                <p className={`text-[9px] font-bold uppercase tracking-widest mb-3 ${item.color === 'cyan' ? 'text-accent-cyan' : item.color === 'purple' ? 'text-accent-purple' : 'text-accent-pink'}`}>{item.subtitle}</p>
                <p className="text-gray-400 text-xs leading-relaxed flex-1">{item.body}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 relative z-10 mt-2">
                {item.pills.map(p => (
                  <span key={p} className={`text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md border ${c.pill}`}>{p}</span>
                ))}
              </div>

              <a
                href={item.link}
                target={item.internal ? '_self' : '_blank'}
                rel={item.internal ? undefined : 'noopener noreferrer'}
                className={`mt-4 inline-flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest transition-all py-2 px-3 rounded-xl border ${c.btn} relative z-10 interactive`}
              >
                <ExternalLink size={13} /> {item.linkLabel}
              </a>

              <div className={`absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700 ${item.color === 'cyan' ? 'bg-accent-cyan' : item.color === 'purple' ? 'bg-accent-purple' : 'bg-accent-pink'}`} />
            </motion.div>
          );
        })}
      </div>

      {/* ── Bottom note ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-12"
      >
        <div className="inline-flex items-center gap-2 px-5 py-2 glass rounded-full border border-white/5 text-[10px] text-gray-500 font-mono uppercase tracking-widest">
          <BookOpen size={12} />
          All data is real · Certificates are publicly verifiable
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Achievements;
