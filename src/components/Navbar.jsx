import React, { useState, useEffect } from 'react';
import { ShieldCheck, Phone, Menu, X, ChevronRight, Sparkles, Sun, Moon } from 'lucide-react';

export default function Navbar({ theme, toggleTheme, onOpenRegister }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Automatically close mobile menu when user starts scrolling the page
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleScroll = () => {
      setMobileMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Khóa Học', href: '#courses' },
    { name: 'Nâng Hạng', href: '#upgrades' },
    { name: 'Ưu Điểm', href: '#about-teacher' },
    { name: 'Thi Thử Lý Thuyết', href: '#theory-exam' },
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

          {/* Mobile Header Quick Hotline Button (always visible on phone header) */}
          <a
            href="https://zalo.me/0983406221"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-header-hotline"
            title="Gọi Hotline Thầy Hồng: 0983.406.221"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.45rem 0.75rem',
              borderRadius: '8px',
              background: 'var(--primary-tint)',
              border: '1px solid var(--border-highlight)',
              color: 'var(--primary)',
              fontSize: '0.82rem',
              fontWeight: 800,
              textDecoration: 'none',
              whiteSpace: 'nowrap'
            }}
          >
            <Phone size={13} color="var(--primary)" />
            <span>0983.406.221</span>
          </a>

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

      {/* Mobile Overlay Backdrop & Drawer */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop: click anywhere outside or scroll to close */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            style={{
              position: 'fixed',
              top: '74px',
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.65)',
              backdropFilter: 'blur(5px)',
              WebkitBackdropFilter: 'blur(5px)',
              zIndex: 998
            }}
          />

          {/* Drawer Menu Panel */}
          <div style={{
            position: 'fixed',
            top: '74px',
            left: 0,
            right: 0,
            maxHeight: 'calc(100vh - 145px)',
            overflowY: 'auto',
            padding: '0.85rem 1rem 1.25rem 1rem',
            background: 'var(--bg-card)',
            borderBottom: '2px solid var(--border-color)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.4rem',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
            zIndex: 999,
            WebkitOverflowScrolling: 'touch'
          }}>
            {/* Mobile Theme Switch Row */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.55rem 0.8rem',
              background: 'var(--bg-main)',
              borderRadius: '10px',
              border: '1px solid var(--border-color)',
              marginBottom: '0.2rem'
            }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)' }}>
                Giao diện: {theme === 'dark' ? '🌙 Chế độ Tối' : '☀️ Chế độ Sáng'}
              </span>
              <button
                onClick={toggleTheme}
                className="btn btn-secondary"
                style={{ padding: '0.3rem 0.65rem', fontSize: '0.78rem', borderRadius: '8px' }}
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
                  padding: '0.65rem 0.9rem',
                  borderRadius: '10px',
                  background: 'var(--bg-main)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-main)',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  textDecoration: 'none'
                }}
              >
                <span>{link.name}</span>
                <ChevronRight size={15} color="var(--primary)" />
              </a>
            ))}

            {/* Dedicated High-Visibility Phone Numbers Section on Mobile */}
            <div style={{
              padding: '0.75rem',
              background: 'var(--bg-main)',
              border: '1.5px solid var(--border-color)',
              borderRadius: '12px',
              marginTop: '0.25rem'
            }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.45rem' }}>
                📞 Hotline & Zalo Tư Vấn Trực Tiếp:
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                <a
                  href="https://zalo.me/0983406221"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.6rem 0.85rem',
                    borderRadius: '10px',
                    background: 'var(--primary-tint)',
                    border: '1px solid var(--border-highlight)',
                    color: 'var(--primary)',
                    fontWeight: 800,
                    fontSize: '0.92rem',
                    textDecoration: 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Phone size={15} color="var(--primary)" />
                    <span>Thầy Hồng:</span>
                  </div>
                  <strong style={{ fontSize: '0.98rem', letterSpacing: '0.02em' }}>0983.406.221</strong>
                </a>

                <a
                  href="https://zalo.me/0336611194"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.6rem 0.85rem',
                    borderRadius: '10px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-main)',
                    fontWeight: 800,
                    fontSize: '0.92rem',
                    textDecoration: 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Phone size={15} color="var(--accent-gold)" />
                    <span>Tư Vấn Hồ Sơ:</span>
                  </div>
                  <strong style={{ fontSize: '0.98rem', letterSpacing: '0.02em' }}>0336.611.194</strong>
                </a>

                <a
                  href="https://www.facebook.com/share/1GuWF1te7x/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.45rem',
                    padding: '0.6rem',
                    borderRadius: '10px',
                    background: '#1877F2',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    textDecoration: 'none'
                  }}
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="#FFFFFF">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>FANPAGE FACEBOOK CHÍNH THỨC</span>
                </a>
              </div>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="btn btn-gold"
              style={{ width: '100%', padding: '0.8rem', marginTop: '0.25rem', fontSize: '0.92rem' }}
            >
              ĐĂNG KÝ HỌC NGAY • NHẬN VOUCHER
            </button>
          </div>
        </>
      )}

      {/* Responsive Media Queries */}
      <style>{`
        @media (max-width: 992px) {
          .desktop-nav, .hotline-btn { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .mobile-header-hotline { display: flex !important; }
        }
        @media (max-width: 600px) {
          .desktop-cta-btn { display: none !important; }
        }
        @media (max-width: 480px) {
          .mobile-header-hotline span { font-size: 0.78rem !important; }
        }
      `}</style>
    </header>
  );
}
