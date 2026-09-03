// src/components/AppleTVShowcase.tsx
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, Tag, Eye } from 'lucide-react';
import { products, type Product } from '../data/products';

interface AppleTVShowcaseProps {
  onSelectProduct: (product: Product) => void;
}

export default function AppleTVShowcase({ onSelectProduct }: AppleTVShowcaseProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeProduct, setActiveProduct] = useState<Product>(products[0]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = direction === 'left' ? -380 : 380;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section
      aria-label="Apple TV 4K Style Product Showcase"
      style={{
        position: 'relative',
        padding: '60px 0 80px 0',
        background: 'linear-gradient(180deg, #161616 0%, #121212 50%, #161616 100%)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        overflow: 'hidden',
      }}
    >
      {/* Background Ambient Glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 800,
          height: 400,
          background: 'radial-gradient(ellipse at center, rgba(207, 165, 86, 0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      {/* Header Eyebrow & Navigation Title */}
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 clamp(20px, 5vw, 64px)',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginBottom: 36,
          flexWrap: 'wrap',
          gap: 20,
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <Sparkles size={14} color="#CFA556" />
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.68rem',
                letterSpacing: '0.2em',
                color: '#CFA556',
                textTransform: 'uppercase',
              }}
            >
              Cinema Showcase Experience
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'GT Sectra', 'Marcellus', 'Cormorant', serif",
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: 500,
              color: '#FFFFFF',
              lineHeight: 1.1,
            }}
          >
            Imperial Reserve Gallery
          </h2>
        </div>

        {/* Scroll Controls (Apple style circular arrows) */}
        <div style={{ display: 'flex', gap: 12 }}>
          <button
            onClick={() => handleScroll('left')}
            aria-label="Scroll left gallery"
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(188, 188, 188, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#D4D4D4',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = '#CFA556';
              el.style.borderColor = '#CFA556';
              el.style.color = '#161616';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'rgba(255, 255, 255, 0.05)';
              el.style.borderColor = 'rgba(188, 188, 188, 0.2)';
              el.style.color = '#D4D4D4';
            }}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => handleScroll('right')}
            aria-label="Scroll right gallery"
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(188, 188, 188, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#D4D4D4',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = '#CFA556';
              el.style.borderColor = '#CFA556';
              el.style.color = '#161616';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'rgba(255, 255, 255, 0.05)';
              el.style.borderColor = 'rgba(188, 188, 188, 0.2)';
              el.style.color = '#D4D4D4';
            }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Horizontal Apple TV 4K Floating Card Track */}
      <div
        ref={scrollRef}
        style={{
          display: 'flex',
          gap: 28,
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          padding: '20px clamp(20px, 5vw, 64px) 40px clamp(20px, 5vw, 64px)',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {products.map((product) => {
          const isSelected = activeProduct.id === product.id;
          return (
            <motion.div
              key={product.id}
              onClick={() => {
                setActiveProduct(product);
                onSelectProduct(product);
              }}
              whileHover={{ scale: 1.04, y: -10, rotateY: 3 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                flex: '0 0 clamp(280px, 28vw, 340px)',
                scrollSnapAlign: 'center',
                height: 420,
                borderRadius: 20,
                background: '#1E1E1E',
                border: isSelected
                  ? '2px solid #CFA556'
                  : '1px solid rgba(188, 188, 188, 0.16)',
                boxShadow: isSelected
                  ? '0 24px 60px rgba(207, 165, 86, 0.25), 0 0 30px rgba(207, 165, 86, 0.2)'
                  : '0 16px 40px rgba(0, 0, 0, 0.4)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '24px',
                perspective: 1000,
              }}
            >
              {/* Top Tag & Price */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 2 }}>
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    padding: '4px 10px',
                    borderRadius: 999,
                    background: 'rgba(207, 165, 86, 0.15)',
                    border: '1px solid rgba(207, 165, 86, 0.3)',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.68rem',
                    color: '#CFA556',
                    letterSpacing: '0.08em',
                  }}
                >
                  <Tag size={10} />
                  {product.tags[0] || 'Reserve'}
                </span>

                {product.price && (
                  <span
                    style={{
                      fontFamily: "'GT Sectra', 'Marcellus', 'Cormorant', serif",
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: '#CFA556',
                    }}
                  >
                    {product.price}
                  </span>
                )}
              </div>

              {/* Large Product Photography (Apple TV Spotlight Image) */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: 200,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2,
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    maxWidth: '85%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 16px 32px rgba(0, 0, 0, 0.6))',
                    transition: 'transform 0.4s ease',
                  }}
                />
              </div>

              {/* Product Info Footer Card */}
              <div style={{ zIndex: 2 }}>
                <h3
                  style={{
                    fontFamily: "'GT Sectra', 'Marcellus', 'Cormorant', serif",
                    fontSize: '1.3rem',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    lineHeight: 1.2,
                    marginBottom: 6,
                  }}
                >
                  {product.name}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.78rem',
                      color: '#BCBCBC',
                    }}
                  >
                    {product.origin || 'Deccan Single Origin'}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#CFA556', fontSize: '0.75rem' }}>
                    <Eye size={14} />
                    <span>Quick View</span>
                  </div>
                </div>
              </div>

              {/* Bottom Subtle Glassmorphic Overlay Gradient */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 40%, rgba(22, 22, 22, 0.95) 100%)',
                  zIndex: 1,
                  pointerEvents: 'none',
                }}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
