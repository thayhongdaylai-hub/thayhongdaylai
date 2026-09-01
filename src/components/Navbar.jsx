import React, { useState, useEffect } from 'react';
import { ShieldCheck, Phone, Menu, X, ChevronRight, Sparkles, Sun, Moon } from 'lucide-react';

export default function Navbar({ theme, toggleTheme, onOpenRegister, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
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

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate();
    }
  };

  return (
    <>
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: 'var(--bg-nav)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border-color)',
        boxShadow: 'var(--shadow-sm)',
        transition: 'all 0.3s ease',
        width: '100%',
        maxWidth: '100vw'
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: '64px',
          paddingTop: '0.35rem',
          paddingBottom: '0.35rem'
        }}>
          {/* Brand Logo */}
          <a
            href="#"
            className="brand-logo"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              textDecoration: 'none',
              flexShrink: 0,
              marginRight: '1.25rem'
            }}
          >
            <img
              src="/logo.png"
              alt="Logo Thầy Hồng Dạy Lái"
              width="46"
              height="46"
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                objectFit: 'cover',
                flexShrink: 0,
                boxShadow: '0 4px 14px rgba(29, 78, 216, 0.3)',
                border: '2px solid rgba(251, 191, 36, 0.7)'
              }}
            />
            <div style={{
              fontFamily: "'Montserrat', 'Be Vietnam Pro', sans-serif",
              fontSize: 'clamp(1.05rem, 3.5vw, 1.3rem)',
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

          {/* Desktop Nav Links (Framed for Visual Consistency) */}
          <nav className="desktop-nav" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            margin: '0 1rem 0 1.75rem',
            flexShrink: 0
          }}>
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={handleLinkClick}
                className="nav-framed-item"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '0.42rem 0.72rem',
                  borderRadius: '9px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-main)',
                  fontSize: '0.88rem',
                  fontWeight: 650,
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--primary)';
                  e.currentTarget.style.borderColor = 'var(--primary)';
                  e.currentTarget.style.backgroundColor = 'var(--primary-tint)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 3px 8px var(--primary-glow)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-main)';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.backgroundColor = 'var(--bg-card)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions (Theme Switcher + Hotline + Register CTA + Hamburger) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              aria-label="Chuyển đổi chế độ sáng/tối"
              title={theme === 'dark' ? 'Chuyển sang chế độ Sáng' : 'Chuyển sang chế độ Tối'}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              {theme === 'dark' ? (
                <Sun size={18} color="#FBBF24" />
              ) : (
                <Moon size={18} color="#3B82F6" />
              )}
            </button>

            {/* Hotline Zalo Buttons (Desktop only) */}
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
                padding: '0.65rem 1.25rem',
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
                padding: '0.45rem 0.55rem',
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
      </header>

      {/* FULL-SCREEN MOBILE DRAWER OVERLAY (Rendered outside header to guarantee 100% visibility) */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            top: '64px',
            left: 0,
            right: 0,
            bottom: 0,
            height: 'calc(100vh - 64px)',
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            zIndex: 99999,
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {/* Scrollable Container Panel */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'var(--bg-card)',
              borderBottom: '2px solid var(--border-color)',
              padding: '1rem 1rem 3.5rem 1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.55rem',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
              minHeight: 'max-content'
            }}
          >
            {/* Mobile Theme Switch Row */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.65rem 0.9rem',
              background: 'var(--bg-main)',
              borderRadius: '10px',
              border: '1px solid var(--border-color)',
              marginBottom: '0.25rem'
            }}>
              <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-main)' }}>
                Giao diện: {theme === 'dark' ? '🌙 Chế độ Tối' : '☀️ Chế độ Sáng'}
              </span>
              <button
                onClick={toggleTheme}
                className="btn btn-secondary"
                style={{ padding: '0.35rem 0.75rem', fontSize: '0.82rem', borderRadius: '8px' }}
              >
                {theme === 'dark' ? 'Đổi sang Sáng' : 'Đổi sang Tối'}
              </button>
            </div>

            {/* Navigation Links */}
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={handleLinkClick}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  background: 'var(--bg-main)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-main)',
                  fontSize: '0.94rem',
                  fontWeight: 700,
                  textDecoration: 'none'
                }}
              >
                <span>{link.name}</span>
                <ChevronRight size={16} color="var(--primary)" />
              </a>
            ))}

            {/* Dedicated High-Visibility Phone Numbers Section on Mobile */}
            <div style={{
              padding: '0.85rem',
              background: 'var(--bg-main)',
              border: '1.5px solid var(--border-color)',
              borderRadius: '12px',
              marginTop: '0.35rem'
            }}>
              <div style={{ fontSize: '0.76rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.55rem' }}>
                📞 Hotline & Zalo Tư Vấn Trực Tiếp:
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <a
                  href="https://zalo.me/0983406221"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.7rem 0.9rem',
                    borderRadius: '10px',
                    background: 'var(--primary-tint)',
                    border: '1px solid var(--border-highlight)',
                    color: 'var(--primary)',
                    fontWeight: 800,
                    fontSize: '0.95rem',
                    textDecoration: 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                    <Phone size={16} color="var(--primary)" />
                    <span>Thầy Hồng:</span>
                  </div>
                  <strong style={{ fontSize: '1.02rem', letterSpacing: '0.02em' }}>0983.406.221</strong>
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
                    padding: '0.7rem 0.9rem',
                    borderRadius: '10px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-main)',
                    fontWeight: 800,
                    fontSize: '0.95rem',
                    textDecoration: 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                    <Phone size={16} color="var(--accent-gold)" />
                    <span>Tư Vấn Hồ Sơ:</span>
                  </div>
                  <strong style={{ fontSize: '1.02rem', letterSpacing: '0.02em' }}>0336.611.194</strong>
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
                    padding: '0.7rem',
                    borderRadius: '10px',
                    background: '#1877F2',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    textDecoration: 'none'
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFFFFF">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>FANPAGE FACEBOOK CHÍNH THỨC</span>
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="btn btn-gold"
              style={{ width: '100%', padding: '0.9rem', marginTop: '0.4rem', fontSize: '0.95rem' }}
            >
              ĐĂNG KÝ HỌC NGAY • NHẬN VOUCHER
            </button>
          </div>
        </div>
      )}

      {/* Responsive Media Queries */}
      <style>{`
        .nav-framed-item {
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @media (max-width: 1280px) {
          .desktop-nav {
            gap: 0.25rem !important;
            margin: 0 0.5rem 0 1rem !important;
          }
          .nav-framed-item {
            padding: 0.38rem 0.55rem !important;
            font-size: 0.82rem !important;
          }
        }
        @media (max-width: 1080px) {
          .hotline-btn {
            display: none !important;
          }
        }
        @media (max-width: 992px) {
          .desktop-nav, .hotline-btn { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (max-width: 600px) {
          .desktop-cta-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}
