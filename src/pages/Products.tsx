// src/pages/Products.tsx
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { categories, products, type Product } from '../data/products';
import ProductDrawer from '../components/ProductDrawer';
import CategoryIcon from '../components/CategoryIcon';
import Footer from '../components/Footer';

// Responsive hook — updates on resize
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMobile;
}

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id ?? '');
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const isManualScrolling = useRef(false);
  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const tabButtonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const scrollToCategory = (catId: string) => {
    setActiveCategory(catId);
    isManualScrolling.current = true;
    const el = categoryRefs.current[catId];
    if (el) {
      // Header is 76px; offset leaves comfortable breathing room
      const offset = isMobile ? 146 : 96;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = Math.max(0, elementPosition - offset);

      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(offsetPosition, { duration: 0.9 });
      } else {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }

    // Scroll active button into view on mobile horizontal bar
    if (isMobile && tabButtonRefs.current[catId]) {
      tabButtonRefs.current[catId]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }

    // Re-enable scroll spy after scroll animation finishes
    setTimeout(() => {
      isManualScrolling.current = false;
    }, 950);
  };

  // Scroll spy: update active category while sliding / scrolling down the page
  useEffect(() => {
    const handleScroll = () => {
      if (isManualScrolling.current) return;

      const triggerLine = isMobile ? 180 : 150;
      let currentActive = categories[0]?.id;

      for (const cat of categories) {
        const el = categoryRefs.current[cat.id];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerLine) {
            currentActive = cat.id;
          }
        }
      }

      if (currentActive) {
        setActiveCategory((prev) => {
          if (prev !== currentActive) {
            if (isMobile && tabButtonRefs.current[currentActive]) {
              tabButtonRefs.current[currentActive]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            }
            return currentActive;
          }
          return prev;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

  return (
    <div style={{ background: '#121212', minHeight: '100vh', color: '#FFFFFF', fontFamily: "'Inter', sans-serif" }}>

      {/* Hero Header with background image */}
      <section className="products-hero-section" aria-labelledby="products-hero-title">
        {/* Background Image & Gradient Overlays */}
        <div className="products-hero-bg" aria-hidden="true">
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(18, 18, 18, 0.4) 0%, #121212 100%)', zIndex: 1 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0, 0, 0, 0.5)', zIndex: 1 }} />
          <img
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5, filter: 'brightness(75%) grayscale(30%)' }}
            src="/heritage-lifestyle.png"
            alt=""
          />
        </div>

        {/* Hero Content */}
        <div className="products-hero-content">
          <div className="products-hero-heading-row">
            <div className="products-hero-line" />
            <h1 id="products-hero-title" className="products-hero-heading">
              Our <span className="hero-italic">Spice</span> Collection
            </h1>
            <div className="products-hero-line" />
          </div>
          <p className="products-hero-desc">
            Expertly blended using the finest ingredients for rich aroma and exceptional taste
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: isMobile ? '20px 16px 80px 16px' : '40px 24px 80px 24px' }}>
        <div style={{ width: '100%', maxWidth: 1200, display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 24 : 40, alignItems: 'flex-start' }}>

          {/* Left Category Sidebar (Sticky on desktop, sticky horizontal bar on mobile) */}
          <aside
            aria-label="Product categories"
            style={{
              width: isMobile ? '100%' : '260px',
              position: 'sticky',
              top: isMobile ? 76 : 100,
              zIndex: 30,
              display: 'flex',
              flexDirection: isMobile ? 'row' : 'column',
              flexWrap: 'nowrap',
              gap: isMobile ? 8 : 12,
              flexShrink: 0,
              overflowX: isMobile ? 'auto' : 'visible',
              background: isMobile ? 'rgba(18, 18, 18, 0.95)' : 'transparent',
              backdropFilter: isMobile ? 'blur(16px)' : 'none',
              WebkitBackdropFilter: isMobile ? 'blur(16px)' : 'none',
              padding: isMobile ? '10px 4px' : '0',
              borderBottom: isMobile ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
              scrollbarWidth: 'none',
            }}
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const isHovered = hoveredButton === cat.id;

              return (
                <button
                  key={cat.id}
                  ref={(el) => { tabButtonRefs.current[cat.id] = el; }}
                  onClick={() => scrollToCategory(cat.id)}
                  onMouseEnter={() => setHoveredButton(cat.id)}
                  onMouseLeave={() => setHoveredButton(null)}
                  style={{
                    position: 'relative',
                    padding: isMobile ? '8px 14px' : '11px 16px',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    border: isActive
                      ? '1px solid #E5C29B'
                      : isHovered
                      ? '1px solid rgba(255, 255, 255, 0.3)'
                      : '1px solid rgba(255, 255, 255, 0.1)',
                    background: 'transparent',
                    color: isActive ? '#121212' : isHovered ? '#FFFFFF' : '#C4C4C4',
                    cursor: 'pointer',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: isMobile ? '0.78rem' : '0.88rem',
                    fontWeight: isActive ? 600 : 500,
                    transition: 'border-color 0.25s ease, color 0.25s ease',
                    textAlign: 'left' as const,
                    width: isMobile ? 'auto' : '100%',
                    flexShrink: 0,
                    overflow: 'hidden',
                  }}
                >
                  {/* Sliding active pill indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: '#E5C29B',
                        borderRadius: '3px',
                        zIndex: 0,
                      }}
                    />
                  )}

                  <div style={{
                    position: 'relative',
                    zIndex: 1,
                    width: 26,
                    height: 26,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'color 0.25s ease',
                  }}>
                    <CategoryIcon
                      categoryId={cat.id}
                      size={20}
                      color={isActive ? '#121212' : isHovered ? '#FFFFFF' : '#CFA556'}
                    />
                  </div>
                  <span style={{
                    position: 'relative',
                    zIndex: 1,
                    fontSize: isMobile ? '0.78rem' : '0.88rem',
                    letterSpacing: '0.02em',
                    whiteSpace: 'nowrap',
                    transition: 'color 0.25s ease',
                  }}>
                    {cat.label}
                  </span>
                </button>
              );
            })}
          </aside>

          {/* Vertical Divider line — desktop only */}
          {!isMobile && (
            <div style={{ width: 1, alignSelf: 'stretch', background: 'rgba(255, 255, 255, 0.1)', minHeight: '60vh' }} />
          )}

          {/* Right Product Sections List */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 48, width: '100%', minWidth: 0 }}>
            {categories.map((cat) => {
              const categoryProducts = products.filter(p => p.category === cat.id);

              return (
                <div
                  key={cat.id}
                  id={cat.id}
                  ref={(el) => { categoryRefs.current[cat.id] = el; }}
                  style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 24, scrollMarginTop: 110 }}
                >
                  {/* Category Title Header */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 24, overflow: 'hidden' }}>
                    <h2 style={{ color: '#CFA556', fontSize: '1.45rem', fontFamily: "'GT Sectra', 'Marcellus', 'Cormorant', serif", textTransform: 'capitalize', fontWeight: 'normal', margin: 0, letterSpacing: '0.02em', whiteSpace: 'nowrap' }}>
                      {(() => {
                        const words = cat.label.split(' ');
                        const lastWord = words.pop();
                        return (
                          <>
                            {words.join(' ')}{' '}
                            <span style={{ fontFamily: "'Italiana', 'Playfair Display', 'Cormorant', serif", fontStyle: 'italic', color: '#FFF2C6', fontWeight: 400 }}>
                              {lastWord}
                            </span>
                          </>
                        );
                      })()}
                    </h2>
                    <div style={{ flex: 1, height: 1, background: 'rgba(255, 255, 255, 0.1)' }} />
                  </div>

                  {/* Category Products */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}>
                    {categoryProducts.map((product) => {
                      const isHovered = hoveredCard === product.id;

                      return (
                        <div
                          key={product.id}
                          onClick={() => setSelectedProduct(product)}
                          onMouseEnter={() => setHoveredCard(product.id)}
                          onMouseLeave={() => setHoveredCard(null)}
                          style={{
                            width: '100%',
                            minHeight: isMobile ? 'auto' : 220,
                            position: 'relative',
                            borderRadius: '4px',
                            border: isHovered ? '1px solid rgba(207, 165, 86, 0.4)' : '1px solid rgba(255, 255, 255, 0.1)',
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            overflow: 'hidden',
                            background: isHovered ? 'rgba(30, 30, 30, 0.9)' : '#1E1E1E',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                          }}
                        >
                          {/* Image Column */}
                          <div style={{
                            position: isMobile ? 'relative' : 'absolute',
                            left: 0,
                            top: 0,
                            width: isMobile ? '100%' : '60%',
                            height: isMobile ? 200 : '100%',
                            overflow: 'hidden',
                            zIndex: 1,
                            flexShrink: 0,
                          }}>
                            <img
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                                transition: 'transform 0.7s ease',
                              }}
                              src={product.image}
                              alt={product.name}
                            />
                            <div style={{
                              position: 'absolute',
                              inset: 0,
                              background: isMobile
                                ? 'linear-gradient(to top, #1E1E1E 0%, transparent 100%)'
                                : 'linear-gradient(to right, transparent 20%, #1E1E1E 95%)',
                              pointerEvents: 'none',
                            }} />
                          </div>

                          {/* Right Content Column */}
                          <div style={{
                            width: isMobile ? '100%' : '50%',
                            padding: 24,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 10,
                            zIndex: 10,
                            background: 'transparent',
                          }}>
                            {/* Tags */}
                            {product.tags && product.tags.length > 0 && (
                              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                                {product.tags.map((tag) => (
                                  <span key={tag} style={{
                                    fontFamily: "'Courier Prime', monospace",
                                    fontSize: '0.6rem',
                                    letterSpacing: '0.12em',
                                    textTransform: 'uppercase',
                                    color: '#CFA556',
                                    background: 'rgba(207, 165, 86, 0.12)',
                                    border: '1px solid rgba(207, 165, 86, 0.25)',
                                    borderRadius: 3,
                                    padding: '3px 8px',
                                  }}>{tag}</span>
                                ))}
                              </div>
                            )}

                            <div style={{ width: '100%', height: 1, background: 'rgba(255, 255, 255, 0.1)', margin: '2px 0' }} />

                            {/* Title & Description */}
                            <div>
                              <h3 style={{
                                color: isHovered ? '#FFFFFF' : '#CFA556',
                                fontSize: '1.3rem',
                                fontFamily: "'GT Sectra', 'Marcellus', 'Cormorant', serif",
                                textTransform: 'capitalize',
                                fontWeight: 'normal',
                                margin: '0 0 8px 0',
                                transition: 'color 0.3s ease',
                              }}>
                                {product.name}
                              </h3>
                              <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>
                                {product.description}
                              </p>
                            </div>



                            {/* View Details CTA */}
                            <div style={{ marginTop: 8 }}>
                              <span style={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: '0.78rem',
                                color: isHovered ? '#CFA556' : 'rgba(255,255,255,0.35)',
                                letterSpacing: '0.06em',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 6,
                                transition: 'color 0.3s ease',
                              }}>
                                View Details →
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Product details drawer */}
      <ProductDrawer
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      <Footer />
    </div>
  );
}
