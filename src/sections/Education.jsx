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
        {/* Engineering Flow Line */}
        <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-white/5 hidden md:block" />

        <div className="flex flex-col gap-12 md:gap-20 relative z-10">
          {educationData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Content Card - Technical Spec Style */}
              <div className="w-full md:w-[calc(50%-4rem)]">
                <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-white/5 bg-[#050505]/40 hover:border-accent-cyan/20 transition-all group relative overflow-hidden shadow-premium">
                  {/* Grid background on card */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:15px_15px] pointer-events-none" />
                  
                  <div className="relative z-10">
                    <div className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.4em] mb-4 flex items-center gap-2">
                       <span className={`w-2 h-2 rounded-full bg-accent-${item.color}`} />
                       {item.duration}
                    </div>
                    
                    <h3 className="text-2xl font-black mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-neon-gradient transition-all tracking-tight leading-tight">
                       {item.title}
                    </h3>
                    
                    <p className="text-gray-400 font-bold mb-1 text-sm">{item.institution}</p>
                    <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">{item.location}</p>
                    
                    {item.percentage && (
                      <div className="mt-8">
                        <div className={`inline-block px-4 py-1.5 glass rounded-lg border border-accent-${item.color}/10 text-accent-${item.color} font-mono text-[11px] uppercase tracking-widest bg-black/40`}>
                          SCORE: {item.percentage}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Git Node - Central Marker */}
              <div className="relative shrink-0 w-20 h-20 md:w-32 md:h-32 flex items-center justify-center">
                <div className={`w-4 h-4 rounded-full bg-accent-${item.color} shadow-neon-${item.color} z-20 relative`} />
                <div className={`absolute inset-0 m-auto w-12 h-12 rounded-full bg-accent-${item.color}/5 border border-accent-${item.color}/20 animate-pulse-slow p-2 flex items-center justify-center text-accent-cyan/20 italic font-mono text-[8px]`}>
                   NODE_{index}
                </div>
              </div>
              
              {/* Empty Space for alignment */}
              <div className="hidden md:block w-[calc(50%-4rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Education;
