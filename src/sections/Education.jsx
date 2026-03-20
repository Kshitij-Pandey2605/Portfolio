import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';
import { GraduationCap, School, BookOpen, Clock } from 'lucide-react';

const educationData = [
  {
    title: "B.E Computer Engineering",
    institution: "Swaminarayan University",
    location: "Gandhinagar",
    duration: "2025–2029",
    icon: <GraduationCap size={24} />,
    color: "cyan"
  },
  {
    title: "12th (Non-Medical)",
    institution: "Govt. Model Senior Secondary School",
    location: "Chandigarh",
    duration: "2023–2025",
    icon: <School size={24} />,
    color: "purple"
  },
  {
    title: "10th Grade",
    institution: "Global Wisdom International School",
    location: "Mohali",
    duration: "2021–2023",
    percentage: "80%",
    icon: <BookOpen size={24} />,
    color: "pink"
  }
];

const Education = () => {
  return (
    <SectionWrapper id="education">
      <div className="text-center mb-24">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-xs font-bold uppercase tracking-widest text-accent-cyan mb-6"
        >
          <Clock size={14} /> My Journey
        </motion.div>
        <h2 className="text-5xl md:text-7xl font-black mb-6">
          My <span className="text-transparent bg-clip-text bg-neon-gradient">Education</span>
        </h2>
        <div className="w-24 h-1 bg-neon-gradient mx-auto rounded-full transition-all duration-500 hover:w-48" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Central Line Visual */}
        <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-accent-cyan via-accent-purple to-accent-pink opacity-20 hidden md:block" />

        <div className="space-y-24">
          {educationData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content Card */}
              <div className={`w-full md:w-1/2 glass p-10 rounded-[2.5rem] border border-white/10 relative group shadow-premium active:scale-95 transition-all duration-500 ${
                index % 2 === 0 ? 'md:text-right' : 'md:text-left'
              }`}>
                {/* Number Watermark */}
                <div className="absolute top-6 right-8 text-7xl font-black text-white/5 pointer-events-none select-none">
                  {index + 1}
                </div>

                <span className={`text-accent-${item.color} font-black text-[10px] tracking-[0.4em] uppercase mb-4 block`}>
                  {item.duration}
                </span>
                
                <h3 className="text-3xl font-black mb-4 text-white group-hover:text-accent-cyan transition-colors tracking-tight">
                   {item.title}
                </h3>
                
                <p className="text-gray-400 font-bold mb-2 text-lg">{item.institution}</p>
                <p className="text-gray-500 font-medium text-sm tracking-wide">{item.location}</p>
                
                {item.percentage && (
                  <div className="mt-8 flex justify-end md:justify-end">
                    <div className="px-6 py-2 glass rounded-full border border-accent-pink/20 text-accent-pink font-black text-sm uppercase tracking-widest shadow-lg">
                      {item.percentage} Score
                    </div>
                  </div>
                )}
                
                {/* Desktop Connection Indicator */}
                <div className={`absolute top-1/2 -translate-y-1/2 w-6 h-6 glass border-4 bg-primary border-accent-purple rounded-full z-10 hidden md:flex items-center justify-center ${
                  index % 2 === 0 ? '-right-[51px]' : '-left-[51px]'
                }`}>
                  <div className="w-1.5 h-1.5 rounded-full bg-white shadow-neon-purple" />
                </div>
              </div>

              {/* Central Icon Visual (Mobile & Scaleable) */}
              <div className={`shrink-0 w-24 h-24 rounded-[2rem] glass flex items-center justify-center text-accent-${item.color} border border-accent-${item.color}/20 shadow-premium z-20 transition-all duration-500 group-hover:scale-110`}>
                {item.icon}
              </div>
              
              <div className="w-full md:w-1/2 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Education;
