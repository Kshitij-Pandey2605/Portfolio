import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, ExternalLink } from 'lucide-react';

let resumePdf;
try {
  resumePdf = new URL('../assets/Kshitij_Pandey_Resume.pdf', import.meta.url).href;
} catch (e) {
  resumePdf = null;
}

export default function Resume() {
  const navigate = useNavigate();

  useEffect(() => {
    // This allows the native browser cursor to work over the PDF iframe
    document.body.classList.add('resume-page-active');
    return () => document.body.classList.remove('resume-page-active');
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--page-bg-gradient)' }}>
      {/* ── Top Action Bar ─────── */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 backdrop-blur-md bg-[#050505]/80 border-b border-white/10">
        <button onClick={() => navigate(-1)}
          className="flex items-center gap-2 glass px-5 py-2.5 rounded-xl text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white border border-white/10 hover:border-accent-cyan/40 transition-all duration-300 interactive">
          <ArrowLeft size={16} /> Back
        </button>
        <div className="flex items-center gap-4">
          <a href={resumePdf} target="_blank" rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors interactive">
            <ExternalLink size={16} /> Open in New Tab
          </a>
          <a href={resumePdf} download="Kshitij_Pandey_Resume.pdf"
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-black text-sm uppercase tracking-widest text-white interactive hover:opacity-90 transition-opacity"
            style={{ background: 'linear-gradient(135deg,#0ea5e9,#7e22ce)', boxShadow: '0 0 20px rgba(126,34,206,0.4)' }}>
            <Download size={16} /> Download PDF
          </a>
        </div>
      </div>

      {/* ── PDF Viewer ─────────── */}
      <div className="flex-1 w-full pt-[68px] relative">
        {resumePdf ? (
          <iframe
            src={`${resumePdf}#toolbar=0&navpanes=0&scrollbar=0`}
            title="Resume PDF"
            className="w-full h-full border-0 absolute inset-0 pt-[68px]"
            style={{ backgroundColor: '#fff' }}
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full pt-32 text-gray-400">
            <p className="text-xl font-bold text-white mb-2">Resume file not found.</p>
            <p className="text-sm">Please ensure Kshitij_Pandey_Resume.pdf is located in the src/assets directory.</p>
          </div>
        )}
      </div>
    </div>
  );
}
