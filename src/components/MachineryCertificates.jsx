import React from 'react';
import {
  HardHat,
  Construction,
  Truck,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Clock,
  FileCheck
} from 'lucide-react';

export default function MachineryCertificates({ onSelectMachinery }) {
  const machineryList = [
    {
      id: 'forklift',
      title: 'Chứng Chỉ Vận Hành Xe Nâng',
      subtitle: 'Xe nâng điện, xe nâng dầu ( 1.5T - 10T ) trong nhà xưởng & kho bãi',
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

  const highlights = [
    {
      icon: FileCheck,
      title: 'Hồ Sơ Gốc Pháp Lý Chuẩn',
      desc: 'Chứng chỉ chuẩn Bộ Lao Động - TB&XH, có mã tra cứu hồ sơ gốc, giá trị vĩnh viễn trên toàn quốc.'
    },
    {
      icon: Clock,
      title: 'Đào Tạo & Cấp Nhanh',
      desc: 'Khai giảng liên tục hàng tuần. Hỗ trợ khóa học cấp tốc 1 - 2 ngày cho học viên đã có kinh nghiệm.'
    },
    {
      icon: HardHat,
      title: 'Thực Chiến 1-Kèm-1',
      desc: 'Thực hành trực tiếp trên máy công trình thật, giáo viên kèm cặp tỉ mỉ từng kỹ thuật thao tác.'
    },
    {
      icon: ShieldCheck,
      title: '100% Bao Đầu Ra',
      desc: 'Được đào tạo bài bản cho đến khi thành thạo tay nghề và tự tin nhận chứng chỉ.'
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
          alignItems: 'stretch',
          marginBottom: '3rem'
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
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                    {item.subtitle}
                  </p>

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
                          lineHeight: 1.5
                        }}
                      >
                        <CheckCircle2 size={16} color="var(--primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span>{feat}</span>
                      </div>
                    ))}
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

        {/* 4 Value Pillars */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
          gap: '1.25rem'
        }}>
          {highlights.map((h, idx) => {
            const HIcon = h.icon;
            return (
              <div
                key={idx}
                className="modern-card"
                style={{
                  padding: '1.25rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.85rem'
                }}
              >
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'var(--primary-tint)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '2px'
                }}>
                  <HIcon size={22} color="var(--primary)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                    {h.title}
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                    {h.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
