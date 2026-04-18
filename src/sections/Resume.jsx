import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, Mail, MapPin, Github, Linkedin, Phone, Printer } from 'lucide-react';
import CustomCursor from '../components/CustomCursor';
import html2pdf from 'html2pdf.js';

/* ─── DATA ───────────────────────────────────────────────────── */
const DATA = {
  name: 'KSHITIJ PANDEY',
  title: 'FULL STACK DEVELOPER',
  contact: [
    { icon: Phone,    text: '+91 9915149034' },
    { icon: Mail,     text: 'kshitij.pandey.cg@gmail.com' },
    { icon: MapPin,   text: 'Gandhinagar, Gujarat, IN' },
    { icon: Github,   text: 'github.com/Kshitij-Pandey2605' },
    { icon: Linkedin, text: 'linkedin.com/in/kshitij-pandey' },
  ],
  summary:
    'Passionate and results-driven Full Stack Developer currently pursuing B.E. in Computer Engineering, with a strong foundation in JavaScript, React, Node.js, and MongoDB. Experienced in building end-to-end, production-ready web applications that combine polished UI with robust backend systems. Demonstrated ability to deliver high-impact projects within tight deadlines — including competitive hackathon sprints — while maintaining clean code architecture and scalable design patterns. Adept at collaborating cross-functionally and turning abstract ideas into fully functional digital products. Eager to contribute technical expertise and a problem-solving mindset to build innovative, real-world solutions.',
  education: [
    {
      year: '2025 – 2029',
      institution: 'SWAMINARAYAN UNIVERSITY',
      location: 'Gandhinagar, Gujarat',
      degree: 'B.E. Computer Engineering',
    },
    {
      year: '2023 – 2025',
      institution: 'GOVT. MODEL SR. SEC. SCHOOL',
      location: 'Chandigarh',
      degree: '12th — Non-Medical (PCM + CS)',
    },
    {
      year: '2021 – 2023',
      institution: 'GLOBAL WISDOM INTL. SCHOOL',
      location: 'Mohali',
      degree: '10th Grade',
    },
  ],
  skills: [
    'JavaScript (ES6+), TypeScript Basics',
    'React.js, HTML5, CSS3',
    'Node.js, Express.js, REST APIs',
    'MongoDB, Mongoose ODM',
    'C, C++, Python (Basics)',
    'Git, GitHub, Vercel, Netlify, Render',
    'Figma (UI/UX Design), Postman',
    'Canva, Problem Solving, DSA',
  ],
  languages: [
    { name: 'English',  level: 'Fluent' },
    { name: 'Hindi',    level: 'Native / Fluent' },
    { name: 'Gujarati', level: 'Conversational' },
  ],
  achievements: [
    'Participant — CRAFTATHON 2025 Hackathon (NIT level)',
    'Participant — Codefest Hackathon by NIT Durgapur',
    'Solved 18+ DSA problems on LeetCode consistently',
    '38+ public repositories on GitHub',
    '5+ production-deployed apps',
  ],
  certifications: [
    { name: 'Codefest — Nationwide Hackathon', issuer: 'NIT Durgapur' },
    { name: 'Introduction to JavaScript',       issuer: 'SoloLearn' },
    { name: 'Software Dev Job Sim',             issuer: 'Forage – DATACOM' },
    { name: 'Introduction to C',                 issuer: 'SoloLearn' },
    { name: 'Intro to Generative AI Studio',     issuer: 'Simplilearn' },
  ],
  projects: [
    {
      title: 'FitLife AI',
      role: 'Full Stack Developer',
      tech: 'React · Node.js · Express · MongoDB',
      bullets: [
        'Built a full-stack AI-powered health platform that analyses user body metrics (age, weight, height, goal) to auto-generate personalised diet plans and workout routines.',
        'Implemented RESTful APIs with Express.js and designed a responsive React frontend with real-time data visualisation using charts.',
        'Deployed on Netlify (frontend) and Render (backend) with environment-based config management and secure CORS handling.',
        'Integrated a calorie tracking module and progress dashboard, allowing users to monitor daily fitness goals and nutritional intake over time.',
      ],
    },
    {
      title: 'ContentCraft AI',
      role: 'Full Stack Developer — CRAFTATHON 2025 Hackathon',
      tech: 'React · Node.js · OpenAI API · JWT · MongoDB',
      bullets: [
        'Developed an AI-powered content generation SaaS platform integrating OpenAI GPT models to produce marketing copy, blogs, and social captions — reducing creation time by 70%.',
        'Implemented secure JWT-based authentication, role-based route protection, and a user dashboard with content history — all within a 36-hour sprint.',
        'Architected a modular prompt engineering system allowing users to customise tone, length, and content type dynamically.',
        'Integrated real-time preview of generated content with clipboard copy, export-to-text, and user session management features.',
      ],
    },
    {
      title: 'Havells Website Clone',
      role: 'Frontend Developer',
      tech: 'HTML5 · CSS3 · Flexbox · CSS Grid · JavaScript',
      bullets: [
        'Created a pixel-perfect, fully responsive frontend clone of the official Havells India website, replicating all key sections including hero banners, product grids, and navigation.',
        'Implemented smooth CSS animations, hover effects, and a mobile-first responsive layout using Flexbox and CSS Grid for seamless cross-device compatibility.',
        'Demonstrated mastery of advanced CSS techniques including custom transitions, pseudo-element effects, and dynamic grid systems without any UI frameworks.',
      ],
    },
    {
      title: 'Dream Website Clone',
      role: 'Frontend Developer',
      tech: 'HTML5 · CSS3 · JavaScript · Vanilla CSS Animations',
      bullets: [
        'Built an animated portfolio-style website with dynamic hero sections, scroll-triggered card layouts, and a mobile-first design approach.',
        'Achieved cross-browser compatibility using pure HTML/CSS/JS with no external frameworks, demonstrating deep understanding of core web fundamentals.',
        'Utilized custom keyframe animations, SVG illustrations, and responsive typography to create an immersive and visually engaging user experience.',
      ],
    },
  ],
};

