// src/components/Footer.tsx
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Products', to: '/products' },
    { label: 'Contact', to: '/contact' },
  ];

  const utilityPages = [
    { label: 'Terms & Conditions', to: '/terms' },
    { label: 'Privacy Policy', to: '/privacy' },
  ];

  return (
    <footer
      style={{
        background: '#161616',
        padding: '80px 40px 40px',
        borderTop: '1px solid rgba(207, 165, 86, 0.2)',
      }}
    >
      <div
        style={{
          maxWidth: 1380,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'auto minmax(260px, 340px) minmax(260px, 340px) 1fr',
          columnGap: 28,
          rowGap: 40,
          alignItems: 'start',
          paddingBottom: 56,
        }}
      >
        {/* Column 1: Brand Logo (Vertically Aligned) */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', alignSelf: 'center' }}>
          <img
            src="/icon2.svg"
            alt="Deccan Masala Co. Footer Logo"
            style={{
              height: 120,
              width: 'auto',
              maxWidth: 240,
              objectFit: 'contain',
            }}
          />
        </div>

        {/* Column 2: Quick Links (340 Fill x 48) */}
        <div>
          <h4
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.95rem',
              fontWeight: 500,
              color: '#CFA556',
              marginBottom: 20,
              letterSpacing: '0.01em',
            }}
          >
            Quick Links
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {quickLinks.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                style={{
                  width: '100%',
                  maxWidth: 340,
                  height: 48,
                  boxSizing: 'border-box',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0 18px',
                  borderRadius: 8,
                  background: 'transparent',
                  border: '1px solid rgba(188, 188, 188, 0.14)',
                  color: '#D4D4D4',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = '#CFA556';
                  el.style.color = '#FFFFFF';
                  el.style.background = 'rgba(207, 165, 86, 0.06)';
                  const icon = el.querySelector('svg');
                  if (icon) {
                    icon.style.transform = 'rotate(45deg) scale(1.1)';
                    icon.style.color = '#FFFFFF';
                  }
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(188, 188, 188, 0.14)';
                  el.style.color = '#D4D4D4';
                  el.style.background = 'transparent';
                  const icon = el.querySelector('svg');
                  if (icon) {
                    icon.style.transform = 'rotate(0deg) scale(1)';
                    icon.style.color = '#CFA556';
                  }
                }}
              >
                <span>{label}</span>
                <ArrowUpRight
                  size={16}
                  color="#CFA556"
                  style={{
                    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), color 0.25s ease',
                  }}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Column 3: Utility Pages (340 Fill x 48) */}
        <div>
          <h4
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.95rem',
              fontWeight: 500,
              color: '#CFA556',
              marginBottom: 20,
              letterSpacing: '0.01em',
            }}
          >
            Utility Pages
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {utilityPages.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                style={{
                  width: '100%',
                  maxWidth: 340,
                  height: 48,
                  boxSizing: 'border-box',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0 18px',
                  borderRadius: 8,
                  background: 'transparent',
                  border: '1px solid rgba(188, 188, 188, 0.14)',
                  color: '#D4D4D4',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = '#CFA556';
                  el.style.color = '#FFFFFF';
                  el.style.background = 'rgba(207, 165, 86, 0.06)';
                  const icon = el.querySelector('svg');
                  if (icon) {
                    icon.style.transform = 'rotate(45deg) scale(1.1)';
                    icon.style.color = '#FFFFFF';
                  }
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(188, 188, 188, 0.14)';
                  el.style.color = '#D4D4D4';
                  el.style.background = 'transparent';
                  const icon = el.querySelector('svg');
                  if (icon) {
                    icon.style.transform = 'rotate(0deg) scale(1)';
                    icon.style.color = '#CFA556';
                  }
                }}
              >
                <span>{label}</span>
                <ArrowUpRight
                  size={16}
                  color="#CFA556"
                  style={{
                    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), color 0.25s ease',
                  }}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Column 4: Contact Us */}
        <div>
          <h4
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.95rem',
              fontWeight: 500,
              color: '#CFA556',
              marginBottom: 18,
              letterSpacing: '0.01em',
            }}
          >
            Contact Us
          </h4>

          {/* Phone Row */}
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.88rem', color: '#D4D4D4', marginBottom: 16 }}>
            <span style={{ color: '#CFA556', fontWeight: 500 }}>Phone: </span>
            <a
              href="tel:+917940194999"
              style={{ color: '#D4D4D4', textDecoration: 'none', transition: 'color 0.2s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#CFA556')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#D4D4D4')}
            >
              +91 7940194999
            </a>
          </div>

          {/* Address Section */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: '#CFA556', fontWeight: 500, marginBottom: 8 }}>
              Address
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.82rem', color: '#BCBCBC', lineHeight: 1.6 }}>
              <div>
                <span style={{ color: '#D4D4D4', fontWeight: 500 }}>Office : </span>Chef Amey M, The Taj Krishna Hotel, Hyderabad
              </div>
              <div>
                <span style={{ color: '#D4D4D4', fontWeight: 500 }}>Locations : </span>New York, Melbourne, Dubai, Paris, London
              </div>
            </div>
          </div>

          {/* Social Icons Row */}
          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            <a
              href="https://instagram.com"
              aria-label="Follow on Instagram"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: 'transparent',
                border: '1px solid rgba(207, 165, 86, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#CFA556',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = '#CFA556';
                el.style.color = '#161616';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'transparent';
                el.style.color = '#CFA556';
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            <a
              href="https://facebook.com"
              aria-label="Follow on Facebook"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: 'transparent',
                border: '1px solid rgba(207, 165, 86, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#CFA556',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = '#CFA556';
                el.style.color = '#161616';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'transparent';
                el.style.color = '#CFA556';
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          maxWidth: 1380,
          margin: '0 auto',
          paddingTop: 28,
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', letterSpacing: '0.1em', color: '#BCBCBC' }}>
          © 2026 Deccan Masala Co. All rights reserved.
        </span>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll back to top of page"
          style={{
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(188, 188, 188, 0.16)',
            borderRadius: 6,
            padding: '6px 16px',
            color: '#D4D4D4',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.65rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            transition: 'all 0.25s ease',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.background = 'rgba(207, 165, 86, 0.15)';
            el.style.borderColor = '#CFA556';
            el.style.color = '#CFA556';
            el.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.background = 'rgba(255, 255, 255, 0.04)';
            el.style.borderColor = 'rgba(188, 188, 188, 0.16)';
            el.style.color = '#D4D4D4';
            el.style.transform = 'translateY(0)';
          }}
        >
          <span>Back to Top</span>
          <span>↑</span>
        </button>

        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', letterSpacing: '0.08em', color: '#BCBCBC' }}>
          sourced · blended · delivered
        </span>
      </div>
    </footer>
  );
}
