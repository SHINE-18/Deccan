// src/pages/Home.tsx
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowUpRight, Award, Star, Leaf, Package, HeartHandshake,
  ChevronRight, MapPin
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import Footer from '../components/Footer';
import Logo from '../components/Logo';

gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────────
// Cycling index descriptors for hero eyebrow
// ─────────────────────────────────────────────
const cycleWords = ['heritage', 'handcrafted', 'heirloom'];

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
    title: 'Regal Indian Heritage',
    desc: 'A seamless journey through India\'s rich culinary heritage crafted with precision, passion, and timeless flavor — spanning five royal kitchens over 300 years.',
  },
  {
    title: 'Japanese Legacy',
    desc: 'A refined journey through Japan\'s culinary traditions where purity, balance, and craftsmanship raise every spice on every plate.',
  },
  {
    title: 'Italian Grandeur',
    desc: 'A journey of culinary mastery reimagined where simple ingredients are transformed into exquisite dishes by human hands.',
  },
  {
    title: 'Drinks Sip In Style',
    desc: 'Experience our signature spiced cocktails each sip designed to elevate your dining experience with aromatic warmth.',
  },
];

const stats = [
  { num: 300, suffix: '+', label: 'Years Heritage', icon: Star },
  { num: 12,  suffix: '',  label: 'World-Class Dishes', icon: Award },
  { num: 100, suffix: '%', label: 'Natural Ingredients', icon: Leaf },
  { num: 4,   suffix: ' Continents', label: 'Global Presence', icon: MapPin },
];

