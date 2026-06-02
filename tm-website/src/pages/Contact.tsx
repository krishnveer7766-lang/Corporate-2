import { useState } from 'react';
import type { FormEvent } from 'react';
import Reveal from '../components/Reveal';

export default function Contact() {
  const [form, setForm] = useState({
    name: '', org: '', email: '', phone: '',
    inquiry: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`[${form.inquiry || 'General Inquiry'}] ${form.name} — T&M Industries Website`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nOrganisation: ${form.org}\nEmail: ${form.email}\nPhone: ${form.phone}\nInquiry Type: ${form.inquiry}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:tandmindustriespvtltd.422@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero noise">
        <div className="page-hero-bg">
          <img src="/gallery/plant-exterior-night.jpg" alt="" aria-hidden="true" />
          <div className="page-hero-overlay" />
        </div>
        <div className="page-hero-content">
          <div className="container">
            <Reveal>
              <div className="eyebrow">Contact</div>
              <h1 className="text-h1">Contact Us</h1>
              <p style={{ marginTop: '1rem', maxWidth: '50ch', color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                Discuss partnerships, project inquiries, and technical consultations —
                we welcome municipal bodies, industrial customers, and investors.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact cards + Form */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            {/* Contact Details */}
            <div>
              <Reveal>
                <div className="eyebrow">Get in Touch</div>
                <h2 className="text-h2">Reach us directly.</h2>
              </Reveal>

              <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Reveal delay={80}>
                  <a href="mailto:tandmindustriespvtltd.422@gmail.com" className="card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', textDecoration: 'none' }}>
                    <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: 'var(--radius-sm)', background: 'rgba(61,139,74,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-light)', flexShrink: 0 }}>
                      <Mail size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '.65rem', textTransform: 'uppercase', letterSpacing: '.16em', color: 'var(--muted)', marginBottom: '.3rem' }}>Email</div>
                      <div style={{ fontSize: '.9rem', wordBreak: 'break-all' }}>tandmindustriespvtltd.422@gmail.com</div>
                    </div>
                  </a>
                </Reveal>

                <Reveal delay={160}>
                  <div className="card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: 'var(--radius-sm)', background: 'rgba(61,139,74,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-light)', flexShrink: 0 }}>
                      <Phone size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '.65rem', textTransform: 'uppercase', letterSpacing: '.16em', color: 'var(--muted)', marginBottom: '.3rem' }}>Phone</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '.25rem' }}>
                        <a href="tel:+917698245060" style={{ fontSize: '.9rem', color: 'var(--fg)' }}>+91 76982 45060</a>
                        <a href="tel:+918128243031" style={{ fontSize: '.9rem', color: 'var(--fg)' }}>+91 81282 43031</a>
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={240}>
                  <div className="card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: 'var(--radius-sm)', background: 'rgba(61,139,74,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-light)', flexShrink: 0 }}>
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '.65rem', textTransform: 'uppercase', letterSpacing: '.16em', color: 'var(--muted)', marginBottom: '.3rem' }}>Registered Office</div>
                      <div style={{ fontSize: '.9rem', lineHeight: 1.7 }}>
                        Block No. F-112, Nandan Arcade,<br/>
                        Lunawada, Panch Mahals,<br/>
                        Gujarat – 389230, India
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={320}>
                  <div className="card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: 'var(--radius-sm)', background: 'rgba(61,139,74,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-light)', flexShrink: 0 }}>
                      <Clock size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '.65rem', textTransform: 'uppercase', letterSpacing: '.16em', color: 'var(--muted)', marginBottom: '.3rem' }}>Business Hours</div>
                      <div style={{ fontSize: '.9rem', lineHeight: 1.7 }}>Monday – Saturday<br/>9:00 AM – 6:00 PM IST</div>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={400}>
                  <div className="card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: 'var(--radius-sm)', background: 'rgba(61,139,74,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-light)', flexShrink: 0 }}>
                      <Globe size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '.65rem', textTransform: 'uppercase', letterSpacing: '.16em', color: 'var(--muted)', marginBottom: '.3rem' }}>Website</div>
                      <div style={{ fontSize: '.9rem' }}>tandmindustriespvtltd.com</div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Contact Form */}
            <Reveal delay={150}>
              <div className="card" style={{ padding: '2.25rem' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.15rem', marginBottom: '1.75rem' }}>
                  Send us a message
                </div>

                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                    <div style={{ color: 'var(--primary-light)', fontSize: '2.5rem', marginBottom: '1rem' }}>✓</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.1rem', marginBottom: '.5rem' }}>
                      Your email client has opened
                    </div>
                    <p style={{ color: 'var(--muted)', fontSize: '.875rem' }}>
                      Please send the pre-filled email to complete your inquiry.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-name">Full Name *</label>
                        <input
                          id="contact-name" name="name" type="text" required
                          className="form-input" placeholder="Your name"
                          value={form.name} onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-org">Organisation</label>
                        <input
                          id="contact-org" name="org" type="text"
                          className="form-input" placeholder="Company / Body"
                          value={form.org} onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-email">Email *</label>
                        <input
                          id="contact-email" name="email" type="email" required
                          className="form-input" placeholder="you@example.com"
                          value={form.email} onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-phone">Phone</label>
                        <input
                          id="contact-phone" name="phone" type="tel"
                          className="form-input" placeholder="+91 XXXXX XXXXX"
                          value={form.phone} onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-inquiry">Inquiry Type *</label>
                      <select
                        id="contact-inquiry" name="inquiry" required
                        className="form-select"
                        value={form.inquiry} onChange={handleChange}
                      >
                        <option value="">Select inquiry type</option>
                        <option value="Municipal Partnership">Municipal Partnership</option>
                        <option value="Industrial Supply">Industrial Supply</option>
                        <option value="Investment">Investment</option>
                        <option value="Media">Media</option>
                        <option value="Technical Consultation">Technical Consultation</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-message">Message *</label>
                      <textarea
                        id="contact-message" name="message" required
                        className="form-textarea" placeholder="Describe your inquiry..."
                        value={form.message} onChange={handleChange}
                      />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start', fontSize: '.95rem', padding: '.85rem 2rem' }}>
                      <span>Send Message</span>
                      <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                    </button>

                    <p style={{ fontSize: '.75rem', color: 'var(--muted-2)' }}>
                      * This will open your email client with a pre-filled message.
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="map-wrap">
              <iframe
                title="T & M Industries Location — Lunawada, Gujarat"
                src="https://www.openstreetmap.org/export/embed.html?bbox=73.55%2C23.12%2C73.62%2C23.16&layer=mapnik&marker=23.1385%2C73.5851"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p style={{ marginTop: '.75rem', fontSize: '.75rem', color: 'var(--muted-2)', textAlign: 'center' }}>
              Block No. F-112, Nandan Arcade, Lunawada, Panch Mahals, Gujarat – 389230 · 
              <a href="https://www.openstreetmap.org/?mlat=23.1385&mlon=73.5851#map=14/23.1385/73.5851" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-light)', marginLeft: '.35rem' }}>
                View larger map
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Mail({ size }: { size: number }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>; }
function Phone({ size }: { size: number }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>; }
function MapPin({ size }: { size: number }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>; }
function Clock({ size }: { size: number }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>; }
function Globe({ size }: { size: number }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>; }
