import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import CompanyName from './CompanyName';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/technology', label: 'Technology' },
  { to: '/project', label: 'Project' },
  { to: '/sustainability', label: 'Sustainability' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  return (
    <>
      <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-inner">
            <NavLink to="/" className="nav-logo" aria-label="T & M Industries Pvt. Ltd. — Home">
              <img src="/logo.png" alt="" className="nav-logo-mark" />
              <CompanyName variant="nav" />
            </NavLink>

            <nav aria-label="Main navigation">
              <ul className="nav-links">
                {links.map(l => (
                  <li key={l.to}>
                    <NavLink
                      to={l.to}
                      end={l.to === '/'}
                      className={({ isActive }) => isActive ? 'active' : ''}
                    >
                      {l.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <NavLink to="/contact" className="btn btn-primary nav-cta" aria-label="Contact Us">
              <span>Contact Us</span>
              <ArrowRight size={15} />
            </NavLink>

            <button
              className="nav-mobile-btn"
              onClick={() => setMobileOpen(v => !v)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <nav className={`nav-mobile-menu${mobileOpen ? ' open' : ''}`} aria-label="Mobile navigation">
        <button
          style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', color: 'var(--fg)' }}
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <X size={28} />
        </button>
        {links.map(l => (
          <NavLink key={l.to} to={l.to} end={l.to === '/'}>
            {l.label}
          </NavLink>
        ))}
        <NavLink to="/contact" className="btn btn-primary">Contact Us</NavLink>
      </nav>
    </>
  );
}

function Menu({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M4 5h16M4 12h16M4 19h16"/>
    </svg>
  );
}
function X({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M18 6 6 18M6 6l12 12"/>
    </svg>
  );
}
function ArrowRight({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M5 12h14m-7-7 7 7-7 7"/>
    </svg>
  );
}
