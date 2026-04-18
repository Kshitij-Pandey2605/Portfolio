import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Database, Layout, Sparkles, Cpu } from 'lucide-react';

const About = () => {
  return (
    <SectionWrapper id="about">
      <div className="w-full max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative group lg:px-12"
        >
          {/* Abstract Background Accents */}
          <div className="absolute -top-24 -left-20 w-64 h-64 bg-accent-cyan/10 blur-[100px] rounded-full" />
          <div className="absolute -bottom-24 -right-20 w-64 h-64 bg-accent-purple/10 blur-[100px] rounded-full" />
          
          <div className="glass p-8 md:p-12 lg:p-14 rounded-[3rem] relative overflow-hidden shadow-premium bg-[#050505]/60 backdrop-blur-xl border border-white/5">
            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            
            <div className="relative z-10">
              <div className="flex flex-col items-center text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-accent-cyan mb-6"
                >
                  <Sparkles size={12} className="animate-pulse" /> My Story
                </motion.div>
                
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] text-white tracking-tighter mb-8">
                  About <span className="text-transparent bg-clip-text bg-neon-gradient">Me</span>
                </h2>
                
                {/* Floating Icons Decor - Represents your tech stack mentioned below */}
                <div className="absolute top-1/4 -left-12 animate-bounce-slow hidden xl:block">
                   <div className="p-3 glass rounded-2xl border border-white/10 text-accent-cyan shadow-neon-cyan/20">
                      <Layout size={24} />
                   </div>
                </div>
                <div className="absolute top-1/3 -right-12 animate-float hidden xl:block">
                   <div className="p-3 glass rounded-2xl border border-white/10 text-accent-purple shadow-neon-purple/20">
                      <Database size={24} />
                   </div>
                </div>
              </div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.1 } }
                }}
                className="space-y-4 text-gray-400 text-base md:text-lg leading-relaxed text-center max-w-4xl mx-auto"
              >
                <motion.p variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 }}} className="transition-all hover:text-white duration-500">
                  I’m <span className="text-white font-bold bg-white/5 px-2 py-0.5 rounded-lg border border-white/5 transition-all hover:border-accent-cyan/30">Kshitij Pandey</span>, a passionate <span className="text-accent-cyan font-bold">Full Stack Developer</span> who loves building modern, high-performance web applications that combine clean design with powerful backend systems.
                </motion.p>
                
                <motion.p variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 }}} className="transition-all hover:text-white duration-500">
                  I specialize in creating seamless user experiences using technologies like <span className="text-accent-purple font-bold">React, Node.js, and MongoDB</span>. I enjoy solving real-world problems through code and turning ideas into impactful digital products.
                </motion.p>
                
                <motion.p variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 }}} className="transition-all hover:text-white duration-500">
                  One of my key projects includes developing an <span className="text-accent-pink font-bold underline decoration-accent-pink/30 underline-offset-8">AI-powered fitness platform</span> that delivers personalized diet and workout plans based on user data.
                </motion.p>
                
                <motion.p variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 }}} className="transition-all hover:text-white duration-500">
                  I’m constantly learning, exploring new technologies, and improving my skills to build <span className="text-white border-b border-accent-cyan/30">scalable and innovative solutions</span>.
                </motion.p>
              </motion.div>

              <div className="flex justify-center mt-10">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-6 cursor-pointer interactive group"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent-cyan/20 blur-xl group-hover:bg-accent-cyan/40 transition-colors" />
                    <div className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center text-accent-cyan bg-white/5 group-hover:border-accent-cyan/50 transition-all duration-300 relative z-10">
                      <Code2 size={24} />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-black tracking-[0.3em] uppercase text-[10px] group-hover:text-accent-cyan transition-colors">Start Collaboration</span>
                    <span className="text-gray-500 text-[9px] font-bold uppercase tracking-widest mt-1">Let's build something epic</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;

