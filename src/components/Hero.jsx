import React from 'react';
import { Award, CheckCircle2, ArrowRight, Shield, Zap, Sparkles, Users } from 'lucide-react';

export default function Hero({ onOpenRegister }) {
  return (
    <section style={{
      position: 'relative',
      padding: '5rem 0 4rem 0',
      background: 'var(--gradient-hero)',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.15fr 0.85fr',
          gap: '3.5rem',
          alignItems: 'center'
        }}>
          
          {/* Left Column */}
          <div>
            <div className="badge badge-emerald" style={{ marginBottom: '1.25rem' }}>
              <Sparkles size={14} />
              <span>Tuyển sinh khóa mới 2026 • Tặng 1.000.000đ cho 50 người đăng ký đầu tiên</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
              letterSpacing: '-0.04em',
              marginBottom: '1.25rem',
              lineHeight: 1.1
            }}>
              ĐÀO TẠO Ô Tô & Xe Máy{' '}
              <span className="text-gradient">Cam Kết Đậu 99%</span>
            </h1>

            <p style={{
              fontSize: '1.05rem',
              fontWeight: 400,
              color: 'var(--text-muted)',
              marginBottom: '2rem',
              maxWidth: '620px',
              lineHeight: 1.7
            }}>
              Trung tâm đào tạo & sát hạch lái xe uy tín. Học phí trọn gói minh bạch 100%, cam kết không phát sinh chi phí. Thời gian học linh hoạt 1 Thầy – 1 Trò – 1 Xe.
            </p>

            {/* Key USPs */}
            <div className="usp-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '0.85rem',
              marginBottom: '2.5rem'
            }}>
              {[
                'Học phí trọn gói 100% (Không phát sinh chi phí)',
                'Thi sát hạch trực tiếp tại sân chuẩn học lái',
                'Học 1 Thầy / 1 Trò (Xe tiêu chuẩn học lái)',
                'Hỗ trợ đóng học phí nhiều lần'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                  <CheckCircle2 size={18} color="var(--accent-emerald)" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.92rem', fontWeight: 500, color: 'var(--text-muted)' }}>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <button
                onClick={() => onOpenRegister()}
                className="btn btn-primary"
                style={{ padding: '1rem 2rem', fontSize: '1.02rem' }}
              >
                <span>Nhận Ưu Đãi 1.000.000đ</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Right Column: Hero Image */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              position: 'relative'
            }}>
              <img
                src="/images/hero_banner.jpg"
                alt="Sân tập lái xe ô tô chuyên nghiệp"
                style={{
                  width: '100%',
                  height: '420px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />

              {/* Floating Badge 1 */}
              <div className="glass-card" style={{
                position: 'absolute',
                top: '1.5rem',
                left: '1.5rem',
                padding: '0.75rem 1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                borderRadius: '12px'
              }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'var(--gradient-emerald)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Award size={20} color="#FFFFFF" />
                </div>
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: 800 }}>99% Đậu</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Sát hạch lần đầu</div>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="glass-card" style={{
                position: 'absolute',
                bottom: '1.5rem',
                right: '1.5rem',
                padding: '0.75rem 1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                borderRadius: '12px'
              }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'var(--gradient-blue)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Users size={20} color="#FFFFFF" />
                </div>
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: 800 }}>15.000+</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Học viên đã nhận bằng</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="glass-card stats-row" style={{
          marginTop: '3.5rem',
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
          ].map((stat, idx) => (
            <div key={idx} className="stat-item" style={{
              borderRight: idx < 3 ? '1px solid var(--border-color)' : 'none',
              paddingRight: idx < 3 ? '1.5rem' : '0'
            }}>
              <div style={{
                fontSize: '2.2rem',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                color: 'var(--accent-emerald)',
                marginBottom: '0.2rem'
              }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
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
