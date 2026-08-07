// src/pages/About.tsx
import { motion } from 'framer-motion';
import { Leaf, ShieldCheck, Sparkles, MapPin, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

const timelineSteps = [
  {
    number: '01',
    title: 'Sourcing the Finest Ingredients',
    description: 'Every exceptional spice begins with exceptional ingredients. We carefully select premium whole spices from trusted farms across India, ensuring freshness, purity, and rich natural aroma before they enter our blending process.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=80',
    alt: 'Whole spices arranged in traditional wooden compartmental tray',
  },
  {
    number: '02',
    title: 'Traditional Blending Expertise',
    description: 'Our recipes are inspired by generations of Indian culinary traditions. Each blend is created with precision to preserve authentic flavour, balanced spice profiles, and the distinctive taste that makes every dish memorable.',
    image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=1000&q=80',
    alt: 'Master artisan hand-blending spices in traditional brass brassware',
  },
  {
    number: '03',
    title: 'Signature Quality Standards',
    description: 'Every batch undergoes strict quality checks to ensure consistency, freshness, and food safety. From sourcing to packaging, our commitment is to deliver premium-quality spices you can trust.',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1000&q=80',
    alt: 'Taj Krishna Hyderabad flagship luxury spice formulation lab',
  },
  {
    number: '04',
    title: 'Bringing Flavour to Every Kitchen',
    description: 'Today, Deccan Masala Co. serves home cooks, restaurants, and professional chefs with products crafted to transform everyday meals into extraordinary culinary experiences.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80',
    alt: 'Luxury evening fine dining atmosphere featuring Deccan spices',
  },
];

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
    desc: 'Slow cold-ground at 80°C to lock in delicate essential oils, aromas, and volatile terpenes.',
  },
];

export default function About() {
  return (
    <div style={{ background: '#161616', minHeight: '100vh', color: '#FFFFFF', paddingTop: 80 }}>

      {/* Hero Header Section */}
      <section
        aria-label="About story hero"
        style={{
          position: 'relative',
          padding: 'clamp(80px, 10vw, 120px) 24px clamp(50px, 7vw, 90px)',
          background: 'linear-gradient(180deg, rgba(22, 22, 22, 0.95) 0%, #161616 100%)',
          textAlign: 'center',
          overflow: 'hidden',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ maxWidth: 880, margin: '0 auto' }}
        >
          {/* Decorative Gold Header Lines */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 20 }}>
            <div style={{ width: 80, height: 1, background: 'linear-gradient(90deg, transparent, rgba(207, 165, 86, 0.6))' }} />
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.65rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#CFA556',
            }}>
              Deccan Masala Co.
            </span>
            <div style={{ width: 80, height: 1, background: 'linear-gradient(90deg, rgba(207, 165, 86, 0.6), transparent)' }} />
          </div>

          <h1 style={{
            fontFamily: "'Fraunces', 'Cormorant Garamond', serif",
            fontSize: 'clamp(2.8rem, 6.5vw, 4.5rem)',
            fontWeight: 500,
            color: '#CFA556',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            marginBottom: 20,
            textTransform: 'capitalize',
          }}>
            Our Story <br />
            <span style={{ color: '#FFFFFF', fontWeight: 400 }}>A Legacy of Authentic Flavour</span>
          </h1>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
            color: '#D4D4D4',
            lineHeight: 1.7,
            maxWidth: 640,
            margin: '0 auto 36px',
          }}>
            A journey of heritage, craftsmanship, and authentic flavours in every blend.
          </p>
        </motion.div>
      </section>

      {/* Vertical Timeline Section (Steps 01 to 04) */}
      <section
        aria-label="Story steps timeline"
        style={{
          padding: 'clamp(60px, 8vw, 120px) clamp(20px, 5vw, 80px)',
          background: '#161616',
          maxWidth: 1240,
          margin: '0 auto',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(60px, 8vw, 100px)' }}>
          {timelineSteps.map((step, index) => {
            const isEven = index % 2 === 1;
            return (
              <ScrollReveal key={step.number} direction={isEven ? 'right' : 'left'} delay={index * 0.1}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: 'clamp(32px, 6vw, 64px)',
                    alignItems: 'center',
                    background: '#1E1E1E',
                    padding: 'clamp(24px, 4vw, 40px)',
                    borderRadius: 16,
                    border: '1px solid rgba(188, 188, 188, 0.16)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                  }}
                >
                  {/* Image Container */}
                  <div
                    style={{
                      order: isEven ? 2 : 1,
                      borderRadius: 12,
                      overflow: 'hidden',
                      height: 360,
                      position: 'relative',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    <img
                      src={step.image}
                      alt={step.alt}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.9) contrast(1.05)',
                        transition: 'transform 0.5s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, transparent 50%, rgba(22, 22, 22, 0.6) 100%)',
                        pointerEvents: 'none',
                      }}
                    />
                  </div>

                  {/* Step Description & Index */}
                  <div style={{ order: isEven ? 1 : 2, display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <span
                        style={{
                          fontFamily: "'Fraunces', 'Cormorant Garamond', serif",
                          fontSize: '3.2rem',
                          fontWeight: 500,
                          color: '#FFFFFF',
                          lineHeight: 1,
                        }}
                      >
                        {step.number}
                      </span>
                      <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#CFA556' }} />
                      <div style={{ height: 1, flex: 1, background: 'rgba(207, 165, 86, 0.3)' }} />
                    </div>

                    <h2
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                        fontWeight: 600,
                        color: '#CFA556',
                        letterSpacing: '-0.01em',
                        lineHeight: 1.3,
                      }}
                    >
                      {step.title}
                    </h2>

                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.95rem',
                        color: '#D4D4D4',
                        lineHeight: 1.7,
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

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
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#CFA556',
                display: 'block',
                marginBottom: 8,
              }}>
                Craft Philosophy
              </span>
              <h2 style={{
                fontFamily: "'Fraunces', 'Cormorant Garamond', serif",
                fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                fontWeight: 500,
                color: '#FFFFFF',
              }}>
                The Three Pillars of Deccan Spice
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
                    fontFamily: "'Fraunces', 'Cormorant Garamond', serif",
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

      {/* Global Distribution & Contact Banner */}
      <section
        aria-label="Global distribution banner"
        style={{
          padding: 'clamp(60px, 8vw, 100px) 40px',
          textAlign: 'center',
          background: '#161616',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <ScrollReveal direction="up">
          <MapPin size={28} color="#CFA556" style={{ marginBottom: 12 }} />
          <h2 style={{
            fontFamily: "'Fraunces', 'Cormorant Garamond', serif",
            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
            fontWeight: 500,
            color: '#FFFFFF',
            marginBottom: 12,
          }}>
            Distributed Across 4 Continents
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.92rem',
            color: '#D4D4D4',
            maxWidth: 520,
            margin: '0 auto 28px',
            lineHeight: 1.65,
          }}>
            Headquartered at Taj Krishna Hotel, Hyderabad — with flagship distribution centers in New York, Dubai, Melbourne, and London.
          </p>
          <Link
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '12px 28px',
              borderRadius: 6,
              background: '#CFA556',
              color: '#161616',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: '0.88rem',
              textDecoration: 'none',
              transition: 'all 0.25s ease',
              boxShadow: '0 4px 15px rgba(207, 165, 86, 0.25)',
            }}
          >
            Get In Touch <ArrowUpRight size={14} />
          </Link>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
}
