import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';

export default function Resume() {
  const navigate = useNavigate();
  const resumeRef = useRef(null);

  const handleDownload = async () => {
    const html2pdf = (await import('html2pdf.js')).default;
    const opt = {
      margin:       0,
      filename:     'Kshitij_Pandey_Resume.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true, logging: false },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };
    html2pdf().set(opt).from(resumeRef.current).save();
  };

  return (
    <>
      {/* ── Top Action Bar ─────── */}
      <div className="print:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3"
        style={{ background: 'var(--page-bg-gradient)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <button onClick={() => navigate('/')}
          className="flex items-center gap-2 glass px-5 py-2.5 rounded-xl text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white border border-white/10 hover:border-accent-cyan/40 transition-all duration-300 interactive">
          <ArrowLeft size={16} /> Portfolio
        </button>
        <button onClick={handleDownload}
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-black text-sm uppercase tracking-widest text-white interactive hover:opacity-90 transition-opacity"
          style={{ background: 'linear-gradient(135deg,#0ea5e9,#7e22ce)', boxShadow: '0 0 20px rgba(126,34,206,0.4)' }}>
          <Download size={16} /> Download PDF
        </button>
      </div>

      {/* ── Resume Paper ─────────── */}
      <div className="min-h-screen pt-20 pb-12 flex justify-center items-start px-4"
        style={{ background: 'var(--page-bg-gradient)' }}>

        <div ref={resumeRef}
          style={{ width: '210mm', minHeight: '297mm', fontFamily: "'Inter','Segoe UI',system-ui,sans-serif", fontSize: '13px', background: 'white', display: 'flex' }}>

          {/* ── LEFT SIDEBAR ─────── */}
          <div style={{ width: '68mm', background: '#1a1a2e', color: 'white', padding: '28px 20px', display: 'flex', flexDirection: 'column', gap: '24px', flexShrink: 0 }}>

            {/* Avatar */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '76px', height: '76px', borderRadius: '50%', background: 'linear-gradient(135deg, #0ea5e9, #7e22ce)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '26px', fontWeight: '900', color: 'white', border: '3px solid rgba(255,255,255,0.15)' }}>
                KP
              </div>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontWeight: '900', fontSize: '15px', letterSpacing: '0.02em', color: 'white' }}>Kshitij Pandey</p>
                <p style={{ color: '#94a3b8', fontSize: '11px', fontWeight: '600', marginTop: '2px' }}>Full Stack Developer</p>
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)' }} />

            {/* Contact */}
            <div>
              <p style={{ fontSize: '9px', fontWeight: '900', letterSpacing: '0.2em', color: '#64748b', textTransform: 'uppercase', marginBottom: '12px' }}>Contact</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
                {[
                  { icon: '📍', text: 'India' },
                  { icon: '✉️', text: 'kshitij.pandey.cg@gmail.com' },
                  { icon: '🐙', text: 'github.com/Kshitij-Pandey2605' },
                  { icon: '💼', text: 'linkedin.com/in/kshitij-pandey-b79617398' },
                ].map(({ icon, text }) => (
                  <div key={text} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '11px', flexShrink: 0, marginTop: '1px' }}>{icon}</span>
                    <span style={{ color: '#cbd5e1', fontSize: '11px', lineHeight: '1.4', wordBreak: 'break-all' }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <p style={{ fontSize: '9px', fontWeight: '900', letterSpacing: '0.2em', color: '#64748b', textTransform: 'uppercase', marginBottom: '12px' }}>Technical Skills</p>
              {[
                { label: 'Languages', items: ['C', 'C++', 'JavaScript', 'Python'] },
                { label: 'Frontend', items: ['HTML', 'CSS', 'React.js'] },
                { label: 'Backend', items: ['Node.js', 'Express.js'] },
                { label: 'Database', items: ['MongoDB'] },
                { label: 'Tools', items: ['Postman', 'Figma', 'Canva', 'Netlify', 'Vercel', 'Render'] },
                { label: 'VCS', items: ['GitHub'] },
              ].map(({ label, items }) => (
                <div key={label} style={{ marginBottom: '10px' }}>
                  <p style={{ color: '#94a3b8', fontSize: '10px', fontWeight: '700', marginBottom: '4px' }}>{label}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                    {items.map(item => (
                      <span key={item} style={{ background: 'rgba(255,255,255,0.08)', color: '#e2e8f0', fontSize: '10px', padding: '2px 8px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)', fontWeight: '500' }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <p style={{ fontSize: '9px', fontWeight: '900', letterSpacing: '0.2em', color: '#64748b', textTransform: 'uppercase', marginBottom: '12px' }}>Certifications</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { title: 'Introduction to C', issuer: 'SoloLearn' },
                  { title: 'Introduction to JavaScript', issuer: 'SoloLearn' },
                  { title: 'SW Dev Job Simulation', issuer: 'Forage – DATACOM' },
                  { title: 'Codefest Hackathon', issuer: 'NIT Durgapur' },
                ].map(c => (
                  <div key={c.title}>
                    <p style={{ color: '#e2e8f0', fontSize: '11px', fontWeight: '700', lineHeight: '1.3' }}>{c.title}</p>
                    <p style={{ color: '#64748b', fontSize: '10px', marginTop: '2px' }}>{c.issuer}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ── RIGHT PANEL ──────── */}
          <div style={{ flex: 1, padding: '28px 28px', background: 'white', display: 'flex', flexDirection: 'column', gap: '22px' }}>

            {/* Name */}
            <div style={{ borderBottom: '2px solid #f1f5f9', paddingBottom: '16px' }}>
              <h1 style={{ fontSize: '32px', fontWeight: '900', color: '#0f172a', letterSpacing: '-0.02em', lineHeight: 1, margin: 0 }}>KSHITIJ PANDEY</h1>
              <p style={{ fontWeight: '700', fontSize: '13px', color: '#0ea5e9', marginTop: '6px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Full Stack Developer</p>
            </div>

            {/* Profile */}
            <div>
              <SectionTitle>Profile</SectionTitle>
              <p style={{ color: '#475569', lineHeight: '1.7', fontSize: '12.5px' }}>
                Motivated Full Stack Developer with hands-on experience building AI-powered platforms and responsive web applications. 
                Skilled in crafting clean, intuitive user interfaces backed by robust server-side architectures. 
                Strong problem-solving instincts, a continuous-learning mindset, and a passion for delivering production-grade code that makes a real impact.
              </p>
            </div>

            {/* Projects */}
            <div>
              <SectionTitle>Projects</SectionTitle>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

                <ProjectCard
                  title="FitLife AI"
                  type="Full-Stack AI Health Platform"
                  tech={['React', 'Node.js', 'Express', 'MongoDB']}
                  link="dietanalyzer-fitlife.netlify.app"
                  bullets={[
                    'Built an AI-powered health platform that generates personalised diet & workout plans based on user body metrics.',
                    'Implemented progress tracking dashboards with dynamic charts and real-time data updates.',
                    'Deployed on Netlify (frontend) and Render (backend) with full CORS configuration.',
                  ]}
                />

                <ProjectCard
                  title="Havells Website Clone"
                  type="Frontend Development"
                  tech={['HTML5', 'CSS3']}
                  link="youtu.be/Ol9UBQls6OE"
                  bullets={[
                    'Engineered a pixel-perfect clone of the Havells homepage demonstrating advanced layout skills.',
                    'Implemented responsive design across all breakpoints with clean, semantic HTML.',
                  ]}
                />

                <ProjectCard
                  title="Dream Website Clone"
                  type="Frontend Development"
                  tech={['HTML5', 'CSS3']}
                  link="youtu.be/Wb-3WKllPEY"
                  bullets={[
                    'Developed a comprehensive website clone showcasing modern CSS techniques including animations and custom grid layouts.',
                  ]}
                />

              </div>
            </div>

            {/* Education */}
            <div>
              <SectionTitle>Education</SectionTitle>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { degree: 'B.E. Computer Engineering', school: 'Swaminarayan University', year: '2025 – 2029' },
                  { degree: '12th Grade — Non-Medical', school: 'Govt. Model Sr. Sec. School, Chandigarh', year: 'Completed' },
                  { degree: '10th Grade — 80%', school: 'Global Wisdom International School, Mohali', year: 'Completed' },
                ].map(e => (
                  <div key={e.degree} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <p style={{ fontWeight: '800', color: '#1e293b', fontSize: '12.5px', margin: 0 }}>{e.degree}</p>
                      <p style={{ color: '#64748b', fontSize: '11.5px', marginTop: '2px' }}>{e.school}</p>
                    </div>
                    <span style={{ color: '#94a3b8', fontSize: '11px', whiteSpace: 'nowrap', marginLeft: '8px', fontWeight: '600', flexShrink: 0 }}>{e.year}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

function SectionTitle({ children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
      <p style={{ fontSize: '10px', fontWeight: '900', letterSpacing: '0.2em', color: '#94a3b8', textTransform: 'uppercase', whiteSpace: 'nowrap', margin: 0 }}>{children}</p>
      <div style={{ flex: 1, height: '1px', background: '#e2e8f0' }} />
    </div>
  );
}

function ProjectCard({ title, type, tech, link, bullets }) {
  return (
    <div style={{ borderLeft: '3px solid #0ea5e9', paddingLeft: '12px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
        <div>
          <p style={{ fontWeight: '800', color: '#1e293b', fontSize: '13px', margin: 0 }}>{title}</p>
          <p style={{ color: '#0ea5e9', fontSize: '10.5px', fontWeight: '600', marginTop: '1px' }}>{type}</p>
        </div>
        <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: '8px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px', justifyContent: 'flex-end' }}>
            {tech.map(t => (
              <span key={t} style={{ background: '#f1f5f9', color: '#475569', fontSize: '10px', padding: '1px 6px', borderRadius: '3px', fontWeight: '600', border: '1px solid #e2e8f0' }}>{t}</span>
            ))}
          </div>
          <p style={{ color: '#94a3b8', fontSize: '10px', marginTop: '3px' }}>🔗 {link}</p>
        </div>
      </div>
      <ul style={{ margin: 0, paddingLeft: '14px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
        {bullets.map(b => (
          <li key={b} style={{ color: '#64748b', fontSize: '11.5px', lineHeight: '1.5' }}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
