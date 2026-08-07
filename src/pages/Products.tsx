// src/pages/Products.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { categories, products, type Product } from '../data/products';
import ProductModal from '../components/ProductModal';
import ProductDrawer from '../components/ProductDrawer';
import ScrollStickyShowcase from '../components/ScrollStickyShowcase';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div style={{ background: '#161616', minHeight: '100vh', color: '#FFFFFF', paddingTop: 80 }}>

      {/* Hero Band — dark luxury bg */}
      <section
        aria-label="Products hero"
        style={{
          position: 'relative',
          padding: 'clamp(60px, 8vw, 100px) 40px clamp(40px, 6vw, 80px)',
          background: '#161616',
          textAlign: 'center',
          overflow: 'hidden',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ position: 'relative', zIndex: 1, maxWidth: 640, margin: '0 auto' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, marginBottom: 16 }}>
            <div style={{ height: 1, width: 60, background: 'linear-gradient(90deg, transparent, rgba(207, 165, 86, 0.5))' }} />
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.6rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#CFA556',
            }}>
              Deccan Masala Co.
            </span>
            <div style={{ height: 1, width: 60, background: 'linear-gradient(90deg, rgba(207, 165, 86, 0.5), transparent)' }} />
          </div>

          <h1 style={{
            fontFamily: "'Fraunces', 'Cormorant Garamond', serif",
            fontSize: 'clamp(2.5rem, 6vw, 4.2rem)',
            fontWeight: 500,
            color: '#FFFFFF',
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            marginBottom: 16,
          }}>
            Our Spice Collection
          </h1>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.95rem',
            color: '#D4D4D4',
            marginBottom: 28,
            lineHeight: 1.65,
          }}>
            Expertly blended using the finest ingredients for rich aroma and exceptional taste.
          </p>

        </motion.div>
      </section>

      {/* Apple TV 4K Scroll-Sticky Showcase */}
      <ScrollStickyShowcase categories={categories} products={products} onSelectProduct={setSelectedProduct} />
      {/* Quick View Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* End-of-Page CTA — dark luxury bg */}
      <section
        aria-label="Custom spice reserve CTA"
        style={{
          position: 'relative',
          padding: 'clamp(80px, 10vw, 120px) 40px',
          background: '#161616',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 720, margin: '0 auto' }}>
          <ScrollReveal direction="up">
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.65rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#CFA556',
              display: 'block',
              marginBottom: 12,
            }}>
              Master Blenders Reserve
            </span>

            <h2 style={{
              fontFamily: "'Fraunces', 'Cormorant Garamond', serif",
              fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
              fontWeight: 500,
              color: '#FFFFFF',
              lineHeight: 1.15,
              marginBottom: 16,
            }}>
              Crafted for Perfection, <br />
              <em style={{ color: '#CFA556', fontStyle: 'italic' }}>Available for Reserve</em>
            </h2>

            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.95rem',
              color: '#D4D4D4',
              lineHeight: 1.65,
              marginBottom: 36,
              maxWidth: 540,
              margin: '0 auto 36px',
            }}>
              Require custom grind profiles or bespoke spice formulation for fine dining? Partner directly with our royal heritage spice lab.
            </p>

            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '14px 32px',
                  borderRadius: 6,
                  background: '#CFA556',
                  color: '#161616',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  textDecoration: 'none',
                  transition: 'background 0.2s ease',
                  boxShadow: '0 4px 15px rgba(207, 165, 86, 0.25)',
                }}
              >
                Inquire Wholesale &amp; Reserve
              </motion.a>

              <motion.a
                href="/#heritage"
                whileHover={{ scale: 1.04, backgroundColor: 'rgba(255,255,255,0.08)' }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '14px 28px',
                  borderRadius: 6,
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: '#FFFFFF',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: '0.88rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                Explore Heritage Story
              </motion.a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Deep-Dive Product Case Study Drawer */}
      <ProductDrawer
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      <Footer />
    </div>
  );
}
