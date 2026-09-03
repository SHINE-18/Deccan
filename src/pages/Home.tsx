// src/pages/Home.tsx
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowUpRight, Leaf, Package, HeartHandshake,
  ChevronRight
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import StoryCraftSection from '../components/StoryCraftSection';
import ChefSignatureSeries from '../components/ChefSignatureSeries';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import CategoryIcon from '../components/CategoryIcon';

gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────────
// Spice image gradient placeholders
// ─────────────────────────────────────────────
const signatureMasalas = [
  { id: 1, label: 'Cuvée Étoile', sub: 'Royal Spice Reserve', bg: '/sig-1.png' },
  { id: 2, label: 'Osso Buco Ambrosia', sub: 'Hyderabadi Biryani Masala', bg: '/sig-2.png' },
  { id: 3, label: 'Wagyu Tataki Umami', sub: 'A5 Miyazaki Reserve', bg: '/sig-3.png' },
  { id: 4, label: 'Nizami Biryani Banquet', sub: 'Heritage Royal Blend', bg: '/sig-4.png' },
  { id: 5, label: 'Truffle Tagliatelle Silk', sub: 'Signature Flavored Paste', bg: '/sig-5.png' },
  { id: 6, label: 'Royal Deccan Feast', sub: 'Imperial Reserve Blend', bg: '/sig-6.png' },
];

const heritageItems = [
  {
    id: 'deccan-classics',
    title: 'Deccan Classics',
    desc: 'Timeless single-origin and everyday spice blends rooted in Deccan culinary tradition — 100% natural, aromatic, and pure.',
    image: '/products/deccan-classics-collection.jpg',
  },
  {
    id: 'hyderabadi-masala',
    title: 'Hyderabadi Masala',
    desc: 'The royal Nizami flavors of Hyderabad\'s historic kitchens — authentic Biryani, Nihari, and Haleem spice perfection.',
    image: '/products/hyderabadi-biryani-masala.jpg',
  },
  {
    id: 'signature-quality',
    title: 'Signature Quality',
    desc: 'Our imperial reserve collection — handcrafted in ultra-small batches with rare spices for extraordinary, unforgettable dishes.',
    image: '/products/signature-quality-tins.jpg',
  },
  {
    id: 'paste-with-flavors',
    icon: '🌿',
    title: 'Paste With Flavors',
    desc: 'Freshly ground, ready-to-cook aromatic pastes capturing maximum flavor, freshness, and convenience for modern gourmet cooking.',
    image: '/products/paste-with-flavors-jars.jpg',
  },
];


