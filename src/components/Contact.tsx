import React, { useState } from 'react';
import { Mail, Github, Linkedin, ArrowRight, Check, Phone, MapPin, Code2 } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolio-data';
import ThreeContactTorus from './3d/ThreeContactTorus';
import { AnimatedLetters } from './ui/AnimatedText';

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
    <section id="contact" className="py-20 lg:py-24 border-t border-[#35D5FF]/10 relative overflow-hidden glow-seq-left">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Left Column: 3D Torus Graphic, Headline & Contact Me Button */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-5 text-left"
          >
            {/* Real 3D Torus Ring Graphic */}
            <div data-cursor-drag="true">
              <ThreeContactTorus />
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#F4F8FF] font-display">
                <AnimatedLetters text="LET'S CREATE SOMETHING GREAT." stagger={0.03} />
              </h2>
              <p className="text-xs sm:text-sm text-[#A8B8D0] leading-relaxed font-normal">
                Have an idea, project, or opportunity? Let&apos;s connect!
              </p>
            </div>

            <div>
              <motion.a
                href={`mailto:${PERSONAL_INFO.email}`}
                whileHover={{ scale: 1.04, boxShadow: '0 10px 25px -5px rgba(255, 122, 26, 0.5)' }}
                whileTap={{ scale: 0.96 }}
                data-cursor="pointer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF7A1A] to-[#FF9A45] px-6 py-2.5 text-xs font-bold text-white shadow-lg shadow-[#FF7A1A]/30 transition-all hover:brightness-110 cursor-pointer"
              >
                <span>Contact Me</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </motion.a>
            </div>

            {/* Circular Social Buttons */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                data-cursor="pointer"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#35D5FF]/20 bg-[#07152B] text-[#A8B8D0] transition-colors hover:border-[#00A8FF] hover:text-white hover:bg-[#00A8FF]/15"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                data-cursor="pointer"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#35D5FF]/20 bg-[#07152B] text-[#A8B8D0] transition-colors hover:border-[#00A8FF] hover:text-white hover:bg-[#00A8FF]/15"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Send Email"
                data-cursor="pointer"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#35D5FF]/20 bg-[#07152B] text-[#A8B8D0] transition-colors hover:border-[#00A8FF] hover:text-white hover:bg-[#00A8FF]/15"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Center Column: Embedded Sleek Dark Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
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
                  className="input-dark w-full rounded-xl px-4 py-2.5 text-xs placeholder-slate-400 focus:border-[#FF9A45]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="input-dark w-full rounded-xl px-4 py-2.5 text-xs placeholder-slate-400 focus:border-[#FF9A45]"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="input-dark w-full rounded-xl px-4 py-2.5 text-xs placeholder-slate-400 focus:border-[#FF9A45]"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="input-dark w-full rounded-xl px-4 py-2.5 text-xs placeholder-slate-400 resize-none focus:border-[#FF9A45]"
              />

              <div className="flex items-center justify-between pt-1">
                {submitted ? (
                  <span className="text-xs text-[#35D5FF] font-medium flex items-center gap-1.5 animate-fadeIn">
                    <Check className="h-3.5 w-3.5" /> Message sent successfully!
                  </span>
                ) : (
                  <span />
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.04, boxShadow: '0 8px 20px -4px rgba(255, 122, 26, 0.5)' }}
                  whileTap={{ scale: 0.96 }}
                  data-cursor="pointer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF7A1A] to-[#FF9A45] px-6 py-2.5 text-xs font-bold text-white shadow-md transition-all ml-auto hover:brightness-110 cursor-pointer"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Right Column: "Get in Touch" Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 text-left"
          >
            <div className="glass-panel rounded-2xl p-5 space-y-4 border border-[#35D5FF]/15">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#F4F8FF] font-mono">
                Get in Touch
              </h3>

              <div className="space-y-3 text-xs">
                {/* Email with copy button */}
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  data-cursor="pointer"
                  className="group flex items-center gap-3 w-full text-left text-[#A8B8D0] hover:text-[#F4F8FF] transition-colors cursor-pointer"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#FF9A45]/15 text-[#FF9A45] group-hover:bg-[#FF9A45] group-hover:text-black transition-colors">
                    {copiedEmail ? <Check className="h-3.5 w-3.5" /> : <Mail className="h-3.5 w-3.5" />}
                  </div>
                  <span className="truncate text-[#A8B8D0] group-hover:text-[#F4F8FF]">
                    {copiedEmail ? 'Copied to clipboard!' : PERSONAL_INFO.email}
                  </span>
                </button>

                {/* Phone */}
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  data-cursor="pointer"
                  className="group flex items-center gap-3 text-[#A8B8D0] hover:text-[#F4F8FF] transition-colors"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#00A8FF]/15 text-[#35D5FF] group-hover:bg-[#00A8FF] group-hover:text-black transition-colors">
                    <Phone className="h-3.5 w-3.5" />
                  </div>
                  <span className="truncate">{PERSONAL_INFO.phone}</span>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3 text-[#A8B8D0]">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#00A8FF]/15 text-[#35D5FF]">
                    <MapPin className="h-3.5 w-3.5" />
                  </div>
                  <span className="truncate">{PERSONAL_INFO.location}</span>
                </div>

                {/* GitHub */}
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="pointer"
                  className="group flex items-center gap-3 text-[#A8B8D0] hover:text-[#F4F8FF] transition-colors"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#00A8FF]/15 text-[#35D5FF] group-hover:bg-[#00A8FF] group-hover:text-black transition-colors">
                    <Github className="h-3.5 w-3.5" />
                  </div>
                  <span className="truncate">github.com/{PERSONAL_INFO.githubUser}</span>
                </a>

                {/* Portfolio Repository */}
                {PERSONAL_INFO.portfolioRepo && (
                  <a
                    href={PERSONAL_INFO.portfolioRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="pointer"
                    className="group flex items-center gap-3 text-[#A8B8D0] hover:text-[#F4F8FF] transition-colors"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#00A8FF]/15 text-[#35D5FF] group-hover:bg-[#00A8FF] group-hover:text-black transition-colors">
                      <Code2 className="h-3.5 w-3.5" />
                    </div>
                    <span className="truncate font-mono text-xs text-[#35D5FF]">Gautam-Vaja/PortfolioApp</span>
                  </a>
                )}

                {/* LinkedIn */}
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="pointer"
                  className="group flex items-center gap-3 text-[#A8B8D0] hover:text-[#F4F8FF] transition-colors"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#00A8FF]/15 text-[#35D5FF] group-hover:bg-[#00A8FF] group-hover:text-black transition-colors">
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
