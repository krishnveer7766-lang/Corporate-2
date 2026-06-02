import Reveal from '../components/Reveal';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero noise">
        <div className="page-hero-bg">
          <img src="/gallery/plant-interior-reactors.jpg" alt="" aria-hidden="true" />
          <div className="page-hero-overlay" />
        </div>
        <div className="page-hero-content">
          <div className="container">
            <Reveal>
              <div className="eyebrow">About Us</div>
              <h1 className="text-h1">About T &amp; M Industries</h1>
              <p style={{ marginTop: '1rem', maxWidth: '52ch', color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                Engineering-led CleanTech for industrial sustainability — built, designed, and operated in India.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Company Facts */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <Reveal>
              <div className="eyebrow">Company Profile</div>
              <h2 className="text-h2">The organisation behind the plant.</h2>
              <p style={{ marginTop: '1rem', color: 'var(--muted)', lineHeight: 1.8 }}>
                T &amp; M Industries Private Limited was incorporated in April 2022 with a focused vision to address
                India's growing challenge of non-recyclable plastic waste through engineering-led catalytic
                thermal decomposition technology.
              </p>
            </Reveal>

            <Reveal delay={150}>
              <div className="card">
                <table className="fact-table">
                  <tbody>
                    {[
                      ['Legal Name', 'T & M Industries Private Limited'],
                      ['Type', 'Unlisted Private Company'],
                      ['Incorporated', '13 April 2022'],
                      ['Industry', 'CleanTech & Sustainable Energy'],
                      ['CIN', 'Unlisted Pvt.'],
                      ['Address', 'Block No. F-112, Nandan Arcade, Lunawada, Panch Mahals, Gujarat – 389230, India'],
                      ['Email', 'tandmindustriespvtltd.422@gmail.com'],
                      ['Phone', '+91 76982 45060 / +91 81282 43031'],
                    ].map(([k, v]) => (
                      <tr key={k}>
                        <td>{k}</td>
                        <td>{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section" style={{ borderTop: '1px solid var(--border)', background: 'var(--surface)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <Reveal>
                <div className="eyebrow">Our Story</div>
                <h2 className="text-h2">Engineering India's waste recovery future.</h2>
                <p style={{ marginTop: '1rem', color: 'var(--muted)', lineHeight: 1.8 }}>
                  Established with a vision to support sustainable industrial development through engineering-led
                  approaches in waste recovery and energy solutions. Our first major initiative is the flagship
                  Plastic Waste Disposal &amp; Energy Recovery project — a Catalytic Thermal Decomposition plant
                  processing 6,000 kg of non-recyclable plastic waste per day.
                </p>
                <p style={{ marginTop: '1rem', color: 'var(--muted)', lineHeight: 1.8 }}>
                  The plant design, manufacturing, and R&amp;D are fully under the Make in India initiative —
                  with dedicated research targeting a plastic and pollution-free India, aligned with the
                  Swachh Bharat Mission and CPCB process guidelines.
                </p>
              </Reveal>
            </div>
            <Reveal delay={150}>
              <div className="plant-img-wrap" style={{ aspectRatio: '4/3' }}>
                <img
                  src="/gallery/plant-exterior-night.jpg"
                  alt="T & M Industries CTD plant exterior"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="eyebrow">Mission &amp; Vision</div>
            <h2 className="text-h2">Guided by purpose.</h2>
          </Reveal>
          <div style={{ marginTop: '2.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <Reveal delay={100}>
              <div className="card card-glow" style={{ borderLeft: '2px solid var(--primary)' }}>
                <div style={{ fontSize: '.65rem', textTransform: 'uppercase', letterSpacing: '.18em', color: 'var(--primary-light)', marginBottom: '1rem' }}>
                  Mission
                </div>
                <p style={{ fontSize: '1.1rem', fontFamily: 'var(--font-display)', fontWeight: 500, lineHeight: 1.6, color: 'var(--fg)' }}>
                  To develop sustainable waste recovery solutions through engineering innovation.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="card card-glow" style={{ borderLeft: '2px solid var(--accent)' }}>
                <div style={{ fontSize: '.65rem', textTransform: 'uppercase', letterSpacing: '.18em', color: 'var(--accent)', marginBottom: '1rem' }}>
                  Vision
                </div>
                <p style={{ fontSize: '1.1rem', fontFamily: 'var(--font-display)', fontWeight: 500, lineHeight: 1.6, color: 'var(--fg)' }}>
                  To become a trusted Indian CleanTech company focused on industrial sustainability.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Director */}
      <section className="section" style={{ borderTop: '1px solid var(--border)', background: 'var(--surface)' }}>
        <div className="container">
          <Reveal>
            <div className="eyebrow">Leadership</div>
            <h2 className="text-h2">The person behind the mission.</h2>
          </Reveal>
          <Reveal delay={150} className="stagger-1">
            <div className="director-card" style={{ marginTop: '2.5rem', maxWidth: '680px' }}>
              <div className="director-avatar">M</div>
              <div>
                <div className="director-name">Manojkumar Rameshchandra Panchal</div>
                <div className="director-role">Director — T &amp; M Industries Pvt. Ltd.</div>
                <p className="director-quote">
                  "Established with vision to support sustainable industrial development through engineering-led
                  approaches in waste recovery and energy solutions — building a foundation for a cleaner,
                  resource-efficient India."
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Make in India R&D */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="eyebrow">Make in India</div>
            <h2 className="text-h2" style={{ maxWidth: '18ch' }}>100% indigenously designed and manufactured.</h2>
          </Reveal>
          <div style={{ marginTop: '2.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            {[
              { num: '100%', label: 'Indigenous Design', desc: 'Plant machinery designed, manufactured, and deployed entirely in India.' },
              { num: 'R&D', label: 'Dedicated Research', desc: 'Ongoing R&D targeting plastic-free and pollution-free India as per national mission objectives.' },
              { num: '2022', label: 'Year Founded', desc: 'Incorporated 13 April 2022 — a young company with deep engineering conviction.' },
              { num: '6T', label: 'Daily Capacity', desc: '6,000 kg of non-recyclable plastic waste processed into fuel, carbon, and gas daily.' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="card">
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, background: 'linear-gradient(135deg, var(--accent), var(--primary-light))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {item.num}
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, marginTop: '.5rem' }}>{item.label}</div>
                  <p style={{ fontSize: '.875rem', color: 'var(--muted)', marginTop: '.35rem', lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="section" style={{ borderTop: '1px solid var(--border)', background: 'var(--surface)' }}>
        <div className="container">
          <Reveal>
            <div className="eyebrow">Documentation</div>
            <h2 className="text-h2">Download our materials.</h2>
          </Reveal>
          <div style={{ marginTop: '2.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            <Reveal delay={100}>
              <a href="/docs/project-profile-plastic-waste-energy.pdf" download className="dl-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flex: 1 }}>
                  <div className="dl-icon"><FilePdf /></div>
                  <div>
                    <div className="dl-title">Project Profile PDF</div>
                    <div className="dl-sub">Full technical project profile document</div>
                    <div className="dl-size">2.5 MB · PDF</div>
                  </div>
                </div>
                <div className="dl-arrow"><ArrowRight size={18} /></div>
              </a>
            </Reveal>
            <Reveal delay={200}>
              <a href="/docs/company-presentation.pptx" download className="dl-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flex: 1 }}>
                  <div className="dl-icon"><Presentation /></div>
                  <div>
                    <div className="dl-title">Company Presentation</div>
                    <div className="dl-sub">13-slide company overview deck</div>
                    <div className="dl-size">16 MB · PPTX</div>
                  </div>
                </div>
                <div className="dl-arrow"><ArrowRight size={18} /></div>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <Reveal>
            <h2 className="text-h2">Ready to discuss a partnership?</h2>
            <p style={{ marginTop: '1rem', color: 'var(--muted)', maxWidth: '44ch', margin: '1rem auto 2rem' }}>
              We welcome inquiries from municipal bodies, industrial customers, and potential investors.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ fontSize: '1rem', padding: '.9rem 2.25rem' }}>
              <span>Contact Us</span>
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ArrowRight({ size }: { size: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>;
}
function FilePdf() {
  return <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8.4a2.4 2.4 0 0 1 1.7.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M12 18v-6m-3 3 3 3 3-3"/></svg>;
}
function Presentation() {
  return <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/></svg>;
}
