// src/components/ProductDrawer.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Flame, Check, MapPin, ArrowRight } from 'lucide-react';
import type { Product } from '../data/products';
import { useState } from 'react';

interface ProductDrawerProps {
  product: Product | null;
  onClose: () => void;
  onReserve?: (product: Product) => void;
}

export default function ProductDrawer({ product, onClose, onReserve }: ProductDrawerProps) {
  const [copied, setCopied] = useState(false);

  if (!product) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', justifyContent: 'flex-end' }}>
        {/* Dark Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(8px)',
          }}
        />

        {/* Drawer Panel */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 220 }}
          style={{
            position: 'relative',
            zIndex: 1001,
            width: '100%',
            maxWidth: 540,
            height: '100vh',
            background: '#161616',
            borderLeft: '1px solid rgba(207, 165, 86, 0.3)',
            boxShadow: '-10px 0 40px rgba(0, 0, 0, 0.8)',
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
            color: '#FFFFFF',
          }}
        >
          {/* Header Bar */}
          <div
            style={{
              padding: '24px 28px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              position: 'sticky',
              top: 0,
              background: 'rgba(22, 22, 22, 0.95)',
              backdropFilter: 'blur(12px)',
              zIndex: 10,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.68rem',
                  letterSpacing: '0.15em',
                  color: '#CFA556',
                  textTransform: 'uppercase',
                  padding: '4px 10px',
                  borderRadius: 4,
                  background: 'rgba(207, 165, 86, 0.1)',
                  border: '1px solid rgba(207, 165, 86, 0.25)',
                }}
              >
                Deep-Dive Specification
              </span>
            </div>

            <button
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(188, 188, 188, 0.2)',
                borderRadius: '50%',
                width: 36,
                height: 36,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#D4D4D4',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = '#CFA556';
                el.style.color = '#161616';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'rgba(255, 255, 255, 0.05)';
                el.style.color = '#D4D4D4';
              }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Drawer Content */}
          <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: 28, flex: 1 }}>
            {/* Product Image Frame */}
            <div
              style={{
                width: '100%',
                aspectRatio: '4/3',
                borderRadius: 16,
                background: '#1E1E1E',
                border: '1px solid rgba(188, 188, 188, 0.16)',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  maxWidth: '85%',
                  maxHeight: '85%',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 16px 32px rgba(0, 0, 0, 0.5))',
                }}
              />
              {product.weight && (
                <div
                  style={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    padding: '4px 12px',
                    borderRadius: 999,
                    background: '#CFA556',
                    color: '#161616',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                  }}
                >
                  {product.weight}
                </div>
              )}
            </div>

            {/* Title & Tagline */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <MapPin size={14} color="#CFA556" />
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.72rem',
                    color: '#CFA556',
                    letterSpacing: '0.08em',
                  }}
                >
                  {product.origin || 'Authentic Deccan Heritage Origin'}
                </span>
              </div>
              <h2
                style={{
                  fontFamily: "'Fraunces', 'Cormorant Garamond', serif",
                  fontSize: '2.2rem',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  lineHeight: 1.1,
                  marginBottom: 8,
                }}
              >
                {product.name}
              </h2>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.92rem',
                  color: '#D4D4D4',
                  lineHeight: 1.6,
                }}
              >
                {product.tastingNotes || product.description.split('.')[0] + '.'}
              </p>
            </div>

            {/* Quick Metrics */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: 12,
                padding: '16px',
                borderRadius: 12,
                background: '#1E1E1E',
                border: '1px solid rgba(188, 188, 188, 0.14)',
              }}
            >
              <div>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: '#BCBCBC', display: 'block', marginBottom: 4 }}>
                  NET PRICE
                </span>
                <span style={{ fontFamily: "'Fraunces', serif", fontSize: '1.2rem', fontWeight: 600, color: '#CFA556' }}>
                  {product.price || '$14'}
                </span>
              </div>

              <div>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: '#BCBCBC', display: 'block', marginBottom: 4 }}>
                  ENERGY
                </span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', fontWeight: 600, color: '#FFFFFF' }}>
                  {product.kcal ? `${product.kcal} kcal` : '320 kcal'}
                </span>
              </div>

              <div>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: '#BCBCBC', display: 'block', marginBottom: 4 }}>
                  HEAT PROFILE
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 2, marginTop: 2 }}>
                  {Array.from({ length: 5 }).map((_, i) => {
                    const spiciness = product.spiciness ?? 3;
                    return (
                      <Flame
                        key={i}
                        size={14}
                        color={i < spiciness ? '#CFA556' : '#444444'}
                        fill={i < spiciness ? '#CFA556' : 'transparent'}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Story & Flavor Notes */}
            <div>
              <h4 style={{ fontFamily: "'Fraunces', serif", fontSize: '1.1rem', color: '#CFA556', marginBottom: 8 }}>
                Craft Formulation & Tasting Notes
              </h4>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.88rem', color: '#D4D4D4', lineHeight: 1.65 }}>
                {product.description}
              </p>
            </div>

            {/* Key Tags */}
            <div>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: '#BCBCBC', display: 'block', marginBottom: 10 }}>
                KEY INGREDIENT TAGS
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.78rem',
                      padding: '4px 12px',
                      borderRadius: 999,
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(188, 188, 188, 0.16)',
                      color: '#D4D4D4',
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div style={{ marginTop: 'auto', paddingTop: 20, display: 'flex', gap: 12, borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <button
                onClick={() => {
                  if (onReserve) onReserve(product);
                  onClose();
                }}
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  padding: '14px',
                  borderRadius: 8,
                  background: '#CFA556',
                  color: '#161616',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.92rem',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#E2B866'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#CFA556'; }}
              >
                Reserve Blend <ArrowRight size={16} />
              </button>

              <button
                onClick={handleCopyLink}
                style={{
                  padding: '14px 18px',
                  borderRadius: 8,
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(188, 188, 188, 0.2)',
                  color: '#FFFFFF',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                {copied ? <Check size={16} color="#10B981" /> : <Sparkles size={16} color="#CFA556" />}
                {copied ? 'Copied' : 'Share'}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
