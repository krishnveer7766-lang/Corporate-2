import { useState } from 'react';
import Reveal from '../components/Reveal';
import AnimatedCounter from '../components/AnimatedCounter';
import { Link } from 'react-router-dom';

export default function Project() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxType, setLightboxType] = useState<'image' | 'video'>('image');

  function openLightbox(src: string, type: 'image' | 'video') {
    setLightboxSrc(src);
    setLightboxType(type);
  }
  function closeLightbox() { setLightboxSrc(null); }

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero noise" style={{ minHeight: '65vh' }}>
        <div className="page-hero-bg">
          <img src="/gallery/plant-exterior-night.jpg" alt="T & M Industries CTD plant exterior at night" />
          <div className="page-hero-overlay" style={{ background: 'linear-gradient(to bottom, rgba(10,15,13,.6), rgba(10,15,13,.98))' }} />
        </div>
        <div className="page-hero-content">
          <div className="container">
            <Reveal>
              <div className="eyebrow">Flagship Project</div>
              <h1 className="text-h1">Plastic Waste Disposal &amp;<br/>Energy Recovery</h1>
              <p style={{ marginTop: '1rem', maxWidth: '56ch', color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                India's first indigenously designed Catalytic Thermal Decomposition plant — processing
                6,000 kg of non-recyclable municipal and industrial plastic waste per day.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Challenge vs Solution */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <Reveal>
              <div className="card" style={{ borderLeft: '2px solid #e53e3e', background: 'rgba(229,62,62,0.04)' }}>
                <div style={{ fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: '.18em', color: '#fc8181', marginBottom: '1.25rem' }}>The Challenge</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.3rem', marginBottom: '1rem' }}>80% of MSW plastic has no viable disposal route.</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
                  {[
                    'Mixed, multilayer, and contaminated plastic cannot be mechanically recycled',
                    'Landfilling persists for 200–400 years, leaching chemicals into groundwater',
                    'Open burning generates toxic emissions — dioxins, furans, particulates',
                    'Municipal bodies lack scalable, compliant disposal infrastructure',
                  ].map(item => (
                    <li key={item} style={{ display: 'flex', gap: '.6rem', fontSize: '.875rem', color: 'var(--muted)', lineHeight: 1.6 }}>
                      <span style={{ color: '#fc8181', flexShrink: 0, marginTop: '2px' }}>✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="card" style={{ borderLeft: '2px solid var(--primary)', background: 'rgba(61,139,74,0.04)' }}>
                <div style={{ fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: '.18em', color: 'var(--primary-light)', marginBottom: '1.25rem' }}>Our Solution</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.3rem', marginBottom: '1rem' }}>CTD plant converts the unsolvable waste into energy.</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
                  {[
                    'Accepts all non-recyclable plastic types including MLP and mixed MSW fraction',
                    'Zero other discharge — every input becomes a product output',
                    'Operates at up to 350°C in oxygen-free reactor — no combustion, no harmful emissions',
                    'Fully CPCB-compliant process with PLC monitoring and wet scrubber stack treatment',
                  ].map(item => (
                    <li key={item} style={{ display: 'flex', gap: '.6rem', fontSize: '.875rem', color: 'var(--muted)', lineHeight: 1.6 }}>
                      <span style={{ color: 'var(--primary-light)', flexShrink: 0, marginTop: '2px' }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Capacity Big Number */}
      <section className="section" style={{ borderTop: '1px solid var(--border)', background: 'var(--surface)', textAlign: 'center' }}>
        <div className="container">
          <Reveal>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Processing Capacity</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(5rem, 12vw, 10rem)', fontWeight: 700, lineHeight: 1, background: 'linear-gradient(135deg, var(--accent), var(--primary-light), var(--primary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              <AnimatedCounter target={6000} suffix=" kg" />
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--muted)', marginTop: '.5rem', letterSpacing: '.05em' }}>
              of plastic waste processed <em style={{ fontStyle: 'normal', color: 'var(--fg)' }}>per day</em>
            </div>
            <p style={{ marginTop: '1.25rem', maxWidth: '52ch', margin: '1.25rem auto 0', color: 'var(--muted)', lineHeight: 1.8 }}>
              Municipal solid waste plastic fraction &amp; industrial residues — the types that have no other viable disposal route.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Product Yields */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="eyebrow">Product Yields</div>
            <h2 className="text-h2">Three high-value outputs. Zero waste.</h2>
            <p style={{ marginTop: '1rem', maxWidth: '56ch', color: 'var(--muted)', lineHeight: 1.8 }}>
              Every kilogram of plastic input is converted into one of three products.
              Per company technical documentation.
            </p>
          </Reveal>

          <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {[
              {
                pct: 30, icon: <Flame />,
                name: 'Fuel Oil',
                desc: 'A light hydrocarbon oil suitable for use in industrial boilers, furnaces, and kilns. Exhibits lower sulphur content compared to conventional petroleum fuels.',
                applications: ['Industrial boilers', 'Furnaces & kilns', 'Thermal power']
              },
              {
                pct: 35, icon: <Atom />,
                name: 'Carbon Char',
                desc: 'High-carbon solid recovered from the reactor. Supplied as alternative solid fuel to cement and steel manufacturing facilities.',
                applications: ['Cement kilns', 'Steel plants', 'Alternative fuel']
              },
              {
                pct: 35, icon: <Wind />,
                name: 'Process Gas',
                desc: 'Non-condensable hydrocarbon gas recirculated internally to fuel the HAG burner system — making the plant energy self-sufficient during steady-state operation.',
                applications: ['HAG burner fuel', 'Internal plant heat', 'Energy recovery']
              },
            ].map((o, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="output-card" style={{ height: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ color: 'var(--primary-light)' }}>{o.icon}</div>
                    <div className="output-pct"><AnimatedCounter target={o.pct} suffix="%" /></div>
                  </div>
                  <div className="output-name">{o.name}</div>
                  <p className="output-desc">{o.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem', marginTop: '.5rem' }}>
                    {o.applications.map(a => (
                      <span key={a} className="tag-green" style={{ fontSize: '.65rem' }}>{a}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="section" style={{ borderTop: '1px solid var(--border)', background: 'var(--surface)' }}>
        <div className="container">
          <Reveal>
            <div className="eyebrow">Process Flow</div>
            <h2 className="text-h2">From city waste to clean energy.</h2>
          </Reveal>

          {/* Flow diagram */}
          <Reveal delay={100}>
            <div style={{ marginTop: '3rem', overflowX: 'auto', paddingBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0', minWidth: '600px' }}>
                {[
                  'City Waste Collection',
                  'Waste Segregation',
                  'CTD Plant Processing',
                  'Energy Recovery'
                ].map((node, i, arr) => (
                  <>
                    <div key={node} className="flow-node" style={{ flex: 1, textAlign: 'center' }}>
                      <div style={{ fontSize: '.65rem', color: 'var(--primary-light)', textTransform: 'uppercase', letterSpacing: '.16em', marginBottom: '.35rem' }}>Step {i + 1}</div>
                      {node}
                    </div>
                    {i < arr.length - 1 && (
                      <div key={`arrow-${i}`} className="flow-chevron" style={{ padding: '0 .25rem', flexShrink: 0 }}>
                        <ChevronRight size={20} />
                      </div>
                    )}
                  </>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Side benefits */}
          <div style={{ marginTop: '2.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {[
              { icon: <Leaf />, label: 'Reduces Landfill' },
              { icon: <Cloud />, label: 'Lower Emissions' },
              { icon: <RefreshCw />, label: 'Resource Recovery' },
              { icon: <Heart />, label: 'Social Impact' },
            ].map((b, i) => (
              <Reveal key={i} delay={i * 80}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', padding: '1rem', background: 'rgba(61,139,74,.06)', border: '1px solid rgba(61,139,74,.15)', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ color: 'var(--primary-light)', flexShrink: 0 }}>{b.icon}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '.9rem' }}>{b.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="eyebrow">Plant Gallery</div>
            <h2 className="text-h2">The plant in operation.</h2>
            <p style={{ marginTop: '1rem', maxWidth: '52ch', color: 'var(--muted)', lineHeight: 1.8 }}>
              Real footage and photography from the T &amp; M Industries CTD facility.
            </p>
          </Reveal>

          <div className="gallery-grid" style={{ marginTop: '2.5rem' }}>
            {/* Images */}
            <Reveal delay={0}>
              <div className="gallery-item" onClick={() => openLightbox('/gallery/plant-exterior-night.jpg', 'image')}>
                <img src="/gallery/plant-exterior-night.jpg" alt="CTD plant exterior at night — reactors and pipework visible" loading="lazy" />
                <div className="gallery-item-overlay">
                  <div style={{ color: '#fff', fontSize: '.8rem', textAlign: 'center', padding: '0 1rem' }}>Plant Exterior — Night</div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="gallery-item" onClick={() => openLightbox('/gallery/plant-interior-reactors.jpg', 'image')}>
                <img src="/gallery/plant-interior-reactors.jpg" alt="CTD plant interior — insulated pipes, reactors, high-bay lights" loading="lazy" />
                <div className="gallery-item-overlay">
                  <div style={{ color: '#fff', fontSize: '.8rem', textAlign: 'center', padding: '0 1rem' }}>Plant Interior — Reactor Hall</div>
                </div>
              </div>
            </Reveal>
            {/* Videos */}
            {[
              { src: '/gallery/plant-tour-1.mp4', label: 'Plant Tour — Part 1' },
              { src: '/gallery/plant-tour-2.mp4', label: 'Plant Tour — Part 2' },
              { src: '/gallery/plant-tour-3.mp4', label: 'Plant Tour — Part 3' },
            ].map((v, i) => (
              <Reveal key={i} delay={160 + i * 80}>
                <div className="gallery-item" onClick={() => openLightbox(v.src, 'video')}>
                  <video src={v.src} muted playsInline preload="metadata" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div className="gallery-item-overlay">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.75rem' }}>
                      <div className="play-icon"><Play size={20} /></div>
                      <div style={{ color: '#fff', fontSize: '.8rem' }}>{v.label}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Government alignment */}
      <section className="section" style={{ borderTop: '1px solid var(--border)', background: 'var(--surface)' }}>
        <div className="container">
          <Reveal>
            <div className="eyebrow">Mission Alignment</div>
            <h2 className="text-h2" style={{ maxWidth: '20ch' }}>Aligned with national waste management objectives.</h2>
          </Reveal>
          <div style={{ marginTop: '2.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            {[
              { label: 'Swachh Bharat Mission', desc: 'Our plant directly supports the MSW plastic disposal mandate, diverting non-recyclable fractions from landfill and open burning.' },
              { label: 'Make in India', desc: 'Plant design, fabrication, catalyst research, and deployment are 100% carried out within India — supporting indigenous manufacturing.' },
              { label: 'CPCB Process Guidelines', desc: 'The CTD process is designed in line with CPCB guidelines for plastic waste processing — including emission controls, oxygen monitoring, and safe operation protocols.' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="card">
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: '.6rem' }}>{item.label}</div>
                  <p style={{ fontSize: '.875rem', color: 'var(--muted)', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="eyebrow">Project Documentation</div>
            <h2 className="text-h2">Download project materials.</h2>
          </Reveal>
          <div style={{ marginTop: '2.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            <Reveal delay={100}>
              <a href="/docs/project-profile-plastic-waste-energy.pdf" download className="dl-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flex: 1 }}>
                  <div className="dl-icon"><FilePdf /></div>
                  <div><div className="dl-title">Project Profile PDF</div><div className="dl-sub">Full technical project document</div><div className="dl-size">2.5 MB · PDF</div></div>
                </div>
                <div className="dl-arrow"><ArrowRight size={18} /></div>
              </a>
            </Reveal>
            <Reveal delay={200}>
              <a href="/docs/company-presentation.pptx" download className="dl-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flex: 1 }}>
                  <div className="dl-icon"><Presentation /></div>
                  <div><div className="dl-title">Company Presentation</div><div className="dl-sub">13-slide company overview</div><div className="dl-size">16 MB · PPTX</div></div>
                </div>
                <div className="dl-arrow"><ArrowRight size={18} /></div>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <Reveal>
            <h2 className="text-h2">Interested in this project?</h2>
            <p style={{ marginTop: '1rem', color: 'var(--muted)', maxWidth: '44ch', margin: '1rem auto 2rem' }}>
              We welcome municipal bodies, industrial waste generators, and investors to discuss project partnerships.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ fontSize: '1rem', padding: '.9rem 2.25rem' }}>
              <span>Contact Us</span>
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Lightbox */}
      <div className={`lightbox${lightboxSrc ? ' open' : ''}`} onClick={closeLightbox} role="dialog" aria-modal="true" aria-label="Media viewer">
        <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">✕</button>
        {lightboxSrc && lightboxType === 'image' && (
          <img src={lightboxSrc} alt="Plant view" onClick={e => e.stopPropagation()} />
        )}
        {lightboxSrc && lightboxType === 'video' && (
          <video src={lightboxSrc} controls autoPlay style={{ maxWidth: '90vw', maxHeight: '90vh', borderRadius: '12px' }} onClick={e => e.stopPropagation()} />
        )}
      </div>
    </>
  );
}

function Flame() { return <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/></svg>; }
function Atom() { return <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="1"/><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"/><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"/></svg>; }
function Wind() { return <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"/><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"/><path d="M9.8 4.4A2 2 0 1 1 11 8H2"/></svg>; }
function Leaf() { return <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>; }
function Cloud() { return <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>; }
function RefreshCw() { return <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>; }
function Heart() { return <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>; }
function Play({ size }: { size: number }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="5,3 19,12 5,21"/></svg>; }
function ChevronRight({ size }: { size: number }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m9 18 6-6-6-6"/></svg>; }
function FilePdf() { return <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8.4a2.4 2.4 0 0 1 1.7.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M12 18v-6m-3 3 3 3 3-3"/></svg>; }
function Presentation() { return <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/></svg>; }
function ArrowRight({ size }: { size: number }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>; }
