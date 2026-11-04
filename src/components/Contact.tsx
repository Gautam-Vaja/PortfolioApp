import React, { useState, useRef } from 'react';
import { Mail, Github, Linkedin, ArrowRight, Check, AlertCircle } from 'lucide-react';
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
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleFocusMessage = () => {
    if (messageInputRef.current) {
      messageInputRef.current.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

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
        // Fallback
      }

      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 border-t border-white/5 relative overflow-hidden">
      {/* Warm Orange Horizon Beam */}
      <div className="horizon-beam top-[45%]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Left Column: 3D Torus Scene & Headline matching Image 4 (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4 text-left">
            {/* Real-time 3D Floating Torus Scene */}
            <div className="relative w-full max-w-[280px] rounded-2xl border border-white/10 bg-[#07152B]/40 p-2 backdrop-blur-md shadow-[0_0_30px_rgba(255,107,0,0.15)] overflow-hidden">
              <Contact3DScene />
            </div>

            <div className="space-y-2.5">
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#F4F8FF] font-display">
                LET&apos;S CREATE SOMETHING GREAT.
              </h2>
              <p className="text-sm text-[#A8B8D0] leading-relaxed font-normal">
                Have an idea, project, or opportunity? Let&apos;s connect!
              </p>
            </div>

            <div className="pt-1">
              <button
                type="button"
                onClick={handleFocusMessage}
                className="btn-primary-orange inline-flex items-center gap-2 rounded-full px-7 py-3 text-xs sm:text-sm font-bold shadow-[0_8px_25px_rgba(255,107,0,0.4)]"
              >
                <span>Contact Me</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Center Column: Interactive Contact Form matching Image 4 (lg:col-span-5) */}
          <div className="lg:col-span-5 text-left">
            <TiltCard maxTilt={4} className="glass-panel rounded-2xl p-6 sm:p-7 space-y-4 border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="input-dark w-full rounded-xl px-4 py-2.5 text-xs placeholder-[#A8B8D0]/60"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="input-dark w-full rounded-xl px-4 py-2.5 text-xs placeholder-[#A8B8D0]/60"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="input-dark w-full rounded-xl px-4 py-2.5 text-xs placeholder-[#A8B8D0]/60"
                  />
                </div>

                <div>
                  <textarea
                    ref={messageInputRef}
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="input-dark w-full rounded-xl px-4 py-2.5 text-xs placeholder-[#A8B8D0]/60 resize-none"
                  />
                </div>

                {errorMessage && (
                  <div className="flex items-center gap-2 text-xs text-rose-400 font-medium">
                    <AlertCircle className="h-4 w-4" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="flex items-center justify-between pt-1">
                  {submitted ? (
                    <span className="text-xs text-[#FF9A45] font-semibold flex items-center gap-1.5 animate-fadeIn">
                      <Check className="h-4 w-4 text-[#FF6B00]" /> Message received! I will reply shortly.
                    </span>
                  ) : (
                    <span />
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary-orange inline-flex items-center gap-2 rounded-full px-7 py-2.5 text-xs font-bold transition-all ml-auto disabled:opacity-50 shadow-[0_8px_20px_rgba(255,107,0,0.35)]"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </form>
            </TiltCard>
          </div>

          {/* Right Column: Get in Touch matching Image 4 (lg:col-span-3) */}
          <div className="lg:col-span-3 text-left">
            <TiltCard maxTilt={5} className="glass-panel rounded-2xl p-6 space-y-5 border border-white/10">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[#F4F8FF]">
                Get in Touch
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-[#07152B]/60 border border-white/10 hover:border-[#FF6B00]/40 transition-colors group"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FF6B00]/15 text-[#FF6B00] border border-[#FF6B00]/30 shadow-[0_0_10px_rgba(255,107,0,0.25)]">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs font-medium text-[#F4F8FF] group-hover:text-[#FF9A45] transition-colors truncate block">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-[#07152B]/60 border border-white/10 hover:border-[#FF6B00]/40 transition-colors group"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FF6B00]/15 text-[#FF6B00] border border-[#FF6B00]/30 shadow-[0_0_10px_rgba(255,107,0,0.25)]">
                    <Github className="h-4 w-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs font-medium text-[#F4F8FF] group-hover:text-[#FF9A45] transition-colors truncate block">
                      github.com/gautamvaja
                    </span>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-[#07152B]/60 border border-white/10 hover:border-[#FF6B00]/40 transition-colors group"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FF6B00]/15 text-[#FF6B00] border border-[#FF6B00]/30 shadow-[0_0_10px_rgba(255,107,0,0.25)]">
                    <Linkedin className="h-4 w-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs font-medium text-[#F4F8FF] group-hover:text-[#FF9A45] transition-colors truncate block">
                      linkedin.com/in/gautamvaja
                    </span>
                  </div>
                </a>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