/* ─── STYLE CONSTANTS ───────────────────────────────────────── */
const FONT = "'Inter', 'Segoe UI', Arial, sans-serif";

// Exact A4 dimensions in pixels at 96 DPI: 794w x 1123h
const s = {
  page: {
    background: '#dde1e7',
    minHeight: '100vh',
    paddingTop: 80,
    paddingBottom: 40,
    display: 'flex',
    justifyContent: 'center',
    fontFamily: FONT,
  },
  sheet: {
    width: 794,
    boxSizing: 'border-box',
    background: '#fff',
    boxShadow: '0 6px 48px rgba(0,0,0,0.22)',
    position: 'relative',
    transform: 'scale(0.85)',
    transformOrigin: 'top center',
    marginBottom: '-12%',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    position: 'relative',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 16,
    borderTop: '1.5px solid #999',
    borderBottom: '1.5px solid #999',
    margin: '14px 30px 0',
    overflow: 'hidden',
    flexShrink: 0,
  },
  watermark: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: 105,
    fontFamily: "'Inter', sans-serif",
    color: '#f1f1f1',
    pointerEvents: 'none',
    userSelect: 'none',
    lineHeight: 1,
    zIndex: 0,
    fontStyle: 'normal',
    fontWeight: 900,
    letterSpacing: '-5px',
  },
  name: {
    fontSize: 27,
    fontWeight: 700,
    letterSpacing: '0.22em',
    color: '#222',
    position: 'relative',
    zIndex: 1,
    margin: 0,
    lineHeight: 1.1,
    fontFamily: FONT,
  },
  title: {
    fontSize: 9.5,
    letterSpacing: '0.26em',
    color: '#666',
    fontWeight: 500,
    marginTop: 4,
    position: 'relative',
    zIndex: 1,
    fontFamily: FONT,
  },
  body: {
    display: 'flex',
    flex: 1,
    gap: 0,
    overflow: 'hidden',
  },
  left: {
    width: 216,
    minWidth: 216,
    flexShrink: 0,
    background: '#f7f7f7',
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 30,
    paddingRight: 16,
    borderRight: '1px solid #ccc',
  },
  right: {
    flex: 1,
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 18,
    paddingRight: 30,
  },
  sectionBox: {
    marginBottom: 12,
  },
  sectionHead: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 6,
  },
  sectionCircle: {
    width: 17,
    height: 17,
    borderRadius: '50%',
    background: '#ddd',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    zIndex: 1,
  },
  sectionCircleLetter: {
    fontSize: 8.5,
    fontWeight: 700,
    color: '#333',
    lineHeight: 1,
  },
  sectionTitleRest: {
    fontSize: 9.5,
    fontWeight: 700,
    letterSpacing: '0.16em',
    color: '#333',
    textTransform: 'uppercase',
    paddingLeft: 3,
    fontFamily: FONT,
  },
  sectionDivider: {
    borderTop: '1px solid #ccc',
    marginBottom: 8,
  },
  contactItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 5,
    marginBottom: 4,
  },
  contactText: {
    fontSize: 8,
    color: '#444',
    fontWeight: 500,
    wordBreak: 'break-all',
    lineHeight: 1.3,
  },
  eduYear: {
    fontSize: 8,
    color: '#888',
    fontWeight: 500,
    marginBottom: 1,
    letterSpacing: '0.04em',
  },
  eduInstitution: {
    fontSize: 8.5,
    fontWeight: 700,
    color: '#222',
    textTransform: 'uppercase',
    marginBottom: 1,
    letterSpacing: '0.04em',
  },
  eduLocation: {
    fontSize: 8,
    color: '#888',
    marginBottom: 1,
  },
  eduBulletRow: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 5,
  },
  bullet: {
    fontSize: 8.5,
    color: '#555',
    flexShrink: 0,
    lineHeight: 1.4,
  },
  eduDegree: {
    fontSize: 8,
    color: '#444',
    fontWeight: 400,
    lineHeight: 1.3,
  },
  skillText: {
    fontSize: 8,
    color: '#444',
    fontWeight: 400,
    lineHeight: 1.3,
  },
  langText: {
    fontSize: 8,
    color: '#444',
    fontWeight: 500,
  },
  langLevel: {
    fontSize: 8,
    color: '#888',
    fontWeight: 400,
  },
  achieveText: {
    fontSize: 8,
    color: '#444',
    lineHeight: 1.3,
  },
  certName: {
    fontSize: 8,
    color: '#333',
    fontWeight: 600,
    lineHeight: 1.3,
  },
  certIssuer: {
    fontSize: 8,
    color: '#888',
    marginBottom: 4,
  },
  summaryText: {
    fontSize: 8.5,
    color: '#444',
    lineHeight: 1.6,
    textAlign: 'justify',
    fontWeight: 400,
  },
  expEntry: {
    marginBottom: 12,
  },
  expTopRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 1,
  },
  expCompany: {
    fontSize: 10,
    fontWeight: 700,
    color: '#222',
    letterSpacing: '0.02em',
  },
  expRole: {
    fontSize: 8.5,
    color: '#555',
    fontWeight: 500,
    marginBottom: 1,
    fontStyle: 'italic',
  },
  expTech: {
    fontSize: 8,
    color: '#888',
    marginBottom: 3,
    fontWeight: 400,
    letterSpacing: '0.02em',
  },
  expBullet: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 5,
    marginBottom: 3,
  },
  expBulletDot: {
    width: 3,
    height: 3,
    borderRadius: '50%',
    background: '#777',
    marginTop: 4,
    flexShrink: 0,
  },
  expBulletText: {
    fontSize: 8.5,
    color: '#444',
    lineHeight: 1.45,
    fontWeight: 400,
  },
};

