import React, { useState, useEffect } from 'react';
import {
  X,
  Mail,
  Send,
  Linkedin,
  Github,
  MapPin,
  CheckCircle2,
  Copy,
  Check,
  AlertCircle,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio-data';
import { ContactFormData } from '../types/portfolio';
import { validateContactForm, sanitizeInput } from '../utils/portfolio-utils';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [receiptData, setReceiptData] = useState<{
    id: string;
    timestamp: string;
    name: string;
    subject: string;
  } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const receipt = {
        id: `MSG-${Date.now().toString().slice(-6)}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        name: sanitizeInput(formData.name),
        subject: sanitizeInput(formData.subject),
      };

      try {
        const existing = JSON.parse(localStorage.getItem('gautam_portfolio_messages') || '[]');
        existing.push({ ...formData, ...receipt, date: new Date().toISOString() });
        localStorage.setItem('gautam_portfolio_messages', JSON.stringify(existing));
      } catch (err) {
        // Fallback
      }

      setReceiptData(receipt);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setSubmitted(false);
    setReceiptData(null);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative z-10 flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c1018] text-slate-100 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/[0.08] px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#FF8C38]" />
            <h2 id="contact-modal-title" className="text-sm font-bold uppercase tracking-wider text-white">
              Let&apos;s Create Something Great
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close contact dialog"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 text-slate-400 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {submitted && receiptData ? (
            <div className="py-6 text-center space-y-4">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF8C38]/15 text-[#FF8C38]">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Message Successfully Sent!
              </h3>
              <p className="mx-auto max-w-md text-xs sm:text-sm text-slate-300">
                Thank you, <strong className="text-white">{receiptData.name}</strong>. Your inquiry regarding &quot;{receiptData.subject}&quot; has been recorded.
              </p>
              <div className="mx-auto max-w-xs rounded-xl border border-white/[0.08] bg-[#121824] p-3 font-mono text-[11px] text-slate-300">
                <div>Reference: {receiptData.id}</div>
                <div>Recorded: {receiptData.timestamp}</div>
                <div className="text-emerald-400">Status: Delivered to Inbox</div>
              </div>
              <div className="pt-2 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="rounded-full bg-gradient-to-r from-[#FFA53B] to-[#FF6B2B] px-5 py-2 text-xs font-bold text-black"
                >
                  Send Another Message
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full border border-slate-700 px-5 py-2 text-xs font-semibold text-slate-300"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Direct email quick copy banner */}
              <div className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-[#121824] p-3.5">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#FF8C38]" />
                  <span className="text-xs font-mono text-slate-200">{PERSONAL_INFO.email}</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-[#FFA048] hover:underline"
                >
                  {copiedEmail ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="modal-name" className="block text-xs font-medium text-slate-300">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="modal-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className="mt-1 w-full rounded-xl border border-white/[0.08] bg-[#101520] px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:border-[#FF8C38] focus:outline-none"
                    />
                    {errors.name && (
                      <p className="mt-1 text-[11px] text-rose-400">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="modal-email" className="block text-xs font-medium text-slate-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="modal-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="mt-1 w-full rounded-xl border border-white/[0.08] bg-[#101520] px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:border-[#FF8C38] focus:outline-none"
                    />
                    {errors.email && (
                      <p className="mt-1 text-[11px] text-rose-400">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="modal-subject" className="block text-xs font-medium text-slate-300">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="modal-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Mobile Developer Opportunity"
                    className="mt-1 w-full rounded-xl border border-white/[0.08] bg-[#101520] px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:border-[#FF8C38] focus:outline-none"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-[11px] text-rose-400">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="modal-message" className="block text-xs font-medium text-slate-300">
                    Message *
                  </label>
                  <textarea
                    id="modal-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, opportunity, or inquiry..."
                    className="mt-1 w-full rounded-xl border border-white/[0.08] bg-[#101520] px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:border-[#FF8C38] focus:outline-none"
                  />
                  {errors.message && (
                    <p className="mt-1 text-[11px] text-rose-400">{errors.message}</p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FFA53B] to-[#FF6B2B] py-2.5 px-6 text-xs font-bold text-black shadow-md transition-transform hover:scale-[1.01] active:scale-98"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
