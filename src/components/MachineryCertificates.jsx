import React from 'react';
import {
  HardHat,
  Construction,
  Truck,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

// Official Zalo Brand Icon SVG – accurate "Z" lettermark
const ZaloIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={{ flexShrink: 0 }}>
    <rect width="48" height="48" rx="12" fill="#0068FF"/>
    <path d="M32.5 10H15.5C12.46 10 10 12.46 10 15.5V32.5C10 35.54 12.46 38 15.5 38H32.5C35.54 38 38 35.54 38 32.5V15.5C38 12.46 35.54 10 32.5 10Z" fill="#0068FF"/>
    <path d="M29.8 14.5H18.2C17.54 14.5 17 15.04 17 15.7V17.6C17 17.82 17.05 18.04 17.14 18.24L24.5 31.5H17.8C17.36 31.5 17 31.86 17 32.3V33.3C17 33.74 17.36 34.1 17.8 34.1H30C30.66 34.1 31.2 33.56 31.2 32.9V31C31.2 30.78 31.15 30.56 31.06 30.36L23.7 17.1H29.8C30.24 17.1 30.6 16.74 30.6 16.3V15.3C30.6 14.86 30.24 14.5 29.8 14.5Z" fill="white"/>
  </svg>
);

// Official Facebook Fanpage Brand Icon SVG
const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#1877F2" style={{ flexShrink: 0 }}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

