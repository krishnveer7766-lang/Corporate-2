import { useRef } from 'react';
import { Link } from 'react-router-dom';
import AnimatedCounter from '../components/AnimatedCounter';
import Reveal from '../components/Reveal';
import { useHeroParallax } from '../hooks/useHeroParallax';
import { useHeroEntrance } from '../hooks/useHeroEntrance';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  useHeroParallax(heroRef);
  useHeroEntrance(heroRef);

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero noise" ref={heroRef} aria-label="Hero">
        <div className="hero-media parallax-media">
          <img
            className="hero-parallax-img"
            src="/gallery/plant-exterior-night.jpg"
            alt=""
            aria-hidden="true"
          />
          <div className="hero-overlay" />
          <div className="hero-grid-overlay" />
        </div>

        <div className="hero-content">
          <div className="container">
            <div className="hero-inner">

              <div className="hero-copy">
                <div className="hero-badge">
                  <Sparkle />
                  Catalytic Thermal Decomposition Plant
                </div>

                <h1 className="hero-title">
                  <span className="hero-title-line">Transforming Plastic Waste</span>
                  <span className="hero-title-line gradient-text">Into Sustainable Energy.</span>
                </h1>

                <p className="hero-sub">
                  Developing innovative Waste Disposal &amp; Energy Recovery solutions through
                  engineering, sustainability, and industrial innovation — engineered, manufactured,
                  and operated in India.
                </p>

                {/* CTAs */}
                <div className="hero-ctas">
                  <Link to="/project" className="btn btn-primary">
                    <span>Explore Our Project</span>
                    <ArrowRight size={16} />
                  </Link>
                  <Link to="/technology" className="btn btn-outline">
                    View Technology
                  </Link>
                </div>
              </div>

              {/* Stat cards */}
              <div className="hero-stats">
                {[
                  { value: 6000, suffix: '\u00a0kg', label: 'Processing capacity / day' },
                  { value: 350, suffix: '\u00a0°C', label: 'Max reaction temp' },
                  { value: 0, suffix: '', label: 'Other discharge' },
                  { value: 100, suffix: '\u00a0%', label: 'Made in India' },
                ].map((s, i) => (
                  <div key={i} className="stat-card">
                    <div className="stat-value">
                      <AnimatedCounter target={s.value} suffix={s.suffix} />
                    </div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <div className="trust-strip">
        <div className="container">
          <div className="trust-strip-inner">
            {['Make in India', 'Zero Waste Discharge', '6,000 kg / Day', 'PLC Automated', 'CPCB-Aligned Process', 'Swachh Bharat Mission'].map(t => (
              <span key={t} className="trust-item">
                <span className="trust-dot" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── THE CRISIS ── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="eyebrow">The Crisis</div>
            <h2 className="text-h1" style={{ maxWidth: '16ch' }}>
              A growing plastic waste problem India can no longer defer.
            </h2>
            <p style={{ marginTop: '1.25rem', maxWidth: '60ch', color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.8 }}>
              Only about 20% of municipal solid waste plastic is recyclable with current methods.
              The remaining ~80% is landfilled or openly burned — polluting air, soil, and groundwater across cities.
            </p>
          </Reveal>

          <div style={{ marginTop: '3.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {[
              { icon: <AlertTriangle />, num: 8.3, suffix: 'B', unit: 'Tonnes', desc: 'Plastic produced globally since the 1950s' },
              { icon: <Recycle />, num: 60, suffix: '%', unit: 'Landfilled', desc: 'Ended up in landfill or the environment' },
              { icon: <Building2 />, num: 400, suffix: ' yrs', unit: 'Persistence', desc: 'Time to decompose in landfill conditions' },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="problem-stat-card card-glow">
                  <div style={{ color: 'var(--primary-light)', marginBottom: '1rem' }}>{s.icon}</div>
                  <div className="problem-stat-num">
                    <AnimatedCounter target={s.num} suffix={s.suffix} />
                  </div>
                  <div className="problem-stat-label">{s.unit}</div>
                  <p className="problem-stat-desc">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FROM WASTE TO WEALTH ── */}
      <section className="section" style={{ borderTop: '1px solid var(--border)', background: 'var(--surface)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <Reveal>
                <div className="eyebrow">From Waste to Wealth</div>
                <h2 className="text-h1">One catalytic process. Three high-value outputs.</h2>
                <p style={{ marginTop: '1.25rem', color: 'var(--muted)', lineHeight: 1.8 }}>
                  Our Catalytic Thermal Decomposition (CTD) reactor breaks long polymer chains into shorter
                  hydrocarbons in an oxygen-free environment — producing usable fuel, carbon, and gas with zero other discharge.
                </p>
                <Link to="/technology" className="btn btn-outline" style={{ marginTop: '2rem' }}>
                  See how the process works <ArrowRight size={15} />
                </Link>
              </Reveal>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
              {[
                { icon: <Flame />, pct: '30%', name: 'Fuel Oil', desc: 'Industrial boilers, furnaces, kilns' },
                { icon: <Atom />, pct: '35%', name: 'Carbon Char', desc: 'Cement & steel kiln alternative fuel' },
                { icon: <Wind />, pct: '35%', name: 'Process Gas', desc: 'Internal plant heating loop' },
              ].map((o, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div className="output-card">
                    <div style={{ color: 'var(--primary-light)' }}>{o.icon}</div>
                    <div className="output-pct">{o.pct}</div>
                    <div className="output-name">{o.name}</div>
                    <p className="output-desc">{o.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FLAGSHIP PROJECT ── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <Reveal>
              <div className="plant-img-wrap aspect-photo">
                <img
                  src="/gallery/plant-exterior-night.jpg"
                  alt="T & M Industries CTD plant exterior at night with reactor pipework"
                  loading="lazy"
                />
                <div className="plant-img-caption">
                  <div style={{ fontSize: '.65rem', textTransform: 'uppercase', letterSpacing: '.22em', color: 'var(--primary-light)' }}>First flagship project</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.1rem', marginTop: '.25rem' }}>Plastic Waste Disposal &amp; Energy Recovery</div>
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <div className="eyebrow">Flagship Project</div>
                <h2 className="text-h1">Engineered for municipal and industrial non-recyclable plastics.</h2>
                <p style={{ marginTop: '1.25rem', color: 'var(--muted)', lineHeight: 1.8 }}>
                  Our 6,000 kg/day CTD plant accepts mixed MSW plastic fraction, multilayer packaging (MLP),
                  and industrial residues that today end up in landfill or open burning.
                </p>
                <Link to="/project" className="btn btn-primary" style={{ marginTop: '2rem' }}>
                  <span>View project details</span>
                  <ArrowRight size={16} />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── PLANT SYSTEMS ── */}
      <section className="section" style={{ borderTop: '1px solid var(--border)', background: 'var(--surface)' }}>
        <div className="container">
          <Reveal>
            <div className="eyebrow">Engineered for Safety</div>
            <h2 className="text-h1" style={{ maxWidth: '16ch' }}>Industrial-grade plant systems.</h2>
            <p style={{ marginTop: '1rem', maxWidth: '56ch', color: 'var(--muted)', lineHeight: 1.8 }}>
              Every reactor is built around documented safety and emission-control systems aligned with CPCB process guidelines.
            </p>
          </Reveal>

          <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {[
              { icon: <Cpu />, title: 'PLC Automation', desc: 'Real-time monitoring & control' },
              { icon: <Gauge />, title: 'Oxygen Sensors', desc: 'Optimal decomposition & safety' },
              { icon: <Gauge />, title: 'Pressure Sensors', desc: 'Reactor integrity assurance' },
              { icon: <Filter />, title: 'Wet Scrubber', desc: 'Multi-stage emission control' },
              { icon: <ShieldCheck />, title: 'Nitrogen Purging', desc: 'Safe start-up & shutdown' },
              { icon: <AlertTriangle />, title: 'Emergency Vent', desc: 'Pressure relief safeguard' },
            ].map((f, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="feature-card">
                  <div className="feature-icon">{f.icon}</div>
                  <div className="feature-title">{f.title}</div>
                  <p className="feature-desc">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUSTAINABILITY PILLARS ── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="eyebrow">Impact</div>
            <h2 className="text-h1" style={{ maxWidth: '18ch' }}>Sustainability built into every system.</h2>
            <p style={{ marginTop: '1rem', maxWidth: '56ch', color: 'var(--muted)', lineHeight: 1.8 }}>
              Beyond the engineering, our project supports four measurable outcomes for the communities and industries we work with.
            </p>
          </Reveal>

          <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {[
              { icon: <Building2 />, title: 'Cleaner Cities', desc: 'Diverts plastic away from urban landfill and open burning.' },
              { icon: <Recycle />, title: 'Reduced Landfill', desc: 'Targets the 80% MSW plastic fraction current recycling cannot handle.' },
              { icon: <Leaf />, title: 'Resource Recovery', desc: 'Converts waste into usable fuel, carbon and gas — circular economy.' },
              { icon: <Users />, title: 'Employment Support', desc: 'Direct and indirect jobs across collection, segregation and plant ops.' },
            ].map((p, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="pillar-card">
                  <div className="pillar-icon">{p.icon}</div>
                  <div className="pillar-title">{p.title}</div>
                  <p className="pillar-desc">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div style={{ marginTop: '2.5rem' }}>
            <Link to="/sustainability" style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', color: 'var(--primary-light)', transition: 'color .2s' }}>
              Explore our sustainability framework <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="section">
        <div className="container">
          <Reveal variant="scale">
            <div className="cta-band noise">
              <div className="cta-band-bg parallax-media">
                <img className="hero-parallax-img" src="/gallery/plant-interior-reactors.jpg" alt="" aria-hidden="true" />
                <div className="cta-band-overlay" />
              </div>
              <div className="cta-band-content">
                <div style={{ fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: '.22em', color: 'var(--primary-light)' }}>
                  Partner with T &amp; M Industries
                </div>
                <h3 style={{ marginTop: '1rem', fontSize: 'clamp(1.75rem, 3vw, 3rem)', fontFamily: 'var(--font-display)', fontWeight: 700, lineHeight: 1.1 }}>
                  Partner with us for cleaner cities and responsible industrial growth.
                </h3>
                <p style={{ marginTop: '1rem', color: 'var(--muted)', maxWidth: '44ch' }}>
                  Municipal bodies, industrial customers, and investors — let's discuss how CTD plants can address your plastic waste streams.
                </p>
                <Link to="/contact" className="btn btn-primary" style={{ marginTop: '2rem', fontSize: '1rem', padding: '.9rem 2rem' }}>
                  <span>Start the conversation</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── DOWNLOADS ── */}
      <section className="section" style={{ borderTop: '1px solid var(--border)', background: 'var(--surface)' }}>
        <div className="container">
          <Reveal>
            <div className="eyebrow">Technical Documentation</div>
            <h2 className="text-h2" style={{ maxWidth: '20ch' }}>Resources to download.</h2>
          </Reveal>

          <div style={{ marginTop: '2.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem' }}>
            <Reveal delay={100}>
              <a href="/docs/project-profile-plastic-waste-energy.pdf" download className="dl-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flex: 1 }}>
                  <div className="dl-icon"><FilePdf /></div>
                  <div>
                    <div className="dl-title">Project Profile</div>
                    <div className="dl-sub">Plastic Waste Disposal &amp; Energy Recovery — full technical PDF</div>
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
                    <div className="dl-sub">13-slide overview of our CTD plant and process</div>
                    <div className="dl-size">16 MB · PPTX</div>
                  </div>
                </div>
                <div className="dl-arrow"><ArrowRight size={18} /></div>
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Inline icon components ── */
function ArrowRight({ size }: { size: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>;
}
function Sparkle() {
  return <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>;
}
function AlertTriangle() {
  return <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4M12 17h.01"/></svg>;
}
function Recycle() {
  return <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"/><path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"/><path d="m14 16-3 3 3 3"/><path d="M8.293 13.596 7.196 9.5 3.1 10.598"/><path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"/><path d="m13.378 9.633 4.096 1.098 1.097-4.096"/></svg>;
}
function Building2() {
  return <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 22V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v17"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-2"/><path d="M10 8h4M10 12h4M14 21v-3a2 2 0 0 0-4 0v3"/></svg>;
}
function Leaf() {
  return <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>;
}
function Users() {
  return <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
}
function Flame() {
  return <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/></svg>;
}
function Atom() {
  return <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="1"/><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"/><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"/></svg>;
}
function Wind() {
  return <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"/><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"/><path d="M9.8 4.4A2 2 0 1 1 11 8H2"/></svg>;
}
function Cpu() {
  return <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M7 2v2M17 2v2M7 20v2M17 20v2M2 7h2M20 7h2M2 17h2M20 17h2"/></svg>;
}
function Gauge() {
  return <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>;
}
function Filter() {
  return <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"/></svg>;
}
function ShieldCheck() {
  return <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>;
}
function FilePdf() {
  return <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8.4a2.4 2.4 0 0 1 1.7.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M12 18v-6m-3 3 3 3 3-3"/></svg>;
}
function Presentation() {
  return <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/></svg>;
}
