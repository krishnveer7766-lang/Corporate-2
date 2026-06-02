import { useState } from 'react';
import Reveal from '../components/Reveal';

const accordionData = [
  {
    title: 'HAG Burner System',
    body: 'The Hot Air Generator (HAG) burner provides controlled, indirect heating to the reaction vessel. It runs on process gas recovered from the CTD reaction itself — making the system energy self-sufficient during steady-state operation.'
  },
  {
    title: 'Condenser & Fractional Distillation',
    body: 'Pyrolysis vapours pass through a multi-stage condenser system that separates fuel oil (light and heavy fractions) from non-condensable gas. Condensation temperature profiles are controlled by PLC to optimise product quality.'
  },
  {
    title: 'Non-Condensable Gas Recirculation',
    body: 'Process gas that cannot be condensed is recirculated back as fuel for the HAG burner, creating a closed internal energy loop. This contributes to the energy-positive nature of the operation.'
  },
  {
    title: 'Continuous vs Batch Process Vessel',
    body: 'The current plant operates on a semi-continuous basis with multiple reactor vessels operating in rotation — enabling near-continuous throughput of 6,000 kg/day while individual vessels are loaded, processed, and discharged.'
  },
  {
    title: 'Carbon Char Collection',
    body: 'Solid carbon char (approximately 35% by weight of input) is collected via a sealed discharge system, cooled, and packaged for supply as alternative fuel to cement kilns, steel plants, and similar high-temperature industrial processes.'
  },
];

