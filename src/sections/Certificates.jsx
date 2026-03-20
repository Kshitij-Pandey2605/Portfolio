import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';

const certificates = [
  {
    title: "Introduction to C",
    issuer: "SoloLearn",
    link: "https://www.sololearn.com/certificates/CC-LFBXK1HC",
    color: "cyan"
  },
  {
    title: "Introduction to JavaScript",
    issuer: "SoloLearn",
    link: "https://www.sololearn.com/certificates/CC-ZEZH6AMT",
    color: "purple"
  },
  {
    title: "DATACOM Software Development Simulation",
    issuer: "Forage",
    link: "#",
    color: "pink"
  }
];
const Certificates = () => {
  const colorMap = {
    cyan: "bg-accent-cyan/10 border-accent-cyan/20 text-accent-cyan hover:bg-accent-cyan shadow-neon-cyan",
    purple: "bg-accent-purple/10 border-accent-purple/20 text-accent-purple hover:bg-accent-purple shadow-neon-purple",
    pink: "bg-accent-pink/10 border-accent-pink/20 text-accent-pink hover:bg-accent-pink shadow-lg"
  };

  const buttonMap = {
    cyan: "bg-accent-cyan/10 border-accent-cyan/30 hover:bg-accent-cyan shadow-neon-cyan",
    purple: "bg-accent-purple/10 border-accent-purple/30 hover:bg-accent-purple shadow-neon-purple",
    pink: "bg-accent-pink/10 border-accent-pink/30 hover:bg-accent-pink shadow-lg"
  };

  return (
    <SectionWrapper id="certificates">
      <div className="text-center mb-24">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-xs font-bold uppercase tracking-widest text-accent-pink mb-6"
        >
          <ShieldCheck size={14} /> Verified Credentials
        </motion.div>
        <h2 className="text-5xl md:text-7xl font-black mb-6">
          My <span className="text-transparent bg-clip-text bg-neon-gradient">Certifications</span>
        </h2>
        <div className="w-24 h-1 bg-neon-gradient mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ translateY: -10 }}
            className="group relative glass p-10 rounded-[2.5rem] border border-white/5 flex flex-col items-center text-center shadow-premium transition-all duration-500 overflow-hidden active:scale-95 h-full"
          >
            {/* Visual Icon */}
            <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 border group-hover:rotate-[10deg] transition-transform duration-500 ${colorMap[cert.color].split(' hover:')[0]}`}>
              <Award className={`${colorMap[cert.color].split(' ')[2]}`} size={40} />
            </div>
            
            <h3 className="text-2xl font-black mb-3 text-white tracking-tight group-hover:text-accent-cyan transition-colors line-clamp-2">
              {cert.title}
            </h3>
            <p className="text-gray-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-8">
              {cert.issuer}
            </p>

            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-auto w-full py-4 border text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:text-primary transition-all duration-500 flex items-center justify-center gap-2 ${buttonMap[cert.color]}`}
            >
              <ExternalLink size={16} /> View Credentials
            </a>

            {/* Background Accent */}
            <div className={`absolute -bottom-10 -left-10 w-24 h-24 bg-accent-${cert.color} opacity-5 blur-3xl rounded-full`} />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Certificates;
