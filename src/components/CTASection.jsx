import React from 'react';
import { Sparkles, Phone, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function CTASection({ onOpenRegister }) {
  return (
    <section style={{
      padding: '5rem 0',
      background: 'var(--gradient-cta)',
      color: '#FFFFFF',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative Background Accents */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        right: '-10%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'rgba(245, 158, 11, 0.15)',
        filter: 'blur(80px)',
        pointerEvents: 'none'
      }} />

      <div style={{
        position: 'absolute',
        bottom: '-20%',
        left: '-10%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.08)',
        filter: 'blur(80px)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.45rem',
          padding: '0.4rem 1rem',
          borderRadius: '9999px',
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          fontSize: '0.86rem',
          fontWeight: 700,
          color: '#FEF3C7',
          marginBottom: '1.5rem'
        }}>
          <Sparkles size={16} color="#FBBF24" />
          <span>Tặng Ngay Voucher 1.000.000đ Khi Đăng Ký Hôm Nay</span>
        </div>

        {/* Big Heading */}
        <h2 style={{
          fontSize: 'clamp(1.85rem, 4.5vw, 2.75rem)',
          fontWeight: 900,
          letterSpacing: '-0.03em',
          color: '#FFFFFF',
          marginBottom: '1rem',
          lineHeight: 1.25
        }}>
          Bạn Đang Muốn Học Và Thi Bằng Lái?
        </h2>

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
          color: '#E0E7FF',
          maxWidth: '640px',
          margin: '0 auto 2.25rem auto',
          lineHeight: 1.6
        }}>
          Đăng ký ngay để được Thầy Hồng tư vấn chi tiết lộ trình học, lịch thi sớm nhất và nhận gói ưu đãi trọn gói 100% không phát sinh.
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          <button
            onClick={() => onOpenRegister()}
            className="btn btn-gold"
            style={{
              padding: '1rem 2.25rem',
              fontSize: '1.05rem',
              borderRadius: '12px',
              boxShadow: '0 8px 24px rgba(245, 158, 11, 0.4)'
            }}
          >
            <Sparkles size={18} />
            <span>ĐĂNG KÝ HỌC NGAY</span>
          </button>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'rgba(255, 255, 255, 0.12)',
            backdropFilter: 'blur(10px)',
            border: '1.5px solid rgba(255, 255, 255, 0.4)',
            borderRadius: '12px',
            padding: '0.35rem 0.6rem',
            gap: '0.4rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.5rem 0.65rem',
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: '0.95rem'
            }}>
              <Phone size={17} color="#FBBF24" />
              <span>GỌI TƯ VẤN:</span>
            </div>
            <a
              href="https://zalo.me/0983406221"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '0.55rem 0.85rem',
                borderRadius: '8px',
                background: '#FFFFFF',
                color: 'var(--primary-dark)',
                fontWeight: 800,
                fontSize: '0.92rem',
                textDecoration: 'none',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
              }}
              title="Nhắn Zalo Thầy Hồng: 0983.406.221"
            >
              0983.406.221
            </a>
            <span style={{ color: '#E2E8F0', fontWeight: 600 }}>•</span>
            <a
              href="https://zalo.me/0336611194"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '0.55rem 0.85rem',
                borderRadius: '8px',
                background: '#FFFFFF',
                color: 'var(--primary-dark)',
                fontWeight: 800,
                fontSize: '0.92rem',
                textDecoration: 'none',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
              }}
              title="Nhắn Zalo Thầy Hồng: 0336.611.194"
            >
              0336.611.194
            </a>
          </div>

          {/* Facebook Fanpage Button */}
          <a
            href="https://www.facebook.com/share/1GuWF1te7x/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-white"
            style={{
              padding: '0.95rem 1.65rem',
              fontSize: '0.95rem',
              borderRadius: '12px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            title="Fanpage Facebook Thầy Hồng Dạy Lái"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>FANPAGE</span>
          </a>
        </div>

        {/* Trust Badges Row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
          fontSize: '0.88rem',
          color: '#CBD5E1'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <CheckCircle2 size={16} color="#FBBF24" />
            <span>Học phí trọn gói minh bạch</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <CheckCircle2 size={16} color="#FBBF24" />
            <span>Học 1 kèm 1 không quát mắng</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <CheckCircle2 size={16} color="#FBBF24" />
            <span>Cam kết tỷ lệ thi đậu 99%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
