// src/pages/Terms.tsx
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

const sections = [
  {
    title: 'Acceptance of Terms',
    content: `By accessing and using the Deccan Masala Co. website (deccanmasala.com), you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services.`,
  },
  {
    title: 'Products & Orders',
    content: `All products listed on our website are subject to availability. We reserve the right to limit quantities or refuse service. Prices are displayed in the applicable currency and are subject to change without notice. Orders are confirmed only upon receipt of full payment.`,
  },
  {
    title: 'Use of Website',
    content: `You agree to use this website only for lawful purposes. You must not use the site in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the site. Unauthorized use of this website may give rise to a claim for damages.`,
  },
  {
    title: 'Intellectual Property',
    content: `All content on this website — including text, images, logos, recipes, product descriptions, and design — is the intellectual property of Deccan Masala Co. and is protected by applicable copyright and trademark laws. You may not reproduce, distribute, or create derivative works without written consent.`,
  },
  {
    title: 'Product Descriptions',
    content: `We strive to ensure all product descriptions, ingredient lists, and images are accurate. However, we do not warrant that product descriptions or other content are error-free. Ingredient information is provided for informational purposes. Always consult the product packaging for the most current information.`,
  },
  {
    title: 'Shipping & Delivery',
    content: `Delivery timelines are estimates and may be affected by factors beyond our control. Deccan Masala Co. is not responsible for delays caused by courier services, customs, or force majeure events. Risk of loss and title for products pass to you upon delivery to the carrier.`,
  },
  {
    title: 'Returns & Refunds',
    content: `If you receive a damaged or incorrect product, please contact us within 7 days of delivery. We will arrange a replacement or refund at our discretion. Perishable goods and opened products are not eligible for return unless they are defective.`,
  },
  {
    title: 'Limitation of Liability',
    content: `To the maximum extent permitted by law, Deccan Masala Co. shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or products. Our total liability shall not exceed the amount paid for the product giving rise to the claim.`,
  },
  {
    title: 'Changes to Terms',
    content: `We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting. Continued use of the website after changes constitutes your acceptance of the revised terms. We encourage you to review these terms periodically.`,
  },
  {
    title: 'Contact',
    content: `For any questions regarding these Terms and Conditions, please contact us at info@eirthum.com or call +91 7940194999. We are happy to address any concerns.`,
  },
];

export default function Terms() {
  return (
    <div style={{ background: '#161616', minHeight: '100vh', color: '#FFFFFF', paddingTop: 80 }}>

      {/* Hero */}
      <section
        aria-label="Terms hero"
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
              Terms & <span style={{ fontFamily: "'Italiana', 'Playfair Display', 'Cormorant', serif", fontStyle: 'italic', color: '#FFF2C6', fontWeight: 400 }}>Conditions</span>
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
            Last updated: August 2026. Please read these terms carefully before using our website or purchasing our products.
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
          <ScrollReveal key={section.title} delay={i * 0.05} direction="up">
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
              By using Deccan Masala Co., you acknowledge that you have read and understood these Terms & Conditions and agree to be bound by them.
            </p>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
}