// ─────────────────────────────────────────────
// ANIMATED COUNTER
// ─────────────────────────────────────────────
function AnimCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1800;
        const steps = 60;
        const stepVal = target / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += stepVal;
          if (current >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);
      }
    }, { threshold: 0.5 });

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// ─────────────────────────────────────────────
// KINETIC HERO — Sofi Health inspired (cream bg, huge serif)
// ─────────────────────────────────────────────
function KineticHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const mousePos = useRef({ x: 0, y: 0 });
  const lerpPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  const { scrollY } = useScroll();
  const productY = useTransform(scrollY, [0, 600], [0, 60]);
  const productScale = useTransform(scrollY, [0, 600], [1, 1.08]);

  // Cycle index words
  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex(i => (i + 1) % cycleWords.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // GSAP char-by-char entrance
  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    const chars = el.querySelectorAll('.hero-char');
    gsap.fromTo(
      chars,
      { opacity: 0, y: 50, rotateX: -15 },
      {
        opacity: 1, y: 0, rotateX: 0,
        stagger: 0.04,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.3,
      }
    );
  }, []);

  // Mouse parallax lerp
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      mousePos.current = {
        x: (e.clientX - cx) / rect.width,
        y: (e.clientY - cy) / rect.height,
      };
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      lerpPos.current.x += (mousePos.current.x - lerpPos.current.x) * 0.06;
      lerpPos.current.y += (mousePos.current.y - lerpPos.current.y) * 0.06;
      if (productRef.current) {
        productRef.current.style.transform =
          `translateX(${-lerpPos.current.x * 18}px) translateY(${-lerpPos.current.y * 14}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const headline = 'spicedright';

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
        padding: '100px 40px 80px',
      }}
    >
      {/* Subtle grain texture */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.03\'/%3E%3C/svg%3E")',
        opacity: 0.25,
      }} />

      {/* Index/eyebrow row */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          position: 'absolute',
          top: 110,
          left: 40,
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
        }}
      >
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.6rem',
          letterSpacing: '0.25em',
          color: 'rgba(212,212,212,0.5)',
          textTransform: 'uppercase',
        }}>
          001
        </span>
        <div style={{ height: 40, overflow: 'hidden' }}>
          <AnimatePresence mode="wait">
            <motion.span
              key={wordIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              style={{
                display: 'block',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.65rem',
                letterSpacing: '0.18em',
                color: '#CFA556',
                textTransform: 'uppercase',
              }}
            >
              {cycleWords[wordIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Year mark top-right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{
          position: 'absolute',
          top: 110,
          right: 40,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.6rem',
          letterSpacing: '0.2em',
          color: 'rgba(255,255,255,0.25)',
          textTransform: 'uppercase',
        }}
      >
        ©2026
      </motion.div>

      {/* Giant kinetic headline */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1100 }}>
        <div
          ref={headlineRef}
          aria-label="Spiced Right"
          style={{
            fontFamily: "'Fraunces', 'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: 'clamp(4rem, 12vw, 11rem)',
            lineHeight: 0.9,
            letterSpacing: '-0.04em',
            color: '#FFFFFF',
            userSelect: 'none',
            perspective: 600,
          }}
        >
          {headline.split('').map((char, i) => (
            <span key={i} className="hero-char" style={{ display: 'inline-block' }}>
              {char}
            </span>
          ))}
        </div>

        {/* Sub description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1rem',
            color: '#D4D4D4',
            marginTop: 24,
            maxWidth: 460,
            lineHeight: 1.65,
          }}
        >
          Premium Indian spice blends rooted in royal Deccan heritage — handcrafted, 100% natural, sealed for purity.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          style={{ marginTop: 36, display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}
        >
          <Link
            to="/products"
            id="hero-cta-explore"
            aria-label="Explore the spice collection"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '14px 30px',
              borderRadius: 6,
              background: '#CFA556',
              color: '#161616',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: '0.88rem',
              letterSpacing: '0.02em',
              transition: 'all 0.25s ease',
              boxShadow: '0 4px 15px rgba(207, 165, 86, 0.25)',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = '#E2B866';
              el.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = '#CFA556';
              el.style.transform = 'translateY(0)';
            }}
          >
            Explore the Collection
            <ArrowUpRight size={15} />
          </Link>

          <Link
            to="/#about"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '14px 26px',
              borderRadius: 6,
              border: '1px solid rgba(207, 165, 86, 0.3)',
              color: '#CFA556',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.88rem',
              letterSpacing: '0.02em',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'rgba(207, 165, 86, 0.1)';
              el.style.borderColor = 'rgba(207, 165, 86, 0.6)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'transparent';
              el.style.borderColor = 'rgba(207, 165, 86, 0.3)';
            }}
          >
            Our Story
          </Link>
        </motion.div>
      </div>

      {/* Floating product visual */}
      <motion.div
        style={{
          position: 'absolute',
          right: 'clamp(20px, 6vw, 120px)',
          top: '50%',
          translateY: '-50%',
          y: productY,
          scale: productScale,
          zIndex: 1,
        }}
      >
        <div
          ref={productRef}
          className="float-anim"
          style={{
            width: 'clamp(260px, 32vw, 440px)',
            height: 'clamp(320px, 38vw, 540px)',
            borderRadius: 24,
            background: 'rgba(28,26,23,0.03)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <img
            src="/hero-spice-jar.png"
            alt="Deccan Masala Co. Royal Spice Reserve"
            style={{
              width: '94%',
              height: '94%',
              objectFit: 'contain',
              filter: 'drop-shadow(0 24px 48px rgba(28,26,23,0.15))',
              transition: 'transform 0.5s ease',
            }}
          />
        </div>
      </motion.div>

      {/* Bottom decorative line */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(187,169,138,0.3), transparent)',
      }} />
    </section>
  );
}

// ─────────────────────────────────────────────
// MARQUEE STRIP
// ─────────────────────────────────────────────
const spiceNames = ['Turmeric', 'Cumin', 'Coriander', 'Cardamom', 'Chilli', 'Fenugreek', 'Mace', 'Clove', 'Pepper', 'Saffron', 'Cinnamon', 'Mustard'];

function MarqueeStrip() {
  const repeated = [...spiceNames, ...spiceNames];
  return (
    <div
      aria-hidden="true"
      style={{
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '14px 0',
        background: '#161616',
      }}
    >
      <div className="marquee-track" style={{ display: 'flex', gap: 0, width: 'max-content' }}>
        {repeated.map((name, i) => (
          <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#D4D4D4',
              padding: '0 28px',
              whiteSpace: 'nowrap',
            }}>
              {name}
            </span>
            <span style={{ color: 'rgba(207, 165, 86, 0.4)', fontSize: '0.4rem' }}>●</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// HERITAGE SECTION (expandable rows) — on warm dark bg
// ─────────────────────────────────────────────
function HeritageSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="heritage"
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
            color: '#C9681A',
          }}>
            Our Legacy
          </span>
          <h2 id="heritage-heading" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
            fontWeight: 500,
            color: '#FAFAF7',
            margin: '12px 0 32px',
            lineHeight: 1.1,
          }}>
            A Legacy of Flavor
          </h2>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
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
                  padding: '20px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  cursor: 'pointer',
                  width: '100%',
                  borderTop: i === 0 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                }}
              >
                <div style={{ flex: 1 }}>
                  <span style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: activeIndex === i ? '#C9681A' : '#FAFAF7',
                    display: 'block',
                    marginBottom: activeIndex === i ? 10 : 0,
                    transition: 'color 0.3s ease',
                  }}>
                    {item.title}
                  </span>
                  <motion.div
                    id={`heritage-desc-${i}`}
                    initial={false}
                    animate={{ height: activeIndex === i ? 'auto' : 0, opacity: activeIndex === i ? 1 : 0 }}
                    transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.88rem',
                      color: 'rgba(250,250,247,0.5)',
                      lineHeight: 1.65,
                    }}>
                      {item.desc}
                    </p>
                  </motion.div>
                </div>
                <motion.div
                  animate={{ rotate: activeIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  style={{ flexShrink: 0, color: '#C9681A', marginTop: 3 }}
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
              padding: '12px 24px',
              borderRadius: 999,
              border: '1px solid rgba(255,255,255,0.15)',
              color: '#FAFAF7',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.85rem',
              letterSpacing: '0.02em',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'rgba(201,104,26,0.12)';
              el.style.borderColor = 'rgba(201,104,26,0.4)';
              el.style.color = '#C9681A';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'transparent';
              el.style.borderColor = 'rgba(255,255,255,0.15)';
              el.style.color = '#FAFAF7';
            }}
          >
            Explore Menu <ArrowUpRight size={13} />
          </Link>
        </ScrollReveal>
      </div>

      {/* Right: image panel */}
      <ScrollReveal direction="right" delay={0.1}>
        <div style={{
          height: 'clamp(320px, 45vw, 540px)',
          borderRadius: 20,
          overflow: 'hidden',
          position: 'relative',
          background: '#2A2520',
        }}>
          <img
            src="/heritage-lifestyle.png"
            alt="Deccan Royal Spice Heritage Sourcing"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.95) contrast(1.05)',
              transition: 'transform 0.6s ease',
            }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(28,26,23,0.05) 0%, rgba(28,26,23,0.4) 100%)',
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
                fontFamily: "'Fraunces', 'Cormorant Garamond', serif",
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
                fontFamily: "'Fraunces', 'Cormorant Garamond', serif",
                fontSize: 'clamp(2.4rem, 4.8vw, 3.6rem)',
                fontWeight: 700,
                textAlign: 'center',
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
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
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
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
                    fontFamily: "'Fraunces', serif",
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
// STATS STRIP — warm dark bg
// ─────────────────────────────────────────────
function StatsStrip() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
      gap: 1,
      background: 'rgba(255,255,255,0.06)',
      borderTop: '1px solid rgba(207, 165, 86, 0.2)',
      borderBottom: '1px solid rgba(207, 165, 86, 0.2)',
    }}>
      {stats.map(({ num, suffix, label, icon: Icon }) => (
        <div key={label} style={{
          padding: '40px 24px',
          textAlign: 'center',
          background: '#161616',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
        }}>
          <Icon size={20} color="#CFA556" strokeWidth={1.5} />
          <span style={{
            fontFamily: "'Fraunces', 'Cormorant Garamond', serif",
            fontSize: '2.5rem',
            fontWeight: 600,
            color: '#FFFFFF',
            letterSpacing: '-0.02em',
            lineHeight: 1,
          }}>
            <AnimCounter target={num} suffix={suffix} />
          </span>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.65rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#CFA556',
          }}>
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────
// RESERVE SECTION — dark luxury theme
// ─────────────────────────────────────────────
function ReserveSection() {
  return (
    <section
      id="reserve"
      aria-labelledby="reserve-heading"
      style={{
        padding: 'clamp(60px, 8vw, 100px) clamp(20px, 5vw, 80px)',
        maxWidth: 1240,
        margin: '0 auto',
      }}
    >
      <ScrollReveal>
        <div
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
              id="reserve-heading"
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
                fontWeight: 500,
                color: '#D4D4D4',
                letterSpacing: '-0.02em',
              }}
            >
              Reserve Your Experience
            </h2>
          </div>
          <div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.92rem',
                color: '#D4D4D4',
                maxWidth: 360,
                lineHeight: 1.65,
              }}
            >
              Every course ascends toward heaven, & time slows to rhythm of fine wine, & unforgettable flavor
            </p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.15}>
        <div
          style={{
            position: 'relative',
            borderRadius: 16,
            overflow: 'hidden',
            minHeight: 480,
            background: '#1E1E1E',
            display: 'flex',
            alignItems: 'center',
            border: '1px solid rgba(188, 188, 188, 0.16)',
          }}
        >
          <img
            src="/reserve-experience.png"
            alt="Reserve Experience Kitchen & Spices"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center right',
              filter: 'brightness(0.75) contrast(1.1)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, rgba(22,22,22,0.95) 0%, rgba(22,22,22,0.75) 50%, transparent 100%)',
            }}
          />

          <div
            style={{
              position: 'relative',
              zIndex: 2,
              margin: '32px 0 32px 32px',
              maxWidth: 480,
              width: '100%',
              background: 'rgba(22,22,22,0.85)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(207, 165, 86, 0.3)',
              borderRadius: 16,
              padding: 'clamp(28px, 4vw, 44px)',
            }}
          >
            <h3
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: 'clamp(1.6rem, 3.2vw, 2.3rem)',
                fontWeight: 600,
                color: '#CFA556',
                lineHeight: 1.2,
                marginBottom: 32,
                letterSpacing: '-0.02em',
              }}
            >
              An Evening Of Exquisite Taste, Quiet Luxury
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 28 }}>
              <div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.78rem', color: '#CFA556', marginBottom: 4 }}>Monday to Friday</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.88rem', fontWeight: 500, color: '#D4D4D4' }}>9:00AM -10:00PM</p>
              </div>
              <div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.78rem', color: '#CFA556', marginBottom: 4 }}>Saturday and Sunday</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.88rem', fontWeight: 500, color: '#D4D4D4' }}>9:00AM -12:00PM</p>
              </div>
            </div>

            <div style={{ marginBottom: 32 }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.78rem', color: '#CFA556', marginBottom: 4 }}>Address</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.88rem', color: '#D4D4D4', fontWeight: 400, lineHeight: 1.4 }}>
                Mr. Johnathan Reed Rosew Maplewood Lane
              </p>
            </div>

            <Link
              to="/contact"
              id="reserve-cta-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '12px 26px',
                borderRadius: 6,
                background: '#CFA556',
                color: '#161616',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.88rem',
                fontWeight: 600,
                letterSpacing: '0.02em',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 15px rgba(207, 165, 86, 0.25)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = '#E2B866';
                el.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = '#CFA556';
                el.style.transform = 'translateY(0)';
              }}
            >
              Reserve Now
              <div style={{
                width: 22,
                height: 22,
                borderRadius: '50%',
                background: '#161616',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#CFA556',
              }}>
                <ArrowUpRight size={11} strokeWidth={2.5} />
              </div>
            </Link>
          </div>
        </div>
      </ScrollReveal>
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
              fontFamily: "'Cormorant Garamond', serif",
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
// ABOUT SECTION — dark luxury theme
// ─────────────────────────────────────────────
function AboutSection() {
  const cardData = [
    {
      title: 'Timeless Heritage',
      desc: 'Signature dishes that evolve with inspiration and culture',
    },
    {
      title: 'World-Class Dishes',
      desc: 'Signature 7–10 course tasting menus are available',
    },
    {
      title: 'Emotion & Elegance',
      desc: 'Evenings enhanced by the timeless charm of live music',
    },
    {
      title: 'Unmatched Experience',
      desc: 'Personalized service from a dedicated host',
    },
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      style={{
        padding: 'clamp(80px, 10vw, 140px) clamp(20px, 5vw, 80px)',
        maxWidth: 1240,
        margin: '0 auto',
        background: '#161616',
      }}
    >
      <ScrollReveal direction="up">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <h2
            id="about-heading"
            style={{
              fontFamily: "'Fraunces', 'Cormorant Garamond', serif",
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              fontWeight: 500,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              marginBottom: 16,
            }}
          >
            About Us
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.95rem',
              color: '#D4D4D4',
              maxWidth: 580,
              margin: '0 auto',
              lineHeight: 1.65,
            }}
          >
            Discover the story behind our passion for refined cuisine & exquisite ambiance
          </p>
        </div>
      </ScrollReveal>

      {/* Main Story Hero Container */}
      <ScrollReveal direction="up" delay={0.15}>
        <div
          style={{
            background: '#1E1E1E',
            border: '1px solid rgba(188, 188, 188, 0.16)',
            borderRadius: 16,
            padding: 'clamp(36px, 6vw, 64px)',
            marginBottom: 40,
          }}
        >
          {/* Michelin Star Pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 14px',
              borderRadius: 6,
              background: 'rgba(207, 165, 86, 0.1)',
              border: '1px solid rgba(207, 165, 86, 0.25)',
              marginBottom: 28,
            }}
          >
            <Award size={14} color="#CFA556" />
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.68rem',
                letterSpacing: '0.12em',
                color: '#CFA556',
                fontWeight: 500,
              }}
            >
              Michelin Star, 2025
            </span>
          </div>

          <h3
            style={{
              fontFamily: "'Fraunces', 'Cormorant Garamond', serif",
              fontSize: 'clamp(2rem, 4.5vw, 3.4rem)',
              fontWeight: 500,
              color: '#CFA556',
              lineHeight: 1.15,
              maxWidth: 720,
              marginBottom: 24,
              letterSpacing: '-0.02em',
            }}
          >
            Explore Our Story For Refined Cuisine And Timeless Ambiance
          </h3>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.95rem',
              color: '#D4D4D4',
              lineHeight: 1.75,
              maxWidth: 660,
              marginBottom: 36,
            }}
          >
            Every blend at Deccan Masala Co. is thoughtfully crafted using carefully sourced spices and time-honoured recipes. We bring together tradition, purity, and premium quality to create unforgettable flavours for every kitchen.
          </p>

          <Link
            to="/about"
            id="about-cta-story"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '12px 26px',
              borderRadius: 6,
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(188, 188, 188, 0.2)',
              color: '#FFFFFF',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.88rem',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = '#CFA556';
              el.style.color = '#161616';
              el.style.borderColor = '#CFA556';
              el.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'rgba(255, 255, 255, 0.04)';
              el.style.color = '#FFFFFF';
              el.style.borderColor = 'rgba(188, 188, 188, 0.2)';
              el.style.transform = 'translateY(0)';
            }}
          >
            Explore Our Story <ArrowUpRight size={14} />
          </Link>
        </div>
      </ScrollReveal>

      {/* 4 Feature Cards Grid */}
      <ScrollReveal direction="up" delay={0.25}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 20,
          }}
        >
          {cardData.map((card) => (
            <motion.div
              key={card.title}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              style={{
                padding: '24px 20px',
                borderRadius: 12,
                background: '#1E1E1E',
                border: '1px solid rgba(188, 188, 188, 0.16)',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = '#CFA556';
                el.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.4)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(188, 188, 188, 0.16)';
                el.style.boxShadow = 'none';
              }}
            >
              <h4
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  letterSpacing: '0.01em',
                  marginBottom: 8,
                }}
              >
                {card.title}
              </h4>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.82rem',
                  color: '#D4D4D4',
                  lineHeight: 1.5,
                }}
              >
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </ScrollReveal>
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
          fontFamily: "'Fraunces', 'Cormorant Garamond', serif",
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
        {loading && <StartingPagePreloader onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      <KineticHero />
      <MarqueeStrip />
      <AboutSection />
      <StatsStrip />
      <HeritageSection />
      <SignatureMasalas />
      <FeatureGrid />
      <ReserveSection />
      <ClosingTriptych />
      <Footer />
    </div>
  );
}
