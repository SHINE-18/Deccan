// src/pages/Contact.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Loader2 } from 'lucide-react';
import Footer from '../components/Footer';
import Toast from '../components/Toast';
import ScrollReveal from '../components/ScrollReveal';
import { categories } from '../data/products';

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  category: string;
  subject: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
  category?: string;
}

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    primary: '+91 7940194999',
    secondary: '',
    href: 'tel:+917940194999',
  },
  {
    icon: Mail,
    label: 'Email',
    primary: 'info@eirthum.com',
    secondary: 'Response within 24 hours',
    href: 'mailto:info@eirthum.com',
  },
  {
    icon: MapPin,
    label: 'Address',
    primary: 'Office : Chef Amey M, The Taj Krishna Hotel, Hyderabad',
    secondary: 'Locations : New York, Melbourne, Dubai, Paris, London',
    href: '#map',
  },
];

function ContactInfoCard() {
  return (
    <div style={{
      background: '#1E1E1E',
      border: '1px solid rgba(188, 188, 188, 0.16)',
      borderRadius: 16,
      padding: 'clamp(24px, 4vw, 40px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
    }}>
      <h2 style={{
        fontFamily: "'Fraunces', 'Cormorant Garamond', serif",
        fontSize: '1.6rem',
        fontWeight: 600,
        color: '#FFFFFF',
        marginBottom: 4,
      }}>
        Get in Touch
      </h2>

      {contactInfo.map(({ icon: Icon, label, primary, secondary, href }, i) => (
        <ScrollReveal key={label} delay={i * 0.1} direction="left">
          <div style={{
            display: 'flex',
            gap: 14,
            alignItems: 'flex-start',
            padding: '16px',
            borderRadius: 12,
            background: i === 2 ? 'rgba(207, 165, 86, 0.08)' : 'rgba(255, 255, 255, 0.02)',
            border: i === 2 ? '1px solid rgba(207, 165, 86, 0.25)' : '1px solid rgba(255, 255, 255, 0.04)',
          }}>
            <a
              href={href}
              aria-label={label}
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: '#CFA556',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                transition: 'all 0.2s ease',
                cursor: 'pointer',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = '#E2B866';
                el.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = '#CFA556';
                el.style.transform = 'scale(1)';
              }}
            >
              <Icon size={18} color="#161616" strokeWidth={2.5} />
            </a>

            <div>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.78rem',
                fontWeight: 600,
                color: '#CFA556',
                letterSpacing: '0.04em',
                marginBottom: 4,
              }}>
                {label}
              </p>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.88rem',
                color: '#FFFFFF',
                fontWeight: 500,
                lineHeight: 1.5,
              }}>
                {primary}
              </p>
              {secondary && (
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.78rem',
                  color: '#D4D4D4',
                  marginTop: 2,
                }}>
                  {secondary}
                </p>
              )}
              {label === 'Address' && (
                <a
                  href="#map"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.65rem',
                    letterSpacing: '0.12em',
                    color: '#CFA556',
                    marginTop: 8,
                    display: 'inline-block',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#E2B866')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#CFA556')}
                >
                  Visit our office →
                </a>
              )}
            </div>
          </div>
        </ScrollReveal>
      ))}

      {/* Map embed placeholder */}
      <div
        id="map"
        role="img"
        aria-label="Office location map"
        style={{
          height: 180,
          borderRadius: 12,
          overflow: 'hidden',
          border: '1px solid rgba(188, 188, 188, 0.16)',
          background: '#121212',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: 8,
          position: 'relative',
        }}
      >
        {Array.from({ length: 5 }).map((_, row) =>
          Array.from({ length: 7 }).map((_, col) => (
            <div
              key={`${row}-${col}`}
              style={{
                position: 'absolute',
                top: `${row * 20}%`,
                left: `${col * 14.2}%`,
                width: '14.2%',
                height: '20%',
                border: '1px solid rgba(255,255,255,0.03)',
              }}
            />
          ))
        )}
        <MapPin size={28} color="#CFA556" />
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.65rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#D4D4D4',
        }}>
          Taj Krishna Hotel, Hyderabad
        </span>
      </div>
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    category: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!form.fullName.trim()) errs.fullName = 'Full name is required';
    if (!form.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Enter a valid email address';
    }
    if (!form.category) errs.category = 'Please select a category';
    if (!form.subject.trim()) errs.subject = 'Subject is required';
    if (!form.message.trim()) errs.message = 'Message is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      await new Promise<void>(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', form);
      setToast({ message: 'Message sent! We\'ll get back to you within 24 hours.', type: 'success' });
      setForm({ fullName: '', email: '', phone: '', category: '', subject: '', message: '' });
    } catch {
      setToast({ message: 'Something went wrong. Please try again.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = (hasError: boolean): React.CSSProperties => ({
    width: '100%',
    padding: '12px 14px',
    background: '#121212',
    border: `1px solid ${hasError ? 'rgba(230,80,80,0.6)' : 'rgba(188, 188, 188, 0.16)'}`,
    borderRadius: 8,
    color: '#FFFFFF',
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.88rem',
    outline: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  });

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.82rem',
    fontWeight: 500,
    color: '#D4D4D4',
    marginBottom: 6,
    display: 'block',
  };

  const requiredMark = (
    <span style={{ color: '#CFA556', marginLeft: 3 }}>*</span>
  );

  const errorStyle: React.CSSProperties = {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.65rem',
    color: '#ff6b6b',
    marginTop: 4,
    letterSpacing: '0.04em',
  };

  return (
    <>
      <div style={{
        background: '#1E1E1E',
        border: '1px solid rgba(188, 188, 188, 0.16)',
        borderRadius: 16,
        padding: 'clamp(24px, 4vw, 40px)',
      }}>
        <h2 style={{
          fontFamily: "'Fraunces', 'Cormorant Garamond', serif",
          fontSize: '1.6rem',
          fontWeight: 600,
          color: '#FFFFFF',
          marginBottom: 28,
        }}>
          Send us a Message
        </h2>

        <form onSubmit={handleSubmit} noValidate>
          {/* Row 1: Full Name + Email */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
            <div>
              <label htmlFor="fullName" style={labelStyle}>
                Full Name{requiredMark}
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={form.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                aria-required="true"
                aria-describedby={errors.fullName ? 'error-fullName' : undefined}
                style={inputStyle(!!errors.fullName)}
                onFocus={(e) => { e.target.style.borderColor = '#CFA556'; e.target.style.boxShadow = '0 0 0 3px rgba(207, 165, 86, 0.15)'; }}
                onBlur={(e) => { e.target.style.borderColor = errors.fullName ? 'rgba(230,80,80,0.6)' : 'rgba(188, 188, 188, 0.16)'; e.target.style.boxShadow = 'none'; }}
              />
              {errors.fullName && <p id="error-fullName" role="alert" style={errorStyle}>{errors.fullName}</p>}
            </div>

            <div>
              <label htmlFor="email" style={labelStyle}>
                Email Address{requiredMark}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                aria-required="true"
                aria-describedby={errors.email ? 'error-email' : undefined}
                style={inputStyle(!!errors.email)}
                onFocus={(e) => { e.target.style.borderColor = '#CFA556'; e.target.style.boxShadow = '0 0 0 3px rgba(207, 165, 86, 0.15)'; }}
                onBlur={(e) => { e.target.style.borderColor = errors.email ? 'rgba(230,80,80,0.6)' : 'rgba(188, 188, 188, 0.16)'; e.target.style.boxShadow = 'none'; }}
              />
              {errors.email && <p id="error-email" role="alert" style={errorStyle}>{errors.email}</p>}
            </div>
          </div>

          {/* Row 2: Phone + Category */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
            <div>
              <label htmlFor="phone" style={labelStyle}>
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 9876543210"
                style={inputStyle(false)}
                onFocus={(e) => { e.target.style.borderColor = '#CFA556'; e.target.style.boxShadow = '0 0 0 3px rgba(207, 165, 86, 0.15)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(188, 188, 188, 0.16)'; e.target.style.boxShadow = 'none'; }}
              />
            </div>

            <div>
              <label htmlFor="category" style={labelStyle}>
                Category{requiredMark}
              </label>
              <select
                id="category"
                name="category"
                value={form.category}
                onChange={handleChange}
                aria-required="true"
                aria-describedby={errors.category ? 'error-category' : undefined}
                style={{
                  ...inputStyle(!!errors.category),
                  cursor: 'pointer',
                  color: form.category ? '#FFFFFF' : '#BCBCBC',
                }}
                onFocus={(e) => { e.target.style.borderColor = '#CFA556'; e.target.style.boxShadow = '0 0 0 3px rgba(207, 165, 86, 0.15)'; }}
                onBlur={(e) => { e.target.style.borderColor = errors.category ? 'rgba(230,80,80,0.6)' : 'rgba(188, 188, 188, 0.16)'; e.target.style.boxShadow = 'none'; }}
              >
                <option value="" disabled style={{ background: '#1E1E1E', color: '#BCBCBC' }}>Select category</option>
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id} style={{ background: '#1E1E1E', color: '#FFFFFF' }}>
                    {cat.label}
                  </option>
                ))}
                <option value="general" style={{ background: '#1E1E1E', color: '#FFFFFF' }}>General Enquiry</option>
                <option value="wholesale" style={{ background: '#1E1E1E', color: '#FFFFFF' }}>Wholesale</option>
              </select>
              {errors.category && <p id="error-category" role="alert" style={errorStyle}>{errors.category}</p>}
            </div>
          </div>

          {/* Subject */}
          <div style={{ marginBottom: 16 }}>
            <label htmlFor="subject" style={labelStyle}>
              Subject{requiredMark}
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
              placeholder="How can we help you?"
              aria-required="true"
              aria-describedby={errors.subject ? 'error-subject' : undefined}
              style={inputStyle(!!errors.subject)}
              onFocus={(e) => { e.target.style.borderColor = '#CFA556'; e.target.style.boxShadow = '0 0 0 3px rgba(207, 165, 86, 0.15)'; }}
              onBlur={(e) => { e.target.style.borderColor = errors.subject ? 'rgba(230,80,80,0.6)' : 'rgba(188, 188, 188, 0.16)'; e.target.style.boxShadow = 'none'; }}
            />
            {errors.subject && <p id="error-subject" role="alert" style={errorStyle}>{errors.subject}</p>}
          </div>

          {/* Message */}
          <div style={{ marginBottom: 28 }}>
            <label htmlFor="message" style={labelStyle}>
              Message{requiredMark}
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Please describe your issue or question in detail..."
              aria-required="true"
              aria-describedby={errors.message ? 'error-message' : undefined}
              rows={5}
              style={{
                ...inputStyle(!!errors.message),
                resize: 'vertical',
                minHeight: 120,
              }}
              onFocus={(e) => { e.target.style.borderColor = '#CFA556'; e.target.style.boxShadow = '0 0 0 3px rgba(207, 165, 86, 0.15)'; }}
              onBlur={(e) => { e.target.style.borderColor = errors.message ? 'rgba(230,80,80,0.6)' : 'rgba(188, 188, 188, 0.16)'; e.target.style.boxShadow = 'none'; }}
            />
            {errors.message && <p id="error-message" role="alert" style={errorStyle}>{errors.message}</p>}
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            id="contact-submit-btn"
            disabled={loading}
            aria-label={loading ? 'Sending message...' : 'Send message'}
            whileHover={!loading ? { scale: 1.02 } : {}}
            whileTap={!loading ? { scale: 0.98 } : {}}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '14px 30px',
              borderRadius: 6,
              background: loading ? 'rgba(207, 165, 86, 0.6)' : '#CFA556',
              border: 'none',
              color: '#161616',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: '0.9rem',
              cursor: loading ? 'not-allowed' : 'pointer',
              letterSpacing: '0.02em',
              transition: 'background 0.2s ease',
              boxShadow: '0 4px 15px rgba(207, 165, 86, 0.25)',
            }}
          >
            {loading ? (
              <>
                <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} />
                Sending...
              </>
            ) : (
              <>
                <Send size={16} />
                Send Message
              </>
            )}
          </motion.button>
        </form>
      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
}

