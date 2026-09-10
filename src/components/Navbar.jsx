import React, { useState, useEffect } from 'react';
import { ShieldCheck, Phone, Menu, X, ChevronRight, Sparkles, Sun, Moon } from 'lucide-react';

export default function Navbar({ theme, toggleTheme, onOpenRegister, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll reliably on iOS, Android & Desktop when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      document.body.dataset.scrollY = scrollY.toString();
      document.body.classList.add('mobile-menu-active');

      // Full freeze on iOS WebKit & all mobile browsers
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.classList.remove('mobile-menu-active');
      const scrollY = document.body.dataset.scrollY;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.body.style.touchAction = '';

      if (scrollY !== undefined && scrollY !== '') {
        window.scrollTo(0, parseInt(scrollY, 10));
        delete document.body.dataset.scrollY;
      }
    }

    return () => {
      document.body.classList.remove('mobile-menu-active');
      const scrollY = document.body.dataset.scrollY;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.body.style.touchAction = '';
      if (scrollY !== undefined && scrollY !== '') {
        window.scrollTo(0, parseInt(scrollY, 10));
        delete document.body.dataset.scrollY;
      }
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Ưu Điểm', href: '#about-teacher' },
    { name: 'Khóa Học', href: '#courses' },
    { name: 'Nâng Hạng', href: '#upgrades' },
    { name: 'Xe Nâng & Máy Xúc', href: '#machinery' },
    { name: 'Thi Thử Lý Thuyết', href: '#theory-exam' },
    { name: 'Lộ Trình', href: '#roadmap' },
    { name: 'Sân Tập', href: '#facilities' },
    { name: 'Hình Ảnh', href: '#student-gallery' },
    { name: 'Đánh Giá', href: '#testimonials' },
    { name: 'Hỏi Đáp', href: '#faq' },
  ];

  const handleLinkClick = (e, href) => {
    if (href && href.startsWith('#')) {
      if (e) e.preventDefault();
      setMobileMenuOpen(false);

      setTimeout(() => {
        const targetId = href.substring(1);
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          const headerOffset = 70;
          const elementPosition = targetEl.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
        if (onNavigate) {
          onNavigate();
        }
      }, 60);
      return;
    }

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
        zIndex: 100000,
        background: 'var(--bg-nav)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border-color)',
        boxShadow: 'var(--shadow-sm)',
        transition: 'all 0.3s ease',
        width: '100%',
        maxWidth: '100vw'
      }}>
        <div className="navbar-container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: '64px',
          width: '100%',
          maxWidth: '100%',
          padding: '0.35rem 1.5rem',
          boxSizing: 'border-box'
        }}>
          {/* Brand Logo - Anchored firmly to the left */}
          <a
            href="#"
            className="brand-logo"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              textDecoration: 'none',
              flexShrink: 0,
              marginRight: '0.75rem'
            }}
          >
            <img
              src={theme === 'dark' ? '/logo-dark.png' : '/logo.png'}
              alt="Logo Thầy Hồng Dạy Lái - THDL"
              height="40"
              style={{
                height: 'clamp(36px, 5vw, 42px)',
                width: 'auto',
                objectFit: 'contain',
                display: 'block',
                transition: 'opacity 0.2s ease'
              }}
            />
            <div
              className="brand-title-text"
              style={{
                fontFamily: "'Google Sans', 'Quicksand', 'Montserrat', sans-serif",
                fontSize: 'clamp(1.05rem, 3.5vw, 1.25rem)',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}
            >
              <span style={{ color: 'var(--text-main)' }}>THẦY HỒNG</span>
              <span className="text-gradient">DẠY LÁI</span>
            </div>
          </a>

          {/* Desktop Nav Links (Framed for Visual Consistency) */}
          <nav className="desktop-nav" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
            margin: '0 0.5rem',
            flexShrink: 1,
            minWidth: 0
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
                  padding: '0.36rem 0.58rem',
                  borderRadius: '8px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-main)',
                  fontSize: '0.83rem',
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

          {/* Right Actions (Theme Switcher + Prominent Hotline Badges + Register CTA + Hamburger) */}
          <div className="navbar-right-actions" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
            flexShrink: 0,
            marginLeft: 'auto'
          }}>
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              aria-label="Chuyển đổi chế độ sáng/tối"
              title={theme === 'dark' ? 'Chuyển sang chế độ Sáng' : 'Chuyển sang chế độ Tối'}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-sm)',
                flexShrink: 0
              }}
            >
              {theme === 'dark' ? (
                <Sun size={17} color="#FBBF24" />
              ) : (
                <Moon size={17} color="#3B82F6" />
              )}
            </button>

            {/* Always-Visible Hotline Button */}
            <div className="hotline-btn-group" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', flexShrink: 0 }}>
              <a
                href="https://zalo.me/0336611194"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-hotline-badge primary"
                title="Hotline / Zalo: 0336.611.194"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.42rem 0.65rem',
                  borderRadius: '8px',
                  background: 'rgba(29, 78, 216, 0.12)',
                  border: '1.5px solid rgba(59, 130, 246, 0.4)',
                  fontSize: '0.84rem',
                  fontWeight: 800,
                  color: '#3B82F6',
                  whiteSpace: 'nowrap',
                  textDecoration: 'none',
                  boxShadow: '0 2px 6px rgba(59, 130, 246, 0.15)',
                  transition: 'all 0.2s ease',
                  flexShrink: 0
                }}
              >
                <Phone size={13} color="#3B82F6" style={{ flexShrink: 0 }} />
                <span>0336.611.194</span>
              </a>
            </div>

            {/* Register CTA Button */}
            <button
              onClick={() => onOpenRegister()}
              className="btn btn-gold desktop-cta-btn"
              style={{
                padding: '0.52rem 1.05rem',
                fontSize: '0.86rem',
                fontWeight: 800,
                borderRadius: '8px',
                boxShadow: 'var(--shadow-gold)',
                whiteSpace: 'nowrap',
                flexShrink: 0
              }}
            >
              <Sparkles size={15} />
              <span>ĐĂNG KÝ HỌC</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
              style={{
                background: mobileMenuOpen ? 'rgba(239, 68, 68, 0.15)' : 'var(--bg-card)',
                border: mobileMenuOpen ? '1.5px solid rgba(239, 68, 68, 0.5)' : '1px solid var(--border-color)',
                color: mobileMenuOpen ? '#EF4444' : 'var(--text-main)',
                padding: '0.45rem 0.55rem',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'var(--shadow-sm)',
                flexShrink: 0,
                transition: 'all 0.2s ease'
              }}
              aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu điều hướng'}
              title={mobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* FULL-SCREEN MOBILE DRAWER (Self-contained, solid background, zero scroll chaining to outside page) */}
      {mobileMenuOpen && (
        <div
          className="mobile-drawer-wrapper"
          style={{
            position: 'fixed',
            top: '64px',
            left: 0,
            right: 0,
            bottom: 0,
            height: 'calc(100dvh - 64px)',
            maxHeight: 'calc(100dvh - 64px)',
            background: 'var(--bg-card, #0F172A)',
            zIndex: 99999,
            overflowY: 'auto',
            overscrollBehavior: 'contain',
            WebkitOverflowScrolling: 'touch',
            touchAction: 'pan-y',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
            animation: 'mobileDrawerSlideDown 0.2s ease-out'
          }}
        >
          {/* Scrollable Container Panel */}
          <div
            className="mobile-drawer-panel"
            style={{
              padding: '1rem 1rem 4.5rem 1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.6rem',
              width: '100%',
              maxWidth: '640px',
              margin: '0 auto',
              boxSizing: 'border-box'
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
                onClick={(e) => handleLinkClick(e, link.href)}
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
                    <span>Hotline / Zalo:</span>
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

            {/* Bottom Quick Close Button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="btn"
              style={{
                width: '100%',
                padding: '0.72rem',
                marginTop: '0.35rem',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-muted)',
                fontWeight: 700,
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.45rem',
                cursor: 'pointer'
              }}
            >
              <X size={16} />
              <span>Đóng menu điều hướng</span>
            </button>
          </div>
        </div>
      )}

      {/* Responsive Media Queries */}
      <style>{`
        @keyframes mobileDrawerSlideDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .navbar-container {
          width: 100%;
          max-width: 100%;
          padding: 0.35rem 1.5rem;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 64px;
          box-sizing: border-box;
        }
        .nav-framed-item {
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-hotline-badge {
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-hotline-badge:hover {
          transform: translateY(-1px);
          filter: brightness(1.15);
        }
        .desktop-nav::-webkit-scrollbar {
          display: none;
        }

        /* Large laptops & monitors */
        @media (max-width: 1440px) {
          .desktop-nav {
            gap: 0.22rem !important;
            margin: 0 0.35rem !important;
          }
          .nav-framed-item {
            padding: 0.32rem 0.45rem !important;
            font-size: 0.79rem !important;
          }
        }

        /* Medium screens (<= 1240px): activate mobile menu so Phone numbers & CTA have plenty of room and are never cut off */
        @media (max-width: 1240px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }

        /* Tablets & Mobile: clean layout with zero overflow */
        @media (max-width: 768px) {
          .desktop-cta-btn {
            display: none !important;
          }
          .hotline-btn-group {
            display: none !important;
          }
        }

        @media (max-width: 520px) {
          .brand-title-text {
            display: none !important;
          }
          .brand-logo {
            margin-right: 0.35rem !important;
          }
        }

        @media (max-width: 600px) {
          .navbar-container {
            padding: 0.35rem 0.75rem !important;
          }
        }
      `}</style>
    </>
  );
}
