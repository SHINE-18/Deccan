// src/components/LiveISTClock.tsx
import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export default function LiveISTClock() {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time for Asia/Kolkata (IST)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      const formatted = new Intl.DateTimeFormat('en-GB', options).format(now);
      setTimeString(`${formatted} IST`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '5px 12px',
        borderRadius: 999,
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(188, 188, 188, 0.14)',
        backdropFilter: 'blur(8px)',
      }}
    >
      {/* Live Green Pulsing Status Indicator Dot */}
      <span style={{ position: 'relative', display: 'flex', width: 8, height: 8 }}>
        <span
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            background: '#10B981',
            opacity: 0.75,
            animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
          }}
        />
        <span
          style={{
            position: 'relative',
            borderRadius: '50%',
            width: 8,
            height: 8,
            background: '#10B981',
          }}
        />
      </span>

      <Clock size={12} color="#CFA556" />

      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.72rem',
          fontWeight: 500,
          color: '#D4D4D4',
          letterSpacing: '0.05em',
        }}
      >
        {timeString || '16:17:43 IST'}
      </span>
    </div>
  );
}