export default function Technology() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

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
              <div className="eyebrow">Technology</div>
              <h1 className="text-h1">Catalytic Thermal Decomposition</h1>
              <p style={{ marginTop: '1rem', maxWidth: '56ch', color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                Advanced waste-to-energy technology converting non-recyclable plastic into three
                valuable products — with zero other discharge.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="eyebrow">The Process</div>
            <h2 className="text-h2" style={{ maxWidth: '18ch' }}>Four steps from waste to resource.</h2>
            <p style={{ marginTop: '1rem', maxWidth: '58ch', color: 'var(--muted)', lineHeight: 1.8 }}>
              The CTD process operates in an oxygen-free environment, breaking long polymer chains
              into shorter hydrocarbons through catalytic action at controlled temperatures.
            </p>
          </Reveal>

          {/* Horizontal connector on desktop */}
          <div style={{ marginTop: '3.5rem', display: 'none' }} id="process-h" />

          <div className="process-steps" style={{ marginTop: '3.5rem', maxWidth: '700px' }}>
            {[
              {
                num: '01',
                title: 'Feedstock Preparation',
                desc: 'Non-recyclable plastic waste is collected, segregated by type, cleaned, and mechanically shredded to uniform particle size for consistent thermal processing.'
              },
              {
                num: '02',
                title: 'Catalytic Treatment',
                desc: 'Shredded plastic is mixed with a proprietary catalyst that lowers the activation energy required for thermal decomposition — enhancing product yield and quality.'
              },
              {
                num: '03',
                title: 'Catalytic Thermal Conversion',
                desc: 'In a sealed, oxygen-free reactor vessel heated to up to 350°C, long polymer chains are cracked into shorter hydrocarbon chains — producing fuel vapours, carbon char, and process gas.'
              },
              {
                num: '04',
                title: 'Resource Recovery',
                desc: 'Vapours are condensed into fuel oil (30%), carbon char (35%) is collected and packaged, and non-condensable process gas (35%) is recirculated to power the plant.'
              },
            ].map((step, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="process-step">
                  <div className="step-num">{step.num}</div>
                  <div className="step-content">
                    <div className="step-title">{step.title}</div>
                    <p className="step-desc">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Pills */}
      <section style={{ padding: '2rem 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--surface)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.75rem', justifyContent: 'center' }}>
            {['Zero Waste Process', 'Low Emission Technology', 'Energy Recovery', 'Economy Solution', 'Safe & Reliable', 'CPCB-Aligned', 'PLC Controlled', 'Made in India'].map(pill => (
              <span key={pill} className="badge" style={{ color: 'var(--primary-light)', borderColor: 'rgba(93,184,93,.25)', padding: '.4rem 1.1rem' }}>
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Plant Systems */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="eyebrow">Plant Systems</div>
            <h2 className="text-h2" style={{ maxWidth: '18ch' }}>Industrial-grade safety &amp; control.</h2>
            <p style={{ marginTop: '1rem', maxWidth: '56ch', color: 'var(--muted)', lineHeight: 1.8 }}>
              Each reactor module is equipped with a documented set of safety, monitoring, and emission-control
              systems aligned with CPCB process guidelines.
            </p>
          </Reveal>

          <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            {[
              { icon: <Cpu />, title: 'Advanced PLC Control', desc: 'Programmable Logic Controllers enable real-time monitoring of temperature, pressure, and gas composition across all reactor modules simultaneously.' },
              { icon: <Gauge />, title: 'Oxygen Sensors', desc: 'Continuously verify the oxygen-free environment inside the reactor — critical for safe pyrolysis and optimal hydrocarbon yield.' },
              { icon: <Activity />, title: 'Pressure Monitoring', desc: 'Redundant pressure sensors maintain reactor integrity and trigger automatic safety responses if operating envelopes are exceeded.' },
              { icon: <Droplets />, title: 'Multi-Stage Wet Scrubber', desc: 'Stack emissions pass through a multi-stage scrubbing system that captures particulates and acid gases before any discharge.' },
              { icon: <Shield />, title: 'Nitrogen Purging', desc: 'Inert nitrogen gas purges the reactor vessel before startup and after shutdown — eliminating oxygen presence and preventing dangerous conditions.' },
              { icon: <AlertOctagon />, title: 'Emergency Vent System', desc: 'A pressure-relief safeguard designed to safely vent excess pressure during any abnormal reactor event, protecting equipment and personnel.' },
            ].map((f, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="feature-card" style={{ height: '100%' }}>
                  <div className="feature-icon">{f.icon}</div>
                  <div className="feature-title">{f.title}</div>
                  <p className="feature-desc">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Feedstock Table */}
      <section className="section" style={{ borderTop: '1px solid var(--border)', background: 'var(--surface)' }}>
        <div className="container">
          <Reveal>
            <div className="eyebrow">Accepted Feedstock</div>
            <h2 className="text-h2" style={{ maxWidth: '20ch' }}>Plastic types our plant processes.</h2>
            <p style={{ marginTop: '1rem', maxWidth: '56ch', color: 'var(--muted)', lineHeight: 1.8 }}>
              A key differentiator: our plant accepts mixed plastics and multilayer packaging (MLP) —
              the fraction that conventional recycling cannot handle.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="card" style={{ marginTop: '2.5rem', overflowX: 'auto' }}>
              <table className="feedstock-table">
                <thead>
                  <tr>
                    <th>Plastic Type</th>
                    <th>Common Examples</th>
                    <th>Recyclable?</th>
                    <th>CTD Accepted</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['PET (Type 1)', 'Water bottles, food containers', 'Partially', true],
                    ['HDPE (Type 2)', 'Milk jugs, detergent bottles', 'Yes', true],
                    ['LDPE (Type 4)', 'Shopping bags, film wrap', 'Rarely', true],
                    ['PP (Type 5)', 'Food tubs, yoghurt containers', 'Sometimes', true],
                    ['PS (Type 6)', 'Styrofoam, packaging peanuts', 'Rarely', true],
                    ['Mixed MSW Plastic', 'Municipal solid waste mixed fraction', 'No', true],
                    ['MLP (Multilayer)', 'Chips packets, sauce pouches', 'No', true],
                    ['Industrial Packaging', 'ABS, rubber-mixed, industrial residues', 'No', true],
                  ].map(([type, example, recyclable, accepted]) => (
                    <tr key={type as string}>
                      <td style={{ fontWeight: 500 }}>{type}</td>
                      <td style={{ color: 'var(--muted)' }}>{example}</td>
                      <td>
                        <span style={{ color: recyclable === 'No' ? '#e53e3e' : recyclable === 'Yes' ? 'var(--primary-light)' : 'var(--gold)', fontSize: '.875rem' }}>
                          {recyclable}
                        </span>
                      </td>
                      <td><span className="tag-green">{accepted ? '✓ Yes' : 'No'}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Technical Accordion */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="eyebrow">Engineering Details</div>
            <h2 className="text-h2" style={{ maxWidth: '20ch' }}>Technical deep dive.</h2>
          </Reveal>

          <div style={{ marginTop: '2.5rem', maxWidth: '760px' }}>
            {accordionData.map((item, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className={`accordion-item${openIdx === i ? ' open' : ''}`}>
                  <button
                    className="accordion-btn"
                    onClick={() => setOpenIdx(openIdx === i ? null : i)}
                    aria-expanded={openIdx === i}
                  >
                    {item.title}
                    <span className="accordion-icon"><Plus size={18} /></span>
                  </button>
                  <div className="accordion-body">
                    <p className="accordion-body-inner">{item.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Band */}
      <section style={{ padding: '3rem 0', background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <Reveal>
            <p style={{ fontSize: '.8rem', textTransform: 'uppercase', letterSpacing: '.18em', color: 'var(--muted)', marginBottom: '1rem' }}>
              Regulatory Alignment
            </p>
            <p style={{ color: 'var(--fg)', fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: '1.1rem', maxWidth: '52ch', margin: '0 auto 1.5rem' }}>
              Aligned with CPCB process guidelines &amp; Swachh Bharat Mission objectives
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="http://cpcb.nic.in/plastic-waste/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ fontSize: '.8rem' }}>
                CPCB Plastic Waste <ExternalLink size={12} />
              </a>
              <a href="http://swachhbharatmission.gov.in/sbmcms/index.htm" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ fontSize: '.8rem' }}>
                Swachh Bharat Mission <ExternalLink size={12} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Cpu() { return <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M7 2v2M17 2v2M7 20v2M17 20v2M2 7h2M20 7h2M2 17h2M20 17h2"/></svg>; }
function Gauge() { return <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>; }
function Activity() { return <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>; }
function Droplets() { return <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/></svg>; }
function Shield() { return <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>; }
function AlertOctagon() { return <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 9v4M12 17h.01"/><path d="M3.6 9h.01M3.6 15h.01M9 3.6v.01M15 3.6v.01M20.4 9h.01M20.4 15h.01M9 20.4v.01M15 20.4v.01M12 2l7 7v6l-7 7-7-7V9z"/></svg>; }
function Plus({ size }: { size: number }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>; }
function ExternalLink({ size }: { size: number }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>; }
