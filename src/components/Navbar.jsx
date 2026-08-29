import React, { useState } from 'react';
import { ShieldCheck, Phone, Menu, X, ChevronRight, Sparkles, Sun, Moon } from 'lucide-react';

export default function Navbar({ theme, toggleTheme, onOpenRegister }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Khóa Học', href: '#courses' },
    { name: 'Nâng Hạng', href: '#upgrades' },
    { name: 'Ưu Điểm', href: '#about-teacher' },
    { name: 'Thi Lý Thuyết', href: '#theory-exam' },
    { name: 'Lộ Trình', href: '#roadmap' },
    { name: 'Sân Tập', href: '#facilities' },
    { name: 'Đánh Giá', href: '#testimonials' },
    { name: 'Hỏi Đáp', href: '#faq' },
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'var(--bg-nav)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-color)',
      boxShadow: 'var(--shadow-sm)',
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: '74px',
        paddingTop: '0.4rem',
        paddingBottom: '0.4rem'
      }}>
        {/* Brand Logo */}
        <a
          href="#"
          className="brand-logo"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
            flexShrink: 0
          }}
        >
          <div className="brand-icon-box" style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: 'var(--gradient-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--shadow-primary)',
            flexShrink: 0,
            transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}>
            <ShieldCheck size={24} color="#FBBF24" strokeWidth={2.5} />
          </div>
          <div style={{
            fontFamily: "'Montserrat', 'Be Vietnam Pro', sans-serif",
            fontSize: 'clamp(1.15rem, 3.8vw, 1.35rem)',
            fontWeight: 900,
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            whiteSpace: 'nowrap',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem'
          }}>
            <span style={{ color: 'var(--text-main)' }}>THẦY HỒNG</span>
            <span className="text-gradient">DẠY LÁI</span>
          </div>
        </a>

        {/* Desktop Nav Links (Clean Modern Bar) */}
        <nav className="desktop-nav" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          margin: '0 0.75rem'
        }}>
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.45rem 0.75rem',
                borderRadius: '8px',
                color: 'var(--text-muted)',
                fontSize: '0.9rem',
                fontWeight: 600,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--primary)';
                e.currentTarget.style.backgroundColor = 'var(--primary-tint)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-muted)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions (Theme Switcher + Hotline + Register CTA + Hamburger) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexShrink: 0 }}>
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Chuyển đổi chế độ sáng/tối"
            title={theme === 'dark' ? 'Chuyển sang chế độ Sáng' : 'Chuyển sang chế độ Tối'}
          >
            {theme === 'dark' ? (
              <Sun size={19} color="#FBBF24" />
            ) : (
              <Moon size={19} color="#3B82F6" />
            )}
          </button>

          {/* Hotline Zalo Buttons */}
          <div className="hotline-btn" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <a
              href="https://zalo.me/0983406221"
              target="_blank"
              rel="noopener noreferrer"
              title="Nhắn Zalo Thầy Hồng: 0983.406.221"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.5rem 0.75rem',
                borderRadius: '8px',
                background: 'var(--primary-tint)',
                border: '1px solid var(--border-highlight)',
                fontSize: '0.86rem',
                fontWeight: 700,
                color: 'var(--primary)',
                whiteSpace: 'nowrap',
                textDecoration: 'none'
              }}
            >
              <Phone size={14} color="var(--primary)" />
              <span>0983.406.221</span>
            </a>
            <a
              href="https://zalo.me/0336611194"
              target="_blank"
              rel="noopener noreferrer"
              title="Nhắn Zalo Thầy Hồng: 0336.611.194"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.5rem 0.75rem',
                borderRadius: '8px',
                background: 'var(--primary-tint)',
                border: '1px solid var(--border-highlight)',
                fontSize: '0.86rem',
                fontWeight: 700,
                color: 'var(--primary)',
                whiteSpace: 'nowrap',
                textDecoration: 'none'
              }}
            >
              <Phone size={14} color="var(--primary)" />
              <span>0336.611.194</span>
            </a>
          </div>

          {/* Register CTA Button */}
          <button
            onClick={() => onOpenRegister()}
            className="btn btn-gold desktop-cta-btn"
            style={{
              padding: '0.65rem 1.35rem',
              fontSize: '0.9rem',
              borderRadius: '10px',
              boxShadow: 'var(--shadow-gold)'
            }}
          >
            <Sparkles size={16} />
            <span>ĐĂNG KÝ HỌC</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-main)',
              padding: '0.5rem',
              borderRadius: '10px',
              cursor: 'pointer',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--shadow-sm)'
            }}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          padding: '1.25rem',
          background: 'var(--bg-card)',
          borderBottom: '1px solid var(--border-color)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          boxShadow: 'var(--shadow-lg)'
        }}>
          {/* Mobile Theme Switch Row */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.6rem 0.85rem',
            background: 'var(--bg-main)',
            borderRadius: '10px',
            border: '1px solid var(--border-color)',
            marginBottom: '0.25rem'
          }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)' }}>
              Giao diện: {theme === 'dark' ? '🌙 Chế độ Tối' : '☀️ Chế độ Sáng'}
            </span>
            <button
              onClick={toggleTheme}
              className="btn btn-secondary"
              style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem', borderRadius: '8px' }}
            >
              {theme === 'dark' ? 'Đổi sang Sáng' : 'Đổi sang Tối'}
            </button>
          </div>

          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.75rem 1rem',
                borderRadius: '10px',
                background: 'var(--bg-main)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-main)',
                fontSize: '0.95rem',
                fontWeight: 700,
                textDecoration: 'none'
              }}
            >
              <span>{link.name}</span>
              <ChevronRight size={16} color="var(--primary)" />
            </a>
          ))}

          {/* Quick Contact Buttons on Mobile */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem', marginTop: '0.5rem' }}>
            <a
              href="https://zalo.me/0983406221"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem',
                padding: '0.75rem',
                borderRadius: '10px',
                background: 'var(--primary-tint)',
                border: '1px solid var(--border-highlight)',
                color: 'var(--primary)',
                fontSize: '0.88rem',
                fontWeight: 700,
                textDecoration: 'none'
              }}
            >
              <Phone size={15} color="var(--primary)" />
              <span>Zalo 0983</span>
            </a>
            <a
              href="https://zalo.me/0336611194"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem',
                padding: '0.75rem',
                borderRadius: '10px',
                background: 'var(--bg-main)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-main)',
                fontSize: '0.88rem',
                fontWeight: 700,
                textDecoration: 'none'
              }}
            >
              <Phone size={15} color="var(--accent-gold)" />
              <span>Zalo 0336</span>
            </a>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenRegister();
            }}
            className="btn btn-gold"
            style={{ width: '100%', padding: '0.85rem', marginTop: '0.35rem', fontSize: '0.95rem' }}
          >
            ĐĂNG KÝ HỌC NGAY • NHẬN VOUCHER
          </button>
        </div>
      )}

      {/* Responsive Media Queries */}
      <style>{`
        @media (max-width: 992px) {
          .desktop-nav, .hotline-btn { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (max-width: 600px) {
          .desktop-cta-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}
