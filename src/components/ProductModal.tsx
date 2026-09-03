// src/components/ProductModal.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { X, Flame, MapPin, ShoppingBag, Check } from 'lucide-react';
import { useState } from 'react';
import type { Product } from '../data/products';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [ordered, setOrdered] = useState(false);

  if (!product) return null;

  const handleOrder = () => {
    setOrdered(true);
    setTimeout(() => {
      setOrdered(false);
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 20,
        }}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(28,26,23,0.6)',
            backdropFilter: 'blur(12px)',
          }}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            maxWidth: 720,
            maxHeight: '90vh',
            overflowY: 'auto',
            background: '#1E1E1E',
            border: '1px solid rgba(188, 188, 188, 0.16)',
            borderRadius: 16,
            padding: 'clamp(24px, 4vw, 40px)',
            boxShadow: '0 24px 64px rgba(0,0,0,0.6)',
            color: '#FFFFFF',
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close product quick view"
            style={{
              position: 'absolute',
              top: 20,
              right: 20,
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#D4D4D4',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = '#FFFFFF';
              el.style.background = 'rgba(255,255,255,0.12)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = '#D4D4D4';
              el.style.background = 'rgba(255,255,255,0.06)';
            }}
          >
            <X size={18} />
          </button>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 32, alignItems: 'center' }}>
            {/* Real Product Image Container */}
            <div style={{
              borderRadius: 12,
              overflow: 'hidden',
              background: '#121212',
              border: '1px solid rgba(255,255,255,0.08)',
              aspectRatio: '1/1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}>
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: '90%',
                  height: '90%',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.5))',
                }}
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>

            {/* Product Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* Category pill */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.65rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#CFA556',
                  padding: '3px 10px',
                  borderRadius: 4,
                  background: 'rgba(207, 165, 86, 0.1)',
                  border: '1px solid rgba(207, 165, 86, 0.25)',
                }}>
                  {product.category.replace('-', ' ')}
                </span>
                {product.weight && (
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: '#D4D4D4' }}>
                    {product.weight}
                  </span>
                )}
              </div>

              {/* Title & Price */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
                <h2 style={{
                  fontFamily: "'GT Sectra', 'Marcellus', 'Cormorant', serif",
                  fontSize: '1.8rem',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  lineHeight: 1.1,
                }}>
                  {product.name}
                </h2>
                {product.price && (
                  <span style={{ fontFamily: "'GT Sectra', 'Marcellus', 'Cormorant', serif", fontSize: '1.6rem', fontWeight: 700, color: '#CFA556' }}>
                    {product.price}
                  </span>
                )}
              </div>

              {/* Origin */}
              {product.origin && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#D4D4D4', fontSize: '0.82rem' }}>
                  <MapPin size={13} color="#CFA556" />
                  <span>Origin: {product.origin}</span>
                </div>
              )}

              {/* Spiciness Level Meter */}
              {product.spiciness && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: '#D4D4D4', textTransform: 'uppercase' }}>
                    Heat Level:
                  </span>
                  <div style={{ display: 'flex', gap: 4 }}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Flame
                        key={i}
                        size={14}
                        color={i < (product.spiciness || 0) ? '#CFA556' : 'rgba(255,255,255,0.15)'}
                        fill={i < (product.spiciness || 0) ? '#CFA556' : 'none'}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Description */}
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.88rem',
                color: '#D4D4D4',
                lineHeight: 1.65,
              }}>
                {product.description}
              </p>

              {/* Tasting Notes */}
              {product.tastingNotes && (
                <div style={{
                  padding: 12,
                  borderRadius: 8,
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(207, 165, 86, 0.2)',
                }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#CFA556', display: 'block', marginBottom: 4 }}>
                    Tasting Notes
                  </span>
                  <p style={{ fontFamily: "'GT Sectra', 'Marcellus', 'Cormorant', serif", fontStyle: 'italic', fontSize: '0.95rem', color: '#FFFFFF' }}>
                    "{product.tastingNotes}"
                  </p>
                </div>
              )}

              {/* Order Button */}
              <motion.button
                onClick={handleOrder}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  marginTop: 8,
                  padding: '12px 24px',
                  borderRadius: 6,
                  background: ordered ? '#2E7D32' : '#CFA556',
                  border: 'none',
                  color: ordered ? '#FFFFFF' : '#161616',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'background 0.3s ease',
                  boxShadow: '0 4px 15px rgba(207, 165, 86, 0.25)',
                }}
              >
                {ordered ? (
                  <>
                    <Check size={16} color="#FFFFFF" />
                    <span>Added to Sample Reserve</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag size={16} />
                    Request Sample Reserve
                  </>
                )}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
