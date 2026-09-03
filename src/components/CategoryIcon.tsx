// src/components/CategoryIcon.tsx
import React from 'react';
import { Flame, Crown, Sparkles } from 'lucide-react';

interface CategoryIconProps {
  categoryId: string;
  size?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function CategoryIcon({
  categoryId,
  size = 20,
  color = 'currentColor',
  className = '',
  style = {},
}: CategoryIconProps) {
  const strokeWidth = 1.9;

  switch (categoryId) {
    case 'deccan-classics':
      // Flame — represents pure spice, aroma & authentic Deccan heat
      return (
        <Flame
          size={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
          style={style}
        />
      );

    case 'hyderabadi-masala':
      // Crown — represents Royal Nizami culinary heritage of Hyderabad
      return (
        <Crown
          size={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
          style={style}
        />
      );

    case 'signature-quality':
      // Sparkles — represents Imperial Reserve small-batch signature quality
      return (
        <Sparkles
          size={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
          style={style}
        />
      );

    case 'paste-with-flavors':
      // Mortar & Pestle — represents freshly ground culinary masala pastes
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          style={style}
          aria-hidden="true"
        >
          {/* Mortar Bowl */}
          <path d="M4 11C4 16 7.5 19.5 12 19.5C16.5 19.5 20 16 20 11H4Z" />
          {/* Top Rim */}
          <line x1="3" y1="11" x2="21" y2="11" />
          {/* Pestle / Grinding Tool */}
          <path d="M15 3.5L9.5 13" />
          {/* Pestle Handle Tip */}
          <path d="M13.5 2.5L16.5 4.5" />
          {/* Base Stand */}
          <path d="M8.5 19.5L7.5 22H16.5L15.5 19.5" />
        </svg>
      );

    default:
      return (
        <Flame
          size={size}
          color={color}
          strokeWidth={strokeWidth}
          className={className}
          style={style}
        />
      );
  }
}
