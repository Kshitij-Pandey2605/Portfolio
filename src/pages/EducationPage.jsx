import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, School, BookOpen, MapPin, ArrowLeft, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';

const educationData = [
  {
    title: "B.E Computer Engineering",
    institution: "Swaminarayan University",
    location: "Gandhinagar",
    duration: "2025–2029",
    icon: <GraduationCap size={28} />,
    color: "cyan",
    description: [
      "Currently pursuing a comprehensive curriculum focused on software engineering, data structures, and modern web technologies.",
      "Specializing in full-stack development with a strong emphasis on React, Node.js, and database architectures.",
      "Actively building real-world projects and participating in nationwide hackathons to hone practical engineering skills."
    ]
  },
  {
    title: "12th (Non-Medical)",
    institution: "Govt. Model Senior Secondary School",
    location: "Chandigarh",
    duration: "2023–2025",
    icon: <School size={28} />,
    color: "purple",
    description: [
      "Built a robust foundation in Physics, Chemistry, and Advanced Mathematics.",
      "Developed advanced analytical and problem-solving skills which laid the groundwork for complex algorithmic thinking.",
      "Engaged in technical clubs and early foundational programming concepts."
    ]
  },
  {
    title: "10th Grade",
    institution: "Global Wisdom International School",
    location: "Mohali",
    duration: "2021–2023",
    percentage: "80%",
    icon: <BookOpen size={28} />,
    color: "pink",
    description: [
      "Achieved a strong academic record with an 80% aggregate score.",
      "Participated actively in STEM subjects, developing an early passion for technology and computer science.",
      "Gained strong fundamentals in logical reasoning and science methodologies."
    ]
  }
];

const EducationPage = ({ theme, toggleTheme }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageWrapper theme={theme} toggleTheme={toggleTheme}>
      <div className="relative min-h-screen overflow-hidden">
        {/* Technical Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="container mx-auto px-4 py-8 max-w-5xl relative z-10 font-outfit">
          {/* Back button */}
          <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white mb-8 transition-all hover:gap-4 interactive text-xs font-black uppercase tracking-widest bg-white/5 px-5 py-2.5 rounded-full border border-white/5 backdrop-blur-md">
            <ArrowLeft size={16} /> Back to Terminal
          </Link>

          {/* Header */}
          <div className="text-left mb-16">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center border border-accent-pink/20 bg-accent-pink/5">
                 <Terminal className="text-accent-pink" size={24} />
              </div>
              <div>
                 <h1 className="text-4xl md:text-6xl font-black tracking-tighter">
                   Academic <span className="text-accent-pink underline decoration-white/10 underline-offset-8">History</span>
                 </h1>
                 <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.4em] mt-2">Data_Source: Verified | Status: Active</p>
              </div>
            </motion.div>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Engineering Flow Line */}
            <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-white/5 hidden md:block" />

            <div className="flex flex-col gap-16 md:gap-24 relative z-10">
              {educationData.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Content Card - Technical Spec Style */}
                  <div className="w-full md:w-[calc(50%-4rem)]">
                    <div className="glass p-8 md:p-12 rounded-[3rem] border border-white/5 bg-[#050505]/60 hover:border-accent-cyan/20 transition-all group relative overflow-hidden shadow-premium backdrop-blur-xl">
                      {/* Grid background on card */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:15px_15px] pointer-events-none" />
                      
                      {/* Glow Behind */}
                      <div className={`absolute -top-10 -right-10 w-40 h-40 bg-accent-${item.color}/10 blur-[80px] rounded-full pointer-events-none transition-opacity duration-700 opacity-30 group-hover:opacity-100`} />

                      <div className="relative z-10">
                        <div className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.4em] mb-4 flex items-center gap-2">
                           <span className={`w-2 h-2 rounded-full bg-accent-${item.color} shadow-neon-${item.color}`} />
                           {item.duration}
                        </div>
                        
                        <h3 className="text-3xl font-black mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-neon-gradient transition-all tracking-tight leading-tight">
                           {item.title}
                        </h3>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-gray-400 mb-8">
                           <span className="flex items-center gap-1"><School size={16} className={`text-accent-${item.color}`} /> {item.institution}</span>
                           <span className="flex items-center gap-1"><MapPin size={16} className="text-gray-600" /> {item.location}</span>
                        </div>
                        
                        {/* Bullet Descriptions */}
                        <div className="space-y-4 border-l-2 border-white/5 pl-4 ml-2">
                          {item.description.map((desc, i) => (
                             <p key={i} className="text-gray-400 text-sm leading-relaxed font-medium">
                               <span className={`text-accent-${item.color} font-black pr-2`}>/&gt;</span> {desc}
                             </p>
                          ))}
                        </div>
                        
                        {item.percentage && (
                          <div className="mt-10 border-t border-white/5 pt-6 flex justify-start">
                            <div className={`inline-flex items-center gap-3 px-5 py-2.5 glass rounded-xl border border-accent-${item.color}/20 text-accent-${item.color} font-mono text-xs uppercase tracking-widest bg-white/5 shadow-premium`}>
                              <div className={`w-1.5 h-1.5 rounded-full bg-accent-${item.color} animate-pulse`} />
                              SYS_SCORE: {item.percentage}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Git Node - Central Marker */}
                  <div className="relative shrink-0 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
                    <div className={`w-5 h-5 rounded-full bg-accent-${item.color} shadow-neon-${item.color} z-20 relative`} />
                    <div className={`absolute inset-0 m-auto w-16 h-16 rounded-full bg-accent-${item.color}/10 border border-accent-${item.color}/30 animate-pulse-slow p-2 flex items-center justify-center text-white/40 italic font-mono text-[9px] backdrop-blur-md`}>
                       {item.icon}
                    </div>
                  </div>
                  
                  {/* Empty Space for alignment */}
                  <div className="hidden md:block w-[calc(50%-4rem)]" />
                </motion.div>
              ))}
            </div>
            
            {/* End Node Line Indicator */}
             <div className="flex justify-center mt-20 relative z-10 w-full md:w-10 mx-auto">
                <div className="h-24 w-px bg-gradient-to-b from-white/10 to-transparent" />
             </div>
             <div className="text-center mt-4">
                 <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-gray-500 text-[10px] font-mono uppercase tracking-[0.3em]">
                   <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" /> End_Of_File
                 </div>
             </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default EducationPage;