// ─────────────────────────────────────────────
// KINETIC HERO — Standard Luxury Deccan Masala Experience
// ─────────────────────────────────────────────
function KineticHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const bgParallax = useTransform(scrollY, [0, 600], ['0%', '12%']);

  // GSAP char-by-char entrance
  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    const chars = el.querySelectorAll('.hero-char');
    gsap.fromTo(
      chars,
      { opacity: 0, y: 45, rotateX: -15 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        stagger: 0.035,
        duration: 0.85,
        ease: 'power3.out',
        delay: 0.25,
      }
    );
  }, []);

  const headline = 'Where Tradition Meets Taste';

  return (
    <section
      ref={containerRef}
      aria-label="Hero banner"
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
      {/* Masala Spices Atmospheric Background Image */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("/masala_hero_bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          opacity: 0.42,
          y: bgParallax,
          scale: 1.06,
          pointerEvents: 'none',
        }}
      />

      {/* Atmospheric Dark Luxury Gradient Overlays */}
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

      {/* Main Content Layout */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: 1100,
          width: '100%',
        }}
      >
        {/* Hero headline — styled like StoryCraftSection "Crafted with Passion" */}
        <h1
          ref={headlineRef}
          aria-label={headline}
          style={{
            fontFamily: "'Italiana', 'Playfair Display', 'Cormorant', serif",
            fontSize: 'clamp(2.2rem, 5.2vw, 4.2rem)',
            fontWeight: 400,
            color: '#FFFFFF',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            margin: '0 0 16px 0',
            maxWidth: 820,
          }}
        >
          {headline.split(' ').map((word, wordIndex) => (
            <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap', marginRight: '0.28em', fontStyle: word === 'Tradition' ? 'italic' : 'normal', color: word === 'Tradition' ? '#CFA556' : undefined }}>
              {word.split('').map((char, charIndex) => (
                <span key={charIndex} className="hero-char" style={{ display: 'inline-block' }}>
                  {char}
                </span>
              ))}
            </span>
          ))}
        </h1>

        {/* Sub description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
            color: '#D4D4D4',
            marginTop: 30,
            maxWidth: 540,
            lineHeight: 1.7,
            textShadow: '0 2px 12px rgba(0,0,0,0.7)',
          }}
        >
          Premium Indian spice blends rooted in royal Deccan heritage — handcrafted, 100% natural, and sealed for unmatched purity and aroma.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          style={{
            marginTop: 42,
            display: 'flex',
            gap: 18,
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <Link
            to="/products"
            id="hero-cta-explore"
            aria-label="Explore the spice collection"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '15px 34px',
              borderRadius: 6,
              background: '#CFA556',
              color: '#161616',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: '0.92rem',
              letterSpacing: '0.02em',
              transition: 'all 0.25s ease',
              boxShadow: '0 4px 18px rgba(207, 165, 86, 0.28)',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = '#E2B866';
              el.style.transform = 'translateY(-2px)';
              el.style.boxShadow = '0 8px 24px rgba(207, 165, 86, 0.45)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = '#CFA556';
              el.style.transform = 'translateY(0)';
              el.style.boxShadow = '0 4px 18px rgba(207, 165, 86, 0.28)';
            }}
          >
            Explore the Collection
            <ArrowUpRight size={16} />
          </Link>

          <Link
            to="/about"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '15px 30px',
              borderRadius: 6,
              border: '1px solid rgba(207, 165, 86, 0.35)',
              color: '#CFA556',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.92rem',
              fontWeight: 500,
              letterSpacing: '0.02em',
              transition: 'all 0.25s ease',
              background: 'rgba(22, 22, 22, 0.4)',
              backdropFilter: 'blur(8px)',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'rgba(207, 165, 86, 0.12)';
              el.style.borderColor = 'rgba(207, 165, 86, 0.7)';
              el.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'rgba(22, 22, 22, 0.4)';
              el.style.borderColor = 'rgba(207, 165, 86, 0.35)';
              el.style.color = '#CFA556';
            }}
          >
            Our Story
          </Link>
        </motion.div>
      </div>
    </section>
  );
}



// ─────────────────────────────────────────────
// HERITAGE / PRODUCTS SECTION (expandable rows) — on warm dark bg
// ─────────────────────────────────────────────
function HeritageSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="heritage"
      className="heritage-grid"
      aria-labelledby="heritage-heading"
      style={{
        padding: 'clamp(60px, 8vw, 120px) clamp(20px, 5vw, 80px)',
        maxWidth: 1300,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 60,
        alignItems: 'start',
      }}
    >
      {/* Left: expandable list */}
      <div>
        <ScrollReveal direction="left">
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#CFA556',
          }}>
            Our Collections
          </span>
          <h2 id="heritage-heading" style={{
            fontFamily: "'Italiana', 'Fraunces', 'Marcellus', 'Playfair Display', serif",
            fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
            fontWeight: 400,
            color: '#FAFAF7',
            margin: '12px 0 32px',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
          }}>
            A Legacy of Flavor
          </h2>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {heritageItems.map((item, i) => (
            <ScrollReveal key={item.title} direction="left" delay={i * 0.08}>
              <button
                onClick={() => setActiveIndex(i)}
                aria-expanded={activeIndex === i}
                aria-controls={`heritage-desc-${i}`}
                style={{
                  all: 'unset',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: 16,
                  padding: '18px 20px',
                  borderRadius: 12,
                  background: activeIndex === i ? 'rgba(207, 165, 86, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                  border: activeIndex === i ? '1px solid rgba(207, 165, 86, 0.4)' : '1px solid rgba(255, 255, 255, 0.06)',
                  cursor: 'pointer',
                  width: '100%',
                  boxSizing: 'border-box',
                  transition: 'all 0.25s ease',
                }}
              >
                <div style={{ flex: 1 }}>
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: activeIndex === i ? '#CFA556' : '#FAFAF7',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 12,
                    marginBottom: activeIndex === i ? 10 : 0,
                    transition: 'color 0.3s ease',
                  }}>
                    <CategoryIcon
                      categoryId={item.id}
                      size={20}
                      color={activeIndex === i ? '#CFA556' : '#FAFAF7'}
                    />
                    <span>{item.title}</span>
                  </span>
                  <motion.div
                    id={`heritage-desc-${i}`}
                    initial={false}
                    animate={{ height: activeIndex === i ? 'auto' : 0, opacity: activeIndex === i ? 1 : 0 }}
                    transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.88rem',
                      color: 'rgba(250,250,247,0.7)',
                      lineHeight: 1.65,
                      margin: 0,
                    }}>
                      {item.desc}
                    </p>
                  </motion.div>
                </div>
                <motion.div
                  animate={{ rotate: activeIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  style={{ flexShrink: 0, color: '#CFA556', marginTop: 3 }}
                >
                  <ChevronRight size={18} />
                </motion.div>
              </button>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <Link
            to="/products"
            id="heritage-cta-explore"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              marginTop: 28,
              padding: '12px 26px',
              borderRadius: 999,
              border: '1px solid rgba(207, 165, 86, 0.35)',
              color: '#FAFAF7',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.88rem',
              letterSpacing: '0.02em',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'rgba(207, 165, 86, 0.15)';
              el.style.borderColor = '#CFA556';
              el.style.color = '#CFA556';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'transparent';
              el.style.borderColor = 'rgba(207, 165, 86, 0.35)';
              el.style.color = '#FAFAF7';
            }}
          >
            Explore Products <ArrowUpRight size={14} />
          </Link>
        </ScrollReveal>
      </div>

      {/* Right: image panel with smooth category image transition */}
      <ScrollReveal direction="right" delay={0.1}>
        <div style={{
          height: 'clamp(340px, 45vw, 540px)',
          borderRadius: 20,
          overflow: 'hidden',
          position: 'relative',
          background: '#1F1C18',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        }}>
          <AnimatePresence mode="wait">
            <motion.img
              key={heritageItems[activeIndex]?.image || activeIndex}
              src={heritageItems[activeIndex]?.image || '/heritage-lifestyle.png'}
              alt={heritageItems[activeIndex]?.title || 'Deccan Royal Spice'}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.95) contrast(1.05)',
              }}
            />
          </AnimatePresence>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(22,22,22,0.1) 0%, rgba(22,22,22,0.5) 100%)',
            pointerEvents: 'none',
          }} />
        </div>
      </ScrollReveal>
    </section>
  );
}

