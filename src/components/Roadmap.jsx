import React from 'react';
import { FileText, Monitor, Car, Award, CreditCard, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Roadmap({ onOpenRegister }) {
  const steps = [
    {
      step: '01',
      title: 'Đăng Ký & Hoàn Thiện Hồ Sơ',
      time: 'Nộp Hồ Sơ Khai Giảng',
      icon: FileText,
      color: 'var(--primary)',
      bg: 'var(--primary-tint)',
      description: 'Chỉ cần ảnh chụp CCCD 2 mặt. Trung tâm hỗ trợ chụp ảnh chân dung miễn phí & làm hồ sơ nộp về trường.'
    },
    {
      step: '02',
      title: 'Học Lý Thuyết Online : 120h',
      time: 'Học Online 120h',
      icon: Monitor,
      color: 'var(--primary)',
      bg: 'var(--primary-tint)',
      description: 'Đào tạo lý thuyết linh hoạt qua hệ thống học trực tuyến 120 giờ chuẩn quy định GTVT.'
    },
    {
      step: '03',
      title: 'Học Lý Thuyết & Cabin Mô Phỏng 3D',
      time: 'Lý Thuyết & Cabin',
      icon: Monitor,
      color: 'var(--accent-gold-dark)',
      bg: 'var(--accent-gold-tint)',
      description: 'Học qua App 600 câu chuẩn GTVT + 120 tình huống mô phỏng. Thực hành lái xe trên cabin 3D.'
    },
    {
      step: '04',
      title: 'Thực Hành DAT Đường Trường & Sa Hình',
      time: 'Thực Hành DAT',
      icon: Car,
      color: 'var(--primary)',
      bg: 'var(--primary-tint)',
      description: 'Hoàn thành 710/810/825km DAT đường trường gắn chip GPS. Luyện thành thạo 11 bài sa hình (Dừng xe ngang dốc, ghép xe dọc, ghép xe ngang...).'
    },
    {
      step: '05',
      title: 'Thi Chứng Chỉ Tốt Nghiệp Khóa Đào Tạo',
      time: 'Thi Tốt Nghiệp',
      icon: Award,
      color: 'var(--primary)',
      bg: 'var(--primary-tint)',
      description: 'Thi kiểm tra toàn diện Lý Thuyết, Mô Phỏng và Đường Trường để cấp chứng chỉ tốt nghiệp.'
    },
    {
      step: '06',
      title: 'Tổng Ôn Sa Hình & 2h Tập Xe Chip Tại Sân Thi',
      time: 'Ôn Thi Sa Hình',
      icon: Car,
      color: 'var(--accent-gold-dark)',
      bg: 'var(--accent-gold-tint)',
      description: 'Tổng ôn thi sa hình, thực hành 2 giờ trực tiếp trên xe chip sát hạch tại sân thi giúp quen sân và máy chấm điểm.'
    },
    {
      step: '07',
      title: 'Thi Sát Hạch GTVT & Cấp GPLX',
      time: 'Sát Hạch GTVT',
      icon: CreditCard,
      color: '#065F46',
      bg: 'var(--accent-emerald-tint)',
      description: 'Thi Sát Hạch Gồm 3 Phần: Thi Lý Thuyết, Sa Hình, Đường Trường. Cấp GPLX Điện Tử.'
    }
  ];

  return (
    <section id="roadmap" style={{
      padding: '5rem 0',
      background: 'var(--bg-main)',
      borderBottom: '1px solid var(--border-color)'
    }}>
      <div className="container">
        <div className="section-title-wrapper">
          <div className="badge badge-blue">
            <Sparkles size={16} />
            <span>Lộ Trình Chuẩn Sở GTVT</span>
          </div>
          <h2 className="section-title">
            Lộ Trình Đào Tạo <span className="text-gradient">7 Bước Bài Bản</span>
          </h2>
          <p className="section-subtitle">
            Học viên được đồng hành 1-thầy-1-trò từ ngày nộp hồ sơ đến khi cầm tấm bằng lái trên tay.
          </p>
        </div>

        {/* Vertical Roadmap Steps */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {steps.map((item, idx) => {
            const StepIcon = item.icon;
            return (
              <div
                key={idx}
                className="modern-card roadmap-card"
                style={{
                  padding: '1.35rem 1.5rem',
                  display: 'grid',
                  gridTemplateColumns: '60px 1fr',
                  alignItems: 'center',
                  gap: '1.25rem',
                  position: 'relative',
                  borderRadius: '14px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)'
                }}
              >
                {/* Step Icon */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    background: item.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto'
                  }}>
                    <StepIcon size={24} color={item.color} />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.35rem' }}>
                    <span style={{
                      fontSize: '0.8rem',
                      fontWeight: 900,
                      color: item.color,
                      letterSpacing: '0.05em'
                    }}>
                      BƯỚC {item.step}
                    </span>
                    <span style={{
                      fontSize: '0.76rem',
                      fontWeight: 700,
                      padding: '0.15rem 0.6rem',
                      borderRadius: '9999px',
                      background: 'var(--bg-main)',
                      color: 'var(--text-muted)'
                    }}>
                      {item.time}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.3rem', color: 'var(--text-main)' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div style={{
          marginTop: '3rem',
          textAlign: 'center',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: '16px',
          padding: '2rem 1.5rem',
          maxWidth: '850px',
          margin: '3rem auto 0 auto'
        }}>
          <h3 style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.45rem)', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
            Bạn chưa rõ mình phù hợp với lộ trình hạng bằng nào?
          </h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.25rem', fontSize: '0.92rem', lineHeight: 1.5 }}>
            Thầy Hồng sẽ trực tiếp tư vấn chi tiết lộ trình và sắp xếp lớp học theo thời gian rảnh của bạn.
          </p>
          <button
            onClick={() => onOpenRegister()}
            className="btn btn-gold"
            style={{ padding: '0.85rem 1.85rem', width: '100%', maxWidth: '380px' }}
          >
            Đăng Ký Tư Vấn Lộ Trình Miễn Phí
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .roadmap-card {
            grid-template-columns: 44px 1fr !important;
            gap: 0.85rem !important;
            padding: 1.1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
