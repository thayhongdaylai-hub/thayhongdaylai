import React from 'react';
import { Award, CheckCircle2, ArrowRight, Shield, Zap, Sparkles, Users } from 'lucide-react';

export default function Hero({ onOpenRegister }) {
  return (
    <section style={{
      position: 'relative',
      padding: '4.5rem 0 3.5rem 0',
      background: 'var(--gradient-hero)',
      overflow: 'hidden'
    }}>
      {/* Background Decorative Glow Circles */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '15%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'var(--accent-emerald-glow)',
        filter: 'blur(100px)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '10%',
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        background: 'var(--accent-blue-glow)',
        filter: 'blur(120px)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.15fr 0.85fr',
          gap: '3.5rem',
          alignItems: 'center'
        }}>
          
          {/* Left Column: Headline & CTA */}
          <div>
            <div className="badge badge-emerald" style={{ marginBottom: '1.25rem' }}>
              <Sparkles size={16} />
              <span>Tuyển sinh khóa mới 2026 • Tặng 1.000.000đ cho 50 người đăng ký đầu tiên</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
              letterSpacing: '-0.03em',
              marginBottom: '1.25rem',
              lineHeight: 1.15
            }}>
              ĐÀO TẠO Ô Tô & Xe Máy <span className="text-gradient">Cam Kết Đậu 99%</span>
            </h1>

            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.12rem',
              fontWeight: 600,
              color: 'var(--text-muted)',
              marginBottom: '2rem',
              maxWidth: '680px',
              lineHeight: 1.65,
              letterSpacing: '0.01em'
            }}>
              TRUNG TÂM ĐÀO TẠO & SÁT HẠCH LÁI XE. Học phí TRỌN GÓI VÀ MINH BẠCH 100% . CAM KẾT KHÔNG PHÁT SINH thêm CHI PHÍ KHI THI ĐẠT LẦN ĐẦU TIÊN ( Thời Gian Học Linh Hoạt 1 Thầy - 1 Trò - 1 Xe )
            </p>

            {/* Key USPs */}
            <div className="usp-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem',
              marginBottom: '2.5rem'
            }}>
              {[
                'Học phí trọn gói 100% (Không phát sinh chi phí)',
                'Thi sát hạch trực tiếp tại sân chuẩn học lái',
                'Học 1 Thầy / 1 Trò (Xe tiêu chuẩn học lái)',
                'Hỗ trợ đóng học phí nhiều lần'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <div style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    background: 'var(--accent-emerald-glow)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <CheckCircle2 size={16} color="var(--accent-emerald)" />
                  </div>
                  <span style={{ fontSize: '0.95rem', fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <button
                onClick={() => onOpenRegister()}
                className="btn btn-primary"
                style={{ padding: '1rem 2rem', fontSize: '1.05rem' }}
              >
                <span>Nhận Ưu Đãi 1.000.000đ</span>
                <ArrowRight size={20} color="#051A10" />
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Card */}
          <div style={{ position: 'relative' }}>
            <div className="glass-card" style={{
              padding: '0.75rem',
              boxShadow: 'var(--shadow-lg)',
              borderRadius: '1.75rem',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <img
                src="/images/hero_banner.jpg"
                alt="Sân tập lái xe ô tô chuyên nghiệp"
                style={{
                  width: '100%',
                  height: '420px',
                  objectFit: 'cover',
                  borderRadius: '1.25rem',
                  display: 'block'
                }}
              />

              {/* Floating Badge 1: Pass rate */}
              <div className="glass-card" style={{
                position: 'absolute',
                top: '1.75rem',
                left: '1.75rem',
                padding: '0.85rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                borderRadius: '1rem',
                background: 'var(--bg-nav)'
              }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'var(--gradient-emerald)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Award size={24} color="#051A10" />
                </div>
                <div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800 }}>99% Tỷ Lệ Đậu</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Sát hạch lần đầu tiên</div>
                </div>
              </div>

              {/* Floating Badge 2: Students Count */}
              <div className="glass-card" style={{
                position: 'absolute',
                bottom: '1.75rem',
                right: '1.75rem',
                padding: '0.85rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                borderRadius: '1rem',
                background: 'var(--bg-nav)'
              }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'var(--gradient-blue)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Users size={24} color="#FFFFFF" />
                </div>
                <div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800 }}>15.000+</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Học viên đã nhận bằng</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="glass-card stats-row" style={{
          marginTop: '4rem',
          padding: '2rem 2.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2rem',
          textAlign: 'center'
        }}>
          {[
            { value: '15,000+', label: 'Học viên đã tốt nghiệp', icon: Users },
            { value: '99%', label: 'Tỷ lệ đậu kỳ sát hạch', icon: Award },
            { value: '12+', label: 'Sân tập chuẩn ISO toàn quốc', icon: Shield },
            { value: '100%', label: 'Cam kết trọn gói không phát sinh', icon: Zap }
          ].map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <div key={idx} className="stat-item" style={{
                borderRight: idx < 3 ? '1px solid var(--border-color)' : 'none',
                paddingRight: idx < 3 ? '1.5rem' : '0'
              }}>
                <div style={{
                  fontSize: '2.2rem',
                  fontFamily: "'Inter Tight', sans-serif",
                  fontWeight: 800,
                  color: 'var(--accent-emerald)',
                  marginBottom: '0.2rem'
                }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .stats-row { grid-template-columns: repeat(2, 1fr) !important; gap: 1.5rem !important; }
          .stat-item { border-right: none !important; padding-right: 0 !important; }
        }
        @media (max-width: 576px) {
          .usp-grid { grid-template-columns: 1fr !important; }
          .stats-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
