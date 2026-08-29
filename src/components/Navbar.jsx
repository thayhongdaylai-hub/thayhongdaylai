import React, { useState } from 'react';
import { ShieldCheck, Moon, Sun, Phone, Menu, X, ChevronRight } from 'lucide-react';

export default function Navbar({ theme, toggleTheme, onOpenRegister }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Về Thầy Hồng', href: '#about-teacher' },
    { name: 'Gói Học & Học Phí', href: '#courses' },
    { name: 'Lộ Trình Đào Tạo', href: '#roadmap' },
    { name: 'Sân Tập Chuẩn ISO', href: '#facilities' },
    { name: 'Đánh Giá Học Viên', href: '#testimonials' },
    { name: 'Hỏi Đáp (FAQ)', href: '#faq' },
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
        minHeight: '70px',
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
            gap: '0.65rem',
            textDecoration: 'none',
            flexShrink: 0
          }}
        >
          <div className="brand-icon-box" style={{
            width: '40px',
            height: '40px',
            borderRadius: '12px',
            background: 'var(--gradient-emerald)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 16px var(--accent-emerald-glow)',
            flexShrink: 0,
            transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}>
            <ShieldCheck size={22} color="#051A10" strokeWidth={2.5} />
          </div>
          <div style={{
            fontFamily: "'Google Sans', 'Quicksand', sans-serif",
            fontSize: 'clamp(1.15rem, 4vw, 1.4rem)',
            fontWeight: 800,
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

        {/* Right Actions (Theme Switcher + Hotline + Register CTA + Hamburger) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Chuyển đổi giao diện"
            title={theme === 'dark' ? 'Chuyển sang giao diện Sáng' : 'Chuyển sang giao diện Tối'}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-main)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0,
              transition: 'all 0.25s ease'
            }}
          >
            {theme === 'dark' ? (
              <Sun size={18} color="#F59E0B" />
            ) : (
              <Moon size={18} color="#3B82F6" />
            )}
          </button>

          {/* Hotline Button (Hidden on tablet/mobile) */}
          <a
            href="tel:0983406221"
            className="hotline-btn"
            title="Thầy Hồng: 0983.406.221 / 0336.611.194"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.55rem 1rem',
              borderRadius: '9999px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              fontSize: '0.88rem',
              fontWeight: 600,
              color: 'var(--text-main)',
              whiteSpace: 'nowrap',
              flexShrink: 0
            }}
          >
            <Phone size={15} color="var(--accent-emerald)" />
            <span>0983.406.221</span>
          </a>

          {/* Register CTA Button (Hidden on small mobile to prevent squish) */}
          <button
            onClick={() => onOpenRegister()}
            className="btn btn-primary desktop-cta-btn"
            style={{ padding: '0.55rem 1.15rem', fontSize: '0.85rem', whiteSpace: 'nowrap', flexShrink: 0 }}
          >
            <span>Tư Vấn Ngay</span>
            <ChevronRight size={15} color="#051A10" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            aria-label="Menu điều hướng"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-main)',
              borderRadius: '10px',
              cursor: 'pointer',
              width: '38px',
              height: '38px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 0
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          background: 'var(--bg-main)',
          borderBottom: '1px solid var(--border-color)',
          padding: '1.25rem 1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.85rem',
          boxShadow: 'var(--shadow-lg)',
          animation: 'pulseGlow 0.3s ease-out'
        }}>
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--text-main)',
                padding: '0.65rem 0.85rem',
                borderRadius: '10px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>{link.name}</span>
              <ChevronRight size={16} color="var(--accent-emerald)" />
            </a>
          ))}

          {/* Direct Hotline Quick Button in drawer */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem', marginTop: '0.35rem' }}>
            <a
              href="tel:0983406221"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.45rem',
                padding: '0.75rem',
                borderRadius: '12px',
                background: 'var(--bg-card-hover)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-main)',
                fontSize: '0.88rem',
                fontWeight: 700
              }}
            >
              <Phone size={16} color="var(--accent-emerald)" />
              <span>0983.406.221</span>
            </a>
            <a
              href="tel:0336611194"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.45rem',
                padding: '0.75rem',
                borderRadius: '12px',
                background: 'var(--bg-card-hover)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-main)',
                fontSize: '0.88rem',
                fontWeight: 700
              }}
            >
              <Phone size={16} color="var(--accent-blue)" />
              <span>0336.611.194</span>
            </a>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenRegister();
            }}
            className="btn btn-primary"
            style={{ width: '100%', padding: '0.85rem', marginTop: '0.25rem', fontSize: '0.95rem' }}
          >
            Đăng Ký Khóa Học Nhận Ưu Đãi
          </button>
        </div>
      )}

      {/* Responsive Media Queries */}
      <style>{`
        @media (max-width: 992px) {
          .desktop-nav, .hotline-btn { display: none !important; }
        }
        @media (max-width: 600px) {
          .desktop-cta-btn { display: none !important; }
        }
        @media (min-width: 993px) {
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}
