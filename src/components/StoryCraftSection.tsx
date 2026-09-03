// src/components/StoryCraftSection.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Award, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

// ─────────────────────────────────────────────
// ROYAL NIZAMI GOLDEN FLOURISH ORNAMENT
// ─────────────────────────────────────────────
function RoyalFlourish({ width = 160, color = '#CFA556' }: { width?: number; color?: string }) {
  return (
    <svg
      width={width}
      height="18"
      viewBox="0 0 160 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', margin: '0 auto' }}
      aria-hidden="true"
    >
      {/* Central diamond star emblem */}
      <path
        d="M80 3L83.5 9L80 15L76.5 9L80 3Z"
        fill={color}
      />
      <circle cx="80" cy="9" r="1.8" fill="#FFF6D8" />

      {/* Left side flourish */}
      <circle cx="71" cy="9" r="1.5" fill={color} />
      <circle cx="64" cy="9" r="1.2" fill={color} opacity="0.75" />
      <path
        d="M60 9C52 9 47 4 39 4C30 4 24 9 10 9H0"
        stroke={color}
        strokeWidth="1"
        strokeOpacity="0.6"
      />
      <circle cx="4" cy="9" r="1" fill={color} opacity="0.3" />

      {/* Right side flourish */}
      <circle cx="89" cy="9" r="1.5" fill={color} />
      <circle cx="96" cy="9" r="1.2" fill={color} opacity="0.75" />
      <path
        d="M100 9C108 9 113 4 121 4C130 4 136 9 150 9H160"
        stroke={color}
        strokeWidth="1"
        strokeOpacity="0.6"
      />
      <circle cx="156" cy="9" r="1" fill={color} opacity="0.3" />
    </svg>
  );
}

// ─────────────────────────────────────────────
// LUXURY FINE-STROKE GOLD CIRCULAR ICONS
// ─────────────────────────────────────────────
function MortarPestleIcon({ size = 26, color = '#CFA556' }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Pestle */}
      <path d="M14.5 3L9.8 11.2" />
      <path d="M16 3.5C16.8 4.3 16.8 5.7 16 6.5L14 8.5" />
      {/* Mortar Top Rim */}
      <path d="M3.5 11H20.5" />
      {/* Mortar Bowl */}
      <path d="M4.5 11C4.8 15.6 7.8 19 12 19C16.2 19 19.2 15.6 19.5 11" />
      {/* Base */}
      <path d="M8 19L7 21H17L16 19" />
      {/* Ground Spices */}
      <circle cx="9.5" cy="14.5" r="0.7" fill={color} stroke="none" />
      <circle cx="14" cy="14" r="0.7" fill={color} stroke="none" />
      <circle cx="11.8" cy="16.2" r="0.7" fill={color} stroke="none" />
    </svg>
  );
}

function BotanicalSproutIcon({ size = 26, color = '#CFA556' }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Stem */}
      <path d="M12 21V10" />
      {/* Left Leaf */}
      <path d="M12 14.5C8 14.5 5.5 11.5 5.5 7.5C9.5 7.5 12 10.5 12 14.5Z" />
      {/* Right Leaf */}
      <path d="M12 11.5C15.5 11.5 18.5 8.5 18.5 4.5C14.5 4.5 12 7.5 12 11.5Z" />
      {/* Base Ground */}
      <path d="M8.5 21H15.5" />
    </svg>
  );
}

function MasalaBowlIcon({ size = 26, color = '#CFA556' }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Aromatic spice aroma steam */}
      <path d="M8 4C8 5.2 9 6 9 7.2" strokeDasharray="1.2 1.2" />
      <path d="M12 2.5C12 4.2 13 5.2 13 6.8" strokeDasharray="1.2 1.2" />
      <path d="M16 4C16 5.2 17 6 17 7.2" strokeDasharray="1.2 1.2" />
      {/* Bowl Rim */}
      <path d="M3 10.5H21" />
      {/* Mound of fresh masala powder */}
      <path d="M6 10.5C7.2 8 9.5 7 12 7C14.5 7 16.8 8 18 10.5" />
      {/* Bowl Body */}
      <path d="M4 10.5C4.6 15.5 7.8 19 12 19C16.2 19 19.4 15.5 20 10.5" />
      {/* Stand Base */}
      <path d="M8.5 19L8 21H16L15.5 19" />
    </svg>
  );
}

// ─────────────────────────────────────────────
// STORY DATA
// ─────────────────────────────────────────────
const storyItems = [
  {
    id: 'heritage',
    icon: MortarPestleIcon,
    text: 'Rooted in royal culinary heritage, Deccan Masala Co. has been a cornerstone of authentic Indian gastronomy, bringing families and food lovers together over exceptional comfort and warm hospitality.',
  },
  {
    id: 'quality',
    icon: BotanicalSproutIcon,
    text: 'Our commitment to quality starts with locally sourced, handpicked spices from trusted growers and suppliers. Every blend is stone-ground fresh daily by our passionate team of blenders who treat flavor as an art form.',
  },
  {
    id: 'tradition',
    icon: MasalaBowlIcon,
    text: 'From our signature Nizami biryani masalas to seasonal spice reserves, we believe great food creates lasting memories. Join us and taste the difference that dedication makes.',
  },
];