// ─────────────────────────────────────────────
// SIGNATURE MASALAS — dark luxury theme
// ─────────────────────────────────────────────
function SignatureMasalas() {
  const marqueeItems = [...signatureMasalas, ...signatureMasalas, ...signatureMasalas];

  return (
    <section
      id="signature"
      aria-labelledby="signature-heading"
      style={{
        padding: 'clamp(60px, 8vw, 100px) 0',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        background: '#161616',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      <ScrollReveal>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: 40,
          flexWrap: 'wrap',
          gap: 24,
          maxWidth: 1300,
          margin: '0 auto 40px auto',
          padding: '0 clamp(20px, 5vw, 80px)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ height: 2, width: 36, background: '#CFA556' }} />
            <h2
              id="signature-heading"
              style={{
                fontFamily: "'GT Sectra', 'Marcellus', 'Cormorant', serif",
                fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
                fontWeight: 500,
                color: '#CFA556',
                letterSpacing: '-0.02em',
              }}
            >
              Signature Masalas
            </h2>
          </div>
          <div>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.92rem',
              color: '#D4D4D4',
              maxWidth: 360,
              lineHeight: 1.65,
            }}>
              Savor the moment with our exquisite dishes crafted with passion and the finest ingredients.
            </p>
          </div>
        </div>
      </ScrollReveal>

      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: 1120,
          margin: '0 auto',
          overflow: 'hidden',
          borderRadius: 20,
        }}
      >
        {/* Left fade mask */}
        <div style={{
          position: 'absolute', top: 0, bottom: 0, left: 0, width: 80,
          zIndex: 10, pointerEvents: 'none',
          background: 'linear-gradient(to right, #161616 0%, rgba(22,22,22,0.85) 50%, transparent 100%)',
        }} />
        {/* Right fade mask */}
        <div style={{
          position: 'absolute', top: 0, bottom: 0, right: 0, width: 80,
          zIndex: 10, pointerEvents: 'none',
          background: 'linear-gradient(to left, #161616 0%, rgba(22,22,22,0.85) 50%, transparent 100%)',
        }} />

        <div className="signature-marquee-track">
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              style={{
                width: 'clamp(260px, calc((100vw - 80px - 40px) / 3), 360px)',
                flex: '0 0 clamp(260px, calc((100vw - 80px - 40px) / 3), 360px)',
              }}
            >
              <div
                style={{
                  aspectRatio: '3/4',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '24px 20px',
                  cursor: 'pointer',
                  position: 'relative',
                  borderRadius: 12,
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                }}
              >
                <img
                  src={item.bg}
                  alt={item.label}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'brightness(0.9) contrast(1.1)',
                    transition: 'transform 0.5s ease',
                  }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(22,22,22,0.92) 0%, rgba(22,22,22,0.4) 40%, transparent 100%)',
                  pointerEvents: 'none',
                }} />

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// FEATURE GRID — "Not Your Average Masala"
// ─────────────────────────────────────────────
const features = [
  {
    icon: <HeartHandshake size={44} color="#CFA556" strokeWidth={1.3} />,
    title: 'Handcrafted Heritage',
    desc: "Rooted in India's spice traditions, every blend is carefully handcrafted to preserve authentic regional flavorz passed through generations.",
  },
  {
    icon: <Leaf size={44} color="#CFA556" strokeWidth={1.3} />,
    title: '100% Natural\nIngredients',
    desc: 'No preservatives. No artificial colors. Only pure, farm-fresh spices sourced directly from the hands that nurture them.',
  },
  {
    icon: <Package size={44} color="#CFA556" strokeWidth={1.3} />,
    title: 'Sealed for Purity',
    desc: 'Air-tight, eco-conscious packaging ensures each spice stays as fresh and fragrant as the day it was ground.',
  },
];

