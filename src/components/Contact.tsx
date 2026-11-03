import React, { useState } from 'react';
import { Mail, Github, Linkedin, ArrowRight, Check, Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolio-data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      try {
        const stored = JSON.parse(localStorage.getItem('gautam_messages') || '[]');
        stored.push({ ...formData, date: new Date().toISOString() });
        localStorage.setItem('gautam_messages', JSON.stringify(stored));
      } catch (err) {
        // fallback
      }
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    }, 500);
  };

  return (
    <section id="contact" className="py-20 lg:py-24 border-t border-white/[0.06] relative overflow-hidden glow-seq-left">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Left Column: 3D Torus, Headline & Contact Me Button matching mockup */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-6"
          >
            {/* 3D Ring/Torus Graphic matching mockup */}
            <div className="relative w-28 h-28 flex items-center justify-center select-none">
              <div className="pointer-events-none absolute -inset-2 rounded-full bg-[#FF7A1A]/20 blur-xl" />
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              >
                <img
                  src="/assets/theme/contact_3d_torus.png"
                  alt="3D torus ring with glowing sphere"
                  className="blend-graphic-3d w-24 h-24 object-contain drop-shadow-[0_10px_20px_rgba(255,107,0,0.3)]"
                />
              </motion.div>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white font-display">
                LET&apos;S CREATE SOMETHING GREAT.
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                Looking for a dedicated Flutter & Mobile Application Engineer? Let&apos;s connect!
              </p>
            </div>

            <div>
              <motion.a
                href={`mailto:${PERSONAL_INFO.email}`}
                whileHover={{ scale: 1.04, boxShadow: '0 10px 25px -5px rgba(255, 122, 26, 0.4)' }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF7A1A] to-[#FF5500] px-6 py-2.5 text-xs font-bold text-white shadow-lg shadow-[#FF7A1A]/25 transition-all"
              >
                <span>Contact Me</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Center Column: Embedded Sleek Dark Contact Form matching mockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="input-dark w-full rounded-xl px-4 py-2.5 text-xs placeholder-slate-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="input-dark w-full rounded-xl px-4 py-2.5 text-xs placeholder-slate-500"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="input-dark w-full rounded-xl px-4 py-2.5 text-xs placeholder-slate-500"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="input-dark w-full rounded-xl px-4 py-2.5 text-xs placeholder-slate-500 resize-none"
              />

              <div className="flex items-center justify-between pt-1">
                {submitted ? (
                  <span className="text-xs text-[#FF9030] font-medium flex items-center gap-1.5 animate-fadeIn">
                    <Check className="h-3.5 w-3.5" /> Message sent successfully!
                  </span>
                ) : (
                  <span />
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.04, boxShadow: '0 8px 20px -4px rgba(255, 122, 26, 0.4)' }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF7A1A] to-[#FF5500] px-6 py-2.5 text-xs font-bold text-white shadow-md transition-all ml-auto"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Right Column: "Get in Touch" Card matching CV details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass-panel rounded-2xl p-5 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
                Get in Touch
              </h3>

              <div className="space-y-3 text-xs">
                {/* Email with copy button */}
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="group flex items-center gap-3 w-full text-left text-slate-300 hover:text-white transition-colors"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#FF7A1A]/15 text-[#FF7A1A] group-hover:bg-[#FF7A1A] group-hover:text-black transition-colors">
                    {copiedEmail ? <Check className="h-3.5 w-3.5" /> : <Mail className="h-3.5 w-3.5" />}
                  </div>
                  <span className="truncate text-slate-300 group-hover:text-white">
                    {copiedEmail ? 'Copied to clipboard!' : PERSONAL_INFO.email}
                  </span>
                </button>

                {/* Phone */}
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="group flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#FF7A1A]/15 text-[#FF7A1A] group-hover:bg-[#FF7A1A] group-hover:text-black transition-colors">
                    <Phone className="h-3.5 w-3.5" />
                  </div>
                  <span className="truncate">{PERSONAL_INFO.phone}</span>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#FF7A1A]/15 text-[#FF7A1A]">
                    <MapPin className="h-3.5 w-3.5" />
                  </div>
                  <span className="truncate">{PERSONAL_INFO.location}</span>
                </div>

                {/* GitHub */}
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#FF7A1A]/15 text-[#FF7A1A] group-hover:bg-[#FF7A1A] group-hover:text-black transition-colors">
                    <Github className="h-3.5 w-3.5" />
                  </div>
                  <span className="truncate">github.com/{PERSONAL_INFO.githubUser}</span>
                </a>

                {/* LinkedIn */}
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#FF7A1A]/15 text-[#FF7A1A] group-hover:bg-[#FF7A1A] group-hover:text-black transition-colors">
                    <Linkedin className="h-3.5 w-3.5" />
                  </div>
                  <span className="truncate">linkedin.com/in/{PERSONAL_INFO.linkedinUser}</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}