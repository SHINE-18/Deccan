// src/pages/About.tsx
import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, type MotionValue } from 'framer-motion';
import { Leaf, ShieldCheck, Sparkles } from 'lucide-react';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

const pillars = [
  {
    icon: Leaf,
    title: 'Single-Origin Purity',
    desc: 'Directly sourced from trusted heirloom farms in Meghalaya, Kerala, and Malabar without middle brokers.',
  },
  {
    icon: ShieldCheck,
    title: 'Zero Additives Guarantee',
    desc: 'No artificial preservatives, salt padding, synthetic dyes, or anti-caking chemicals ever.',
  },
  {
    icon: Sparkles,
    title: 'Low-Temperature Milling',
    desc: 'Carefully milled at controlled temperatures to help preserve the natural aroma, essential oils, and flavour of the spices.',
  },
];

const timelineSteps = [
  {
    number: '01',
    title: 'Sourcing the Finest Ingredients',
    description: 'Every exceptional spice begins with exceptional ingredients. We carefully select premium whole spices from trusted farms across India, ensuring freshness, purity, and rich natural aroma before they enter our blending process.',
    image: '/Images/01.png',
    alt: 'Whole spices arranged in traditional wooden compartmental tray',
  },
  {
    number: '02',
    title: 'Traditional Blending Expertise',
    description: 'Our recipes are inspired by generations of Indian culinary traditions. Each blend is created with precision to preserve authentic flavour, balanced spice profiles, and the distinctive taste that makes every dish memorable.',
    image: '/Images/02.png',
    alt: 'Master artisan hand-blending spices in traditional brass brassware',
  },
  {
    number: '03',
    title: 'Signature Quality Standards',
    description: 'Every batch undergoes strict quality checks to ensure consistency, freshness, and food safety. From sourcing to packaging, our commitment is to deliver premium-quality spices you can trust.',
    image: '/Images/03.png',
    alt: 'Taj Krishna Hyderabad flagship luxury spice formulation lab',
  },
  {
    number: '04',
    title: 'Bringing Flavour to Every Kitchen',
    description: 'Today, Deccan Masala Co. serves home cooks, restaurants, and professional chefs with products crafted to transform everyday meals into extraordinary culinary experiences.',
    image: '/Images/04.png',
    alt: 'Luxury evening fine dining atmosphere featuring Deccan spices',
  },
];

// ─────────────────────────────────────────────
// TIMELINE NODE WITH REFINED MATTE GOLD SCROLL ANIMATION
// ─────────────────────────────────────────────
function TimelineNode({
  progress,
  threshold,
}: {
  progress: MotionValue<number>;
  threshold: number;
}) {
  const dotScale = useTransform(
    progress,
    [threshold - 0.04, threshold, threshold + 0.04],
    [0.9, 1.15, 1.0]
  );
  const dotBg = useTransform(
    progress,
    [threshold - 0.02, threshold],
    ['#1E1E1E', '#CFA556']
  );
  const dotBorder = useTransform(
    progress,
    [threshold - 0.02, threshold],
    ['rgba(255, 255, 255, 0.16)', '#CFA556']
  );
  const ringOpacity = useTransform(
    progress,
    [threshold - 0.02, threshold, threshold + 0.06],
    [0, 0.4, 0.2]
  );

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 24,
        height: 24,
      }}
    >
      {/* Subtle outer accent ring */}
      <motion.div
        style={{
          position: 'absolute',
          width: 22,
          height: 22,
          borderRadius: '50%',
          border: '1px solid #CFA556',
          opacity: ringOpacity,
          pointerEvents: 'none',
        }}
      />

      {/* Center Dot */}
      <motion.div
        style={{
          width: 12,
          height: 12,
          borderRadius: '50%',
          background: dotBg,
          border: '1.5px solid',
          borderColor: dotBorder,
          scale: dotScale,
          boxShadow: useTransform(
            ringOpacity,
            (o) => (o > 0.05 ? `0 0 0 3px rgba(207, 165, 86, ${o})` : 'none')
          ),
          zIndex: 3,
        }}
      />
    </div>
  );
}

