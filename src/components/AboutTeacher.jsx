import React from 'react';
import { Award, ShieldCheck, HeartHandshake, Sparkles, CheckCircle2, UserCheck, Clock, Compass } from 'lucide-react';

export default function AboutTeacher() {
  const advantages = [
    {
      icon: HeartHandshake,
      title: 'Hướng Dẫn Tận Tâm',
      desc: 'Phương châm 1-Thầy-1-Trò, phong cách văn minh - lịch sự, giảng dạy kiên nhẫn, kèm cặp tỉ mỉ từng kỹ năng cho học viên.',
      badge: '1 Kèm 1'
    },
    {
      icon: Compass,
      title: 'Kinh Nghiệm Thực Tế',
      desc: 'Học thực chiến trên đường phố thật, xử lý điểm mù, đường đèo dốc, ngã tư đông đúc và kỹ năng lái xe an toàn suốt đời.',
      badge: 'Thực Chiến'
    },
    {
      icon: Clock,
      title: 'Lộ Trình Học Rõ Ràng',
      desc: 'Giáo trình chuẩn Bộ GTVT 2026, minh bạch học phí trọn gói 100%, ký cam kết hợp đồng không phát sinh bất kỳ phụ phí nào.',
      badge: 'Minh Bạch'
    },
    {
      icon: UserCheck,
      title: 'Hỗ Trợ Học Viên Tối Đa',
      desc: 'Thời gian học linh hoạt theo lịch rảnh của học viên , hỗ trợ đưa đón và làm thủ tục hồ sơ nhanh.',
      badge: 'Linh Hoạt'
    },
    {
      icon: Award,
      title: 'Tỷ Lệ Thi Đỗ Cao (99%)',
      desc: 'Cung cấp tài liệu độc quyền 250 câu ( cho xe máy ) và 600 câu ( cho ô tô ) + 120 tình huống mô phỏng và tặng giờ tập xe chip sát hạch giúp tự tin thi đạt ngay lần đầu.',
      badge: 'Tỷ Lệ Đậu 99%'
    }
  ];

  return (
    <section id="about-teacher" style={{
      padding: '4.5rem 0',
      background: 'var(--bg-main)',
      borderBottom: '1px solid var(--border-color)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrapper" style={{ marginBottom: '2.5rem' }}>
          <div className="badge badge-gold">
            <Sparkles size={15} />
            <span>Cam Kết Chất Lượng Đào Tạo Hàng Đầu</span>
          </div>
          <h2 className="section-title">
            Ưu Điểm Vượt Trội Tại <span className="text-gradient">Thầy Hồng Dạy Lái</span>
          </h2>
          <p className="section-subtitle">
            Hơn 10 năm đồng hành cùng hàng trăm học viên. Đảm bảo vững vàng tay lái, thông thạo luật giao thông và tự tin nhận bằng.
          </p>
        </div>

        {/* 5 Advantages Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: '1.5rem'
        }}>
          {advantages.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="modern-card"
                style={{
                  padding: '1.75rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative'
                }}
              >
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem'
                  }}>
                    <div style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'var(--primary-tint)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <IconComp size={24} color="var(--primary)" />
                    </div>
                    <span className="badge badge-blue">
                      {item.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>

                <div style={{
                  marginTop: '1.25rem',
                  paddingTop: '0.85rem',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'var(--primary)',
                  fontWeight: 700,
                  fontSize: '0.86rem'
                }}>
                  <CheckCircle2 size={16} />
                  <span>Cam kết chuẩn chất lượng</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
