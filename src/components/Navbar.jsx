import React, { useState } from 'react';
import { ShieldCheck, Moon, Sun, Phone, Menu, X, ChevronRight } from 'lucide-react';

export default function Navbar({ theme, toggleTheme, onOpenRegister }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Gói học & Học phí', href: '#courses' },
    { name: 'Nâng hạng GPLX', href: '#upgrades' },
    { name: 'Thi thử lý thuyết', href: '#theory-exam', isNew: true },
    { name: 'Lộ trình đào tạo', href: '#roadmap' },
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
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--border-color)',
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: '72px',
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
            gap: '0.75rem',
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
            flexShrink: 0,
            transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}>
            <ShieldCheck size={22} color="#FFFFFF" strokeWidth={2.5} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{
              fontFamily: "'Quicksand', sans-serif",
              fontSize: '1.2rem',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              whiteSpace: 'nowrap',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem'
            }}>
              <span style={{ color: 'var(--text-main)' }}>THẦY HỒNG</span>
              <span className="text-gradient">DẠY LÁI</span>
            </div>
            <div style={{
              fontSize: '0.65rem',
              fontWeight: 600,
              color: 'var(--text-light)',
              letterSpacing: '0.06em',
              lineHeight: 1.2,
              marginTop: '1px',
              whiteSpace: 'nowrap'
            }}>
              TRUNG TÂM SÁT HẠCH GTVT
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav desktop-nav-grid">
          {navLinks.map((link, idx) => (
            <a key={idx} href={link.href} className="nav-link-card" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <span>{link.name}</span>
              {link.isNew && (
                <span style={{
                  fontSize: '0.62rem',
                  fontWeight: 800,
                  padding: '0.1rem 0.4rem',
                  borderRadius: '9999px',
                  background: 'var(--gradient-emerald)',
                  color: '#FFFFFF',
                  letterSpacing: '0.02em',
                  lineHeight: 1.2
                }}>
                  MỚI
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Chuyển đổi giao diện"
            title={theme === 'dark' ? 'Chuyển sang giao diện Sáng' : 'Chuyển sang giao diện Tối'}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'var(--bg-card-hover)',
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
              <Sun size={18} color="#F59E0B" />
            ) : (
              <Moon size={18} color="#5E6378" />
            )}
          </button>

          {/* Hotline */}
          <a
            href="tel:0983406221"
            className="hotline-btn"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.5rem 1rem',
              borderRadius: '10px',
              background: 'var(--bg-card-hover)',
              border: '1px solid var(--border-color)',
              fontSize: '0.88rem',
              fontWeight: 700,
              color: 'var(--text-main)'
            }}
          >
            <Phone size={15} color="var(--accent-emerald)" />
            <span>0983.406.221</span>
          </a>

          {/* CTA */}
          <button
            onClick={() => onOpenRegister()}
            className="btn btn-primary"
            style={{ padding: '0.55rem 1.2rem', fontSize: '0.88rem' }}
          >
            <span>Tư Vấn Ngay</span>
            <ChevronRight size={15} />
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
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          background: 'var(--bg-main)',
          borderBottom: '1px solid var(--border-color)',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
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
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>{link.name}</span>
              {link.isNew && (
                <span className="badge badge-emerald" style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem' }}>
                  MỚI
                </span>
              )}
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
