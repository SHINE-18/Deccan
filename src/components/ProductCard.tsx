// src/components/ProductCard.tsx
import { motion } from 'framer-motion';
import { Tag, Eye } from 'lucide-react';
import { useState } from 'react';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  index?: number;
  onSelect?: (product: Product) => void;
}

export default function ProductCard({ product, index = 0, onSelect }: ProductCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{ duration: 0.6, delay: index * 0.04, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -3 }}
      onClick={() => onSelect?.(product)}
      style={{
        display: 'flex',
        gap: 20,
        padding: '20px 22px',
        borderRadius: 12,
        background: '#1E1E1E',
        border: '1px solid rgba(188, 188, 188, 0.16)',
        cursor: 'pointer',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = 'rgba(207, 165, 86, 0.5)';
        el.style.boxShadow = '0 8px 32px rgba(207, 165, 86, 0.12)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = 'rgba(188, 188, 188, 0.16)';
        el.style.boxShadow = 'none';
      }}
      aria-label={`${product.name} - Click for quick view`}
    >
      {/* Real Product Image Container */}
      <div
        style={{
          width: 110,
          height: 110,
          borderRadius: 8,
          background: '#121212',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {!imgError ? (
          <img
            src={product.image}
            alt={product.name}
            onError={() => setImgError(true)}
            style={{
              width: '90%',
              height: '90%',
              objectFit: 'contain',
              transition: 'transform 0.4s ease',
            }}
          />
        ) : (
          <span style={{
            fontFamily: "'Fraunces', 'Cormorant Garamond', serif",
            fontSize: '1.8rem',
            fontWeight: 700,
            color: '#CFA556',
            opacity: 0.6,
          }}>
            {product.name.charAt(0)}
          </span>
        )}

        {/* Hover quick view overlay badge */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(22,22,22,0.65)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0,
          transition: 'opacity 0.25s ease',
        }}
        className="hover-quick-view"
        >
          <Eye size={18} color="#CFA556" />
        </div>
      </div>

      {/* Product Content */}
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {/* Tags & Price */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6, flexWrap: 'wrap' }}>
          {product.tags.map(tag => (
            <span
              key={tag}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                padding: '2px 8px',
                borderRadius: 4,
                background: 'rgba(207, 165, 86, 0.1)',
                border: '1px solid rgba(207, 165, 86, 0.25)',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.68rem',
                letterSpacing: '0.08em',
                color: '#CFA556',
              }}
            >
              <Tag size={10} />
              {tag}
            </span>
          ))}

          {product.price && (
            <span
              style={{
                marginLeft: 'auto',
                fontFamily: "'Fraunces', 'Cormorant Garamond', serif",
                fontSize: '1.25rem',
                fontWeight: 700,
                color: '#CFA556',
              }}
            >
              {product.price}
            </span>
          )}
        </div>

        {/* Name */}
        <h3 style={{
          fontFamily: "'Fraunces', 'Cormorant Garamond', serif",
          fontSize: '1.25rem',
          fontWeight: 600,
          color: '#FFFFFF',
          marginBottom: 4,
          letterSpacing: '-0.01em',
        }}>
          {product.name}
        </h3>

        {/* Description */}
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.88rem',
          color: '#D4D4D4',
          lineHeight: 1.55,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {product.description}
        </p>
      </div>
    </motion.article>
  );
}