export default function Contact() {
  return (
    <div style={{ background: '#161616', minHeight: '100vh', color: '#FFFFFF', paddingTop: 80 }}>

      {/* Hero */}
      <section
        aria-label="Contact hero"
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
            Reach Out
          </span>
          <h1 style={{
            fontFamily: "'Fraunces', 'Cormorant Garamond', serif",
            fontSize: 'clamp(2.5rem, 6vw, 4.2rem)',
            fontWeight: 500,
            color: '#FFFFFF',
            letterSpacing: '-0.03em',
            lineHeight: 1.08,
            marginBottom: 12,
          }}>
            Let's Start a Conversation
          </h1>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.95rem',
            color: '#D4D4D4',
            maxWidth: 480,
            margin: '0 auto',
            lineHeight: 1.65,
          }}>
            Whether you need bespoke spice blends, wholesale partnerships, or simply want to say hello — we'd love to hear from you.
          </p>
        </motion.div>
      </section>

      {/* Form + Info Grid */}
      <section style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: 'clamp(40px, 6vw, 80px) clamp(16px, 4vw, 60px)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 32,
        alignItems: 'start',
      }}>
        <ScrollReveal direction="left" delay={0.1}>
          <ContactInfoCard />
        </ScrollReveal>
        <ScrollReveal direction="right" delay={0.2}>
          <ContactForm />
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
}
