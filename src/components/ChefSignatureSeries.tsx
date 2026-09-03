// src/components/ChefSignatureSeries.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Award, Flame } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function ChefSignatureSeries() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="chef-signature-series"
      className="chef-signature-section"
      aria-labelledby="chef-signature-heading"
      style={{
        position: 'relative',
        width: '100%',
        background: 'linear-gradient(180deg, #131210 0%, #171614 50%, #12110F 100%)',
        overflow: 'hidden',
        padding: 'clamp(80px, 9vw, 140px) 0',
      }}
    >
      {/* Background Ambient Lighting & Glows */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '20%',
          right: '-5%',
          width: '55vw',
          height: '55vw',
          maxWidth: 700,
          maxHeight: 700,
          background: 'radial-gradient(circle, rgba(207, 165, 86, 0.09) 0%, rgba(207, 165, 86, 0.02) 45%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(50px)',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '-5%',
          width: '45vw',
          height: '45vw',
          maxWidth: 600,
          maxHeight: 600,
          background: 'radial-gradient(circle, rgba(201, 104, 26, 0.06) 0%, transparent 65%)',
          pointerEvents: 'none',
          filter: 'blur(60px)',
        }}
      />

      {/* Main Container */}
      <div
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          padding: '0 clamp(24px, 5vw, 80px)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          className="chef-signature-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
            gap: 'clamp(40px, 6vw, 80px)',
            alignItems: 'center',
          }}
        >
          {/* ─────────────────────────────────────────────
              LEFT COLUMN: Text Content & Refined CTA
             ───────────────────────────────────────────── */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {/* Eyebrow Label with Decorative Accent */}
            <ScrollReveal direction="left" delay={0.1}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 12,
                  marginBottom: 20,
                }}
              >
                <span
                  style={{
                    width: 32,
                    height: 1,
                    background: '#CFA556',
                    display: 'inline-block',
                    opacity: 0.9,
                  }}
                />
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', 'Courier Prime', monospace",
                    fontSize: 'clamp(0.72rem, 0.9vw, 0.82rem)',
                    fontWeight: 600,
                    letterSpacing: '0.24em',
                    textTransform: 'uppercase',
                    color: '#CFA556',
                  }}
                >
                  CHEF SIGNATURE SERIES
                </span>
              </div>
            </ScrollReveal>

            {/* Main Headline */}
            <ScrollReveal direction="left" delay={0.2}>
              <h2
                id="chef-signature-heading"
                style={{
                  fontFamily: "'Italiana', 'Fraunces', 'Marcellus', 'Playfair Display', serif",
                  fontSize: 'clamp(1.75rem, 3.2vw, 3rem)',
                  fontWeight: 400,
                  color: '#FFFFFF',
                  lineHeight: 1.16,
                  letterSpacing: '-0.025em',
                  margin: '0 0 24px 0',
                  textShadow: '0 2px 20px rgba(0, 0, 0, 0.6)',
                }}
              >
                <span
                  style={{
                    display: 'block',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Where Every Blend
                </span>
                <span
                  style={{
                    fontStyle: 'italic',
                    color: '#CFA556',
                    display: 'block',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Becomes a Signature.
                </span>
              </h2>
            </ScrollReveal>

            {/* Subtle Divider Detail */}
            <ScrollReveal direction="left" delay={0.25}>
              <div
                aria-hidden="true"
                style={{
                  width: 56,
                  height: 2,
                  background: 'linear-gradient(90deg, #CFA556, rgba(207, 165, 86, 0.2))',
                  marginBottom: 26,
                  borderRadius: 2,
                }}
              />
            </ScrollReveal>

            {/* Description */}
            <ScrollReveal direction="left" delay={0.3}>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(1.02rem, 1.25vw, 1.18rem)',
                  lineHeight: 1.8,
                  color: '#D8D4CE',
                  maxWidth: 520,
                  margin: '0 0 38px 0',
                  fontWeight: 300,
                  letterSpacing: '0.01em',
                }}
              >
                Expertly crafted spice blends inspired by the rich traditions of Indian cooking.
              </p>
            </ScrollReveal>

            {/* Premium Highlights Strip */}
            <ScrollReveal direction="left" delay={0.35}>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 'clamp(16px, 2.5vw, 28px)',
                  alignItems: 'center',
                  padding: '16px 0',
                  marginBottom: 36,
                  borderTop: '1px solid rgba(207, 165, 86, 0.15)',
                  borderBottom: '1px solid rgba(207, 165, 86, 0.15)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Award size={16} color="#CFA556" />
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.82rem',
                      letterSpacing: '0.04em',
                      color: 'rgba(255, 255, 255, 0.85)',
                      fontWeight: 500,
                    }}
                  >
                    Master Chef Curation
                  </span>
                </div>
                <span
                  style={{
                    width: 3,
                    height: 3,
                    borderRadius: '50%',
                    background: '#CFA556',
                    opacity: 0.6,
                  }}
                />
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Sparkles size={16} color="#CFA556" />
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.82rem',
                      letterSpacing: '0.04em',
                      color: 'rgba(255, 255, 255, 0.85)',
                      fontWeight: 500,
                    }}
                  >
                    Rare Whole Terroirs
                  </span>
                </div>
                <span
                  style={{
                    width: 3,
                    height: 3,
                    borderRadius: '50%',
                    background: '#CFA556',
                    opacity: 0.6,
                  }}
                />
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Flame size={16} color="#CFA556" />
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.82rem',
                      letterSpacing: '0.04em',
                      color: 'rgba(255, 255, 255, 0.85)',
                      fontWeight: 500,
                    }}
                  >
                    Artisanal Slow Roast
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Refined Gold CTA Button */}
            <ScrollReveal direction="left" delay={0.4}>
              <div>
                <Link
                  to="/products"
                  id="chef-signature-cta"
                  aria-label="Explore the Chef Signature Series Collection"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '16px 36px',
                    borderRadius: 8,
                    background: isHovered
                      ? 'linear-gradient(135deg, #F0C97F 0%, #E2B866 50%, #C89945 100%)'
                      : 'linear-gradient(135deg, #DFB76C 0%, #CFA556 50%, #B88E40 100%)',
                    color: '#12110F',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: '0.94rem',
                    letterSpacing: '0.04em',
                    textDecoration: 'none',
                    boxShadow: isHovered
                      ? '0 10px 30px rgba(207, 165, 86, 0.45)'
                      : '0 5px 20px rgba(207, 165, 86, 0.28)',
                    transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <span>Explore the Collection</span>
                  <motion.span
                    animate={{ x: isHovered ? 4 : 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: 'inline-flex', alignItems: 'center' }}
                  >
                    <ArrowRight size={18} strokeWidth={2.2} />
                  </motion.span>
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* ─────────────────────────────────────────────
              RIGHT COLUMN: Large AI-Generated Chef Photograph
             ───────────────────────────────────────────── */}
          <ScrollReveal direction="right" delay={0.25}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                borderRadius: 22,
                padding: 1,
                background: 'linear-gradient(145deg, rgba(207, 165, 86, 0.45) 0%, rgba(255, 255, 255, 0.08) 50%, rgba(207, 165, 86, 0.2) 100%)',
                boxShadow: '0 24px 60px -12px rgba(0, 0, 0, 0.8), 0 0 35px rgba(207, 165, 86, 0.12)',
              }}
            >
              {/* Image Frame Container */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '4 / 3',
                  borderRadius: 21,
                  overflow: 'hidden',
                  background: '#1A1815',
                }}
              >
                {/* The Editorial Chef + Masala Photograph */}
                <motion.img
                  src="/chef_signature_series.jpg"
                  alt="Professional Indian Chef with Deccan Masala Signature Spice Reserve"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 35%',
                    display: 'block',
                    filter: 'brightness(0.96) contrast(1.04)',
                  }}
                />

                {/* Subtle Cinematic Vignette / Gradient Overlay */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(ellipse at center, transparent 55%, rgba(18, 17, 15, 0.4) 100%), linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(18, 17, 15, 0.65) 100%)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Floating Glassmorphic Hallmark Badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 18,
                    left: 18,
                    padding: '8px 16px',
                    borderRadius: 999,
                    background: 'rgba(19, 18, 16, 0.72)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(207, 165, 86, 0.35)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: '#CFA556',
                      boxShadow: '0 0 8px #CFA556',
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.68rem',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: '#E8E4DC',
                      fontWeight: 500,
                    }}
                  >
                    Culinary Edition • Private Reserve
                  </span>
                </div>

                {/* Subtle Gold Corner Accents */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: 14,
                    right: 14,
                    width: 20,
                    height: 20,
                    borderTop: '2px solid rgba(207, 165, 86, 0.5)',
                    borderRight: '2px solid rgba(207, 165, 86, 0.5)',
                    pointerEvents: 'none',
                  }}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
