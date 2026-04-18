import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Achievements from '../sections/Achievements';
import GitHubStats from '../components/GitHubStats';

const HomePage = ({ theme, toggleTheme }) => {
  return (
    <PageWrapper theme={theme} toggleTheme={toggleTheme}>
      <Hero />
      <div className="space-y-8 pb-24">
        <About />
        <Skills />
        <GitHubStats />
        <Achievements />

        {/* CTA */}
        <section className="container mx-auto px-6 py-16 text-center relative max-w-3xl">
          <div className="absolute inset-0 bg-neon-gradient opacity-[0.04] blur-[100px] rounded-full pointer-events-none" />
          <h2 className="text-3xl md:text-4xl font-black mb-5 text-white leading-tight">
            Ready to see these skills in{' '}
            <span className="text-transparent bg-clip-text bg-neon-gradient">action?</span>
          </h2>
          <p className="text-gray-400 text-base mb-8 max-w-xl mx-auto">
            Explore my full-stack applications, frontend projects, and pixel-perfect clones.
          </p>
          <Link
            to="/projects"
            className="btn-premium inline-flex items-center gap-3 px-8 py-4 bg-neon-gradient text-white rounded-2xl font-black uppercase tracking-widest shadow-neon-purple hover:shadow-[0_20px_40px_rgba(157,0,255,0.4)] interactive transition-all"
          >
            Explore Projects <ArrowRight size={20} />
          </Link>
        </section>
      </div>
    </PageWrapper>
  );
};

export default HomePage;
