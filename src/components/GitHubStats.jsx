import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, BookOpen, Users, Code2, Target, Award, GitCommit, GitPullRequest, LayoutDashboard } from 'lucide-react';

const GitHubStats = () => {
  const [ghStats, setGhStats] = useState(null);
  const [ghStars, setGhStars] = useState(0);
  const [leetStats, setLeetStats] = useState(null);

  useEffect(() => {
    // GitHub User Profile
    fetch('https://api.github.com/users/Kshitij-Pandey2605')
      .then(r => r.json())
      .then(data => {
        setGhStats({
          repos: data.public_repos || 38,
          followers: data.followers || 0,
          following: data.following || 0,
        });
      })
      .catch(() => setGhStats({ repos: 38, followers: 0, following: 0 }));

    // GitHub Stars Calculation
    fetch('https://api.github.com/users/Kshitij-Pandey2605/repos?per_page=100')
      .then(r => r.json())
      .then(repos => {
        if (Array.isArray(repos)) {
          const stars = repos.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0);
          setGhStars(stars);
        }
      })
      .catch(() => setGhStars(0));

    // LeetCode Stats from multiple endpoints to ensure Ranking is captured
    const username = "KshitijPandey2605";
    
    // 1. Fetch Solved Counts
    fetch(`https://alfa-leetcode-api.onrender.com/${username}/solved`)
      .then(r => r.json())
      .then(solvedData => {
        // 2. Fetch Base Profile for Ranking
        return fetch(`https://alfa-leetcode-api.onrender.com/${username}`)
          .then(r => r.json())
          .then(profileData => {
            setLeetStats({
              solved: solvedData.solvedProblem || 0,
              easy: solvedData.easySolved || 0,
              medium: solvedData.mediumSolved || 0,
              hard: solvedData.hardSolved || 0,
              ranking: profileData.ranking || 'N/A',
              totalEasy: solvedData.totalEasy || 830,
              totalMedium: solvedData.totalMedium || 1740,
              totalHard: solvedData.totalHard || 760,
            });
          });
      })
      .catch((err) => {
        console.error("LeetCode Fetch Error:", err);
        setLeetStats({ solved: 0, easy: 0, medium: 0, hard: 0, ranking: 'N/A' });
      });
  }, []);

  const statCard = (icon, label, value, color, delay) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`glass p-5 rounded-[1.5rem] border border-white/5 hover:border-${color}/30 transition-all card-hover interactive text-center`}
      style={{ willChange: 'transform' }}
    >
      <div className={`text-${color} flex justify-center mb-2`}>{icon}</div>
      <div className={`text-2xl font-black text-white mb-1`}>
        {value ?? <span className="text-gray-600 text-base animate-pulse">...</span>}
      </div>
      <div className="text-xs font-bold text-gray-500 uppercase tracking-widest leading-tight">{label}</div>
    </motion.div>
  );

  return (
    <section className="container mx-auto px-6 max-w-6xl py-12">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          style={{ willChange: 'transform' }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-xs font-bold uppercase tracking-widest text-accent-cyan mb-6"
        >
          <Code2 size={14} /> Coding Stats
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-black mb-4">
          By The <span className="text-transparent bg-clip-text bg-neon-gradient">Numbers</span>
        </h2>
        <p className="text-gray-400">Live stats pulled from GitHub & LeetCode APIs</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* GitHub Panel */}
        <div className="glass p-8 rounded-[2rem] border border-white/5 space-y-6 bg-[#0a0a0a]/50">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
              <Github size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-black text-white leading-tight">GitHub</h3>
              <a href="https://github.com/Kshitij-Pandey2605" target="_blank" rel="noopener noreferrer"
                className="text-xs text-accent-cyan hover:underline font-bold">Kshitij-Pandey2605 →</a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {statCard(<BookOpen size={18} />, 'Repos', ghStats?.repos, 'accent-cyan', 0)}
            {statCard(<Star size={18} />, 'Stars', ghStars, 'yellow-400', 0.1)}
            {statCard(<Users size={18} />, 'Followers', ghStats?.followers, 'accent-purple', 0.2)}
            {statCard(<Users size={18} />, 'Following', ghStats?.following, 'accent-pink', 0.3)}
          </div>
          
          {/* Static GitHub details grid */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
              <GitCommit className="text-accent-cyan" size={20} />
              <div>
                <div className="text-white font-black text-lg">35</div>
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Commits (1y)</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
              <GitPullRequest className="text-accent-purple" size={20} />
              <div>
                <div className="text-white font-black text-lg">30</div>
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Total PRs</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
              <LayoutDashboard className="text-accent-pink" size={20} />
              <div>
                <div className="text-white font-black text-lg">0</div>
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Issues</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
              <GitFork className="text-green-400" size={20} />
              <div>
                <div className="text-white font-black text-lg">7</div>
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Contributed</div>
              </div>
            </div>
          </div>
        </div>

        {/* LeetCode Panel */}
        <div className="glass p-8 rounded-[2rem] border border-white/5 space-y-6 bg-[#0a0a0a]/50">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
              <Target size={24} className="text-[#ffa116]" />
            </div>
            <div>
              <h3 className="text-xl font-black text-white leading-tight">LeetCode</h3>
              <a href="https://leetcode.com/u/KshitijPandey2605/" target="_blank" rel="noopener noreferrer"
                className="text-xs text-[#ffa116] hover:underline font-bold">KshitijPandey2605 →</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {statCard(<Award size={20} />, 'Total Solved', leetStats?.solved, 'accent-cyan', 0)}
            {statCard(<Code2 size={20} />, 'Global Rank', leetStats?.ranking, 'accent-purple', 0.1)}
          </div>
          {/* Difficulty breakdown */}
          <div className="space-y-4 pt-4">
            {[
              { label: 'Easy', val: leetStats?.easy, total: leetStats?.totalEasy || 800, color: 'accent-cyan' },
              { label: 'Medium', val: leetStats?.medium, total: leetStats?.totalMedium || 1600, color: 'accent-purple' },
              { label: 'Hard', val: leetStats?.hard, total: leetStats?.totalHard || 700, color: 'accent-pink' },
            ].map((d, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm font-bold mb-1.5">
                  <span className={`text-${d.color}`}>{d.label}</span>
                  <span className="text-gray-400">{d.val ?? 0}</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: d.val ? `${Math.max((d.val / d.total) * 100, 2)}%` : '0%' }}
                    transition={{ duration: 1.2, delay: i * 0.2 }}
                    className={`h-full bg-${d.color} rounded-full shadow-neon-${d.color.split('-')[1]}`}
                    style={{ thickness: '2px' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
