import React from 'react';
import { Star, Quote, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Nguyễn Thị Thuỳ Trang',
      role: 'Học viên Bằng B ( Số Sàn )',
      avatar: '/images/testimonials/nguyen_thi_thuy_trang.png',
      rating: 5,
      comment: 'Thầy Hồng dạy rất nhiệt tình và kiên nhẫn. Xe tập Vios đời mới chạy êm mát lạnh. Mình đăng ký gói B và đã thi đậu ngay lần đầu với điểm tuyệt đối 100/100 sa hình!',
      passedDate: 'Thi đậu tháng 01/2026'
    },
    {
      name: 'Trần Thị Thu Hà',
      role: 'Học viên Bằng B ( Số Tự Động )',
      avatar: '/images/testimonials/tran_thi_thu_ha.jpg',
      rating: 5,
      comment: 'Lúc đầu chưa biết lái xe ô tô em rất sợ dốc cầu và ghép xe. Nhưng Thầy Hồng 1 kèm 1 chỉ bảo tỉ mỉ nên em tự tin hẳn. Học phí trọn gói 100% đúng như cam kết!',
      passedDate: 'Thi đậu tháng 02/2026'
    },
    {
      name: 'Lê Ngọc Khải',
      role: 'Học viên Bằng Mô Tô A ( PKL )',
      avatar: '/images/testimonials/le_ngoc_khai.webp',
      rating: 5,
      comment: 'Đăng ký bằng A ở đây cực kỳ nhanh gọn. Được tập trên xe côn tay chuẩn sân sát hạch, thầy chỉ cho mấy mẹo cua số 8 không bao giờ bị cán vạch. Rất hài lòng!',
      passedDate: 'Thi đậu tháng 01/2026'
    }
  ];

  return (
    <section id="testimonials" style={{ padding: '5rem 0', background: 'var(--bg-main)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="section-title-wrapper">
          <div className="badge badge-gold">
            <Sparkles size={15} />
            <span>Cảm Nhận Thực Tế</span>
          </div>
          <h2 className="section-title">
            Học Viên Nói Gì Về <span className="text-gradient">Thầy Hồng?</span>
          </h2>
          <p className="section-subtitle">
            Hơn 850 học viên đã tin tưởng lựa chọn và nhận bằng lái xe thành công cùng Thầy Hồng.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: '1.75rem',
          alignItems: 'stretch'
        }}>
          {reviews.map((rev, idx) => (
            <div key={idx} className="modern-card" style={{
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'var(--bg-card)',
              borderRadius: '16px',
              border: '1px solid var(--border-color)'
            }}>
              <div>
                {/* Rating Stars & Quote Icon */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[...Array(rev.rating)].map((_, sIdx) => (
                      <Star key={sIdx} size={18} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>
                  <Quote size={28} color="var(--primary)" style={{ opacity: 0.25 }} />
                </div>

                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.65, fontStyle: 'italic', marginBottom: '1.75rem' }}>
                  "{rev.comment}"
                </p>
              </div>

              {/* Student info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid var(--primary)'
                  }}
                />
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-main)' }}>{rev.name}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{rev.role}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--primary)', fontWeight: 700, marginTop: '0.1rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <CheckCircle2 size={13} />
                    <span>{rev.passedDate}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
