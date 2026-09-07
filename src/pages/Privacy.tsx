// src/pages/Privacy.tsx
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

const sections = [
  {
    title: 'Information We Collect',
    content: `We collect information you provide directly to us, such as your name, email address, phone number, and shipping address when you make a purchase or contact us. We also collect certain information automatically when you visit our website, including your IP address, browser type, pages visited, and time spent.`,
  },
  {
    title: 'How We Use Your Information',
    content: `We use the information we collect to: process and fulfill your orders, communicate with you about your orders, send promotional emails (with your consent), improve our website and services, and comply with legal obligations. We do not sell, rent, or trade your personal information to third parties.`,
  },
  {
    title: 'Cookies & Tracking',
    content: `Our website uses cookies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookie settings through your browser preferences. Disabling cookies may affect some functionality of our website.`,
  },
  {
    title: 'Data Storage & Security',
    content: `We store your data on secure servers and implement industry-standard security measures including encryption, firewalls, and secure socket layer (SSL) technology. While we take reasonable steps to protect your information, no transmission over the internet is 100% secure.`,
  },
  {
    title: 'Third-Party Services',
    content: `We may use trusted third-party service providers for payment processing, shipping, analytics, and email marketing. These providers have access to your information only as necessary to perform their functions and are obligated to keep it confidential.`,
  },
  {
    title: 'Your Rights',
    content: `Depending on your location, you may have the right to: access the personal information we hold about you, request correction of inaccurate data, request deletion of your data (subject to certain exceptions), and opt out of marketing communications. To exercise these rights, please contact us at info@eirthum.com.`,
  },
  {
    title: 'Data Retention',
    content: `We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Order data is typically retained for 7 years for financial and legal compliance purposes.`,
  },
  {
    title: 'Children\'s Privacy',
    content: `Our website and services are not directed to children under the age of 13. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected such information, we will take steps to delete it promptly.`,
  },
  {
    title: 'International Transfers',
    content: `Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. By using our services, you consent to such transfers, which are subject to appropriate safeguards.`,
  },
  {
    title: 'Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. Your continued use of our website after such changes constitutes your acceptance of the new policy. We encourage you to review this policy periodically.`,
  },
  {
    title: 'Contact Us',
    content: `If you have any questions about this Privacy Policy or how we handle your information, please contact us at: info@eirthum.com, or by phone at +91 7940194999, or in writing at: Chef Amey M, The Taj Krishna Hotel, Hyderabad.`,
  },
];

export default function Privacy() {
  return (
    <div style={{ background: '#161616', minHeight: '100vh', color: '#FFFFFF', paddingTop: 80 }}>

      {/* Hero */}
      <section
        aria-label="Privacy hero"
        style={{
          padding: 'clamp(60px, 8vw, 100px) 40px clamp(40px, 6vw, 60px)',
          textAlign: 'center',
          background: '#161616',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.65rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#CFA556',
            display: 'block',
            marginBottom: 12,
          }}>
            Legal
          </span>
          <div className="editorial-heading-row" style={{ marginBottom: 16 }}>
            <div className="editorial-heading-line" />
            <h1 style={{
              fontFamily: "'GT Sectra', 'Marcellus', 'Cormorant', serif",
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              fontWeight: 400,
              color: '#CFA556',
              letterSpacing: '0.01em',
              lineHeight: 1.2,
              margin: 0,
            }}>
              Privacy <span style={{ fontFamily: "'Italiana', 'Playfair Display', 'Cormorant', serif", fontStyle: 'italic', color: '#FFF2C6', fontWeight: 400 }}>Policy</span>
            </h1>
            <div className="editorial-heading-line" />
          </div>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.9rem',
            color: '#D4D4D4',
            maxWidth: 520,
            margin: '0 auto',
            lineHeight: 1.65,
          }}>
            Last updated: August 2026. Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section style={{
        maxWidth: 820,
        margin: '0 auto',
        padding: 'clamp(40px, 6vw, 80px) clamp(20px, 5vw, 60px)',
        display: 'flex',
        flexDirection: 'column',
        gap: 40,
      }}>
        {sections.map((section, i) => (
          <ScrollReveal key={section.title} delay={i * 0.04} direction="up">
            <div style={{
              padding: '28px 32px',
              borderRadius: 12,
              background: '#1E1E1E',
              border: '1px solid rgba(188, 188, 188, 0.1)',
            }}>
              <h2 style={{
                fontFamily: "'GT Sectra', 'Marcellus', 'Cormorant', serif",
                fontSize: '1.25rem',
                fontWeight: 600,
                color: '#CFA556',
                marginBottom: 14,
              }}>
                {i + 1}. {section.title}
              </h2>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.92rem',
                color: 'rgba(255, 255, 255, 0.75)',
                lineHeight: 1.7,
                margin: 0,
              }}>
                {section.content}
              </p>
            </div>
          </ScrollReveal>
        ))}

        <ScrollReveal delay={0.3} direction="up">
          <div style={{
            padding: '24px 32px',
            borderRadius: 12,
            background: 'rgba(207, 165, 86, 0.07)',
            border: '1px solid rgba(207, 165, 86, 0.25)',
            textAlign: 'center',
          }}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.88rem',
              color: '#D4D4D4',
              lineHeight: 1.65,
              margin: 0,
            }}>
              Deccan Masala Co. is committed to protecting your privacy and treating your personal data with the highest standards of care and security.
            </p>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
}