interface StoryCraftSectionProps {
  showCta?: boolean;
  ctaLink?: string;
  ctaText?: string;
  badgeText?: string;
}

export default function StoryCraftSection({
  showCta = true,
  ctaLink = '/about',
  ctaText = 'Explore Our Story',
  badgeText = 'Nizami Culinary Heritage',
}: StoryCraftSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="about"
      aria-labelledby="story-craft-heading"
      style={{
        position: 'relative',
        padding: 'clamp(70px, 9vw, 130px) clamp(20px, 5vw, 80px)',
        maxWidth: 1360,
        margin: '0 auto',
        background: '#161616',
        overflow: 'hidden',
      }}
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(207, 165, 86, 0.07) 0%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: 420,
          height: 420,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201, 104, 26, 0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(36px, 5vw, 64px)',
          alignItems: 'center',
        }}
      >
        {/* ─────────────────────────────────────────────
            LEFT COLUMN: LUXURY SPICE STILL-LIFE VISUAL
        ───────────────────────────────────────────── */}
        <ScrollReveal direction="left" delay={0.1}>
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: 560,
              margin: '0 auto',
            }}
          >
            {/* Outer Golden Glow Border Frame */}
            <div
              style={{
                position: 'relative',
                borderRadius: 24,
                padding: 1,
                background: 'linear-gradient(145deg, rgba(207, 165, 86, 0.45) 0%, rgba(207, 165, 86, 0.1) 40%, rgba(255, 255, 255, 0.04) 100%)',
                boxShadow: '0 24px 60px rgba(0, 0, 0, 0.75), 0 0 40px rgba(207, 165, 86, 0.12)',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  borderRadius: 23,
                  overflow: 'hidden',
                  background: '#181614',
                  aspectRatio: '4 / 5',
                }}
              >
                {/* Visual Image */}
                <img
                  src="/crafted_passion_poster.jpg"
                  alt="Deccan authentic spices, turmeric powder, and brass mortar"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    filter: 'brightness(0.92) contrast(1.08)',
                    transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)';
                  }}
                />

                {/* Subtle vignette gradient */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(18, 18, 18, 0.15) 0%, rgba(18, 18, 18, 0.2) 50%, rgba(18, 18, 18, 0.85) 100%)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Top Badge: Royal Single-Origin */}
                <div
                  style={{
                    position: 'absolute',
                    top: 20,
                    left: 20,
                    padding: '8px 16px',
                    borderRadius: 999,
                    background: 'rgba(22, 20, 18, 0.82)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(207, 165, 86, 0.35)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    color: '#FFF2C6',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.72rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                  }}
                >
                  <Sparkles size={13} color="#CFA556" />
                  <span>Single-Origin Heritage</span>
                </div>

                {/* Bottom Floating Glass Card */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    right: 20,
                    padding: '16px 20px',
                    borderRadius: 16,
                    background: 'rgba(24, 22, 20, 0.88)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(207, 165, 86, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: '0 12px 32px rgba(0,0,0,0.5)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: '50%',
                        background: 'rgba(207, 165, 86, 0.15)',
                        border: '1px solid rgba(207, 165, 86, 0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#CFA556',
                      }}
                    >
                      <Award size={18} />
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.86rem', fontWeight: 600, color: '#FFFFFF' }}>
                        100% Stone-Ground Fresh
                      </div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.74rem', color: '#BCBCBC' }}>
                        Zero Preservatives • Pure Essential Oils
                      </div>
                    </div>
                  </div>

                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.7rem',
                      color: '#CFA556',
                      letterSpacing: '0.1em',
                      fontWeight: 600,
                    }}
                  >
                    EST. HYDERABAD
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ─────────────────────────────────────────────
            RIGHT COLUMN: REDESIGNED STORY CARD WITH 3 PILLARS
        ───────────────────────────────────────────── */}
        <ScrollReveal direction="right" delay={0.15}>
          <div
            style={{
              position: 'relative',
              borderRadius: 24,
              padding: 'clamp(28px, 4vw, 44px) clamp(24px, 3.5vw, 40px)',
              background: 'linear-gradient(165deg, rgba(30, 27, 24, 0.92) 0%, rgba(20, 19, 18, 0.97) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(207, 165, 86, 0.25)',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
            }}
          >
            {/* Corner Filigree Accents */}
            <div
              style={{
                position: 'absolute',
                top: 12,
                left: 12,
                width: 14,
                height: 14,
                borderTop: '1.5px solid rgba(207, 165, 86, 0.4)',
                borderLeft: '1.5px solid rgba(207, 165, 86, 0.4)',
                borderRadius: '3px 0 0 0',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: 12,
                right: 12,
                width: 14,
                height: 14,
                borderTop: '1.5px solid rgba(207, 165, 86, 0.4)',
                borderRight: '1.5px solid rgba(207, 165, 86, 0.4)',
                borderRadius: '0 3px 0 0',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 12,
                left: 12,
                width: 14,
                height: 14,
                borderBottom: '1.5px solid rgba(207, 165, 86, 0.4)',
                borderLeft: '1.5px solid rgba(207, 165, 86, 0.4)',
                borderRadius: '0 0 0 3px',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 12,
                right: 12,
                width: 14,
                height: 14,
                borderBottom: '1.5px solid rgba(207, 165, 86, 0.4)',
                borderRight: '1.5px solid rgba(207, 165, 86, 0.4)',
                borderRadius: '0 0 3px 0',
                pointerEvents: 'none',
              }}
            />

            {/* Eyebrow */}
            <div style={{ textAlign: 'center', marginBottom: 12 }}>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.72rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#CFA556',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <span>✦</span> OUR STORY <span>✦</span>
              </span>
            </div>

            {/* Main Heading */}
            <h2
              id="story-craft-heading"
              style={{
                fontFamily: "'GT Sectra', 'Marcellus', 'Cormorant', serif",
                fontSize: 'clamp(2rem, 3.4vw, 3.1rem)',
                fontWeight: 600,
                color: '#FFFFFF',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                textAlign: 'center',
                margin: '0 0 16px 0',
              }}
            >
              Crafted with Passion,<br />
              <span className="gold-shimmer-text" style={{ fontWeight: 600 }}>
                Served with Heart
              </span>
            </h2>

            {/* Top Ornamental Divider */}
            <div style={{ margin: '14px auto 26px auto' }}>
              <RoyalFlourish width={160} color="#CFA556" />
            </div>

            {/* 3 Story Rows with Circular Gold Badges */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {storyItems.map((item, idx) => {
                const IconComponent = item.icon;
                const isHovered = hoveredIndex === idx;

                return (
                  <motion.div
                    key={item.id}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    animate={{
                      backgroundColor: isHovered ? 'rgba(207, 165, 86, 0.06)' : 'rgba(255, 255, 255, 0.015)',
                      borderColor: isHovered ? 'rgba(207, 165, 86, 0.4)' : 'rgba(255, 255, 255, 0.06)',
                      y: isHovered ? -2 : 0,
                    }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 20,
                      padding: '16px 18px',
                      borderRadius: 16,
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      transition: 'all 0.25s ease',
                      cursor: 'default',
                    }}
                  >
                    {/* Gold Circular Outline Icon Badge */}
                    <div
                      style={{
                        flexShrink: 0,
                        width: 52,
                        height: 52,
                        borderRadius: '50%',
                        border: isHovered ? '1.5px solid #CFA556' : '1.5px solid rgba(207, 165, 86, 0.5)',
                        background: isHovered
                          ? 'radial-gradient(circle, rgba(207, 165, 86, 0.25) 0%, rgba(207, 165, 86, 0.08) 100%)'
                          : 'radial-gradient(circle, rgba(207, 165, 86, 0.12) 0%, rgba(207, 165, 86, 0.02) 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: isHovered
                          ? '0 0 22px rgba(207, 165, 86, 0.45), inset 0 0 10px rgba(207, 165, 86, 0.2)'
                          : '0 4px 14px rgba(0, 0, 0, 0.4), inset 0 0 8px rgba(207, 165, 86, 0.08)',
                        transition: 'all 0.3s ease',
                        transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                      }}
                    >
                      <IconComponent size={24} color={isHovered ? '#FFE8A3' : '#CFA556'} />
                    </div>

                    {/* Text block */}
                    <div style={{ flex: 1 }}>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '0.92rem',
                          color: isHovered ? '#FFFFFF' : '#D4D4D4',
                          lineHeight: 1.68,
                          margin: 0,
                          transition: 'color 0.25s ease',
                        }}
                      >
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Ornamental Divider */}
            <div style={{ margin: '26px auto 26px auto' }}>
              <RoyalFlourish width={160} color="#CFA556" />
            </div>

            {/* Bottom Action Area */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: showCta ? 'space-between' : 'center',
                gap: 16,
              }}
            >
              {showCta && (
                <Link
                  to={ctaLink}
                  id="about-cta-single"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '14px 34px',
                    borderRadius: 999,
                    background: '#CFA556',
                    color: '#161412',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: '0.92rem',
                    letterSpacing: '0.01em',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease',
                    boxShadow: '0 4px 20px rgba(207, 165, 86, 0.32)',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = '#E2B866';
                    el.style.transform = 'translateY(-2px)';
                    el.style.boxShadow = '0 8px 26px rgba(207, 165, 86, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = '#CFA556';
                    el.style.transform = 'translateY(0)';
                    el.style.boxShadow = '0 4px 20px rgba(207, 165, 86, 0.32)';
                  }}
                >
                  <span>{ctaText}</span>
                  <ArrowUpRight size={16} />
                </Link>
              )}

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '10px 18px',
                  borderRadius: 999,
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(207, 165, 86, 0.2)',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.72rem',
                  letterSpacing: '0.08em',
                  color: '#CFA556',
                }}
              >
                <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: '#CFA556' }} />
                <span>{badgeText}</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
