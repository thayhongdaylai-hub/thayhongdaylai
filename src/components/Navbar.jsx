import React, { useState } from 'react';
import { ShieldCheck, Moon, Sun, Phone, Menu, X, ChevronRight } from 'lucide-react';

export default function Navbar({ theme, toggleTheme, onOpenRegister }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Gói học & Học phí', href: '#courses' },
    { name: 'Lộ trình đào tạo', href: '#roadmap' },
    { name: 'Tính chi phí', href: '#calculator' },
    { name: 'Sân tập chuẩn ISO', href: '#facilities' },
    { name: 'Đánh giá học viên', href: '#testimonials' },
    { name: 'Hỏi đáp (FAQ)', href: '#faq' },
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
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: '84px',
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem'
      }}>
        {/* Brand Logo */}
        <a
          href="#"
          className="brand-logo"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.85rem',
            textDecoration: 'none',
            flexShrink: 0
          }}
        >
          <div className="brand-icon-box" style={{
            width: '46px',
            height: '46px',
            borderRadius: '14px',
            background: 'var(--gradient-emerald)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 16px var(--accent-emerald-glow)',
            flexShrink: 0,
            transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}>
            <ShieldCheck size={26} color="#051A10" strokeWidth={2.5} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '1.35rem',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              whiteSpace: 'nowrap',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}>
              <span style={{ color: 'var(--text-main)' }}>THẦY HỒNG</span>
              <span className="text-gradient">DẠY LÁI</span>
            </div>
            <div style={{
              fontSize: '0.68rem',
              fontWeight: 700,
              color: 'var(--accent-emerald)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              lineHeight: 1.2,
              marginTop: '2px',
              whiteSpace: 'nowrap',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}>
              <span style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-emerald)',
                display: 'inline-block',
                boxShadow: '0 0 8px var(--accent-emerald)'
              }}></span>
              TRUNG TÂM SÁT HẠCH GTVT
            </div>
          </div>
        </a>

        {/* Desktop Nav Links (2-Row Grid with Framed Cards) */}
        <nav className="desktop-nav desktop-nav-grid">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="nav-link-card"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions (Theme Switcher + Hotline + Register CTA) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Chuyển đổi giao diện"
            title={theme === 'dark' ? 'Chuyển sang giao diện Sáng' : 'Chuyển sang giao diện Tối'}
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-main)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.25s ease'
            }}
          >
            {theme === 'dark' ? (
              <Sun size={20} color="#F59E0B" />
            ) : (
              <Moon size={20} color="#3B82F6" />
            )}
          </button>

          {/* Hotline Button */}
          <a
            href="tel:0988123456"
            className="hotline-btn"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.6rem 1.1rem',
              borderRadius: '9999px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              fontSize: '0.9rem',
              fontWeight: 600,
              color: 'var(--text-main)'
            }}
          >
            <Phone size={16} color="var(--accent-emerald)" />
            <span>0988.123.456</span>
          </a>

          {/* Register CTA Button */}
          <button
            onClick={() => onOpenRegister()}
            className="btn btn-primary"
            style={{ padding: '0.65rem 1.4rem', fontSize: '0.9rem' }}
          >
            <span>Tư Vấn Ngay</span>
            <ChevronRight size={16} color="#051A10" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-main)',
              cursor: 'pointer',
              padding: '0.5rem'
            }}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          background: 'var(--bg-main)',
          borderBottom: '1px solid var(--border-color)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem'
        }}>
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '1.05rem',
                fontWeight: 600,
                color: 'var(--text-main)'
              }}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenRegister();
            }}
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '0.5rem' }}
          >
            Đăng Ký Khóa Học Ngay
          </button>
        </div>
      )}

      {/* Hide desktop nav on mobile via CSS media query style */}
      <style>{`
        @media (max-width: 992px) {
          .desktop-nav, .hotline-btn { display: none !important; }
        }
        @media (min-width: 993px) {
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}
