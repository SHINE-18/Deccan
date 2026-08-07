// src/components/Toast.tsx
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
  duration?: number;
}

export default function Toast({ message, type, onClose, duration = 4000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '14px 20px',
          borderRadius: 12,
          background: '#181818',
          border: `1px solid ${type === 'success' ? 'rgba(201,162,39,0.4)' : 'rgba(180,60,60,0.4)'}`,
          boxShadow: `0 8px 32px rgba(0,0,0,0.6), 0 0 0 1px ${type === 'success' ? 'rgba(201,162,39,0.1)' : 'rgba(180,60,60,0.1)'}`,
          maxWidth: 380,
        }}
      >
        {type === 'success' ? (
          <CheckCircle size={18} color="#C9A227" strokeWidth={1.5} />
        ) : (
          <XCircle size={18} color="#b43c3c" strokeWidth={1.5} />
        )}
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#EDEDED', flex: 1 }}>
          {message}
        </span>
        <button
          onClick={onClose}
          aria-label="Close notification"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 2, color: '#9A9A9A' }}
        >
          <X size={14} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