function TimelineStepItem({
  step,
  index,
  progress,
  threshold,
}: {
  step: (typeof timelineSteps)[0];
  index: number;
  progress: MotionValue<number>;
  threshold: number;
}) {
  const isEven = index % 2 === 1;

  // Subtle color transition for the step number and image border
  const numberColor = useTransform(
    progress,
    [threshold - 0.03, threshold],
    ['rgba(255, 255, 255, 0.35)', '#CFA556']
  );
  const imgBorder = useTransform(
    progress,
    [threshold - 0.03, threshold],
    ['rgba(255, 255, 255, 0.08)', 'rgba(207, 165, 86, 0.3)']
  );

  return (
    <ScrollReveal direction={isEven ? 'right' : 'left'} delay={index * 0.1}>
      {/* Outer Grid Row */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          gap: 48,
        }}
        className="timeline-row"
      >
        {/* Left Column */}
        <div
          style={{
            textAlign: isEven ? 'left' : 'right',
            display: 'flex',
            justifyContent: isEven ? 'flex-start' : 'flex-end',
            order: 1,
          }}
          className="timeline-col-1"
        >
          {isEven ? (
            // Even index: Text on left
            <div style={{ maxWidth: 520, textAlign: 'left' }}>
              <div style={{ marginBottom: 12 }}>
                <motion.div
                  style={{
                    fontFamily: "'GT Sectra', 'Marcellus', 'Cormorant', serif",
                    fontSize: '2.5rem',
                    color: numberColor,
                    lineHeight: 1,
                    marginBottom: 4,
                  }}
                >
                  {step.number}
                </motion.div>
                <h2
                  style={{
                    fontFamily: "'Lora', 'Source Serif Pro', serif",
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: '#CFA556',
                    letterSpacing: '0.02em',
                  }}
                >
                  {step.title}
                </h2>
              </div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.95rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: 1.6,
                }}
              >
                {step.description}
              </p>
            </div>
          ) : (
            // Odd index: Image on left
            <motion.div
              style={{
                width: '100%',
                maxWidth: 520,
                height: 340,
                borderRadius: 16,
                overflow: 'hidden',
                border: '1px solid',
                borderColor: imgBorder,
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                transition: 'border-color 0.3s ease',
              }}
              className="timeline-img-container"
            >
              <img
                src={step.image}
                alt={step.alt}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </motion.div>
          )}
        </div>

        {/* Middle Column (Animated Dot) */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100%',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 3,
            order: 2,
          }}
          className="timeline-middle"
        >
          <TimelineNode progress={progress} threshold={threshold} />
        </div>

        {/* Right Column */}
        <div
          style={{
            textAlign: isEven ? 'right' : 'left',
            display: 'flex',
            justifyContent: isEven ? 'flex-end' : 'flex-start',
            order: 3,
          }}
          className="timeline-col-3"
        >
          {isEven ? (
            // Even index: Image on right
            <motion.div
              style={{
                width: '100%',
                maxWidth: 520,
                height: 340,
                borderRadius: 16,
                overflow: 'hidden',
                border: '1px solid',
                borderColor: imgBorder,
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                transition: 'border-color 0.3s ease',
              }}
              className="timeline-img-container"
            >
              <img
                src={step.image}
                alt={step.alt}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </motion.div>
          ) : (
            // Odd index: Text on right
            <div style={{ maxWidth: 520, textAlign: 'left' }}>
              <div style={{ marginBottom: 12 }}>
                <motion.div
                  style={{
                    fontFamily: "'GT Sectra', 'Marcellus', 'Cormorant', serif",
                    fontSize: '2.5rem',
                    color: numberColor,
                    lineHeight: 1,
                    marginBottom: 4,
                  }}
                >
                  {step.number}
                </motion.div>
                <h2
                  style={{
                    fontFamily: "'Lora', 'Source Serif Pro', serif",
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: '#CFA556',
                    letterSpacing: '0.02em',
                  }}
                >
                  {step.title}
                </h2>
              </div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.95rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: 1.6,
                }}
              >
                {step.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}

