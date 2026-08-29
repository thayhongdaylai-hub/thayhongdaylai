import React from 'react';
import { Star, Quote, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Nguyễn Văn Minh',
      role: 'Học viên Bằng B2 (Số Sàn)',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      comment: 'Thầy Hùng dạy rất nhiệt tình và kiên nhẫn. Xe tập Vios đời mới chạy êm mát lạnh. Mình đăng ký gói B2 và đã thi đậu ngay lần đầu với điểm tuyệt đối 100/100 sa hình!',
      passedDate: 'Thi đậu tháng 01/2026'
    },
    {
      name: 'Trần Thị Thu Hà',
      role: 'Học viên Bằng B1 (Số Tự Động)',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      comment: 'Lúc đầu chưa biết lái xe ô tô em rất sợ dốc cầu và ghép xe. Nhưng trung tâm cho tập cabin 3D và 1 thầy 1 trò nên em tự tin hẳn. Học phí trọn gói 100% đúng như cam kết!',
      passedDate: 'Thi đậu tháng 02/2026'
    },
    {
      name: 'Lê Hoàng Anh',
      role: 'Học viên Bằng Mô Tô A2 (PKL)',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      comment: 'Đăng ký bằng A2 ở đây cực kỳ nhanh gọn. Được tập trên xe Z300 chuẩn sân sát hạch, thầy chỉ cho mấy mẹo vòng 8 không bao giờ bị cán vạch. Rất hài lòng!',
      passedDate: 'Thi đậu tháng 01/2026'
    }
  ];

  return (
    <section id="testimonials" style={{ padding: '5rem 0', background: 'var(--bg-main)' }}>
      <div className="container">
        <div className="section-title-wrapper">
          <div className="badge badge-emerald">
            <Sparkles size={16} />
            <span>Cảm Nhận Thực Tế</span>
          </div>
          <h2 className="section-title">
            Học Viên Nói Gì Về <span className="text-gradient">Thầy Hồng?</span>
          </h2>
          <p className="section-subtitle">
            Hơn 850 học viên đã tin tưởng lựa chọn và nhận bằng lái xe thành công cùng Thầy Hồng.
          </p>
        </div>

        <div className="grid-3" style={{ alignItems: 'stretch' }}>
          {reviews.map((rev, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                {/* Rating Stars & Quote Icon */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', gap: '0.2rem' }}>
                    {[...Array(rev.rating)].map((_, sIdx) => (
                      <Star key={sIdx} size={18} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>
                  <Quote size={28} color="var(--accent-emerald)" style={{ opacity: 0.4 }} />
                </div>

                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '1.75rem' }}>
                  "{rev.comment}"
                </p>
              </div>

              {/* Student info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid var(--accent-emerald)'
                  }}
                />
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: 700 }}>{rev.name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{rev.role}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', fontWeight: 600, marginTop: '0.1rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <CheckCircle2 size={12} />
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
