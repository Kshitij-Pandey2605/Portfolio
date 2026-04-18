import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, MessageSquare, User, AtSign, Zap, Headphones, CheckCircle2, AlertCircle } from 'lucide-react';
import { Github, Linkedin, Twitter, Youtube, Code2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import PageWrapper from '../components/PageWrapper';
import { socialLinks } from '../data/social';

const ContactPage = ({ theme, toggleTheme }) => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const getSocialIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'github': return <Github size={22} />;
      case 'linkedin': return <Linkedin size={22} />;
      case 'twitter': return <Twitter size={22} />;
      case 'youtube': return <Youtube size={22} />;
      case 'leetcode': return <Code2 size={22} />;
      default: return <Mail size={22} />;
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Using .trim() to ensure no hidden spaces are causing the 'Service ID not found' error
    const serviceId = (import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_40syy78').trim();
    const templateId = (import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_4vo8zy3').trim();
    const publicKey = (import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'ZSLg9lPQc0UUvI07g').trim();

    // Initialize the SDK
    emailjs.init(publicKey);

    // Using sendForm is often the most stable way to handle React form refs
    emailjs.sendForm(serviceId, templateId, formRef.current)
      .then(() => {
        setIsSubmitting(false);
        setStatus({ type: 'success', message: '🎉 Message sent successfully! I will reach out within 24 hours.' });
        formRef.current.reset();
      })
      .catch((error) => {
        setIsSubmitting(false);
        console.error('EmailJS Error:', error);
        // Displaying exact server error for final confirmation
        const errorMsg = error?.text || error?.message || 'Check your Service ID in EmailJS Dashboard';
        setStatus({ type: 'error', message: `Failed to send: ${errorMsg}` });
      });
  };

  const socialColors = ['cyan', 'purple', 'pink', 'cyan', 'purple'];

  return (
    <PageWrapper theme={theme} toggleTheme={toggleTheme}>
      <div className="container mx-auto px-6 py-12 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-xs font-bold uppercase tracking-widest text-accent-cyan mb-6"
          >
            <Headphones size={14} /> Open to Opportunities
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
          >
            Let's <span className="text-transparent bg-clip-text bg-neon-gradient">Connect</span>
          </motion.h1>
          <div className="w-24 h-1 bg-neon-gradient mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* LEFT: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-neon-gradient/10 blur-[60px] rounded-[3rem] opacity-30 pointer-events-none" />
              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="relative glass p-10 md:p-12 rounded-[3rem] border border-white/10 space-y-7 shadow-premium"
              >
                <h3 className="text-2xl font-black text-white mb-2">Send a Message</h3>

                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    name="user_name"
                    id="contact_name"
                    required
                    placeholder=" "
                    className="input-premium peer w-full bg-white/5 border border-white/10 hover:border-white/20 rounded-2xl px-5 pt-8 pb-3 focus:outline-none focus:border-accent-cyan focus:shadow-[0_0_20px_rgba(0,243,255,0.1)] text-white transition-all"
                  />
                  <label htmlFor="contact_name" className="absolute left-5 top-5 text-gray-500 text-xs font-black uppercase tracking-widest flex items-center gap-1.5 transform -translate-y-3 scale-75 origin-[0] transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-accent-cyan pointer-events-none">
                    <User size={12} /> Full Name
                  </label>
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    name="user_email"
                    id="contact_email"
                    required
                    placeholder=" "
                    className="input-premium peer w-full bg-white/5 border border-white/10 hover:border-white/20 rounded-2xl px-5 pt-8 pb-3 focus:outline-none focus:border-accent-purple focus:shadow-[0_0_20px_rgba(157,0,255,0.1)] text-white transition-all"
                  />
                  <label htmlFor="contact_email" className="absolute left-5 top-5 text-gray-500 text-xs font-black uppercase tracking-widest flex items-center gap-1.5 transform -translate-y-3 scale-75 origin-[0] transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-accent-purple pointer-events-none">
                    <AtSign size={12} /> Email Address
                  </label>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    id="contact_message"
                    name="message"
                    required
                    rows="5"
                    placeholder=" "
                    className="input-premium peer w-full bg-white/5 border border-white/10 hover:border-white/20 rounded-2xl px-5 pt-10 pb-4 focus:outline-none focus:border-accent-pink focus:shadow-[0_0_20px_rgba(255,0,128,0.1)] text-white resize-none transition-all"
                  />
                  <label htmlFor="contact_message" className="absolute left-5 top-5 text-gray-500 text-xs font-black uppercase tracking-widest flex items-center gap-1.5 transform -translate-y-3 scale-75 origin-[0] transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-accent-pink pointer-events-none">
                    <MessageSquare size={12} /> Your Message
                  </label>
                </div>

                {/* Status alert */}
                <AnimatePresence>
                  {status.message && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={`flex items-center gap-3 p-4 rounded-xl text-sm font-bold ${
                        status.type === 'success'
                          ? 'bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan'
                          : 'bg-accent-pink/10 border border-accent-pink/30 text-accent-pink'
                      }`}
                    >
                      {status.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                      {status.message}
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className={`btn-premium w-full py-4 text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl flex items-center justify-center gap-3 interactive transition-all ${
                    isSubmitting ? 'bg-gray-600 cursor-not-allowed' : 'bg-neon-gradient shadow-neon-purple hover:shadow-[0_20px_40px_rgba(157,0,255,0.4)]'
                  }`}
                >
                  {isSubmitting ? (
                    <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                  ) : (
                    <><Send size={18} /> Send Message</>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* RIGHT: Info + Socials */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-3xl font-black text-white tracking-tight mb-4">
                Got a project in <span className="text-accent-cyan">mind?</span>
              </h3>
              <p className="text-gray-400 text-base leading-relaxed max-w-sm">
                I'm always open to exciting collaborations, internships, and freelance opportunities. Feel free to reach out!
              </p>
            </div>

            {/* Email */}
            <a
              href="mailto:kshitij.pandey.cg@gmail.com"
              className="group flex items-center gap-5 p-5 glass rounded-2xl border border-white/5 hover:border-accent-cyan/30 transition-all shadow-premium interactive"
            >
              <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-accent-cyan group-hover:scale-110 transition-transform shrink-0">
                <Mail size={26} />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-1">Email</span>
                <span className="text-sm font-bold text-white group-hover:text-accent-cyan transition-colors break-all">kshitij.pandey.cg@gmail.com</span>
              </div>
            </a>

            {/* Social Grid */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-5">Find Me On</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {socialLinks.map((social, i) => {
                  const c = socialColors[i % socialColors.length];
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex flex-col items-center gap-3 p-5 glass rounded-2xl border border-white/5 hover:border-accent-${c}/30 transition-all hover:-translate-y-1 interactive shadow-sm`}
                    >
                      <div className={`text-accent-${c} group-hover:scale-110 transition-transform`}>
                        {getSocialIcon(social.iconName)}
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Response time */}
            <div className="relative p-5 glass rounded-2xl border border-accent-cyan/20 bg-accent-cyan/5 overflow-hidden">
              <Zap className="absolute right-4 top-4 text-accent-cyan/15 pointer-events-none" size={40} />
              <p className="text-gray-300 font-bold text-sm flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent-cyan shadow-neon-cyan animate-ping" />
                ⚡ Usually responds within 24 hours
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ContactPage;