// ─────────────────────────────────────────────
// ANIMATED TIMELINE SECTION
// ─────────────────────────────────────────────
function AnimatedTimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll position across timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 60%', 'end 70%'],
  });

  // Silky smooth spring interpolation that animates forward on downscroll & reverses on upscroll
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 24,
    restDelta: 0.0005,
  });

  // Connection thresholds for the 4 steps
  const stepThresholds = [0.08, 0.36, 0.65, 0.92];

  return (
    <section
      ref={containerRef}
      aria-label="Story timeline"
      style={{
        padding: 'clamp(40px, 6vw, 80px) 24px clamp(100px, 12vw, 160px)',
        background: '#161616',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
        {/* 1. Base Inactive Line Track (Desktop Center) */}
        <div
          className="hidden-mobile-line"
          style={{
            position: 'absolute',
            left: '50%',
            top: 24,
            bottom: 24,
            width: 2,
            background: 'rgba(255, 255, 255, 0.08)',
            transform: 'translateX(-50%)',
            zIndex: 1,
          }}
        />

        {/* 2. Active Subtle Gold Connecting Line (Draws on Scroll Down, Reverses on Scroll Up) */}
        <motion.div
          className="hidden-mobile-line"
          style={{
            position: 'absolute',
            left: '50%',
            top: 24,
            bottom: 24,
            width: 2,
            background: 'linear-gradient(180deg, rgba(207, 165, 86, 0.4) 0%, rgba(207, 165, 86, 0.85) 100%)',
            transform: 'translateX(-50%)',
            transformOrigin: 'top',
            scaleY: smoothProgress,
            zIndex: 2,
          }}
        />

        {/* Mobile Left-side Inactive Line Track */}
        <div
          className="mobile-only-line"
          style={{
            display: 'none',
            position: 'absolute',
            left: 16,
            top: 16,
            bottom: 16,
            width: 2,
            background: 'rgba(255, 255, 255, 0.08)',
            zIndex: 1,
          }}
        />
        {/* Mobile Left-side Active Connecting Line */}
        <motion.div
          className="mobile-only-line"
          style={{
            display: 'none',
            position: 'absolute',
            left: 16,
            top: 16,
            bottom: 16,
            width: 2,
            background: 'linear-gradient(180deg, rgba(207, 165, 86, 0.4) 0%, rgba(207, 165, 86, 0.85) 100%)',
            transformOrigin: 'top',
            scaleY: smoothProgress,
            zIndex: 2,
          }}
        />

        {/* Steps container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 64,
            position: 'relative',
            zIndex: 2,
          }}
        >
          {timelineSteps.map((step, index) => (
            <TimelineStepItem
              key={step.number}
              step={step}
              index={index}
              progress={smoothProgress}
              threshold={stepThresholds[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// RESPONSIVE STYLES
// ─────────────────────────────────────────────
const responsiveTimelineStyles = `
  @media (max-width: 768px) {
    .hidden-mobile-line {
      display: none !important;
    }
    .mobile-only-line {
      display: block !important;
    }
    .timeline-row {
      grid-template-columns: 1fr !important;
      gap: 20px !important;
      padding-left: 36px !important;
      position: relative !important;
    }
    .timeline-middle {
      position: absolute !important;
      left: 0 !important;
      top: 12px !important;
      height: auto !important;
      transform: translateX(-50%) !important;
    }
    .timeline-col-1, .timeline-col-3 {
      justify-content: flex-start !important;
      order: unset !important;
      text-align: left !important;
    }
    .timeline-img-container {
      max-width: 100% !important;
      height: 240px !important;
    }
  }
`;

export default function About() {
  return (
    <div style={{ background: '#161616', minHeight: '100vh', color: '#FFFFFF', paddingTop: 80, overflowX: 'hidden' }}>

      {/* Hero Header with background image */}
      <div style={{ position: 'relative', padding: '100px 24px 80px 24px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(18, 18, 18, 0.4) 0%, #121212 100%)', zIndex: 1 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0, 0, 0, 0.5)', zIndex: 1 }} />
          <img 
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5, filter: 'brightness(75%) grayscale(30%)' }} 
            src="/heritage-lifestyle.png" 
            alt="Spice background" 
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
            <div style={{ width: 80, height: 1, background: '#CFA556', opacity: 0.3 }} />
            <h1 style={{ color: '#CFA556', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontFamily: "'GT Sectra', 'Marcellus', 'Cormorant', serif", textTransform: 'capitalize', fontWeight: 'normal', margin: 0, letterSpacing: '0.02em' }}>
              About<span style={{ fontFamily: "'Italiana', 'Playfair Display', 'Cormorant', serif", fontStyle: 'italic', color: '#FFF2C6', fontWeight: 400, marginLeft: '0.16em' }}>Us</span>
            </h1>
            <div style={{ width: 80, height: 1, background: '#CFA556', opacity: 0.3 }} />
          </div>
          <div style={{ maxWidth: 610 }}>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
              A journey of heritage, craftsmanship, and authentic flavours in every blend.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Animated Connecting Timeline Section */}
      <AnimatedTimelineSection />

      {/* Craft Pillars Section */}
      <section
        aria-label="Core craft pillars"
        style={{
          padding: 'clamp(60px, 8vw, 100px) clamp(20px, 5vw, 80px)',
          background: '#121212',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <ScrollReveal direction="up">
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <span style={{
                fontFamily: "'Lora', 'Source Serif Pro', serif",
                fontSize: '0.78rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#CFA556',
                display: 'block',
                marginBottom: 8,
              }}>
                Craft Philosophy
              </span>
              <h2 style={{
                fontFamily: "'Italiana', 'Playfair Display', 'Cormorant', serif",
                fontSize: 'clamp(2rem, 3.8vw, 3rem)',
                fontWeight: 400,
                color: '#CFA556',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}>
                The Three Pillars of <span style={{ fontStyle: 'italic', color: '#FFF2C6' }}>Deccan Spice</span>
              </h2>
            </div>
          </ScrollReveal>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
          }}>
            {pillars.map(({ icon: Icon, title, desc }, i) => (
              <ScrollReveal key={title} delay={i * 0.12} direction="up">
                <div style={{
                  padding: '36px 30px',
                  borderRadius: 16,
                  background: '#1E1E1E',
                  border: '1px solid rgba(188, 188, 188, 0.16)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                }}>
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: 8,
                    background: 'rgba(207, 165, 86, 0.1)',
                    border: '1px solid rgba(207, 165, 86, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#CFA556',
                  }}>
                    <Icon size={22} />
                  </div>
                  <h3 style={{
                    fontFamily: "'GT Sectra', 'Marcellus', 'Cormorant', serif",
                    fontSize: '1.3rem',
                    fontWeight: 600,
                    color: '#CFA556',
                  }}>
                    {title}
                  </h3>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.88rem',
                    color: '#D4D4D4',
                    lineHeight: 1.65,
                  }}>
                    {desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Responsive Styles */}
      <style>{responsiveTimelineStyles}</style>

      <Footer />
    </div>
  );
}
