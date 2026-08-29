import React from 'react';
import { Award, ShieldCheck, HeartHandshake, Sparkles, CheckCircle2, ArrowRight, UserCheck, Clock, ThumbsUp } from 'lucide-react';

export default function AboutTeacher({ onOpenRegister }) {
  const highlights = [
    {
      icon: Award,
      title: 'Hơn 10 Năm Kinh Nghiệm',
      desc: 'Giảng viên sát hạch giàu kinh nghiệm, trực tiếp đào tạo hơn 850 học viên thi đỗ giấy phép lái xe ô tô & xe máy.',
      color: 'var(--accent-emerald)',
      bg: 'var(--accent-emerald-glow)'
    },
    {
      icon: HeartHandshake,
      title: 'Giảng Dạy Tận Tâm & Kiên Nhẫn',
      desc: 'Phương châm 1-Thầy-1-Trò không quát mắng, hướng dẫn tỉ mỉ từng thao tác côn số, ghép chuồng và xử lý tình huống thực tế.',
      color: 'var(--accent-blue)',
      bg: 'var(--accent-blue-glow)'
    },
    {
      icon: ShieldCheck,
      title: 'Tỷ Lệ Đậu Khóa Học 99%',
      desc: 'Bộ mẹo lý thuyết độc quyền + kèm xe chip trực tiếp tại sân sát hạch giúp học viên tự tin vượt qua kỳ thi sát hạch dễ dàng.',
      color: 'var(--accent-orange)',
      bg: 'rgba(245, 158, 11, 0.12)'
    },
    {
      icon: ThumbsUp,
      title: 'Minh Bạch 100% & Trả Góp 0%',
      desc: 'Cam kết bằng văn bản không phát sinh chi phí, hỗ trợ chia nhỏ học phí nhiều lần đóng giúp an tâm học tập.',
      color: '#8B5CF6',
      bg: 'rgba(139, 92, 246, 0.12)'
    }
  ];

  return (
    <section id="about-teacher" style={{
      padding: '5.5rem 0',
      background: 'var(--bg-card)',
      borderTop: '1px solid var(--border-color)',
      borderBottom: '1px solid var(--border-color)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper" style={{ marginBottom: '3.5rem' }}>
          <div className="badge badge-emerald">
            <Sparkles size={16} />
            <span>Giảng Viên Đào Tạo & Sát Hạch Uy Tín</span>
          </div>
          <h2 className="section-title">
            Về <span className="text-gradient">Thầy Hồng Dạy Lái</span>
          </h2>
          <p className="section-subtitle">
            Hơn 10 năm kinh nghiệm tận tâm đồng hành – Cam kết đào tạo vững tay lái, vững vàng luật giao thông và tỷ lệ đậu 99% ngay lần thi đầu tiên.
          </p>
        </div>

        {/* 2-Column Grid: Teacher Profile & Core Values */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.15fr',
          gap: '3.5rem',
          alignItems: 'center'
        }} className="about-grid">
          
          {/* Left: Teacher Visual Card */}
          <div style={{ position: 'relative' }}>
            <div className="glass-card" style={{
              padding: '1rem',
              borderRadius: '24px',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-main)',
              boxShadow: 'var(--shadow-lg)',
              overflow: 'hidden'
            }}>
              <img
                src="/images/gallery/1788023503238_204090055134776357_2543730497231762877_7e9b4c78c6268845613a8d2bae8b2879.jpg"
                alt="Thầy Hồng Dạy Lái Xe Ô Tô và Xe Máy"
                style={{
                  width: '100%',
                  height: '380px',
                  objectFit: 'cover',
                  borderRadius: '18px',
                  display: 'block'
                }}
              />

              {/* Quick Info Box */}
              <div style={{
                padding: '1.25rem 1rem 0.5rem 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.75rem'
              }}>
                <div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.2rem' }}>
                    Thầy Hồng Dạy Lái
                  </h3>
                  <div style={{ fontSize: '0.85rem', color: 'var(--accent-emerald)', fontWeight: 700 }}>
                    Giảng Viên Sát Hạch Hơn 10 Năm Kinh Nghiệm
                  </div>
                </div>
                <div className="badge badge-emerald" style={{ padding: '0.4rem 0.85rem', fontSize: '0.8rem', fontWeight: 800 }}>
                  10+ Năm Kinh Nghiệm
                </div>
              </div>
            </div>

            {/* Experience Floating Badge */}
            <div className="glass-card" style={{
              position: 'absolute',
              top: '-15px',
              right: '-15px',
              padding: '0.75rem 1.15rem',
              borderRadius: '16px',
              background: 'var(--bg-main)',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem'
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
                <Award size={20} color="#051A10" />
              </div>
              <div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1.2 }}>10+ Năm</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Kinh nghiệm đào tạo</div>
              </div>
            </div>
          </div>

          {/* Right: Detailed Intro & Highlights */}
          <div>
            <h3 style={{
              fontSize: '1.75rem',
              fontWeight: 800,
              lineHeight: 1.25,
              marginBottom: '1rem',
              color: 'var(--text-main)'
            }}>
              Tận Tâm Kèm Cặp – Vững Tay Lái <span className="text-gradient">An Toàn Trên Mọi Cung Đường</span>
            </h3>

            <p style={{
              fontSize: '1rem',
              color: 'var(--text-muted)',
              lineHeight: 1.65,
              marginBottom: '1.75rem'
            }}>
              Với hơn <strong>10 năm kinh nghiệm trực tiếp giảng dạy và hướng dẫn sát hạch lái xe</strong>, Thầy Hồng luôn thấu hiểu những bỡ ngỡ, lo lắng của học viên mới bắt đầu. Bằng phương pháp kèm cặp <strong>1 Thầy - 1 Trò - 1 Xe</strong> thực tế, học viên được rèn luyện phản xạ lái xe an toàn, vững tâm lý phòng thủ và tự tin vượt qua kỳ thi sát hạch chuẩn GTVT ngay lần đầu.
            </p>

            {/* 4 Feature Items */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1.25rem',
              marginBottom: '2rem'
            }} className="highlights-grid">
              {highlights.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    style={{
                      padding: '1.2rem',
                      borderRadius: '16px',
                      background: 'var(--bg-main)',
                      border: '1px solid var(--border-color)',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      background: item.bg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '0.75rem'
                    }}>
                      <IconComp size={22} color={item.color} />
                    </div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '0.35rem', color: 'var(--text-main)' }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.45 }}>
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action CTA */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => onOpenRegister && onOpenRegister({ note: 'Đăng ký học cùng Thầy Hồng' })}
                className="btn btn-primary"
                style={{ padding: '0.95rem 1.8rem', fontSize: '1rem' }}
              >
                <span>Đăng Ký Học Cùng Thầy Hồng</span>
                <ArrowRight size={18} color="#051A10" />
              </button>
              
              <a
                href="tel:0983406221"
                className="btn btn-secondary"
                style={{ padding: '0.95rem 1.6rem', fontSize: '0.95rem' }}
              >
                <span>Hotline: 0983.406.221</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
        @media (max-width: 576px) {
          .highlights-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
