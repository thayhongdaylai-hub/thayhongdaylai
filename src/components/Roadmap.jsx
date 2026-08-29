import React from 'react';
import { FileText, Monitor, Car, Award, CreditCard, Sparkles } from 'lucide-react';

export default function Roadmap({ onOpenRegister }) {
  const steps = [
    {
      step: '01',
      title: 'Đăng Ký & Hoàn Thiện Hồ Sơ',
      time: 'Nộp Hồ Sơ Khai Giảng',
      icon: FileText,
      color: 'var(--accent-blue)',
      description: 'Chỉ cần ảnh chụp CCCD 2 mặt. Trung tâm hỗ trợ chụp ảnh chân dung miễn phí & làm hồ sơ nộp về trường.'
    },
    {
      step: '02',
      title: 'Học Lý Thuyết Online : 120h',
      time: 'Học Online 120h',
      icon: Monitor,
      color: 'var(--accent-emerald)',
      description: 'Đào tạo lý thuyết linh hoạt qua hệ thống học trực tuyến 120 giờ chuẩn quy định GTVT.'
    },
    {
      step: '03',
      title: 'Học Lý Thuyết & Cabin Mô Phỏng 3D',
      time: 'Lý Thuyết & Cabin',
      icon: Monitor,
      color: 'var(--accent-orange)',
      description: 'Học qua App 600 câu chuẩn GTVT + 120 tình huống mô phỏng. Thực hành lái xe trên cabin 3D.'
    },
    {
      step: '04',
      title: 'Thực Hành DAT Đường Trường & Sa Hình - Đường Trường',
      time: 'Thực Hành DAT',
      icon: Car,
      color: 'var(--accent-emerald)',
      description: 'Hoàn thành 710/810/825km DAT đường trường gắn chip GPS. Luyện thành thạo 11 bài sa hình (Dừng xe ngang dốc, ghép xe dọc, ghép xe ngang...).'
    },
    {
      step: '05',
      title: 'Thi Chứng Chỉ Tốt Nghiệp Kết Thúc Khóa Đào Tạo ( Thi Tốt Nghiệp )',
      time: 'Thi Tốt Nghiệp',
      icon: Award,
      color: 'var(--accent-blue)',
      description: 'Thi Lý Thuyết , Mô Phỏng , Đường Trường.'
    },
    {
      step: '06',
      title: 'Tổng ôn Thi Sa Hình , Thực Hành 2h Trên Xe Chip Tại Sân Thi.',
      time: 'Ôn Thi Sa Hình',
      icon: Car,
      color: 'var(--accent-orange)',
      description: 'Tổng ôn thi sa hình, thực hành 2 giờ trực tiếp trên xe chip sát hạch tại sân thi.'
    },
    {
      step: '07',
      title: 'Thi Sát Hạch GTVT & Cấp GPLX',
      time: 'Sát Hạch GTVT',
      icon: CreditCard,
      color: 'var(--accent-emerald)',
      description: 'Thi Sát Hạch Gồm 3 Phần : Thi Lý Thuyết , Sa Hình , Đường Trường. Cấp GPLX Điện Tử.'
    }
  ];

  return (
    <section id="roadmap" style={{
      padding: '5.5rem 0',
      background: 'var(--gradient-dark-card)',
      borderTop: '1px solid var(--border-color)',
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
                className="glass-card roadmap-card"
                style={{
                  padding: '1.25rem 1.5rem',
                  display: 'grid',
                  gridTemplateColumns: '60px 1fr',
                  alignItems: 'center',
                  gap: '1.25rem',
                  position: 'relative',
                  borderRadius: '1.25rem'
                }}
              >
                {/* Step Icon */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    boxShadow: 'var(--shadow-sm)'
                  }}>
                    <StepIcon size={22} color={item.color} />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.35rem' }}>
                    <span style={{
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      color: item.color,
                      letterSpacing: '0.05em'
                    }}>
                      BƯỚC {item.step}
                    </span>
                    <span style={{
                      fontSize: '0.76rem',
                      fontWeight: 600,
                      padding: '0.15rem 0.6rem',
                      borderRadius: '9999px',
                      background: 'var(--bg-card-hover)',
                      color: 'var(--text-muted)'
                    }}>
                      {item.time}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.3rem', lineHeight: 1.35 }}>{item.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div style={{
          marginTop: '2.5rem',
          textAlign: 'center',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-highlight)',
          borderRadius: '1.25rem',
          padding: '1.75rem 1.25rem',
          maxWidth: '850px',
          margin: '2.5rem auto 0 auto'
        }}>
          <h3 style={{ fontSize: 'clamp(1.2rem, 4vw, 1.5rem)', marginBottom: '0.5rem' }}>
            Bạn chưa rõ mình phù hợp với lộ trình hạng bằng nào?
          </h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.25rem', fontSize: '0.92rem', lineHeight: 1.5 }}>
            Đội ngũ chuyên viên tuyển sinh của Thầy Hồng Dạy Lái sẽ tư vấn chi tiết lộ trình và sắp xếp lớp học theo thời gian rảnh của bạn.
          </p>
          <button
            onClick={() => onOpenRegister()}
            className="btn btn-primary"
            style={{ padding: '0.85rem 1.75rem', width: '100%', maxWidth: '380px' }}
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
            padding: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
