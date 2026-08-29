import React from 'react';
import { MapPin, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';

export default function Facilities() {
  const facilities = [
    {
      title: 'Sân Tập Sa Hình Chuẩn ISO',
      description: 'Sân tập thiết kế 100% giống sân thi sát hạch chính thức của Sở GTVT với đầy đủ 11 bài thi sa hình (Vòng số 8, Ghép xe dọc, Ghép xe ngang, Dừng xe dốc cầu...).',
      image: '/images/facilities/san-tap-sa-hinh.jpeg',
      tags: ['Sân thi chuẩn ISO', 'Xe thi sát hạch', 'Đầy đủ 11 bài thi']
    },
    {
      title: 'Sân Tập Xe Máy & Mô Tô Phân Khối Lớn (A1 - A2)',
      description: 'Đầy đủ xe số, xe tay ga và xe mô tô phân khối lớn (Rebel, Z300, Honda SH) để học viên luyện tập kỹ năng cua vòng số 8 mượt mà.',
      image: '/images/facilities/san-tap-xe-may.jpg',
      tags: ['Vòng số 8 cảm ứng', 'Đủ xe tay ga & tay côn', 'Bảo hộ an toàn']
    },
    {
      title: 'Phòng Học Cabin Mô Phỏng 3D Hiện Đại',
      description: 'Trang bị buồng lái cabin mô phỏng 3D độ nét cao với vô lăng cảm ứng lực, giúp học viên thực hành lái xe trong điều kiện mưa bão, sương mù, đường núi.',
      image: '/images/facilities/phong-hoc-cabin.jpg',
      tags: ['Mô phỏng 3D chuẩn GTVT', 'Vô lăng phản hồi lực', '120 Tình huống giao thông']
    }
  ];

  return (
    <section id="facilities" style={{
      padding: '5rem 0',
      background: 'var(--bg-main)',
      borderBottom: '1px solid var(--border-color)'
    }}>
      <div className="container">
        <div className="section-title-wrapper">
          <div className="badge badge-blue">
            <Sparkles size={15} />
            <span>Cơ Sở Vật Chất Hiện Đại</span>
          </div>
          <h2 className="section-title">
            Hệ Thống <span className="text-gradient">Sân Tập & Xe Thực Hành</span>
          </h2>
          <p className="section-subtitle">
            Học viên được thực hành trên dàn xe tiêu chuẩn của Sân Thi Sát Hạch và Hệ Thống Sân Tập Sát Hạch Tiêu Chuẩn Bộ GTVT.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: '1.75rem',
          alignItems: 'stretch'
        }}>
          {facilities.map((fac, idx) => (
            <div key={idx} className="modern-card" style={{
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              background: 'var(--bg-card)',
              borderRadius: '16px',
              border: '1px solid var(--border-color)'
            }}>
              <div style={{ position: 'relative', overflow: 'hidden', height: '220px' }}>
                <img
                  src={fac.image}
                  alt={fac.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
              </div>

              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.5rem' }}>{fac.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: 1.55 }}>
                    {fac.description}
                  </p>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {fac.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        padding: '0.25rem 0.65rem',
                        borderRadius: '9999px',
                        background: 'var(--primary-tint)',
                        color: 'var(--primary)',
                        border: '1px solid rgba(29, 78, 216, 0.15)'
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
