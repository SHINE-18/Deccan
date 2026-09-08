// src/components/ChefSignatureSeries.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function ChefSignatureSeries() {
  const [isCtaHovered, setIsCtaHovered] = useState(false);

  return (
    <section
      id="chef-signature-series"
      className="chef-signature-section"
      aria-labelledby="chef-signature-heading"
      style={{
        position: 'relative',
        width: '100%',
        background: '#161616',
        padding: 'clamp(36px, 4vw, 56px) 0',
        overflow: 'hidden',
      }}
    >
      {/* Background Subtle Ambient Glows */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '20%',
          right: '-5%',
          width: '50vw',
          height: '50vw',
          maxWidth: 650,
          maxHeight: 650,
          background: 'radial-gradient(circle, rgba(207, 165, 86, 0.08) 0%, transparent 65%)',
          pointerEvents: 'none',
          filter: 'blur(60px)',
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
          maxWidth: 550,
          maxHeight: 550,
          background: 'radial-gradient(circle, rgba(201, 104, 26, 0.05) 0%, transparent 65%)',
          pointerEvents: 'none',
          filter: 'blur(70px)',
        }}
      />

      <div className="editorial-container" style={{ position: 'relative', zIndex: 1 }}>
        {/* ─────────────────────────────────────────────
            TIER 1: Chef Profile & Signature Blend Story
           ───────────────────────────────────────────── */}
        <div className="chef-signature-grid chef-signature-tier1-grid">
          {/* Left Column: Clean Editorial Visual Panel (Chef Amey Portrait) */}
          <ScrollReveal direction="left" delay={0.1} style={{ height: '100%', display: 'flex' }}>
            <div
              className="chef-signature-image-equal"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 16,
                overflow: 'hidden',
                position: 'relative',
                background: '#181614',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
              }}
            >
              <img
                src="/chef_signature_series.jpg"
                alt="Chef Amey with Deccan Masala Signature Spice Blends in a professional kitchen"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 24%',
                  display: 'block',
                  filter: 'brightness(0.94) contrast(1.05)',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
              />

              {/* Gradient overlay matching other sections */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(22, 22, 22, 0.1) 0%, rgba(22, 22, 22, 0.35) 60%, rgba(22, 22, 22, 0.8) 100%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Hallmark Badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 18,
                  left: 18,
                  padding: '8px 16px',
                  borderRadius: 999,
                  background: 'rgba(19, 18, 16, 0.82)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
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
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.72rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#E8E4DC',
                    fontWeight: 500,
                  }}
                >
                  Chef Amey • Private Reserve
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Text & Credentials (Chef Amey Story) */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <ScrollReveal direction="right" delay={0.15}>
              {/* Top Gold Accent Bar */}
              <div
                style={{
                  width: 38,
                  height: 2,
                  backgroundColor: '#CFA556',
                  marginBottom: 10,
                  borderRadius: 1,
                }}
              />

              {/* Eyebrow */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  marginBottom: 12,
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
                  Chef Signature Series
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
                  Master Curation
                </span>
              </div>

              {/* Main Headline with Site Font Typography */}
              <h2
                id="chef-signature-heading"
                style={{
                  margin: '0 0 4px 0',
                  padding: 0,
                  textAlign: 'left',
                  fontFamily: "'GT Sectra', 'Marcellus', 'Cormorant', serif",
                  fontSize: 'clamp(2rem, 3.2vw, 2.9rem)',
                  fontWeight: 400,
                  color: '#CFA556',
                  lineHeight: 1.15,
                  letterSpacing: '0.02em',
                }}
              >
                Chef Amey's<br />
                <span
                  style={{
                    fontFamily: "'Italiana', 'Playfair Display', 'Cormorant', serif",
                    fontStyle: 'italic',
                    color: '#FFF2C6',
                    fontWeight: 400,
                  }}
                >
                  Signature Series
                </span>
              </h2>

              {/* Authentic Master Chef Handwritten Signature SVG */}
              <div style={{ margin: '4px 0 16px 0' }}>
                <img
                  src="/chef_arvind_signature.svg"
                  alt="Chef Amey Signature"
                  style={{
                    height: 'clamp(40px, 4.5vw, 56px)',
                    width: 'auto',
                    display: 'block',
                    filter: 'drop-shadow(0 2px 8px rgba(207, 165, 86, 0.3))',
                  }}
                />
              </div>
            </ScrollReveal>

            {/* Description Paragraph */}
            <ScrollReveal direction="right" delay={0.2}>
              <p
                style={{
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                  fontSize: 'clamp(0.92rem, 1.02vw, 1rem)',
                  lineHeight: 1.68,
                  color: 'rgba(230, 218, 204, 0.82)',
                  margin: '0 0 18px 0',
                  maxWidth: 540,
                  fontWeight: 400,
                  textAlign: 'left',
                }}
              >
                The Chef Amey Signature Series brings together 25+ years of culinary expertise across luxury hotels, restaurants, and consulting in India, the USA, and Europe.
              </p>
            </ScrollReveal>

            {/* Editorial Bulleted Highlights */}
            <ScrollReveal direction="right" delay={0.25}>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 12px 0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                  maxWidth: 540,
                }}
              >
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: '#CFA556',
                      marginTop: 7,
                      flexShrink: 0,
                      boxShadow: '0 0 8px rgba(207, 165, 86, 0.6)',
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                      fontSize: 'clamp(0.86rem, 0.95vw, 0.94rem)',
                      lineHeight: 1.58,
                      color: 'rgba(230, 218, 204, 0.78)',
                    }}
                  >
                    Rooted in authentic Hyderabadi recipes from royal and home kitchens
                  </span>
                </li>

                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: '#CFA556',
                      marginTop: 7,
                      flexShrink: 0,
                      boxShadow: '0 0 8px rgba(207, 165, 86, 0.6)',
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                      fontSize: 'clamp(0.86rem, 0.95vw, 0.94rem)',
                      lineHeight: 1.58,
                      color: 'rgba(230, 218, 204, 0.78)',
                    }}
                  >
                    Calibrated for modern kitchens, from stovetop to professional range
                  </span>
                </li>

                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: '#CFA556',
                      marginTop: 7,
                      flexShrink: 0,
                      boxShadow: '0 0 8px rgba(207, 165, 86, 0.6)',
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                      fontSize: 'clamp(0.86rem, 0.95vw, 0.94rem)',
                      lineHeight: 1.58,
                      color: 'rgba(230, 218, 204, 0.78)',
                    }}
                  >
                    Endorsed by the Telangana Chefs Association and leading members of IFCA
                  </span>
                </li>
              </ul>
            </ScrollReveal>
          </div>
        </div>

        {/* ─────────────────────────────────────────────
            SUBTLE GOLD DIVIDER
           ───────────────────────────────────────────── */}
        <div
          aria-hidden="true"
          style={{
            width: '100%',
            height: 1,
            background: 'linear-gradient(90deg, transparent 0%, rgba(207, 165, 86, 0.22) 15%, rgba(207, 165, 86, 0.22) 85%, transparent 100%)',
            margin: 'clamp(32px, 4vw, 48px) 0',
          }}
        />

        {/* ─────────────────────────────────────────────
            TIER 2: Experience Philosophy & Shelf Display
           ───────────────────────────────────────────── */}
        <div className="chef-signature-grid">
          {/* Left Column: Philosophy Text & Collection Button */}
          <div>
            <ScrollReveal direction="left" delay={0.1}>
              {/* Top Gold Accent Bar */}
              <div
                style={{
                  width: 38,
                  height: 2,
                  backgroundColor: '#CFA556',
                  marginBottom: 10,
                  borderRadius: 1,
                }}
              />

              {/* Eyebrow */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  marginBottom: 12,
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
                  The Culinary Standard
                </span>
              </div>

              {/* Subheading with Site Font Typography */}
              <h3
                style={{
                  margin: '0 0 12px 0',
                  padding: 0,
                  textAlign: 'left',
                  fontFamily: "'GT Sectra', 'Marcellus', 'Cormorant', serif",
                  fontSize: 'clamp(1.7rem, 2.6vw, 2.3rem)',
                  fontWeight: 400,
                  color: '#CFA556',
                  lineHeight: 1.2,
                  letterSpacing: '0.02em',
                }}
              >
                When a chef designs the{' '}
                <span
                  style={{
                    fontFamily: "'Italiana', 'Playfair Display', 'Cormorant', serif",
                    fontStyle: 'italic',
                    color: '#FFF2C6',
                    fontWeight: 400,
                  }}
                >
                  experience
                </span>
              </h3>
            </ScrollReveal>

            {/* Description Text */}
            <ScrollReveal direction="left" delay={0.2}>
              <p
                style={{
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                  fontSize: 'clamp(0.92rem, 1.02vw, 1rem)',
                  lineHeight: 1.68,
                  color: 'rgba(230, 218, 204, 0.82)',
                  margin: '0 0 20px 0',
                  maxWidth: 520,
                  fontWeight: 400,
                  textAlign: 'left',
                }}
              >
                Most spice blends are made in factories. Ours start in a professional kitchen.
              </p>

              {/* Quote Card (Moved under the text) */}
              <div
                style={{
                  background: 'rgba(25, 24, 22, 0.65)',
                  borderRadius: 12,
                  padding: '16px 20px',
                  margin: '0 0 24px 0',
                  maxWidth: 520,
                  boxShadow: '0 12px 32px rgba(0, 0, 0, 0.3)',
                }}
              >
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
                    fontStyle: 'italic',
                    fontSize: 'clamp(0.94rem, 1.05vw, 1.02rem)',
                    color: '#F4EDE0',
                    margin: '0 0 8px 0',
                    lineHeight: 1.55,
                  }}
                >
                  "My goal was simple — if you follow the pack instructions, your biryani should taste like a chef cooked it for you."
                </p>
                <p
                  style={{
                    margin: 0,
                    color: '#CFA556',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    fontFamily: "'Inter', sans-serif",
                    textTransform: 'uppercase',
                  }}
                >
                  — Chef Amey
                </p>
              </div>
            </ScrollReveal>

            {/* CTA Button matching website luxury standard */}
            <ScrollReveal direction="left" delay={0.3}>
              <div>
                <Link
                  to="/products?category=signature-quality"
                  id="chef-signature-cta"
                  aria-label="Explore the Chef Amey Signature Series Collection"
                  onMouseEnter={() => setIsCtaHovered(true)}
                  onMouseLeave={() => setIsCtaHovered(false)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '13px 28px',
                    borderRadius: 8,
                    background: isCtaHovered
                      ? 'linear-gradient(135deg, #F0C97F 0%, #E2B866 50%, #C89945 100%)'
                      : 'linear-gradient(135deg, #DFB76C 0%, #CFA556 50%, #B88E40 100%)',
                    color: '#12110F',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: '0.94rem',
                    letterSpacing: '0.04em',
                    textDecoration: 'none',
                    boxShadow: isCtaHovered
                      ? '0 10px 30px rgba(207, 165, 86, 0.45)'
                      : '0 5px 20px rgba(207, 165, 86, 0.28)',
                    transform: isCtaHovered ? 'translateY(-2px)' : 'translateY(0)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <span>Explore the Collection</span>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      transform: isCtaHovered ? 'translateX(4px)' : 'translateX(0)',
                      transition: 'transform 0.25s ease',
                    }}
                  >
                    <ArrowRight size={18} strokeWidth={2.2} />
                  </span>
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Clean Shelf Styling Image Panel (Unobstructed) */}
          <ScrollReveal direction="right" delay={0.2} style={{ height: '100%', display: 'flex' }}>
            <div
              className="chef-signature-image-equal"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 16,
                overflow: 'hidden',
                position: 'relative',
                background: '#181614',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
              }}
            >
              <img
                src="/deccan_shelf_styling.jpg"
                alt="Deccan Masala spice pouches and tins styled on kitchen shelf"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 42%',
                  display: 'block',
                  filter: 'brightness(0.92) contrast(1.05)',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
              />

              {/* Gradient Overlay */}
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
        </div>
      </div>

      {/* Responsive Layout & Equal-Height Alignment */}
      <style>{`
        @media (min-width: 901px) {
          .chef-signature-tier1-grid {
            align-items: stretch !important;
          }
          .chef-signature-image-equal {
            height: 100% !important;
            min-height: 100% !important;
          }
        }
        @media (max-width: 900px) {
          .chef-signature-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .chef-signature-image-equal {
            aspect-ratio: 4 / 3 !important;
            min-height: 340px !important;
          }
          .chef-quote-overlay {
            position: relative !important;
            top: auto !important;
            right: auto !important;
            max-width: 100% !important;
            margin: 14px !important;
          }
        }
      `}</style>
    </section>
  );
}
