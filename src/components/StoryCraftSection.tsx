// src/components/StoryCraftSection.tsx
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

// ─────────────────────────────────────────────
// STORY TEXT
// ─────────────────────────────────────────────
const storyText =
  'Royal Hyderabadi spice, slow-roasted to reveal its deep, aromatic character. Born of Nizami heritage, it carries the quiet richness of royal kitchens, bold in presence, refined in balance. A blend crafted not merely to season, but to elevate.';

interface StoryCraftSectionProps {
  showCta?: boolean;
  ctaLink?: string;
  ctaText?: string;
}

export default function StoryCraftSection({
  showCta = true,
  ctaLink = '/about',
  ctaText = 'Explore Our Story',
}: StoryCraftSectionProps) {
  return (
    <section
      id="about"
      aria-labelledby="story-craft-heading"
      style={{
        position: 'relative',
        padding: 'clamp(70px, 8vw, 110px) 0',
        width: '100%',
        background: '#161616',
      }}
    >
      <div className="editorial-container">
        <div className="story-editorial-grid">
          {/* Left Column: Clean Visual Image Panel without bulky badges */}
          <ScrollReveal direction="left" delay={0.1}>
            <div
              style={{
                width: '100%',
                aspectRatio: '4 / 3',
                borderRadius: 16,
                overflow: 'hidden',
                position: 'relative',
                background: '#181614',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
              }}
            >
            <img
              src="/crafted_passion_poster.jpg"
              alt="Deccan authentic spices, turmeric powder, and brass mortar"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                filter: 'brightness(0.92) contrast(1.05)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(22, 22, 22, 0.1) 0%, rgba(22, 22, 22, 0.35) 60%, rgba(22, 22, 22, 0.8) 100%)',
                pointerEvents: 'none',
              }}
            />
          </div>
        </ScrollReveal>

        {/* Right Column: Clean Editorial Story (Unboxed, Left-Aligned) */}
        <div>
          <ScrollReveal direction="right" delay={0.15}>
            {/* Top Gold Accent Bar */}
            <div
              style={{
                width: 38,
                height: 2,
                backgroundColor: '#CFA556',
                marginBottom: 14,
                borderRadius: 1,
              }}
            />

            {/* Eyebrow */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                marginBottom: 16,
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
                Our Story
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

            {/* Main Heading — Left Aligned */}
            <h2
              id="story-craft-heading"
              style={{
                margin: '0 0 26px 0',
                padding: 0,
                textAlign: 'left',
                fontFamily: "'GT Sectra', 'Marcellus', 'Cormorant', serif",
                fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)',
                fontWeight: 400,
                color: '#CFA556',
                lineHeight: 1.15,
                letterSpacing: '0.02em',
              }}
            >
              Crafted with Passion,<br />
              Served with{' '}
              <span
                style={{
                  fontFamily: "'Italiana', 'Playfair Display', 'Cormorant', serif",
                  fontStyle: 'italic',
                  color: '#FFF2C6',
                  fontWeight: 400,
                }}
              >
                Heart
              </span>
            </h2>
          </ScrollReveal>

          {/* Editorial Story Paragraph */}
          <ScrollReveal direction="right" delay={0.2}>
            <p
              style={{
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                fontSize: 'clamp(0.96rem, 1.1vw, 1.06rem)',
                lineHeight: 1.76,
                color: 'rgba(230, 218, 204, 0.82)',
                margin: '0 0 32px 0',
                maxWidth: 540,
                fontWeight: 400,
                textAlign: 'left',
              }}
            >
              {storyText}
            </p>
          </ScrollReveal>

          {/* Clean CTA Link */}
          {showCta && (
            <ScrollReveal direction="right" delay={0.45}>
              <Link
                to={ctaLink}
                id="about-cta-single"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  color: '#CFA556',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.88rem',
                  letterSpacing: '0.12em',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease, gap 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = '#FFF2C6';
                  el.style.gap = '12px';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = '#CFA556';
                  el.style.gap = '8px';
                }}
              >
                {ctaText} <ArrowUpRight size={16} />
              </Link>
            </ScrollReveal>
          )}
        </div>
      </div>
    </div>
  </section>
);
}
