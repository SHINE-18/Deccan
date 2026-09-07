// src/components/NavanyaHero.tsx
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function NavanyaHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const bgParallax = useTransform(scrollY, [0, 600], ['0%', '12%']);

  return (
    <section
      ref={containerRef}
      id="hero"
      aria-label="Deccan Spices Hero"
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#161616',
        padding: '120px clamp(24px, 6vw, 100px) 90px',
      }}
    >
      {/* Past Design's Masala Spices Atmospheric Parallax Background */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("/masala_hero_bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          opacity: 0.42,
          y: bgParallax,
          scale: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Atmospheric Dark Luxury Gradient Overlays (Past Design) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(22,22,22,0.85) 0%, rgba(22,22,22,0.4) 45%, rgba(22,22,22,0.95) 90%, #161616 100%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 65% 55% at 50% 50%, rgba(207,165,86,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Main Content Layout (Past Design Layout with ONLY the new text change) */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: 900,
          width: '100%',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Top Gold Accent Line & Eyebrow */}
          <div style={{ marginBottom: 18 }}>
            <div
              style={{
                width: 38,
                height: 2,
                backgroundColor: '#CFA556',
                marginBottom: 14,
                borderRadius: 1,
              }}
            />
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <span
                style={{
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                  fontSize: 'clamp(0.72rem, 0.82vw, 0.8rem)',
                  fontWeight: 600,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#CFA556',
                }}
              >
                CRAFTED WITH PURPOSE
              </span>
              <span
                style={{
                  color: 'rgba(207, 165, 86, 0.4)',
                  fontSize: '0.75rem',
                }}
              >
                •
              </span>
              <span
                style={{
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                  fontSize: 'clamp(0.7rem, 0.8vw, 0.78rem)',
                  fontWeight: 400,
                  letterSpacing: '0.14em',
                  color: 'rgba(230, 218, 204, 0.65)',
                }}
              >
                Deccan Spices
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1
            style={{
              margin: 0,
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Part 1: Editorial Serif in Deccan Gold */}
            <span
              style={{
                fontFamily: "'GT Sectra', 'Marcellus', 'Cormorant', serif",
                fontSize: 'clamp(2.4rem, 4.4vw, 4.2rem)',
                fontWeight: 400,
                color: '#CFA556',
                lineHeight: 1.12,
                letterSpacing: '0.02em',
              }}
            >
              Crafted with
              <br />
              Intention.
            </span>

            {/* Part 2: Elegant Italiana Italic in Warm Cream */}
            <span
              style={{
                fontFamily: "'Italiana', 'Playfair Display', 'Cormorant', serif",
                fontStyle: 'italic',
                fontSize: 'clamp(2.7rem, 5.0vw, 4.85rem)',
                fontWeight: 400,
                color: '#FFF2C6',
                lineHeight: 1.05,
                letterSpacing: '0.01em',
                marginTop: 6,
              }}
            >
              Experienced in
              <br />
              Every Bite.
            </span>
          </h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
              fontSize: 'clamp(0.96rem, 1.15vw, 1.12rem)',
              fontWeight: 400,
              lineHeight: 1.68,
              color: '#C8BEB5',
              marginTop: 24,
              marginBottom: 36,
              maxWidth: 540,
              textWrap: 'pretty',
            }}
          >
            Small-batch Indian spice blends rooted in culinary memory and balanced for modern kitchens.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              flexWrap: 'wrap',
            }}
          >
            {/* Primary Button */}
            <Link
              to="/products"
              id="hero-primary-shop-cta"
              aria-label="Shop the Collection"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '14px 30px',
                borderRadius: 4,
                backgroundColor: '#CFA556',
                color: '#130C07',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: '0.84rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'all 0.28s cubic-bezier(0.25, 0.1, 0.25, 1)',
                boxShadow: '0 4px 22px rgba(207, 165, 86, 0.3)',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = '#DFB566';
                el.style.transform = 'translateY(-2px)';
                el.style.boxShadow = '0 8px 30px rgba(207, 165, 86, 0.48)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = '#CFA556';
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = '0 4px 22px rgba(207, 165, 86, 0.3)';
              }}
            >
              SHOP THE COLLECTION →
            </Link>

            {/* Secondary Button */}
            <Link
              to="/contact"
              id="hero-secondary-wholesale-cta"
              aria-label="Explore Wholesale"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '14px 28px',
                borderRadius: 4,
                backgroundColor: 'rgba(20, 13, 8, 0.45)',
                border: '1px solid rgba(207, 165, 86, 0.42)',
                color: '#E5C378',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: '0.84rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'all 0.28s cubic-bezier(0.25, 0.1, 0.25, 1)',
                backdropFilter: 'blur(6px)',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = '#DFB566';
                el.style.backgroundColor = 'rgba(207, 165, 86, 0.12)';
                el.style.color = '#FFFFFF';
                el.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(207, 165, 86, 0.42)';
                el.style.backgroundColor = 'rgba(20, 13, 8, 0.45)';
                el.style.color = '#E5C378';
                el.style.transform = 'translateY(0)';
              }}
            >
              EXPLORE WHOLESALE
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
