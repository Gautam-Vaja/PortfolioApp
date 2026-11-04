import React, { useState, useEffect } from 'react';

export default function ContactSheet() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = document.querySelectorAll<HTMLElement>('#contact .rv');

    if (calm) {
      elements.forEach((e) => e.classList.add('in'));
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((x) => {
            if (x.isIntersecting) {
              x.target.classList.add('in');
              observer.unobserve(x.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      elements.forEach((e) => observer.observe(e));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    // Trigger user mail client
    const mailtoUrl = `mailto:gautamvaja403@gmail.com?subject=${encodeURIComponent(
      'Portfolio message from ' + name
    )}&body=${encodeURIComponent(message + '\n\n' + name + ' (' + email + ')')}`;

    window.location.href = mailtoUrl;

    try {
      const stored = JSON.parse(localStorage.getItem('gautam_messages') || '[]');
      stored.push({ name, email, message, date: new Date().toISOString() });
      localStorage.setItem('gautam_messages', JSON.stringify(stored));
    } catch (err) {
      // ignore
    }

    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="sheet lt" id="contact" style={{ zIndex: 6 }}>
      <div className="w ct">
        {/* Left Column: Headline & Direct Contact Links */}
        <div style={{ position: 'relative' }}>
          <h2 className="rv">Let’s get in touch</h2>
          <a className="m" href="mailto:gautamvaja403@gmail.com">
            gautamvaja403@gmail.com
          </a>
          <a className="m" href="tel:+918320000411">
            +91 8320000411
          </a>
          <p style={{ margin: '10px 0 0', opacity: 0.75 }}>
            Ahmedabad, Gujarat
          </p>
        </div>

        {/* Right Column: Underline Form & 3D Anchors */}
        <div style={{ position: 'relative' }}>
          <form id="f" onSubmit={handleSubmit}>
            <input
              id="fn"
              placeholder="Your name"
              required
              aria-label="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              id="fe"
              type="email"
              placeholder="Your email"
              required
              aria-label="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              id="fm"
              rows={4}
              placeholder="Your message"
              required
              aria-label="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '6px' }}>
              <button
                className="pill"
                type="submit"
                style={{ justifySelf: 'start' }}
              >
                Send message
              </button>

              {submitted && (
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#00a8ff' }}>
                  ✓ Message prepared!
                </span>
              )}
            </div>
          </form>

          {/* 3D Floating Blob */}
          <div
            className="fl"
            data-3d="blob"
            data-par="-1"
            style={{
              right: '-2vw',
              top: '-170px',
              width: 'min(15vw, 150px)',
            }}
          />
        </div>

        {/* 3D Floating Knot 2 */}
        <div
          className="fl"
          data-3d="knot2"
          data-par="1"
          style={{
            left: 'auto',
            right: '4vw',
            marginTop: '-30px',
            width: 'min(13vw, 130px)',
            position: 'absolute',
          }}
        />
      </div>
    </section>
  );
}
