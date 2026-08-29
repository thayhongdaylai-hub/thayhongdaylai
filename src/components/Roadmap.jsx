import React from 'react';
import { FileText, Monitor, Car, Award, ChevronRight, Sparkles } from 'lucide-react';

export default function Roadmap({ onOpenRegister }) {
  const steps = [
    {
      step: '01',
      title: 'Đăng Ký & Hoàn Thiện Hồ Sơ',
      time: 'Ngay trong 24h',
      icon: FileText,
      color: 'var(--accent-blue)',
      description: 'Chỉ cần ảnh chụp CCCD 2 mặt. Trung tâm hỗ trợ chụp ảnh chân dung miễn phí & làm hồ sơ khám sức khỏe tận nơi.'
    },
    {
      step: '02',
      title: 'Học Lý Thuyết & Cabin Mô Phỏng 3D',
      time: 'Tuần 1 - Tuần 3',
      icon: Monitor,
      color: 'var(--accent-emerald)',
      description: 'Học qua App 600 câu chuẩn GTVT + 120 tình huống mô phỏng. Thực hành lái xe trên cabin 3D độ nét cao xử lý thời tiết xấu.'
    },
    {
      step: '03',
      title: 'Thực Hành DAT Đường Trường & Sa Hình',
      time: 'Tuần 4 - Tuần 10',
      icon: Car,
      color: 'var(--accent-orange)',
      description: 'Hoàn thành 800km DAT đường trường gắn chip GPS. Luyện thành thạo 11 bài sa hình (Dừng xe ngang dốc, ghép xe dọc, ghép xe ngang...).'
    },
    {
      step: '04',
      title: 'Thi Tốt Nghiệp & Thi Sát Hạch GTVT',
      time: 'Tuần 12 - Tuần 14',
      icon: Award,
      color: 'var(--accent-emerald)',
      description: 'Thi thử nghiệm trên xe cảm ứng chip để làm quen. Thi sát hạch chính thức dưới sự giám sát trực tiếp của Sở GTVT.'
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
            Lộ Trình Đào Tạo <span className="text-gradient">4 Bước Bài Bản</span>
          </h2>
          <p className="section-subtitle">
            Học viên được đồng hành 1-thầy-1-trò từ ngày nộp hồ sơ đến khi hoàn thành kỳ thi sát hạch.
          </p>
        </div>

        {/* Vertical / Horizontal Roadmap Steps */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
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
                  padding: '1.75rem 2rem',
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr 160px',
                  alignItems: 'center',
                  gap: '1.5rem',
                  position: 'relative'
                }}
              >
                {/* Step Number & Icon */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    boxShadow: 'var(--shadow-sm)'
                  }}>
                    <StepIcon size={28} color={item.color} />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.3rem' }}>
                    <span style={{
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      color: item.color,
                      letterSpacing: '0.05em'
                    }}>
                      BƯỚC {item.step}
                    </span>
                    <span style={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      padding: '0.15rem 0.6rem',
                      borderRadius: '9999px',
                      background: 'var(--bg-card-hover)',
                      color: 'var(--text-muted)'
                    }}>
                      {item.time}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.4rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    {item.description}
                  </p>
                </div>

                {/* Action button */}
                <div style={{ textAlign: 'right' }} className="roadmap-action">
                  <button
                    onClick={() => onOpenRegister()}
                    className="btn btn-secondary"
                    style={{ padding: '0.6rem 1.1rem', fontSize: '0.85rem' }}
                  >
                    <span>Xem Chi Tiết</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div style={{
          marginTop: '3.5rem',
          textAlign: 'center',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-highlight)',
          borderRadius: '1.5rem',
          padding: '2.25rem',
          maxWidth: '850px',
          margin: '3.5rem auto 0 auto'
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
            Bạn chưa rõ mình phù hợp với lộ trình hạng bằng nào?
          </h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.98rem' }}>
            Đội ngũ chuyên viên tuyển sinh của Thầy Hồng Dạy Lái sẽ tư vấn chi tiết lộ trình và sắp xếp lớp học theo thời gian rảnh của bạn.
          </p>
          <button
            onClick={() => onOpenRegister()}
            className="btn btn-primary"
            style={{ padding: '0.85rem 2rem' }}
          >
            Đăng Ký Tư Vấn Lộ Trình Miễn Phí
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .roadmap-card {
            grid-template-columns: 1fr !important;
            text-align: left !important;
          }
          .roadmap-action {
            text-align: left !important;
          }
        }
      `}</style>
    </section>
  );
}
