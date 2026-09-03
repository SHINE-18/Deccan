// src/components/ScrollStickyShowcase.tsx
// Apple TV 4K style: sticky photo right, scrolling details left.
// Categories as horizontal pill tabs on top — jump to any category instantly.

import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, Tag, ArrowUpRight } from 'lucide-react';
import { type Product, type Category } from '../data/products';

// Converts an emoji to its Twemoji SVG URL
function emojiToTwemojiUrl(emoji: string): string {
  const codePoints = Array.from(emoji)
    .map((char) => char.codePointAt(0)!.toString(16))
    .filter((hex) => hex !== 'fe0f');
  return `https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/${codePoints.join('-')}.svg`;
}

function TwemojiIcon({ emoji, size = 20 }: { emoji: string; size?: number }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <span style={{ fontSize: `${size}px`, lineHeight: 1 }}>{emoji}</span>;
  }

  return (
    <img
      src={emojiToTwemojiUrl(emoji)}
      alt={emoji}
      width={size}
      height={size}
      onError={() => setHasError(true)}
      style={{ display: 'block', objectFit: 'contain', width: size, height: size }}
      draggable={false}
    />
  );
}

interface ScrollStickyShowcaseProps {
  categories: Category[];
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

function SpicinessBar({ level }: { level: number }) {
  return (
    <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          style={{
            width: 24,
            height: 3,
            borderRadius: 2,
            background:
              i <= level
                ? `rgba(207, 165, 86, ${0.4 + (i / 5) * 0.6})`
                : 'rgba(188, 188, 188, 0.12)',
            transition: 'background 0.3s ease',
          }}
        />
      ))}
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.64rem',
          color: '#CFA556',
          marginLeft: 6,
        }}
      >
        {level} / 5
      </span>
    </div>
  );
}

