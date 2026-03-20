import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <SectionWrapper id="about">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Interactive Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative group order-2 lg:order-1"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Background Glows */}
            <div className="absolute -inset-4 bg-accent-cyan/20 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="absolute -inset-4 bg-accent-purple/20 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-1000 delay-500" />
            
            {/* Glass Card */}
            <div className="relative h-full glass rounded-[2.5rem] p-4 overflow-hidden border border-white/10 flex flex-col shadow-premium group-hover:rotate-1 transition-transform duration-500">
              <div className="w-full h-full rounded-[2rem] overflow-hidden bg-primary/50 relative">
                <img 
                  src={profileImg} 
                  alt="Kshitij Pandey"
                  className="w-full h-full object-cover object-[center_15%] grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-110 group-hover:scale-105 transition-[filter,transform] duration-[1.5s] ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div>
                    <div className="text-2xl font-black text-white leading-tight">KP.</div>
                    <p className="text-accent-cyan font-bold tracking-[0.4em] uppercase text-[10px]">Architect</p>
                  </div>
                  <div className="glass p-2 rounded-xl border border-white/10">
                     <ArrowRight size={16} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-white/20 rounded-tl-[2.5rem]" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-white/20 rounded-br-[2.5rem]" />
            </div>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8 order-1 lg:order-2"
        >
          <div>
            <span className="text-accent-cyan font-bold tracking-widest uppercase text-sm mb-4 block">Main Discovery</span>
            <h2 className="text-5xl md:text-6xl font-black leading-tight text-white">
              About <span className="text-transparent bg-clip-text bg-neon-gradient">Me</span>
            </h2>
          </div>
          
          <div className="w-24 h-1 bg-neon-gradient rounded-full" />
          
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              I’m Kshitij Pandey, a passionate <span className="text-white font-semibold">Full Stack Developer</span> focused on building modern, user-friendly web applications with clean UI and efficient backend systems.
            </p>
            
            <p>
              I enjoy turning ideas into real-world digital solutions that solve problems and improve user experience. I have hands-on experience with technologies like <span className="text-accent-cyan font-medium">React, Node.js, Express, and MongoDB</span>.
            </p>

            <p>
              My recent work includes building AI-powered platforms that provide personalized solutions to users. I love working on projects that combine <span className="text-accent-purple font-medium">creativity with full-scale functionality</span>.
            </p>
          </div>

          <motion.div 
            whileHover={{ x: 10 }}
            className="flex items-center gap-4 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-accent-cyan">
              <ArrowRight size={20} />
            </div>
            <span className="text-white font-bold tracking-widest uppercase text-xs">Read My Story</span>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;
