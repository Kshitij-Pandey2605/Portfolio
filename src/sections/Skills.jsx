import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';
import { Code, Layout, Database, Terminal, Settings, GitBranch, Cpu, Zap } from 'lucide-react';

const skillsData = [
  {
    category: "Languages",
    icon: <Terminal className="text-accent-cyan" />,
    skills: ["C", "C++", "JavaScript", "Python"],
    color: "cyan"
  },
  {
    category: "Frontend",
    icon: <Layout className="text-accent-purple" />,
    skills: ["HTML", "CSS", "React"],
    color: "purple"
  },
  {
    category: "Backend",
    icon: <Code className="text-accent-pink" />,
    skills: ["Node.js", "Express.js"],
    color: "pink"
  },
  {
    category: "Database",
    icon: <Database className="text-accent-cyan" />,
    skills: ["MongoDB"],
    color: "cyan"
  },
  {
    category: "Tools",
    icon: <Settings className="text-accent-purple" />,
    skills: ["Postman", "Figma", "Canva", "Netlify", "Vercel", "Render"],
    color: "purple"
  },
  {
    category: "Version Control",
    icon: <GitBranch className="text-accent-pink" />,
    skills: ["GitHub"],
    color: "pink"
  }
];

const Skills = () => {
  return (
    <SectionWrapper id="skills">
      <div className="text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-xs font-bold uppercase tracking-widest text-accent-cyan mb-6"
        >
          <Cpu size={14} /> Technical Stack
        </motion.div>
        <h2 className="text-5xl md:text-7xl font-black mb-6">
          My <span className="text-transparent bg-clip-text bg-neon-gradient">Skills</span>
        </h2>
        <div className="w-24 h-1 bg-neon-gradient mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((item, index) => (
          <motion.div
            key={item.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative glass p-6 md:p-10 rounded-[2rem] border border-white/5 overflow-hidden card-hover interactive"
          >
            {/* Hover Background Glow */}
            <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-accent-${item.color}`} />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center border border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-white tracking-tight">{item.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {item.skills.map(skill => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-white/5 text-gray-400 text-sm font-semibold rounded-xl border border-white/5 hover:border-accent-cyan hover:bg-accent-cyan/10 hover:text-accent-cyan transition-all duration-300 flex items-center gap-2"
                  >
                    <Zap size={10} className="opacity-50" /> {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Accent Line */}
            <div className={`absolute bottom-0 left-0 w-0 h-1 bg-accent-${item.color} group-hover:w-full transition-all duration-700`} />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
