// src/pages/Home.tsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowUpRight, Leaf, Package, HeartHandshake
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import StoryCraftSection from '../components/StoryCraftSection';
import ChefSignatureSeries from '../components/ChefSignatureSeries';
import NavanyaHero from '../components/NavanyaHero';
import Footer from '../components/Footer';
import Logo from '../components/Logo';

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
// HERITAGE / PRODUCTS SECTION (expandable rows) — on warm dark bg
// ─────────────────────────────────────────────
function HeritageSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="heritage"
      aria-labelledby="heritage-heading"
      style={{
        width: '100%',
        padding: 'clamp(80px, 9vw, 130px) 0',
        background: '#161616',
        position: 'relative',
      }}
    >
      <div className="editorial-container">
        <div className="heritage-grid">
          {/* Left: Clean, Left-Aligned Editorial Story & Collections */}
      <div>
        <ScrollReveal direction="left">
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
              Our Collections
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

          {/* Headline */}
          <h2
            id="heritage-heading"
            style={{
              margin: '0 0 32px 0',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'left',
              fontFamily: "'GT Sectra', 'Marcellus', 'Cormorant', serif",
              fontSize: 'clamp(2.2rem, 4.2vw, 3.8rem)',
              fontWeight: 400,
              color: '#CFA556',
              lineHeight: 1.15,
              letterSpacing: '0.02em',
            }}
          >
            <span>A Legacy of</span>
            <span
              style={{
                fontFamily: "'Italiana', 'Playfair Display', 'Cormorant', serif",
                fontStyle: 'italic',
                color: '#FFF2C6',
                fontWeight: 400,
                marginTop: 2,
              }}
            >
              Flavor.
            </span>
          </h2>
        </ScrollReveal>

        {/* Clean Unboxed List — No chunky boxes, pure typography */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {heritageItems.map((item, i) => {
            const isActive = activeIndex === i;

            return (
              <ScrollReveal key={item.title} direction="left" delay={i * 0.06}>
                <div
                  onClick={() => setActiveIndex(i)}
                  style={{
                    padding: '20px 0',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {/* Title Row */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div
                      style={{
                        width: isActive ? 20 : 0,
                        height: 2,
                        backgroundColor: '#CFA556',
                        borderRadius: 1,
                        transition: 'width 0.3s ease',
                        flexShrink: 0,
                      }}
                    />
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', 'GT Sectra', serif",
                        fontSize: 'clamp(1.15rem, 1.4vw, 1.35rem)',
                        fontWeight: isActive ? 600 : 400,
                        color: isActive ? '#F7F3EB' : 'rgba(230, 218, 204, 0.45)',
                        margin: 0,
                        letterSpacing: '0.01em',
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Clean Supporting Paragraph */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isActive ? 'auto' : 0,
                      opacity: isActive ? 1 : 0,
                      marginTop: isActive ? 12 : 0,
                    }}
                    transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{ overflow: 'hidden', paddingLeft: isActive ? 34 : 0, transition: 'padding-left 0.3s ease' }}
                  >
                    <p
                      style={{
                        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                        fontSize: 'clamp(0.92rem, 1.05vw, 1.02rem)',
                        lineHeight: 1.62,
                        color: 'rgba(230, 218, 204, 0.78)',
                        margin: 0,
                        maxWidth: 510,
                        fontWeight: 400,
                      }}
                    >
                      {item.desc}
                    </p>
                  </motion.div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Clean Link */}
        <ScrollReveal delay={0.35}>
          <Link
            to={heritageItems[activeIndex]?.id ? `/products?category=${heritageItems[activeIndex].id}` : '/products'}
            id="heritage-cta-explore"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              marginTop: 32,
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
            Explore Products <ArrowUpRight size={16} />
          </Link>
        </ScrollReveal>
      </div>

      {/* Right: Clean Visual Image Panel */}
      <ScrollReveal direction="right" delay={0.1}>
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
          <AnimatePresence mode="wait">
            <motion.img
              key={heritageItems[activeIndex]?.image || activeIndex}
              src={heritageItems[activeIndex]?.image || '/heritage-lifestyle.png'}
              alt={heritageItems[activeIndex]?.title || 'Deccan Royal Spice'}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.92) contrast(1.05)',
              }}
            />
          </AnimatePresence>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(22, 22, 22, 0.1) 0%, rgba(22, 22, 22, 0.4) 60%, rgba(22, 22, 22, 0.85) 100%)',
              pointerEvents: 'none',
            }}
          />
        </div>
      </ScrollReveal>
        </div>
      </div>
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
        <div
          className="editorial-container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 40,
            flexWrap: 'wrap',
            gap: 24,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ height: 2, width: 36, background: '#CFA556' }} />
            <h2
              id="signature-heading"
              style={{
                fontFamily: "'GT Sectra', 'Marcellus', 'Cormorant', serif",
                fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
                fontWeight: 500,
                color: '#CFA556',
                letterSpacing: '0.01em',
              }}
            >
              Signature <span style={{ fontFamily: "'Italiana', 'Playfair Display', 'Cormorant', serif", fontStyle: 'italic', color: '#FFF2C6', fontWeight: 400 }}>Masalas</span>
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
                fontFamily: "'GT Sectra', 'Marcellus', 'Cormorant', serif",
                fontSize: 'clamp(2.5rem, 4.8vw, 3.8rem)',
                fontWeight: 400,
                textAlign: 'center',
                color: '#CFA556',
                letterSpacing: '0.01em',
                lineHeight: 1.15,
              }}
            >
              Not Your Average <span style={{ fontFamily: "'Italiana', 'Playfair Display', 'Cormorant', serif", fontStyle: 'italic', color: '#FFF2C6', fontWeight: 400 }}>Masala</span>
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

      <NavanyaHero />
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