function FeatureGrid() {
  return (
    <section
      aria-labelledby="feature-heading"
      style={{
        padding: 'clamp(80px, 10vw, 130px) clamp(20px, 5vw, 80px)',
        background: '#161616',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <ScrollReveal>
          <div style={{ marginBottom: 16, textAlign: 'center' }}>
            <h2
              id="feature-heading"
              style={{
                fontFamily: "'Italiana', 'Fraunces', 'Marcellus', 'Playfair Display', serif",
                fontSize: 'clamp(2.5rem, 4.8vw, 3.8rem)',
                fontWeight: 400,
                textAlign: 'center',
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
              }}
            >
              <span style={{ color: '#CFA556', marginRight: 12 }}>Not Your</span>
              Average Masala
            </h2>
          </div>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1rem',
              fontWeight: 500,
              color: '#CFA556',
              textAlign: 'center',
              maxWidth: 720,
              margin: '0 auto 60px auto',
              lineHeight: 1.65,
            }}
          >
            We're the spice brand that gets it — authentic flavorz, modern convenience, and that irresistible touch that makes your food (and your feed) shine.
          </p>
        </ScrollReveal>

        <div
          className="features-grid-container"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 28,
          }}
        >
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.12} direction="up">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                style={{
                  padding: '44px 32px',
                  borderRadius: 16,
                  border: '1px solid rgba(188, 188, 188, 0.16)',
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(4px)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: 20,
                  height: '100%',
                  boxSizing: 'border-box',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(207, 165, 86, 0.4)';
                  el.style.boxShadow = '0 8px 32px rgba(207, 165, 86, 0.1)';
                  el.style.background = 'rgba(255, 255, 255, 0.04)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(188, 188, 188, 0.16)';
                  el.style.boxShadow = 'none';
                  el.style.background = 'rgba(255, 255, 255, 0.02)';
                }}
              >
                <div style={{ marginBottom: 4, display: 'flex', justifyContent: 'center' }}>
                  {feature.icon}
                </div>

                <h3
                  style={{
                    fontFamily: "'GT Sectra', 'Marcellus', 'Cormorant', serif",
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: '#CFA556',
                    lineHeight: 1.3,
                    whiteSpace: 'pre-line',
                  }}
                >
                  {feature.title}
                </h3>

                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.92rem',
                    fontWeight: 500,
                    color: 'rgba(255, 255, 255, 0.9)',
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {feature.desc}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}




