import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';

const certificates = [
  {
    title: "Codefest – Nationwide Hackathon",
    issuer: "NIT Durgapur",
    image: "/certificates/codefest.png",
    link: "https://unstop.com/certificate-preview/3ca79ca3-e3be-49d3-8366-261ce8da4fde",
    color: "cyan",
    description: "Competed in a rigorous nationwide hackathon, showcasing rapid prototyping and problem-solving skills under pressure against top developers."
  },
  {
    title: "Introduction to JavaScript",
    issuer: "SoloLearn",
    image: "/certificates/javascript.png",
    link: "https://www.sololearn.com/certificates/CC-ZEZH6AMT",
    color: "purple",
    description: "Mastered fundamental and advanced JavaScript, including DOM manipulation, ES6 features, and asynchronous programming."
  },
  {
    title: "Software Development Job Simulation",
    issuer: "Forage - DATACOM",
    image: "/certificates/datacom.png",
    link: "https://www.theforage.com/completion-certificates/gCW7Xki5Y3vNpBmnn/L3NcyCoAjLno9d3T9_gCW7Xki5Y3vNpBmnn_6976031c38ec8aba41dea7b0_1773328146160_completion_certificate.pdf",
    color: "pink",
    description: "Simulated real-world software development tasks with Datacom, focusing on agile methodologies, clean code practices, and system architecture."
  },
  {
    title: "Introduction to Generative AI Studio",
    issuer: "Simplilearn",
    image: "/certificates/genai.png",
    link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzODE0IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvOTczMzgwOF85OTgwNzM4XzE3Njg4MjE5NzM5MDAucG5nIiwidXNlcm5hbWUiOiJLc2hpdGlqIFBhbmRleSJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F6757%2FIntroduction%2520to%2520Generative%2520AI%2520Studio%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1492037546462544702&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVT7YICQzNM021iEqyrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAOu7A%2BZBAAAA",
    color: "cyan",
    description: "Gained expertise in utilizing Generative AI models, prompt engineering, and integrating AI capabilities into modern applications."
  },
  {
    title: "Introduction to C",
    issuer: "SoloLearn",
    image: "/certificates/c-course.png",
    link: "https://www.sololearn.com/certificates/CC-LFBXK1HC",
    color: "purple",
    description: "Strong foundation in C programming, covering memory management, pointers, and fundamental data structures."
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className={`group relative glass rounded-[2.5rem] border border-${cert.color === 'cyan' ? 'accent-cyan' : cert.color === 'purple' ? 'accent-purple' : 'accent-pink'}/20 flex flex-col shadow-premium overflow-hidden card-hover interactive h-full`}
          >
            {/* Half Visible Certificate Image Container */}
            <div className="relative h-48 shrink-0 overflow-hidden bg-primary w-full border-b border-white/10">
              <img 
                src={cert.image} 
                alt={cert.title}
                className="w-full h-[150%] object-cover object-top group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/100 via-primary/50 to-transparent flex items-end justify-center pb-4">
                <Award className={`text-accent-${cert.color} z-10 group-hover:-translate-y-2 transition-transform duration-500 rounded-full bg-primary/50 p-2 glass`} size={48} />
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 md:p-8 flex flex-col flex-1 relative z-10 text-center items-center w-full bg-primary/20 backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-black mb-2 text-white tracking-tight group-hover:text-accent-cyan transition-colors line-clamp-2 leading-snug">
                {cert.title}
              </h3>
              <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-4">
                {cert.issuer}
              </p>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">
                {cert.description}
              </p>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto w-full py-4 border text-white font-black text-xs uppercase tracking-widest rounded-2xl flex items-center justify-center gap-2 btn-premium interactive ${buttonMap[cert.color]}`}
              >
                <ExternalLink size={16} /> View Certificate
              </a>
            </div>

            {/* Bottom Accent Line */}
            <div className={`absolute bottom-0 left-0 w-0 h-1 bg-accent-${cert.color} group-hover:w-full transition-all duration-700`} />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Certificates;