export default function MachineryCertificates({ onSelectMachinery }) {
  const machineryList = [
    {
      id: 'forklift',
      title: 'Chứng Chỉ Vận Hành Xe Nâng',
      subtitle: 'Xe nâng điện, xe nâng dầu ( 1.5T - 10T ) trong nhà xưởng & kho bãi',
      tuition: 'Liên Hệ Để Có Thông Tin Chi Tiết',
      badge: 'Nhu Cầu Tuyển Dụng Cao',
      badgeColor: 'badge-gold',
      icon: Truck,
      iconColor: 'var(--primary)',
      iconBg: 'var(--primary-tint)',
      features: [
        'Cấp chứng chỉ Sơ cấp nghề chuẩn Bộ LĐ-TB&XH ( Vô thời hạn )',
        'Thực hành trực tiếp: Vận hành, nâng hạ hàng, xếp dỡ pallet an toàn',
        'Hướng dẫn quy trình an toàn lao động, kiểm tra bảo dưỡng xe nâng',
        'Thời gian linh hoạt: Có lớp cấp tốc 1 - 2 ngày cho người đã biết lái',
        'Hồ sơ đơn giản: Chỉ cần ảnh chụp CCCD 2 mặt'
      ]
    },
    {
      id: 'excavator',
      title: 'Chứng Chỉ Vận Hành Máy Xúc',
      subtitle: 'Máy xúc đào bánh xích, bánh lốp công trình xây dựng & san lấp',
      tuition: 'Liên Hệ Để Có Thông Tin Chi Tiết',
      badge: 'Công Trình & San Lấp',
      badgeColor: 'badge-blue',
      icon: Construction,
      iconColor: '#F59E0B',
      iconBg: 'rgba(245, 158, 11, 0.12)',
      features: [
        'Chứng chỉ có hồ sơ gốc lưu trữ toàn quốc, giá trị pháp lý vĩnh viễn',
        'Thực hành thao tác đào rãnh, múc móng, san gạt mặt bằng chuẩn kỹ thuật',
        'Quy chuẩn an toàn công trường, kỹ năng kiểm soát độ dốc & chống lật',
        'Lịch học linh hoạt cả Thứ 7 & Chủ Nhật, phù hợp người đang đi làm',
        'Hỗ trợ giới thiệu việc làm tại các nhà máy & công trình lớn'
      ]
    },
    {
      id: 'crane',
      title: 'Chứng Chỉ Vận Hành Máy Cẩu',
      subtitle: 'Cẩu tự hành ( cẩu thùng ), cẩu tháp, cẩu bánh xích / lốp tải trọng lớn',
      tuition: 'Liên Hệ Để Có Thông Tin Chi Tiết',
      badge: 'Kỹ Thuật Chuyên Nghiệp',
      badgeColor: 'badge-purple',
      icon: HardHat,
      iconColor: '#8B5CF6',
      iconBg: 'rgba(139, 92, 246, 0.12)',
      features: [
        'Cấp chứng chỉ thợ vận hành thiết bị nâng hạ & cần trục chuẩn GTVT',
        'Kỹ thuật đọc biểu đồ tải trọng ( Load Chart ), đánh tín hiệu & buộc móc cáp',
        'Thực hành điều khiển vươn cần, quay toa và hạ tải chuẩn xác từng centimet',
        'Hỗ trợ đào tạo bổ túc tay nghề thực tế theo yêu cầu',
        'Cấp chứng chỉ nhanh cho thợ đã có kinh nghiệm thực chiến'
      ]
    }
  ];

  return (
    <section id="machinery" style={{
      padding: '5rem 0',
      background: 'var(--bg-main)',
      borderBottom: '1px solid var(--border-color)',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-title-wrapper" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>
            <HardHat size={15} />
            <span>Đào Tạo Nghề &amp; Chứng Chỉ Vận Hành Máy</span>
          </div>

          <h2 className="section-title" style={{ fontSize: 'clamp(1.65rem, 3.8vw, 2.35rem)' }}>
            Đào Tạo &amp; Cấp Chứng Chỉ <span className="text-gradient">Xe Nâng • Máy Xúc • Máy Cẩu</span>
          </h2>
          <p className="section-subtitle" style={{ maxWidth: '780px', margin: '0.75rem auto 0 auto' }}>
            Đào tạo thực hành thực chiến 1-kèm-1, cấp chứng chỉ sơ cấp nghề chuẩn Bộ LĐ-TB&amp;XH có hồ sơ gốc, giá trị sử dụng vô thời hạn trên toàn quốc cho cá nhân và doanh nghiệp.
          </p>
        </div>

        {/* 3 Main Machine Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: '1.75rem',
          alignItems: 'stretch'
        }}>
          {machineryList.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.id}
                className="modern-card"
                style={{
                  padding: '1.75rem 1.5rem',
                  background: 'var(--bg-card)',
                  border: '1.5px solid var(--border-color)',
                  borderRadius: '18px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                <div>
                  {/* Top Header Badge and Icon */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem'
                  }}>
                    <div style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      background: item.iconBg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <IconComp size={28} color={item.iconColor} />
                    </div>
                    <span className={`badge ${item.badgeColor}`} style={{ fontSize: '0.76rem' }}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.45rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1.15rem' }}>
                    {item.subtitle}
                  </p>

                  {/* Học Phí Trọn Gói Block with Fanpage & Zalo */}
                  <div style={{
                    background: 'var(--bg-main)',
                    borderRadius: '14px',
                    border: '1.5px solid var(--border-color)',
                    padding: '0.85rem 1rem',
                    marginBottom: '1.35rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.65rem'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '0.35rem'
                    }}>
                      <span style={{ fontSize: '0.86rem', fontWeight: 750, color: 'var(--text-muted)' }}>
                        Học Phí Trọn Gói:
                      </span>
                      <span style={{
                        fontSize: '0.85rem',
                        fontWeight: 850,
                        color: 'var(--primary)'
                      }}>
                        Liên Hệ Để Có Thông Tin Chi Tiết
                      </span>
                    </div>

                    {/* Direct Contact Buttons: Zalo | Fanpage */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                      gap: '0.5rem'
                    }}>

                      {/* Zalo Button 2 – Tư Vấn */}
                      <a
                        href="https://zalo.me/0336611194"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="machinery-social-link zalo"
                        title="Nhắn Zalo Tư Vấn: 0336.611.194"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.3rem',
                          padding: '0.45rem 0.35rem',
                          borderRadius: '9px',
                          background: 'rgba(0, 104, 255, 0.1)',
                          border: '1.5px solid rgba(0, 104, 255, 0.35)',
                          color: '#0068FF',
                          fontSize: '0.76rem',
                          fontWeight: 800,
                          textDecoration: 'none',
                          boxShadow: '0 2px 6px rgba(0, 104, 255, 0.12)',
                          flexDirection: 'column',
                          lineHeight: 1.3
                        }}
                      >
                        <ZaloIcon size={16} />
                        <span style={{ fontWeight: 900, letterSpacing: '0.01em' }}>0336.611.194</span>
                      </a>

                      {/* Fanpage Facebook Button */}
                      <a
                        href="https://www.facebook.com/share/1GuWF1te7x/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="machinery-social-link fanpage"
                        title="Nhắn tin Fanpage Facebook Thầy Hồng Dạy Lái"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.3rem',
                          padding: '0.45rem 0.35rem',
                          borderRadius: '9px',
                          background: 'rgba(24, 119, 242, 0.1)',
                          border: '1.5px solid rgba(24, 119, 242, 0.35)',
                          color: '#1877F2',
                          fontSize: '0.76rem',
                          fontWeight: 800,
                          textDecoration: 'none',
                          boxShadow: '0 2px 6px rgba(24, 119, 242, 0.12)',
                          flexDirection: 'column',
                          lineHeight: 1.3
                        }}
                      >
                        <FacebookIcon size={16} />
                        <span style={{ fontWeight: 900 }}>FANPAGE</span>
                      </a>
                    </div>
                  </div>

                  {/* Features List */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
                    {item.features.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.55rem',
                            fontSize: '0.88rem',
                            color: 'var(--text-muted)',
                            fontWeight: 400,
                            lineHeight: 1.5
                          }}
                        >
                          <CheckCircle2
                            size={16}
                            color="var(--primary)"
                            style={{ flexShrink: 0, marginTop: '3px' }}
                          />
                          <span>{feat}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Bottom Action Button */}
                <button
                  onClick={() => onSelectMachinery && onSelectMachinery(item.title)}
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    fontSize: '0.94rem',
                    borderRadius: '12px',
                    justifyContent: 'center',
                    gap: '0.45rem',
                    boxShadow: 'var(--shadow-primary)'
                  }}
                >
                  <span>ĐĂNG KÝ HỌC &amp; LẤY CHỨNG CHỈ</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .machinery-social-link {
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .machinery-social-link:hover {
          transform: translateY(-2px);
          filter: brightness(1.12);
        }
      `}</style>
    </section>
  );
}