/* ─── SECTION HEADING COMPONENT ─────────────────────────────── */
function SectionHead({ title }) {
  return (
    <>
      <div style={s.sectionHead}>
        <div style={s.sectionCircle}>
          <span style={s.sectionCircleLetter}>{title.charAt(0)}</span>
        </div>
        <span style={s.sectionTitleRest}>{title.slice(1)}</span>
      </div>
      <div style={s.sectionDivider} />
    </>
  );
}

/* ─── MAIN COMPONENT ─────────────────────────────────────────── */
export default function ResumePage() {
  const navigate = useNavigate();

  const handleDownloadPDF = () => {
    const element = document.getElementById('resume-sheet');
    if (!element) return;

    // Temporarily reset scaling so the PDF captures at full 100% resolution
    const originalTransform = element.style.transform;
    element.style.transform = 'scale(1)';

    const opt = {
      margin: 0,
      filename: 'Kshitij_Pandey_Resume.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } // Exact A4
    };

    html2pdf().set(opt).from(element).save().then(() => {
      // Restore scaling after download
      element.style.transform = originalTransform;
    });
  };

  return (
    <>
      <CustomCursor />
      <style>{`
        /* Cursor CSS vars for resume page */
        :root {
          --color-accent-cyan: #06b6d4;
          --color-accent-pink: #ec4899;
          --color-accent-purple: #a855f7;
        }
        /* Prevent portfolio link/anchor styles from bleeding into resume */
        #resume-sheet a, #resume-sheet a:visited, #resume-sheet a:hover {
          text-decoration: none !important;
        }
        #resume-sheet { -webkit-font-smoothing: antialiased; }
        @media print {
          body { margin: 0; background: #fff; }
          #resume-print-wrap { padding-top: 0 !important; background: #fff !important; }
          #resume-sheet {
            box-shadow: none !important;
            margin: 0 !important;
            width: 100% !important;
            height: auto !important;
            transform: none !important;
          }
          .no-print { display: none !important; }
        }
      `}</style>

      {/* ── Action Bar ── */}
      <div className="no-print" style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 24px',
        background: 'rgba(5,5,5,0.95)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        fontFamily: FONT,
      }}>
        <button onClick={() => navigate(-1)} style={{
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '7px 16px', borderRadius: 10,
          background: 'transparent', border: '1px solid rgba(255,255,255,0.12)',
          color: '#aaa', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em',
          textTransform: 'uppercase', cursor: 'pointer', fontFamily: FONT,
        }}>
          <ArrowLeft size={14} /> Back
        </button>
        <span style={{ fontSize: 12, color: '#555', fontFamily: FONT }}>Kshitij Pandey — Resume</span>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={() => window.print()} style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '7px 18px', borderRadius: 10,
            background: 'transparent', border: '1px solid rgba(255,255,255,0.2)',
            color: '#ddd',
            fontSize: 12, fontWeight: 700, letterSpacing: '0.08em',
            textTransform: 'uppercase', cursor: 'pointer', fontFamily: FONT,
          }}>
            <Printer size={14} /> Print
          </button>
          
          <button onClick={handleDownloadPDF} style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '7px 18px', borderRadius: 10,
            background: 'linear-gradient(135deg, #4b5563, #1f2937)',
            border: 'none', color: '#fff',
            fontSize: 12, fontWeight: 700, letterSpacing: '0.08em',
            textTransform: 'uppercase', cursor: 'pointer', fontFamily: FONT,
            boxShadow: '0 0 18px rgba(31,41,55,0.5)',
          }}>
            <Download size={14} /> Download PDF
          </button>
        </div>
      </div>

      {/* ── Page ── */}
      <div id="resume-print-wrap" style={s.page}>
        <div id="resume-sheet" style={s.sheet}>

          {/* ═══ HEADER ═════════════════════════════════════════ */}
          <div style={s.header}>
            <div style={s.watermark}>KP</div>
            <h1 style={s.name}>{DATA.name}</h1>
            <p style={s.title}>{DATA.title}</p>
          </div>

          {/* ═══ BODY ════════════════════════════════════════════ */}
          <div style={s.body}>

            {/* ── LEFT COLUMN ─────────────────────────────────── */}
            <div style={s.left}>

              {/* CONTACT */}
              <div style={s.sectionBox}>
                <SectionHead title="CONTACT" />
                {DATA.contact.map((c, i) => (
                  <div key={i} style={s.contactItem}>
                    <c.icon size={9} style={{ color: '#555', marginTop: 1, flexShrink: 0 }} />
                    <span style={s.contactText}>{c.text}</span>
                  </div>
                ))}
              </div>

              {/* EDUCATION */}
              <div style={s.sectionBox}>
                <SectionHead title="EDUCATION" />
                {DATA.education.map((e, i) => (
                  <div key={i} style={{ marginBottom: i < DATA.education.length - 1 ? 8 : 0 }}>
                    <p style={s.eduYear}>{e.year}</p>
                    <p style={s.eduInstitution}>{e.institution}</p>
                    <p style={s.eduLocation}>{e.location}</p>
                    <div style={s.eduBulletRow}>
                      <span style={s.bullet}>•</span>
                      <span style={s.eduDegree}>{e.degree}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* SKILLS */}
              <div style={s.sectionBox}>
                <SectionHead title="SKILLS" />
                {DATA.skills.map((sk, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 4, marginBottom: 3 }}>
                    <span style={s.bullet}>•</span>
                    <span style={s.skillText}>{sk}</span>
                  </div>
                ))}
              </div>

              {/* LANGUAGES */}
              <div style={s.sectionBox}>
                <SectionHead title="LANGUAGES" />
                {DATA.languages.map((l, i) => (
                  <div key={i} style={{ display: 'flex', gap: 4, marginBottom: 3 }}>
                    <span style={s.bullet}>•</span>
                    <span style={s.langText}>{l.name}:{' '}
                      <span style={s.langLevel}>{l.level}</span>
                    </span>
                  </div>
                ))}
              </div>

              {/* ACHIEVEMENTS */}
              <div style={s.sectionBox}>
                <SectionHead title="ACHIEVEMENTS" />
                {DATA.achievements.map((a, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 4, marginBottom: 4 }}>
                    <span style={s.bullet}>•</span>
                    <span style={s.achieveText}>{a}</span>
                  </div>
                ))}
              </div>

              {/* CERTIFICATIONS */}
              <div style={{ marginBottom: 0 }}>
                <SectionHead title="CERTIFICATIONS" />
                {DATA.certifications.map((c, i) => (
                  <div key={i} style={{ marginBottom: 6 }}>
                    <p style={s.certName}>{c.name}</p>
                    <p style={s.certIssuer}>{c.issuer}</p>
                  </div>
                ))}
              </div>

            </div>

            {/* ── RIGHT COLUMN ────────────────────────────────── */}
            <div style={s.right}>

              {/* PROFILE SUMMARY */}
              <div style={{ ...s.sectionBox, marginBottom: 12 }}>
                <SectionHead title="PROFILE SUMMARY" />
                <p style={s.summaryText}>{DATA.summary}</p>
              </div>

              {/* PROJECTS */}
              <div>
                <SectionHead title="PROJECTS" />
                {DATA.projects.map((p, i) => (
                  <div key={i} style={{ ...s.expEntry, marginBottom: i < DATA.projects.length - 1 ? 10 : 0 }}>
                    <div style={s.expTopRow}>
                      <span style={s.expCompany}>{p.title}</span>
                    </div>
                    <p style={s.expRole}>{p.role}</p>
                    <p style={s.expTech}>{p.tech}</p>
                    {p.bullets.map((b, j) => (
                      <div key={j} style={s.expBullet}>
                        <div style={s.expBulletDot} />
                        <span style={s.expBulletText}>{b}</span>
                      </div>
                    ))}
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