// ─────────────────────────────────────────────
// CLOSING TRIPTYCH — warm dark bg
// ─────────────────────────────────────────────
const triptychLines = ['sourced with care', 'blended by hand', 'delivered fresh'];

function ClosingTriptych() {
  return (
    <section
      aria-label="Brand closing statement"
      style={{
        position: 'relative',
        padding: 'clamp(80px, 10vw, 140px) clamp(20px, 5vw, 80px)',
        overflow: 'hidden',
        background: '#1C1A17',
      }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {triptychLines.map((line, i) => (
          <ScrollReveal key={line} delay={i * 0.15} direction="up">
            <p style={{
              fontFamily: "'GT Sectra', 'Marcellus', 'Cormorant', serif",
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: i === 1 ? 700 : 300,
              color: i === 1 ? '#C9681A' : 'rgba(250,250,247,0.5)',
              fontStyle: i === 0 || i === 2 ? 'italic' : 'normal',
              textAlign: 'center',
              lineHeight: 1.1,
              margin: '8px 0',
              letterSpacing: '-0.02em',
            }}>
              {line}
            </p>
          </ScrollReveal>
        ))}

        <ScrollReveal delay={0.5} direction="up">
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 48 }}>
            <Link
              to="/products"
              id="triptych-cta"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '14px 32px',
                borderRadius: 999,
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#FAFAF7',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.88rem',
                letterSpacing: '0.02em',
                fontWeight: 500,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = '#C9681A';
                el.style.borderColor = '#C9681A';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'transparent';
                el.style.borderColor = 'rgba(255,255,255,0.15)';
              }}
            >
              Shop the Collection <ArrowUpRight size={14} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// STARTING PAGE PRELOADER ANIMATION
// ─────────────────────────────────────────────
function StartingPagePreloader({ onFinish }: { onFinish: () => void }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onFinish, 300);
          return 100;
        }
        return prev + 5;
      });
    }, 45);
    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#161616',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
      }}
    >
      <motion.div
        animate={{ scale: [0.96, 1.04, 0.96] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}
      >
        <Logo size="md" variant="light" />
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, marginTop: 12 }}>
        <span style={{
          fontFamily: "'GT Sectra', 'Marcellus', 'Cormorant', serif",
          fontSize: '2.6rem',
          fontWeight: 500,
          color: '#CFA556',
          letterSpacing: '-0.02em',
        }}>
          {percent}%
        </span>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.6rem',
          letterSpacing: '0.25em',
          color: '#D4D4D4',
          textTransform: 'uppercase',
        }}>
          Milling Royal Spice Reserve
        </span>
      </div>

      <div style={{
        width: 180,
        height: 2,
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 99,
        overflow: 'hidden',
        marginTop: 6,
      }}>
        <div style={{
          width: `${percent}%`,
          height: '100%',
          background: '#CFA556',
          transition: 'width 0.05s linear',
        }} />
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// HOME PAGE — dark luxury theme
// ─────────────────────────────────────────────
export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <div style={{ background: '#161616', minHeight: '100vh', color: '#FFFFFF' }}>
      <AnimatePresence>
        {loading && (
          <StartingPagePreloader
            onFinish={() => {
              setLoading(false);
              window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
            }}
          />
        )}
      </AnimatePresence>

      <KineticHero />
      <StoryCraftSection />
      <HeritageSection />
      <ChefSignatureSeries />
      <SignatureMasalas />
      <FeatureGrid />
      <ClosingTriptych />
      <Footer />
    </div>
  );
}
