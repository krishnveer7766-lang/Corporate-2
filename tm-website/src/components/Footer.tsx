import { NavLink } from 'react-router-dom';
import CompanyName from './CompanyName';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div className="footer-logo">
              <img src="/logo.png" alt="" className="footer-logo-mark" />
              <CompanyName variant="footer" />
            </div>
            <p style={{ fontSize: '.65rem', textTransform: 'uppercase', letterSpacing: '.14em', color: 'var(--muted)', marginBottom: '1rem' }}>
              Transforming Plastic Waste Into Sustainable Energy
            </p>
            <p className="footer-tagline">
              Engineering-driven catalytic thermal decomposition systems that convert non-recyclable plastic waste
              into fuel oil, carbon char, and process gas — supporting cleaner cities and Make in India sustainable infrastructure.
            </p>
            <div className="footer-badges">
              {['Make in India', 'Swachh Bharat', 'CPCB-Aligned', 'Zero Discharge'].map(b => (
                <span key={b} className="badge">{b}</span>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <p className="footer-col-title">Navigate</p>
            <ul className="footer-links">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/technology', label: 'Technology' },
                { to: '/project', label: 'Project' },
                { to: '/sustainability', label: 'Sustainability' },
                { to: '/contact', label: 'Contact' },
              ].map(l => (
                <li key={l.to}><NavLink to={l.to} end={l.to === '/'}>{l.label}</NavLink></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="footer-col-title">Reach Us</p>
            <ul className="footer-contact-list">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Block No. F-112, Nandan Arcade, Lunawada,<br/>Panch Mahals, Gujarat – 389230, India</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
                <span>
                  <a href="tel:+917698245060">+91 76982 45060</a><br/>
                  <a href="tel:+918128243031">+91 81282 43031</a>
                </span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                <a href="mailto:tandmindustriespvtltd.422@gmail.com" style={{ wordBreak: 'break-all' }}>
                  tandmindustriespvtltd.422@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2022–2026 T &amp; M Industries Pvt. Ltd. All rights reserved.</p>
          <div className="footer-ext-links">
            <a href="http://cpcb.nic.in/plastic-waste/" target="_blank" rel="noopener noreferrer">CPCB</a>
            <a href="http://swachhbharatmission.gov.in/sbmcms/index.htm" target="_blank" rel="noopener noreferrer">Swachh Bharat Mission</a>
            <span style={{ color: 'var(--muted-2)', fontSize: '.8rem' }}>CIN: Unlisted Pvt.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
