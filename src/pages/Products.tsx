// src/pages/Products.tsx
import { useState, useRef, useEffect } from 'react';
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

  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const scrollToCategory = (catId: string) => {
    setActiveCategory(catId);
    const el = categoryRefs.current[catId];
    if (el) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Intersection Observer for scroll spy functionality
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-120px 0px -50% 0px',
      threshold: 0.05,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveCategory(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    categories.forEach((cat) => {
      const el = categoryRefs.current[cat.id];
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div style={{ background: '#121212', minHeight: '100vh', color: '#FFFFFF', paddingTop: 80, fontFamily: "'Inter', sans-serif" }}>

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

        <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
            <div style={{ width: 80, height: 1, background: '#CFA556', opacity: 0.3 }} />
            <h1 style={{ color: '#CFA556', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontFamily: "'GT Sectra', 'Marcellus', 'Cormorant', serif", textTransform: 'capitalize', fontWeight: 'normal', margin: 0, letterSpacing: '0.02em' }}>
              Our <span style={{ fontFamily: "'Italiana', 'Playfair Display', 'Cormorant', serif", fontStyle: 'italic', color: '#FFF2C6', fontWeight: 400 }}>Spice</span> Collection
            </h1>
            <div style={{ width: 80, height: 1, background: '#CFA556', opacity: 0.3 }} />
          </div>
          <div style={{ maxWidth: 610 }}>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
              Expertly blended using the finest ingredients for rich aroma and exceptional taste
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '40px 24px 80px 24px' }}>
        <div style={{ width: '100%', maxWidth: 1200, display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 40, alignItems: 'flex-start' }}>

          {/* Left Category Sidebar */}
          <div style={{
            width: isMobile ? '100%' : '260px',
            display: 'flex',
            flexDirection: isMobile ? 'row' : 'column',
            flexWrap: isMobile ? 'wrap' : 'nowrap',
            gap: isMobile ? 8 : 12,
            position: isMobile ? 'static' : 'sticky',
            top: 110,
            flexShrink: 0,
          }}>
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const isHovered = hoveredButton === cat.id;

              const buttonStyle = isActive
                ? {
                    padding: isMobile ? '8px 12px' : '10px 16px',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    border: '1px solid #E5C29B',
                    background: '#E5C29B',
                    color: '#121212',
                    cursor: 'pointer',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: isMobile ? '0.78rem' : '0.88rem',
                    fontWeight: 600,
                    transition: 'all 0.3s ease',
                    textAlign: 'left' as const,
                    width: isMobile ? 'auto' : '100%',
                    flexShrink: 0,
                  }
                : {
                    padding: isMobile ? '8px 12px' : '10px 16px',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    border: isHovered ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)',
                    background: 'transparent',
                    color: isHovered ? '#FFFFFF' : '#C4C4C4',
                    cursor: 'pointer',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: isMobile ? '0.78rem' : '0.88rem',
                    fontWeight: 500,
                    transition: 'all 0.3s ease',
                    textAlign: 'left' as const,
                    width: isMobile ? 'auto' : '100%',
                    flexShrink: 0,
                  };

              return (
                <button
                  key={cat.id}
                  onClick={() => scrollToCategory(cat.id)}
                  onMouseEnter={() => setHoveredButton(cat.id)}
                  onMouseLeave={() => setHoveredButton(null)}
                  style={buttonStyle}
                >
                  <div style={{
                    width: 26,
                    height: 26,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <CategoryIcon
                      categoryId={cat.id}
                      size={20}
                      color={isActive ? '#121212' : isHovered ? '#FFFFFF' : '#CFA556'}
                    />
                  </div>
                  <span style={{ fontSize: isMobile ? '0.78rem' : '0.88rem', letterSpacing: '0.02em', whiteSpace: 'nowrap' }}>
                    {cat.label}
                  </span>
                </button>
              );
            })}
          </div>

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
                    <h2 style={{ color: '#CFA556', fontSize: '1.4rem', fontFamily: "'GT Sectra', 'Marcellus', 'Cormorant', serif", textTransform: 'capitalize', fontWeight: 'normal', margin: 0, letterSpacing: '0.02em', whiteSpace: 'nowrap' }}>
                      {cat.label}
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
