import { useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import Header from './components/Header';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

// Page transition variants (opacity only to avoid CSS transform containing block on sticky/fixed children)
const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit:    { opacity: 0 },
};

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Scroll to top or target element on route/hash change
function ScrollToTop() {
  const { pathname, hash, search } = useLocation();
  useEffect(() => {
    const searchParams = new URLSearchParams(search);
    // When navigating to /products with a category query param, Products page handles targeted scrolling & tab activation
    if (pathname === '/products' && searchParams.has('category')) {
      return;
    }

    if (hash) {
      const id = hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const offset = 90;
          const top = el.getBoundingClientRect().top + window.scrollY - offset;
          if ((window as any).lenis) {
            (window as any).lenis.scrollTo(top, { duration: 1.0 });
          } else {
            window.scrollTo({ top, behavior: 'smooth' });
          }
        }
      }, 150);
    } else {
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [pathname, hash, search]);
  return null;
}

export default function App() {
  const location = useLocation();
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;
    (window as any).lenis = lenis;

    // Reset scroll position on initial load
    lenis.scrollTo(0, { immediate: true });

    let raf: number;
    function animate(time: number) {
      lenis.raf(time);
      raf = requestAnimationFrame(animate);
    }
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      (window as any).lenis = null;
      lenis.destroy();
    };
  }, []);

  // Lock Zoom (Option A: App-like Feel — prevent trackpad pinch & ctrl+wheel zoom)
  useEffect(() => {
    // Prevent trackpad pinch-to-zoom and Ctrl + Wheel zoom
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };

    // Prevent Safari/Mac pinch gestures
    const handleGesture = (e: Event) => {
      e.preventDefault();
    };

    // Prevent Ctrl/Cmd + Plus/Minus/Zero keyboard zoom
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        (e.key === '+' || e.key === '-' || e.key === '=' || e.key === '0' || e.code === 'NumpadAdd' || e.code === 'NumpadSubtract')
      ) {
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('gesturestart', handleGesture);
    document.addEventListener('gesturechange', handleGesture);
    document.addEventListener('gestureend', handleGesture);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('gesturestart', handleGesture);
      document.removeEventListener('gesturechange', handleGesture);
      document.removeEventListener('gestureend', handleGesture);
    };
  }, []);

  // On page load/refresh: scroll to top (but preserve the current route for deep linking)
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ScrollToTop />
      <CustomCursor />
      <Header />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />
          <Route
            path="/about"
            element={
              <PageWrapper>
                <About />
              </PageWrapper>
            }
          />
          <Route
            path="/products"
            element={
              <PageWrapper>
                <Products />
              </PageWrapper>
            }
          />
          <Route
            path="/contact"
            element={
              <PageWrapper>
                <Contact />
              </PageWrapper>
            }
          />
          <Route
            path="/terms"
            element={
              <PageWrapper>
                <Terms />
              </PageWrapper>
            }
          />
          <Route
            path="/privacy"
            element={
              <PageWrapper>
                <Privacy />
              </PageWrapper>
            }
          />
          {/* Fallback */}
          <Route
            path="*"
            element={
              <PageWrapper>
                <div style={{
                  minHeight: '100vh',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: 16,
                  background: '#121212',
                }}>
                  <span style={{ fontFamily: "'GT Sectra', 'Marcellus', 'Cormorant', serif", fontSize: '6rem', color: 'rgba(201,162,39,0.2)' }}>404</span>
                  <p style={{ fontFamily: "'Inter', sans-serif", color: '#9A9A9A' }}>This page doesn't exist yet.</p>
                </div>
              </PageWrapper>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}
