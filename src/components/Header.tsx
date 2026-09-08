// src/components/Header.tsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Menu } from 'lucide-react';
import MagneticButton from './MagneticButton';
import Logo from './Logo';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Products', to: '/products' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isActive = (to: string) => {
    if (to === '/') return location.pathname === '/';
    return location.pathname.startsWith(to.split('#')[0]);
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          height: 76,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 clamp(20px, 5vw, 64px)',
          transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
          background: scrolled ? 'rgba(20, 20, 20, 0.96)' : 'rgba(20, 20, 20, 0.82)',
          borderBottom: scrolled ? '1px solid rgba(207, 165, 86, 0.35)' : '1px solid rgba(207, 165, 86, 0.15)',
          boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.5)' : '0 2px 10px rgba(0,0,0,0.25)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        {/* Logo Left */}
        <Link to="/" aria-label="Deccan Masala Co. Home" style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Logo size="md" showText={false} />
        </Link>

        {/* Navigation Center */}
        <nav
          aria-label="Primary navigation"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 40,
          }}
          className="header-desktop-nav hidden md:flex"
        >
          {navLinks.map(link => {
            const active = isActive(link.to);
            return (
              <Link
                key={link.label}
                to={link.to}
                style={{
                  fontFamily: "'Inter', 'DM Sans', sans-serif",
                  fontSize: '0.92rem',
                  letterSpacing: '0.02em',
                  fontWeight: active ? 600 : 500,
                  color: active ? '#CFA556' : '#D4D4D4',
                  textDecoration: 'none',
                  transition: 'color 0.25s ease',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = '#CFA556';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = active ? '#CFA556' : '#D4D4D4';
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', gap: 16 }}>
          <MagneticButton className="header-desktop-cta hidden md:flex">
            <Link
              to="/contact"
              aria-label="Contact us"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '8px 10px 8px 22px',
                borderRadius: 6,
                background: '#CFA556',
                color: '#161616',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.88rem',
                fontWeight: 600,
                letterSpacing: '0.02em',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
                boxShadow: '0 2px 10px rgba(207, 165, 86, 0.25)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = '#E2B866';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = '#CFA556';
              }}
            >
              Contact
              <div style={{
                width: 26,
                height: 26,
                borderRadius: '50%',
                background: '#161616',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#CFA556',
              }}>
                <ArrowUpRight size={13} strokeWidth={2.5} />
              </div>
            </Link>
          </MagneticButton>

          {/* Hamburger */}
          <button
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: mobileOpen ? '#CFA556' : 'rgba(35, 35, 35, 0.85)',
              border: '1px solid rgba(207, 165, 86, 0.4)',
              borderRadius: 8,
              cursor: 'pointer',
              color: mobileOpen ? '#161616' : '#CFA556',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 42,
              height: 42,
              padding: 0,
              boxShadow: '0 2px 12px rgba(0, 0, 0, 0.4)',
              transition: 'all 0.25s ease',
            }}
            className="header-mobile-toggle flex md:hidden"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Upper Half Dropdown Menu & Backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Dimmed backdrop overlay covering the lower half and screen */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              style={{
                position: 'fixed',
                top: 76,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 180,
                background: 'rgba(0, 0, 0, 0.65)',
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
              }}
            />

            {/* Upper Half Panel sliding down from navbar */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                position: 'fixed',
                top: 76,
                left: 0,
                right: 0,
                maxHeight: 'calc(55vh)',
                zIndex: 190,
                background: 'rgba(18, 18, 18, 0.98)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                borderBottom: '1px solid rgba(207, 165, 86, 0.3)',
                boxShadow: '0 24px 48px rgba(0, 0, 0, 0.75)',
                display: 'flex',
                flexDirection: 'column',
                padding: '24px clamp(20px, 5vw, 40px) 28px',
                boxSizing: 'border-box',
                overflowY: 'auto',
              }}
            >
              {/* Nav links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {navLinks.map((link, i) => {
                  const active = isActive(link.to);
                  return (
                    <motion.div
                      key={link.to}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 + i * 0.05 }}
                    >
                      <Link
                        to={link.to}
                        onClick={() => setMobileOpen(false)}
                        style={{
                          fontFamily: "'Italiana', 'GT Sectra', 'Fraunces', serif",
                          fontSize: '1.4rem',
                          fontWeight: active ? 600 : 400,
                          color: active ? '#CFA556' : '#FFFFFF',
                          letterSpacing: '0.02em',
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '10px 0',
                          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                          transition: 'color 0.2s ease',
                        }}
                      >
                        <span>{link.label}</span>
                        {active && (
                          <span
                            style={{
                              width: 6,
                              height: 6,
                              borderRadius: '50%',
                              background: '#CFA556',
                              boxShadow: '0 0 8px #CFA556',
                            }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Contact Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22 }}
                style={{ marginTop: 22 }}
              >
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    padding: '12px 24px',
                    borderRadius: 6,
                    background: '#CFA556',
                    color: '#161616',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    letterSpacing: '0.02em',
                    textDecoration: 'none',
                    boxShadow: '0 4px 14px rgba(207, 165, 86, 0.3)',
                    width: '100%',
                    boxSizing: 'border-box',
                  }}
                >
                  Contact Us <ArrowUpRight size={15} />
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