export default function ScrollStickyShowcase({ categories, products, onSelectProduct }: ScrollStickyShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id ?? '');
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isJumping = useRef(false);

  // Products filtered by active category
  const filteredProducts = products.filter((p) => p.category === activeCategory);
  const activeProduct = filteredProducts[activeIndex];

  // Reset active index when category changes
  useEffect(() => {
    setActiveIndex(0);
    itemRefs.current = [];
  }, [activeCategory]);

  // IntersectionObserver — update active product as user scrolls
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    // Timeout to allow DOM layout to settle after tab change or initial mount
    const timer = setTimeout(() => {
      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting && !isJumping.current) {
              setActiveIndex(i);
            }
          },
          {
            root: null,
            threshold: 0.25,
            rootMargin: '-10% 0px -10% 0px',
          }
        );
        observer.observe(el);
        observers.push(observer);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observers.forEach((o) => o.disconnect());
    };
  }, [activeCategory, filteredProducts]);

  const handleCategoryClick = (catId: string) => {
    isJumping.current = true;
    setActiveCategory(catId);
    // Scroll to top of this section
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => { isJumping.current = false; }, 900);
  };

  return (
    <section
      ref={sectionRef}
      aria-label="Scroll Sticky Product Gallery"
      style={{
        position: 'relative',
        background: '#0E0E0E',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      {/* ── STICKY CATEGORY TABS (top, full-width) ── */}
      <div
        style={{
          position: 'sticky',
          top: 72,
          zIndex: 50,
          background: 'rgba(14, 14, 14, 0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
        }}
      >
        <div
          style={{
            maxWidth: 1300,
            margin: '0 auto',
            padding: '0 clamp(20px, 5vw, 80px)',
            display: 'flex',
            alignItems: 'center',
            gap: 0,
            overflowX: 'auto',
            scrollbarWidth: 'none',
          }}
        >
          {/* Eyebrow label */}
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(188, 188, 188, 0.35)',
              whiteSpace: 'nowrap',
              paddingRight: 20,
              borderRight: '1px solid rgba(255,255,255,0.08)',
              marginRight: 20,
              paddingTop: 16,
              paddingBottom: 16,
            }}
          >
            Category
          </span>

          {/* Category Pills */}
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const count = products.filter((p) => p.category === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '16px 22px',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: isActive
                    ? '2px solid #CFA556'
                    : '2px solid transparent',
                  color: isActive ? '#CFA556' : 'rgba(212, 212, 212, 0.55)',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.85rem',
                  fontWeight: isActive ? 600 : 400,
                  letterSpacing: '0.01em',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.22s ease',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.color = 'rgba(212, 212, 212, 0.55)';
                }}
              >
                {/* Illustrated emoji icon badge */}
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: isActive
                      ? 'rgba(207, 165, 86, 0.15)'
                      : 'rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'background 0.22s ease',
                    overflow: 'hidden',
                    padding: 5,
                  }}
                >
                  <TwemojiIcon emoji={cat.icon} size={22} />
                </div>
                {cat.label}
                <span
                  style={{
                    fontSize: '0.65rem',
                    fontFamily: "'JetBrains Mono', monospace",
                    color: isActive ? 'rgba(207,165,86,0.7)' : 'rgba(188,188,188,0.3)',
                    letterSpacing: '0.08em',
                    transition: 'color 0.22s ease',
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Two-col sticky grid ── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '40% 60%',
          minHeight: '100vh',
          gap: 0,
        }}
      >
        {/* LEFT — scrollable product detail panels */}
        <div
          style={{
            padding: '0 clamp(20px, 5vw, 72px) 120px',
            display: 'flex',
            flexDirection: 'column',
            gap: 0,
          }}
        >
          {/* Category section heading */}
          <div style={{ paddingTop: 60, paddingBottom: 8 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <div style={{ height: 1, width: 24, background: 'rgba(207,165,86,0.45)' }} />
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.62rem',
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      color: '#CFA556',
                    }}
                  >
                    {categories.find((c) => c.id === activeCategory)?.label}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.85rem',
                    color: 'rgba(188, 188, 188, 0.5)',
                    lineHeight: 1.5,
                    maxWidth: 400,
                  }}
                >
                  {categories.find((c) => c.id === activeCategory)?.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Products list */}
          {filteredProducts.map((product, i) => (
            <div
              key={`${activeCategory}-${product.id}`}
              ref={(el) => { itemRefs.current[i] = el; }}
              style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                paddingTop: 32,
                paddingBottom: 32,
              }}
            >
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.45 }}
                transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
                style={{ maxWidth: 500, width: '100%' }}
              >
                {/* Number + Tag */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.64rem',
                      letterSpacing: '0.22em',
                      color: 'rgba(207, 165, 86, 0.4)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div style={{ height: 1, width: 24, background: 'rgba(207,165,86,0.2)' }} />
                  {product.tags.slice(0, 1).map((tag) => (
                    <span
                      key={tag}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 4,
                        padding: '3px 10px',
                        borderRadius: 999,
                        background: 'rgba(207, 165, 86, 0.1)',
                        border: '1px solid rgba(207, 165, 86, 0.25)',
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.63rem',
                        color: '#CFA556',
                        letterSpacing: '0.06em',
                      }}
                    >
                      <Tag size={9} />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Name */}
                <h2
                  style={{
                    fontFamily: "'GT Sectra', 'Marcellus', 'Cormorant', serif",
                    fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
                    fontWeight: 400,
                    color: '#FFFFFF',
                    lineHeight: 1.06,
                    letterSpacing: '-0.03em',
                    marginBottom: 16,
                  }}
                >
                  {product.name}
                </h2>

                {/* Origin */}
                {product.origin && (
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 7,
                      marginBottom: 18,
                      padding: '5px 12px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: 6,
                    }}
                  >
                    <Package size={12} color="#CFA556" />
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.7rem',
                        color: '#BCBCBC',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {product.origin}
                    </span>
                  </div>
                )}

                {/* Description */}
                <p
                  style={{
                    fontFamily: "'Inter', 'DM Sans', sans-serif",
                    fontSize: '0.96rem',
                    color: '#C4C4C4',
                    lineHeight: 1.72,
                    marginBottom: 28,
                  }}
                >
                  {product.description}
                </p>

                {/* Details */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
                  {product.spiciness && (
                    <div>
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '0.6rem',
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          color: 'rgba(188, 188, 188, 0.4)',
                          display: 'block',
                          marginBottom: 8,
                        }}
                      >
                        Intensity
                      </span>
                      <SpicinessBar level={product.spiciness} />
                    </div>
                  )}

                  {product.tastingNotes && (
                    <div>
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '0.6rem',
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          color: 'rgba(188, 188, 188, 0.4)',
                          display: 'block',
                          marginBottom: 6,
                        }}
                      >
                        Tasting Notes
                      </span>
                      <span
                        style={{
                          fontFamily: "'GT Sectra', 'Marcellus', 'Cormorant', serif",
                          fontSize: '1rem',
                          fontStyle: 'italic',
                          color: '#CFA556',
                          lineHeight: 1.4,
                        }}
                      >
                        "{product.tastingNotes}"
                      </span>
                    </div>
                  )}

                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 28 }}>
                    {product.weight && (
                      <div>
                        <span
                          style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: '0.58rem',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            color: 'rgba(188, 188, 188, 0.38)',
                            display: 'block',
                            marginBottom: 3,
                          }}
                        >
                          Net Weight
                        </span>
                        <span
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '0.88rem',
                            color: '#EDEDED',
                            fontWeight: 500,
                          }}
                        >
                          {product.weight}
                        </span>
                      </div>
                    )}
                    {product.price && (
                      <div>
                        <span
                          style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: '0.58rem',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            color: 'rgba(188, 188, 188, 0.38)',
                            display: 'block',
                            marginBottom: 3,
                          }}
                        >
                          Price
                        </span>
                        <span
                          style={{
                            fontFamily: "'GT Sectra', 'Marcellus', 'Cormorant', serif",
                            fontSize: '1.55rem',
                            fontWeight: 700,
                            color: '#CFA556',
                          }}
                        >
                          {product.price}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => onSelectProduct(product)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '12px 26px',
                    borderRadius: 8,
                    background: 'transparent',
                    border: '1px solid rgba(207, 165, 86, 0.45)',
                    color: '#CFA556',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: '0.86rem',
                    letterSpacing: '0.02em',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = '#CFA556';
                    el.style.color = '#161616';
                    el.style.borderColor = '#CFA556';
                    el.style.boxShadow = '0 8px 24px rgba(207, 165, 86, 0.28)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = 'transparent';
                    el.style.color = '#CFA556';
                    el.style.borderColor = 'rgba(207, 165, 86, 0.45)';
                    el.style.boxShadow = 'none';
                  }}
                >
                  View Full Details
                  <ArrowUpRight size={14} />
                </button>
              </motion.div>
            </div>
          ))}
        </div>

        {/* RIGHT — full-bleed sticky photo */}
        <div
          style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            overflow: 'hidden',
          }}
        >
          <AnimatePresence mode="sync">
            <motion.div
              key={activeProduct?.id ?? 'placeholder'}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                position: 'absolute',
                inset: 0,
                background: '#111111',
              }}
            >
              {/* Ambient color glow */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: `radial-gradient(ellipse at 60% 50%, ${activeProduct?.color ?? '#CFA556'}22 0%, transparent 60%)`,
                  transition: 'background 0.9s ease',
                  pointerEvents: 'none',
                }}
              />

              <img
                src={activeProduct?.image}
                alt={activeProduct?.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />

              {/* Left-to-right blend into text column */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to right, #0E0E0E 0%, rgba(14,14,14,0.9) 10%, rgba(14,14,14,0.5) 28%, rgba(14,14,14,0.1) 48%, transparent 65%), linear-gradient(to top, rgba(14,14,14,0.45) 0%, transparent 35%)',
                  pointerEvents: 'none',
                }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Progress dots */}
          <div
            style={{
              position: 'absolute',
              bottom: 28,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: 6,
              zIndex: 10,
            }}
          >
            {filteredProducts.map((_, i) => (
              <div
                key={i}
                style={{
                  width: i === activeIndex ? 22 : 6,
                  height: 6,
                  borderRadius: 3,
                  background: i === activeIndex ? '#CFA556' : 'rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              />
            ))}
          </div>

          {/* Counter */}
          <div
            style={{
              position: 'absolute',
              bottom: 24,
              right: 28,
              zIndex: 10,
            }}
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={`${activeCategory}-${activeIndex}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.7rem',
                  letterSpacing: '0.18em',
                  color: 'rgba(255, 255, 255, 0.32)',
                }}
              >
                {String(activeIndex + 1).padStart(2, '0')} / {String(filteredProducts.length).padStart(2, '0')}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
