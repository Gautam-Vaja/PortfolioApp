import React, { useState } from 'react';
import { Mail, Github, Linkedin, ArrowRight, Check, Phone, MapPin, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import Contact3DScene from './3d/Contact3DScene';
import TiltCard from './ui/TiltCard';
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
  const [errorMessage, setErrorMessage] = useState('');
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
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    setTimeout(() => {
      try {
        const stored = JSON.parse(localStorage.getItem('gautam_portfolio_messages') || '[]');
        stored.push({
          ...formData,
          submittedAt: new Date().toISOString(),
        });
        localStorage.setItem('gautam_portfolio_messages', JSON.stringify(stored));
      } catch (err) {
        // storage fallback
      }

      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 border-t border-[#00A8FF]/10 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Left Column: 3D Torus Scene & Headline (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-6 text-left">
            {/* Real-time 3D Floating Torus Scene */}
            <div className="relative w-full max-w-[260px] rounded-2xl border border-[#00A8FF]/20 bg-[#07152B]/60 p-2 backdrop-blur-md shadow-[0_0_25px_rgba(0,168,255,0.15)]">
              <Contact3DScene />
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#00A8FF] shadow-[0_0_8px_#00A8FF]" />
                <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#35D5FF]">
                  GET IN TOUCH
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#F4F8FF] font-display">
                LET&apos;S CREATE SOMETHING GREAT.
              </h2>
              <p className="text-sm text-[#A8B8D0] leading-relaxed font-normal">
                Have an idea, project, or opportunity? Let&apos;s connect and build something meaningful.
              </p>
            </div>

            <div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="btn-primary-blue inline-flex items-center gap-2 rounded-full px-7 py-3 text-xs sm:text-sm font-bold shadow-lg"
              >
                <span>Direct Email</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Center Column: Interactive Contact Form (lg:col-span-5) */}
          <div className="lg:col-span-5 text-left">
            <TiltCard maxTilt={5} className="glass-panel rounded-2xl p-6 sm:p-7 space-y-4 border border-[#00A8FF]/20">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[#35D5FF]">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-mono text-[#A8B8D0] block mb-1">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Gautam Vaja"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="input-dark w-full rounded-xl px-4 py-2.5 text-xs placeholder-slate-500"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-[#A8B8D0] block mb-1">Your Email *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="hello@example.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="input-dark w-full rounded-xl px-4 py-2.5 text-xs placeholder-slate-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-mono text-[#A8B8D0] block mb-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={handleChange}
                    className="input-dark w-full rounded-xl px-4 py-2.5 text-xs placeholder-slate-500"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono text-[#A8B8D0] block mb-1">Your Message *</label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project, timeline, or requirements..."
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="input-dark w-full rounded-xl px-4 py-2.5 text-xs placeholder-slate-500 resize-none"
                  />
                </div>

                {errorMessage && (
                  <div className="flex items-center gap-2 text-xs text-rose-400 font-medium">
                    <AlertCircle className="h-4 w-4" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="flex items-center justify-between pt-2">
                  {submitted ? (
                    <span className="text-xs text-[#35D5FF] font-semibold flex items-center gap-1.5 animate-fadeIn">
                      <Check className="h-4 w-4 text-[#00A8FF]" /> Message received! I will reply shortly.
                    </span>
                  ) : (
                    <span />
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary-blue inline-flex items-center gap-2 rounded-full px-7 py-2.5 text-xs font-bold transition-all ml-auto disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </form>
            </TiltCard>
          </div>

          {/* Right Column: Contact Links (lg:col-span-3) */}
          <div className="lg:col-span-3 text-left">
            <TiltCard maxTilt={6} className="glass-panel rounded-2xl p-6 space-y-5 border border-[#00A8FF]/20">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#F4F8FF] font-mono">
                Get in Touch
              </h3>

              <div className="space-y-4 text-xs">
                {/* Email with copy button */}
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="group flex items-center gap-3 w-full text-left text-[#A8B8D0] hover:text-[#FFFFFF] transition-colors"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#00A8FF]/10 text-[#00A8FF] border border-[#00A8FF]/20 group-hover:bg-[#00A8FF] group-hover:text-[#030B1B] transition-colors">
                    {copiedEmail ? <Check className="h-4 w-4" /> : <Mail className="h-4 w-4" />}
                  </div>
                  <span className="truncate group-hover:text-[#FFFFFF]">
                    {copiedEmail ? 'Copied to clipboard!' : PERSONAL_INFO.email}
                  </span>
                </button>

                {/* Phone */}
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="group flex items-center gap-3 text-[#A8B8D0] hover:text-[#FFFFFF] transition-colors"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#00A8FF]/10 text-[#00A8FF] border border-[#00A8FF]/20 group-hover:bg-[#00A8FF] group-hover:text-[#030B1B] transition-colors">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span className="truncate">{PERSONAL_INFO.phone}</span>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3 text-[#A8B8D0]">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#00A8FF]/10 text-[#00A8FF] border border-[#00A8FF]/20">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span className="truncate">Gujarat, India</span>
                </div>

                {/* GitHub */}
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-[#A8B8D0] hover:text-[#FFFFFF] transition-colors"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#00A8FF]/10 text-[#00A8FF] border border-[#00A8FF]/20 group-hover:bg-[#00A8FF] group-hover:text-[#030B1B] transition-colors">
                    <Github className="h-4 w-4" />
                  </div>
                  <span className="truncate">github.com/{PERSONAL_INFO.githubUser}</span>
                </a>

                {/* LinkedIn */}
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-[#A8B8D0] hover:text-[#FFFFFF] transition-colors"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#00A8FF]/10 text-[#00A8FF] border border-[#00A8FF]/20 group-hover:bg-[#00A8FF] group-hover:text-[#030B1B] transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </div>
                  <span className="truncate">linkedin.com/in/{PERSONAL_INFO.linkedinUser}</span>
                </a>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
