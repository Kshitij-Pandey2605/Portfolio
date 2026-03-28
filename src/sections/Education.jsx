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

        <div className="flex flex-col gap-16 md:gap-24 relative z-10">
          {educationData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0"
            >
              {/* Left Side container */}
              <div className={`w-full md:w-[calc(50%-3rem)] flex ${index % 2 === 0 ? 'md:justify-end pr-0 md:pr-12' : 'md:justify-start pl-0 md:pl-12 md:order-3'}`}>
                {/* Content Card */}
                <div className={`w-full max-w-xl glass p-10 rounded-[2.5rem] border border-white/10 relative group shadow-premium card-hover ${
                  index % 2 === 0 ? 'text-left md:text-right' : 'text-left'
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
                    <div className={`mt-8 flex justify-start ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      <div className={`px-6 py-2 glass rounded-full border border-accent-${item.color}/20 text-accent-${item.color} font-black text-sm uppercase tracking-widest shadow-lg`}>
                        {item.percentage} Score
                      </div>
                    </div>
                  )}
                  
                  {/* Desktop Connection Indicator */}
                  <div className={`absolute top-1/2 -translate-y-1/2 w-6 h-6 glass border-4 bg-primary border-accent-${item.color} rounded-full z-10 hidden md:flex items-center justify-center ${
                    index % 2 === 0 ? '-right-[63px]' : '-left-[63px]'
                  }`}>
                    <div className={`w-1.5 h-1.5 rounded-full bg-white shadow-neon-${item.color}`} />
                  </div>
                </div>
              </div>

              {/* Central Icon Visual */}
              <div className={`shrink-0 w-24 h-24 rounded-[2rem] glass flex items-center justify-center text-accent-${item.color} border border-accent-${item.color}/20 shadow-premium z-20 transition-all duration-500 group-hover:scale-110 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                {item.icon}
              </div>
              
              {/* Empty Space for alignment */}
              <div className={`hidden md:block w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:order-3' : 'md:order-1'}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Education;
