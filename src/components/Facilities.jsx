import React from 'react';
import { MapPin, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';

export default function Facilities() {
  const facilities = [
    {
      title: 'Sân Tập Sa Hình Chuẩn ISO 10.000m²',
      description: 'Sân tập thiết kế 100% giống sân thi sát hạch chính thức của Sở GTVT với đầy đủ 11 bài thi sa hình (Vòng số 8, Ghép xe dọc, Ghép xe ngang, Dừng xe dốc cầu...).',
      image: '/images/hero_banner.jpg',
      tags: ['Sân thi chuẩn ISO', 'Xe Vios 2023', 'Đầy đủ 11 bài thi']
    },
    {
      title: 'Sân Tập Xe Máy & Mô Tô Phân Khối Lớn (A1 - A2)',
      description: 'Đầy đủ xe số, xe tay ga và xe mô tô phân khối lớn (Rebel, Z300, Honda SH) để học viên luyện tập kỹ năng cua vòng số 8 mượt mà.',
      image: '/images/motorcycle_course.jpg',
      tags: ['Sân vòng số 8 cảm ứng', 'Đủ xe PKL', 'Bảo hộ an toàn']
    },
    {
      title: 'Phòng Học Cabin Mô Phỏng 3D Hiện Đại',
      description: 'Trang bị buồng lái cabin mô phỏng 3D độ nét cao với vô lăng cảm ứng lực, giúp học viên thực hành lái xe trong điều kiện mưa bão, sương mù, đường núi.',
      image: '/images/simulator_facility.jpg',
      tags: ['Mô phỏng 3D chuẩn GTVT', 'Vô lăng phản hồi lực', '120 Tình huống giao thông']
    }
  ];

  return (
    <section id="facilities" style={{
      padding: '5.5rem 0',
      background: 'var(--gradient-dark-card)',
      borderTop: '1px solid var(--border-color)',
      borderBottom: '1px solid var(--border-color)'
    }}>
      <div className="container">
        <div className="section-title-wrapper">
          <div className="badge badge-emerald">
            <Sparkles size={16} />
            <span>Cơ Sở Vật Chất Hiện Đại</span>
          </div>
          <h2 className="section-title">
            Hệ Thống Sân Tập & <span className="text-gradient">Đội Xe Đời Mới</span>
          </h2>
          <p className="section-subtitle">
            Học viên được thực hành trên dàn xe đời mới trang bị máy lạnh 100% và hệ thống sân tập sát hạch tiêu chuẩn quốc tế.
          </p>
        </div>

        <div className="grid-3" style={{ alignItems: 'stretch' }}>
          {facilities.map((fac, idx) => (
            <div key={idx} className="glass-card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', overflow: 'hidden', height: '240px' }}>
                <img
                  src={fac.image}
                  alt={fac.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.06)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
              </div>

              <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem' }}>{fac.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                    {fac.description}
                  </p>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {fac.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        padding: '0.25rem 0.65rem',
                        borderRadius: '9999px',
                        background: 'var(--bg-card-hover)',
                        color: 'var(--accent-emerald)',
                        border: '1px solid var(--border-color)'
                      }}
                    >
                      ✓ {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
