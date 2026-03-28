import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <SectionWrapper id="about">
      <div className="w-full max-w-5xl mx-auto flex items-center justify-center">
        {/* Centered Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8 relative w-full"
        >
          {/* Animated Gradient Spinning Border */}
          <div className="absolute -inset-[2px] rounded-[3rem] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(14,165,233,1)_360deg)] animate-[spin_6s_linear_infinite] -z-10 opacity-50" />
          
          <div className="glass p-8 md:p-16 lg:p-20 rounded-[3rem] relative overflow-hidden shadow-premium h-full w-full bg-[#0a0a0a]/95 backdrop-blur-sm flex flex-col items-center text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 via-transparent to-accent-purple/5 opacity-50 transition-opacity duration-1000 group-hover:opacity-100" />
            
            <div className="relative z-10 flex flex-col items-center">
            <span className="text-accent-cyan font-bold tracking-widest uppercase text-sm mb-4 block">Main Discovery</span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight text-white">
              About <span className="text-transparent bg-clip-text bg-neon-gradient">Me</span>
            </h2>
          </div>
          
            <div className="w-24 h-1 bg-neon-gradient rounded-full relative z-10 mt-8 mb-12" />
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } }
              }}
              className="space-y-6 text-gray-400 text-lg md:text-xl font-medium leading-relaxed relative z-10 max-w-3xl"
            >
              <motion.p variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 }}}} className="transition-colors hover:text-gray-300">
                I’m <span className="text-white font-bold">Kshitij Pandey</span>, a passionate <span className="text-accent-cyan">Full Stack Developer</span> who loves building modern, high-performance web applications that combine clean design with powerful backend systems.
              </motion.p>
              <motion.p variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 }}}} className="transition-colors hover:text-gray-300">
                I specialize in creating seamless user experiences using technologies like <span className="text-accent-purple font-medium">React, Node.js, and MongoDB</span>. I enjoy solving real-world problems through code and turning ideas into impactful digital products.
              </motion.p>
              <motion.p variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 }}}} className="transition-colors hover:text-gray-300">
                One of my key projects includes developing an <span className="text-accent-pink font-medium">AI-powered fitness platform</span> that delivers personalized diet and workout plans based on user data.
              </motion.p>
              <motion.p variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 }}}} className="transition-colors hover:text-gray-300">
                I’m constantly learning, exploring new technologies, and improving my skills to build <span className="text-white">scalable and innovative solutions</span>.
              </motion.p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="flex items-center gap-4 cursor-pointer interactive mt-12 relative z-10 w-max group"
            >
              <div className="w-14 h-14 rounded-[1.25rem] border border-white/10 flex items-center justify-center text-accent-cyan bg-white/5 group-hover:bg-accent-cyan/10 group-hover:border-accent-cyan/30 transition-all duration-300 shadow-lg">
                <ArrowRight size={24} className="group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-white font-bold tracking-widest uppercase text-xs group-hover:text-accent-cyan transition-colors">Read My Story</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;
