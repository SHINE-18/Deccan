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
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
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
          transition: 'background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease, backdrop-filter 0.4s ease',
          background: scrolled ? 'rgba(22, 22, 22, 0.92)' : 'rgba(22, 22, 22, 0.4)',
          borderBottom: scrolled ? '1px solid rgba(207, 165, 86, 0.3)' : '1px solid rgba(255, 255, 255, 0.06)',
          boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.4)' : 'none',
          backdropFilter: 'blur(16px)',
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
          className="hidden md:flex"
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
                {active && (
                  <span style={{
                    position: 'absolute',
                    bottom: -4,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: '#CFA556',
                    borderRadius: 1,
                  }} />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', gap: 16 }}>
          <MagneticButton className="hidden md:flex">
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
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#1C1A17',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 4,
            }}
            className="flex md:hidden"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 190,
              background: 'rgba(22, 22, 22, 0.98)',
              backdropFilter: 'blur(20px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 40,
              paddingTop: 64,
            }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
              >
                <Link
                  to={link.to}
                  style={{
                    fontFamily: "'Fraunces', 'Cormorant Garamond', serif",
                    fontSize: '2.5rem',
                    fontWeight: 600,
                    color: isActive(link.to) ? '#CFA556' : '#FFFFFF',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                to="/contact"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '12px 32px',
                  borderRadius: 6,
                  background: '#CFA556',
                  color: '#161616',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '1rem',
                  fontWeight: 600,
                }}
              >
                Contact Us <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
