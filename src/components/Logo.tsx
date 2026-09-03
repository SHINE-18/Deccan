// src/components/Logo.tsx
export default function Logo({ size = 'md', showText = true }: { size?: 'sm' | 'md' | 'lg'; variant?: 'dark' | 'light'; showText?: boolean }) {
  const iconSizes = { sm: 52, md: 60, lg: 78 };
  const px = iconSizes[size];

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}>
      {/* Official Deccan Icon Logo */}
      <img
        src="/icon.svg"
        alt="Deccan Masala Co. Official Logo"
        style={{
          width: px,
          height: px,
          objectFit: 'contain',
        }}
      />

      {/* Brand Typography Wordmark */}
      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span
            style={{
              fontFamily: "'GT Sectra', 'Marcellus', 'Cormorant', serif",
              fontWeight: 600,
              fontSize: size === 'sm' ? '1.05rem' : size === 'lg' ? '1.55rem' : '1.25rem',
              letterSpacing: '0.12em',
              color: '#FFFFFF',
            }}
          >
            DECCAN
          </span>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 500,
              fontSize: size === 'sm' ? '0.45rem' : size === 'lg' ? '0.62rem' : '0.52rem',
              letterSpacing: '0.24em',
              color: '#CFA556',
              marginTop: 4,
              textTransform: 'uppercase',
            }}
          >
            MASALA CO.
          </span>
        </div>
      )}
    </div>
  );
}
