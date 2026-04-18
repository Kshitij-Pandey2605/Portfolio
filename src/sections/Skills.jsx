import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';
import { Code, Layout, Database, Terminal, Settings, GitBranch, Cpu, Zap } from 'lucide-react';

const skillsData = [
  {
    category: "Languages & Logic",
    icon: <Terminal className="text-accent-cyan" />,
    skills: [
      { name: "C / C++", level: 85 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "Python 3.x", level: 80 }
    ],
    color: "cyan"
  },
  {
    category: "Frontend Architecture",
    icon: <Layout className="text-accent-purple" />,
    skills: [
      { name: "React Ecosystem", level: 95 },
      { name: "Modern CSS / Tailwind", level: 95 },
      { name: "Responsive Design", level: 90 }
    ],
    color: "purple"
  },
  {
    category: "Backend Systems",
    icon: <Code className="text-accent-pink" />,
    skills: [
      { name: "Node.js Runtime", level: 85 },
      { name: "Express Framework", level: 85 }
    ],
    color: "pink"
  },
  {
    category: "Data Persistence",
    icon: <Database className="text-accent-cyan" />,
    skills: [
      { name: "MongoDB / NoSQL", level: 80 }
    ],
    color: "cyan"
  },
  {
    category: "Dev Environment",
    icon: <Settings className="text-accent-purple" />,
    skills: [
      { name: "Git Workflow", level: 90 },
      { name: "Figma (UI/UX)", level: 85 },
      { name: "API Testing (Postman)", level: 80 }
    ],
    color: "purple"
  }
];

const Skills = () => {
  return (
    <SectionWrapper id="skills">
      <div className="text-center mb-24">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-[10px] font-black uppercase tracking-[0.3em] text-accent-cyan mb-6"
        >
          <Cpu size={14} /> Technical Stack v2.0
        </motion.div>
        <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
          Core <span className="text-transparent bg-clip-text bg-neon-gradient">Engine</span>
        </h2>
        <div className="w-24 h-1 bg-neon-gradient mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((item, index) => (
          <motion.div
            key={item.category}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="group relative glass p-8 md:p-10 rounded-[2.5rem] border border-white/5 overflow-hidden bg-[#050505]/40 backdrop-blur-xl hover:border-white/10 transition-all duration-500"
          >
            {/* Developer Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center border border-white/5 bg-white/5 group-hover:bg-accent-cyan/5 group-hover:border-accent-cyan/20 transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-wider">{item.category}</h3>
              </div>
              
              <div className="space-y-8">
                {item.skills.map((skill, i) => (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex justify-between items-center font-mono">
                      <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                         <div className={`w-1 h-1 rounded-full bg-accent-${item.color}`} />
                         {skill.name}
                      </span>
                      <span className={`text-[10px] font-bold text-accent-${item.color} opacity-60`}>{skill.level}%</span>
                    </div>
                    {/* Terminal-style Progress Bar */}
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: 0.1 + (i * 0.1) }}
                        className={`h-full bg-accent-${item.color} relative shadow-[0_0_15px_rgba(0,0,0,0.5)]`}
                      >
                         <div className="absolute top-0 right-0 h-full w-4 bg-white/20 skew-x-12 animate-pulse" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Specs Accent */}
            <div className="mt-12 pt-6 border-t border-white/5 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <span className="text-[9px] font-mono text-gray-600 uppercase">Compiled_v1.0.4</span>
              <div className="flex gap-1">
                <div className="w-1 h-1 rounded-full bg-white/20" />
                <div className="w-1 h-1 rounded-full bg-white/20" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
